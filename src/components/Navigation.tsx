import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onResumeClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onResumeClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollY = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-2xl">💻</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Kushagra
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative group px-5 py-2 rounded-full font-semibold transition-all duration-300 flex items-center justify-center overflow-hidden
                    bg-white/5 border border-cyan-400/20
                    ${activeSection === item.id ? 'border-cyan-400 shadow-cyan-400/30' : 'shadow-none'}
                    hover:scale-105 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30
                  `}
                  style={{ minWidth: 110 }}
                >
                  {/* Animated Stars */}
                  <span className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                    <span className="star twinkle absolute left-3 top-1 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-70 animate-twinkle group-hover:animate-twinkle-fast" />
                    <span className="star twinkle absolute right-3 bottom-1 w-1 h-1 bg-blue-300 rounded-full opacity-60 animate-twinkle group-hover:animate-twinkle-fast" />
                    <span className="star twinkle absolute left-1/2 top-1/2 w-1 h-1 bg-white rounded-full opacity-40 animate-twinkle group-hover:animate-twinkle-fast" />
                  </span>
                  <span className={`relative z-10 transition-all duration-300 ${activeSection === item.id ? 'bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent' : 'text-white group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent'}`}>{item.label}</span>
                </button>
              ))}
            </div>
            <a
              href="#"
              onClick={e => { e.preventDefault(); onResumeClick && onResumeClick(); }}
              className="ml-4 px-5 py-2 rounded-full font-semibold border-2 border-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-cyan-400/30 shadow-md transition-all duration-300 hover:from-blue-400 hover:to-cyan-400 hover:text-black hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-cyan-400 transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-black/95 z-50 flex flex-col items-center py-8 space-y-6 border-b border-cyan-400/10 animate-fade-in-up">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-lg py-2 px-6 rounded-lg font-semibold border-2 border-cyan-400/60 bg-white/10 text-cyan-300 shadow-cyan-400/20 shadow-md transition-all duration-300 hover:bg-cyan-400/20 hover:border-cyan-400 hover:scale-105 flex items-center justify-center gap-2 ${activeSection === item.id ? 'bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent' : ''}`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="#"
              onClick={e => { e.preventDefault(); onResumeClick && onResumeClick(); }}
              className="w-full mt-2 px-6 py-2 rounded-full font-semibold border-2 border-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-cyan-400/30 shadow-md transition-all duration-300 hover:from-blue-400 hover:to-cyan-400 hover:text-black hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        )}
      </div>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-twinkle {
          animation: twinkle 2.2s infinite ease-in-out;
        }
        .animate-twinkle-fast {
          animation: twinkle 0.7s infinite ease-in-out;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;