import React from 'react';
import { ArrowUp, GitBranch, Zap, ExternalLink } from 'lucide-react';
import { TABLEAU_CONFIG } from '../config/tableau.js';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#06080c] border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Mission */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                <Zap className="w-4 h-4 fill-orange-400" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                EV <span className="text-orange-400">Insights</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Electric Vehicle Market Performance & Insights — An interactive analytics platform tracking global EV adoption patterns, manufacturer competitiveness, battery efficiency, and retail pricing dynamics.
            </p>

            <div className="text-xs text-slate-400 space-y-1">
              <div>Author: <span className="text-slate-300 font-medium">{TABLEAU_CONFIG.author.name}</span></div>
              <div>Lead Researcher & Capstone Project Evaluation</div>
            </div>
          </div>

          {/* Direct Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-orange-400 transition-colors">
                  Project Scope & Overview
                </a>
              </li>
              <li>
                <a href="#dashboard" className="hover:text-orange-400 transition-colors">
                  Interactive Tableau Dashboard
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-orange-400 transition-colors">
                  Market Dynamics Story
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-orange-400 transition-colors">
                  Analytics Feature Modules
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-orange-400 transition-colors">
                  Research Methodology
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-orange-400 transition-colors">
                  Technology Stack
                </a>
              </li>
            </ul>
          </div>

          {/* External Links & Portfolio */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Repositories & Profiles
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-orange-400 transition-colors"
                >
                  <GitBranch className="w-3.5 h-3.5 text-slate-400" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a
                  href={TABLEAU_CONFIG.author.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-orange-400 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  <span>Tableau Public Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={TABLEAU_CONFIG.dashboard.publishedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-orange-400 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  <span>Published Dashboard Link</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} EV Insights — Electric Vehicle Market Performance & Insights. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#121620] hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-colors"
            aria-label="Scroll back to top of the page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
