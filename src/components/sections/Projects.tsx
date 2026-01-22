import React, { useState, useMemo } from 'react';
import { Project } from '../../types';
import { FolderGit2, ExternalLink, X, Terminal, Server, CheckCircle, ArrowRight, Cpu, Activity, Database, Filter, Award, Zap, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-primary-500/5 cursor-pointer flex flex-col h-full hover:-translate-y-1 transition-all duration-300"
                onClick={() => openModal(project)}
              >
                {/* Image Header */}
                <div className="relative h-48 w-full overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                      <Terminal size={40} className="text-slate-400" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>

                  <div className="absolute top-4 right-4">
                    {project.featured && (
                      <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-primary-600 shadow-sm rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-1">
                      {project.category}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-1">
                    {project.title}
                  </h4>

                  <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/50">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs font-medium px-2 py-1 text-slate-400">+ {project.tags.length - 3}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal with Framer Motion */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 h-screen">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"
              onClick={closeModal}
            />

            {/* Modal content */}
            <motion.div
              layoutId={selectedProject.title} // Optional: for shared element transition if we gave the card a layoutId
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white dark:bg-slate-900 w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-xl shadow-2xl relative z-10 border border-slate-200 dark:border-slate-700 flex flex-col"
            >

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
                    {selectedProject.context && (
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 uppercase tracking-wide text-sm font-mono">
                          <Activity size={16} className="text-primary-500" /> {content.context}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-8">
                          {selectedProject.context}
                        </p>
                      </motion.div>
                    )}

                    {selectedProject.objective && (
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 uppercase tracking-wide text-sm font-mono">
                          <CheckCircle size={16} className="text-primary-500" /> {content.objective}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg whitespace-pre-wrap">
                          {selectedProject.objective}
                        </p>
                      </motion.div>
                    )}

                    {selectedProject.features && selectedProject.features.length > 0 && (
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
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
                      </motion.div>
                    )}

                    {/* Competencies Section */}
                    {selectedProject.competencies && selectedProject.competencies.length > 0 && (
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
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
                      </motion.div>
                    )}
                  </div>

                  <div className="lg:col-span-1 space-y-8">
                    {/* Tech Stack Visualizer */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="bg-slate-50 dark:bg-slate-800/30 p-6 rounded-xl border border-slate-100 dark:border-slate-800"
                    >
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wide font-mono flex items-center gap-2">
                        <Database size={14} /> {content.stack}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, i) => (
                          <div key={i} className="px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs font-mono font-semibold border border-slate-200 dark:border-slate-700 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                            {tag}
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {selectedProject.results && selectedProject.results.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
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
                      </motion.div>
                    )}

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-col gap-3 pt-4"
                    >
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
                      {selectedProject.deliverables && selectedProject.deliverables.map((item, index) => (
                        <a
                          key={index}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-900/20"
                        >
                          <Download size={18} />
                          {item.label}
                        </a>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
