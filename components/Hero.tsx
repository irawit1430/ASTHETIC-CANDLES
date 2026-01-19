import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[70vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="max-w-3xl z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] text-white/95"
        >
          I build systems that{' '}
          <span className="relative inline-block group cursor-default">
            <span className="relative z-10 transition-all duration-500 group-hover:text-white/80">
              learn
            </span>
            {/* Hover Glass Effect for the word 'learn' */}
            <span className="absolute -inset-2 rounded-lg bg-white/[0.05] backdrop-blur-md border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100" />
          </span>
          .
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-xl md:text-2xl text-white/50 font-light max-w-xl leading-relaxed"
        >
          Engineering digital resilience through precision and adaptive logic.
        </motion.p>
      </div>
    </section>
  );
};