
import React from 'react';
import { PROFILE, SOCIALS } from '../constants';
import { Mail, Linkedin, Github } from 'lucide-react';

interface FooterProps {
  content: any;
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-20 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.title}</h2>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          {content.text}
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 px-8 py-4 bg-primary-600 rounded-full font-bold hover:bg-primary-500 transition-colors shadow-lg shadow-primary-900/50">
                <Mail size={20} />
                {PROFILE.email}
            </a>
            <div className="flex gap-4">
                <a href={SOCIALS[1].url} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors">
                    <Linkedin size={24} />
                </a>
                <a href={SOCIALS[0].url} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors">
                    <Github size={24} />
                </a>
            </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} {PROFILE.name}. {content.rights}</p>
            <p>{content.made_with}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
