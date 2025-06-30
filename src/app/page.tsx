'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, FileText, ChevronRight, ExternalLink, X } from 'lucide-react'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'

// Import data and types from data file
import { skills, timeline, certificates, type Certificate, workExperiences } from '../data/portfolio-data'
import { type Project } from '../components/Projects'; // Added import for Project interface

// Project data
const projects: Project[] = [
  {
    title: 'AI.Rassoi App',
    description: 'An AI-powered health buddy with Diet recommendations, Calorie tracking, Life Style Analysis, and recipe suggestions.',
    longDescription: `An AI-powered health buddy with Diet recommendations, Calorie tracking, Life Style Analysis, and recipe suggestions. \n\nKey Features:\n• Personalized recipe recommendations using Gemini API\n• Calories and Macronutrient recognition from images\n• Dietary restriction handling\n• Step by Step Cooking Instructions with ChatBot\n• Custom Recipe Generator from Raw Ingredients`,
    tags: ['Gemini API', 'Dart', 'Flutter', 'SQL'],
    technologies: ['AI', 'Full Stack','Prompt Engineering','Mobile App','Diet Recommendation'],
    image: '/projects/airassoi/playstore_banner.png',
    github: 'https://github.com/vaibhav-INDIE/Ai.Rassoi',
    demo: 'https://www.airassoi.com',
    category: 'AI',
    date: '2024',
    team: 'Me + 1',
    achievements: ['Selected for KIIT Ideation 1.0 Round 2', 'End to End Health Care App'],
    media: [
      { type: 'image', url: '/projects/airassoi/diet_plan given.png', caption: 'Given Diet plan from User Profile' },
      { type: 'image', url: '/projects/ai-rassoi-2.png', caption: 'Ingredient Recognition Demo' },
      { type: 'video', url: '/projects/ai-rassoi-demo.mp4', caption: 'App Walkthrough' }
    ]
  },
  {
    title: 'Hate Speech Recognition',
    description: 'Machine learning model for hate speech detection using patient data, achieving 96% accuracy on the Kaggle dataset.',
    longDescription: `A ANN model for hate speech detection using patient data, achieving 96% accuracy on the Kaggle dataset.\n\nKey Features:\n• 96% prediction accuracy\n• Feature importance analysis\n• Risk factor visualization\n• Comprehensive documentation`,
    tags: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Matplotlib'],
    technologies: ['AI', 'Machine Learning', 'Deep Learning','NLP'],
    image: '/projects/hate_speech/intersection.png',
    github: 'https://github.com/vaibhav-INDIE/Hate-Speech-by-ANN',
    demo: 'https://github.com/vaibhav-INDIE/Hate-Speech-by-ANN',
    category: 'Data Science',
    date: '2024',
    team: 'Solo Project',
    achievements: ['96% accuracy on test set', 'Research Paper'],
    media: [
      { type: 'image', url: '/projects/diabetes-1.png', caption: 'Model Performance Metrics' },
      { type: 'image', url: '/projects/diabetes-2.png', caption: 'Feature Importance Analysis' }
    ]
  },
  {
    title: 'Genetic Algorithm for Math Reasoning',
    description: 'Implementation of genetic algorithms to solve complex mathematical reasoning problems and optimize solutions.',
    longDescription: `An innovative approach to solving complex mathematical problems using genetic algorithms combined with LLM-based reasoning. The system evolves solutions through generations while maintaining mathematical validity.\n\nKey Features:\n• LLM-powered fitness evaluation\n• Multi-objective optimization\n• Solution diversity preservation\n• Real-time visualization\n• Export capabilities`,
    tags: ['Python', 'NumPy', 'Matplotlib', 'Locally Hosted LLM', 'vLLM'],
    technologies: ['AI', 'Algorithms'],
    image: '/projects/GN/GN_final.png',
    github: '',
    demo: '',
    category: 'AI',
    date: '2025',
    team: 'Research Project',
    achievements: ['Novel approach to mathematical reasoning', 'Published research paper'],
    media: []
  },
];

// Get unique categories for project filtering
const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))]

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [category, setCategory] = useState('All');
  const heroRef = useRef<HTMLDivElement>(null)
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [popupImageUrl, setPopupImageUrl] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  // Move these inside the component:
  const certificateCategories = ['All', ...Array.from(new Set(certificates.map(cert => cert.category)))]
  const [certificateCategory, setCertificateCategory] = useState('All');

  if (!mounted) return null

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
              <Image 
                src="/profile.jpg" 
                alt="Vaibhav Jain" 
                fill
                sizes="(max-width: 768px) 128px, 160px"
                priority
                className="object-cover"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"%3E%3Crect width="160" height="160" fill="%23222"%3E%3C/rect%3E%3Ctext x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="40" fill="%239d7fea"%3EVJ%3C/text%3E%3C/svg%3E';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(var(--primary-rgb),0.1)] to-transparent"></div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-4"
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


      {/* Timeline Section */}
      <section id="timeline" className="section py-24 bg-gradient-to-b from-[#0a0a0a] to-[#181818]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/80 to-white">My Journey</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4 rounded-full"></div>
          </div>
          
          {/* Creative Vertical Timeline */}
          <div className="relative">
            {/* White glowing vertical line for timeline */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[4px] bg-white/60 z-10 shadow-[0_0_24px_4px_rgba(255,255,255,0.25)]" />
            {/* Timeline events */}
            <div className="space-y-24 md:space-y-28 relative z-20">
              {timeline.map((event, index) => (
                <div key={index} className="relative">
                  {/* Event year marker */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-20">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center relative z-10 border-2 border-primary/50 shadow-lg">
                        <div className="absolute inset-1 rounded-full bg-[#101010] blur-[2px] z-0" />
                        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0c0c0c] z-10" />
                        {event.icon ? (
                          React.createElement(event.icon, { 
                            size: 24, 
                            className: "text-primary relative z-20" 
                          })
                        ) : (
                          <div className="w-3 h-3 bg-primary rounded-full relative z-20"></div>
                        )}
                      </div>
                      <div className="mt-2 px-5 py-1.5 rounded-full bg-[#141414] border border-[#333] shadow-md">
                        <span className="text-lg font-bold text-primary">{event.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content layout - alternating sides on desktop */}
                  <div className="md:grid md:grid-cols-12 items-start pt-6">
                    {/* Left content (even indices) */}
                    <div className={`col-span-5 ${index % 2 === 0 ? 'block' : 'hidden md:block'}`}>
                      {index % 2 === 0 && (
                        <div className="relative group md:pr-12">
                          {/* Mobile year+icon badge */}
                          <div className="flex items-center gap-3 mb-3 md:hidden">
                            <div className="p-2 rounded-full bg-[#141414] border border-primary/30">
                              {event.icon ? React.createElement(event.icon, { size: 18, className: "text-primary" }) : null}
                            </div>
                            <span className="text-primary font-bold">{event.year}</span>
                          </div>
                          
                          <div className="p-6 rounded-lg bg-[#121212] border border-[#292929] shadow-lg hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                            <h3 className="text-xl font-bold text-white mb-4 border-l-2 border-primary pl-3">{event.title}</h3>
                            <ul className="space-y-3">
                              {event.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-gray-300 flex items-start group/item">
                                  <span className="text-primary mr-2.5 mt-1 transition-transform duration-300 group-hover/item:scale-125">•</span>
                                  <span className="group-hover/item:text-white transition-colors duration-300">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Center column for spacing */}
                    <div className="col-span-2 hidden md:block" />
                    
                    {/* Right content (odd indices) */}
                    <div className={`col-span-5 ${index % 2 === 1 ? 'block' : 'hidden md:block'}`}>
                      {index % 2 === 1 && (
                        <div className="relative group md:pl-12">
                          {/* Mobile year+icon badge */}
                          <div className="flex items-center gap-3 mb-3 md:hidden">
                            <div className="p-2 rounded-full bg-[#141414] border border-primary/30">
                              {event.icon ? React.createElement(event.icon, { size: 18, className: "text-primary" }) : null}
                            </div>
                            <span className="text-primary font-bold">{event.year}</span>
                          </div>
                          
                          <div className="p-6 rounded-lg bg-[#121212] border border-[#292929] shadow-lg hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                            <h3 className="text-xl font-bold text-white mb-4 border-l-2 border-primary pl-3">{event.title}</h3>
                            <ul className="space-y-3">
                              {event.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-gray-300 flex items-start group/item">
                                  <span className="text-primary mr-2.5 mt-1 transition-transform duration-300 group-hover/item:scale-125">•</span>
                                  <span className="group-hover/item:text-white transition-colors duration-300">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Timeline end indicator */}
            <div className="relative mt-12 pt-6 flex justify-center">
              <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
            </div>
            {/* Section separator for visual separation */}
            <div className="my-16 h-1 w-full bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"></div>
          </div>
        </div>
      </section>
      {/* End Timeline Section */}

      {/* Work Experience Section */}
      <section id="work-experience" className="section py-24 bg-gradient-to-b from-[#181818] to-[#232323]">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 section-title">Work Experience</h2>
          <div className="grid grid-cols-1 gap-8">
            {workExperiences.map((exp, idx) => (
              <div key={idx} className="card flex flex-col md:flex-row items-stretch gap-0 bg-[#1a1a1a] border border-[#292929] shadow-lg hover:shadow-primary/10 transition-all overflow-hidden">
                {/* Left: Company logo */}
                <div className="flex-shrink-0 flex items-center justify-center bg-[#191919] md:w-56 w-full md:h-auto h-40 border-b md:border-b-0 md:border-r border-[#232323]">
                  <img src={exp.image} alt={exp.company + ' logo'} className="object-contain max-h-32 max-w-40 w-auto h-auto" />
                </div>
                {/* Right: Content */}
                <div className="flex flex-col flex-1 p-6 gap-3 justify-between">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-1">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <p className="text-[rgba(255,255,255,0.6)] text-sm md:text-right">{exp.date}</p>
                  </div>
                  <ul className="list-disc pl-5 text-[rgba(255,255,255,0.8)] mb-2 space-y-1">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="badge text-xs">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section py-24 bg-[rgba(28,28,28,1)]">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 section-title">Skills &amp; Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((category, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start mb-4">
                  {category.icon && (
                    <div className="mr-4 text-[rgba(255,255,255,0.7)]">
                      <category.icon size={24} />
                    </div>
                  )}
                  <h3 className="text-xl font-medium">{category.category}</h3>
                </div>
                <ul className="space-y-2 text-[rgba(255,255,255,0.7)]">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <ChevronRight size={14} className="mr-2 opacity-60" />
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 section-title">My Projects</h2>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`btn text-sm ${category === cat ? 'btn-primary' : 'btn-outline'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={category} // Re-trigger animation when category changes
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects
                .filter((p) => category === 'All' || p.category === category)
                .map((project, index) => (
                  <motion.div 
                    key={project.title + index} 
                    className="card project-card group bg-[rgba(28,28,28,1)] border border-[rgba(38,38,38,1)] hover:border-[rgba(255,255,255,0.2)] transition-all duration-300 overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={project.image || '/placeholder-image.png'} // Fallback image
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                      <p className="text-[rgba(255,255,255,0.7)] text-sm mb-4 line-clamp-3 h-[60px]">{project.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-xs uppercase text-[rgba(255,255,255,0.5)] mb-1.5">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {(project.tags || project.technologies)?.slice(0, 4).map((tag) => (
                            <span key={tag} className="badge text-xs">{tag}</span>
                          ))}
                          {(project.tags || project.technologies)?.length > 4 && (
                             <span className="badge text-xs">+{(project.tags || project.technologies).length - 4}</span>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-auto pt-4 border-t border-[rgba(38,38,38,1)]">
                        <div className="flex gap-3">
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.6)] hover:text-white transition-colors" aria-label={`${project.title} GitHub`}>
                              <Github size={18} />
                            </a>
                          )}
                          {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.6)] hover:text-white transition-colors" aria-label={`${project.title} Live Demo`}>
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>
                        <button 
                          onClick={() => setSelectedProject(project)} 
                          className="btn btn-xs btn-outline-subtle hover:btn-primary"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <AnimatePresence>
            <motion.div 
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                className="modal-content max-w-3xl w-[90%] bg-[rgba(24,24,24,1)] border border-[rgba(48,48,48,1)] rounded-xl shadow-2xl"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[rgba(38,38,38,0.8)] text-white/70 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
                
                <div className="max-h-[85vh] overflow-y-auto custom-scrollbar">
                  {selectedProject.image && (
                    <div className="relative w-full h-64 md:h-80 bg-[rgba(20,20,20,1)]">
                      <Image 
                        src={selectedProject.image || '/placeholder-image.png'}
                        alt={selectedProject.title}
                        layout="fill"
                        objectFit="contain" // Use 'contain' to see the whole image
                        className="rounded-t-lg"
                      />
                    </div>
                  )}
                  
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{selectedProject.title}</h3>
                    
                    <p className="text-[rgba(255,255,255,0.8)] mb-6 whitespace-pre-line">
                      {selectedProject.longDescription || selectedProject.description}
                    </p>
                    
                    {selectedProject.achievements && selectedProject.achievements.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm uppercase tracking-wider text-[rgba(255,255,255,0.5)] mb-2">Key Achievements</h4>
                        <ul className="list-disc list-inside space-y-1 text-[rgba(255,255,255,0.7)]">
                          {selectedProject.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="mb-6">
                      <h4 className="text-sm uppercase tracking-wider text-[rgba(255,255,255,0.5)] mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {(selectedProject.tags || selectedProject.technologies)?.map((tech, idx) => (
                          <span key={idx} className="badge bg-[rgba(38,38,38,1)] text-[rgba(255,255,255,0.8)]">{tech}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-[rgba(48,48,48,1)]">
                      {selectedProject.github && (
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline flex items-center gap-2">
                          <Github size={18} />
                          <span>View on GitHub</span>
                        </a>
                      )}
                      {selectedProject.demo && (
                        <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary flex items-center gap-2">
                          <ExternalLink size={18} />
                          <span>View Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </section>

      
      {/* Certificates Section */}      
      
      <section id="certificates" className="section py-24 bg-[rgba(28,28,28,1)]">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 section-title">Certificates</h2>

          {/* Certificate Filter Bar */}
          <div className="flex flex-wrap gap-3 mb-8">
            {certificateCategories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full border border-[rgba(255,255,255,0.12)] text-sm font-medium transition-colors duration-200 ${certificateCategory === cat ? 'bg-white text-black shadow-lg' : 'bg-transparent text-white/80 hover:bg-white/10'}`}
                onClick={() => setCertificateCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates
              .filter(cert => certificateCategory === 'All' || cert.category === certificateCategory)
              .map((cert, index) => (
              <div 
                key={index} 
                className="card certificate-card cursor-pointer group hover:border-[rgba(255,255,255,0.2)]"
                onClick={() => setActiveCertificate(cert)}
              >
                <div className="flex items-start">
                  {/* Certificate thumbnail */}
                  <div className="relative w-1/3 border-r border-[rgba(38,38,38,1)]">
                    <div className="p-2">
                      <img 
                        src={cert.image} 
                        alt={cert.name}
                        className="certificate-image w-full opacity-90 group-hover:opacity-100"
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                      />
                    </div>
                  </div>
                  
                  {/* Certificate details */}
                  <div className="w-2/3 p-5">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-medium mb-1">{cert.name}</h3>
                        <p className="text-[rgba(255,255,255,0.6)] text-sm">{cert.issuer} · {cert.date}</p>
                      </div>
                      {cert.icon && <cert.icon size={20} className="text-[rgba(255,255,255,0.6)] mt-1" />}
                    </div>
                    
                    <p className="text-[rgba(255,255,255,0.7)] text-sm line-clamp-2 mb-3">{cert.description}</p>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.slice(0, 2).map((skill, idx) => (
                        <span key={idx} className="badge text-xs">{skill}</span>
                      ))}
                      {cert.skills.length > 2 && (
                        <span className="badge text-xs">+{cert.skills.length - 2}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Certificate Modal */}        
      {activeCertificate && (
        <div className="modal-overlay" onClick={() => setActiveCertificate(null)}>
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setActiveCertificate(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[rgba(38,38,38,0.8)] text-white/70 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
              
              <div className="flex flex-col md:flex-row">
                {/* Certificate image */}
                <div className="md:w-1/2 border-b md:border-b-0 md:border-r border-[rgba(38,38,38,1)] bg-[rgba(20,20,20,1)]">
                  <div className="p-4 flex items-center justify-center h-full">
                      <Image 
                        src={activeCertificate?.image || '/placeholder-certificate.png'} 
                        alt={activeCertificate?.name || 'Certificate'}
                        width={500} 
                        height={350} 
                        className="max-w-full max-h-[300px] object-contain"
                        draggable="false"
                        onContextMenu={(e) => e.preventDefault()}
                      />
                  </div>
                </div>
                
                {/* Certificate details */}
                <div className="md:w-1/2 p-6 md:p-8">
                  <div className="flex items-start gap-3 mb-4">
                    {activeCertificate?.icon && (
                      <div className="p-3 rounded-md bg-[rgba(38,38,38,1)]">
                        {React.createElement(activeCertificate.icon, { size: 24, className: "text-white" })}
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-medium mb-1">{activeCertificate?.name}</h3>
                      <p className="text-[rgba(255,255,255,0.6)]">{activeCertificate?.issuer}</p>
                      <p className="text-[rgba(255,255,255,0.6)] text-sm">{activeCertificate?.date}</p>
                    </div>
                  </div>
                  
                  <p className="text-[rgba(255,255,255,0.8)] mb-6">{activeCertificate?.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-[rgba(255,255,255,0.5)] mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeCertificate?.skills?.map((skill, idx) => (
                        <span key={idx} className="badge">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button 
                        className="btn btn-outline text-sm"
                        onClick={() => {
                          if (activeCertificate?.image) {
                            setPopupImageUrl(activeCertificate.image);
                            setIsImagePopupOpen(true);
                            setActiveCertificate(null); // Close details modal
                          }
                        }}
                      >
                        View Certificate
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      
      {/* Image Popup Modal */}
      {isImagePopupOpen && popupImageUrl && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60] p-4 transition-opacity duration-300 ease-in-out"
          onClick={() => setIsImagePopupOpen(false)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative bg-neutral-900 p-3 rounded-lg shadow-xl max-w-4xl max-h-[95vh]"
            onClick={(e) => e.stopPropagation()} 
          >
            <img 
              src={popupImageUrl || ''} 
              alt="Certificate Preview" 
              className="block w-full h-full object-contain rounded max-w-full max-h-[calc(95vh-40px)]" 
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
            <button
              onClick={() => setIsImagePopupOpen(false)}
              className="absolute top-[-12px] right-[-12px] p-1.5 bg-neutral-700 text-white rounded-full hover:bg-neutral-600 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
              aria-label="Close image preview"
            >
              <X size={20} />
            </button>
          </motion.div>
        </div>
      )}
    </main>
  )
}
