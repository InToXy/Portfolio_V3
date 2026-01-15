
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Languages } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
  onNavigate?: (page: string) => void;
  lang: 'fr' | 'en';
  toggleLang: () => void;
  content: any;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme, onNavigate, lang, toggleLang, content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    if (href === '#cv') {
      if (onNavigate) {
        onNavigate('cv');
        return;
      }
    } else {
      if (onNavigate) {
        onNavigate('home');
        // Small delay to allow home component to mount before scrolling
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: content.about, href: '#about' },
    { name: content.terminal, href: '#terminal' },
    { name: content.skills, href: '#skills' },
    { name: content.projects, href: '#projects' },
    { name: content.experience, href: '#experience' },
    { name: content.cv, href: '#cv' },
    { name: content.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button onClick={() => handleNavClick('#')} className="text-2xl font-bold font-mono tracking-tighter hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
          MP<span className="text-primary-600">.dev</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {link.name}
            </button>
          ))}
          
          <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-2"></div>

          <button 
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:ring-2 ring-primary-500 transition-all text-xs font-bold"
          >
            <Languages size={14} />
            {lang.toUpperCase()}
          </button>

          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-yellow-400 hover:ring-2 ring-primary-500 transition-all"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
           <button 
             onClick={toggleLang}
             className="text-sm font-bold text-slate-700 dark:text-slate-300"
           >
             {lang.toUpperCase()}
           </button>
           <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-yellow-400"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-slate-600 dark:text-slate-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-xl py-4 flex flex-col items-center space-y-4 h-screen">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.href)}
              className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-primary-600"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
