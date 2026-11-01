import React from 'react';
import { Code, Terminal, Layers, Palette, BarChart, GitBranch, CloudUpload, FileText } from 'lucide-react';

export default function TechStack() {
  const technologies = [
    {
      name: 'React 19',
      category: 'UI Library',
      description: 'Declarative component-driven frontend architecture with modern reactive state management and hooks.',
      icon: Code,
      badge: 'Frontend Core'
    },
    {
      name: 'Vite 8',
      category: 'Build Tool & Bundler',
      description: 'Ultra-fast ESM development server and optimized rollup production bundling with relative path support.',
      icon: Terminal,
      badge: 'Build Tooling'
    },
    {
      name: 'JavaScript (ES2022)',
      category: 'Programming Language',
      description: 'Clean modern ECMAScript standard used across all client components, configuration, and helpers.',
      icon: Layers,
      badge: 'Core Language'
    },
    {
      name: 'HTML5 & Semantic Web',
      category: 'Markup Standard',
      description: 'Accessible DOM landmark elements, semantic metadata headers, OpenGraph protocols, and native web components.',
      icon: FileText,
      badge: 'Structure'
    },
    {
      name: 'CSS3 & Tailwind CSS v4',
      category: 'Styling Engine',
      description: 'Utility-first styling with high-performance CSS engine, custom responsive breakpoints, and dark mode palette.',
      icon: Palette,
      badge: 'Design System'
    },
    {
      name: 'Tableau Public',
      category: 'Data Visualization & BI',
      description: 'Enterprise business intelligence engine hosting published interactive workbooks, dashboards, and storytelling views.',
      icon: BarChart,
      badge: 'Analytics Engine'
    },
    {
      name: 'GitHub',
      category: 'Version Control & VCS',
      description: 'Distributed git repository management for version control, issue tracking, and collaborative development.',
      icon: GitBranch,
      badge: 'Source Code'
    },
    {
      name: 'GitHub Pages',
      category: 'Zero-Cost Static Hosting',
      description: 'Automated GitHub Actions CI/CD deployment pipeline delivering the static application with SSL at zero operational cost.',
      icon: CloudUpload,
      badge: 'Hosting & CI/CD'
    },
  ];

  return (
    <section id="technologies" className="py-20 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-orange-400">
            System Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Technologies & Tools Used
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Every component in this platform is engineered with modern, open standards and zero server overhead. Designed for effortless static hosting on GitHub Pages.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="p-5 rounded-xl bg-[#0e121a] border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-3 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:bg-orange-500/20 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      {tech.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                      {tech.name}
                    </h3>
                    <div className="text-xs text-orange-400/90 font-medium mt-0.5">
                      {tech.category}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {tech.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Production Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
