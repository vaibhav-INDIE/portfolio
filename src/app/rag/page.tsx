// app/rag-document-qa/page.tsx
import { Metadata } from 'next';
import React from 'react'; // Good practice, though often implicit in Next.js

export const metadata: Metadata = {
  title: 'Advanced RAG for Documents | Vaibhav&apos;s Portfolio',
  description: 'An interactive RAG system to chat with complex Excel and PDF files, built with Streamlit and Gemini.',
};

// An array for the tech stack to make it easy to manage
const techStack = ['Streamlit', 'Python', 'Gemini API', 'Pandas', 'RAG', 'PyMuPDF', 'Next.js', 'TailwindCSS'];

// A reusable component for our consistent heading style
const SectionHeader = ({ title, level = 2, className = '' }: { title: string; level?: 1 | 2 | 3 | 4 | 5 | 6; className?: string }) => {
  // Create a type for valid heading elements
  type HeadingTag = `h${1 | 2 | 3 | 4 | 5 | 6}`;
  const Tag = `h${level}` as HeadingTag;
  const textSize = level === 2 ? 'text-2xl' : 'text-xl';

  return (
    <div className={`inline-block ${className}`}>
      <Tag className={`${textSize} font-bold`}>{title}</Tag>
      <div className="mt-2 h-1 w-full rounded-full bg-gradient-to-r from-purple-400 to-purple-600" />
    </div>
  );
};

export default function RagPage() {
  return (
    <div className="container mx-auto px-4 pt-28 pb-16"> {/* Added more bottom padding */}
      <h1 className="text-3xl font-bold mb-4">Advanced RAG for Documents</h1>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
        This is a live, interactive demo of the RAG system. Feel free to upload a PDF or an Excel file (even a complex one!) to ask questions.
      </p>
      
      {/* The embedded Streamlit App */}
      <div className="w-full h-[700px] rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
        <iframe
          // IMPORTANT: This URL points to your live Streamlit app
          src="https://rag-for-excel-analysis-2qzap8qq6szumcxatyyaj8.streamlit.app/?embed=true&theme=dark"
          width="100%"
          height="100%"
          className="border-0"
          title="Advanced RAG for Documents"
          allowFullScreen
        />
      </div>

      {/* GitHub Link Button */}
      <div className="mt-8">
        <a
          // IMPORTANT: This URL points to your project's GitHub repo
          href="https://github.com/vaibhav-INDIE/RAG-for-excel-analysis"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors font-semibold"
        >
          View on GitHub
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
      
      {/* --- SECTION: Project Overview --- */}
      <div className="mt-16">
        {/* --- MODIFIED: Using SectionHeader component --- */}
        <SectionHeader title="Project Overview" level={2} className="mb-6" />
        
        <div className="prose prose-lg dark:prose-invert max-w-none mb-8 text-gray-700 dark:text-gray-300">
            <h3 className="text-xl font-semibold">The Challenge</h3>
            <p>
              Standard Retrieval-Augmented Generation (RAG) systems often struggle with real-world business documents, especially Excel files with merged cells, hierarchical headers, and complex layouts. Simply converting rows to text loses critical structural context, leading to inaccurate or incomplete answers.
            </p>
            <h3 className="text-xl font-semibold mt-6">The Solution</h3>
            <p>
              This application solves the problem by providing an intelligent pre-processing layer. Before vectorization, the user can configure how each document is interpreted. This includes strategies like forward-filling to handle merged cells and converting entire tables to Markdown to preserve their 2D structure. This ensures the Large Language Model receives context that is both rich and accurate, dramatically improving the quality of the generated answers.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
            {/* Key Features */}
            <div>
                {/* --- MODIFIED: Using SectionHeader component --- */}
                <SectionHeader title="Key Features" level={3} className="mb-4" />
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Multi-file upload for PDF and Excel (.xlsx).</li>
                    <li>Interactive UI to choose data processing strategies.</li>
                    <li>Intelligently handles merged cells via forward-filling.</li>
                    <li>Converts complex tables to Markdown to preserve structure.</li>
                    <li>Powered by Google&apos;s Gemini API for embedding and generation.</li>
                    <li>Deployed on Streamlit Cloud with secure API key management.</li>
                </ul>
            </div>
            {/* Technology Stack */}
            <div>
                {/* --- MODIFIED: Using SectionHeader component --- */}
                <SectionHeader title="Technology Stack" level={3} className="mb-4" />
                <div className="flex flex-wrap gap-3">
                    {techStack.map((tech) => (
                        <span 
                          key={tech} 
                          // --- MODIFIED: Using purple theme for pills ---
                          className="bg-purple-100/80 text-purple-900 dark:bg-purple-900/40 dark:text-purple-200 text-sm font-medium px-4 py-1.5 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}