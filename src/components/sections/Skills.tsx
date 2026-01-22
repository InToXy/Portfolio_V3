import React from 'react';
import { Cpu, Cloud, Code2, Server, Shield, Activity, Database, Terminal } from 'lucide-react';
import { SkillCategory } from '../../types';
import { motion } from 'framer-motion';
import { IconCloud } from '../ui/IconCloud';

interface SkillsProps {
  content: {
    tag: string;
    title: string;
    categories: SkillCategory[];
  };
}

const slugs = [
  "docker",
  "terraform",
  "ansible",
  "microsoftazure",
  "amazonwebservices",
  "traefikproxy",
  "gitlab",
  "gnubash",
  "powershell",
  "git",
  "github",
  "cisco",
  "pfsense",
  "python",
  "nodedotjs",
  "prometheus",
  "grafana",
  "zabbix",
  "postgresql",
  "html5",
  "css3",
  "nextdotjs",
  "linux",
  "windows",
  "debian",
  "ubuntu",
  "centos",
  "jira",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Skills: React.FC<SkillsProps> = ({ content }) => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  const getIconForCategory = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('devops') || t.includes('cloud')) return <Cloud size={24} />;
    if (t.includes('ci/cd') || t.includes('automation')) return <Terminal size={24} />;
    if (t.includes('network') || t.includes('security')) return <Shield size={24} />;
    if (t.includes('programming')) return <Code2 size={24} />;
    if (t.includes('admin') || t.includes('system')) return <Server size={24} />;
    if (t.includes('data')) return <Database size={24} />;
    return <Cpu size={24} />;
  };

  const getCardColor = (index: number) => {
    const colors = [
      "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40",
      "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/40",
      "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 group-hover:bg-green-200 dark:group-hover:bg-green-800/40",
      "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 group-hover:bg-amber-200 dark:group-hover:bg-amber-800/40",
      "bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 group-hover:bg-rose-200 dark:group-hover:bg-rose-800/40",
      "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800/40",
    ]
    return colors[index % colors.length];
  }

  return (
    <section id="skills" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-sm font-bold tracking-widest text-primary-600 dark:text-primary-400 uppercase mb-3 font-mono">
            {content.tag}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {content.title}
          </h3>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* First 4 categories */}
          {content.categories.slice(0, 4).map((category, idx) => {
            // idx is 0,1,2,3
            return <SkillCard key={idx} category={category} idx={idx} />
          })}

          {/* Center Cloud */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex items-center justify-center p-0 pr-10000"
          >
            <div className="w-full max-w-sm cursor-pointer hover:scale-105 transition-transform duration-500 ease-out">
              <IconCloud images={images} />
            </div>
          </motion.div>

          {/* Remaining 4 categories */}
          {content.categories.slice(4).map((category, idx) => {
            // idx starts at 0 for this slice, so we offset by 4 for unique key
            return <SkillCard key={idx + 4} category={category} idx={idx + 4} />
          })}

          {/* Mobile Cloud (visible only on small/medium screens) */}
          <motion.div
            variants={itemVariants}
            className="lg:hidden md:col-span-2 flex justify-center py-8"
          >
            <div className="w-full max-w-sm cursor-pointer hover:scale-105 transition-transform duration-500 ease-out">
              <IconCloud images={images} />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

const SkillCard = ({ category, idx }: { category: unknown, idx: number }) => {
  // Helper to get icon
  const getIconForCategory = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('devops') || t.includes('cloud')) return <Cloud size={24} />;
    if (t.includes('ci/cd') || t.includes('automation')) return <Terminal size={24} />;
    if (t.includes('network') || t.includes('security')) return <Shield size={24} />;
    if (t.includes('programming') || t.includes('code')) return <Code2 size={24} />;
    if (t.includes('admin') || t.includes('system')) return <Server size={24} />;
    if (t.includes('data')) return <Database size={24} />;
    if (t.includes('monitoring')) return <Activity size={24} />;
    return <Cpu size={24} />;
  };

  // Helper to get color
  const getCardColor = (index: number) => {
    const colors = [
      "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40",
      "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/40",
      "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 group-hover:bg-green-200 dark:group-hover:bg-green-800/40",
      "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 group-hover:bg-amber-200 dark:group-hover:bg-amber-800/40",
      "bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 group-hover:bg-rose-200 dark:group-hover:bg-rose-800/40",
      "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800/40",
      "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/40",
      "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 group-hover:bg-orange-200 dark:group-hover:bg-orange-800/40",
    ]
    return colors[index % colors.length];
  }

  const cat = category as SkillCategory;
  const iconColorClass = getCardColor(idx);

  // Item variants repeated here or passed down
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className="group relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 dark:from-slate-800/40 dark:to-slate-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>

      <div className="flex items-start justify-between mb-6">
        <div className={`p-3 rounded-lg shadow-sm transition-colors duration-300 ${iconColorClass}`}>
          {getIconForCategory(cat.title)}
        </div>
      </div>

      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {cat.title}
      </h4>

      <div className="flex flex-wrap gap-2 mt-auto">
        {cat.skills.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1 text-sm rounded-md font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50 group-hover:border-slate-300 dark:group-hover:border-slate-600 transition-colors cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default Skills;
