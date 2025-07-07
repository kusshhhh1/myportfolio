import React from 'react';
import { Code, Wrench, Layers, Database } from 'lucide-react';
import { skills } from '../data/portfolio';
import { SectionWrapper } from './SectionWrapper';
import { AnimatedHeading } from './AnimatedHeading';
import { motion, easeInOut } from 'framer-motion';

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

const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    const icons = {
      code: Code,
      wrench: Wrench,
      layers: Layers,
      database: Database
    };
    return icons[iconName as keyof typeof icons] || Code;
  };

  return (
    <SectionWrapper id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <AnimatedHeading>Skills</AnimatedHeading>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillCategory, index) => {
            const Icon = getIcon(skillCategory.icon);
            return (
              <motion.div
                key={index}
                className="group relative p-6 rounded-[1.5rem] bg-white/5 backdrop-blur-lg border-2 border-transparent transition-all duration-300 shadow-lg flex flex-col items-center text-center"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  boxShadow: '0 4px 32px 0 rgba(66,156,225,0.10), 0 0 0 2px rgba(188,66,225,0.10)'
                }}
                onMouseEnter={e => e.currentTarget.classList.add('glow-border')}
                onMouseLeave={e => e.currentTarget.classList.remove('glow-border')}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardStagger}
              >
                <span className="mb-3 flex items-center justify-center">
                  <Icon size={32} className="neon-icon" />
                </span>
                <h3 className="text-xl font-bold text-white mb-4 neon-glow">
                  {skillCategory.category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-[#429ce1] to-[#bc42e1] text-white shadow-md neon-tag animate-glow-pill"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <style>{`
                  .glow-border {
                    border-image: linear-gradient(90deg, #429ce1, #bc42e1) 1;
                    box-shadow: 0 0 16px 2px #429ce1, 0 0 32px 4px #bc42e1;
                    transform: scale(1.02);
                  }
                  .neon-icon {
                    filter: drop-shadow(0 0 8px #429ce1) drop-shadow(0 0 16px #bc42e1);
                  }
                  .neon-glow {
                    text-shadow: 0 0 8px #429ce1, 0 0 16px #bc42e1;
                  }
                  .neon-tag {
                    box-shadow: 0 0 8px #429ce1, 0 0 16px #bc42e1;
                  }
                  @keyframes glow-pill {
                    0%, 100% { box-shadow: 0 0 8px #429ce1, 0 0 16px #bc42e1; }
                    50% { box-shadow: 0 0 16px #bc42e1, 0 0 32px #429ce1; }
                  }
                  .animate-glow-pill {
                    animation: glow-pill 2s infinite alternate;
                  }
                `}</style>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;