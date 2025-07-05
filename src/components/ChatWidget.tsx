'use client';

import { useState, useRef, useEffect } from 'react';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [connectionError, setConnectionError] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };

    // --- Start of Fix ---
    // The API is "context-aware," so we must send the entire conversation history.
    // 1. Prepare the history to be sent to the API.
    const messagesToSend = [...messages, userMessage];

    // 2. Update the UI optimistically with the user's message and a placeholder for the assistant's reply.
    //    This is more efficient than two separate state updates.
    setMessages(prev => [...prev, userMessage, { role: 'assistant', content: '' }]);
    // --- End of Fix ---

    setInput('');
    setIsLoading(true);
    setConnectionError(false);

    try {
      // 3. Create the request body with the correct structure: { messages: [...] }
      const requestBody = { messages: messagesToSend };

      // Function to try a fetch with a specific URL
      const tryFetch = async (url: string) => {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'text/event-stream',
          },
          body: JSON.stringify(requestBody),
        });
        return response;
      };

      // Try primary instance first, then fallback to the backup
      let response;
      try {
        response = await tryFetch(process.env.NEXT_PUBLIC_LLM_INSTANCE!);
      } catch (firstError) {
        console.warn('Primary instance failed, trying backup instance...', firstError);
        try {
          response = await tryFetch(process.env.NEXT_PUBLIC_LLM_INSTANCE2!);
        } catch (secondError) {
          console.error('Both instances failed:', { firstError, secondError });
          throw new Error('LLM service is currently offline. Please try again later.');
        }
      }

      if (!response.ok) {
        // If API is not available, show a friendly message
        if (response.status === 0 || response.status >= 500) {
          throw new Error('Our AI assistant is currently offline. Please check back later or contact us directly.');
        }
        // For other client errors, show a more specific message
        const errorText = await response.text().catch(() => 'Service unavailable');
        console.error('API Error:', {
          status: response.status,
          statusText: response.statusText,
          error: errorText
        });
        throw new Error('The LLM is offline. Please try again later.');
      }
      
      if (!response.body) {
        console.error('No response body received');
        throw new Error('We received an unexpected response. Please try again.');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let buffer = ''; // Buffer to hold incomplete stream chunks

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        // Add the new chunk to our buffer
        buffer += decoder.decode(value, { stream: true });

        // Process all complete "data: {...}" messages in the buffer
        const messages = buffer.split('\n\n');
        
        // The last part of the buffer might be an incomplete message, so we keep it.
        buffer = messages.pop() || ''; 

        for (const message of messages) {
          if (message.startsWith('data: ')) {
            try {
              // Get the JSON part and parse it
              const jsonString = message.substring(6);
              const parsedData = JSON.parse(jsonString);
              
              // Extract the actual content token
              const content = parsedData.messages[0]?.content;

              if (content) {
                // Update the UI with the extracted content
                setMessages(prevMessages => {
                  const lastMessage = prevMessages[prevMessages.length - 1];
                  if (lastMessage && lastMessage.role === 'assistant') {
                    const updatedMessages = [...prevMessages];
                    updatedMessages[updatedMessages.length - 1] = {
                      ...lastMessage,
                      content: lastMessage.content + content,
                    };
                    return updatedMessages;
                  }
                  return prevMessages;
                });
              }
            } catch (e) {
              console.error('Failed to parse stream chunk:', message, e);
            }
          }
        }
      }

    } catch (error: unknown) {
      console.error('Error in chat submission:', error);
      setConnectionError(true);

      let errorMessage = 'I\'m having trouble connecting to the chat service. Please try again later.';
      if (error instanceof Error) {
        if (error.message.includes('Failed to fetch')) {
          errorMessage = 'Unable to connect to the chat service. The server might be down or you might be offline.';
        } else {
          // Display the more specific API error
          errorMessage = `${error.message}`;
        }
      }

      setMessages(prevMessages => {
        const lastMessage = prevMessages[prevMessages.length - 1];
        // Update the placeholder message with the error
        if (lastMessage && lastMessage.role === 'assistant' && lastMessage.content === '') {
          const updatedMessages = [...prevMessages];
          updatedMessages[updatedMessages.length - 1] = {
            ...lastMessage,
            content: errorMessage,
          };
          return updatedMessages;
        }
        // Or add a new error message if something went wrong before the placeholder was added
        return [...prevMessages, { role: 'assistant', content: errorMessage }];
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            className="w-[360px] h-[500px] bg-[rgb(var(--surface))] rounded-xl shadow-2xl flex flex-col overflow-hidden border border-[rgba(var(--border),0.5)] backdrop-blur-lg"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[rgba(var(--primary-rgb),0.1)] to-[rgba(var(--accent-rgb),0.15)] p-4 flex justify-between items-center border-b border-[rgba(var(--border),0.5)]">
              <div className="flex flex-col">
                <h3 className="font-medium text-lg bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
                  Vaibhav's AI Assistant
                </h3>
                <p className="text-xs text-[rgba(255,255,255,0.5)]">Ask me about Vaibhav's work, skills, or projects.</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[rgba(255,255,255,0.7)] hover:text-white transition-colors p-1 rounded-full hover:bg-[rgba(255,255,255,0.05)]"
                aria-label="Close chat"
              >
                <FiX size={20} />
              </button>
            </div>
            
            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
              <div className="space-y-4">
                {messages.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-[300px] text-center p-6">
                    <div className={`w-16 h-16 rounded-full ${connectionError ? 'bg-red-500/10' : 'bg-[rgba(var(--primary-rgb),0.1]'} flex items-center justify-center mb-4`}>
                      {connectionError ? (
                        <FiX className="text-red-400" size={28} />
                      ) : (
                        <FiMessageSquare className="text-[var(--primary)]" size={28} />
                      )}
                    </div>
                    <h4 className="text-lg font-medium mb-2">
                      {connectionError ? 'Chat Unavailable' : 'How can I help?'}
                    </h4>
                    <p className="text-sm text-[rgba(255,255,255,0.6)] max-w-[280px]">
                      {connectionError 
                        ? 'The chat service is currently offline. Please try again later.'
                        : 'Ask me anything about this page, Vaibhav work, or projects.'}
                    </p>
                  </div>
                ) : (
                  messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] p-3 rounded-xl text-sm break-words ${
                          message.role === 'user'
                            ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white rounded-br-none'
                            : 'bg-[rgba(255,255,255,0.05)] text-[rgba(255,255,255,0.9)] rounded-bl-none border border-[rgba(255,255,255,0.05)]'
                        }`}
                      >
                        {message.content}
                        {/* Display a blinking cursor for the last streaming message */}
                        {isLoading && message.role === 'assistant' && index === messages.length - 1 && (
                          <span className="inline-block w-2 h-4 bg-white animate-pulse ml-1"></span>
                        )}
                      </div>
                    </motion.div>
                  ))
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-[rgba(var(--border),0.5)] bg-[rgba(10,10,10,0.7)]">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 p-3 text-sm rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-30 text-[rgba(255,255,255,0.9)] placeholder-[rgba(255,255,255,0.3)] transition-all disabled:opacity-50"
                  disabled={isLoading || connectionError}
                />
                <button
                  type="submit"
                  disabled={isLoading || connectionError || !input.trim()}
                  className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white p-3 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-50 transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FiSend size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white p-4 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(157,127,234,0.3)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--background)] transition-all"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <FiX size={24} /> : <FiMessageSquare size={24} />}
      </motion.button>
    </div>
  );
}