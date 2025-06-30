// e:\Portfolio website\portfolio-website\src\components\ProjectModal.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { X, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { Project, ProjectMedia } from '../types/ProjectTypes'

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  selectedMediaIndex: number;
  onSetSelectedMediaIndex: (index: number) => void;
}

export default function ProjectModal({
  project,
  onClose,
  selectedMediaIndex,
  onSetSelectedMediaIndex
}: ProjectModalProps) {
  const { basePath } = useRouter();
  if (!project) return null;

  const currentMedia = project.media && project.media[selectedMediaIndex] as ProjectMedia | undefined;

  const navigateModalMedia = (direction: 'next' | 'prev') => {
    if (!project || !project.media || project.media.length <= 1) return;
    const mediaCount = project.media.length;
    let newIndex = direction === 'next' ? selectedMediaIndex + 1 : selectedMediaIndex - 1;
    if (newIndex >= mediaCount) newIndex = 0;
    if (newIndex < 0) newIndex = mediaCount - 1;
    onSetSelectedMediaIndex(newIndex);
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-[rgba(30,30,30,1)] rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[rgba(255,255,255,0.7)] hover:text-white transition-colors z-10"
              aria-label="Close project details"
            >
              <X size={28} />
            </button>

            {/* Media Carousel */}
            {project.media && project.media.length > 0 && currentMedia ? (
              <div className="relative w-full aspect-video bg-black">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={selectedMediaIndex}
                    initial={{ opacity: 0, x: selectedMediaIndex > (project.media.length / 2) ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: selectedMediaIndex > (project.media.length / 2) ? 20 : -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={currentMedia.url}
                      alt={currentMedia.caption || project.title}
                      layout="fill"
                      objectFit="contain" // Use contain to see full image
                    />
                  </motion.div>
                </AnimatePresence>

                {project.media.length > 1 && (
                  <>
                    <button
                      onClick={() => navigateModalMedia('prev')}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={() => navigateModalMedia('next')}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
                {currentMedia.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-center">
                    <p className="text-white text-sm">{currentMedia.caption}</p>
                  </div>
                )}
                 {/* Dots Indicator */}
                {project.media.length > 1 && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 p-2">
                        {project.media.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => onSetSelectedMediaIndex(idx)}
                            className={`w-2.5 h-2.5 rounded-full ${idx === selectedMediaIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60'} transition-colors`}
                            aria-label={`Go to image ${idx + 1}`}
                        />
                        ))}
                    </div>
                )}
              </div>
            ) : (
              project.image && (
                <div className="relative w-full aspect-video bg-black">
                  <Image
                    src={basePath + project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              )
            )}

            {/* Project Details */}
            <div className="p-6 md:p-8">
              <h2 className="text-3xl font-bold mb-3 text-white">{project.title}</h2>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[rgba(255,255,255,0.6)] mb-6">
                {project.date && (
                  <div className="flex items-center gap-1.5">
                    <span>{project.date}</span>
                  </div>
                )}
                {project.category && (
                  <div className="flex items-center gap-1.5">
                    <span>{project.category}</span>
                  </div>
                )}
                {project.team && (
                  <div className="flex items-center gap-1.5">
                    <span>{project.team}</span>
                  </div>
                )}
              </div>

              <p className="text-[rgba(255,255,255,0.85)] mb-6 leading-relaxed whitespace-pre-line">
                {project.longDescription || project.description}
              </p>

              {project.achievements && project.achievements.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside text-[rgba(255,255,255,0.7)] space-y-1">
                    {(project.achievements || []).map((ach, i) => <li key={i}>{ach}</li>)}
                  </ul>
                </div>
              )}
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {(project.technologies || []).map((tech) => (
                    <span key={tech} className="badge badge-lg">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-6 border-t border-[rgba(255,255,255,0.1)]">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline flex items-center gap-2">
                    <Github size={18} /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary flex items-center gap-2">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
