
import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Download, Linkedin, Github, Mail, Calendar } from 'lucide-react';
import * as Theatre from '@theatre/core';
import { PROFILE, SOCIALS, CALENDAR_URL } from '../constants';
import TerminalHero from './TerminalHero';
import MatrixRain from './MatrixRain';

interface HeroProps {
  onNavigate?: (page: string) => void;
  content: any;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, content }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  // Theatre.js State
  useEffect(() => {
    // Handle ESM/CJS interop for Theatre in browser environment
    // @ts-ignore
    const theatreLib = Theatre.default || Theatre;
    const { getProject, types } = theatreLib;

    if (!getProject || !types) {
        console.warn("Theatre.js failed to load properly");
        return;
    }

    // Initialize a project
    const project = getProject('DevOps Portfolio', { 
        state: { 
            sheetsById: {},
            definitionVersion: "0.4.0",
            revisionHistory: []
        } 
    });
    
    const sheet = project.sheet('Hero Scene');
    const terminalObj = sheet.object('Terminal 3D', {
      intensity: types.number(20, { range: [0, 50] }), // Sensitivity of the tilt
      glow: types.rgba({ r: 59, g: 130, b: 246, a: 0.5 }) // Primary-500
    });

    const unsubscribe = terminalObj.onValuesChange((values: any) => {
      // In a real scenario, we'd use these values to tune the tilt sensitivity
    });

    return unsubscribe;
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25; // Division controls sensitivity
    const y = (e.clientY - top - height / 2) / 25;

    setRotation({ x, y });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const handleCVClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
        onNavigate('cv');
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-transparent"
    >
      <MatrixRain />
      
      {/* Simple glow spots for immediate hero focus */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in-up order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold border border-primary-200 dark:border-primary-800 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            {content.available}
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400 mb-2">{content.greeting}</h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
              {PROFILE.name}
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 h-14">
              {content.role}
            </h2>
          </div>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            {content.description}
          </p>

          <div className="flex flex-wrap gap-4">
             {/* Calendar Button (Primary) */}
             <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-500 transition-all hover:-translate-y-1 shadow-lg shadow-primary-900/20">
              {content.cta_calendar} <Calendar size={18} />
            </a>

            {/* Contact Button (Secondary) */}
            <a 
              href="#contact" 
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:opacity-90 transition-all hover:-translate-y-1 shadow-lg shadow-slate-200 dark:shadow-slate-900/50 cursor-pointer"
            >
              {content.cta_contact} <ArrowRight size={18} />
            </a>

            {/* CV Button (Tertiary/Outline) */}
            <button onClick={handleCVClick} className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors backdrop-blur-sm dark:text-white">
              {content.cta_cv} <Download size={18} />
            </button>
          </div>

          <div className="flex items-center gap-6 text-slate-500 dark:text-slate-400 pt-4">
            <a href={SOCIALS[0].url} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:scale-110"><Github size={24} /></a>
            <a href={SOCIALS[1].url} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:scale-110"><Linkedin size={24} /></a>
            <a href={`mailto:${PROFILE.email}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:scale-110"><Mail size={24} /></a>
            <span className="text-sm font-mono border-l border-slate-300 dark:border-slate-700 pl-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
              {content.location}
            </span>
          </div>
        </div>

        {/* 3D Interactive Terminal */}
        <div 
          className="hidden lg:block relative perspective-1000 order-1 lg:order-2"
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        >
           <div 
             className="relative transition-transform duration-100 ease-out will-change-transform"
             style={{
               transform: `rotateX(${-rotation.y}deg) rotateY(${rotation.x}deg)`
             }}
           >
             <div 
               className="absolute -top-10 -right-10 w-24 h-24 border-t-2 border-r-2 border-primary-500/30 rounded-tr-3xl"
               style={{ transform: 'translateZ(20px)' }}
             ></div>
             <div 
                className="absolute -bottom-10 -left-10 w-24 h-24 border-b-2 border-l-2 border-purple-500/30 rounded-bl-3xl"
                style={{ transform: 'translateZ(20px)' }}
             ></div>
             
             <div style={{ transform: 'translateZ(0px)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
               <TerminalHero />
             </div>
             
             <div 
               className="absolute inset-0 bg-primary-500/20 blur-[80px] -z-10 rounded-full"
               style={{ transform: 'translateZ(-50px)' }}
             ></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
