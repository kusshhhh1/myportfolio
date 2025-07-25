import React, { useState } from 'react';
import { Trophy, Award, Medal } from 'lucide-react';
import { achievements } from '../data/portfolio';
import { SectionWrapper } from './SectionWrapper';
import { AnimatedHeading } from './AnimatedHeading';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import { SiMastercard, SiAmazon, SiLinkedin, SiTata } from 'react-icons/si';
import { FaGamepad, FaFileAlt, FaTimes } from 'react-icons/fa';
import ibmIcon from '../assets/icons8-ibm-50.png';
import eaIcon from '../assets/pngwing.com.png';
import jpMorganIcon from '../assets/icons8-chase-bank-50.png';
import cyberIcon from '../assets/icons8-cyber-security-50.png';
import mlIcon from '../assets/icons8-machine-learning-50.png';

const certifications = [
  {
    title: 'Mastercard Foundations Certificate',
    org: 'Mastercard',
    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_BgqayvWeeRoX3YJxn_1744654805981_completion_certificate.pdf',
    icon: <SiMastercard className="text-orange-400" size={40} />,
    tooltip: 'Mastercard • Foundations',
    type: 'link',
  },
  {
    title: 'AWS Foundations Certificate',
    org: 'AWS',
    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_BgqayvWeeRoX3YJxn_1744655104388_completion_certificate.pdf',
    icon: <SiAmazon className="text-yellow-300" size={40} />,
    tooltip: 'AWS • Foundations',
    type: 'link',
  },
  {
    title: 'EA Games & SAIC Certificate',
    org: 'EA Games',
    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_BgqayvWeeRoX3YJxn_1744654161671_completion_certificate.pdf',
    icon: <img src={eaIcon} alt="EA Games" className="w-10 h-10 object-contain bg-white rounded-lg p-1" />,
    tooltip: 'EA Games & SAIC',
    type: 'link',
  },
  {
    title: 'Tata Foundations Certificate',
    org: 'Tata',
    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_BgqayvWeeRoX3YJxn_1744532433044_completion_certificate.pdf',
    icon: <SiTata className="text-blue-400" size={40} />,
    tooltip: 'Tata • Foundations',
    type: 'link',
  },
  {
    title: 'Microsoft / LinkedIn Learning Certificate',
    org: 'Microsoft / LinkedIn',
    url: 'https://www.linkedin.com/learning/certificates/8308dc20372ec4676b4d55eb9a2c2f05f948c11d182ce710123f8aca50423cd3',
    icon: <SiLinkedin className="text-blue-400" size={40} />,
    tooltip: 'Microsoft / LinkedIn Learning',
    type: 'link',
  },
  {
    title: 'Introduction to Cyber Security',
    org: 'Simplilearn SkillUp',
    pdf: '/src/assets/CYBER SECURITY.pdf',
    icon: <img src={cyberIcon} alt="Cyber Security" className="w-10 h-10 object-contain bg-white rounded-lg p-1" />,
    tooltip: 'Simplilearn • Cyber Security',
    type: 'pdf',
  },
  {
    title: 'Python 101 for Data Science',
    org: 'IBM Cognitive Class',
    pdf: '/src/assets/IBM PYTHON FOR DATA SCIENCE.pdf',
    icon: <img src={ibmIcon} alt="IBM" className="w-10 h-10 object-contain bg-white rounded-lg p-1" />,
    tooltip: 'IBM • Python for Data Science',
    type: 'pdf',
  },
  {
    title: 'SQL and Relational Databases 101',
    org: 'IBM Cognitive Class',
    pdf: '/src/assets/IBM SQL AND RDBMS.pdf',
    icon: <img src={ibmIcon} alt="IBM" className="w-10 h-10 object-contain bg-white rounded-lg p-1" />,
    tooltip: 'IBM • SQL & RDBMS',
    type: 'pdf',
  },
  {
    title: 'Machine Learning Basics',
    org: 'Simplilearn SkillUp',
    pdf: '/src/assets/MACHINE LEARNING.pdf',
    icon: <img src={mlIcon} alt="Machine Learning" className="w-10 h-10 object-contain bg-white rounded-lg p-1" />,
    tooltip: 'Simplilearn • Machine Learning',
    type: 'pdf',
  },
  {
    title: 'Investment Banking Job Simulation',
    org: 'JP Morgan x Forage',
    pdf: '/src/assets/JP MORGAN VIRTUAL INTERNSHIP.pdf',
    icon: <img src={jpMorganIcon} alt="JP Morgan" className="w-10 h-10 object-contain bg-white rounded-lg p-1" />,
    tooltip: 'JP Morgan • Investment Banking',
    type: 'pdf',
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeInOut,
      delay: i * 0.12,
    },
  }),
};

const Achievements: React.FC = () => {
  const [modalPdf, setModalPdf] = useState<string | null>(null);
  const openModal = (pdf: string) => setModalPdf(pdf);
  const closeModal = () => setModalPdf(null);

  const getIcon = (iconName: string) => {
    const icons = {
      trophy: Trophy,
      award: Award,
      medal: Medal
    };
    return icons[iconName as keyof typeof icons] || Trophy;
  };

  const getIconColor = (position: string) => {
    if (position.includes('1st')) return 'text-yellow-400';
    if (position.includes('2nd')) return 'text-gray-300';
    if (position.includes('3rd')) return 'text-orange-400';
    return 'text-cyan-400';
  };

  return (
    <SectionWrapper id="achievements" className="py-20 px-4">
      <AnimatedHeading>Achievements</AnimatedHeading>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => {
            const Icon = getIcon(achievement.icon);
            const iconColor = getIconColor(achievement.position);
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Icon className={`${iconColor} group-hover:animate-pulse`} size={32} />
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className={`text-sm font-medium ${iconColor}`}>
                      {achievement.position}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Certifications Section Below Achievements */}
      <div className="mb-12 text-center mt-20">
        <AnimatedHeading>Certifications</AnimatedHeading>
        <div className="w-32 h-1 mx-auto mt-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            className="relative group bg-black/60 backdrop-blur-lg rounded-2xl border-2 border-cyan-400/30 shadow-lg neon-card-cert flex flex-col items-center text-center p-8 transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:shadow-cyan-400/30 cursor-pointer"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            tabIndex={0}
            aria-label={cert.tooltip}
          >
            <div className="mb-4 flex items-center justify-center" title={cert.tooltip}>
              {cert.icon}
            </div>
            <h3 className="text-base font-bold text-white mb-1 neon-glow-cert">{cert.title}</h3>
            <div className="text-xs text-cyan-300 font-semibold mb-2">{cert.org}</div>
            {/* Hover overlay for link/pdf */}
            {cert.type === 'link' && (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/80 bg-opacity-80 rounded-2xl opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 z-10"
                style={{ backdropFilter: 'blur(2px)' }}
                tabIndex={-1}
              >
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-semibold shadow-lg neon-glow-cert text-sm scale-95 group-hover:scale-105 transition-transform duration-300 flex items-center gap-2">
                  View Certificate
                </span>
              </a>
            )}
            {cert.type === 'pdf' && cert.pdf && (
              <button
                onClick={() => openModal(cert.pdf)}
                className="absolute inset-0 flex items-center justify-center bg-black/80 bg-opacity-80 rounded-2xl opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 z-10"
                style={{ backdropFilter: 'blur(2px)' }}
                tabIndex={-1}
                aria-label={`View ${cert.title}`}
              >
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-semibold shadow-lg neon-glow-cert text-sm scale-95 group-hover:scale-105 transition-transform duration-300 flex items-center gap-2">
                  View Certificate
                </span>
              </button>
            )}
          </motion.div>
        ))}
      </div>
      {/* Modal for local PDFs */}
      <AnimatePresence>
        {modalPdf && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-black/90 rounded-2xl p-4 max-w-3xl w-full shadow-2xl border-2 border-cyan-400/40 flex flex-col items-center"
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <button
                className="absolute top-3 right-3 text-cyan-300 text-2xl font-bold hover:text-blue-400 transition-colors duration-200 focus:outline-none"
                onClick={closeModal}
                aria-label="Close"
              >
                <FaTimes />
              </button>
              <object data={modalPdf} type="application/pdf" className="w-full h-[70vh] rounded-lg shadow-lg" aria-label="PDF Certificate">
                <p className="text-white">Unable to display PDF. <a href={modalPdf} target="_blank" rel="noopener noreferrer" className="underline text-cyan-400">Download here</a>.</p>
              </object>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        .neon-card-cert {
          box-shadow: 0 0 16px 2px #429ce1, 0 0 32px 4px #bc42e1;
        }
        .neon-card-cert:hover, .neon-card-cert:focus-within {
          box-shadow: 0 0 32px 8px #22d3ee99, 0 0 64px 16px #2563eb55;
          border-image: linear-gradient(90deg, #429ce1, #bc42e1) 1;
        }
        .neon-glow-cert {
          text-shadow: 0 0 8px #429ce1, 0 0 16px #bc42e1;
        }
      `}</style>
    </SectionWrapper>
  );
};

export default Achievements;