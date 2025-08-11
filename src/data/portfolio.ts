import { Experience, Project, Skill, Achievement, SocialLink } from '../types/portfolio';
import resumeImg from '../assets/resume.jpg';
import placementImg from '../assets/placement.jpg';
import locationImg from '../assets/location.jpg';
import snakeImg from '../assets/snake.jpg';
import placeholderImg from '../assets/resume.jpg';
import TruthscopeImg from '../assets/Truthscope.jpg';
import WebtaskerImg from '../assets/Webtasker.jpg';
import EnterpriseImg from '../assets/Enterprise.jpg';
import GradioImg from '../assets/Gradio.jpg';
import NexoraImg from '../assets/nexora.jpg';
import NameSearchImg from '../assets/name-search.jpg';
import MoodMirrorImg from '../assets/mood-mirror.jpg';
import GestureXImg from '../assets/gesturex.jpg';
import ShadowHawkImg from '../assets/shadowhawk.jpg';
import GeminiImg from '../assets/gemini.jpg';

export interface Certification {
  title: string;
  org: string;
  url?: string;
  image?: string;
  type: 'link' | 'image' | 'name';
}

export const certifications = [
  {
    title: 'Data Analytics & Visualization',
    org: 'Mastercard x Forage',
    type: 'link',
    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_BgqayvWeeRoX3YJxn_1744654805981_completion_certificate.pdf',
  },
  {
    title: 'AWS Cloud Technology Virtual Internship',
    org: 'AWS x Forage',
    type: 'link',
    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_BgqayvWeeRoX3YJxn_1744655104388_completion_certificate.pdf',
  },
  {
    title: 'Game Design & Development',
    org: 'EA Games x Forage',
    type: 'link',
    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_BgqayvWeeRoX3YJxn_1744654161671_completion_certificate.pdf',
  },
  {
    title: 'Data Analysis Virtual Program',
    org: 'Tata Group x Forage',
    type: 'link',
    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_BgqayvWeeRoX3YJxn_1744532433044_completion_certificate.pdf',
  },
  {
    title: 'Data Analysis Using Excel',
    org: 'Microsoft LinkedIn Learning',
    type: 'link',
    url: 'https://www.linkedin.com/learning/certificates/8308dc20372ec4676b4d55eb9a2c2f05f948c11d182ce710123f8aca50423cd3',
  },
  {
    title: 'Introduction to Cyber Security',
    org: 'Simplilearn SkillUp',
    type: 'pdf',
    pdf: '/src/assets/CYBER SECURITY.pdf',
  },
  {
    title: 'Python 101 for Data Science',
    org: 'IBM Cognitive Class',
    type: 'pdf',
    pdf: '/src/assets/IBM PYTHON FOR DATA SCIENCE.pdf',
  },
  {
    title: 'SQL & Relational Databases 101',
    org: 'IBM Cognitive Class',
    type: 'pdf',
    pdf: '/src/assets/IBM SQL AND RDBMS.pdf',
  },
  {
    title: 'Machine Learning Basics',
    org: 'Simplilearn SkillUp',
    type: 'pdf',
    pdf: '/src/assets/MACHINE LEARNING.pdf',
  },
  {
    title: 'Investment Banking Job Simulation',
    org: 'JP Morgan x Forage',
    type: 'pdf',
    pdf: '/src/assets/JP MORGAN VIRTUAL INTERNSHIP.pdf',
  },
];

export const experiences: Experience[] = [
  {
    title: "Python Full Stack Web Development Intern",
    company: "LinuxWorld Jaipur",
    duration: "June 2025 – August 2025",
    icon: "python",
    bullets: [
      "Worked on backend and frontend using Python, Flask, and React",
      "Built multiple Dockerized apps and deployed on cloud",
      "Gained hands-on experience with automation and system tools"
    ]
  },
  {
    title: "Web Development Intern",
    company: "DigiAM",
    duration: "June 2025 – August 2025",
    icon: "webdev",
    bullets: [
      "Developed responsive web applications using modern frontend technologies",
      "Built interactive dashboards with HTML, CSS, and JavaScript",
      "Collaborated with team members on UI/UX improvements and bug fixes"
    ]
  },
  {
    title: "Data Science Intern",
    company: "Pinnacle Labs",
    duration: "April 2025 – June 2025",
    icon: "ml",
    bullets: [
      "Developed a fake news detection app using NLP and ML",
      "Applied Tfidf, Logistic Regression, and deployed the model",
      "Gained experience in working on real-world data science problems"
    ]
  },
  {
    title: "Head Coordinator – Music Club",
    company: "SRMS CET",
    duration: "August 2024 – Present",
    icon: "music",
    bullets: [
      "Leading the college music club with event planning & execution",
      "Managed inter-college competitions and technical setups",
      "Coordinated workshops, team rehearsals, and cultural fests"
    ]
  },
  {
    title: "Coordinator – Music Club",
    company: "SRMS CET",
    duration: "August 2023 – May 2024",
    icon: "music",
    bullets: [
      "Assisted in organizing musical events and auditions",
      "Handled scheduling and backstage coordination",
      "Contributed to social media and promotion strategies"
    ]
  }
];

export const projects: Project[] = [
  {
    title: "Resume Builder",
    description: "Dynamic resume generation tool with export options and customizable templates for professional use.",
    githubUrl: "https://github.com/kusshhhh1/Resume-Builder",
    technologies: ["React", "JavaScript", "CSS", "HTML"],
    image: resumeImg
  },
  {
    title: "Placement Management System",
    description: "Comprehensive admin and student dashboard for tracking placement activities and opportunities.",
    githubUrl: "#",
    technologies: ["Python", "Django", "PostgreSQL", "Bootstrap"],
    image: placementImg
  },
  {
    title: "Location Helper App",
    description: "Find current location, discover nearby groceries, and get routes via Google Maps integration.",
    githubUrl: "https://github.com/kusshhhh1/Location-Helper-App",
    technologies: ["JavaScript", "Google Maps API", "HTML", "CSS"],
    image: locationImg
  },
  {
    title: "Snake Game",
    description: "Classic web-based snake game with smooth controls and score tracking system.",
    githubUrl: "https://github.com/kusshhhh1/Snake-game",
    technologies: ["HTML", "CSS", "JavaScript", "Canvas API"],
    image: snakeImg
  },
  {
    title: "TruthScope – AI-Powered Fake News Detection App",
    description: "A smart web app that detects whether news is Real, Fake, or Uncertain using Machine Learning and NewsAPI.",
    githubUrl: "https://github.com/kusshhhh1/truthscope-fake-news-detector",
    technologies: ["React", "Machine Learning", "NewsAPI", "Python", "Flask"],
    image: TruthscopeImg
  },
  {
    title: "WebTasker – JavaScript Automation Panel",
    description: "A browser-based automation tool built with HTML, CSS, and JS to capture webcam photos, record videos, send WhatsApp messages, and integrate with EmailJS and Gmail API.",
    githubUrl: "https://github.com/kusshhhh1/WebTasker",
    technologies: ["JavaScript", "HTML", "CSS", "EmailJS", "Gmail API"],
    image: WebtaskerImg
  },
  {
    title: "Enterprise Automation Panel (Streamlit)",
    description: "A Python-Streamlit dashboard for sending emails, managing files, scanning networks, and monitoring system resources in real time.",
    githubUrl: "https://github.com/kusshhhh1/automation_panel",
    technologies: ["Python", "Streamlit", "Networking", "Email"],
    image: EnterpriseImg
  },
  {
    title: "Gradio Automation Panel",
    description: "A lightweight Python app using Gradio for email sending, file listing, IP lookup, and real-time system monitoring.",
    githubUrl: "https://github.com/kusshhhh1/gradio-automation-panel",
    technologies: ["Python", "Gradio", "Networking", "Email"],
    image: GradioImg
  },
  {
    title: "Nexora",
    description: "A modern full-stack platform with dual dashboards for organizers and attendees. Features include event creation, task tracking, QR-based attendance, live polls & Q&A, real-time updates, and detailed analytics — all in one centralized solution.",
    githubUrl: "https://github.com/kusshhhh1/Nexora",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "PostgreSQL", "JWT", "Docker", "Vercel", "AWS"],
    image: NexoraImg
  },
  {
    title: "Name Search Engine",
    description: "A modern and professional web app that allows users to search any name on Google and instantly get a list of relevant search result links. Features real-time Google search, clean UI, loading indicators, and responsive design.",
    githubUrl: "https://github.com/kusshhhh1/Name_Search_Engine",
    technologies: ["Bolt.new", "Google Search API", "CSS", "JavaScript", "Responsive Design"],
    image: NameSearchImg
  },
  {
    title: "MoodMirror – AI-Based Mood Detection App",
    description: "An AI-powered web application that detects your mood in real-time using facial expressions captured through the webcam. Built with machine learning and computer vision to recognize emotions like Happy, Sad, Angry, Neutral, and more.",
    githubUrl: "https://github.com/kusshhhh1/MoodMirror",
    technologies: ["Python", "OpenCV", "TensorFlow", "Keras", "Deep Learning", "CNN", "Gradio", "Streamlit"],
    image: MoodMirrorImg
  },
  {
    title: "GestureX Pro",
    description: "AI-Powered gesture recognition app that uses OpenCV and CVZone to detect hand gestures in real time and trigger actions like launching apps or managing AWS EC2 instances. Features finger-based controls for various applications.",
    githubUrl: "https://github.com/kusshhhh1/GestureX-Pro",
    technologies: ["Python", "OpenCV", "CVZone", "Boto3", "AWS EC2", "Computer Vision"],
    image: GestureXImg
  },
  {
    title: "ShadowHawk - Enterprise Insider Threat Detection System",
    description: "An enterprise-grade insider threat detection system built with React, Node.js, and MongoDB. Uses AI-powered risk scoring to identify, monitor, and respond to potential insider threats in real-time with comprehensive logging and alert management.",
    githubUrl: "https://github.com/kusshhhh1/ShadowHawk",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Docker", "Nginx"],
    image: ShadowHawkImg
  },
  {
    title: "JS Search Engine - Gemini AI Studio",
    description: "A modern React application that provides AI-powered conversations and image generation using Google's Gemini API. Features include text chat, voice chat, image generation, and modern UI built with React, TypeScript, and Tailwind CSS.",
    githubUrl: "https://github.com/kusshhhh1/JS_Search_Engine",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Gemini API", "AI", "Voice Chat", "Image Generation"],
    image: GeminiImg
  }
];

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    icon: "code",
    skills: ["Python", "JavaScript/TypeScript", "C++", "Java", "Golang"]
  },
  {
    category: "Tools & Platforms",
    icon: "wrench",
    skills: ["Git", "Docker", "Kubernetes", "AWS", "GCP", "Supabase", "Salesforce"]
  },
  {
    category: "Libraries & Frameworks",
    icon: "layers",
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "React.js", "Next.js", "Node.js", "Express.js", "Flask", "Django"]
  },
  {
    category: "Data & Analytics",
    icon: "database",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "PostgreSQL", "MongoDB", "GeoPandas", "Rasterio"]
  }
];

export const achievements: Achievement[] = [
  {
    title: "Human Following Robot",
    position: "1st Place",
    icon: "trophy"
  },
  {
    title: "Sherlock Holmes Event",
    position: "2nd Place",
    icon: "award"
  },
  {
    title: "Battle of Bands",
    position: "1st Place",
    icon: "trophy"
  },
  {
    title: "Code Hunt",
    position: "2nd Place",
    icon: "award"
  },
  {
    title: "Clone the Web",
    position: "3rd Place",
    icon: "medal"
  }
];

export const caseStudies = [
  {
    title: "Activation Functions and Their Compatibility with Different Pooling Types",
    description: "Deep dive into neural network activation functions and their optimal pairing with various pooling techniques for enhanced model performance.",
    linkedinUrl: "https://www.linkedin.com/pulse/activation-functions-compatibility-different-pooling-types-sharma-dzrge?trackingId=7jfcDNOLVBVCCdXop1zOig%3D%3D",
    category: "Machine Learning"
  },
  {
    title: "Optimizers in Machine Learning - Use Cases Explained",
    description: "Comprehensive guide to machine learning optimizers, their applications, and when to use each one for optimal training results.",
    linkedinUrl: "https://www.linkedin.com/pulse/optimizers-machine-learning-use-cases-explained-kushagra-sharma-wvfge?trackingId=8TjXWLj1uxyXfpmN3Ru5nA%3D%3D",
    category: "Machine Learning"
  },
  {
    title: "Inside Llama 2 - Architecture, API Options and When to Use It",
    description: "Technical exploration of Llama 2's architecture, available APIs, and practical implementation scenarios for different use cases.",
    linkedinUrl: "https://www.linkedin.com/pulse/inside-llama-2-architecture-api-options-when-use-kushagra-sharma-wdype?trackingId=8xLdT0dPdJblAb1c4XcesQ%3D%3D",
    category: "AI & LLMs"
  },
  {
    title: "Different Weight Initializers in Neural Networks and Their Use Cases",
    description: "Analysis of various weight initialization techniques in neural networks and their impact on training convergence and model performance.",
    linkedinUrl: "https://www.linkedin.com/pulse/different-weight-initializers-neural-networks-use-cases-sharma-ozhhe?trackingId=w%2Bg7M0H3D1nwsxsddBczbA%3D%3D",
    category: "Machine Learning"
  },
  {
    title: "Different Techniques of Data Imputation in Machine Learning",
    description: "Comprehensive overview of data imputation strategies for handling missing values in machine learning datasets.",
    linkedinUrl: "https://www.linkedin.com/pulse/article-draft-different-techniques-data-imputation-machine-sharma-esoge?trackingId=BMqhM4n7mIuUJgTeqPXwHw%3D%3D",
    category: "Data Science"
  },
  {
    title: "Why Companies Use Kubernetes - Real Case Studies and Benefits",
    description: "Real-world examples of how leading companies leverage Kubernetes for scalable, resilient, and efficient container orchestration.",
    linkedinUrl: "https://www.linkedin.com/pulse/why-companies-use-kubernetes-real-case-studies-benefits-sharma-b4xse?trackingId=n8y0CoYdXr%2BNRernOd6DPw%3D%3D",
    category: "DevOps & Cloud"
  },
  {
    title: "Understanding Amazon S3 Storage Classes",
    description: "Complete guide to AWS S3 storage classes, helping you choose the right storage option for cost optimization and performance.",
    linkedinUrl: "https://www.linkedin.com/pulse/understanding-amazon-s3-storage-classes-choosing-right-sharma-rt8ze?trackingId=44sM4EjHdQTa%2F8IIrj1SCA%3D%3D",
    category: "AWS & Cloud"
  },
  {
    title: "AWS Use Case Study - Real-World Success Stories",
    description: "Compilation of successful AWS implementations across various industries, showcasing real-world benefits and outcomes.",
    linkedinUrl: "https://www.linkedin.com/pulse/aws-use-case-study-real-world-success-stories-driving-kushagra-sharma-zwg0e?trackingId=%2FpSazHSNJimCypke9CQB4g%3D%3D",
    category: "AWS & Cloud"
  },
  {
    title: "Docker in the Real World - Why Companies Are Using It",
    description: "Analysis of Docker adoption across enterprises, highlighting the practical benefits and real-world applications.",
    linkedinUrl: "https://www.linkedin.com/posts/kushagra-sharma-1b9336317_linuxworldinternship-docker-casestudy-activity-7349713598924918784-W_w5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFBRMJ0Bu_MEQ1E2dluUiNHokZwfOhToz_A",
    category: "DevOps & Cloud"
  },
  {
    title: "Why Top Companies Use Linux - Real World Benefits",
    description: "Exploration of Linux adoption in enterprise environments, examining the strategic advantages and cost benefits.",
    linkedinUrl: "https://www.linkedin.com/posts/kushagra-sharma-1b9336317_why-top-companies-use-linux-real-world-activity-7349695457104683008-XWvD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFBRMJ0Bu_MEQ1E2dluUiNHokZwfOhToz_A",
    category: "DevOps & Cloud"
  },
  {
    title: "How Netflix Uses AWS to Power Global Streaming",
    description: "Case study of Netflix's AWS infrastructure, demonstrating how cloud computing enables global-scale streaming services.",
    linkedinUrl: "https://www.linkedin.com/posts/kushagra-sharma-1b9336317_case-study-how-netflix-uses-amazon-web-activity-7349462411889856514-3qZp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFBRMJ0Bu_MEQ1E2dluUiNHokZwfOhToz_A",
    category: "AWS & Cloud"
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/kusshhhh1",
    icon: "github"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/kushagra-sharma-1b9336317",
    icon: "linkedin"
  },
  {
    platform: "Gmail",
    url: "mailto:kushagrasharm1@gmail.com",
    icon: "mail"
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/_kusshhhh",
    icon: "instagram"
  }
];