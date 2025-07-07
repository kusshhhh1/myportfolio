import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, cubicBezier } from 'framer-motion';

interface AnimatedHeadingProps {
  children: React.ReactNode;
}

const cometVariantsLeft = {
  initial: { opacity: 0, x: 0, scale: 0.5 },
  animate: { opacity: 1, x: -80, scale: 1, transition: { duration: 0.8, ease: cubicBezier(0.42, 0, 0.58, 1) } },
  exit: { opacity: 0, scale: 0.5, transition: { duration: 0.5 } },
};
const cometVariantsRight = {
  initial: { opacity: 0, x: 0, scale: 0.5 },
  animate: { opacity: 1, x: 80, scale: 1, transition: { duration: 0.8, ease: cubicBezier(0.42, 0, 0.58, 1) } },
  exit: { opacity: 0, scale: 0.5, transition: { duration: 0.5 } },
};

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ children }) => {
  const [showComets, setShowComets] = useState(true);

  useEffect(() => {
    setShowComets(true);
    const timer = setTimeout(() => setShowComets(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex items-center justify-center mb-12">
      {/* Comet Trails */}
      <AnimatePresence>
        {showComets && (
          <>
            <motion.div
              className="absolute left-0 top-1/2 -translate-y-1/2 z-0"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={cometVariantsLeft}
              style={{ width: 60, height: 8 }}
            >
              <div className="comet-trail bg-cyan-400/80 blur-md rounded-full w-full h-full" />
            </motion.div>
            <motion.div
              className="absolute right-0 top-1/2 -translate-y-1/2 z-0"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={cometVariantsRight}
              style={{ width: 60, height: 8 }}
            >
              <div className="comet-trail bg-cyan-400/80 blur-md rounded-full w-full h-full" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <h2 className="animated-neon-heading relative z-10 text-4xl lg:text-5xl font-bold text-center mb-4">
        {children}
      </h2>
      <style>{`
        .animated-neon-heading {
          color: #fff;
          text-shadow:
            0 0 8px #00d0ff,
            0 0 16px #00d0ff,
            0 0 32px #00d0ff;
          animation: neon-blink 2.5s infinite alternate;
        }
        @keyframes neon-blink {
          0%, 100% {
            text-shadow:
              0 0 8px #00d0ff,
              0 0 16px #00d0ff,
              0 0 32px #00d0ff;
          }
          50% {
            text-shadow:
              0 0 16px #00d0ff,
              0 0 32px #00d0ff,
              0 0 64px #00d0ff;
          }
        }
      `}</style>
    </div>
  );
}; 