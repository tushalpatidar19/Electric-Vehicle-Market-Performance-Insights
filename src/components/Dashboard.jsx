import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, RefreshCw, Maximize2, Minimize2, Info, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { TABLEAU_CONFIG, getTableauEmbedUrl } from '../config/tableau.js';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [keyIndex, setKeyIndex] = useState(0);
  const containerRef = useRef(null);

  const embedUrl = getTableauEmbedUrl(TABLEAU_CONFIG.dashboard.embedViewUrl);
  const publishedUrl = TABLEAU_CONFIG.dashboard.publishedUrl;

  // Handle iframe / viz loading completion
  useEffect(() => {
    setIsLoading(true);
    setLoadError(false);

    // Timeout safety fallback: if Tableau takes > 8 seconds or blocks embedding
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, [keyIndex]);

  const handleRefresh = () => {
    setKeyIndex((prev) => prev + 1);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {
        setIsFullscreen(!isFullscreen);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <section id="dashboard" className="py-20 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-2 max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-orange-400">
              Interactive Visualization
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              {TABLEAU_CONFIG.dashboard.title}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {TABLEAU_CONFIG.dashboard.description}
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={handleRefresh}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-[#141a26] hover:bg-slate-800 border border-slate-700/80 rounded-md transition-colors"
              title="Reload embedded view"
            >
              <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
              <span>Refresh</span>
            </button>

            <button
              onClick={toggleFullscreen}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-[#141a26] hover:bg-slate-800 border border-slate-700/80 rounded-md transition-colors"
              title="Toggle full screen view"
            >
              {isFullscreen ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5" />
                  <span>Exit Fullscreen</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Fullscreen</span>
                </>
              )}
            </button>

            <a
              href={publishedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-black bg-orange-400 hover:bg-orange-300 rounded-md transition-all shadow-sm shadow-orange-500/20 whitespace-nowrap"
            >
              <span>Open on Tableau Public</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Dashboard Metadata Bar (Zero-pill text separators) */}
        <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 py-3 px-4 mb-4 rounded-lg bg-[#0e121a] border border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-slate-300 font-medium">Author: {TABLEAU_CONFIG.author.name}</span>
            <span aria-hidden="true">·</span>
            <span>Tableau Public Cloud Verified</span>
            <span aria-hidden="true">·</span>
            <span className="text-orange-400 font-mono">No Login Required</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-slate-400">
            <span>Direct Live Embed</span>
          </div>
        </div>

        {/* Tableau Visualization Container */}
        <div
          ref={containerRef}
          className={`relative rounded-xl border border-slate-800 bg-[#0e121a] overflow-hidden shadow-2xl transition-all ${
            isFullscreen ? 'fixed inset-0 z-50 rounded-none border-none p-4' : 'w-full'
          }`}
        >
          {/* Subtle top indicator bar */}
          <div className="h-1 bg-gradient-to-r from-orange-500/20 via-orange-400 to-orange-500/20" />

          {/* Loading Skeleton Indicator */}
          {isLoading && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0e121a]/95 backdrop-blur-sm p-6 text-center space-y-4">
              <div className="relative w-12 h-12">
                <div className="w-12 h-12 rounded-full border-2 border-slate-800 border-t-orange-400 animate-spin" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white">Loading Tableau Public Dashboard...</h4>
                <p className="text-xs text-slate-400 max-w-sm">
                  Establishing direct handshake with public.tableau.com visualization servers.
                </p>
              </div>
            </div>
          )}

          {/* The Embed View: Using Tableau standard embed iframe + parameters */}
          <div className="relative w-full min-h-[640px] md:min-h-[820px] lg:min-h-[900px] bg-[#0e121a]">
            <iframe
              key={keyIndex}
              src={embedUrl}
              title={TABLEAU_CONFIG.dashboard.title}
              width="100%"
              height="100%"
              className="w-full min-h-[640px] md:min-h-[820px] lg:min-h-[900px] border-0"
              allowFullScreen
              onLoad={() => {
                setIsLoading(false);
              }}
              onError={() => {
                setIsLoading(false);
                setLoadError(true);
              }}
            />
          </div>

          {/* Bottom helper & fallback banner */}
          <div className="p-4 bg-[#0a0d14] border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-orange-400 shrink-0" />
              <span>
                Interactivity note: Click on any chart element or legend in the workbook to cross-filter across all sheets.
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={publishedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 underline underline-offset-2 flex items-center gap-1 font-medium"
              >
                Having trouble viewing? Open full view directly
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
