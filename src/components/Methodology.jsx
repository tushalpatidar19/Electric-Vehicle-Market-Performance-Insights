import React from 'react';
import { 
  Database, 
  Filter, 
  Search, 
  BarChart, 
  LayoutDashboard, 
  BookMarked, 
  Globe, 
  FileCheck 
} from 'lucide-react';

export default function Methodology() {
  const steps = [
    {
      step: '01',
      title: 'Data Collection',
      icon: Database,
      detail:
        'Sourced structured electric vehicle demographic and technical specifications, including vehicle identification, make, model year, electric vehicle type (BEV/PHEV), clean alternative fuel eligibility, electric range, base MSRP, and geographic county/state locations.',
    },
    {
      step: '02',
      title: 'Data Preparation & Cleaning',
      icon: Filter,
      detail:
        'Audited data schemas for null values, anomalous zero-range recordings, non-standardized manufacturer brand spellings, and outlier prices. Filtered incomplete registration records to ensure reliable comparative groupings.',
    },
    {
      step: '03',
      title: 'Exploratory Data Analysis (EDA)',
      icon: Search,
      detail:
        'Conducted preliminary statistical profiling to assess distributions, skewness, model year representation frequencies, and correlation coefficients between battery range, MSRP, and registration densities.',
    },
    {
      step: '04',
      title: 'Data Visualization Design',
      icon: BarChart,
      detail:
        'Designed visual encodings adhering to cognitive design principles: choosing bar distributions for manufacturer rankings, scatter plots for range-versus-MSRP regressions, and choropleth/geographic maps for spatial adoption.',
    },
    {
      step: '05',
      title: 'Dashboard Development',
      icon: LayoutDashboard,
      detail:
        'Constructed interactive dashboards in Tableau Public utilizing Level-of-Detail (LOD) calculations, synchronized filters, interactive highlight actions, and clean container layouts configured for both desktop and mobile viewports.',
    },
    {
      step: '06',
      title: 'Story Creation',
      icon: BookMarked,
      detail:
        'Arranged analytical views into a sequential storytelling narrative, guiding users from overarching global EV adoption milestones down to granular battery density milestones and cost parity timelines.',
    },
    {
      step: '07',
      title: 'Web Integration',
      icon: Globe,
      detail:
        'Embedded the live Tableau Public visualization using the modern Tableau Embedding JavaScript API within a high-performance React + Vite single-page application engineered with Tailwind CSS.',
    },
    {
      step: '08',
      title: 'Testing & Documentation',
      icon: FileCheck,
      detail:
        'Conducted responsive viewport testing across mobile and desktop breakpoints, audited accessibility contrast ratios, validated Tableau embed event loops, and compiled comprehensive open-source GitHub documentation.',
    },
  ];

  return (
    <section id="methodology" className="py-20 bg-[#0b0e15] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-orange-400">
            Research Process
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Methodology & Technical Workflow
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A structured eight-phase pipeline transforming raw automotive registration archives into interactive decision-grade intelligence.
          </p>
        </div>

        {/* 8-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="p-6 rounded-xl bg-[#111622] border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-4 relative group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono font-bold text-orange-400">
                      Phase {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-md bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.detail}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400/80" />
                  <span>Verified Research Step</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
