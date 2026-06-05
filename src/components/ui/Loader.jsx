import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [statusText, setStatusText] = useState('Initializing...');

  const messages = [
    'Initializing stack...',
    'Loading React components...',
    'Configuring Node.js...',
    'Connecting MongoDB...',
    'Applying AI magic ✨',
    'Almost there...',
    'Welcome! 🚀',
  ];

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 15 + 5;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setStatusText('Welcome! 🚀');
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 700);
        }, 400);
      } else {
        const msgIdx = Math.floor((p / 100) * (messages.length - 1));
        setStatusText(messages[msgIdx]);
      }
      setProgress(Math.min(p, 100));
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loader-screen"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="glow-orb glow-cyan absolute w-96 h-96 top-1/4 left-1/4 opacity-10" />
            <div className="glow-orb glow-violet absolute w-80 h-80 bottom-1/4 right-1/4 opacity-10" />
          </div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: 'backOut' }}
            className="loader-logo"
          >
            BK
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-mono text-sm text-muted mt-2 tracking-widest"
          >
            KULDIP BOGHARA
          </motion.p>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 280 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-10"
          >
            <div className="loader-bar-wrap">
              <motion.div
                className="loader-bar"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <p className="loader-text">{statusText}</p>
              <p className="loader-text">{Math.round(progress)}%</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
