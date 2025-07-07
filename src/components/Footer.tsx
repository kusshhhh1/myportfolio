import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';
import { socialLinks } from '../data/portfolio';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/80 border-t border-white/10 py-10 px-4 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-6">
        {/* Left: Name, Tagline, Socials */}
        <div className="flex flex-col items-start gap-3">
          <span className="text-2xl font-bold text-cyan-400 flex items-center gap-2 mb-1">⚡ Kushagra Sharma</span>
          <span className="text-gray-300 text-sm mb-2">“Building elegant full-stack solutions with passion”</span>
          <div className="flex gap-3 mt-1">
            <a href="https://github.com/kusshhhh1" target="_blank" rel="noopener noreferrer" className="footer-social"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/kushagra-sharma-1b9336317" target="_blank" rel="noopener noreferrer" className="footer-social"><Linkedin size={20} /></a>
            <a href="mailto:kushagrasharm1@gmail.com" className="footer-social"><Mail size={20} /></a>
            <a href="https://www.instagram.com/_kusshhhh" target="_blank" rel="noopener noreferrer" className="footer-social"><Instagram size={20} /></a>
          </div>
        </div>
        {/* Center: Quick Links */}
        <div className="flex flex-col items-center">
          <span className="text-cyan-300 font-semibold mb-2">Quick Links</span>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#about" className="footer-link">About</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
        </div>
        {/* Right: Contact Info */}
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2 text-gray-300"><MapPin className="text-cyan-400" size={16} /> Bareilly, India</div>
          <div className="flex items-center gap-2 text-gray-300"><Mail className="text-cyan-400" size={16} /> kushagrasharm1@gmail.com</div>
          <div className="flex items-center gap-2 text-gray-300"><Phone className="text-cyan-400" size={16} /> +91-7465063765</div>
        </div>
      </div>
      <div className="text-center text-cyan-300 text-sm mt-6">Made with <span className="text-pink-400">❤️</span> by Kushagra Sharma</div>
      <style>{`
        .footer-link {
          color: #fff;
          padding: 0.3rem 1rem;
          border-radius: 9999px;
          background: rgba(0,212,255,0.07);
          border: 1px solid rgba(0,212,255,0.15);
          transition: all 0.2s;
          font-weight: 500;
        }
        .footer-link:hover {
          color: #00d0ff;
          background: rgba(0,212,255,0.18);
          border-color: #00d0ff;
        }
        .footer-social {
          color: #fff;
          border-radius: 9999px;
          padding: 0.4rem;
          background: rgba(0,212,255,0.07);
          border: 1px solid rgba(0,212,255,0.15);
          transition: all 0.2s;
          display: flex;
          align-items: center;
        }
        .footer-social:hover {
          color: #00d0ff;
          background: rgba(0,212,255,0.18);
          border-color: #00d0ff;
          box-shadow: 0 0 8px #00d0ff, 0 0 16px #00d0ff;
        }
      `}</style>
    </footer>
  );
};

export default Footer;