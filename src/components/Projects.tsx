import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolio';
import { motion, easeInOut } from 'framer-motion';
import { AnimatedHeading } from './AnimatedHeading';
import { SectionWrapper } from './SectionWrapper';

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

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" className="w-full flex flex-col items-center space-y-12 px-2 sm:px-4 py-20 bg-transparent">
      <AnimatedHeading>Projects</AnimatedHeading>
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          className="w-full max-w-full sm:max-w-3xl bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg border border-white/10 p-4 sm:p-6 flex flex-col items-center space-y-6 relative group hover:shadow-cyan-400/25 transition-shadow duration-300"
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardStagger}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-md mb-4 transition-transform duration-300 group-hover:scale-105"
            whileHover={{ scale: 1.07 }}
            style={{ willChange: 'transform' }}
          />
          <div className="w-full flex flex-col items-center">
            <h3 className="text-2xl font-bold text-white mb-2 text-center">{project.title}</h3>
            <p className="text-gray-300 text-center mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-xs font-medium border border-cyan-400/30"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-4 mt-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                <Github size={18} />
                <span className="text-sm">Show Code</span>
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </SectionWrapper>
  );
};

export default Projects;