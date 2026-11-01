import React from 'react';
import { ArrowDown, ExternalLink, Activity, BatteryCharging, Gauge, TrendingUp } from 'lucide-react';
import { TABLEAU_CONFIG } from '../config/tableau.js';
import heroImage from '../assets/images/hero_ev_mobility_1793555541396.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Subtle ambient amber gradient background glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-orange-600/10 blur-[130px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Proposition, Context & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Humanized Academic & Research Metadata (Zero-Pill formatting) */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-medium tracking-wide">
              <span className="text-orange-400 font-semibold uppercase tracking-wider">Academic Capstone Research</span>
              <span aria-hidden="true">·</span>
              <span>Curated by {TABLEAU_CONFIG.author.name}</span>
              <span aria-hidden="true">·</span>
              <span>Tableau Public Portfolio</span>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
                Electric Vehicle Market Performance & Insights
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                An interactive intelligence platform tracking global EV adoption patterns, manufacturer competitive strategies, battery efficiency frontiers, and retail pricing dynamics.
              </p>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#dashboard"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-black bg-orange-400 hover:bg-orange-300 rounded-md transition-all shadow-lg shadow-orange-500/20 active:scale-[0.98] whitespace-nowrap"
              >
                <span>Explore Dashboard</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#story"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-md transition-all active:scale-[0.98] whitespace-nowrap"
              >
                <span>Explore Story</span>
                <TrendingUp className="w-4 h-4 text-orange-400" />
              </a>

              <a
                href={TABLEAU_CONFIG.dashboard.publishedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-medium text-slate-400 hover:text-orange-300 transition-colors"
                title="Direct link to published Tableau Public workbook"
              >
                <span>Tableau Public</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Key Analytical Pillars (Clean unboxed statistics/dimensions) */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-xs text-slate-400 font-medium">Core Metric</div>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">Adoption Curves</div>
                <div className="text-xs text-slate-400">Year-over-Year</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Domain</div>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">OEM Performance</div>
                <div className="text-xs text-slate-400">BEV vs. PHEV</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Powertrain</div>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">Range & Density</div>
                <div className="text-xs text-slate-400">Pack Efficiency</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Market Force</div>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">Pricing Parity</div>
                <div className="text-xs text-slate-400">Cost per Mile</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Container */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-xl overflow-hidden border border-slate-800 bg-[#0e121a] shadow-2xl">
              
              {/* Media Image with graceful loading and fallback */}
              <div className="relative aspect-video lg:aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  src={heroImage}
                  alt="High performance electric vehicle silhouette in a dark architectural setting with amber horizon glow"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Measured Scrim for legibility and aesthetic gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e121a] via-transparent to-black/30 pointer-events-none" />
              </div>

              {/* Caption Card below visual */}
              <div className="p-5 border-t border-slate-800/80 bg-[#0e121a]">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-orange-400" />
                    Interactive Visualization Platform
                  </span>
                  <span className="font-mono text-slate-400">Tableau 2026 Engine</span>
                </div>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  Synthesizing multi-variable vehicle telemetry, regional registrations, and OEM strategic announcements into cohesive visual stories.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
