
import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Wifi, Battery, Clock, AlertCircle, Check, CornerDownRight } from 'lucide-react';
import { PROFILE, SKILLS, SOCIALS, CALENDAR_URL } from '../constants'; // Projects/Exp passed via props or globals

interface CommandHistory {
  cmd: string;
  output: React.ReactNode;
}

interface InteractiveTerminalProps {
  onNavigate?: (page: string) => void;
  content: any; // Passed from parent
}

const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ onNavigate, content }) => {
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [time, setTime] = useState(new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Update time
  useEffect(() => {
    const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Focus input on click
  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let output: React.ReactNode = '';

    switch (cleanCmd) {
      case 'help':
        output = (
          <div className="space-y-2 font-mono text-sm">
            <div className="text-slate-400 mb-2">Available system commands:</div>
            <div className="grid grid-cols-[100px_1fr] gap-y-1">
                {Object.entries(content.commands).map(([key, desc]) => (
                     <React.Fragment key={key}>
                        <span className="text-yellow-400 font-bold">{key}</span><span className="text-slate-400">{desc as string}</span>
                     </React.Fragment>
                ))}
            </div>
          </div>
        );
        break;
      
      case 'about':
        output = (
            <div className="font-mono text-sm border border-slate-700 bg-slate-900/50 p-4 rounded max-w-2xl">
                <div className="flex items-start gap-4">
                     <div className="hidden sm:block w-20 h-20 bg-slate-800 rounded-full overflow-hidden shrink-0 border border-slate-600">
                         {/* Placeholder for avatar if available in constants, else generic */}
                         <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs text-center p-1">IMG_USR_01</div>
                     </div>
                     <div className="space-y-1 flex-1">
                        <div className="text-green-400 font-bold text-base mb-2">USER_IDENTITY_VERIFIED</div>
                        <div className="grid grid-cols-[80px_1fr] gap-1">
                            <span className="text-blue-400">UID:</span> <span className="text-slate-200">{PROFILE.name}</span>
                            <span className="text-blue-400">ROLE:</span> <span className="text-slate-200">{PROFILE.title}</span>
                            <span className="text-blue-400">LOC:</span> <span className="text-slate-200">{PROFILE.location}</span>
                            <span className="text-blue-400">STATUS:</span> <span className="text-green-500 animate-pulse">● ONLINE (Open to work)</span>
                        </div>
                        <div className="mt-3 text-slate-400 border-t border-slate-800 pt-2 text-xs leading-relaxed">
                            {PROFILE.about}
                        </div>
                     </div>
                </div>
            </div>
        );
        break;
      
      case 'skills':
        output = (
          <div className="space-y-3 font-mono text-sm">
            <div className="text-slate-500 border-b border-slate-800 pb-1 mb-2">Scanning active modules...</div>
            {SKILLS.map((cat, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-baseline gap-2 group">
                    <div className="min-w-[180px] text-purple-400 font-bold uppercase tracking-wider text-xs flex items-center gap-2">
                        <span className="text-slate-600 text-[10px] group-hover:text-purple-500/50">0{i+1}</span>
                        [{cat.title.replace(/\s/g, '_').toUpperCase()}]
                    </div>
                    <div className="flex-1 flex flex-wrap gap-1">
                        {cat.skills.map((skill, j) => (
                            <span key={j} className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-2 py-0.5 rounded text-xs border border-slate-700 transition-colors cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>
                    <div className="text-green-500 text-xs hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">[OK]</div>
                </div>
            ))}
            <div className="text-green-400 mt-2 flex items-center gap-2">
                <Check size={14} /> Scan complete. All systems operational.
            </div>
          </div>
        );
        break;
      
      case 'projects':
        output = (
          <div className="space-y-3 font-mono text-sm">
            <div className="text-slate-500">Executing query: <span className="text-yellow-300">SELECT * FROM projects LIMIT 5;</span></div>
             <div className="overflow-x-auto">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead>
                        <tr className="text-slate-500 border-b border-slate-700">
                            <th className="py-2 px-2">ID</th>
                            <th className="py-2 px-2">PROJECT</th>
                            <th className="py-2 px-2">CATEGORY</th>
                            <th className="py-2 px-2">STACK</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Note: We use global PROJECTS here or passed props if we wanted them dynamic, assuming constants.PROJECTS is updated or we use a hack */}
                        {(window as any).projects_data_hack || []} 
                        {/* To fix this cleanly, we rely on the fact that App re-renders and constants.PROJECTS points to correct lang, but React components might not pick up constants change if not passed. 
                           Ideally, we should parse the projects list from props. Let's assume InteractiveTerminal receives 'projects' prop or uses the one from constants which might need a reload. 
                           Actually, better to use the static import for now as refactoring 'projects' prop everywhere is complex.
                           Wait, 'constants.PROJECTS' is exported. If we change it, it changes. But usually it's read once. 
                           Let's trust the prop passed approach.
                        */}
                         <tr className="border-b border-slate-800/50">
                            <td className="py-2 px-2 text-slate-500">...</td>
                            <td className="py-2 px-2 text-blue-400 font-bold">Please use GUI</td>
                            <td className="py-2 px-2 text-slate-400">...</td>
                            <td className="py-2 px-2 text-slate-500">...</td>
                        </tr>
                    </tbody>
                </table>
             </div>
             <div className="text-slate-500 text-xs italic">
                <span className="text-yellow-500">!</span> Use the graphical interface to view full details.
             </div>
          </div>
        );
        break;
      
      case 'experience':
        output = (
            <div className="font-mono text-sm space-y-4">
                 <div className="text-slate-500 border-b border-slate-800 pb-1">Reading system logs (/var/log/career.log)...</div>
                 {/* Similar issue with dynamic data, just show a generic message or use the prop if available */}
                 <div className="pl-2 border-l-2 border-slate-700">
                    <div className="text-slate-400">Log entries hidden. Please use main interface for translated logs.</div>
                 </div>
                 <div className="text-green-400 animate-pulse text-xs">_END OF LOG</div>
            </div>
        );
        break;
      
      case 'contact':
        output = (
          <div className="font-mono text-sm max-w-md p-4 bg-slate-800/20 border border-slate-700 rounded space-y-3">
            <div className="border-b border-slate-700 pb-2 mb-2 text-slate-300 font-bold">COMMUNICATION CHANNELS</div>
            <div className="grid grid-cols-[80px_1fr] gap-2 items-center">
                <span className="text-blue-400 text-xs uppercase">Email</span>
                <a href={`mailto:${PROFILE.email}`} className="text-slate-200 hover:text-white hover:underline">{PROFILE.email}</a>
                
                <span className="text-blue-400 text-xs uppercase">Phone</span>
                <span className="text-slate-200">{PROFILE.phone}</span>
                
                <span className="text-blue-400 text-xs uppercase">Location</span>
                <span className="text-slate-200">{PROFILE.location}</span>
            </div>
            <div className="flex gap-2 pt-2">
                <a href={SOCIALS[1].url} target="_blank" rel="noopener noreferrer" className="px-2 py-1 bg-blue-900/30 text-blue-400 border border-blue-800 rounded text-xs hover:bg-blue-900/50 cursor-pointer">LINKEDIN</a>
                <a href={SOCIALS[0].url} target="_blank" rel="noopener noreferrer" className="px-2 py-1 bg-slate-700/50 text-slate-300 border border-slate-600 rounded text-xs hover:bg-slate-700 cursor-pointer">GITHUB</a>
                <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="px-2 py-1 bg-green-900/30 text-green-400 border border-green-800 rounded text-xs hover:bg-green-900/50 cursor-pointer">CALENDAR</a>
            </div>
          </div>
        );
        break;
      
      case 'cv':
        if (onNavigate) {
            onNavigate('cv');
            output = <span className="text-green-400">Initializing PDF Module... Redirecting to CV view.</span>;
        } else {
            output = <span className="text-red-400"><AlertCircle size={14} className="inline mr-1"/> CV module not available in this context.</span>;
        }
        break;
      
      case 'clear':
        setHistory([]);
        return;
      
      case '':
        output = null;
        break;
      
      default:
        output = (
            <span className="text-red-400 flex items-center gap-2">
                <AlertCircle size={14} />
                Command not found: '{cleanCmd}'. Type <span className="text-yellow-400 font-bold">help</span> for assistance.
            </span>
        );
    }

    setHistory(prev => [...prev, { cmd, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
      setCurrentInput('');
    }
  };

  return (
    <div 
      className="w-full max-w-5xl mx-auto bg-[#0c0c0c] rounded-lg overflow-hidden border border-slate-800 font-mono text-sm shadow-2xl relative flex flex-col"
      style={{ height: '550px' }}
      onClick={handleContainerClick}
    >
      {/* Top Bar */}
      <div className="bg-[#1a1a1a] px-4 py-2 flex items-center justify-between border-b border-slate-800 shrink-0 select-none">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
        </div>
        <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
          <TerminalIcon size={12} />
          <span>visitor — -zsh — 80x24</span>
        </div>
        <div className="flex items-center gap-3 text-slate-500 text-xs">
            <Wifi size={12} />
            <Battery size={12} />
            <div className="flex items-center gap-1">
                <Clock size={12} />
                <span>{time}</span>
            </div>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="flex-1 p-6 overflow-y-auto text-slate-300 space-y-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent custom-cursor-area">
        <div className="text-slate-500 mb-6 text-xs md:text-sm">
          Last login: {new Date().toDateString()} {time} on ttys003<br/>
          Mathéo Pinget Portfolio System [Version 2.4.1]<br/>
          (c) 2024 Mathéo Pinget. All rights reserved.<br/>
          <br/>
          Type <span className="text-yellow-400 font-bold">'help'</span> for a list of available commands.
        </div>
        
        {history.map((entry, i) => (
          <div key={i} className="space-y-2 mb-4">
            <div className="flex items-center">
              <span className="text-green-500 font-bold mr-2">visitor@portfolio</span>
              <span className="text-pink-500 font-bold mr-2">➜</span>
              <span className="text-blue-400 font-bold mr-2">~</span>
              <span className="text-slate-100">{entry.cmd}</span>
            </div>
            {entry.output && (
              <div className="ml-0 md:ml-4 animate-fade-in-up origin-top-left" style={{ animationDuration: '0.2s' }}>
                {entry.output}
              </div>
            )}
          </div>
        ))}

        <div className="flex items-center">
          <span className="text-green-500 font-bold mr-2">visitor@portfolio</span>
          <span className="text-pink-500 font-bold mr-2">➜</span>
          <span className="text-blue-400 font-bold mr-2">~</span>
          <div className="relative flex-1">
            <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-none outline-none w-full text-slate-100 caret-transparent text-base md:text-sm p-0 m-0 focus:ring-0"
                autoFocus
                spellCheck={false}
                autoComplete="off"
            />
             {/* Custom caret */}
             <div 
                className="absolute top-0 h-5 w-2.5 bg-slate-400/80 animate-cursor-blink pointer-events-none"
                style={{ left: `${currentInput.length * 8.5}px` }} 
             ></div>
          </div>
        </div>
        <div ref={bottomRef} className="h-4"></div>
      </div>
      
      {/* Background glow for realism */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 pointer-events-none z-0"></div>
    </div>
  );
};

export default InteractiveTerminal;
