/// <reference types="../vite-env.d.ts" />
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { socialLinks } from '../data/portfolio';
import heroImg from '../assets/IMG_20250211_114256_123 (1).jpg';
import { SectionWrapper } from './SectionWrapper';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getIcon = (iconName: string) => {
    const icons = {
      github: Github,
      linkedin: Linkedin,
      mail: Mail,
      instagram: Instagram
    };
    return icons[iconName as keyof typeof icons] || Mail;
  };

  return (
    <SectionWrapper id="home" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8 order-2 lg:order-1 mt-8 lg:mt-0">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            <span className="block bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Kushagra
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Sharma
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Welcome to Kushagra's creative space – a hub to showcase, update, and share his latest work.
          </p>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start space-x-6">
            {socialLinks.map((link) => {
              const Icon = getIcon(link.icon);
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25"
                >
                  <Icon
                    size={24}
                    className="text-white group-hover:text-cyan-400 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="group relative inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
          >
            <span>Explore My Work</span>
            <ArrowDown size={20} className="group-hover:animate-bounce" />
          </button>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex justify-center lg:justify-start order-1 lg:order-2 mb-8 lg:mb-0">
          <div className="relative">
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-[24rem] lg:h-[24rem] rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <img
                  src={heroImg}
                  alt="Kushagra Sharma"
                  className="w-full h-full rounded-full object-cover object-left"
                />
              </div>
            </div>
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl animate-pulse" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;