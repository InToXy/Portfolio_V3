import React, { useEffect, useRef } from 'react';

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/\\|{}[]+=-_';
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    const draw = () => {
      // Semi-transparent black to create trail effect
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#22c55e'; // Green text
      ctx.font = `${fontSize}px "JetBrains Mono"`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Draw character
        // Vary opacity for depth
        ctx.globalAlpha = Math.random() > 0.5 ? 1 : 0.5;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
      ctx.globalAlpha = 1;
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 opacity-20 dark:opacity-30 matrix-canvas pointer-events-none"
    />
  );
};

export default MatrixRain;