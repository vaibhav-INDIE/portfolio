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
    title: 'Advanced RAG System for Documents',
    description: 'A RAG-based Q&A system that builds a knowledge base from complex Excel & PDF files and answers natural language queries.',
    longDescription: `An advanced Retrieval-Augmented Generation (RAG) application built with Streamlit and powered by the Google Gemini API. Users can upload multiple documents (PDFs, complex Excel sheets) to build a vector knowledge base. The system intelligently processes complex table structures, including merged cells, using configurable strategies.\n\nKey Features:\n• Multi-file upload for PDF and Excel (.xlsx).\n• Interactive UI for choosing data extraction strategies (row-by-row, full-sheet as markdown, or custom templates).\n• Handles complex tables with merged cells via forward-filling.\n• Uses Gemini's text-embedding-004 for vectorization and Gemini Pro for generation.\n• Deployed on Streamlit Community Cloud with secure API key management using Streamlit Secrets.`,
    tags: ['Streamlit', 'Python', 'Gemini API', 'Pandas', 'RAG', 'PyMuPDF'],
    technologies: ['AI', 'RAG', 'NLP', 'Full Stack', 'Data Processing', 'Deployment'],
    image: '/projects/rag/img1.jpg', // <-- Make sure you add the screenshot here
    github: 'https://github.com/vaibhav-INDIE/RAG-for-excel-analysis', // <-- REPLACE with your GitHub repo link
    demo: '/rag', // <-- REPLACE with your live Streamlit URL
    category: 'AI',
    date: '2025',
    team: 'Solo Project',
    achievements: ['Handles complex Excel structures with merged cells', 'Flexible data-to-text conversion strategies', 'Deployed on Streamlit Cloud with secure secret management'],
    media: [
      { type: 'video', url: '/projects/rag/demo.mp4', caption: 'Main Demo for document Q&A' },
      { type: 'image', url: '/projects/rag/img1.jpg', caption: 'Main application interface for document Q&A' }
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
    demo: '/diabetes',
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
  description: 'A dynamic personal portfolio showcasing my projects, experience, skills and animated components with Personal Chatbot.',
  longDescription: `Built a fully responsive portfolio website to highlight my work, achievements, and certifications.\n\nKey Features:\n• Project cards with media gallery\n• Custom 404 page and smooth animations using Framer Motion\n• Integrated GitHub, LinkedIn, Mail links\n• Deployed via GitHub Pages with custom domain\n• Dark mode and responsive design for all devices`,
  tags: ['Next.js','React' ,'TailwindCSS', 'Framer Motion', 'GitHub Pages','TinyLlama','MlOps','Dynamic Website'],
  technologies: ['Full Stack', 'Frontend', 'Portfolio', 'Deployment'],
  image: '/projects/website/out.jpg',
  github: 'https://github.com/vaibhav-INDIE/portfolio',
  demo: 'https://www.cuttu.in',
  category: 'Full Stack',
  date: '2025',
  team: 'Solo Project',
  achievements: ['Custom Domain Setup', '3D-style UX with Framer Motion'],
  media: [
      { type: 'video', url: '/projects/website/example.mp4', caption: 'Model Performance Metrics'},
      { type: 'image', url: '/projects/website/explain.png', caption: 'Tech stack used'}

      
    ]
}
];

// Subjects data

export const academicsData = [
  {
    semester: 'Semester 1',
    courses: [
      { name: 'Physics', code: 'PH10001', grade: 'A', type: 'Core', description: 'Fundamental principles of classical and modern physics, including mechanics, electromagnetism, and optics.', topics: ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Optics'] },
      { name: 'Differential Equations and Linear Algebra', code: 'MA11001', grade: 'A', type: 'Core', description: 'Core mathematical concepts essential for engineering, focusing on solving differential equations and understanding vector spaces.', topics: ['ODEs', 'Linear Transformations', 'Eigenvalues', 'Vector Spaces'] },
      { name: 'Science of Living Systems', code: 'LS10001', grade: 'B', type: 'Elective', description: 'An introductory course to the principles of biology, genetics, and ecological systems.', topics: ['Cell Biology', 'Genetics', 'Ecology', 'Human Physiology'] },
      { name: 'Environmental Science', code: 'CH10003', grade: 'E', type: 'Elective', description: 'Study of environmental systems, pollution, and sustainable resource management.', topics: ['Ecosystems', 'Pollution Control', 'Sustainability', 'Climate Change'] },
      { name: 'Physics Lab', code: 'PH19001', grade: 'E', type: 'Core', description: 'Practical experiments to verify theoretical physics concepts learned in the classroom.', topics: ['Measurement', 'Data Analysis', 'Experimentation'] },
      { name: 'Programming Lab', code: 'CS13001', grade: 'E', type: 'Core', description: 'Hands-on programming exercises to build foundational coding skills, likely in C or Python.', topics: ['Algorithms', 'Control Structures', 'Data Types', 'Debugging'] },
      { name: 'Engineering Drawing and Graphics', code: 'CE18001', grade: 'E', type: 'Core', description: 'Introduction to technical drawing standards, orthographic projection, and CAD software.', topics: ['Orthographic Projection', 'Isometric Views', 'CAD', 'Drafting'] },
      { name: 'Basic Instrumentation', code: 'EE10003', grade: 'E', type: 'Core', description: 'Principles of electronic measurement instruments and data acquisition systems.', topics: ['Sensors', 'Transducers', 'Signal Conditioning', 'Measurement'] },
      { name: 'Optimization Technique', code: 'MA10003', grade: 'E', type: 'Core', description: 'Introduction to mathematical optimization methods for solving engineering problems.', topics: ['Linear Programming', 'Non-linear Optimization', 'Heuristics'] },
    ],
  },
  {
    semester: 'Semester 2',
    courses: [
      { name: 'Chemistry', code: 'CH10001', grade: 'A', type: 'Core', description: 'Fundamental concepts of chemistry, including atomic structure, bonding, and chemical reactions.', topics: ['Atomic Structure', 'Chemical Bonding', 'Thermodynamics', 'Kinetics'] },
      { name: 'English', code: 'HS10001', grade: 'E', type: 'Elective', description: 'Enhancing communication skills, including technical writing, presentation, and comprehension.', topics: ['Technical Writing', 'Presentation Skills', 'Communication'] },
      { name: 'Basic Electronics', code: 'EC10001', grade: 'E', type: 'Core', description: 'Introduction to electronic components like diodes, transistors, and operational amplifiers.', topics: ['Semiconductors', 'Diodes', 'Transistors', 'Op-Amps'] },
      { name: 'Chemistry Lab', code: 'CH19001', grade: 'A', type: 'Core', description: 'Practical laboratory work to supplement theoretical chemistry concepts.', topics: ['Titration', 'Synthesis', 'Qualitative Analysis'] },
      { name: 'Yoga', code: 'YG18001', grade: 'E', type: 'Elective', description: 'A course on the practice and philosophy of yoga for physical and mental well-being.', topics: ['Asanas', 'Pranayama', 'Meditation', 'Wellness'] },
      { name: 'Engineering Lab', code: 'EX19001', grade: 'A', type: 'Core', description: 'A multidisciplinary lab covering various engineering principles and practices.', topics: ['Prototyping', 'Experimentation', 'Teamwork'] },
      { name: 'Workshop', code: 'ME18001', grade: 'A', type: 'Core', description: 'Hands-on experience with manufacturing processes like welding, fitting, and machining.', topics: ['Machining', 'Welding', 'Fitting', 'Carpentry'] },
      { name: 'Communication Lab', code: 'HS18001', grade: 'A', type: 'Core', description: 'Practical sessions to improve verbal and non-verbal communication skills.', topics: ['Public Speaking', 'Group Discussions', 'Interviews'] },
      { name: 'Basic Civil Engineering', code: 'CE10001', grade: 'A', type: 'Core', description: 'An overview of civil engineering principles, including structures, materials, and surveying.', topics: ['Building Materials', 'Surveying', 'Structural Basics'] },
      { name: 'Community/Environment-based Project', code: 'EX17001', grade: 'O', type: 'Elective', description: 'A project-based course focused on addressing local community or environmental challenges.', topics: ['Project Management', 'Community Engagement', 'Problem Solving'] },
      { name: 'Transforms and Numerical Methods', code: 'MA11002', grade: 'A', type: 'Core', description: 'Study of mathematical transforms (like Laplace, Fourier) and numerical techniques for solving complex problems.', topics: ['Fourier Transform', 'Laplace Transform', 'Numerical Integration', 'Root Finding'] },
    ],
  },
  {
    semester: 'Semester 3',
    courses: [
      { name: 'Scientific and Technical Writing', code: 'EX20003', grade: 'A', type: 'Core', description: 'Advanced course on writing research papers, technical reports, and documentation.', topics: ['Technical Documentation', 'Research Papers', 'Citation Styles'] },
      { name: 'Probability and Statistics', code: 'MA21001', grade: 'A', type: 'Core', description: 'The mathematical foundation for data analysis, covering probability theory and statistical inference.', topics: ['Probability Distributions', 'Hypothesis Testing', 'Regression', 'Bayesian Theory'] },
      { name: 'Digital Systems Design', code: 'EC20005', grade: 'A', type: 'Core', description: 'Designing and analyzing digital logic circuits, from basic gates to sequential and combinational systems.', topics: ['Boolean Algebra', 'Logic Gates', 'State Machines', 'VHDL/Verilog'] },
      { name: 'Digital Systems Design Laboratory', code: 'EC29005', grade: 'E', type: 'Core', description: 'Hands-on lab for designing, simulating, and implementing digital circuits.', topics: ['Circuit Simulation', 'FPGA Programming', 'Hardware Debugging'] },
      { name: 'Data Structures', code: 'CM21001', grade: 'E', type: 'Core', description: 'In-depth study of fundamental data structures and their application in efficient algorithm design.', topics: ['Arrays', 'Linked Lists', 'Trees', 'Graphs', 'Hashing'] },
      { name: 'Object Oriented Programming using Java', code: 'CM20004', grade: 'B', type: 'Core', description: 'Mastering the principles of OOP, including encapsulation, inheritance, and polymorphism, through Java.', topics: ['Java', 'Inheritance', 'Polymorphism', 'Design Patterns'] },
      { name: 'Computer Organization and Architecture', code: 'CM21002', grade: 'A', type: 'Core', description: 'Understanding the internal workings of a computer, including CPU design, memory hierarchy, and instruction sets.', topics: ['CPU Architecture', 'Memory Hierarchy', 'Pipelining', 'Assembly Language'] },
      { name: 'Data Structures Laboratory', code: 'CM29001', grade: 'E', type: 'Core', description: 'Practical implementation of various data structures and algorithms to solve complex problems.', topics: ['Algorithm Implementation', 'Performance Analysis', 'Debugging'] },
      { name: 'Java Programming Laboratory', code: 'CM29004', grade: 'A', type: 'Core', description: 'Hands-on projects and assignments to solidify Java and OOP programming skills.', topics: ['GUI Programming', 'Multithreading', 'API Usage'] },
    ],
  },
  {
    semester: 'Semester 4',
    courses: [
      { name: 'Industry 4.0 Technologies', code: 'EX20001', grade: 'E', type: 'Elective', description: 'An exploration of modern industrial technologies like IoT, AI, and automation.', topics: ['IoT', 'Big Data', 'Cyber-Physical Systems', 'Automation'] },
      { name: 'Discrete Mathematics', code: 'MA21002', grade: 'O', type: 'Core', description: 'The mathematical foundation of computer science, covering logic, set theory, and graph theory.', topics: ['Logic & Proofs', 'Set Theory', 'Graph Theory', 'Combinatorics'] },
      { name: 'Engineering Economics', code: 'HS30101', grade: 'A', type: 'Core', description: 'Applying economic principles to engineering decisions, including cost analysis and project evaluation.', topics: ['Cost-Benefit Analysis', 'Time Value of Money', 'Project Evaluation'] },
      { name: 'Principle of Signals & Systems', code: 'EC20006', grade: 'O', type: 'Core', description: 'Analysis of continuous and discrete-time signals and systems in time and frequency domains.', topics: ['LTI Systems', 'Convolution', 'Fourier Analysis', 'Z-Transform'] },
      { name: 'Operating Systems', code: 'CM20002', grade: 'B', type: 'Core', description: 'A study of the principles behind operating systems, including process management, memory, and file systems.', topics: ['Process Scheduling', 'Memory Management', 'Concurrency', 'File Systems'] },
      { name: 'Database Management Systems', code: 'CM20006', grade: 'E', type: 'Core', description: 'Comprehensive study of relational databases, including data modeling, SQL, and transaction management.', topics: ['SQL', 'ER Modeling', 'Normalization', 'ACID Properties'] },
      { name: 'Operating Systems Laboratory', code: 'CM29002', grade: 'E', type: 'Core', description: 'Practical exercises in OS concepts, such as shell scripting and system calls.', topics: ['Shell Scripting', 'System Calls', 'Process Synchronization'] },
      { name: 'Database Management Systems Laboratory', code: 'CM29006', grade: 'E', type: 'Core', description: 'Hands-on lab for designing databases and writing complex SQL queries.', topics: ['Schema Design', 'Advanced SQL', 'Stored Procedures'] },
      { name: 'Enterprise App Dev using SAP ABAP on HANA', code: 'KS28001', grade: 'A', type: 'Elective', description: 'Specialized training in developing business applications on the SAP HANA platform using the ABAP language.', topics: ['SAP HANA', 'ABAP', 'Business Applications', 'ERP Systems'] },
    ],
  },
  {
    semester: 'Semester 5',
    courses: [
      { name: 'International Economic Cooperation', code: 'HS20122', grade: 'E', type: 'Elective', description: 'Analysis of global economic policies, trade agreements, and international financial institutions.', topics: ['Globalization', 'Trade Policy', 'International Finance'] },
      { name: 'Design and Analysis of Algorithms', code: 'CS30001', grade: 'A', type: 'Core', description: 'Advanced study of algorithm design techniques and complexity analysis.', topics: ['Complexity Analysis', 'Divide and Conquer', 'Dynamic Programming', 'Graph Algorithms'] },
      { name: 'Software Engineering', code: 'CS31001', grade: 'A', type: 'Core', description: 'Principles and practices of the software development lifecycle, from requirements to maintenance.', topics: ['Agile/Scrum', 'UML', 'Design Patterns', 'Testing'] },
      { name: 'Computer Networks', code: 'CS30003', grade: 'A', type: 'Core', description: 'In-depth study of network protocols, architectures, and the layers of the TCP/IP stack.', topics: ['TCP/IP', 'Routing', 'Switching', 'Network Security'] },
      { name: 'Algorithms Laboratory', code: 'CS39001', grade: 'O', type: 'Core', description: 'Implementation of advanced algorithms and data structures for performance-critical applications.', topics: ['Competitive Programming', 'Algorithm Optimization'] },
      { name: 'Computer Networks Laboratory', code: 'CS39003', grade: 'E', type: 'Core', description: 'Practical labs on network configuration, packet analysis, and socket programming.', topics: ['Socket Programming', 'Packet Tracing', 'Router Config'] },
      { name: 'Artificial Intelligence', code: 'CS30002', grade: 'E', type: 'Core', description: 'An introduction to the field of AI, covering search algorithms, knowledge representation, and machine learning.', topics: ['Search Algorithms', 'Logic', 'Planning', 'Intro to ML'] },
      { name: 'Indian Classical, Folk & Bollywood Dance', code: 'SA38009', grade: 'B', type: 'Elective', description: 'A cultural and practical exploration of various forms of Indian dance.', topics: ['Cultural Studies', 'Rhythm', 'Choreography', 'Performance'] },
      { name: 'Machine Learning Concepts', code: 'CS30037', grade: 'E', type: 'Core', description: 'A foundational course in machine learning models, evaluation techniques, and practical applications.', topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation'] },
    ],
  },
  {
    semester: 'Semester 6',
    courses: [
      { name: 'Accounting for Everyone', code: 'CB1047', grade: 'A', type: 'Elective', description: 'An introductory course on the principles of financial accounting and reporting.', topics: ['Financial Statements', 'Bookkeeping', 'Budgeting'] },
      { name: 'Universal Human Values', code: 'HS30401', grade: 'E', type: 'Elective', description: 'A course on ethics, values, and their role in personal and professional life.', topics: ['Ethics', 'Values', 'Professional Conduct'] },
      { name: 'Data Mining and Data Warehousing', code: 'CS30013', grade: 'E', type: 'Core', description: 'Techniques for discovering patterns in large datasets and designing data warehouses for analysis.', topics: ['Data Mining', 'ETL', 'Data Warehousing', 'OLAP'] },
      { name: 'ARM and Advanced Processors', code: 'EC30007', grade: 'O', type: 'Core', description: 'Deep dive into the architecture and programming of ARM processors for embedded systems.', topics: ['ARM Architecture', 'Assembly', 'Embedded Systems', 'SoC'] },
      { name: 'Mini Project', code: 'CS37001', grade: 'O', type: 'Core', description: 'A semester-long project to apply learned software engineering and technical skills to a real problem.', topics: ['Project Management', 'Development Lifecycle', 'Teamwork'] },
      { name: 'Advance Programming Laboratory', code: 'CS39006', grade: 'O', type: 'Core', description: 'A lab focused on advanced programming paradigms and competitive problem-solving.', topics: ['Competitive Programming', 'Advanced Algorithms', 'System Design'] },
      { name: 'Compilers', code: 'CS30006', grade: 'E', type: 'Core', description: 'Study of the theory and practice of compiler design, from lexical analysis to code generation.', topics: ['Lexical Analysis', 'Parsing', 'Code Optimization', 'Syntax Trees'] },
      { name: 'ARM Laboratory', code: 'EC39006', grade: 'E', type: 'Core', description: 'Hands-on programming and interfacing with ARM-based microcontrollers.', topics: ['Embedded C', 'Peripherals', 'Debugging', 'RTOS Basics'] },
      { name: 'Economic Analysis of Decision Rules', code: 'OC30002', grade: 'E', type: 'Elective', description: 'Applying economic and game theory concepts to analyze decision-making strategies.', topics: ['Game Theory', 'Decision Theory', 'Risk Analysis'] },
    ],
  },
];