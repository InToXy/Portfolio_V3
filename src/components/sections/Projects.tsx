
import React, { useState, useMemo } from 'react';
import { Project } from '../../types';
import { FolderGit2, ExternalLink, X, Terminal, Server, CheckCircle, ArrowRight, Cpu, Activity, Database, Filter, Award, Zap } from 'lucide-react';

interface ProjectsProps {
  content: any;
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ content, projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = useMemo(() => {
    // Get unique categories, sort them, and prepend 'All'
    const cats = [...new Set(projects.map(p => p.category).filter(Boolean) as string[])];
    cats.sort();
    return ['All', ...cats];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter(p => p.category === activeCategory);
  }, [activeCategory, projects]);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const getCategoryLabel = (cat: string) => {
    if (cat === 'All') return content.all;
    return cat;
  };

  return (
    <section id="projects" className="py-20 bg-transparent transition-colors relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 reveal-on-scroll">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary-600 dark:text-primary-400 uppercase mb-3">{content.tag}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{content.title}</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === cat
                  ? 'bg-primary-600 border-primary-600 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-white/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-primary-500 hover:text-primary-500 backdrop-blur-sm'
                  }`}
              >
                {getCategoryLabel(cat)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.title}
              className="group relative bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 cursor-pointer animate-fade-in-up flex flex-col h-full"
              style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'both' }}
              onClick={() => openModal(project)}
            >
              {/* Image Header */}
              <div className="relative h-48 w-full overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                    <Terminal size={40} className="text-slate-400" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  {project.category && (
                    <span className="px-3 py-1 text-xs font-bold text-white bg-white/20 backdrop-blur-md rounded-full border border-white/10">
                      {project.category}
                    </span>
                  )}
                  {project.featured && (
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-primary-600/90 backdrop-blur-md rounded-full shadow-lg">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-1">
                    {project.title}
                  </h4>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm leading-relaxed line-clamp-3 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-white/50 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs font-mono px-2 py-1 text-slate-400">+ {project.tags.length - 3}</span>
                  )}
                </div>
              </div>

              <div className="px-6 py-4 bg-white/80 dark:bg-slate-800/60 border-t border-slate-100 dark:border-slate-700/50 flex justify-end group-hover:bg-slate-50 dark:group-hover:bg-slate-800/80 transition-colors">
                <button className="text-sm font-semibold text-primary-600 dark:text-primary-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  {content.details} <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal with "Diving" Effect */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 h-screen">
          {/* Backdrop with fade in */}
          <div
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-md animate-backdrop-in"
            onClick={closeModal}
          ></div>

          {/* Modal content with Dive animation */}
          <div className="bg-white dark:bg-slate-900 w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-xl shadow-2xl relative z-10 border border-slate-200 dark:border-slate-700 animate-modal-dive flex flex-col">

            {/* Tech Scanline Overlay */}
            <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-xl opacity-20">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-scanline"></div>
              <div className="scanline-overlay"></div>
            </div>

            <div className="relative h-48 md:h-64 shrink-0 overflow-hidden">
              {selectedProject.image && (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-md text-white rounded-full hover:bg-red-500/80 transition-colors z-30"
              >
                <X size={20} />
              </button>

              <div className="absolute bottom-6 left-6 md:left-10 z-10">
                <div className="flex items-center gap-2 text-primary-400 mb-2 font-mono text-sm uppercase tracking-widest">
                  <Terminal size={14} />
                  <span>{content.viewer}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                  {selectedProject.title}
                </h2>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700 p-6 md:p-10 relative bg-white dark:bg-slate-950">

              <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-slate-100 dark:border-slate-800">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded text-xs font-bold font-mono border border-slate-200 dark:border-slate-700 uppercase tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-10">
                  {selectedProject.longDescription && (
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 uppercase tracking-wide text-sm font-mono">
                        <Activity size={16} className="text-primary-500" /> {content.context}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                        {selectedProject.longDescription}
                      </p>
                    </div>
                  )}

                  {selectedProject.features && selectedProject.features.length > 0 && (
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 uppercase tracking-wide text-sm font-mono">
                        <Cpu size={16} className="text-primary-500" /> {content.features}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {selectedProject.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                            <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" />
                            <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Competencies Section */}
                  {selectedProject.competencies && selectedProject.competencies.length > 0 && (
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 uppercase tracking-wide text-sm font-mono">
                        <Award size={16} className="text-primary-500" /> {content.competencies}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {selectedProject.competencies.map((comp, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/30">
                            <Zap size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                            <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{comp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-1 space-y-8">
                  {/* Tech Stack Visualizer */}
                  <div className="bg-slate-50 dark:bg-slate-800/30 p-6 rounded-xl border border-slate-100 dark:border-slate-800 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wide font-mono flex items-center gap-2">
                      <Database size={14} /> {content.stack}
                    </h3>
                    <div className="space-y-3">
                      {selectedProject.tags.slice(0, 6).map((tag, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex justify-between text-xs text-slate-500">
                            <span>{tag}</span>
                            <span>{Math.floor(85 + Math.random() * 15)}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary-500 rounded-full"
                              style={{ width: `${Math.floor(60 + Math.random() * 40)}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedProject.results && selectedProject.results.length > 0 && (
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wide font-mono">
                        {content.metrics}
                      </h3>
                      <ul className="space-y-3">
                        {selectedProject.results.map((result, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-col gap-3 pt-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    {selectedProject.githubUrl && (
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-5 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-bold hover:opacity-90 transition-colors shadow-lg">
                        <FolderGit2 size={18} />
                        {content.code}
                      </a>
                    )}
                    {selectedProject.demoUrl && (
                      <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-5 py-3 bg-primary-600 text-white rounded-lg font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-900/20">
                        <ExternalLink size={18} />
                        {content.demo}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
