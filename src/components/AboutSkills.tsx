import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, SKILLS } from '../constants';
import { Brain, Code2, Terminal, Cpu } from 'lucide-react';

const iconMap: Record<string, any> = {
  "AI / Machine Learning": Brain,
  "Programming": Code2,
  "Tools & Tech": Terminal
};

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white leading-tight">
              Engineering the <span className="gradient-text">Future of Intelligence</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>{PERSONAL_INFO.about}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="p-6 glass rounded-3xl border border-white/10">
                <p className="text-3xl font-bold text-emerald-500 mb-1">5th</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Semester IT</p>
              </div>
              <div className="p-6 glass rounded-3xl border border-white/10">
                <p className="text-3xl font-bold text-indigo-500 mb-1">10+</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">AI Projects</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border-2 border-emerald-500/20 p-4">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative group">
                <img 
                  src="https://picsum.photos/seed/tech/800/800" 
                  alt="Madan" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            {/* Decorative elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" 
            />
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-32 bg-gray-50/50 dark:bg-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Technical <span className="gradient-text">Arsenal</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
          >
            A specialized toolkit focused on building autonomous agents and intelligent systems.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((category, idx) => {
            const Icon = iconMap[category.category] || Cpu;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass p-10 rounded-[2.5rem] border border-white/10 hover:border-emerald-500/30 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                  <Icon className="w-8 h-8 text-emerald-500 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{category.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (idx * 0.2) + (sIdx * 0.05) }}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(16, 185, 129, 0.2)" }}
                      className="px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
