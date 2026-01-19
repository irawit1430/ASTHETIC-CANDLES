import React from 'react';
import { Glass } from './ui/Glass';
import { PHILOSOPHY_TEXT } from '../constants';
import { motion } from 'framer-motion';

export const Philosophy: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="mb-8">
         <h2 className="text-sm font-semibold tracking-widest text-white/30 uppercase">Philosophy</h2>
      </div>
      
      <Glass className="w-full p-10 md:p-16">
        <div className="max-w-4xl mx-auto">
          {PHILOSOPHY_TEXT.split('\n').filter(Boolean).map((line, index) => (
            <motion.p 
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="text-xl md:text-3xl text-white/80 font-light leading-relaxed mb-6 last:mb-0 tracking-wide"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </Glass>
    </section>
  );
};