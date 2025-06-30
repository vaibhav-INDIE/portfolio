export interface ProjectMedia {
  url: string;
  caption?: string;
  type?: 'image' | 'video'; // Optional: to distinguish media types
}

export interface Project {
  title: string;
  description: string;
  image?: string; // Fallback or cover image
  media?: ProjectMedia[];
  technologies?: string[];
  tags?: string[]; // ProjectCard uses (project.tags || project.technologies)
  github?: string;
  demo?: string;
  date?: string;
  category?: string;
  team?: string;
  longDescription?: string;
  achievements?: string[];
  // You can add other relevant fields here, e.g.:
  // id?: string | number;
  // detailedDescription?: string;
  // date?: string;
  // client?: string;
  // role?: string;
}
