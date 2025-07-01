'use client'

import { Github, ExternalLink, X } from 'lucide-react'
import Image from 'next/image'
import { useState, useCallback, memo } from 'react';
import { Project } from '../types/ProjectTypes'

interface ProjectsProps {
  projects: Project[];
  categories: string[];
  currentCategory: string;
  onSetCategory: (category: string) => void;
  selectedProject: Project | null;
  onSetSelectedProject: (project: Project | null) => void;
}

// Memoize individual project card
const ProjectCard = memo(({ project, onSelect }: { project: Project; onSelect: () => void }) => (
  <div 
    className="card project-card group bg-[rgba(28,28,28,1)] border border-[rgba(38,38,38,1)] hover:border-[rgba(255,255,255,0.2)] transition-all duration-300 overflow-hidden"
  >
    <div className="relative w-full h-48 overflow-hidden">
      <Image
        src={`${project.image}`}
        alt={project.title}
        width={800}
        height={600}
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
    </div>
    <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors duration-300">{project.title}</h3>
      <p className="text-[rgba(255,255,255,0.7)] text-sm mb-4 line-clamp-3 flex-grow">{project.description}</p>
      
      <div className="mb-4">
        <h4 className="text-xs uppercase text-[rgba(255,255,255,0.5)] mb-1.5">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {(project.tags || project.technologies)?.slice(0, 4).map((tag) => (
            <span key={tag} className="badge text-xs hover:bg-primary/20 transition-colors duration-300">{tag}</span>
          ))}
          {(project.tags || project.technologies)?.length > 4 && (
             <span className="badge text-xs hover:bg-primary/20 transition-colors duration-300">+{(project.tags || project.technologies).length - 4}</span>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center mt-auto pt-4 border-t border-[rgba(38,38,38,1)]">
        <div className="flex gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.6)] hover:text-primary transition-colors duration-300" aria-label={`${project.title} GitHub`}>
              <Github size={18} />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.6)] hover:text-primary transition-colors duration-300" aria-label={`${project.title} Live Demo`}>
              <ExternalLink size={18} />
            </a>
          )}
        </div>
        <button 
          onClick={onSelect}
          className="btn btn-xs btn-outline-subtle hover:btn-primary transform hover:scale-105 transition-all duration-300"
        >
          View Details
        </button>
      </div>
    </div>
  </div>
));

ProjectCard.displayName = 'ProjectCard';

// Memoize project modal
const ProjectModal = memo(({ project, onClose, mediaIndex, onMediaIndexChange }: { 
  project: Project; 
  onClose: () => void;
  mediaIndex: number;
  onMediaIndexChange: (index: number) => void;
}) => (
  <div 
    className="modal-overlay"
    onClick={onClose}
  >
    <div 
      className="modal-content max-w-3xl w-[90%] bg-[rgba(24,24,24,1)] border border-[rgba(48,48,48,1)] rounded-xl shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[rgba(38,38,38,0.8)] text-white/70 hover:text-white transition-colors"
        aria-label="Close modal"
      >
        <X size={20} />
      </button>
      
      <div className="max-h-[85vh] overflow-y-auto custom-scrollbar">
        {project.media && project.media.length > 0 && (
          <div className="relative w-full h-64 md:h-80 bg-[rgba(20,20,20,1)] mb-6">
            {project.media[mediaIndex]?.type === 'image' && (
              <Image 
                src={`${project.media[mediaIndex].url}`}
                alt={project.media[mediaIndex].caption || `Media ${mediaIndex + 1} for ${project.title}`}
                width={1200}
                height={800}
                className="w-full h-full object-contain rounded-t-lg"
              />
            )}
            {project.media[mediaIndex]?.type === 'video' && (
              <video
                src={`${project.media[mediaIndex].url}`}
                className="w-full h-full object-contain rounded-t-lg"
                controls
                autoPlay={false}
                playsInline
                aria-label={project.media[mediaIndex].caption || `Video media for ${project.title}`}
              />
            )}
            {project.media.length > 1 && (
              <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
                {project.media.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => onMediaIndexChange(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${index === mediaIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/70'}`}
                    aria-label={`View media ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
        
        <div className="p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{project.title}</h3>
          
          <p className="text-[rgba(255,255,255,0.8)] mb-6 whitespace-pre-line">
            {project.longDescription || project.description}
          </p>
          
          <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {project.date && (
              <div className="flex items-center text-[rgba(255,255,255,0.7)]">
                Date: {project.date}
              </div>
            )}
            {project.team && (
              <div className="flex items-center text-[rgba(255,255,255,0.7)]">
                Team: {project.team}
              </div>
            )}
            {project.category && (
              <div className="flex items-center text-[rgba(255,255,255,0.7)]">
                Category: {project.category}
              </div>
            )}
          </div>

          {project.achievements && project.achievements.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[rgba(255,255,255,0.5)] mb-2">Key Achievements</h4>
              <ul className="list-disc list-inside space-y-1 text-[rgba(255,255,255,0.7)]">
                {project.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {(project.tags || project.technologies) && (
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-[rgba(255,255,255,0.5)] mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {(project.tags || project.technologies)?.map((tech) => (
                  <span key={tech} className="badge">{tech}</span>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline flex items-center gap-2"
              >
                <Github size={16} />
                View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center gap-2"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
));

ProjectModal.displayName = 'ProjectModal';

export default function Projects({
  projects,
  categories,
  currentCategory,
  onSetCategory,
  selectedProject,
  onSetSelectedProject,
}: ProjectsProps) {
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  const handleProjectSelect = useCallback((project: Project) => {
    onSetSelectedProject(project);
    setSelectedMediaIndex(0);
  }, [onSetSelectedProject]);

  const handleCloseModal = useCallback(() => {
    onSetSelectedProject(null);
    setSelectedMediaIndex(0);
  }, [onSetSelectedProject]);

  return (
    <section id="projects" className="section py-24 bg-black">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="animate-flow-x bg-gradient-to-r from-white via-primary to-white bg-[length:200%_auto] bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[rgba(var(--primary-rgb),0.7)] to-transparent"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSetCategory(cat)}
              className={`btn text-sm ${currentCategory === cat ? 'btn-primary' : 'btn-outline'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onSelect={() => handleProjectSelect(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
          mediaIndex={selectedMediaIndex}
          onMediaIndexChange={setSelectedMediaIndex}
        />
      )}
    </section>
  );
}