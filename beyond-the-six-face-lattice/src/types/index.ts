export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  link: string;
  linkLabel: string;
  tags: string[];
  featured?: boolean;
}

export interface SkillItem {
  id: string;
  num: string;
  title: string;
  tools: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface WhyItem {
  num: string;
  title: string;
  description: string;
}
