'use client'
import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { projects } from '../data/portfolio-data'
import { Project } from '../types/ProjectTypes'
import Projects from '../components/Projects'

// Get unique categories for project filtering
const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))]

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [category, setCategory] = useState('All');
  const heroRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  if (!mounted) {
    return null; // Return null on server-side
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[rgba(16,16,16,0.8)]"></div>

        <motion.div 
          className="container mx-auto px-6 relative z-10 max-w-5xl"
          style={{ opacity, scale }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center md:text-left max-w-3xl mx-auto"
          >
            {/* Profile Photo Circle */}
            <motion.div 
              className="relative w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full overflow-hidden border-4 border-[rgba(var(--primary-rgb),0.5)] glow-border"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img 
                src="portfolio/profile.jpg" 
                alt="Vaibhav Jain" 
                width={160} 
                height={160} 
                className="rounded-full border-4 object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(var(--primary-rgb),0.1)] to-transparent"></div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl xl:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span>Vaibhav Jain</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="h-8 md:h-10 mb-6"
            >
              <TypeAnimation
                sequence={[
                  'AI Innovator',
                  1500,
                  'Full-Stack Developer',
                  1500,
                  'Data Enthusiast',
                  1500,
                ]}
                wrapper="p"
                speed={50}
                className="text-xl md:text-2xl text-[rgba(255,255,255,0.7)]"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-[rgba(255,255,255,0.7)] max-w-xl mb-8 text-base md:text-lg text-center"
            >
              Crafting intelligent solutions and elegant interfaces. 
              Specialized in AI, machine learning, and full-stack web development.
            </motion.p>
            
            {/* Social Links - Now below the text */}
            <motion.div 
              className="flex gap-5 mb-8 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <a
                href="https://github.com/vaibhav-INDIE"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-[rgba(255,255,255,0.1)] transition-colors relative group overflow-hidden"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 group-hover:text-primary transition-colors duration-300" />
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-md blur-sm transition-opacity duration-300"></span>
              </a>
              <a
                href="https://www.linkedin.com/in/vaibhav-jain-3b7422204/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-[rgba(255,255,255,0.1)] transition-colors relative group overflow-hidden"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors duration-300" />
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-md blur-sm transition-opacity duration-300"></span>
              </a>
              <a
                href="mailto:vaibhavtarun52@gmail.com"
                className="p-2 rounded-md hover:bg-[rgba(255,255,255,0.1)] transition-colors relative group overflow-hidden"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 group-hover:text-primary transition-colors duration-300" />
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-md blur-sm transition-opacity duration-300"></span>
              </a>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <a
                href="#projects"
                className="btn btn-primary relative overflow-hidden group"
              >
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></span>
              </a>
              <a
                href="/2228077_RAG_resume.pdf"
                className="btn btn-outline flex items-center gap-2 relative overflow-hidden group"
          target="_blank"
          rel="noopener noreferrer"
              >
                <FileText size={16} className="relative z-10" />
                <span className="relative z-10">Resume</span>
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[rgba(255,255,255,0.7)]"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </section>

      {/* Projects Section */}
      <Projects 
        projects={projects}
        categories={categories}
        currentCategory={category}
        onSetCategory={setCategory}
        selectedProject={selectedProject}
        onSetSelectedProject={setSelectedProject}
      />
    </main>
  )
}
