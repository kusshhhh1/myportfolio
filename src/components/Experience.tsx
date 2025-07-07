import React, { useState } from 'react';
import { ExternalLink, Award } from 'lucide-react';
import { motion, easeInOut } from 'framer-motion';
import { experiences } from '../data/portfolio';
import { SectionWrapper } from './SectionWrapper';
import { AnimatedHeading } from './AnimatedHeading';

const cardStagger = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeInOut,
      delay: i * 0.15,
    },
  }),
};

const Experience: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <SectionWrapper id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <AnimatedHeading>Experience</AnimatedHeading>

        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardStagger}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Award className="text-cyan-400" size={24} />
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {exp.title}
                </h3>
              </div>
              
              <h4 className="text-lg font-medium text-gray-300 mb-3">
                {exp.company}
              </h4>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {exp.description}
              </p>

              {exp.certificateUrl && (
                <div className="relative">
                  {hoveredCard === index && (
                    <div className="absolute -top-12 left-0 right-0 z-10">
                      <div className="bg-black/90 backdrop-blur-sm rounded-lg p-3 border border-cyan-400/50">
                        <a
                          href={exp.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                        >
                          <ExternalLink size={16} />
                          <span className="text-sm">View Certificate</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;