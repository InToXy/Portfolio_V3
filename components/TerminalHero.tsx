import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Maximize2, Minus, X } from 'lucide-react';

const TerminalHero: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const commands = [
    { cmd: 'whoami', output: 'Mathéo Pinget', delay: 500 },
    { cmd: 'cat role.json', output: '{\n  "role": "DevOps Engineer",\n  "stack": ["Terraform", "Ansible", "Docker"],\n  "status": "Ready to deploy"\n}', delay: 800 },
    { cmd: './init_infrastructure.sh', output: '[+] Initializing Terraform backend...\n[+] Provisioning AWS resources...\n[+] Configuring Kubernetes cluster...\n✔ Infrastructure Ready (2.4s)', delay: 1500 },
  ];

  const typeCommand = async (cmd: string) => {
    setIsTyping(true);
    for (let i = 0; i <= cmd.length; i++) {
      setCurrentCommand(cmd.slice(0, i));
      await new Promise(r => setTimeout(r, 50 + Math.random() * 50));
    }
    setIsTyping(false);
    await new Promise(r => setTimeout(r, 400));
    setLines(prev => [...prev, `$ ${cmd}`]);
    setCurrentCommand('');
  };

  const addOutput = async (output: string) => {
    setLines(prev => [...prev, output]);
    await new Promise(r => setTimeout(r, 300));
  };

  useEffect(() => {
    let mounted = true;
    
    const runSequence = async () => {
      // Initial delay
      await new Promise(r => setTimeout(r, 1000));
      
      while (mounted) {
        setLines([]); // Clear terminal
        
        for (const command of commands) {
          if (!mounted) break;
          await typeCommand(command.cmd);
          if (!mounted) break;
          await addOutput(command.output);
          await new Promise(r => setTimeout(r, command.delay));
        }

        // Wait before restarting
        await new Promise(r => setTimeout(r, 3000));
      }
    };

    runSequence();

    return () => { mounted = false; };
  }, []);

  return (
    <div className="terminal-window w-full max-w-lg mx-auto bg-slate-900 rounded-lg overflow-hidden border border-slate-700 font-mono text-sm relative z-10 transform transition-all hover:scale-[1.02] duration-500">
      {/* Terminal Header */}
      <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer"></div>
        </div>
        <div className="flex items-center gap-2 text-slate-400 text-xs">
          <Terminal size={12} />
          <span>matheo@devops:~/portfolio</span>
        </div>
        <div className="opacity-0">
            <div className="w-3 h-3"></div>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 h-80 overflow-y-auto text-slate-300 space-y-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
        <div className="text-slate-500 mb-4">Last login: {new Date().toDateString()} on ttys001</div>
        
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap break-words leading-relaxed">
            {line.startsWith('$') ? (
              <span className="text-green-400 font-bold">{line}</span>
            ) : (
              <span className={line.includes('Error') ? 'text-red-400' : line.includes('✔') ? 'text-green-400' : 'text-slate-300'}>
                {line}
              </span>
            )}
          </div>
        ))}
        
        <div className="flex items-center">
          <span className="text-green-500 font-bold mr-2">➜</span>
          <span className="text-blue-400 font-bold mr-2">~</span>
          <span>{currentCommand}</span>
          <span className="w-2 h-4 bg-slate-400 ml-1 animate-cursor-blink"></span>
        </div>
      </div>
    </div>
  );
};

export default TerminalHero;