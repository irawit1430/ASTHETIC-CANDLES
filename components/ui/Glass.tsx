import React from 'react';
import { motion } from 'framer-motion';
import { GlassProps } from '../../types';

export const Glass: React.FC<GlassProps> = ({ 
  children, 
  className = '', 
  onClick, 
  hoverEffect = false,
  layoutId,
  as: Component = motion.div
}) => {
  return (
    // @ts-ignore - framer motion dynamic component types are tricky
    <Component
      layoutId={layoutId}
      onClick={onClick}
      className={`
        relative overflow-hidden
        bg-white/[0.03] 
        backdrop-blur-xl 
        border border-white/[0.08] 
        shadow-[0_4px_24px_-1px_rgba(0,0,0,0.2)]
        rounded-2xl
        transition-colors duration-500 ease-out
        ${hoverEffect ? 'hover:bg-white/[0.06] hover:border-white/[0.12] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.3)] cursor-pointer group' : ''}
        ${className}
      `}
    >
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.15] bg-noise pointer-events-none mix-blend-overlay" />
      
      {/* Top Highlight Reflection */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </Component>
  );
};