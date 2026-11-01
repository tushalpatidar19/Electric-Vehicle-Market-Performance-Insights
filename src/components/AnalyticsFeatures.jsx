import React from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Globe2, 
  Battery, 
  Gauge, 
  Factory, 
  Zap, 
  ArrowRight,
  ExternalLink 
} from 'lucide-react';
import { TABLEAU_CONFIG } from '../config/tableau.js';

export default function AnalyticsFeatures() {
  const features = [
    {
      id: 'sales-analysis',
      title: 'Manufacturer Sales Analysis',
      icon: TrendingUp,
      purpose:
        'Analyzes historical delivery volumes, annual growth rates, and market share shifts between early pure-play EV pioneers and legacy conglomerates transitioning their production lines.',
      metrics: ['Registration Velocity', 'Quarterly Growth Trends', 'OEM Market Share'],
      tableauSheet: 'Manufacturer Performance'
    },
    {
      id: 'pricing-comparison',
      title: 'EV Pricing Comparison',
      icon: DollarSign,
      purpose:
        'Evaluates manufacturer MSRP distributions, sticker price premiums across vehicle segments (sedan, SUV, truck), incentive eligibility tiers, and price-per-mile-of-range metrics.',
      metrics: ['Base MSRP Distribution', 'Price per Mile Range', 'Segment Margin Curves'],
      tableauSheet: 'Pricing & TCO Matrix'
    },
    {
      id: 'geographical-distribution',
      title: 'Country-wise EV Distribution',
      icon: Globe2,
      purpose:
        'Examines geospatial concentration of EV adoption, national fleet turnover rates, and regional demand patterns influenced by policy incentives and localized charging density.',
      metrics: ['Regional Adoption Density', 'Territory Registration Share', 'Urban vs Rural Share'],
      tableauSheet: 'Geographic EV Distribution'
    },
    {
      id: 'battery-capacity',
      title: 'Battery Capacity Analysis',
      icon: Battery,
      purpose:
        'Synthesizes pack gross vs usable kWh capacity, cell form factors (prismatic, pouch, cylindrical), chemistry transitions (LFP vs High-Nickel NMC), and thermal pack architectures.',
      metrics: ['Pack kWh Capacity Spread', 'Specific Energy Density', 'C-Rate Fast Charging'],
      tableauSheet: 'Battery Technology Benchmark'
    },
    {
      id: 'driving-range',
      title: 'Driving Range Comparison',
      icon: Gauge,
      purpose:
        'Benchmarks median and maximum EPA/WLTP estimated driving ranges across model generations, tracking how modern platforms overcome consumer range anxiety in long-distance travel.',
      metrics: ['EPA / WLTP Range Rating', 'Range Growth by Model Year', 'Cold-Weather Variance'],
      tableauSheet: 'Range & Efficiency Curves'
    },
    {
      id: 'manufacturer-distribution',
      title: 'Manufacturer Distribution',
      icon: Factory,
      purpose:
        'Assesses OEM brand portfolio diversity, model offering breadths, and competitive brand positioning within passenger and commercial vehicle electrification brackets.',
      metrics: ['Active Model Portfolios', 'BEV vs PHEV Ratio', 'Platform Sharing Spread'],
      tableauSheet: 'OEM Brand Concentration'
    },
    {
      id: 'efficiency-analysis',
      title: 'EV Efficiency Analysis',
      icon: Zap,
      purpose:
        'Calculates real-world energy consumption efficiency (kWh consumed per 100 miles / MPGe), factoring in curb weight, drag coefficient ($C_d$), inverter Silicon Carbide (SiC) tech, and motor topology.',
      metrics: ['kWh per 100 Miles', 'Drag Coefficient Correlation', 'Regenerative Recovery'],
      tableauSheet: 'Vehicle Energy Efficiency'
    },
  ];

  const handleInspectDashboard = (e) => {
    e.preventDefault();
    const dashboardSection = document.getElementById('dashboard');
    if (dashboardSection) {
      dashboardSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="features" className="py-20 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-orange-400">
            Analytical Dimensions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Comprehensive Analytical Feature Suite
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Every analysis within the EV Insights architecture corresponds to dedicated visualization views in our published Tableau workbook. Explore the research goals behind each dimension below.
          </p>
        </div>

        {/* Feature Cards Grid (Asymmetric Bento-like rhythm) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            const isFeatured = index === 0; // Marquee card

            return (
              <div
                key={item.id}
                className={`p-6 rounded-xl bg-[#0e121a] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 group ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2 bg-[#101522]' : ''
                }`}
              >
                <div className="space-y-4">
                  {/* Card Header with Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:bg-orange-500/20 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      Module 0{index + 1}
                    </span>
                  </div>

                  {/* Title & Purpose */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {item.purpose}
                    </p>
                  </div>

                  {/* Core Metrics Analyzed */}
                  <div className="space-y-1.5 pt-2">
                    <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                      Evaluated Parameters:
                    </div>
                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-300">
                      {item.metrics.map((metric, mIdx) => (
                        <span key={mIdx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-orange-400" />
                          <span>{metric}</span>
                          {mIdx < item.metrics.length - 1 && <span className="text-slate-400">·</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <a
                    href="#dashboard"
                    onClick={handleInspectDashboard}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    <span>View In Dashboard</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href={TABLEAU_CONFIG.dashboard.publishedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-300 text-xs flex items-center gap-1"
                    title="Open directly in Tableau Public"
                  >
                    <span>Tableau</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
