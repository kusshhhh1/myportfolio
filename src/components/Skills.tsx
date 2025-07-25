import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { AnimatedHeading } from './AnimatedHeading';
import { motion, easeInOut } from 'framer-motion';
import {
  SiPython, SiJavascript, SiTypescript, SiCplusplus,
  SiDocker, SiGit, SiLinux, SiAmazon, SiKubernetes,
  SiReact, SiNodedotjs, SiExpress, SiDjango, SiFlask,
  SiMongodb, SiPostgresql, SiPandas, SiNumpy, SiChartdotjs
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

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

const skillCards = [
  {
    title: 'Programming Languages',
    icon: <SiPython className="text-yellow-400" size={32} />, // Just for card accent
    skills: [
      { name: 'Python', icon: <SiPython className="text-yellow-400" size={36} /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-300" size={36} /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" size={36} /> },
      { name: 'Java', icon: <FaJava className="text-red-400" size={36} /> },
      { name: 'C++', icon: <SiCplusplus className="text-blue-300" size={36} /> },
    ],
    accent: 'from-yellow-400 to-blue-400',
  },
  {
    title: 'Tools & Platforms',
    icon: <SiDocker className="text-cyan-400" size={32} />, // Just for card accent
    skills: [
      { name: 'Docker', icon: <SiDocker className="text-cyan-400" size={36} /> },
      { name: 'Git', icon: <SiGit className="text-orange-400" size={36} /> },
      { name: 'Linux', icon: <SiLinux className="text-gray-200" size={36} /> },
      { name: 'AWS', icon: <SiAmazon className="text-yellow-300" size={36} /> },
      { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-300" size={36} /> },
    ],
    accent: 'from-cyan-400 to-blue-400',
  },
  {
    title: 'Libraries & Frameworks',
    icon: <SiReact className="text-cyan-300" size={32} />, // Just for card accent
    skills: [
      { name: 'React.js', icon: <SiReact className="text-cyan-300" size={36} /> },
      { name: 'Node.js', icon: <SiNodedotjs className="text-green-400" size={36} /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-200" size={36} /> },
      { name: 'Django', icon: <SiDjango className="text-green-700" size={36} /> },
      { name: 'Flask', icon: <SiFlask className="text-gray-300" size={36} /> },
    ],
    accent: 'from-cyan-400 to-purple-400',
  },
  {
    title: 'Data & Analytics',
    icon: <SiMongodb className="text-green-400" size={32} />, // Just for card accent
    skills: [
      { name: 'MongoDB', icon: <SiMongodb className="text-green-400" size={36} /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" size={36} /> },
      { name: 'Pandas', icon: <SiPandas className="text-gray-200" size={36} /> },
      { name: 'NumPy', icon: <SiNumpy className="text-blue-300" size={36} /> },
      { name: 'Matplotlib', icon: <SiChartdotjs className="text-blue-400" size={36} /> },
    ],
    accent: 'from-green-400 to-blue-400',
  },
];

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" className="py-20 px-4">
      <AnimatedHeading>Skills</AnimatedHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {skillCards.map((card, i) => (
          <motion.div
            key={card.title}
            className={`group relative p-7 rounded-3xl bg-gradient-to-br from-black/60 to-gray-900/80 border-2 border-cyan-400/30 shadow-xl flex flex-col items-center text-center transition-all duration-300 neon-card animated-tilt`}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardStagger}
          >
            <span className="mb-3 flex items-center justify-center">
              {card.icon}
            </span>
            <h3 className="text-xl font-bold text-white mb-4 neon-glow">
              {card.title}
            </h3>
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs mx-auto mb-2">
              {card.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-2">
                  {skill.icon}
                  <span className="text-sm text-gray-200 font-medium mt-1">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`
        .neon-card {
          box-shadow: 0 0 16px 2px #429ce1, 0 0 32px 4px #bc42e1;
        }
        .neon-card:hover {
          box-shadow: 0 0 32px 8px #22d3ee99, 0 0 64px 16px #2563eb55;
          border-image: linear-gradient(90deg, #429ce1, #bc42e1) 1;
        }
        .neon-glow {
          text-shadow: 0 0 8px #429ce1, 0 0 16px #bc42e1;
        }
        .animated-tilt {
          transition: transform 0.4s cubic-bezier(0.42,0,0.58,1), box-shadow 0.4s cubic-bezier(0.42,0,0.58,1);
        }
        .animated-tilt:hover {
          transform: perspective(800px) rotateY(8deg) rotateX(4deg) scale(1.04);
          box-shadow: 0 0 48px 12px #22d3ee88, 0 0 96px 24px #2563eb44;
        }
      `}</style>
    </SectionWrapper>
  );
};

export default Skills;