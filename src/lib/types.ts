export interface PersonalInfo {
  name: string;
  tagline: string;
  description: string;
  philosophy: string;
  about: string;
  email: string;
  phone: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  x: string;
  resumePath: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
  github: string;
  liveLink?: string;
  featured: boolean;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  status?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface Activity {
  organization: string;
  role: string;
  description: string;
  year: string;
}
