import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function CountUp({ to, suffix = '', delay = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = to / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref} className="stat-number">{count}{suffix}</span>;
}

const stats = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 15, suffix: '+', label: 'Projects Delivered' },
  { value: 10, suffix: '+', label: 'Tech Stack' },
  { value: 100, suffix: '%', label: 'Commitment' },
];

const codeSnippets = [
  'const app = express();',
  'useState([])',
  '.find({ active: true })',
  'async/await',
  'JWT.verify(token)',
  'useEffect(() => {})',
  'npm run dev',
  'git push origin main',
];

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="about" className="section" ref={sectionRef}>
      {/* Background glows */}
      <div className="glow-orb glow-violet absolute w-72 h-72 top-20 right-0 pointer-events-none" style={{ filter: 'blur(100px)', opacity: 0.08 }} />

      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="section-label justify-center mb-2">about me</p>
            <h2 className="section-title">
              The Developer <span className="gradient-text">Behind the Code</span>
            </h2>
          </motion.div>

          <div className="about-grid">
            {/* Photo column */}
            <motion.div variants={itemVariants} className="about-photo-wrap">
              {/* Floating code snippets */}
              {codeSnippets.slice(0, 4).map((snip, i) => (
                <div
                  key={i}
                  className={`floating-code floating-code-${(i % 3) + 1}`}
                  style={{ top: `${15 + i * 22}%` }}
                >
                  {snip}
                </div>
              ))}

              <div className="about-photo-border" />
              <div className="about-photo-frame">
                <img
                  src="/images/photo-main.png"
                  alt="Kuldip Boghara — AI Generated Portrait"
                  style={{ objectPosition: 'center top' }}
                />
              </div>

              {/* Corner badge */}
              <div className="about-corner-badge">
                <p className="font-mono text-xs text-cyan-400 font-bold">3+</p>
                <p className="font-mono text-xs text-muted">Years</p>
              </div>
            </motion.div>

            {/* Content column */}
            <motion.div variants={containerVariants} className="flex flex-col gap-6">
              {/* Bio */}
              <motion.div variants={itemVariants}>
                <h3 className="font-head text-2xl font-semibold mb-4">
                  Hi, I'm <span className="gradient-text">Kuldip Boghara</span> 👋
                </h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  A passionate <span className="text-white font-medium">MERN Stack Developer</span> with 3+ years of
                  professional experience building scalable, production-ready web applications. Based in India,
                  I've worked across startups and enterprise environments — from the iconic CN Tower in Canada to high-growth
                  tech companies.
                </p>
                <p className="text-slate-400 leading-relaxed mb-4">
                  My sweet spot is the intersection of <span className="text-cyan-400">elegant frontend</span> and
                  <span className="text-violet-400"> robust backend</span> — crafting full-stack systems that are
                  not just functional, but delightful to use. I believe great software is built at the intersection
                  of clean code, thoughtful architecture, and relentless user empathy.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Lately, I've been deeply exploring <span className="text-orange-400">AI integration</span> —
                  embedding LLMs, building RAG pipelines, and leveraging GitHub Copilot & ChatGPT APIs to
                  accelerate development and build smarter products.
                </p>
              </motion.div>

              {/* Info chips */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
                {[
                  { icon: '📍', label: 'Location', value: 'India' },
                  { icon: '🎓', label: 'Education', value: 'BTech CE — CHARUSAT' },
                  { icon: '💼', label: 'Current Role', value: 'MERN Dev @ Latitude' },
                  { icon: '🌐', label: 'Languages', value: 'English, Gujarati, Hindi' },
                ].map(item => (
                  <div key={item.label}
                    className="flex items-center gap-3 p-3 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-cyan-400/30 transition-colors">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="font-mono text-xs text-muted">{item.label}</p>
                      <p className="text-sm text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* AI Highlight block */}
              <motion.div variants={itemVariants} className="ai-highlight">
                <div className="flex items-start gap-3 relative z-10">
                  <span className="text-2xl mt-0.5">🤖</span>
                  <div>
                    <h4 className="font-head font-semibold text-white mb-1">AI-Powered Development</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Integrating <span className="text-cyan-400">OpenAI GPT APIs</span>, building intelligent
                      chatbots, leveraging <span className="text-violet-400">GitHub Copilot</span> for
                      accelerated development, and exploring <span className="text-orange-400">LangChain</span> &
                      vector databases for RAG-powered applications.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div variants={itemVariants} className="grid grid-cols-4 gap-3">
                {stats.map((s, i) => (
                  <div key={i} className="stat-card">
                    <CountUp to={s.value} suffix={s.suffix} delay={i * 100} />
                    <p className="font-mono text-xs text-muted mt-1">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
