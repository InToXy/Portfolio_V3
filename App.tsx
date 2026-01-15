
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Passions from './components/Passions';
import TerminalSection from './components/TerminalSection';
import CVSection from './components/CVSection';
import Footer from './components/Footer';
import ScrollBackground from './components/ScrollBackground';
import { TRANSLATIONS } from './constants';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const [currentPage, setCurrentPage] = useState<'home' | 'cv'>('home');

  // Initialize theme based on preference or system
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      }
      return newMode;
    });
  };

  const toggleLang = () => {
    setLang(prev => prev === 'fr' ? 'en' : 'fr');
  };

  // Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px"
      }
    );

    // Re-observe when page changes or content updates
    setTimeout(() => {
        const targets = document.querySelectorAll('.reveal-on-scroll');
        targets.forEach((target) => observer.observe(target));
    }, 100);

    return () => {
      observer.disconnect();
    };
  }, [currentPage, lang]); 

  const handleNavigation = (page: string) => {
    if (page === 'cv') {
        setCurrentPage('cv');
        window.scrollTo(0, 0);
    } else {
        setCurrentPage('home');
    }
  };

  // Get current language data
  const content = TRANSLATIONS[lang];

  // If on CV page, render standard page layout but with just CV component
  if (currentPage === 'cv') {
    return (
        <div className="min-h-screen font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
            <ScrollBackground />
            <CVSection onBack={() => handleNavigation('home')} content={content.cv} data={content} />
        </div>
    );
  }

  // Home Page Layout
  return (
    <div className="min-h-screen font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-primary-500 selection:text-white relative">
      <ScrollBackground />
      <Navbar 
        darkMode={darkMode} 
        toggleTheme={toggleTheme} 
        onNavigate={handleNavigation} 
        lang={lang} 
        toggleLang={toggleLang}
        content={content.nav}
      />
      
      <main className="relative z-10">
        <Hero onNavigate={handleNavigation} content={content.hero} />
        <About content={content.about} />
        <TerminalSection onNavigate={handleNavigation} content={content.terminal} />
        <Skills content={content.skills} />
        <Projects content={content.projects} projects={content.projects_data} />
        <Experience content={content.experience} />
        <Passions content={content.passions} />
      </main>
      
      <Footer content={content.footer} />
    </div>
  );
};

export default App;
