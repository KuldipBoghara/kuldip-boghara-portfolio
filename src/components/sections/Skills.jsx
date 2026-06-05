import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  { name: 'React.js', icon: '⚛️', level: 92, color: '#61DAFB' },
  { name: 'Node.js', icon: '🟢', level: 85, color: '#68A063' },
  { name: 'MongoDB', icon: '🍃', level: 82, color: '#4DB33D' },
  { name: 'Express.js', icon: '🚂', level: 85, color: '#00F5FF' },
  { name: 'TypeScript', icon: '𝗧𝗦', level: 78, color: '#3178C6' },
  { name: 'Redux', icon: '🔮', level: 88, color: '#764ABC' },
  { name: 'JWT / Auth', icon: '🔐', level: 85, color: '#FF6B2B' },
  { name: 'REST APIs', icon: '🔗', level: 90, color: '#00F5FF' },
  { name: 'Tailwind', icon: '🎨', level: 88, color: '#38BDF8' },
  { name: 'Docker', icon: '🐳', level: 65, color: '#2496ED' },
  { name: 'AWS EC2', icon: '☁️', level: 60, color: '#FF9900' },
  { name: 'Git / GitHub', icon: '🐙', level: 90, color: '#F05032' },
  { name: 'OpenAI API', icon: '🤖', level: 70, color: '#74AA9C' },
  { name: 'GraphQL', icon: '💎', level: 62, color: '#E10098' },
  { name: 'Socket.io', icon: '⚡', level: 68, color: '#00F5FF' },
  { name: 'Figma', icon: '🖌️', level: 70, color: '#F24E1E' },
];

const categories = [
  { label: 'Frontend', pct: 90, gradient: 'linear-gradient(to right, #00F5FF, #38BDF8)' },
  { label: 'Backend', pct: 82, gradient: 'linear-gradient(to right, #7C3AED, #A78BFA)' },
  { label: 'Database', pct: 80, gradient: 'linear-gradient(to right, #4DB33D, #68A063)' },
  { label: 'DevOps / Cloud', pct: 62, gradient: 'linear-gradient(to right, #FF6B2B, #FBBF24)' },
  { label: 'AI / LLM Tools', pct: 70, gradient: 'linear-gradient(to right, #74AA9C, #00F5FF)' },
];

const allTech = [
  '⚛️ React.js', '🟢 Node.js', '🍃 MongoDB', '🚂 Express',
  '𝗧𝗦 TypeScript', '🔮 Redux', '🤖 OpenAI API', '🐳 Docker',
  '☁️ AWS', '🔐 JWT', '💎 GraphQL', '⚡ Socket.io',
  '🎨 Tailwind', '🐙 GitHub', '🖌️ Figma', '🔧 Postman',
  '🚀 Vite', '⚛️ Next.js', '📦 npm', '🔬 Jest',
  '🌐 REST API', '🗄️ Mongoose', '🔑 OAuth', '📱 Material UI',
];

function SkillCard({ skill, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="skill-card"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.04, ease: 'backOut' }}
    >
      <div className="skill-card-inner">
        {/* Front */}
        <div className="skill-card-front group">
          <span className="skill-icon">{skill.icon}</span>
          <span className="skill-name">{skill.name}</span>
        </div>
        {/* Back */}
        <div className="skill-card-back">
          <span className="font-mono text-xs" style={{ color: skill.color }}>
            {skill.level}%
          </span>
          <div className="skill-level-bar">
            <div
              className="skill-level-fill"
              style={{ width: `${skill.level}%`, background: `linear-gradient(to right, ${skill.color}, ${skill.color}aa)` }}
            />
          </div>
          <span className="skill-name text-white">{skill.name}</span>
        </div>
      </div>
    </motion.div>
  );
}

function CategoryBar({ label, pct, gradient, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="category-bar-wrap">
      <span className="category-bar-label">{label}</span>
      <div className="category-bar-track">
        <motion.div
          className="category-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ background: gradient }}
        />
      </div>
      <span className="category-bar-pct">{pct}%</span>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section" ref={sectionRef} style={{ background: 'rgba(15,23,42,0.3)' }}>
      <div className="glow-orb glow-cyan absolute w-96 h-96 top-1/2 left-0 pointer-events-none"
        style={{ filter: 'blur(120px)', opacity: 0.06 }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label justify-center mb-2">tech stack</p>
          <h2 className="section-title">
            Tools I <span className="gradient-text">Craft With</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            Hover any card to see proficiency. My stack evolves constantly —
            I prioritize depth over breadth.
          </p>
        </motion.div>

        {/* Skill cards grid */}
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3 mb-16">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Category bars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-head text-lg font-semibold mb-6 text-white">Proficiency by Area</h3>
            {categories.map((c, i) => (
              <CategoryBar key={c.label} {...c} index={i} />
            ))}
          </motion.div>

          {/* AI Tools highlight */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="ai-highlight h-fit"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🤖</span>
                <h3 className="font-head font-semibold text-white">AI & Emerging Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'OpenAI GPT-4', icon: '🧠' },
                  { name: 'LangChain', icon: '🔗' },
                  { name: 'GitHub Copilot', icon: '🤖' },
                  { name: 'Cursor AI', icon: '✨' },
                  { name: 'Pinecone (Vector DB)', icon: '🌲' },
                  { name: 'Hugging Face', icon: '🤗' },
                  { name: 'RAG Pipelines', icon: '📚' },
                  { name: 'Prompt Engineering', icon: '💬' },
                ].map(t => (
                  <span
                    key={t.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border"
                    style={{
                      borderColor: 'rgba(0, 245, 255, 0.2)',
                      color: '#94a3b8',
                      background: 'rgba(0, 245, 255, 0.04)',
                    }}
                  >
                    <span>{t.icon}</span> {t.name}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted mt-4">
                🚀 Actively learning and building AI-first applications
              </p>
            </div>
          </motion.div>
        </div>

        {/* Infinite marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="font-mono text-xs text-center text-muted mb-4 tracking-widest uppercase">
            Technologies I work with
          </p>
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {[...allTech, ...allTech].map((t, i) => (
                <span key={i} className="tech-chip">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
