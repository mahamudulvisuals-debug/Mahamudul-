export interface Slide {
  id: number;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  keyMetric?: { value: string; label: string };
  points: string[];
  theme: 'dark' | 'light' | 'accent';
  layoutType: 'split' | 'stats' | 'quote' | 'flow' | 'hero';
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Pitch Decks' | 'Brand Identity' | 'Web & Product' | 'Keynotes';
  client: string;
  year: string;
  image: string;
  deliverables: string[];
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  slides?: Slide[];
  tags: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Article {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}
