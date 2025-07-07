import React, { ReactNode } from 'react';
import { motion, useInView, AnimatePresence, easeInOut } from 'framer-motion';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeInOut,
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    transition: {
      duration: 0.6,
      ease: easeInOut,
    },
  },
};

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = '', id }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <AnimatePresence mode="wait">
      <motion.section
        ref={ref}
        id={id}
        className={className}
        style={{ willChange: 'transform, opacity' }}
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        exit="exit"
      >
        {children}
      </motion.section>
    </AnimatePresence>
  );
}; 