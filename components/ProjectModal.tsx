import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { Glass } from './ui/Glass';
import { X } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        <div className="relative w-full max-w-3xl pointer-events-none"> {/* Wrapper to position the modal */}
          <Glass 
            layoutId={`card-${project.id}`}
            className="w-full bg-[#0a0a0a]/90 backdrop-blur-3xl overflow-hidden pointer-events-auto max-h-[85vh] overflow-y-auto"
          >
             <div className="p-8 md:p-12">
                <div className="flex justify-between items-start mb-12">
                  <div className="space-y-2">
                    <motion.div 
                      layoutId={`title-${project.id}`}
                      className="text-3xl md:text-4xl font-semibold text-white/95"
                    >
                      {project.title}
                    </motion.div>
                     <motion.p 
                      layoutId={`desc-${project.id}`}
                      className="text-xl text-white/60 font-light"
                    >
                      {project.description}
                    </motion.p>
                  </div>
                  
                   <div className="flex flex-col items-end gap-4">
                     <button 
                        onClick={(e) => { e.stopPropagation(); onClose(); }}
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/60"
                      >
                        <X size={20} />
                      </button>
                      <motion.div 
                        layoutId={`badge-${project.id}`}
                        className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-white/5 border border-white/10 text-white/60"
                      >
                        {project.state}
                      </motion.div>
                   </div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-12"
                >
                  <div className="space-y-4">
                    <h3 className="text-xs uppercase tracking-widest text-white/40 font-semibold">Why</h3>
                    <p className="text-white/80 leading-relaxed font-light">
                      {project.why}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xs uppercase tracking-widest text-white/40 font-semibold">System Logic</h3>
                    <p className="text-white/80 leading-relaxed font-light">
                      {project.systemLogic}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xs uppercase tracking-widest text-white/40 font-semibold">What I Learned</h3>
                    <p className="text-white/80 leading-relaxed font-light">
                      {project.learned}
                    </p>
                  </div>
                </motion.div>
             </div>
          </Glass>
        </div>
      </div>
    </AnimatePresence>
  );
};