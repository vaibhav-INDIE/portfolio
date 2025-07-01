'use client'

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
    <section id="about" className="section py-24 bg-[rgba(16,16,16,1)]">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <div 
              key={category.category} 
              className="card bg-[rgba(28,28,28,1)] border border-[rgba(38,38,38,1)] hover:border-[rgba(255,255,255,0.2)] transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  {category.icon && (
                    <div className="text-[rgba(255,255,255,0.7)]">
                      {renderIcon(category.icon, 24, 'currentColor')}
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-[rgba(255,255,255,0.7)] flex items-center gap-2">
                      <span className="text-primary">•</span>
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 