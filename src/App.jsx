import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Dashboard from './components/Dashboard.jsx';
import Story from './components/Story.jsx';
import AnalyticsFeatures from './components/AnalyticsFeatures.jsx';
import Methodology from './components/Methodology.jsx';
import TechStack from './components/TechStack.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 flex flex-col font-sans selection:bg-orange-500/30 selection:text-orange-200">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Dashboard />
        <Story />
        <AnalyticsFeatures />
        <Methodology />
        <TechStack />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
