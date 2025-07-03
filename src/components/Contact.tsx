// components/Contact.tsx

'use client'

import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Loader, CheckCircle, AlertTriangle } from 'lucide-react'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name || !email || !message) {
      setStatus('error')
      setStatusMessage('Please fill in all fields.')
      return
    }

    setStatus('loading')
    setStatusMessage('Sending your message...')

    try {
      // Use environment variable with fallback
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://whatsapp-approval-llm.onrender.com/contact';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name: name.trim(),
          email: email.trim(),
          message: message.trim()
        }),
      })

      const result = await response.json()
      console.log('Server response:', result);

      if (!response.ok) {
        const errorMessage = result.error || 
                           result.message || 
                           `Server responded with status ${response.status}`;
        console.error('Error details:', errorMessage);
        throw new Error(errorMessage);
      }

      setStatus('success')
      setStatusMessage('Message sent successfully! I\'ll get back to you soon via WhatsApp.')
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Failed to send message. Please try again later or contact me directly via email.';
      setStatusMessage(errorMessage);
    }
  }

  return (
    <section id="contact" className="section py-24 bg-black">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          className="flex flex-col items-center mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-[rgba(var(--primary-rgb),0.8)] to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-flow-x">
            Get In Touch
          </h2>
          <p className="mt-4 text-[rgba(255,255,255,0.7)] max-w-xl">
            Have a question, a project idea, or just want to connect? Drop me a message below.
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[rgba(var(--primary-rgb),0.7)] to-transparent mt-4"></div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-input min-h-[150px]"
            rows={5}
            required
          ></textarea>
          
          <div className="flex flex-col items-center gap-4">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn btn-primary w-full md:w-auto flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {status === 'loading' ? (
                <>
                  <Loader className="animate-spin" size={18} />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {statusMessage && (
              <div className={`mt-4 text-sm flex items-center gap-2 ${
                status === 'success' ? 'text-green-400' : 'text-red-400'
              }`}>
                {status === 'success' && <CheckCircle size={16} />}
                {status === 'error' && <AlertTriangle size={16} />}
                <span>{statusMessage}</span>
              </div>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact