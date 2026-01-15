
import React, { useRef, useState, useEffect } from 'react';
import { CERTIFICATIONS } from '../constants';
import { Briefcase, GraduationCap, Calendar, Building2, Award, CheckCircle2 } from 'lucide-react';
import { Experience as ExperienceType, Education as EducationType } from '../types';

interface ExperienceProps {
  content: {
    title_work: string;
    title_edu: string;
    title_cert: string;
    data: ExperienceType[];
    education: EducationType[];
  };
}

const Experience: React.FC<ExperienceProps> = ({ content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-transparent transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        {/* Left Column: Work Experience */}
        <div>
            <div className={`flex items-center gap-3 mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg shadow-sm">
                    <Briefcase size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{content.title_work}</h3>
            </div>
            
            <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-12">
                {/* Animated Line Overlay */}
                <div 
                    className={`absolute top-0 left-[-2px] w-[2px] bg-gradient-to-b from-primary-500 to-transparent transition-all duration-[2000ms] ease-out ${isVisible ? 'h-full' : 'h-0'}`}
                ></div>

                {content.data.map((job, idx) => (
                    <div 
                        key={idx} 
                        className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                        style={{ transitionDelay: `${idx * 300}ms` }}
                    >
                        {/* Timeline Dot */}
                        <span 
                            className={`absolute -left-[41px] top-5 h-5 w-5 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-primary-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-transform duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`}
                            style={{ transitionDelay: `${idx * 300 + 150}ms` }}
                        ></span>
                        
                        {/* Content Card */}
                        <div className="group relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300 hover:-translate-y-1">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/0 to-primary-500/0 opacity-0 group-hover:opacity-5 group-hover:from-primary-500/10 transition-all duration-500 rounded-xl"></div>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                    {job.role}
                                </h4>
                                <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 inline-flex items-center gap-1.5 w-fit mt-2 sm:mt-0 border border-slate-200 dark:border-slate-700">
                                    <Calendar size={12} /> {job.period}
                                </span>
                            </div>
                            
                            <div className="flex items-center gap-2 mb-4 text-slate-700 dark:text-slate-300 font-medium">
                                <Building2 size={16} className="text-primary-500" />
                                {job.company}
                            </div>
                            
                            <ul className="space-y-3">
                                {job.description.map((point, i) => (
                                    <li key={i} className="text-slate-600 dark:text-slate-400 text-sm flex items-start gap-3">
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-400/60 shrink-0"></span>
                                        <span className="leading-relaxed">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Right Column: Education & Certifications */}
        <div className="mt-10 lg:mt-0 flex flex-col gap-16">
            
            {/* Education Section */}
            <div>
                <div className={`flex items-center gap-3 mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '300ms' }}>
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg shadow-sm">
                        <GraduationCap size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{content.title_edu}</h3>
                </div>
                
                <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-12">
                     {/* Animated Line Overlay */}
                     <div 
                        className={`absolute top-0 left-[-2px] w-[2px] bg-gradient-to-b from-purple-500 to-transparent transition-all duration-[2000ms] ease-out ${isVisible ? 'h-full' : 'h-0'}`}
                        style={{ transitionDelay: '300ms' }}
                    ></div>

                    {content.education.map((edu, idx) => (
                        <div 
                            key={idx} 
                            className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                            style={{ transitionDelay: `${(idx + 1) * 300 + 300}ms` }}
                        >
                             {/* Timeline Dot */}
                             <span 
                                className={`absolute -left-[41px] top-5 h-5 w-5 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-transform duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`}
                                style={{ transitionDelay: `${(idx + 1) * 300 + 450}ms` }}
                            ></span>

                            <div className="group relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 hover:-translate-y-1">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 opacity-0 group-hover:opacity-5 group-hover:from-purple-500/10 transition-all duration-500 rounded-xl"></div>
                                
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                        {edu.degree}
                                    </h4>
                                    <span className="text-xs font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded border border-slate-200 dark:border-slate-700">
                                        {edu.period}
                                    </span>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 font-medium flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                                    {edu.school}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certifications Section */}
            <div>
                <div className={`flex items-center gap-3 mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '600ms' }}>
                    <div className="p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg shadow-sm">
                        <Award size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{content.title_cert}</h3>
                </div>
                
                <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-8">
                     {/* Animated Line Overlay */}
                     <div 
                        className={`absolute top-0 left-[-2px] w-[2px] bg-gradient-to-b from-amber-500 to-transparent transition-all duration-[2000ms] ease-out ${isVisible ? 'h-full' : 'h-0'}`}
                        style={{ transitionDelay: '600ms' }}
                    ></div>

                    {CERTIFICATIONS.map((cert, idx) => (
                        <div 
                            key={idx} 
                            className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                            style={{ transitionDelay: `${(idx + 1) * 300 + 600}ms` }}
                        >
                             {/* Timeline Dot */}
                             <span 
                                className={`absolute -left-[41px] top-4 h-5 w-5 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] transition-transform duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`}
                                style={{ transitionDelay: `${(idx + 1) * 300 + 750}ms` }}
                            ></span>

                            <div className="group relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 hover:-translate-y-1 flex items-start gap-4">
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/0 to-amber-500/0 opacity-0 group-hover:opacity-5 group-hover:from-amber-500/10 transition-all duration-500 rounded-xl"></div>
                                
                                {cert.badgeUrl ? (
                                    <div className="w-12 h-12 shrink-0 bg-white p-1 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm">
                                        <img src={cert.badgeUrl} alt="Badge" className="w-full h-full object-contain" />
                                    </div>
                                ) : (
                                    <div className="w-12 h-12 shrink-0 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-lg flex items-center justify-center">
                                        <CheckCircle2 size={20} />
                                    </div>
                                )}

                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-tight mb-1">
                                        {cert.name}
                                    </h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        {cert.issuer} • <span className="font-mono text-slate-500 dark:text-slate-500">{cert.date}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
