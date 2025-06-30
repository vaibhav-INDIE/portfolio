import { IconType } from 'react-icons'
import { FaLaptopCode, FaBrain, FaGlobe, FaFlask, FaNetworkWired, FaTools, FaCalendarAlt } from 'react-icons/fa'
import { SiPython, SiMysql } from 'react-icons/si'

// Define types for skills data structure
interface SkillItem {
  name: string;
  image?: string; // Optional image path for individual skill items
}

interface SkillCategory {
  category: string;
  icon?: IconType; // Use React.ElementType for react-icons components
  image?: string; // Optional image path for the category card
  items: SkillItem[];
}

// Skills data
export const skills: SkillCategory[] = [
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
      { name: 'Next.js' },
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
];

// Timeline data
export const timeline = [
  {
    year: '2025',
    title: 'Building Smart Interfaces & Cloud Apps',
    items: [
      'Cuurently Building Fashion Outfit Recommender App using Transformers',
      'Learning CI/CD, Docker, and scalable deployment',
      'Preparing for CCNAv7 Certification',
      'Building this portfolio with Next.js + Tailwind'
    ],
    icon: FaLaptopCode,
  },
  {
    year: '2024',
    title: 'Applied Data Science & Reasoning Models',
    items: [
      'Hate Speech Detection using ANN accuracy of 96%',
      'Genetic Algorithm for Math Reasoning',
      'Built conversational interfaces with LLMs',
    ],
    icon: FaBrain,
  },
  {
    year: '2023',
    title: 'Exploring Programming & AI',
    items: [
      'Made a personal health assistant app AI.Rassoi',
      'Developed Interest in Machine learning',
      'Started exploring youtube videos and channel like CampusX, Krish Naik, Tech with Tim',
      'Made my first Kaggle notebook',
    ],
    icon: FaLaptopCode,
  },
  {
    year: '2022',
    title: 'Beginning of Everything',
    items: [
      'Started B.Tech in Computer Science from Kalinga Institute of Industrial Technology',
      'Built foundation in C, Java, Python, and DSA',
      'Learned core subjects like OS, Computer Architecture, and Networking',
      'Started taking health and GYM seriously'

    ],
    icon: FaCalendarAlt,
  },
];

// Define type for certificates data structure
export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  icon?: IconType;
  description: string;
  skills: string[];
  image: string;
  progress: number;
  status: string;
  category: string;
}

// Certificates data
export const certificates: Certificate[] = [
  {
    name: 'IBM Professional Certificate in Machine Learning',
    issuer: 'IBM',
    date: '2025',
    icon: SiPython,
    description: 'Completed a comprehensive 6-course specialization covering key areas of Machine Learning, including Exploratory Data Analysis, Supervised and Unsupervised Learning, Deep Learning, Reinforcement Learning, and practical applications through a capstone project.',
    skills: [
      'Machine Learning',
      'Supervised Learning',
      'Unsupervised Learning',
      'Deep Learning',
      'Reinforcement Learning',
      'Exploratory Data Analysis',
      'Regression',
      'Classification',
      'Clustering',
      'Time Series Analysis',
      'Model Evaluation'
    ],    
    image: '/certificates/ibm_ml.jpg',
    progress: 100,
    status: 'Completed',
    category: 'AI/ML',
  },
  {
    name: 'Intel Unnati',
    issuer: 'Intel',
    date: '2023',
    icon: SiPython,
    description: 'Participated in Intel Unnati program and completed the program successfully.',
    skills: ['OpenVINO', 'Machine Learning', 'Deep Learning', 'Computer Vision'],
    image: '/certificates/intel.jpg',
    progress: 100,
    status: 'Completed',
    category: 'AI/ML',
  },
  {
    name: 'Python Essentials 2',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    icon: SiPython,
    description: 'Professional certification in Advance Python programming.',
    skills: ['Python', 'Modules, Packages, and PIP', 'Characters, Strings, and Advanced Exceptions', 'Object-Oriented Programming','Generators, Files, and the Python Standard Library'],
    image: '/certificates/PythonEssentials2.jpg',
    progress: 100,
    status: 'Completed',
    category: 'Programming',
  },
  {
    name: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    icon: SiPython,
    description: 'Professional certification in Introduction to Python programming.',
    skills: ['Python', 'Programming Basics', 'Control Flow', 'Data Structures'],
    image: '/certificates/PythonEssentials1Update20250522-27-o1l2yx_page-0001.jpg',
    progress: 100,
    status: 'Completed',
    category: 'Programming',
  },
  {
    name: 'SQL (Advanced)',
    issuer: 'HackerRank',
    date: '2025',
    icon: SiMysql,
    description: 'Certification in advanced SQL queries, database design, and performance optimization.',
    skills: ['Advanced Queries', 'Database Design', 'Performance Tuning', 'Data Analysis'],
    image: '/certificates/sql_advanced certificate.jpg',
    progress: 100,
    status: 'Completed',
    category: 'Databases',
  },
  {
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    icon: FaNetworkWired,
    description: 'Gained foundational knowledge of cybersecurity, including threat analysis, network defense, and best practices for securing digital assets.',
    skills: [
      'Cybersecurity Fundamentals',
      'Threat Analysis',
      'Network Defense',
      'Security Best Practices',
      'System Safeguards'
    ],
    image: '/certificates/I2C.jpg',
    progress: 100,
    status: 'Completed',
    category: 'Networking',
  },
  {
    name: 'CCNA 1: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    icon: FaNetworkWired,
    description: 'Learned the architecture, structure, functions, and components of the Internet and computer networks. Developed skills to configure and troubleshoot routers and switches.',
    skills: [
      'Network Fundamentals',
      'OSI Model',
      'IPv4/IPv6 Addressing',
      'Router & Switch Configuration',
      'Basic Troubleshooting'
    ],
    image: '/certificates/CCNA 1.jpg',
    progress: 100,
    status: 'Completed',
    category: 'Networking',
  },
  {
    name: 'CCNA 2: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    icon: FaNetworkWired,
    description: 'Focused on switching technologies, routing operations, and wireless networking. Practiced configuring VLANs, inter-VLAN routing, and wireless LANs.',
    skills: [
      'Switching Technologies',
      'VLANs',
      'Inter-VLAN Routing',
      'Wireless LANs',
      'Routing Protocols'
    ],
    image: '/certificates/CCNA 2.jpg',
    progress: 100,
    status: 'Completed',
    category: 'Networking',
  },
  {
    name: 'CCNA 3: Enterprise Networking, Security, and Automation',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    icon: FaNetworkWired,
    description: 'Explored advanced networking concepts including enterprise infrastructure, security, and network automation. Implemented OSPF, WAN technologies, and network management tools.',
    skills: [
      'Enterprise Networking',
      'OSPF',
      'WAN Technologies',
      'Network Security',
      'Automation & Management'
    ],
    image: '/certificates/CCNA 3.jpg',
    progress: 100,
    status: 'Completed',
    category: 'Networking',
  },
  {
    name: 'Javascript Intermediate',
    issuer: 'HackerRank',
    date: '2025',
    icon: FaLaptopCode,
    description: 'Certification in intermediate JavaScript programming.',
    skills: ['JavaScript', 'Programming Basics', 'Control Flow', 'Data Structures'],
    image: '/certificates/javascript_intermediate certificate_page-0001.jpg',
    progress: 100,
    status: 'Completed',
    category: 'Programming',
  }
];

// Work Experience data
export interface WorkExperience {
  title: string;
  company: string;
  date: string;
  description: string[];
  image: string;
  skills: string[];
}

export const workExperiences: WorkExperience[] = [
  {
    title: 'AI Intern (RAG System)',
    company: 'FinvestFx',
    date: 'Jun 2025',
    description: [
      'Developed a Retrieval-Augmented Generation (RAG) system to analyze business receipts and payments from Excel files using FAISS and Gemini.',
      'Optimized token usage through pre-filtration with text embeddings, reducing API costs and enhancing performance.',
      'Integrated a chat interface with Hugging Face\'s InferenceClient to support multi-file interactions with history.',
      'Gained hands-on experience in building efficient, scalable AI solutions during my internship at FinvestFx.'
    ],
    image: '/Logos/finvestfx_com_cover.jpg',
    skills: ['RAG', 'FAISS', 'Gemini', 'Text Embeddings', 'Hugging Face', 'AI', 'Excel Automation'],
  },
];
