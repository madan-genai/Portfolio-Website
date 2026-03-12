import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { PROJECTS, TIMELINE } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: any;
  idx: number;
  key?: React.Key;
}

function ProjectCard({ project, idx }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative bg-white dark:bg-white/5 rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-white/10 hover:border-emerald-500/30 transition-all shadow-2xl shadow-black/5"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="aspect-video overflow-hidden relative"
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <div className="flex gap-4">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.github} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            {project.live && (
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={project.live} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all"
              >
                <ExternalLink className="w-6 h-6" />
              </motion.a>
            )}
          </div>
        </div>
      </div>
      <div 
        style={{ transform: "translateZ(30px)" }}
        className="p-8"
      >
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t: string) => (
            <span key={t} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-lg">
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-emerald-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-gray-50 dark:bg-black/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Featured <span className="gradient-text">Innovations</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Practical applications of AI and machine learning solving complex real-world challenges.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 perspective-1000">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="journey" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            The <span className="gradient-text">Evolution</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
          >
            My progression from a curious student to a specialized AI engineer.
          </motion.p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-indigo-500 to-transparent -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-20">
            {TIMELINE.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="absolute left-0 md:left-1/2 top-0 w-5 h-5 bg-emerald-500 rounded-full -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(16,185,129,0.6)] border-4 border-white dark:border-[#030712]" />
                
                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pl-20' : 'md:pr-20'} pl-10`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="glass p-10 rounded-[2.5rem] border border-white/10 hover:border-emerald-500/30 transition-all shadow-xl"
                  >
                    <span className="text-emerald-500 font-mono text-sm font-bold mb-4 block tracking-widest">{item.year}</span>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{item.description}</p>
                  </motion.div>
                </div>
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
