import React, { useState } from 'react';
import { Mail, Phone, Send, Github, Linkedin, Instagram, MapPin } from 'lucide-react';
import { socialLinks } from '../data/portfolio';
import { SectionWrapper } from './SectionWrapper';
import { AnimatedHeading } from './AnimatedHeading';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
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
    <SectionWrapper id="contact" className="py-20 px-2 md:px-4">
      <div className="container mx-auto flex flex-col gap-12 md:flex-row md:gap-8 items-stretch">
        {/* Left: Contact Info Card */}
        <div className="flex-1 w-full max-w-md md:max-w-none mb-8 md:mb-0 flex flex-col justify-between">
          <AnimatedHeading>Contact</AnimatedHeading>
          <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-cyan-400/20 shadow-lg shadow-cyan-400/10 backdrop-blur-sm mb-0 flex-1 flex flex-col justify-between">
            <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">Contact Information</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-gray-200"><Mail className="text-cyan-400" size={20} /> <span>kushagrasharm1@gmail.com</span></div>
              <div className="flex items-center gap-3 text-gray-200"><Phone className="text-cyan-400" size={20} /> <span>+91-7465063765</span></div>
              <div className="flex items-center gap-3 text-gray-200"><MapPin className="text-cyan-400" size={20} /> <span>Bareilly, India</span></div>
            </div>
            <h4 className="text-lg font-semibold text-blue-300 mb-2 mt-6">Let's Work Together</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1 pl-2">
              <li>Full Stack Development (MERN + Flask)</li>
              <li>AI & Automation Integration</li>
              <li>DevOps Projects (Docker, Linux, Cloud)</li>
              <li>Open Source Contributions</li>
            </ul>
          </div>
        </div>
        {/* Right: Contact Form */}
        <div className="flex-1 w-full max-w-xl md:max-w-none flex flex-col justify-between">
          <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-cyan-400/20 shadow-lg shadow-cyan-400/10 backdrop-blur-sm flex-1 flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col justify-between">
              <div>
                <label htmlFor="name" className="block text-white text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <label htmlFor="message" className="block text-white text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 border-2 border-cyan-400/30 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;