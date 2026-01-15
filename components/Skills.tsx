
import React from 'react';
import { Cpu, Cloud, Code2, Server, Shield, Activity } from 'lucide-react';
import { SkillCategory } from '../types';

interface SkillsProps {
  content: {
    tag: string;
    title: string;
    categories: SkillCategory[];
  };
}

const Skills: React.FC<SkillsProps> = ({ content }) => {
  const getIconForCategory = (title: string) => {
    // Basic check on english or french keywords
    const t = title.toLowerCase();
    if (t.includes('devops') || t.includes('cloud')) return <Cloud className="w-6 h-6" />;
    if (t.includes('ci/cd') || t.includes('automation') || t.includes('automatisation')) return <Activity className="w-6 h-6" />;
    if (t.includes('network') || t.includes('réseaux') || t.includes('security') || t.includes('cybersécurité')) return <Shield className="w-6 h-6" />;
    if (t.includes('programming') || t.includes('programmation')) return <Code2 className="w-6 h-6" />;
    if (t.includes('admin') || t.includes('system')) return <Server className="w-6 h-6" />;
    return <Cpu className="w-6 h-6" />;
  };

  return (
    <section id="skills" className="py-20 bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-sm font-bold tracking-widest text-primary-600 dark:text-primary-400 uppercase mb-3 font-mono">
              {content.tag}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              {content.title}
            </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.categories.map((category, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-800 overflow-hidden reveal-on-scroll"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Tech Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full"></div>

              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 relative">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
                    {getIconForCategory(category.title)}
                </div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {category.title}
                </h4>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 text-sm rounded-md font-medium font-mono bg-slate-100/50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-transparent group-hover:border-primary-500/20 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-all hover:scale-105 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
