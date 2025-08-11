export interface Experience {
  title: string;
  company: string;
  duration: string;
  icon: string;
  bullets: string[];
}

export interface Project {
  title: string;
  description: string;
  githubUrl: string;
  technologies: string[];
  image?: string;
}

export interface Skill {
  category: string;
  icon: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  position: string;
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Certification {
  title: string;
  org: string;
  url?: string;
  image?: string;
  type: 'link' | 'image' | 'name';
}

export interface CaseStudy {
  title: string;
  description: string;
  linkedinUrl: string;
  category: string;
}