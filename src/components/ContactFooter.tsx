import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Github, Linkedin, Send, Download, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-gray-50 dark:bg-black/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gray-900 dark:text-white leading-tight">
              Let's Build Something <span className="gradient-text">Extraordinary</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-md leading-relaxed">
              Have a project in mind or just want to chat about the future of AI? I'm always open to new opportunities and collaborations.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email", value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}`, color: "emerald" },
                { icon: Phone, label: "Phone", value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}`, color: "emerald" },
                { icon: Github, label: "GitHub", value: "@madan-genai", href: PERSONAL_INFO.github, color: "gray" },
                { icon: Linkedin, label: "LinkedIn", value: "@madanlal-agenticai", href: PERSONAL_INFO.linkedin, color: "blue" }
              ].map((item, idx) => (
                <motion.a 
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  href={item.href}
                  target={item.label !== "Email" && item.label !== "Phone" ? "_blank" : undefined}
                  rel={item.label !== "Email" && item.label !== "Phone" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-6 group"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center group-hover:bg-${item.color}-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-transparent group-hover:shadow-${item.color}-500/20`}>
                    <item.icon className={`w-6 h-6 text-${item.color}-500 group-hover:text-white transition-colors`} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 dark:text-gray-500 uppercase tracking-[0.2em] font-black mb-1">{item.label}</p>
                    <p className="text-gray-900 dark:text-white font-bold text-lg group-hover:text-emerald-500 transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[3rem] border border-white/10 shadow-2xl"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 bg-gray-100 dark:bg-white/5 border border-transparent dark:border-white/5 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-gray-900 dark:text-white font-medium"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-6 py-4 bg-gray-100 dark:bg-white/5 border border-transparent dark:border-white/5 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-gray-900 dark:text-white font-medium"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-6 py-4 bg-gray-100 dark:bg-white/5 border border-transparent dark:border-white/5 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-gray-900 dark:text-white font-medium resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl shadow-emerald-500/25"
              >
                Send Message <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function ResumeSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-16 md:p-24 rounded-[4rem] border border-white/10 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-500" />
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white tracking-tighter">
            Ready to see my <span className="gradient-text">Full Resume?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Download my detailed resume to learn more about my technical background, academic achievements, and the projects I've worked on.
          </p>
          <motion.a
            href="/resume.pdf"
            download="Madan_Lal_Resume.pdf"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-[2rem] font-black uppercase tracking-widest flex items-center gap-4 mx-auto hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all shadow-2xl w-fit"
          >
            <Download className="w-7 h-7" /> Download Resume (PDF)
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-20 border-t border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <a href="#" className="text-3xl font-bold gradient-text tracking-tighter">{PERSONAL_INFO.name}.ai</a>
            <p className="text-gray-500 dark:text-gray-500 mt-4 text-sm font-medium max-w-xs">
              Engineering the future of intelligence through autonomous agents and neural systems.
            </p>
          </div>
          
          <div className="flex gap-8">
            {[
              { icon: Github, href: PERSONAL_INFO.github },
              { icon: Linkedin, href: PERSONAL_INFO.linkedin },
              { icon: Mail, href: `mailto:${PERSONAL_INFO.email}` }
            ].map((social, idx) => (
              <motion.a 
                key={idx}
                whileHover={{ y: -5, color: "#10b981" }}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
          
          <div className="text-gray-500 dark:text-gray-500 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
