import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Zap } from 'lucide-react';
import { TABLEAU_CONFIG } from '../config/tableau.js';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'dashboard', 'story', 'features', 'methodology', 'technologies'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Dashboard', href: '#dashboard', id: 'dashboard' },
    { label: 'Story', href: '#story', id: 'story' },
    { label: 'Features', href: '#features', id: 'features' },
    { label: 'Methodology', href: '#methodology', id: 'methodology' },
    { label: 'Tech Stack', href: '#technologies', id: 'technologies' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#090b10]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-8">
          
          {/* Brand Wordmark (Single-Line Brand Zone) */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-slate-100 hover:text-white transition-colors whitespace-nowrap shrink-0 group"
          >
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all">
              <Zap className="w-4 h-4 fill-orange-400" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              EV <span className="text-orange-400 font-extrabold">Insights</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                  activeSection === link.id
                    ? 'text-orange-400 font-semibold border-b-2 border-orange-400'
                    : 'hover:text-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary Action Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="#dashboard"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-orange-400 hover:bg-orange-300 rounded-md transition-all shadow-sm shadow-orange-500/20 whitespace-nowrap shrink-0"
            >
              Explore Dashboard
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e121a] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeSection === link.id
                  ? 'text-orange-400 bg-orange-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="#dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-black bg-orange-400 hover:bg-orange-300 rounded-md transition-colors"
            >
              Explore Dashboard
            </a>
            <a
              href={TABLEAU_CONFIG.dashboard.publishedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 px-4 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-md transition-colors inline-flex items-center justify-center gap-1.5"
            >
              Open on Tableau Public
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
