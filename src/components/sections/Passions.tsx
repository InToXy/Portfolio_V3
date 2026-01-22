
import React from 'react';
import { Passion } from '../../types';

interface PassionsProps {
  content: {
    tag: string;
    title: string;
    items: Passion[];
  };
}

const Passions: React.FC<PassionsProps> = ({ content }) => {
  return (
    <section id="passions" className="py-20 bg-transparent transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 reveal-on-scroll">
          <h2 className="text-sm font-bold tracking-widest text-primary-600 dark:text-primary-400 uppercase mb-3">{content.tag}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{content.title}</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.items.map((passion, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-2xl h-80 reveal-on-scroll"
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <img
                src={passion.image}
                alt={passion.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-4xl mb-2">{passion.emoji}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{passion.title}</h4>
                  <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {passion.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Passions;
