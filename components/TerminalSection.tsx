
import React from 'react';
import InteractiveTerminal from './InteractiveTerminal';
import { Terminal } from 'lucide-react';

interface TerminalSectionProps {
  onNavigate?: (page: string) => void;
  content: any;
}

const TerminalSection: React.FC<TerminalSectionProps> = ({ onNavigate, content }) => {
  return (
    <section id="terminal" className="py-24 bg-slate-950/80 backdrop-blur-md relative overflow-hidden border-y border-slate-800">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 reveal-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-sm font-mono border border-green-500/20 mb-6 animate-pulse">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                {content.access}
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 flex items-center justify-center gap-4 tracking-tight">
               <span className="p-3 bg-slate-900 rounded-xl border border-slate-800 shadow-xl hidden md:block">
                 <Terminal className="text-green-500 w-8 h-8 md:w-10 md:h-10" />
               </span>
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500">
                 {content.title}
               </span>
            </h3>
            
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                {content.desc}
                <br/>
                <span className="text-green-400 font-mono mt-2 block">{content.help_cmd}</span>
            </p>
        </div>

        <div className="reveal-on-scroll relative group" style={{ transitionDelay: '200ms' }}>
            {/* Decorative border/glow container */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
                <InteractiveTerminal onNavigate={onNavigate} content={content} />
            </div>
            
            {/* Tech decorative corners */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-green-500/50 rounded-tl-lg hidden md:block"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-green-500/50 rounded-br-lg hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default TerminalSection;
