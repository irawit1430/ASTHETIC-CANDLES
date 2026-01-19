import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { Philosophy } from './components/Philosophy';
import { Footer } from './components/Footer';
import { PROJECTS } from './constants';
import { Project } from './types';
import { LayoutGroup } from 'framer-motion';

function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-graphite text-white font-sans selection:bg-white/20 selection:text-white pb-32 relative">
      {/* Background ambient light - extremely subtle */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-white/[0.02] blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vh] bg-blue-500/[0.01] blur-[150px] rounded-full mix-blend-screen" />
         <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[60vw] h-[40vh] bg-white/[0.01] blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <LayoutGroup>
        <main className="relative z-10">
          <Hero />

          <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-12">
            <div className="mb-12 flex items-end justify-between border-b border-white/5 pb-4">
               <h2 className="text-sm font-semibold tracking-widest text-white/30 uppercase">Selected Projects</h2>
               <span className="text-xs text-white/20 font-mono">01 — 04</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onClick={() => setActiveProject(project)} 
                />
              ))}
            </div>
          </section>

          <Philosophy />
        </main>

        {activeProject && (
          <ProjectModal 
            project={activeProject} 
            onClose={() => setActiveProject(null)} 
          />
        )}
      </LayoutGroup>

      <Footer />
    </div>
  );
}

export default App;