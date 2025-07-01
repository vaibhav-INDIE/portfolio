// e:\Portfolio website\portfolio-website\src\components\ProjectCard.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { Project } from '../types/ProjectTypes';


interface ProjectCardProps {
  project: Project;
  index: number; // For animation delay
  cardMediaIndex: number;
  onViewDetails: (project: Project) => void;
  onNavigateMedia: (projectTitle: string, direction: 'next' | 'prev') => void;
  onSetCardMediaIndex: (projectTitle: string, index: number) => void;
}

export default function ProjectCard({
  project,
  index,
  cardMediaIndex,
  onViewDetails,
  onNavigateMedia,
  onSetCardMediaIndex
}: ProjectCardProps) {
  const displayableTags = project.tags || project.technologies || [];
  
  return (
    <motion.div
      key={project.title + index}
      className="card project-card group bg-[rgba(28,28,28,1)] border border-[rgba(38,38,38,1)] hover:border-[rgba(255,255,255,0.2)] transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative w-full h-48 overflow-hidden">
        {project.media && project.media.length > 0 ? (
          <div className="w-full h-full relative">
            <Image
              src={`${project.media[cardMediaIndex]?.url}` || '/placeholder-image.png'}
              alt={project.media[cardMediaIndex]?.caption || project.title}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
            />
            {project.media.length > 1 && (
              <div className="absolute inset-x-0 bottom-0 flex justify-between items-center p-2 z-10 bg-gradient-to-t from-black/50 to-transparent">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigateMedia(project.title, 'prev');
                  }}
                  className="p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  aria-label="Previous media"
                >
                  <ChevronLeft size={18} />
                </button>
                <div className="flex space-x-2 justify-center">
                  {project.media.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSetCardMediaIndex(project.title, idx);
                      }}
                      className={`w-2 h-2 rounded-full ${idx === cardMediaIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60'} transition-colors`}
                      aria-label={`Go to media ${idx + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigateMedia(project.title, 'next');
                  }}
                  className="p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  aria-label="Next media"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
          </div>
        ) : (
          <div className="w-full h-full relative">
            <Image
              src={`${project.image}` || '/placeholder-image.png'}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
        <p className="text-[rgba(255,255,255,0.7)] text-sm mb-4 line-clamp-3 flex-grow">{project.description}</p>
        <div className="mb-4">
          <h4 className="text-xs uppercase text-[rgba(255,255,255,0.5)] mb-1.5">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {displayableTags.slice(0, 4).map((tag) => (
              <span key={tag} className="badge text-xs">{tag}</span>
            ))}
            {displayableTags.length > 4 && (
              <span className="badge text-xs">+{displayableTags.length - 4}</span>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-[rgba(38,38,38,1)]">
          <div className="flex gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.6)] hover:text-white transition-colors" aria-label={`${project.title} GitHub`}>
                <Github size={18} />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.6)] hover:text-white transition-colors" aria-label={`${project.title} Live Demo`}>
                <ExternalLink size={18} />
              </a>
            )}
          </div>
          <button
            onClick={() => onViewDetails(project)}
            className="btn btn-xs btn-outline-subtle hover:btn-primary"
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}
