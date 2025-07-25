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
    duration: "June 2025 – Present",
    icon: "python",
    bullets: [
      "Working on backend and frontend using Python, Flask, and React",
      "Built multiple Dockerized apps and deployed on cloud",
      "Gained hands-on experience with automation and system tools"
    ]
  },
  {
    title: "Data Science with Python Intern",
    company: "DigiAM",
    duration: "March 2025 – May 2025",
    icon: "datascience",
    bullets: [
      "Worked on supervised ML models for classification and regression",
      "Built small dashboard projects with Pandas, Seaborn, and Matplotlib",
      "Learned data preprocessing, feature engineering, and evaluation"
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