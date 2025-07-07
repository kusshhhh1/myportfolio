import React from 'react';
import { GraduationCap, Briefcase, Music } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
import { AnimatedHeading } from './AnimatedHeading';
import { motion, easeInOut } from 'framer-motion';

const cardData = [
  {
    icon: <GraduationCap className="text-cyan-400 group-hover:text-white transition-colors duration-300" size={32} />,
    title: 'Education',
    content: (
      <>
        <div className="text-gray-200">B.Tech in Computer Science – SRMS CET Bareilly (2026)</div>
        <div className="text-gray-400 text-sm mt-1">Completed Schooling from Hartmann College Bareilly</div>
      </>
    ),
    color: 'from-cyan-400 to-blue-500',
    hover: 'from-blue-500 to-purple-500',
  },
  {
    icon: <Briefcase className="text-cyan-400 group-hover:text-white transition-colors duration-300" size={32} />,
    title: 'Current Role',
    content: (
      <>
        <div className="text-gray-200">Full Stack Web Developer Intern at LinuxWorld Jaipur</div>
        <div className="text-gray-400 text-sm mt-1">Working with Python, Flask, Web & API development</div>
      </>
    ),
    color: 'from-cyan-400 to-purple-400',
    hover: 'from-purple-500 to-blue-500',
  },
  {
    icon: <Music className="text-cyan-400 group-hover:text-white transition-colors duration-300" size={32} />,
    title: 'Leadership',
    content: (
      <>
        <div className="text-gray-200">Head Coordinator – Music Club</div>
        <div className="text-gray-400 text-sm mt-1">Organizing college events, mentoring juniors, and promoting creativity across campus</div>
      </>
    ),
    color: 'from-cyan-400 to-pink-400',
    hover: 'from-pink-500 to-cyan-400',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      stiffness: 400,
      damping: 30,
      mass: 0.7,
      bounce: 0.4,
      duration: 0.8,
      delay: i * 0.18 + 0.2,
    },
  }),
};

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

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" className="py-20 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left: Intro Text */}
        <div className="flex-1 w-full max-w-xl mb-10 lg:mb-0">
          <AnimatedHeading>About</AnimatedHeading>
          <div className="bg-white/5 rounded-2xl p-8 border border-cyan-400/20 shadow-lg shadow-cyan-400/10 backdrop-blur-sm animate-fade-in-up">
            <div className="text-cyan-400 text-lg font-semibold mb-2">One word that drives me – "Creativity"</div>
            <div className="text-gray-200 text-lg mb-4">
              I'm Kushagra Sharma, a passionate full-stack developer currently pursuing my final year in B.Tech Computer Science at SRMS CET Bareilly (2026). With a strong interest in web technologies and innovation, I aim to build creative and impactful software solutions.
            </div>
            <div className="text-gray-400 mb-4">
              My curiosity pushes me to constantly learn, while my leadership roles and real-world projects have taught me to collaborate, mentor, and grow as a developer and a team player.
            </div>
            <div className="text-cyan-300 text-base flex flex-wrap gap-2 items-center">
              <span>🏫 Hartmann College Alumnus</span> <span>•</span> <span>🎓 SRMS CET</span> <span>•</span> <span>🌌 Space-Themed Developer</span>
            </div>
          </div>
        </div>
        {/* Right: Info Cards */}
        <div className="flex-1 w-full grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-1">
          {cardData.map((card, i) => (
            <motion.div
              key={card.title}
              className={`group bg-gradient-to-br ${card.color} hover:${card.hover} transition-all duration-500 rounded-2xl p-7 border-2 border-cyan-400/30 hover:border-cyan-400 shadow-lg shadow-cyan-400/10 backdrop-blur-md flex flex-col items-start cursor-pointer relative overflow-hidden`}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardStagger}
              whileHover={{ scale: 1.04 }}
            >
              <div className="flex items-center gap-3 mb-3">
                {card.icon}
                <span className="text-xl font-bold text-white drop-shadow-lg neon-glow">{card.title}</span>
              </div>
              <div className="text-base font-medium">
                {card.content}
              </div>
              {/* Glowing dots/comet trails for space theme */}
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full blur-xl opacity-60 animate-pulse" />
              <span className="absolute bottom-2 left-2 w-3 h-3 bg-blue-400 rounded-full blur-md opacity-40 animate-pulse" />
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .neon-glow {
          text-shadow: 0 0 8px #00d0ff, 0 0 16px #00d0ff, 0 0 32px #00d0ff;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(0.42,0,0.58,1);
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </SectionWrapper>
  );
};

export default About;