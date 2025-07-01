'use client'
import { useEffect, useState, useRef, useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Mail, FileText, X } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import { projects, certificates, workExperiences } from '../data/portfolio-data'
import { Project } from '../types/ProjectTypes'
import dynamic from 'next/dynamic'
import Image from 'next/image'

// Dynamic imports for better code splitting
const Projects = dynamic(() => import('../components/Projects'), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-black" />
})

const About = dynamic(() => import('../components/About'), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-[rgba(16,16,16,1)]" />
})

// Memoize categories
const projectCategories = ['All', ...Array.from(new Set(projects.map(project => project.category)))]
const certificateCategories = ['All', ...Array.from(new Set(certificates.map(cert => cert.category)))]

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectCategory, setProjectCategory] = useState('All');
  const [certCategory, setCertCategory] = useState('All');
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null);
  const heroRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  // Memoize transform values
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  useEffect(() => {
    setMounted(true);
  }, []);

  // Memoize filtered items
  const filteredProjects = useMemo(() => {
    return projectCategory === 'All' ? projects : projects.filter(project => project.category === projectCategory);
  }, [projectCategory]);

  const filteredCertificates = useMemo(() => {
    return certCategory === 'All' ? certificates : certificates.filter(cert => cert.category === certCategory);
  }, [certCategory]);

  if (!mounted) {
    return null;
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
              className="relative w-24 h-24 md:w-28 md:h-28 mb-6 rounded-full overflow-hidden border-4 border-[rgba(var(--primary-rgb),0.5)] glow-border"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/portfolio/profile.jpg"
                alt="Vaibhav Jain"
                width={112}
                height={112}
                priority
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
            
            {/* Social Links */}
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
                href="/portfolio/2228077_RAG_resume.pdf"
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
      </section>

      {/* About/Skills Section */}
      <About />

      {/* Work Experience Section */}
      <section id="work" className="section py-24 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
            Work Experience
          </h2>
          
          <div className="space-y-8">
            {workExperiences.map((work, index) => (
              <motion.div 
                key={work.title}
                className="card bg-[rgba(28,28,28,1)] border border-[rgba(38,38,38,1)] hover:border-[rgba(255,255,255,0.2)] transition-all duration-300 overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-64 h-48 overflow-hidden">
                    <Image
                      src={`/portfolio${work.image}`}
                      alt={work.company}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>
                  
                  <div className="p-6 md:p-8 flex-1">
                    <div className="flex flex-col h-full">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{work.title}</h3>
                        <p className="text-primary mb-1">{work.company}</p>
                        <p className="text-[rgba(255,255,255,0.5)] text-sm mb-6">{work.date}</p>
                        
                        <ul className="space-y-3 mb-6">
                          {work.description.map((desc, idx) => (
                            <li key={idx} className="text-[rgba(255,255,255,0.7)] text-sm flex items-start">
                              <span className="text-primary mr-2 mt-1">•</span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-auto pt-4 border-t border-[rgba(38,38,38,1)]">
                        <h4 className="text-xs uppercase text-[rgba(255,255,255,0.5)] mb-2">Skills & Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {work.skills.map((skill) => (
                            <span key={skill} className="badge text-xs">{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects 
        projects={filteredProjects}
        categories={projectCategories}
        currentCategory={projectCategory}
        onSetCategory={setProjectCategory}
        selectedProject={selectedProject}
        onSetSelectedProject={setSelectedProject}
      />

      {/* Certificates Section */}
      <section id="certificates" className="section py-24 bg-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
            Certificates & Achievements
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {certificateCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCertCategory(cat)}
                className={`btn text-sm ${certCategory === cat ? 'btn-primary' : 'btn-outline'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertificates.map((cert) => (
              <div 
                key={cert.name}
                className="card bg-[rgba(28,28,28,1)] border border-[rgba(38,38,38,1)] hover:border-[rgba(255,255,255,0.2)] transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCertificate(cert)}
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={`/portfolio${cert.image}`}
                    alt={cert.name}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                  <p className="text-primary mb-1">{cert.issuer}</p>
                  <p className="text-[rgba(255,255,255,0.5)] text-sm mb-4">{cert.date}</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span key={skill} className="badge text-xs">{skill}</span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="badge text-xs">+{cert.skills.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div 
          className="modal-overlay"
          onClick={() => setSelectedCertificate(null)}
        >
          <div 
            className="modal-content max-w-4xl w-[90%] bg-[rgba(24,24,24,1)] border border-[rgba(48,48,48,1)] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[rgba(38,38,38,0.8)] text-white/70 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            
            <div className="max-h-[85vh] overflow-y-auto custom-scrollbar">
              <div className="relative w-full h-[60vh] bg-[rgba(20,20,20,1)]">
                <Image 
                  src={`/portfolio${selectedCertificate.image}`}
                  alt={selectedCertificate.name}
                  fill
                  className="object-contain"
                  style={{ userSelect: 'none' }}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{selectedCertificate.name}</h3>
                <p className="text-primary mb-2">{selectedCertificate.issuer}</p>
                <p className="text-[rgba(255,255,255,0.5)] text-sm mb-6">{selectedCertificate.date}</p>
                
                <p className="text-[rgba(255,255,255,0.8)] mb-6">
                  {selectedCertificate.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm uppercase tracking-wider text-[rgba(255,255,255,0.5)] mb-2">Skills & Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCertificate.skills.map((skill) => (
                      <span key={skill} className="badge">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
