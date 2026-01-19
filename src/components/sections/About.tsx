
import React from 'react';
import { User, ShieldCheck, Server } from 'lucide-react';
import { PROFILE } from '../../constants';

interface AboutProps {
  content: any;
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 reveal-on-scroll">
          <h2 className="text-sm font-bold tracking-widest text-primary-600 dark:text-primary-400 uppercase mb-3">{content.title}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{content.subtitle}</h3>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          {/* Profile Picture */}
          <div className="relative shrink-0 reveal-on-scroll">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white dark:border-slate-800 shadow-2xl overflow-hidden group">
              <img
                src={PROFILE.avatar}
                alt={PROFILE.name}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex-1 text-center md:text-left reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {content.description}
            </p>
          </div>
        </div>

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
