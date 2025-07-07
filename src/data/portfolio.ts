import { Experience, Project, Skill, Achievement, SocialLink } from '../types/portfolio';
import resumeImg from '../assets/resume.jpg';
import placementImg from '../assets/placement.jpg';
import locationImg from '../assets/location.jpg';
import snakeImg from '../assets/snake.jpg';

export const experiences: Experience[] = [
  {
    title: "Full Stack Python Intern",
    company: "LinuxWorld Jaipur",
    description: "Developing full-stack web applications using Python, gaining hands-on experience with modern web technologies and frameworks.",
  },
  {
    title: "Cybersecurity Virtual Internship",
    company: "Mastercard (via Forage)",
    description: "Completed comprehensive cybersecurity training covering threat detection, risk assessment, and security protocols.",
    certificateUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_BgqayvWeeRoX3YJxn_1744654805981_completion_certificate.pdf"
  },
  {
    title: "APAC Solutions Architecture",
    company: "AWS (via Forage)",
    description: "Learned cloud architecture principles, AWS services, and best practices for scalable cloud solutions.",
    certificateUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_BgqayvWeeRoX3YJxn_1744655104388_completion_certificate.pdf"
  },
  {
    title: "Software Engineering Virtual Internship",
    company: "EA Games (via Forage)",
    description: "Explored game development lifecycle, software engineering practices, and agile methodologies.",
    certificateUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_BgqayvWeeRoX3YJxn_1744654161671_completion_certificate.pdf"
  },
  {
    title: "Data Visualization",
    company: "Tata (via Forage)",
    description: "Mastered data visualization techniques, dashboard creation, and business intelligence tools.",
    certificateUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_BgqayvWeeRoX3YJxn_1744532433044_completion_certificate.pdf"
  },
  {
    title: "Generative AI Workshop",
    company: "IIT Delhi",
    description: "Comprehensive workshop on generative AI technologies, machine learning, and practical applications.",
  },
  {
    title: "Career Essentials",
    company: "Microsoft & LinkedIn",
    description: "Professional development program focusing on career growth and industry best practices.",
    certificateUrl: "https://www.linkedin.com/learning/certificates/8308dc20372ec4676b4d55eb9a2c2f05f948c11d182ce710123f8aca50423cd3"
  }
];

export const projects: Project[] = [
  {
    title: "Resume Builder",
    description: "Dynamic resume generation tool with export options and customizable templates for professional use.",
    githubUrl: "https://github.com/kusshhhh1/RESUME-BUILDER",
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
    githubUrl: "#",
    technologies: ["HTML", "CSS", "JavaScript", "Canvas API"],
    image: snakeImg
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