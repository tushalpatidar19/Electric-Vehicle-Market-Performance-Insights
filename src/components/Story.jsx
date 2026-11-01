import React, { useState, useEffect } from 'react';
import { ExternalLink, BookOpen, Settings, Check, AlertCircle, Sparkles, Sliders, ChevronRight } from 'lucide-react';
import { TABLEAU_CONFIG, getTableauEmbedUrl } from '../config/tableau.js';

export default function Story() {
  // Allow user to enter or override the Story URL via UI (persisted in localStorage)
  const [storyUrl, setStoryUrl] = useState(() => {
    return localStorage.getItem('ev_tableau_story_url') || TABLEAU_CONFIG.story.publishedUrl || '';
  });
  const [inputUrl, setInputUrl] = useState(storyUrl);
  const [showConfig, setShowConfig] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('insights'); // 'insights' | 'embed'

  useEffect(() => {
    if (storyUrl) {
      setActiveTab('embed');
    }
  }, [storyUrl]);

  const handleSaveUrl = (e) => {
    e.preventDefault();
    const trimmed = inputUrl.trim();
    setStoryUrl(trimmed);
    localStorage.setItem('ev_tableau_story_url', trimmed);
    setSavedSuccess(true);
    if (trimmed) {
      setActiveTab('embed');
    }
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleClearUrl = () => {
    setStoryUrl('');
    setInputUrl('');
    localStorage.removeItem('ev_tableau_story_url');
    setActiveTab('insights');
  };

  // Structured Story Insights (clearly labeled as analytical research framework)
  const storyInsights = [
    {
      num: '01',
      title: 'Market Growth & Adoption Curves',
      theme: 'Adoption Inflection',
      summary:
        'Global EV registrations transitioned from an early innovator niche (<2% market share) to an exponential mainstream curve, propelled by stringent emission standards, urban low-emission zones, and consumer awareness.',
      keyFinding: 'Explanatory Note: The S-curve adoption velocity highlights key inflection points when regional market share crossed the 10% threshold.',
    },
    {
      num: '02',
      title: 'Manufacturer Competitive Dynamics',
      theme: 'OEM Restructuring',
      summary:
        'First-mover pure-play BEV brands established early volume dominance. However, established legacy automakers are rapidly closing platform gaps through dedicated modular skateboard architectures.',
      keyFinding: 'Explanatory Note: OEM divergence reveals differing capital allocations between dedicated BEV native skateboards and hybrid platform adaptations.',
    },
    {
      num: '03',
      title: 'Battery Cell Technology & Pack Density',
      theme: 'Energy Density & Chemistry',
      summary:
        'The dual-track evolution of Lithium Iron Phosphate (LFP) for cost-sensitive standard-range tiers versus Nickel-Manganese-Cobalt (NMC) for long-range and premium segments has diversified market offerings.',
      keyFinding: 'Explanatory Note: Pack-level gravimetric density gains directly compress per-kWh production costs toward the $100/kWh parity threshold.',
    },
    {
      num: '04',
      title: 'Vehicle Pricing & Total Cost of Ownership (TCO)',
      theme: 'Economic Parity',
      summary:
        'While initial sticker prices historically carried a 25–40% premium over ICE counterparts, operating expenditure savings (cheaper per-mile energy and reduced drivetrain servicing) compress the payback cycle to under 4 years.',
      keyFinding: 'Explanatory Note: TCO equivalence is reached much earlier in commercial and high-mileage fleet applications than in standard retail ownership.',
    },
    {
      num: '05',
      title: 'Driving Range Benchmarks & Consumer Confidence',
      theme: 'Range Confidence',
      summary:
        'Median electric vehicle ranges have risen from ~120 miles in early generation models to over 280–350 miles in current production platforms, significantly mitigating range hesitation among prospective adopters.',
      keyFinding: 'Explanatory Note: Fast-charging curve optimization (10% to 80% state of charge in 18–25 mins) has become as crucial as total gross range.',
    },
  ];

  const embedStoryUrl = storyUrl ? getTableauEmbedUrl(storyUrl) : '';

  return (
    <section id="story" className="py-20 bg-[#0b0e15] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-2 max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-orange-400">
              Narrative Analysis
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              {TABLEAU_CONFIG.story.title}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              A curated analytical storyline walking through the transformative forces reshaping modern electromobility.
            </p>
          </div>

          {/* Controls: Story Configuration Toggle & Story Link */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={() => setShowConfig(!showConfig)}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-[#141a26] hover:bg-slate-800 border border-slate-700/80 rounded-md transition-colors"
            >
              <Settings className="w-3.5 h-3.5 text-orange-400" />
              <span>{storyUrl ? 'Configure Story Link' : 'Add Story Link'}</span>
            </button>

            {storyUrl && (
              <a
                href={storyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-black bg-orange-400 hover:bg-orange-300 rounded-md transition-all shadow-sm shadow-orange-500/20 whitespace-nowrap"
              >
                <span>Open Story</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Story Configuration Setting Panel (When opened or if URL is not yet configured) */}
        {showConfig && (
          <div className="p-6 mb-8 rounded-xl bg-[#111724] border border-orange-500/30 shadow-xl space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-orange-400" />
                  Tableau Story URL Configuration
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Enter your published Tableau Story link from Tableau Public (e.g., <code className="text-orange-300 font-mono">https://public.tableau.com/app/profile/.../viz/.../StoryName</code> or view URL). The app will automatically embed it below without rebuilding.
                </p>
              </div>
              <button
                onClick={() => setShowConfig(false)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Close
              </button>
            </div>

            <form onSubmit={handleSaveUrl} className="flex flex-col sm:flex-row gap-3">
              <input
                type="url"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder="https://public.tableau.com/app/profile/.../viz/.../StoryName"
                className="flex-1 px-3.5 py-2.5 rounded-md bg-[#090b10] border border-slate-700 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-orange-500 font-mono text-xs"
              />
              <button
                type="submit"
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-orange-400 hover:bg-orange-300 rounded-md transition-colors shrink-0"
              >
                Save & Embed
              </button>
              {storyUrl && (
                <button
                  type="button"
                  onClick={handleClearUrl}
                  className="px-3 py-2 text-xs text-slate-400 hover:text-rose-400 transition-colors"
                >
                  Clear
                </button>
              )}
            </form>

            {savedSuccess && (
              <div className="text-xs text-emerald-400 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                <span>Story URL successfully saved! Embedding live below.</span>
              </div>
            )}
          </div>
        )}

        {/* View Switcher Tabs (When Story URL exists) */}
        {storyUrl && (
          <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-2">
            <button
              onClick={() => setActiveTab('embed')}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'embed'
                  ? 'bg-orange-500/10 text-orange-400 border border-orange-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Live Tableau Story Embed
            </button>
            <button
              onClick={() => setActiveTab('insights')}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'insights'
                  ? 'bg-orange-500/10 text-orange-400 border border-orange-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Story Insights Breakdown
            </button>
          </div>
        )}

        {/* Active View: Live Story Embed */}
        {storyUrl && activeTab === 'embed' && (
          <div className="rounded-xl border border-slate-800 bg-[#0e121a] overflow-hidden shadow-2xl mb-12">
            <div className="h-1 bg-gradient-to-r from-orange-500/20 via-orange-400 to-orange-500/20" />
            <div className="relative w-full min-h-[650px] md:min-h-[820px] bg-[#0e121a]">
              <iframe
                src={embedStoryUrl}
                title={TABLEAU_CONFIG.story.title}
                width="100%"
                height="100%"
                className="w-full min-h-[650px] md:min-h-[820px] border-0"
                allowFullScreen
              />
            </div>
            <div className="p-4 bg-[#0a0d14] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Interactive Tableau Story · Sequential Narrative Walkthrough</span>
              <a
                href={storyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 flex items-center gap-1 font-medium"
              >
                <span>Open Story in new tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* Fallback Notice when Story URL is not yet configured */}
        {!storyUrl && (
          <div className="p-5 mb-8 rounded-xl bg-[#111724] border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Tableau Story Integration Ready</span>
              </div>
              <p className="text-xs text-slate-400 max-w-2xl">
                The Story URL has not been hardcoded to preserve dataset authenticity. Click "Add Story Link" above or configure <code className="text-orange-300 font-mono">src/config/tableau.js</code> with your published Tableau Story link to embed it directly.
              </p>
            </div>
            <button
              onClick={() => setShowConfig(true)}
              className="px-3.5 py-2 text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors shrink-0"
            >
              Enter Story URL
            </button>
          </div>
        )}

        {/* Distinct Explanatory Insights Framework */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
            <h3 className="text-lg font-semibold text-white">
              Curated Market Insights Framework
            </h3>
            <span className="text-xs text-slate-400 font-normal">
              * Explanatory synthesis structured around the Tableau analytical storyline
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {storyInsights.map((insight) => (
              <div
                key={insight.num}
                className="p-6 rounded-xl bg-[#111622] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-orange-400">
                      Phase {insight.num}
                    </span>
                    <span className="text-xs text-slate-400">{insight.theme}</span>
                  </div>
                  <h4 className="text-base font-semibold text-slate-100">{insight.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {insight.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-xs text-slate-400 leading-relaxed font-mono">
                  {insight.keyFinding}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
