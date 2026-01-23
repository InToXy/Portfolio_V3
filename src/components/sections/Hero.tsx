import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Linkedin, Github, Mail, Calendar, Award } from 'lucide-react';
import { PROFILE, SOCIALS, CALENDAR_URL } from '../../constants';
import PipelineAnimation from '../features/PipelineAnimation';
import { Particles } from '../ui/Particles';
import { BlurFade } from '../ui/blur-fade';

interface HeroProps {
  onNavigate?: (page: string) => void;
  content: any;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, content }) => {
  const [currentPassion, setCurrentPassion] = useState(0);
  const passions = content.rotating_text || ["Randonneur", "Motard", "Voyageur"]; // Fallback if not yet loaded


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPassion((prev) => (prev + 1) % passions.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [passions.length]);

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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-visible bg-transparent">

      {/* Abstract Background Mesh */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color="#64748b"
          refresh
        />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary-500/10 to-transparent opacity-40 blur-3xl rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/10 to-transparent opacity-30 blur-3xl rounded-tr-full" />
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/20 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">

        {/* Text Content */}
        <div className="space-y-8 animate-fade-in-up order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            {content.available}
          </div>

          <div className="space-y-4">
            <BlurFade delay={0.25} inView>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {PROFILE.name}
              </h1>
            </BlurFade>

            <BlurFade delay={0.25 * 2} inView>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-lg md:text-xl font-medium text-slate-600 dark:text-slate-400">
                <span className="text-primary-600 dark:text-primary-400 font-bold">{content.subtitle}</span>
                <span className="hidden md:inline w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>

                <div className="relative h-8 overflow-hidden w-40">
                  {passions.map((passion, idx) => (
                    <span
                      key={passion}
                      className={`absolute left-0 transition-all duration-500 transform
                              ${idx === currentPassion ? 'top-0 opacity-100 translate-y-0' : 'top-8 opacity-0 translate-y-4'}
                              ${idx === (currentPassion - 1 + passions.length) % passions.length ? '-top-8 opacity-0 -translate-y-4' : ''}
                          `}
                    >
                      {passion}
                    </span>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed border-l-4 border-primary-500/30 pl-6">
            {content.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {/* Primary CTA */}
            <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:opacity-90 transition-all hover:-translate-y-1 shadow-lg shadow-slate-200 dark:shadow-slate-900/20">
              {content.cta_calendar} <Calendar size={18} />
            </a>

            {/* Secondary CTA */}
            <a
              href="#contact"
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all hover:-translate-y-1"
            >
              {content.cta_contact} <ArrowRight size={18} />
            </a>

            {/* Tertiary CTA */}
            <button onClick={handleCVClick} className="inline-flex items-center gap-2 px-6 py-3 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 font-semibold transition-colors">
              {content.cta_cv} <Download size={18} />
            </button>

            {/* Quaternary CTA - Credly */}
            <a href={PROFILE.credlyUrl || "https://www.credly.com/users/matheo-pinget"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 text-slate-600 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 font-semibold transition-colors">
              {content.cta_certs} <Award size={18} />
            </a>
          </div>

          <div className="flex items-center gap-6 text-slate-400 dark:text-slate-500 pt-8">
            <a href={SOCIALS[0].url} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors transform hover:scale-110"><Github size={24} /></a>
            <a href={SOCIALS[1].url} target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b5] transition-colors transform hover:scale-110"><Linkedin size={24} /></a>
            <a href={PROFILE.credlyUrl || "https://www.credly.com/users/matheo-pinget"} target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors transform hover:scale-110"><Award size={24} /></a>
            <a href={`mailto:${PROFILE.email}`} className="hover:text-red-500 transition-colors transform hover:scale-110"><Mail size={24} /></a>
            <span className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-2"></span>
            <span className="text-sm font-mono flex items-center gap-2">
              <span className="text-xl">📍</span>
              {content.location}
            </span>
          </div>
        </div>

        {/* Interactive Pipeline Visual */}
        <div className="hidden lg:block relative order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <PipelineAnimation />

          {/* Floating Tech Logos - Horizontal Row ABOVE pipeline */}
          <div className="absolute -top-24 left-0 w-full flex justify-between items-center px-2">

            {/* GitLab CI/CD */}
            <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 animate-bounce hover:scale-110 transition-transform cursor-pointer" style={{ animationDuration: '3.5s', animationDelay: '0s' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" className="w-8 h-8 opacity-90" alt="GitLab CI/CD" />
            </div>

            {/* Docker */}
            <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 animate-bounce hover:scale-110 transition-transform cursor-pointer" style={{ animationDuration: '3s', animationDelay: '0.2s' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="w-8 h-8 opacity-90" alt="Docker" />
            </div>

            {/* AWS */}
            <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 animate-bounce hover:scale-110 transition-transform cursor-pointer" style={{ animationDuration: '4s', animationDelay: '0.4s' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" className="w-10 h-10 opacity-90" alt="AWS" />
            </div>

            {/* Terraform */}
            <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 animate-bounce hover:scale-110 transition-transform cursor-pointer" style={{ animationDuration: '5s', animationDelay: '0.6s' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" className="w-8 h-8 opacity-90" alt="Terraform" />
            </div>

            {/* Ansible */}
            <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 animate-bounce hover:scale-110 transition-transform cursor-pointer" style={{ animationDuration: '4.5s', animationDelay: '0.8s' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" className="w-8 h-8 opacity-90" alt="Ansible" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
