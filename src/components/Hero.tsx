import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import { ArrowRight, Download, Mail } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ opacity }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-8 text-sm font-bold tracking-widest text-emerald-500 uppercase bg-emerald-500/10 rounded-full border border-emerald-500/20"
          >
            {PERSONAL_INFO.education}
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter text-gray-900 dark:text-white leading-[0.9]">
            Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-3xl font-medium text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-tight"
          >
            {PERSONAL_INFO.role}
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-500 dark:text-gray-500 mb-12 max-w-2xl mx-auto italic font-light"
          >
            "{PERSONAL_INFO.mission}"
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/25"
            >
              View Projects <ArrowRight className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="/resume.pdf"
              download="Madan_Lal_Resume.pdf"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 rounded-2xl font-bold flex items-center gap-2 transition-all"
            >
              Download Resume <Download className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, color: "#10b981" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-transparent text-gray-600 dark:text-gray-400 font-bold flex items-center gap-2 transition-all"
            >
              Contact Me <Mail className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-16 bg-gradient-to-b from-emerald-500 to-transparent" 
        />
      </motion.div>
    </section>
  );
}
