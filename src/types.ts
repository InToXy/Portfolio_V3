
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  featured?: boolean;
  // Extended details
  longDescription?: string;
  features?: string[];
  techStack?: string[]; // More specific list if needed, or reuse tags
  context?: string;
  objective?: string;
  results?: string[];
  competencies?: string[];
  githubUrl?: string;
  demoUrl?: string;
  downloadUrl?: string;
  image?: string;
  category?: string;
  deliverables?: { label: string; url: string }[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  badgeUrl?: string;
}

export interface Passion {
  title: string;
  emoji: string;
  description: string;
  image: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}
