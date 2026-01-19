import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { Glass } from './ui/Glass';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <Glass 
      onClick={onClick} 
      hoverEffect={true} 
      layoutId={`card-${project.id}`}
      className="p-8 h-64 flex flex-col justify-between"
    >
      <div className="flex justify-between items-start">
        <motion.div 
          layoutId={`title-${project.id}`}
          className="text-xl font-medium text-white/90"
        >
          {project.title}
        </motion.div>
        
        <motion.div 
          layoutId={`badge-${project.id}`}
          className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-white/5 border border-white/10 text-white/60"
        >
          {project.state}
        </motion.div>
      </div>

      <div>
        <motion.p 
          layoutId={`desc-${project.id}`}
          className="text-lg text-white/60 font-light leading-relaxed group-hover:text-white/80 transition-colors duration-300"
        >
          {project.description}
        </motion.p>
      </div>

      {/* Subtle arrow that appears on hover */}
      <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 text-white/40">
        <ArrowUpRight size={20} strokeWidth={1.5} />
      </div>
    </Glass>
  );
};