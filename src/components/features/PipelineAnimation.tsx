import React, { useState, useEffect } from 'react';
import { GitBranch, Box, CheckCircle, UploadCloud, Terminal, Server, Play, Circle } from 'lucide-react';

const PipelineNode = ({ icon: Icon, label, status, isLast }: { icon: any, label: string, status: 'active' | 'pending' | 'success' | 'idle', isLast?: boolean }) => (
    <div className="flex flex-col items-center gap-3 relative group w-20 flex-none">
        <div className={`
      w-16 h-16 rounded-2xl flex items-center justify-center relative transition-all duration-300
      ${status === 'active' ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30 scale-110 z-20' : 'z-10'}
      ${status === 'success' ? 'bg-emerald-900/20 text-emerald-500 border border-emerald-500/30' : ''}
      ${status === 'pending' || status === 'idle' ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700' : ''}
    `}>
            <Icon size={24} className={status === 'active' ? 'animate-pulse' : ''} />

            {/* Active Indicator */}
            {status === 'active' && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />
            )}

            {/* Success Indicator */}
            {status === 'success' && (
                <div className="absolute -top-2 -right-2 bg-emerald-500 text-white rounded-full p-0.5 border-2 border-slate-900 shadow-sm">
                    <CheckCircle size={14} strokeWidth={3} />
                </div>
            )}
        </div>

        <span className={`font-mono text-xs font-semibold tracking-wider transition-colors duration-300 text-center ${status === 'active' ? 'text-primary-600 dark:text-primary-400' : 'text-slate-500 dark:text-slate-500'}`}>
            {label}
        </span>
    </div>
);

const PipelineAnimation = () => {
    const [currentStage, setCurrentStage] = useState(0);
    // Stages: 0: Idle, 1: Commit, 2: Build, 3: Test, 4: Deploy, 5: Finished (Wait), 6: Reset
    const STAGES = ['IDLE', 'COMMIT', 'BUILD', 'TEST', 'DEPLOY', 'DONE'];

    useEffect(() => {
        let timer: NodeJS.Timeout;

        const runPipeline = () => {
            // Sequence timing
            const times = [500, 1500, 2000, 2000, 2000, 3000]; // Duration for each stage

            const next = (stage: number) => {
                setCurrentStage(stage);
                if (stage < STAGES.length - 1) {
                    timer = setTimeout(() => next(stage + 1), times[stage]);
                } else {
                    // Reset loop
                    timer = setTimeout(() => next(0), 1000);
                }
            };

            if (currentStage === 0) next(1);
        };

        if (currentStage === 0) {
            timer = setTimeout(() => setCurrentStage(1), 1000);
        } else if (currentStage < STAGES.length - 1) {
            // Logic handled in recursion start but simple interval effects here for standard component lifecycle
        }

        const interval = setInterval(() => {
            setCurrentStage(prev => {
                if (prev >= 5) return 0;
                return prev + 1;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const getStatus = (nodeIndex: number) => {
        // nodeIndex: 1=Commit, 2=Build, 3=Test, 4=Deploy
        if (currentStage === 0) return 'idle'; // Initial state
        if (currentStage === nodeIndex) return 'active';
        if (currentStage > nodeIndex) return 'success';
        return 'pending';
    };

    const getLogMessage = () => {
        switch (currentStage) {
            case 0: return <span className="text-slate-500">Waiting for trigger...</span>;
            case 1: return <span className="text-blue-400">➜ git commit -m "feat: redesign hero"</span>;
            case 2: return <span className="text-yellow-400">⚡ building docker image...</span>;
            case 3: return <span className="text-purple-400">🧪 running tests (unit/integration)...</span>;
            case 4: return <span className="text-orange-400">🚀 deploying to production...</span>;
            case 5: return <span className="text-green-400">✓ deployment successful!</span>;
            default: return null;
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto p-8 relative">
            <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full" />

            <div className="relative bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-12 border-b border-slate-200 dark:border-slate-800 pb-4">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="font-mono text-xs text-slate-400 flex items-center gap-2">
                        {currentStage > 0 && currentStage < 5 && <span className="animate-spin">⟳</span>}
                        pipeline_v3.yml
                    </div>
                </div>

                {/* Nodes Flow */}
                <div className="flex justify-between md:justify-start items-start relative z-10 w-full">
                    <PipelineNode icon={GitBranch} label="COMMIT" status={getStatus(1)} />

                    {/* Connector 1 */}
                    <div className="hidden md:flex flex-1 h-[2px] bg-slate-200 dark:bg-slate-700 mt-[31px]">
                        <div className={`h-full bg-primary-500 transition-all duration-500 ${currentStage > 1 ? 'w-full' : 'w-0'}`} />
                    </div>

                    <PipelineNode icon={Box} label="BUILD" status={getStatus(2)} />

                    {/* Connector 2 */}
                    <div className="hidden md:flex flex-1 h-[2px] bg-slate-200 dark:bg-slate-700 mt-[31px]">
                        <div className={`h-full bg-primary-500 transition-all duration-500 ${currentStage > 2 ? 'w-full' : 'w-0'}`} />
                    </div>

                    <PipelineNode icon={Terminal} label="TEST" status={getStatus(3)} />

                    {/* Connector 3 */}
                    <div className="hidden md:flex flex-1 h-[2px] bg-slate-200 dark:bg-slate-700 mt-[31px]">
                        <div className={`h-full bg-primary-500 transition-all duration-500 ${currentStage > 3 ? 'w-full' : 'w-0'}`} />
                    </div>

                    <PipelineNode icon={UploadCloud} label="DEPLOY" status={getStatus(4)} isLast />
                </div>

                {/* Console Output Simulation */}
                <div className="mt-12 bg-slate-950 rounded-lg p-4 font-mono text-xs overflow-hidden h-24 border border-slate-800 shadow-inner flex flex-col justify-end">
                    <div className="flex flex-col gap-2">
                        <div className="text-slate-500 opacity-50">Last login: {new Date().toLocaleTimeString()} on ttys001</div>
                        <div className="flex gap-2 items-center">
                            <span className="text-green-500">$</span>
                            {getLogMessage()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PipelineAnimation;
