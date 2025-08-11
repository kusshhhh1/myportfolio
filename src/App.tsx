import React, { useState } from 'react';
import StarField from './components/StarField';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CaseStudies from './components/CaseStudies';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const [showResumeOverlay, setShowResumeOverlay] = useState(false);

  return (
    <div className="relative min-h-screen">
      <StarField />
      <Navigation onResumeClick={() => setShowResumeOverlay(true)} />
      <div className={showResumeOverlay ? 'opacity-0 pointer-events-none transition-opacity duration-500' : 'opacity-100 transition-opacity duration-500'}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <CaseStudies />
        <Skills />
        <Achievements />
        <Contact />
      </div>
      {showResumeOverlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-3xl mx-auto p-6 sm:p-12 rounded-3xl bg-white/10 border-2 border-cyan-400/40 shadow-2xl backdrop-blur-2xl flex flex-col items-center glass-card">
            <button
              className="absolute top-6 right-6 text-cyan-300 text-2xl font-bold hover:text-blue-400 transition-colors duration-200 focus:outline-none"
              onClick={() => setShowResumeOverlay(false)}
              aria-label="Close"
            >
              ❌
            </button>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-center futuristic-title">
              Access My <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Resume</span>
            </h1>
            <p className="text-lg text-gray-200 mb-6 text-center">View my skills, achievements, and experience in a quick snapshot</p>
            <a
              href="/resume.pdf"
              download
              className="inline-block px-8 py-3 rounded-full font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-400/40 border-2 border-cyan-400 neon-glow transition-all duration-300 hover:from-blue-400 hover:to-cyan-400 hover:text-black hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 comet-hover"
            >
              📄 Get Resume (PDF)
            </a>
            <span className="text-xs text-cyan-300 mt-2 mb-4 block">Last updated: July 2025 • PDF Format</span>
            <div className="w-full h-1 bg-gradient-to-r from-cyan-400/30 via-blue-400/20 to-purple-600/30 rounded-full my-6 animate-pulse" />
            <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Highlights at a Glance</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mb-6">
              <ul className="text-gray-200 text-base space-y-2">
                <li>• Hands-on full-stack development</li>
                <li>• Technical certifications & workshops</li>
              </ul>
              <ul className="text-gray-200 text-base space-y-2">
                <li>• Campus leadership experience</li>
                <li>• Real-world automation projects</li>
              </ul>
            </div>
            <p className="text-gray-400 text-sm text-center mt-2">
              Want to know more? Feel free to{' '}
              <a href="mailto:kushagrasharm1@gmail.com" className="text-cyan-400 underline hover:text-blue-400 transition-colors duration-200">contact me</a>.
            </p>
          </div>
          <style>{`
            .glass-card {
              box-shadow: 0 0 32px 8px #22d3ee33, 0 0 64px 16px #2563eb22;
              backdrop-filter: blur(24px);
            }
            .futuristic-title {
              letter-spacing: 0.04em;
              font-family: 'Orbitron', 'Montserrat', 'Segoe UI', Arial, sans-serif;
            }
            .neon-glow {
              box-shadow: 0 0 16px 2px #22d3ee, 0 0 32px 4px #2563eb44;
            }
            .animate-fade-in {
              animation: fade-in 0.5s cubic-bezier(0.42,0,0.58,1);
            }
            @keyframes fade-in {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            .comet-hover:hover {
              box-shadow: 0 0 32px 8px #22d3ee99, 0 0 64px 16px #2563eb55, 0 0 0 4px #fff0 inset;
              background: linear-gradient(90deg, #22d3ee 0%, #2563eb 100%);
              color: #000;
              position: relative;
              overflow: visible;
            }
            .comet-hover:hover::after {
              content: '';
              position: absolute;
              left: 50%;
              top: 50%;
              width: 120px;
              height: 16px;
              background: radial-gradient(circle at 0 50%, #fff8, transparent 70%);
              transform: translate(-50%, -50%) rotate(-10deg);
              opacity: 0.7;
              pointer-events: none;
              filter: blur(4px);
              z-index: 10;
            }
          `}</style>
        </div>
      )}
      <CustomCursor />
    </div>
  );
}

export default App;