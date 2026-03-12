export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  image: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}
