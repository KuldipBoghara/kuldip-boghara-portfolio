import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ParticleField from '../three/ParticleField';
// import DevCharacter from '../ui/DevCharacter'; // Kept for reference — alternative hero animation
import FloatingTerminal from '../ui/FloatingTerminal';

// Text scramble effect
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

function useScramble(target, delay = 0) {
  const [text, setText] = useState('');
  useEffect(() => {
    let iteration = 0;
    let timeout;
    let interval;

    timeout = setTimeout(() => {
      interval = setInterval(() => {
        setText(
          target.split('').map((char, idx) => {
            if (char === ' ') return ' ';
            if (idx < iteration) return target[idx];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          }).join('')
        );
        if (iteration >= target.length) clearInterval(interval);
        iteration += 0.5;
      }, 40);
    }, delay);

    return () => { clearTimeout(timeout); clearInterval(interval); };
  }, [target, delay]);

  return text || target;
}

const roles = ['MERN Stack Developer', 'Full-Stack Engineer', 'AI-Powered Builder', 'React Specialist', 'API Architect'];

function RoleTyper() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[roleIdx];
    let timeout;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <span className="text-cyan-400 font-mono">
      {displayed}
      <span className="border-r-2 border-cyan-400 ml-0.5 animate-pulse">&nbsp;</span>
    </span>
  );
}

export default function Hero() {
  const name1 = useScramble('KULDIP', 600);
  const name2 = useScramble('BOGHARA', 1000);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="hero" className="hero">
      {/* 3D Particle Background */}
      <ParticleField />

      {/* Glow orbs */}
      <div className="glow-orb glow-cyan absolute w-96 h-96 top-20 left-10 opacity-15 pointer-events-none" style={{ filter: 'blur(100px)' }} />
      <div className="glow-orb glow-violet absolute w-80 h-80 bottom-20 right-10 opacity-15 pointer-events-none" style={{ filter: 'blur(100px)' }} />

      <div className="hero-content">
        {/* Left: Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="hero-badge mb-6 inline-flex">
              <span className="hero-badge-dot" />
              Available for opportunities
            </div>
          </motion.div>

          {/* Open to work tag */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="open-to-work">
              <span className="open-to-work-dot" />
              Open to Work
            </span>
          </motion.div>

          {/* Name with scramble */}
          <motion.div variants={itemVariants}>
            <p className="font-mono text-sm text-muted mb-2 tracking-widest">Hello, I'm</p>
            <h1 className="hero-name">
              <span
                className="glitch gradient-text block"
                data-text={name1}
              >
                {name1}
              </span>
              <span className="text-white block">{name2}</span>
            </h1>
          </motion.div>

          {/* Role typer */}
          <motion.div variants={itemVariants} className="hero-tagline-wrap mt-4 mb-4">
            <RoleTyper />
          </motion.div>

          {/* Chips */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-6">
            {['React.js', 'Node.js', 'MongoDB', 'AI Tools', 'TypeScript'].map(tag => (
              <span key={tag} className="hero-role-chip">{tag}</span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="hero-desc">
            I craft high-performance, scalable full-stack web applications using the MERN stack.
            From architecting RESTful APIs to building pixel-perfect UIs — I bridge the gap between
            backend logic and seamless user experiences. Now integrating <span className="text-cyan">AI capabilities</span> into
            every layer of the stack.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="hero-btns">
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>

            <motion.a
              href="#contact"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-outline"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Let's Talk
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14 10.67C14 11 13.93 11.33 13.79 11.63C13.55 12.12 13.18 12.56 12.72 12.88C12.13 13.29 11.41 13.5 10.67 13.5C9.65 13.5 8.64 13.23 7.67 12.7L4.5 14L5.8 10.83C5.27 9.86 5 8.85 5 7.83C5 6.73 5.27 5.69 5.81 4.81" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </motion.div>

          {/* Social quick links */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mt-8">
            <span className="text-muted text-xs font-mono">Find me on</span>
            <div className="flex gap-3">
              {[
                { icon: '⌂', label: 'GitHub', href: 'https://github.com/KuldipBoghara' },
                { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/kuldip-boghara/' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-9 h-9 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-200 text-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Floating Terminal Animation */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center"
        >
          {/* <DevCharacter /> */}{/* Alternative: SVG cartoon dev character — uncomment to use */}
          <FloatingTerminal />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span className="font-mono text-xs text-muted">scroll</span>
      </motion.div>
    </section>
  );
}
