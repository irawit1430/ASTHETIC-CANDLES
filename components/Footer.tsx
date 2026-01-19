import React from 'react';
import { Glass } from './ui/Glass';

export const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-6 left-0 right-0 z-40 flex justify-center pointer-events-none">
      <Glass className="pointer-events-auto px-6 py-3 flex items-center gap-6 md:gap-8 backdrop-blur-2xl bg-[#050505]/50 border-white/5 shadow-2xl">
        <span className="text-[10px] font-semibold tracking-widest text-white/30 uppercase">
          System Status
        </span>
        
        <div className="w-px h-3 bg-white/10" />
        
        <div className="flex gap-4">
          <StatusItem label="Learning" color="bg-emerald-500" />
          <StatusItem label="Building" color="bg-blue-500" />
          <StatusItem label="Iterating" color="bg-amber-500" />
        </div>
      </Glass>
    </footer>
  );
};

const StatusItem: React.FC<{ label: string; color: string }> = ({ label, color }) => (
  <div className="flex items-center gap-2">
    <span className="relative flex h-1.5 w-1.5">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${color} opacity-20`}></span>
      <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${color} opacity-80`}></span>
    </span>
    <span className="text-[10px] font-medium text-white/60 tracking-wide uppercase">{label}</span>
  </div>
);