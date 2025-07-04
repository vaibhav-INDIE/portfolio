'use client'

import { FaLaptopCode, FaBrain, FaGlobe, FaFlask, FaNetworkWired, FaTools } from 'react-icons/fa'

import { IconType } from 'react-icons'


// Define types for skills data structure
interface SkillItem {
  name: string;
  image?: string;
}

interface SkillCategory {
  category: string;
  icon?: IconType;
  image?: string;
  items: SkillItem[];
}

// Update skills array with react-icons components
const skills: SkillCategory[] = [
  {
    category: 'Programming Languages',
    icon: FaLaptopCode,
    items: [
      { name: 'Python' },
      { name: 'C' },
      { name: 'Java' },
      { name: 'JavaScript' },
      { name: 'SQL' },
      { name: 'ARM Assembly' },
    ],
  },
  {
    category: 'AI & Machine Learning',
    icon: FaBrain,
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
    icon: FaGlobe,
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
    icon: FaTools,
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
    icon: FaFlask,
    items: [
      { name: 'Data preprocessing & visualization' },
      { name: 'Model evaluation & optimization' },
      { name: 'Statistical analysis' },
    ],
  },
  {
    category: 'Networking & Systems',
    icon: FaNetworkWired,
    items: [
      { name: 'IPv4/IPv6 addressing' },
      { name: 'Router & Switch config (Cisco CCNAv7)' },
      { name: 'SSH, Telnet' },
      { name: 'Subnetting & VLAN setup' },
    ],
  },
  {
    category: 'Others',
    icon: FaTools,
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

export default function About() {
  return (
    <section id="about" className="section py-24 bg-[rgba(16,16,16,1)]">
    <div className="container mx-auto px-6 max-w-6xl">
      
      {/* START: Updated Heading with Flow Animation */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="animate-flow-x bg-gradient-to-r from-white via-[rgba(var(--primary-rgb),0.8)] to-white bg-[length:200%_auto] bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[rgba(var(--primary-rgb),0.7)] to-transparent"></div>
      </div>
      {/* END: Updated Heading */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div 
            key={skill.category}
            className="card bg-[rgba(28,28,28,1)] border border-[rgba(38,38,38,1)] hover:border-[rgba(255,255,255,0.2)] transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-baseline gap-3 mb-4">
                {skill.icon && <skill.icon className="relative top-[6px] text-2xl text-primary" />}
                <h3 className="text-lg font-semibold text-white">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  // START: Fixed Dot Alignment
                  <li 
                    key={item.name} 
                    className="text-[rgba(255,255,255,0.7)] text-sm flex items-baseline" // Changed to items-baseline
                  >
                    <span className="text-primary mr-2">•</span> {/* Removed mt-1.5 */}
                    <span>{item.name}</span>
                  </li>
                  // END: Fixed Dot Alignment
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