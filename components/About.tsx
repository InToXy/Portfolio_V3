
import React from 'react';
import { User, ShieldCheck, Server } from 'lucide-react';

interface AboutProps {
  content: any;
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="reveal-on-scroll">
            <h2 className="text-sm font-bold tracking-widest text-primary-600 dark:text-primary-400 uppercase mb-3">{content.title}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">{content.subtitle}</h3>
        </div>
        
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-12 reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
          {content.description}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-slate-800/40 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 shadow-sm hover:shadow-md transition-all reveal-on-scroll border border-slate-100 dark:border-slate-700/50" style={{ transitionDelay: '200ms' }}>
                <div className="w-12 h-12 mx-auto bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4">
                    <Server size={24} />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{content.cards.infra.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">{content.cards.infra.desc}</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-slate-800/40 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 shadow-sm hover:shadow-md transition-all reveal-on-scroll border border-slate-100 dark:border-slate-700/50" style={{ transitionDelay: '300ms' }}>
                <div className="w-12 h-12 mx-auto bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center mb-4">
                    <User size={24} />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{content.cards.collab.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">{content.cards.collab.desc}</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/50 dark:bg-slate-800/40 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 shadow-sm hover:shadow-md transition-all reveal-on-scroll border border-slate-100 dark:border-slate-700/50" style={{ transitionDelay: '400ms' }}>
                <div className="w-12 h-12 mx-auto bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mb-4">
                    <ShieldCheck size={24} />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{content.cards.security.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">{content.cards.security.desc}</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
