import React from 'react';
import { motion, easeInOut } from 'framer-motion';
import { caseStudies } from '../data/portfolio';
import { SectionWrapper } from './SectionWrapper';
import { AnimatedHeading } from './AnimatedHeading';
import { FaLinkedin } from 'react-icons/fa';
import caseStudyBg1 from '../assets/1.jpg';
import caseStudyBg2 from '../assets/2.jpg';
import caseStudyBg3 from '../assets/3.jpg';
import caseStudyBg4 from '../assets/4.jpg';
import caseStudyBg5 from '../assets/5.jpg';
import caseStudyBg6 from '../assets/6.png';
import caseStudyBg7 from '../assets/7.jpg';
import caseStudyBg8 from '../assets/8.jpg';
import caseStudyBg9 from '../assets/9.jpg';
import caseStudyBg10 from '../assets/10.jpg';
import caseStudyBg11 from '../assets/11.jpg';

const backgroundImages = [
  caseStudyBg1, caseStudyBg2, caseStudyBg3, caseStudyBg4, 
  caseStudyBg5, caseStudyBg6, caseStudyBg7, caseStudyBg8,
  caseStudyBg9, caseStudyBg10, caseStudyBg11
];

const cardStagger = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeInOut,
      delay: i * 0.1,
    },
  }),
};

const CaseStudies: React.FC = () => {
  console.log('CaseStudies component rendering, caseStudies data:', caseStudies);
  
  return (
    <SectionWrapper id="case-studies" className="py-20 px-4 bg-transparent">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedHeading>Case Studies</AnimatedHeading>
          <div className="w-24 h-1 mx-auto mt-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            In-depth technical articles and case studies I've published on LinkedIn, covering machine learning, 
            cloud computing, DevOps, and emerging technologies.
          </p>
        </div>
        
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {caseStudies.map((study, i) => (
             <motion.div
               key={study.title}
                               className={`group rounded-2xl border-2 border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/20 p-6 relative overflow-hidden bg-cover bg-center bg-no-repeat`}
                style={{ backgroundImage: `url(${backgroundImages[i] || backgroundImages[0]})` }}
               custom={i}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.3 }}
               variants={cardStagger}
               whileHover={{ y: -5, scale: 1.02 }}
             >
                             {/* Dark overlay for all cards with background images */}
               <div className="absolute inset-0 bg-black/60 rounded-2xl" />
               
               {/* Category Badge */}
               <div className="absolute top-4 right-4 z-10">
                 <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-xs font-medium border border-cyan-400/30">
                   {study.category}
                 </span>
               </div>
              
                             {/* Content */}
               <div className="mb-6 relative z-10">
                 <h3 className="text-lg font-bold text-white mb-3 line-clamp-3 group-hover:text-cyan-300 transition-colors duration-300">
                   {study.title}
                 </h3>
                 <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                   {study.description}
                 </p>
               </div>
              
              {/* LinkedIn Button */}
              <div className="mt-auto relative z-10">
                <button
                  type="button"
                  onClick={() => {
                    console.log('Case study button clicked for:', study.title);
                    console.log('Opening LinkedIn URL:', study.linkedinUrl);
                    window.open(study.linkedinUrl, '_blank', 'noopener,noreferrer');
                  }}
                  className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 cursor-pointer"
                  style={{ position: 'relative', zIndex: 20 }}
                >
                  <FaLinkedin size={18} />
                  <span>Read on LinkedIn</span>
                </button>
              </div>
              
              {/* Glowing effect - removed to prevent interference with button clicks */}
            </motion.div>
          ))}
        </div>
      </div>
      
      <style>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </SectionWrapper>
  );
};

export default CaseStudies;
