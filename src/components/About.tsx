'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaLaptopCode, FaBrain, FaGlobe, FaFlask, FaNetworkWired, FaTools, FaCalendarAlt, FaChevronLeft, FaChevronRight, FaDownload } from 'react-icons/fa'
import { SiPython, SiMysql } from 'react-icons/si'
import { IconType } from 'react-icons'
import { FaShieldAlt } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router';

// Define types for skills data structure
interface SkillItem {
  name: string;
  image?: string; // Optional image path for individual skill items
}

interface SkillCategory {
  category: string;
  icon?: IconType; // Use React.ElementType for react-icons components, make optional just in case
  image?: string; // Optional image path for the category card
  items: SkillItem[];
}

// Update skills array with react-icons components
const skills: SkillCategory[] = [
  {
    category: 'Programming Languages',
    icon: FaLaptopCode, // Using react-icons component
    image: '/skills/programming.png', // Example image path (add your own images to public/skills/)
    items: [
      { name: 'Python', /* Optional: add image: '/path/to/python.png' */ },
      { name: 'C' },
      { name: 'Java', /* Optional: add image: '/path/to/java.png' */ },
      { name: 'JavaScript' },
      { name: 'SQL' },
      { name: 'ARM Assembly' },
    ],
  },
  {
    category: 'AI & Machine Learning',
    icon: FaBrain, // Using react-icons component
    image: '/skills/ai.png',
    items: [
      { name: 'Scikit-learn' },
      { name: 'TensorFlow' },
      { name: 'Keras' },
      { name: 'NumPy, Pandas, Matplotlib' },
      { name: 'Genetic Algorithms' },
      { name: 'LLMs: Gemini, vLLM, OpenAI' },
      { name: 'Prompt Engineering & Evaluation' },
    ],
  },
  {
    category: 'Web Development',
    icon: FaGlobe, // Using react-icons component
    items: [
      { name: 'React.js'},
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Tailwind CSS' },
      { name: 'Framer Motion' },
      { name: 'Backend: Node.js, Express.js' },
      { name: 'Database: MongoDB, MySQL' },
      { name: 'RESTful APIs, JSON' },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: FaTools, // Using react-icons component
    items: [
      { name: 'Vercel, Netlify (deployment)' },
      { name: 'Git, GitHub' },
      { name: 'Kaggle (data analysis/competitions)' },
      { name: 'Docker (learning in progress)' },
      { name: 'CI/CD (learning in progress)' },
    ],
  },
  {
    category: 'Data Science & Analysis',
    icon: FaFlask, // Using react-icons component
    items: [
      { name: 'Data preprocessing & visualization' },
      { name: 'Model evaluation & optimization' },
      { name: 'Statistical analysis' },
    ],
  },
  {
    category: 'Networking & Systems',
    icon: FaNetworkWired, // Using react-icons component
    items: [
      { name: 'IPv4/IPv6 addressing' },
      { name: 'Router & Switch config (Cisco CCNAv7)' },
      { name: 'SSH, Telnet' },
      { name: 'Subnetting & VLAN setup' },
    ],
  },
  {
    category: 'Others',
    icon: FaTools, // Using a general icon for others
    items: [
      { name: 'Jupyter Notebook' },
      { name: 'Postman (API testing)' },
      { name: 'VS Code' },
      { name: 'PyQt5/6 (GUI dev)' },
      { name: 'Excel automation with AI' },
      { name: 'Circuit Design using Verilog' },
    ],
  },
]

const timeline = [
  {
    year: '2025',
    title: 'Building Smart Interfaces & Cloud Apps',
    items: [
      'Fashion Outfit Recommender App using CNN and DeepFashion dataset',
      'LLM-powered Genetic Optimizer with PRM scoring',
      'Learning CI/CD, Docker, and scalable deployment',
      'Preparing for CCNAv7 Certification',
      'Building this portfolio with Next.js + Tailwind + Framer Motion'
    ],
    icon: FaLaptopCode,
    color: 'from-blue-500 to-purple-500'
  },
  {
    year: '2024',
    title: 'Applied Data Science & Reasoning Models',
    items: [
      'Diabetes Prediction Project (85% accuracy)',
      'Genetic Algorithm for Math Reasoning',
      'Learned vLLM and fine-tuned Gemini 1.5 Flash',
      'Developed Custom LLM Evaluation',
      'AI-based legal document retrieval system'
    ],
    icon: FaBrain,
    color: 'from-blue-500 to-purple-500'
  },
  {
    year: '2023',
    title: 'Deep Dive into AI & Development',
    items: [
      'Created AI.Rassoi App using TensorFlow, React, and Node.js',
      'Learned Full-Stack Development (React, Node.js, MongoDB)',
      'Participated in KIIT Ideation 1.0 – Round 2 Selected'
    ],
    icon: FaLaptopCode,
    color: 'from-blue-500 to-purple-500'
  },
  {
    year: '2022',
    title: 'Beginning the Tech Path',
    items: [
      'Started B.Tech in Computer Science',
      'Built foundation in C, Java, Python, and DSA',
      'Learned core subjects like OS, Computer Architecture, and Networking'
    ],
    icon: FaCalendarAlt,
    color: 'from-blue-500 to-purple-500'
  },
]

// Define type for certificates data structure
interface Certificate {
  name: string;
  issuer: string;
  date: string;
  icon?: IconType; // Use React.ElementType for react-icons components, make optional just in case
  description: string;
  skills: string[];
  image: string; // Main certificate preview image
  progress: number;
  status: string;
  color: string;
  titleIconImage?: string; // Optional image path for the title area icon
}

// Update certificates array with react-icons components
const certificates: Certificate[] = [
  {
    name: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    icon: SiPython,
    description: 'Professional certification in Introduction to Python programming.',
    skills: ['Basic Python', 'Array', 'Lists', 'Troubleshooting'],
    image: '/certificates/PythonEssentials1Update20250522-27-o1l2yx_page-0001.jpg',
    progress: 100,
    status: 'Completed',
    color: 'from-blue-500 to-purple-500',
    // titleIconImage: '/logos/p3.jpg'
  },
  {
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    icon: FaShieldAlt,
    description: 'Professional certification in Introduction to Cybersecurity.',
    skills: ['System Safeguards', 'Cybersecurity Administration', 'Threat Analysis', 'Network Defense', 'Resource Specialist'],
    image: '/certificates/I2CSUpdate20250522-27-fchaub_page-0001.jpg',
    progress: 100,
    status: 'Completed',
    color: 'from-blue-500 to-purple-500',
  },
  {
    name: 'SQL (Advanced)',
    issuer: 'HackerRank',
    date: '2024',
    icon: SiMysql,
    description: 'Advanced SQL certification covering complex queries, joins, and database optimization.',
    skills: ['Advanced Queries', 'Database Design', 'Performance Tuning', 'Data Analysis'],
    image: '/certificates/sql.png',
    progress: 100,
    status: 'Completed',
    color: 'from-blue-500 to-purple-500',
  },
  {
    name: 'Machine Learning Specialization',
    issuer: 'Stanford Online',
    date: '2023',
    icon: FaBrain,
    description: 'Comprehensive machine learning course covering algorithms, statistics, and practical applications.',
    skills: ['ML Algorithms', 'Statistics', 'Python', 'Data Analysis'],
    image: '/certificates/stanford-ml.png',
    progress: 100,
    status: 'Completed',
    color: 'from-blue-500 to-purple-500',
  }
]

// Add this type guard function at the top level
function isValidSkillIndex(index: number, skills: SkillCategory[]): boolean {
  return index >= 0 && index < skills.length;
}

// Add this helper function for rendering icons
function renderIcon(Icon: IconType, size: number, color: string) {
  return <Icon size={size} color={color} />;
}

export default function About() {
  const { basePath } = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const scrollInterval = useRef<NodeJS.Timeout | null>(null)

  // Skills Carousel
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isSkillAutoScrolling, setIsSkillAutoScrolling] = useState(true);
  const skillScrollInterval = useRef<NodeJS.Timeout | null>(null);
  const [showSkillModal, setShowSkillModal] = useState(false);
  const [modalSkillIndex, setModalSkillIndex] = useState<number | null>(null);

  // Certificates Carousel state
  const [showCertImageModal, setShowCertImageModal] = useState(false);

  useEffect(() => {
    if (isAutoScrolling) {
      scrollInterval.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % certificates.length)
      }, 5000)
    }

    if (isSkillAutoScrolling) {
      skillScrollInterval.current = setInterval(() => {
        setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
      }, 5000);
    }

    return () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current)
      }
      if (skillScrollInterval.current) {
        clearInterval(skillScrollInterval.current);
      }
    }
  }, [isAutoScrolling, isSkillAutoScrolling])

  const handlePrev = () => {
    setIsAutoScrolling(false)
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
  }

  const handleNext = () => {
    setIsAutoScrolling(false)
    setCurrentIndex((prev) => (prev + 1) % certificates.length)
  }

  const handleSkillPrev = () => {
    setIsSkillAutoScrolling(false);
    setCurrentSkillIndex((prev) => (prev - 1 + skills.length) % skills.length);
  };
  const handleSkillNext = () => {
    setIsSkillAutoScrolling(false);
    setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
  };

  const currentCert = certificates[currentIndex]
  const currentSkill = skills[currentSkillIndex];

  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow">About Me</h2>
            <p className="text-lg text-gray-300">
              I&apos;m a passionate developer and AI innovator with expertise in Python, AI/ML, and full-stack development.
              My journey in technology has led me to explore various domains, from machine learning and data science to
              networking and cloud computing. I love creating solutions that combine cutting-edge AI with practical
              applications.
            </p>
          </div>

          {/* Skills Carousel */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-8 font-display glow">Technical Skills</h3>
            {/* Download Resume Button */}
            <div className="flex justify-center mb-10">
              <a
                href="/Resume_VaibhavJain.pdf"
                download
                className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-white text-black font-semibold text-lg shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white glow-border"
              >
                <FaDownload size={24} color="black" />
                Download Resume
              </a>
            </div>
            <div className="relative">
              {/* Navigation Buttons */}
              <button
                onClick={handleSkillPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 p-3 rounded-full bg-gray-800 border border-white/20 shadow-lg hover:scale-110 hover:bg-gray-700 transition-all duration-200 glow-border"
              >
                <FaChevronLeft size={32} color="white" />
              </button>
              <button
                onClick={handleSkillNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 p-3 rounded-full bg-gray-800 border border-white/20 shadow-lg hover:scale-110 hover:bg-gray-700 transition-all duration-200 glow-border"
              >
                <FaChevronRight size={32} color="white" />
              </button>
              {/* Skills Category Card Carousel */}
              <div className="relative overflow-hidden flex justify-center">
                <motion.div
                  key={currentSkillIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-900/50 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-3xl min-h-[220px] flex flex-col md:flex-row items-center justify-center p-0 mx-2 overflow-hidden relative glow-border"
                  style={{ boxShadow: '0 4px 32px 0 rgba(255, 255, 255, 0.10)', flexShrink: 0 }}
                >
                  {/* Background Image */}
                  {currentSkill.image && (
                    <div className="absolute inset-0 w-full h-full">
                      <Image src={basePath + currentSkill.image} alt={currentSkill.category} className="object-cover w-full h-full rounded-2xl grayscale hover:grayscale-0 transition-filter duration-300" fill sizes="100vw" priority />
                      {/* Overlay - increased opacity */}
                      <div className="absolute inset-0 bg-black/70 rounded-2xl" />
                    </div>
                  )}
                  {/* Overlay Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center w-full h-full backdrop-blur-sm">
                    <div className="flex flex-col items-center gap-4 mb-6">
                      {/* Use react-icons component */}
                      {currentSkill.icon && renderIcon(currentSkill.icon, 48, "white")}
                      <span className="text-2xl font-bold text-white font-display glow">{currentSkill.category}</span>
                    </div>
                    <button
                      className="px-6 py-1 rounded-full bg-white text-black font-medium shadow hover:scale-105 transition-all glow-border"
                      onClick={() => { setModalSkillIndex(currentSkillIndex); setShowSkillModal(true); }}
                    >
                      View More
                    </button>
                  </div>
                </motion.div>
              </div>
              {/* Dots Navigation */}
              <div className="flex justify-center gap-3 mt-8">
                {skills.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsSkillAutoScrolling(false);
                      setCurrentSkillIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors glow-border ${
                      index === currentSkillIndex
                        ? 'bg-white shadow-lg scale-110'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  />
                ))}
            </div>
            {/* Modal for skill details */}
            {showSkillModal && modalSkillIndex !== null && isValidSkillIndex(modalSkillIndex, skills) && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                  <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-lg w-full relative animate-pop-in glow-border">
                  <button
                      className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
                    onClick={() => setShowSkillModal(false)}
                  >
                    ×
                  </button>
                  <div className="flex items-center gap-4 mb-6">
                    {skills[modalSkillIndex].image && (
                        <Image src={basePath + skills[modalSkillIndex].image} alt={skills[modalSkillIndex].category} width={64} height={64} className="w-16 h-16 object-cover rounded-xl grayscale hover:grayscale-0 transition-filter duration-300" />
                    )}
                      {skills[modalSkillIndex].icon && renderIcon(skills[modalSkillIndex].icon, 40, "white")}
                      <span className="text-2xl font-bold text-white font-display glow">{skills[modalSkillIndex].category}</span>
                  </div>
                  <ul className="space-y-3">
                    {skills[modalSkillIndex].items.map((item) => (
                        <li key={item.name} className="flex items-center gap-2 text-gray-300">
                        {/* Removed individual skill item image */}
                          <span className="text-white glow">•</span>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Timeline */}
          <div className="mb-20" id="journey">
            <h3 className="text-3xl font-bold text-center mb-16 font-display glow">Professional Journey</h3>
            <div className="relative">
              {/* Main Timeline track with gradient and pulse animation */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-600 w-full h-full rounded-full opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-b from-purple-400 via-pink-400 to-blue-500 w-full h-full rounded-full animate-pulse-slow opacity-30" />
              </div>

              {/* Glowing orb at the top */}
              <div className="absolute left-1/2 -top-4 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 shadow-lg shadow-purple-500/30 animate-pulse-slow" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                  className={`relative mb-16 ${index % 2 === 0 ? 'md:pl-0 md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}
                >
                  {/* Year Badge with animation */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 15 }}
                    className={`absolute top-0 ${index % 2 === 0 ? 'md:left-0 -translate-x-1/2' : 'md:right-0 translate-x-1/2'} z-20 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-bold shadow-lg border border-white/10`}
                  >
                    {item.year}
                  </motion.div>
                  
                  {/* Animated Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 300, damping: 15 }}
                    className={`absolute top-4 ${index % 2 === 0 ? 'md:-right-2' : 'md:-left-2'} w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 border-4 border-gray-900 z-10 shadow-lg shadow-purple-500/30`}
                  >
                    <span className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-75" />
                  </motion.div>
                  
                  {/* Animated Connecting Line */}
                  <motion.div 
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: '2rem', opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={`hidden md:block absolute top-8 ${index % 2 === 0 ? 'right-0' : 'left-0'} h-0.5 bg-gradient-to-r ${index % 2 === 0 ? 'from-purple-500/70 to-transparent' : 'from-transparent to-blue-500/70'}`} 
                  />
                  
                  {/* Content Card with hover effect */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 shadow-2xl hover:shadow-2xl transition-all duration-300 pt-16 font-sans group hover:border-purple-500/50 hover:bg-gray-900/60"
                    style={{
                      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    {/* Floating Icon */}
                    <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20 bg-gray-900 group-hover:bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300`}>
                      {item.icon && renderIcon(item.icon, 30, "white")}
                    </div>
                      <div className="text-sm font-medium text-gray-400 mb-2 font-display">
                      {item.year}
                    </div>
                      <h4 className="text-2xl font-bold mb-4 font-display text-white glow">{item.title}</h4>
                    <ul className="space-y-2">
                      {item.items.map((listItem, i) => (
                          <li key={i} className="text-gray-300 flex items-start gap-2">
                            <span className="text-white glow">•</span>
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certificates Carousel */}
          <div className="mt-20">
              <h3 className="text-3xl font-bold text-center mb-12 font-display glow">Certifications</h3>
            <div className="relative">
              {/* Navigation Buttons */}
              <button
                onClick={handlePrev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 z-10 p-3 rounded-full bg-gray-800 border border-white/20 shadow-lg hover:scale-110 hover:bg-gray-700 transition-all duration-200 glow-border"
                aria-label="Previous Certificate"
              >
                  <FaChevronLeft size={32} color="white" />
              </button>
              <button
                onClick={handleNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 z-10 p-3 rounded-full bg-gray-800 border border-white/20 shadow-lg hover:scale-110 hover:bg-gray-700 transition-all duration-200 glow-border"
                aria-label="Next Certificate"
              >
                  <FaChevronRight size={32} color="white" />
              </button>
              {/* Certificate Card */}
              <div className="relative flex justify-center">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row w-full max-w-4xl bg-gray-900/50 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 overflow-hidden glow-border"
                >
                  {/* Certificate Image & Progress */}
                    <div className="md:w-2/5 w-full flex flex-col items-center justify-center p-8 bg-gray-900">
                    <div className="flex flex-col items-center w-full">
                      <div className="flex items-center justify-center w-full cursor-pointer" onClick={() => setShowCertImageModal(true)}>
                        <img
                          src={basePath + currentCert.image}
                          alt={currentCert.name}
                            className="w-72 h-56 object-contain rounded-xl shadow-lg border border-white/10 bg-white/10 transition-transform duration-200 hover:scale-105 grayscale hover:grayscale-0"
                          style={{ maxWidth: '100%' }}
                            onContextMenu={e => e.preventDefault()}
                        />
                      </div>
                      {/* Progress Bar & Status BELOW the image */}
                      <div className="w-full mt-8">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-base font-semibold text-gray-400">{currentCert.status}</span>
                            <span className="text-base font-semibold text-gray-400">{currentCert.progress}% Complete</span>
                        </div>
                          <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                          <div
                              className="h-full bg-white rounded-full transition-all duration-500"
                            style={{ width: `${currentCert.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Certificate Details */}
                  <div className="md:w-3/5 flex flex-col justify-between p-12 gap-6">
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        {currentCert.titleIconImage ? (
                            <Image src={basePath + currentCert.titleIconImage} alt={currentCert.name} width={36} height={36} className="w-9 h-9 rounded-xl object-contain grayscale hover:grayscale-0" />
                        ) : (
                            <div className={`p-4 rounded-xl bg-gray-800 shadow-lg glow-border`}>
                            {currentCert.icon && renderIcon(currentCert.icon, 36, "white")}
                          </div>
                        )}
                          <h4 className="text-3xl md:text-4xl font-bold font-display text-white glow">{currentCert.name}</h4>
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                          <span className="text-lg text-gray-300 font-medium">{currentCert.issuer}</span>
                          <span className="flex items-center gap-2 text-gray-400 ml-6">
                          <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' /></svg>
                          <span className="text-lg">{currentCert.date}</span>
                        </span>
                      </div>
                        <p className="text-lg text-gray-300 mb-6 mt-3 leading-relaxed font-light">{currentCert.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-auto">
                      {currentCert.skills.map((skill) => (
                        <span
                          key={skill}
                            className="px-5 py-2 text-base font-medium bg-white/10 text-gray-300 rounded-full shadow-sm border border-white/10 glow-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* Dots Navigation */}
              <div className="flex justify-center gap-3 mt-8">
                {certificates.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoScrolling(false)
                      setCurrentIndex(index)
                    }}
                      className={`w-3 h-3 rounded-full transition-colors glow-border ${
                      index === currentIndex
                          ? 'bg-white shadow-lg scale-110'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  />
                ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      {/* Modal for viewing certificate image */}
      {showCertImageModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-3xl w-full flex flex-col items-center">
            <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl font-bold z-10"
              onClick={() => setShowCertImageModal(false)}
            >
              ×
            </button>
            <Image
              src={basePath + currentCert.image}
              alt={currentCert.name}
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl max-h-[80vh] max-w-full border border-white/20 bg-white/10 grayscale hover:grayscale-0"
              style={{ userSelect: 'none' }}
              onContextMenu={e => e.preventDefault()}
            />
          </div>
        </div>
      )}
      </div>
    </section>
  )
} 