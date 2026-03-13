import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About, { Skills } from './components/AboutSkills';
import Projects, { Journey } from './components/ProjectsJourney';
import Contact, { ResumeSection, Footer } from './components/ContactFooter';
import ResumeView from './components/ResumeView';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-gray-900 dark:text-white selection:bg-emerald-500/30">
      <Navbar onViewResume={() => setShowResume(true)} />
      <main>
        <Hero onViewResume={() => setShowResume(true)} />
        <About />
        <Skills />
        <Projects />
        <ResumeSection onViewResume={() => setShowResume(true)} />
        <Journey />
        <Contact />
      </main>
      <Footer />
      
      <AnimatePresence>
        {showResume && <ResumeView onClose={() => setShowResume(false)} />}
      </AnimatePresence>
    </div>
  );
}
