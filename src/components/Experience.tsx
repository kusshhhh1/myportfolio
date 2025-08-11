import React from 'react';
import { motion, easeInOut } from 'framer-motion';
import { experiences } from '../data/portfolio';
import { SectionWrapper } from './SectionWrapper';
import { AnimatedHeading } from './AnimatedHeading';
import { SiPython, SiPandas, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';
import { FaRobot, FaMusic } from 'react-icons/fa';

const iconMap: Record<string, JSX.Element> = {
  python: <SiPython className="text-yellow-400" size={28} />, // LinuxWorld
  webdev: <SiHtml5 className="text-orange-400" size={28} />, // DigiAM
  ml: <FaRobot className="text-cyan-400" size={28} />, // Pinnacle Labs
  music: <FaMusic className="text-pink-400" size={28} />,
};

const timelineVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeInOut,
      delay: i * 0.18,
    },
  }),
};

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <AnimatedHeading>Experience</AnimatedHeading>
          <div className="w-24 h-1 mx-auto mt-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse" />
        </div>
        <div className="relative">
          {/* Glowing vertical timeline */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-500 rounded-full opacity-60 z-0" style={{ minHeight: '100%' }} />
          <div className="space-y-12 pl-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title + exp.company + exp.duration}
                className="relative group flex flex-col sm:flex-row items-start sm:items-center gap-6"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={timelineVariants}
              >
                {/* Timeline dot */}
                <span className="absolute -left-7 top-2 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 border-4 border-black shadow-lg shadow-cyan-400/30 flex items-center justify-center z-10 animate-pulse">
                  {iconMap[exp.icon] || <SiPython className="text-cyan-400" size={24} />}
                </span>
                {/* Card */}
                <div className="flex-1 bg-black/60 backdrop-blur-lg rounded-2xl border-2 border-cyan-400/30 group-hover:border-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-400/10 px-6 py-6 sm:py-8 neon-card-timeline relative">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white mb-1 neon-glow-timeline">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-cyan-300 font-semibold whitespace-nowrap mt-1 sm:mt-0">
                      {exp.duration}
                    </span>
                  </div>
                  <div className="text-base text-gray-300 font-medium mb-2">{exp.company}</div>
                  <ul className="list-disc pl-5 text-gray-400 space-y-1">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .neon-card-timeline {
          box-shadow: 0 0 16px 2px #429ce1, 0 0 32px 4px #bc42e1;
        }
        .neon-card-timeline:hover {
          box-shadow: 0 0 32px 8px #22d3ee99, 0 0 64px 16px #2563eb55;
          border-image: linear-gradient(90deg, #429ce1, #bc42e1) 1;
        }
        .neon-glow-timeline {
          text-shadow: 0 0 8px #429ce1, 0 0 16px #bc42e1;
        }
      `}</style>
    </SectionWrapper>
  );
};

export default Experience;