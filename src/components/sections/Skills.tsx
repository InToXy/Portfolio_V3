
import React from 'react';
import { Cpu, Cloud, Code2, Server, Shield, Activity, Database, Terminal } from 'lucide-react';
import { SkillCategory } from '../../types';

interface SkillsProps {
  content: {
    tag: string;
    title: string;
    categories: SkillCategory[];
  };
}

const Skills: React.FC<SkillsProps> = ({ content }) => {
  const getIconForCategory = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('devops') || t.includes('cloud')) return <Cloud className="w-8 h-8" />;
    if (t.includes('ci/cd') || t.includes('automation')) return <Terminal className="w-8 h-8" />;
    if (t.includes('network') || t.includes('security')) return <Shield className="w-8 h-8" />;
    if (t.includes('programming')) return <Code2 className="w-8 h-8" />;
    if (t.includes('admin') || t.includes('system')) return <Server className="w-8 h-8" />;
    if (t.includes('data')) return <Database className="w-8 h-8" />;
    return <Cpu className="w-8 h-8" />;
  };

  const getCardStyle = (index: number) => {
    // Bento Grid Layout Logic
    // 0: Large (Cloud/DevOps) -> Col Span 2
    // 1: Medium -> Col Span 1
    // 2: Medium -> Col Span 1
    // 3: Large -> Col Span 2
    if (index % 4 === 0 || index % 4 === 3) return "md:col-span-2 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800/50";
    return "md:col-span-1 bg-white dark:bg-slate-900";
  };

  return (
    <section id="skills" className="py-24 bg-transparent relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-sm font-bold tracking-widest text-primary-600 dark:text-primary-400 uppercase mb-3 font-mono">
            {content.tag}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {content.title}
          </h3>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            A comprehensive technical stack built for scalability, security, and automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          {content.categories.map((category, idx) => {
            const Icon = getIconForCategory(category.title);

            return (
              <div
                key={idx}
                className={`
                    group relative rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden
                    ${getCardStyle(idx)}
                `}
              >
                {/* Background patterns */}
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 dark:opacity-5 dark:group-hover:opacity-10 transition-opacity">
                  {getIconForCategory(category.title)}
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {getIconForCategory(category.title)}
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    {category.title}
                    <span className="h-px bg-slate-200 dark:bg-slate-700 flex-1 ml-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors"></span>
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm rounded-lg font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-transparent hover:border-primary-200 dark:hover:border-primary-700 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
