import { IconType } from 'react-icons'
import { FaLaptopCode, FaBrain, FaGlobe, FaFlask, FaNetworkWired, FaTools, FaCalendarAlt } from 'react-icons/fa'
import { SiPython, SiMysql } from 'react-icons/si'
import { Project } from '../types/ProjectTypes'

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
    image: '/certificates/python-essentials-2.jpg',
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
    image: '/certificates/python-essentials-1.jpg',
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
    image: '/certificates/sql-advanced.jpg',
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
    image: '/certificates/intro-to-cybersecurity.jpg',
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
    image: '/certificates/ccna-1.jpg',
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
    image: '/certificates/ccna-2.jpg',
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
    image: '/certificates/ccna-3.jpg',
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
    image: '/certificates/javascript-intermediate.jpg',
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
    image: '/logos/finvestfx-cover.jpg',
    skills: ['RAG', 'FAISS', 'Gemini', 'Text Embeddings', 'Hugging Face', 'AI', 'Excel Automation'],
  },
  {
    title: 'Full-Stack Development Training (Ongoing)',
    company: 'KIIT University - Batch B2',
    date: '2025',
    description: [
      'Currently pursuing intensive full-stack training covering Java Spring Boot, React.js, and Angular.',
      'Gaining hands-on experience in building RESTful APIs, state-managed frontends, and full-stack applications.',
      'Collaborating in team projects simulating real-world software development workflows.'
    ],
    image: '/logos/kiit.png',
    skills: ['Java', 'Spring Boot', 'React', 'Angular', 'Full-Stack Development', 'REST APIs'],
  },
  {
    title: 'AI Training Program Trainee',
    company: 'Intel',
    date: 'May 2024',
    description: [
      'Completed a specialized AI training program focused on deep learning, computer vision, and model optimization.',
      'Built and deployed models using Intel OpenVINO toolkit for edge AI applications.',
      'Worked on hands-on projects involving object detection, classification, and model inference optimization.',
      'Enhanced understanding of AI hardware acceleration and efficient deployment strategies.'
    ],
    image: '/logos/Intel.png',
    skills: ['OpenVINO', 'Deep Learning', 'Computer Vision', 'Model Optimization', 'Edge AI'],
  }
];

// Project data
export const projects: Project[] = [
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
      { type: 'video', url: '/projects/airassoi/1.mp4', caption: 'Calorie Tracking' },
      { type: 'video', url: '/projects/airassoi/2.mp4', caption: 'Diet Plan' },
      { type: 'image', url: '/projects/airassoi/diet_plan given.png', caption: 'Given Diet plan from User Profile' },
      { type: 'image', url: '/projects/airassoi/profile_taken.png', caption: 'Profile Analysis' },
      { type: 'image', url: '/projects/airassoi/youtube_banner.png', caption: 'App Walkthrough' }
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
      { type: 'image', url: '/projects/hate_speech/intersection.png', caption: 'Model Performance Metrics' }
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
    media: [
      { type: 'image', url: '/projects/GN/GN_final.png', caption: 'Algorithm Visualization' }
    ]
  },
  {
    title: 'Diabetes Prediction System',
    description: 'A machine learning system using ensemble models for predicting diabetes risk based on medical records.',
    longDescription: `Developed multiple models including L1-Regularized Regression, Decision Trees, and Voting Ensembles to predict diabetes likelihood.\n\nKey Features:\n• Cleaned invalid insulin/glucose records with K-Means clustering\n• Feature engineering and binning for better model generalization\n• Achieved high F1-score and ROC-AUC across models`,
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    technologies: ['Data Science', 'Machine Learning', 'EDA'],
    image: '/projects/sugar/out.jpg',
    github: 'https://github.com/vaibhav-INDIE/Diabetes-Prediction-EDA',
    demo: '',
    category: 'Data Science',
    date: '2024',
    team: 'Solo Project',
    achievements: ['EDA-driven feature cleaning', 'Capstone Project'],
    media: [
      { type: 'image', url: '/projects/sugar/out.jpg', caption: 'Model Performance Metrics' }
    ]
  },
  {
  title: 'Developer Portfolio Website',
  description: 'A dynamic personal portfolio showcasing my projects, experience, skills and animated components.',
  longDescription: `Built a fully responsive portfolio website to highlight my work, achievements, and certifications.\n\nKey Features:\n• Project cards with media gallery\n• Custom 404 page and smooth animations using Framer Motion\n• Integrated GitHub, LinkedIn, Mail links\n• Deployed via GitHub Pages with custom domain\n• Dark mode and responsive design for all devices`,
  tags: ['Next.js','React' ,'TailwindCSS', 'Framer Motion', 'GitHub Pages'],
  technologies: ['Full Stack', 'Frontend', 'Portfolio', 'Deployment'],
  image: '/projects/website/out.jpg',
  github: 'https://github.com/vaibhav-INDIE/portfolio',
  demo: 'https://vaibhav-indie.github.io/portfolio/',
  category: 'Full Stack',
  date: '2025',
  team: 'Solo Project',
  achievements: ['Custom Domain Setup', '3D-style UX with Framer Motion'],
  media: [
      { type: 'video', url: '/projects/website/example.mp4', caption: 'Model Performance Metrics' }
      
    ]
}
];
