export interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
  caption: string;
}

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  tags?: string[];
  image: string;
  github?: string;
  demo?: string;
  category: string;
  date?: string;
  team?: string;
  achievements?: string[];
  media?: ProjectMedia[];
}
