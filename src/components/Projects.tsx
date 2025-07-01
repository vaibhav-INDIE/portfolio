'use client'

import { Github, ExternalLink, X } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Project } from '../types/ProjectTypes'

interface ProjectsProps {
  projects: Project[];
  categories: string[];
  currentCategory: string;
  onSetCategory: (category: string) => void;
  selectedProject: Project | null;
  onSetSelectedProject: (project: Project | null) => void;
}

export default function Projects({
  projects,
  categories,
  currentCategory,
  onSetCategory,
  selectedProject,
  onSetSelectedProject,
}: ProjectsProps) {
  const { basePath } = useRouter();
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  const filteredProjects = currentCategory === 'All'
    ? projects
    : projects.filter(project => project.category === currentCategory);

  if (selectedProject && selectedMediaIndex >= (selectedProject.media?.length || 0)) {
    setSelectedMediaIndex(0);
  }

  return (
    <section id="projects" className="section py-24 bg-black">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
          My Projects
        </h2>

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
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title + index} 
              className="card project-card group bg-[rgba(28,28,28,1)] border border-[rgba(38,38,38,1)] hover:border-[rgba(255,255,255,0.2)] hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={basePath + project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-500"
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
                    onClick={() => {
                      onSetSelectedProject(project);
                      setSelectedMediaIndex(0);
                    }}
                    className="btn btn-xs btn-outline-subtle hover:btn-primary transform hover:scale-105 transition-all duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div 
          className="modal-overlay"
          onClick={() => onSetSelectedProject(null)}
        >
          <div 
            className="modal-content max-w-3xl w-[90%] bg-[rgba(24,24,24,1)] border border-[rgba(48,48,48,1)] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => onSetSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[rgba(38,38,38,0.8)] text-white/70 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            
            <div className="max-h-[85vh] overflow-y-auto custom-scrollbar">
              {selectedProject.media && selectedProject.media.length > 0 && (
                <div className="relative w-full h-64 md:h-80 bg-[rgba(20,20,20,1)] mb-6">
                  {selectedProject.media[selectedMediaIndex]?.type === 'image' && (
                    <Image 
                      src={basePath + selectedProject.media[selectedMediaIndex].url}
                      alt={selectedProject.media[selectedMediaIndex].caption || `Media ${selectedMediaIndex + 1} for ${selectedProject.title}`}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-t-lg"
                    />
                  )}
                  {selectedProject.media[selectedMediaIndex]?.type === 'video' && (
                    <video
                      src={basePath + selectedProject.media[selectedMediaIndex].url}
                      className="w-full h-full object-contain rounded-t-lg"
                      controls
                      autoPlay={false}
                      playsInline
                      aria-label={selectedProject.media[selectedMediaIndex].caption || `Video media for ${selectedProject.title}`}
                    />
                  )}
                  {selectedProject.media.length > 1 && (
                    <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
                      {selectedProject.media.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedMediaIndex(index)}
                          className={`w-2.5 h-2.5 rounded-full transition-colors ${index === selectedMediaIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/70'}`}
                          aria-label={`View media ${index + 1}: ${item.caption}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{selectedProject.title}</h3>
                
                <p className="text-[rgba(255,255,255,0.8)] mb-6 whitespace-pre-line">
                  {selectedProject.longDescription || selectedProject.description}
                </p>
                
                <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                  {selectedProject.date && (
                    <div className="flex items-center text-[rgba(255,255,255,0.7)]">
                      Date: {selectedProject.date}
                    </div>
                  )}
                  {selectedProject.team && (
                    <div className="flex items-center text-[rgba(255,255,255,0.7)]">
                      Team: {selectedProject.team}
                    </div>
                  )}
                  {selectedProject.category && (
                    <div className="flex items-center text-[rgba(255,255,255,0.7)]">
                      Category: {selectedProject.category}
                    </div>
                  )}
                </div>

                {selectedProject.achievements && selectedProject.achievements.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-[rgba(255,255,255,0.5)] mb-2">Key Achievements</h4>
                    <ul className="list-disc list-inside space-y-1 text-[rgba(255,255,255,0.7)]">
                      {selectedProject.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mb-6">
                  <h4 className="text-sm uppercase tracking-wider text-[rgba(255,255,255,0.5)] mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {(selectedProject.tags || selectedProject.technologies)?.map((tech, idx) => (
                      <span key={idx} className="badge bg-[rgba(38,38,38,1)] text-[rgba(255,255,255,0.8)]">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-[rgba(48,48,48,1)]">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline flex items-center gap-2">
                      <Github size={18} />
                      <span>View on GitHub</span>
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary flex items-center gap-2">
                      <ExternalLink size={18} />
                      <span>View Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}