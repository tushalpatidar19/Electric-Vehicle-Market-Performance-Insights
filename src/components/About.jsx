import React from 'react';
import { Target, BarChart2, ShieldCheck, Compass, Layers, Cpu, BatteryMedium } from 'lucide-react';
import powertrainImage from '../assets/images/battery_powertrain_diagram_1793555559710.jpg';

export default function About() {
  const objectives = [
    {
      title: 'What the Project Analyzes',
      description:
        'A multi-dimensional inquiry into the global shift toward electromobility. The study evaluates historical and projected adoption trajectories, manufacturer segment dominance, vehicle MSRP curves, battery cell capacities, and real-world range benchmarks.',
      icon: Target,
    },
    {
      title: 'Why EV Market Analysis Matters',
      description:
        'The transportation sector is in the midst of its most significant transformation since the internal combustion engine. Understanding adoption inflection points is vital for policymakers designing charging infrastructure, OEMs managing platform transitions, and consumers navigating total cost of ownership (TCO).',
      icon: Compass,
    },
    {
      title: 'The Purpose of Data Visualization',
      description:
        'Automotive datasets are dense and multi-faceted. Interactive visualization bridges raw statistical tabular data into intuitive spatial and comparative intelligence, enabling researchers to detect non-linear correlations between battery capacity, vehicle weight, and price elasticity.',
      icon: BarChart2,
    },
    {
      title: 'How It Helps Explore Patterns',
      description:
        'Through integrated Tableau cross-filtering, users can segment by manufacturer, powertrains (BEV vs. PHEV), driving ranges, and geographic markets. This hands-on exploratory capability surfaces regional outliers and OEM pricing anomalies.',
      icon: Layers,
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#0b0e15] border-t border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-orange-400">
            Project Overview & Scope
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance">
            Understanding the Electric Vehicle Revolution Through Data
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            EV Insights was engineered as an academic capstone initiative to consolidate fragmented automotive intelligence into an authoritative, publicly accessible visualization environment.
          </p>
        </div>

        {/* 2-Column Analytical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: 4 Analytical Objectives */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {objectives.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-lg bg-[#111622] border border-slate-800 hover:border-slate-700 transition-colors space-y-3"
                  >
                    <div className="w-9 h-9 rounded-md bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-slate-100">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Academic Rigor Callout Note */}
            <div className="p-4 rounded-lg bg-[#0e121a] border border-slate-800 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-400 leading-relaxed">
                <span className="font-semibold text-slate-200">Methodological Transparency: </span>
                This portal presents live Tableau Public visual sheets linked directly to the author’s primary research workspace. All analytical conclusions are grounded in structured dataset distributions without synthetic inflation.
              </div>
            </div>
          </div>

          {/* Right Column: Technical Platform Architecture Showcase */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#111622] flex-1 flex flex-col justify-between">
              
              <div className="p-5 pb-3 border-b border-slate-800/80">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-orange-400" />
                    Powertrain & Architecture Dimensions
                  </span>
                  <span className="font-mono text-slate-400">EV Platform Analysis</span>
                </div>
              </div>

              <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                <img
                  src={powertrainImage}
                  alt="Modular skateboard battery chassis schematic showing lithium cell pack arrangement and motor unit"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111622] via-transparent to-black/20 pointer-events-none" />
              </div>

              <div className="p-5 space-y-3">
                <h4 className="text-sm font-semibold text-white">The Engineering Nexus</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Market performance is fundamentally governed by cell energy density ($Wh/kg$), pack thermal management, and inverter efficiency. Tracking vehicle MSRP against pack kWh capacity allows us to pinpoint when price-parity milestones are achieved across vehicle segments.
                </p>
                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
                  <span>Battery Cell Chemistries</span>
                  <span className="text-orange-400 font-medium">LFP · NMC · Solid-State R&D</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
