import React from 'react';
import { Dock, DockIcon } from '../ui/Dock';
import { Home, User, Code, Terminal, Brain, Briefcase, Globe, Heart } from 'lucide-react';
import { AnimatedThemeToggler } from '../ui/AnimatedThemeToggler';

interface DockNavbarProps {
    darkMode: boolean;
    toggleTheme: () => void;
    onNavigate: (page: string) => void;
    lang: 'fr' | 'en';
    toggleLang: () => void;
    content: any;
}

const DockNavbar: React.FC<DockNavbarProps> = ({
    darkMode,
    toggleTheme,
    onNavigate,
    lang,
    toggleLang,
    content
}) => {

    const scrollToSection = (id: string) => {
        if (id === 'home') {
            onNavigate('home');
            // Small timeout to allow state change if needed
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 50);
            return;
        }

        if (id === 'cv') {
            onNavigate('cv');
            return;
        }

        // Ensure we are on home page first if navigating to a section
        onNavigate('home');

        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    return (
        <div className="fixed top-4 left-0 right-0 z-50 pointer-events-none flex justify-center">
            <div className="pointer-events-auto">
                <Dock iconMagnification={60} iconDistance={100} className="bg-white/70 dark:bg-slate-950/70 border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-xl">
                    <DockIcon onClick={() => scrollToSection('home')}>
                        <Home className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                    </DockIcon>
                    <DockIcon onClick={() => scrollToSection('about')}>
                        <User className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                    </DockIcon>
                    <DockIcon onClick={() => scrollToSection('terminal')}>
                        <Terminal className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                    </DockIcon>
                    <DockIcon onClick={() => scrollToSection('skills')}>
                        <Brain className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                    </DockIcon>
                    <DockIcon onClick={() => scrollToSection('projects')}>
                        <Code className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                    </DockIcon>
                    <DockIcon onClick={() => scrollToSection('experience')}>
                        <Briefcase className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                    </DockIcon>
                    <DockIcon onClick={() => scrollToSection('passions')}>
                        <Heart className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                    </DockIcon>

                    <div className="w-[1px] h-8 bg-slate-200 dark:bg-slate-800 mx-2" />

                    <DockIcon>
                        <AnimatedThemeToggler
                            isDark={darkMode}
                            toggleTheme={toggleTheme}
                            className="w-full h-full flex items-center justify-center p-0 text-slate-600 dark:text-slate-300"
                        />
                    </DockIcon>

                    <DockIcon onClick={toggleLang}>
                        <button className="text-sm font-bold font-mono text-slate-600 dark:text-slate-300 w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                            {lang.toUpperCase()}
                        </button>
                    </DockIcon>
                </Dock>
            </div>
        </div>
    );
};

export default DockNavbar;
