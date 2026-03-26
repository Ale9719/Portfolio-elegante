import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiExternalLink, FiLock } from 'react-icons/fi';

const skills = [
  "React", "Tailwind 4", "WordPress", "PHP", 
  "Sass / SCSS", "JavaScript", "jQuery", "WooCommerce", 
  "Bootstrap", "ACF", "Storefront", "Git"
];

const personalProjects = [
  { 
    title: "SeoulSoul", 
    desc: "E-commerce K-Pop con focus su micro-interazioni.", 
    tags: ["React", "Tailwind"],
    url: "https://Ale9719.github.io/SeoulSoul" 
  },
  { 
    title: "Bororgring", 
    desc: "Community per appassionati di raduni auto.", 
    tags: ["React", "Tailwind"],
    url: "https://Ale9719.github.io/Bororgring" 
  },
  { 
    title: "Fallout UI", 
    desc: "Portfolio sperimentale retro-futurista.", 
    tags: ["React", "Tailwind"],
    url: "https://Ale9719.github.io/Portfolio-fallout"
  }
];

const corporateProjects = [
  { title: "ArchiforLittle", desc: "Design d'interni per l'infanzia.", tags: ["WP", "ACF", "Bootstrap", "PHP"] },
  { title: "DCgomme", desc: "Shop pneumatici due ruote.", tags: ["Woo", "PHP", "Storefront", "ACF"] },
  { title: "Orchidea", desc: "Studio di sessuologia.", tags: ["WP", "ACF", "Bootstrap", "SCSS"] },
  { title: "Elap", desc: "Automazione industriale.", tags: ["WP", "PHP", "Storefront", "ACF"] }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen selection:bg-rose-gold selection:text-slate-950">
      
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 px-4 md:px-8 py-4 flex justify-between items-center backdrop-blur-xl border-b border-white/5 bg-slate-950/40">
        <span className="text-rose-gold font-black tracking-tighter text-xl uppercase">A.Piras</span>
        
        <div className="flex gap-4 md:gap-8 items-center">
          <div className="flex gap-3 md:gap-6 border-r border-white/10 pr-4 md:pr-8 text-slate-400">
            <a href="https://github.com/Ale9719" target="_blank" rel="noopener noreferrer" className="hover:text-rose-gold transition-colors">
              <FiGithub size={20}/>
            </a>
            <a href="https://www.linkedin.com/in/alessandra-piras-407990377?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="hover:text-rose-gold transition-colors">
              <FiLinkedin size={20}/>
            </a>
          </div>
          
          <a href="/Piras_Alessandra_CV.pdf" download="Alessandra_Piras_CV.pdf" className="btn-rose-metallic group">
            <FiDownload size={18} className="group-hover:translate-y-0.5 transition-transform" />
            <span className="hidden md:inline">SCARICA CV</span>
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 md:pt-48">
        
        {/* HERO */}
        <section className="mb-24 md:mb-40">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-rose-gold font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-4 block">Disponibile per nuove sfide</span>
            
            <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter mb-8 md:mb-12">
              FRONT<span className="text-rose-gold italic">END</span><br />DEV.
            </h1>
            
            <div className="max-w-2xl border-l-2 border-rose-gold/30 pl-6 md:pl-8">
              <p className="text-lg md:text-2xl text-slate-400 leading-relaxed font-light italic">
                "Amo trasformare il codice in emozione. Dai siti in <span className="text-white">WordPress</span> alla reattività di <span className="text-white font-medium">React</span>."
              </p>
            </div>
          </motion.div>
        </section>
        {/* SKILLS SECTION */}
        <section className="mb-32">
          <h2 className="text-rose-gold font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-10 flex items-center gap-4">
            <span className="w-8 h-px bg-rose-gold/30"></span> 
            Tech Stack & Skills
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {skills.map((skill) => (
              <div 
                key={skill} 
                className="group relative p-4 md:p-6 rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all hover:border-rose-gold/20 flex flex-col justify-between min-h-27.5 md:min-h-32.5"
              >
                <div className="absolute inset-0 bg-linear-to-br from-rose-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <span className="relative z-10 text-sm md:text-lg font-bold text-slate-300 group-hover:text-rose-gold transition-colors leading-tight">
                  {skill}
                </span>
                
                {(skill === "React" || skill === "Tailwind 4") && (
                  <div className="relative z-10 mt-auto pt-2">
                    <span className="inline-block text-[8px] md:text-[9px] font-bold text-rose-gold bg-rose-gold/10 px-2 py-1 rounded-md border border-rose-gold/20 uppercase tracking-widest animate-pulse">
                      In Evolution
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        {/* PROJECTS */}
        <section className="mb-32">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-4 text-white">
            <span className="w-8 md:w-12 h-px bg-rose-gold"></span> Progetti Personali
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalProjects.map((p) => (
              <a 
                key={p.title} 
                href={p.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-8 rounded-4xl bg-white/3 border border-white/5 hover:border-rose-gold/30 transition-all hover:-translate-y-2 block"
              >
                <div className="flex justify-between items-start mb-6">
                  <FiExternalLink className="text-rose-gold text-xl group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] text-white/20 font-mono tracking-widest group-hover:text-rose-gold transition-colors">LIVE DEMO</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-rose-gold transition-colors italic-none">
                  {p.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-6 font-light leading-relaxed">
                  {p.desc}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {p.tags.map(t => (
                    <span key={t} className="text-[10px] font-bold text-rose-gold uppercase tracking-tighter">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* WORK EXPERIENCES */}
        <section className="pb-32">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-4 text-white">
            <span className="w-8 md:w-12 h-px bg-slate-700"></span> Work Experiences
          </h2>
          <div className="space-y-3">
            {corporateProjects.map(p => (
              <div key={p.title} className="p-6 rounded-2xl border border-white/5 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:bg-white/4 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full border border-rose-gold/20 flex items-center justify-center text-rose-gold">
                    <FiLock size={16}/>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">{p.title}</h3>
                    <p className="text-slate-500 text-xs mt-1">{p.desc}</p>
                  </div>
                </div>
                <div className="flex gap-2 self-end sm:self-center">
                  {p.tags.map(t => (
                    <span key={t} className="px-2 py-1 rounded bg-slate-900 text-[9px] font-mono text-slate-500 uppercase tracking-widest">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-white/2 py-16 md:py-32 border-t border-white/5 text-center md:text-left">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-2">Let's Build.</h2>
            <p className="text-slate-400 text-sm md:text-base italic">Pronta a dare il massimo.</p>
          </div>
          <a href="mailto:ale.piras9719@gmail.com" className="text-xl md:text-4xl font-bold text-rose-gold border-b border-rose-gold pb-1">
            ale.piras9719@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}