import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About, { Skills } from './components/AboutSkills';
import Projects, { Journey } from './components/ProjectsJourney';
import Contact, { ResumeSection, Footer } from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-gray-900 dark:text-white selection:bg-emerald-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ResumeSection />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
