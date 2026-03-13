import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, SKILLS, PROJECTS, TIMELINE } from '../constants';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Printer, ArrowLeft } from 'lucide-react';

export default function ResumeView({ onClose }: { onClose: () => void }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-white dark:bg-[#050505] overflow-y-auto"
    >
      {/* Controls - Hidden on print */}
      <div className="sticky top-0 z-[110] bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 px-4 py-4 print:hidden">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button 
            onClick={onClose}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-emerald-500 transition-colors font-bold"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Portfolio
          </button>
          <div className="flex gap-4">
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 px-6 py-2 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20"
            >
              <Printer className="w-4 h-4" /> Print / Save as PDF
            </button>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div className="max-w-[850px] mx-auto my-8 p-12 bg-white dark:bg-white/5 shadow-2xl rounded-[2rem] print:shadow-none print:m-0 print:p-8 print:rounded-none dark:text-white text-gray-900">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b-2 border-emerald-500/20 pb-10 mb-10">
          <div>
            <h1 className="text-5xl font-black tracking-tighter mb-2">{PERSONAL_INFO.name}</h1>
            <p className="text-xl text-emerald-500 font-bold uppercase tracking-widest">{PERSONAL_INFO.role}</p>
          </div>
          <div className="space-y-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-emerald-500" /> {PERSONAL_INFO.phone}
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-emerald-500" /> {PERSONAL_INFO.email}
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-emerald-500" /> {PERSONAL_INFO.location}
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="w-4 h-4 text-emerald-500" /> linkedin.com/in/madanlal-agenticai
            </div>
            <div className="flex items-center gap-3">
              <Github className="w-4 h-4 text-emerald-500" /> github.com/madan-genai
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-10">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500 mb-4">Professional Summary</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {PERSONAL_INFO.mission}
          </p>
        </section>

        {/* Experience */}
        <section className="mb-10">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500 mb-6">Professional Experience</h2>
          {TIMELINE.filter(item => item.title !== "Foundation").map((item, idx) => (
            <div key={idx} className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <span className="text-sm font-mono text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">{item.year}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-10">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500 mb-4">Education</h2>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold">University of Sindh</h3>
              <p className="text-gray-600 dark:text-gray-400">{PERSONAL_INFO.education}</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500 mb-6">Skills & Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS.map((cat, idx) => (
              <div key={idx}>
                <h4 className="text-sm font-bold mb-2 text-gray-500 dark:text-gray-400 uppercase tracking-widest">{cat.category}</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {cat.skills.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-10">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500 mb-6">Key Projects</h2>
          <div className="space-y-6">
            {PROJECTS.slice(0, 3).map((project, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold text-emerald-500">#{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t border-gray-200 dark:border-white/10 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-500 font-bold uppercase tracking-widest">
            Generated via MadanLal.ai Portfolio Systems
          </p>
        </footer>
      </div>
    </motion.div>
  );
}
