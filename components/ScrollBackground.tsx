import React, { useEffect, useState } from 'react';

const ScrollBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#0a0a0a]">
      {/* 
        1. Base Gradient Shift
        Change la couleur de fond globale en fonction du scroll (plus sombre en bas)
      */}
      <div 
        className="absolute inset-0 transition-colors duration-1000 ease-linear"
        style={{
            background: `linear-gradient(to bottom, 
                rgba(15, 23, 42, 1) 0%, 
                rgba(30, 27, 75, 1) ${Math.min(scrollY / 20, 100)}%, 
                rgba(2, 6, 23, 1) 100%)`
        }}
      />

      {/* 
        2. 3D Perspective Grid
        Une grille qui donne une impression de sol/plafond infini qui bouge avec le scroll
      */}
      <div 
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.25] pointer-events-none"
        style={{
            backgroundImage: `
                linear-gradient(to right, rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transform: `perspective(500px) rotateX(60deg) translateY(${scrollY * 0.5}px) scale(3)`,
            transformOrigin: 'top center',
            // Masque pour fondre la grille en haut et en bas
            maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
        }}
      />

      {/* 
        3. Parallax Glowing Orbs 
        Des orbes de couleurs qui bougent à des vitesses différentes
      */}
      
      {/* Orbe 1: Haut Gauche (Bleu/Violet) - Descend doucement */}
      <div 
        className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen transition-transform duration-100 ease-linear will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />

      {/* Orbe 2: Milieu Droit (Violet/Rose) - Monte doucement (contre-scroll) */}
      <div 
        className="absolute top-[40%] right-[-20%] w-[600px] h-[600px] rounded-full bg-purple-600/15 blur-[100px] mix-blend-screen transition-transform duration-100 ease-linear will-change-transform"
        style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
      />

      {/* Orbe 3: Bas Gauche (Vert/Cyan) - Bouge latéralement */}
      <div 
        className="absolute bottom-[-20%] left-[10%] w-[700px] h-[700px] rounded-full bg-teal-500/10 blur-[120px] mix-blend-screen transition-transform duration-100 ease-linear will-change-transform"
        style={{ transform: `translate(${scrollY * 0.1}px, ${-scrollY * 0.05}px)` }}
      />

      {/* 
        4. Scanline / Noise Overlay 
        Ajoute une texture "écran" subtile
      */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      {/* 
        5. Vignette
        Assombrit les coins pour focus le regard au centre
      */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-10 pointer-events-none" />
    </div>
  );
};

export default ScrollBackground;