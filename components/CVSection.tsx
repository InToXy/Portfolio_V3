
import React, { useEffect } from 'react';
import { Download, ArrowLeft, Award, GraduationCap, Languages, FileText, CheckCircle2, User, Briefcase, MapPin, Phone, Mail, Github, Linkedin } from 'lucide-react';
import { PROFILE, CERTIFICATIONS, SOCIALS } from '../constants';

interface CVSectionProps {
  onBack?: () => void;
  content: any;
  data: any;
}

const CVSection: React.FC<CVSectionProps> = ({ onBack, content, data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const education = data.experience.education;
  const experience = data.experience.data;
  const passions = data.passions.items;

  return (
    <div className="min-h-screen py-10 md:py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Navigation / Back Button */}
        {onBack && (
          <button 
            onClick={onBack}
            className="mb-8 flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors group px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-sm"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            {content.back}
          </button>
        )}

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-mono text-primary-400 bg-primary-500/10 border border-primary-500/20 rounded-full uppercase tracking-wider">
                {content.tag}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {content.title}
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                {data.about.description}
            </p>
        </div>

        {/* Download Cards Area */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {/* FR Resume Card */}
            <a 
                href="/cv-matheo-pinget-fr.pdf" 
                download
                className="group relative p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-primary-500/50 hover:bg-slate-900/60 transition-all duration-300 backdrop-blur-md overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="p-4 rounded-xl bg-slate-800 group-hover:bg-primary-500/20 text-slate-300 group-hover:text-primary-400 transition-colors">
                            <FileText size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">CV Français</h3>
                            <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{content.download_fr}</p>
                        </div>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-slate-700 group-hover:border-primary-500/50 flex items-center justify-center text-slate-400 group-hover:text-primary-400 transition-all group-hover:scale-110 group-hover:rotate-[-45deg]">
                        <Download size={20} />
                    </div>
                </div>
            </a>

            {/* EN Resume Card */}
            <a 
                href="/cv-matheo-pinget-en.pdf" 
                download
                className="group relative p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-900/60 transition-all duration-300 backdrop-blur-md overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="p-4 rounded-xl bg-slate-800 group-hover:bg-purple-500/20 text-slate-300 group-hover:text-purple-400 transition-colors">
                            <FileText size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">English Resume</h3>
                            <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{content.download_en}</p>
                        </div>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-slate-700 group-hover:border-purple-500/50 flex items-center justify-center text-slate-400 group-hover:text-purple-400 transition-all group-hover:scale-110 group-hover:rotate-[-45deg]">
                        <Download size={20} />
                    </div>
                </div>
            </a>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            
            {/* Left Col: Experience & Education */}
            <div className="lg:col-span-2 space-y-8">
                
                {/* Work Experience */}
                <div className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800 backdrop-blur-md">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-primary-500/10 rounded-lg text-primary-400">
                            <Briefcase size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{content.sections.experience}</h3>
                    </div>
                    
                    <div className="space-y-10 relative">
                        {/* Connecting Line */}
                        <div className="absolute left-[28px] top-4 bottom-4 w-px bg-slate-800"></div>

                        {experience.map((job: any, idx: number) => (
                            <div key={idx} className="relative pl-16 group">
                                <div className="absolute left-[20px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-600 group-hover:border-primary-500 transition-colors z-10"></div>
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-1">
                                    <h4 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">{job.role}</h4>
                                    <span className="px-3 py-1 text-xs font-mono font-bold text-slate-400 bg-slate-800/50 rounded-full border border-slate-700/50 whitespace-nowrap">
                                        {job.period}
                                    </span>
                                </div>
                                <div className="text-slate-300 font-semibold mb-3">{job.company}</div>
                                <ul className="space-y-2">
                                    {job.description.map((desc: string, i: number) => (
                                        <li key={i} className="text-slate-400 text-sm list-disc ml-4 leading-relaxed">
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800 backdrop-blur-md">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                            <GraduationCap size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{content.sections.education}</h3>
                    </div>
                    
                    <div className="space-y-8 relative">
                        {/* Connecting Line */}
                        <div className="absolute left-[28px] top-4 bottom-4 w-px bg-slate-800"></div>

                        {education.map((edu: any, idx: number) => (
                            <div key={idx} className="relative pl-16 group">
                                <div className="absolute left-[20px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-600 group-hover:border-blue-500 transition-colors z-10"></div>
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                                    <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{edu.degree}</h4>
                                    <span className="px-3 py-1 text-xs font-mono font-bold text-slate-400 bg-slate-800/50 rounded-full border border-slate-700/50 whitespace-nowrap">
                                        {edu.period}
                                    </span>
                                </div>
                                <p className="text-slate-400">{edu.school}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Col: Contact, Certs & Languages */}
            <div className="space-y-8">

                 {/* Contact Info */}
                 <div className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800 backdrop-blur-md">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                            <User size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Contact</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 group">
                            <div className="p-2 bg-slate-800 rounded-lg text-slate-400 group-hover:text-white transition-colors">
                                <Mail size={16} />
                            </div>
                            <a href={`mailto:${PROFILE.email}`} className="text-sm text-slate-300 hover:text-primary-400 transition-colors truncate">
                                {PROFILE.email}
                            </a>
                        </div>
                        <div className="flex items-center gap-3 group">
                            <div className="p-2 bg-slate-800 rounded-lg text-slate-400 group-hover:text-white transition-colors">
                                <Phone size={16} />
                            </div>
                            <span className="text-sm text-slate-300">{PROFILE.phone}</span>
                        </div>
                        <div className="flex items-center gap-3 group">
                            <div className="p-2 bg-slate-800 rounded-lg text-slate-400 group-hover:text-white transition-colors">
                                <MapPin size={16} />
                            </div>
                            <span className="text-sm text-slate-300">{PROFILE.location}</span>
                        </div>
                        
                        <div className="flex gap-3 pt-4 border-t border-slate-800 mt-4">
                            {SOCIALS.map(s => (
                                <a 
                                    key={s.name} 
                                    href={s.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-3 bg-slate-800 rounded-xl text-slate-400 hover:bg-primary-600 hover:text-white transition-all hover:-translate-y-1"
                                >
                                    {s.icon === 'github' ? <Github size={18} /> : <Linkedin size={18} />}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Languages */}
                <div className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800 backdrop-blur-md">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-pink-500/10 rounded-lg text-pink-400">
                            <Languages size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{content.sections.languages}</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 flex justify-between items-center">
                            <span className="font-bold text-white">{content.sections.lang_fr}</span>
                            <span className="text-xs font-mono px-2 py-1 bg-slate-700 rounded text-pink-300">{content.sections.lang_native}</span>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 flex justify-between items-center">
                            <span className="font-bold text-white">{content.sections.lang_en}</span>
                            <span className="text-xs font-mono px-2 py-1 bg-slate-700 rounded text-pink-300">{content.sections.lang_tech}</span>
                        </div>
                    </div>
                </div>

                {/* Certifications */}
                <div className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800 backdrop-blur-md">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400">
                            <Award size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{content.sections.certifications}</h3>
                    </div>
                    <div className="space-y-4">
                        {CERTIFICATIONS.map((cert, i) => (
                            <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:bg-slate-800/50 transition-colors">
                                <div className="mt-1">
                                    {cert.badgeUrl ? (
                                        <img src={cert.badgeUrl} alt="Badge" className="w-10 h-10 object-contain" />
                                    ) : (
                                        <CheckCircle2 size={20} className="text-amber-500" />
                                    )}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-200 text-sm leading-tight mb-1">{cert.name}</h4>
                                    <p className="text-xs text-slate-500">{cert.issuer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hobbies (Moved to Right Col bottom) */}
                <div className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800 backdrop-blur-md">
                     <h3 className="text-xl font-bold text-white mb-4">{content.sections.interests}</h3>
                     <div className="flex flex-wrap gap-2">
                        {passions.map((passion: any, i: number) => (
                             <span key={i} className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700 flex items-center gap-2">
                                <span>{passion.emoji}</span> {passion.title}
                             </span>
                        ))}
                     </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default CVSection;
