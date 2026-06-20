

import React, { useState, useEffect } from 'react';
import DockNavbar from './components/layout/DockNavbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Passions from './components/sections/Passions';
import TerminalSection from './components/features/TerminalSection';
import CVSection from './components/sections/CVSection';
import Footer from './components/layout/Footer';
import ScrollBackground from './components/features/ScrollBackground';
import MouseSpotlight from './components/features/MouseSpotlight';
import { useTheme } from './context/ThemeContext';
import { useLanguage } from './context/LanguageContext';
import { useScrollReveal } from './hooks/useScrollReveal';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'cv'>('home');
  const { lang, t: content } = useLanguage();
  const { isDarkMode, toggleTheme } = useTheme();

  // Scroll to top on initial load
  useEffect(() => {
    // Small timeout to ensure browser has painted and restored any previous scroll position
    // so we can override it
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    // Also try immediately
    window.scrollTo(0, 0);
  }, []);

  // Scroll Reveal Observer
  useScrollReveal([currentPage, lang]);

  const handleNavigation = (page: string) => {
    if (page === 'cv') {
      setCurrentPage('cv');
      window.scrollTo(0, 0);
    } else {
      setCurrentPage('home');
    }
  };

  // If on CV page, render standard page layout but with just CV component
  if (currentPage === 'cv') {
    return (
      <div className="min-h-screen font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <ScrollBackground />
        <MouseSpotlight />
        <CVSection onBack={() => handleNavigation('home')} />
      </div>
    );
  }

  // Home Page Layout
  return (
    <div className="min-h-screen font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-primary-500 selection:text-white relative">
      <ScrollBackground />
      <MouseSpotlight />
      <DockNavbar onNavigate={handleNavigation} />

      <main className="relative z-10">
        <Hero onNavigate={handleNavigation} />
        <About />
        <TerminalSection onNavigate={handleNavigation} />
        <Skills />
        <Projects />
        <Experience />
        <Passions />
      </main>

      <Footer />
    </div>
  );
};

export default App;
