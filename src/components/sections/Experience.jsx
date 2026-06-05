import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';

const experiences = [
  {
    period: 'Sept 2025 — Present',
    role: 'MERN Stack Developer',
    company: 'Latitude Technolabs Pvt. Ltd.',
    location: 'Ahmedabad, India',
    type: 'Current',
    color: '#00F5FF',
    bullets: [
      'Architecting full-stack applications with MongoDB, Express, React & Node.js serving 10k+ users',
      'Designing scalable RESTful APIs integrated with third-party services and internal microservices',
      'Building dynamic React UI with Redux Toolkit — cutting state bugs by 40%',
      'Implementing JWT authentication, OAuth flows & RBAC for enterprise clients',
      'Crafting admin dashboards with real-time analytics, CRUD systems & export features',
      'Integrating OpenAI APIs for intelligent search and chatbot features',
      'Leading code reviews and mentoring junior developers in Agile/Scrum sprints',
    ],
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux', 'JWT', 'OpenAI', 'Docker'],
  },
  {
    period: 'Aug 2023 — Apr 2025',
    role: 'Software Developer',
    company: 'Digital Attractions — CN Tower',
    location: 'Toronto, Ontario, Canada',
    type: 'Canada 🍁',
    color: '#7C3AED',
    bullets: [
      'Developed interactive visitor experience applications for the iconic CN Tower',
      'Led full SDLC implementation from requirements to production deployment',
      'Migrated legacy frontend to React + TypeScript, reducing load time by 35%',
      'Built cross-browser compatible SPAs using Material UI and responsive grid systems',
      'Implemented Redux-Promise middleware for seamless async data flows',
      'Conducted E2E regression testing with MySQL-backed system validation',
      'Created business flow diagrams, UML activity diagrams & sequence diagrams',
    ],
    tags: ['React', 'TypeScript', 'Redux', 'Material UI', 'jQuery', 'MySQL', 'SDLC'],
  },
  {
    period: 'Jan 2022 — Jul 2023',
    role: 'Front-End Developer',
    company: 'Harsh Infotech',
    location: 'Scarborough, Ontario, Canada',
    type: 'Canada 🍁',
    color: '#FF6B2B',
    bullets: [
      'Developed responsive UI applications using React.js with Redux architecture',
      'Collaborated with backend team on Node.js RESTful API design and integration',
      'Built reusable component libraries with React-Bootstrap & Semantic UI',
      'Used TypeScript for type-safe client-side JavaScript codebase',
      'Optimized MongoDB queries and wrote services for data storage/retrieval',
      'Managed version control with Git/SVN and tracked issues via Jira',
    ],
    tags: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Bootstrap', 'TypeScript', 'Git'],
  },
];

// Timeline card — used on both sides
function TimelineCard({ exp, side, index, inView }) {
  return (
    <motion.div
      className="timeline-card"
      initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, borderColor: exp.color + '60' }}
    >
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
        <div>
          <p className="timeline-period" style={{ color: exp.color }}>{exp.period}</p>
          <h3 className="timeline-role">{exp.role}</h3>
          <p className="timeline-company">{exp.company}</p>
          <p className="font-mono text-xs text-muted">📍 {exp.location}</p>
        </div>
        <span
          className="font-mono text-xs px-2.5 py-1 rounded-full border shrink-0"
          style={{ color: exp.color, borderColor: exp.color + '40', background: exp.color + '10' }}
        >
          {exp.type}
        </span>
      </div>
      {/* Bullets */}
      <ul className="timeline-bullets mb-4">
        {exp.bullets.map((b, bi) => (
          <li key={bi}>{b}</li>
        ))}
      </ul>
      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {exp.tags.map(tag => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded text-xs font-mono"
            style={{
              background: exp.color + '12',
              border: `1px solid ${exp.color}30`,
              color: exp.color + 'cc',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  // Scroll-driven progress for the timeline bar
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 85%', 'end 20%'],
  });

  // Smooth spring for the progress fill
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  // scaleY from 0→1 as we scroll through
  const scaleY = useTransform(smoothProgress, [0, 1], [0, 1]);
  // Glow opacity pulses slightly with scroll
  const glowOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.4, 1, 0.7]);

  return (
    <section id="experience" className="section" ref={sectionRef}>
      <div className="glow-orb glow-orange absolute w-80 h-80 bottom-0 right-10 pointer-events-none"
        style={{ filter: 'blur(100px)', opacity: 0.07 }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label justify-center mb-2">career path</p>
          <h2 className="section-title">
            My <span className="gradient-text">Professional Journey</span>
          </h2>
          <p className="text-muted mt-4">
            From India to Canada — building products that matter
          </p>
        </motion.div>

        {/* ── Timeline grid ─────────────────────────────────────────── */}
        <div
          ref={timelineRef}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 48px 1fr',
            rowGap: '3rem',
            maxWidth: '1100px',
            margin: '0 auto',
            position: 'relative',   /* required for useScroll offset calculation */
          }}
        >
          {/* ── Scrolling vertical bar (center column) ── */}
          {/* Track (grey base) */}
          <div
            style={{
              gridColumn: '2 / 3',
              gridRow: `1 / ${experiences.length + 2}`,
              width: '2px',
              justifySelf: 'center',
              background: 'rgba(255,255,255,0.06)',
              borderRadius: '2px',
              position: 'relative',
              overflow: 'visible',
            }}
          >
            {/* Animated fill — slides down as you scroll */}
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                scaleY,
                transformOrigin: 'top',
                height: '100%',
                borderRadius: '2px',
                background: 'linear-gradient(to bottom, #00F5FF, #7C3AED, #FF6B2B)',
                opacity: glowOpacity,
              }}
            />
            {/* Moving glow blob that slides with scroll */}
            <motion.div
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '12px',
                height: '40px',
                borderRadius: '6px',
                background: 'linear-gradient(to bottom, #00F5FF, #7C3AED)',
                filter: 'blur(6px)',
                top: useTransform(smoothProgress, [0, 1], ['0%', '95%']),
                opacity: useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]),
              }}
            />
          </div>

          {/* ── Experience rows ── */}
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            const rowNumber = i + 1;
            return (
              <div
                key={i}
                style={{
                  display: 'contents',
                }}
              >
                {/* Left cell */}
                <div style={{ gridColumn: '1 / 2', gridRow: rowNumber, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                  {isLeft && (
                    <div style={{ width: '100%', paddingRight: '2rem' }}>
                      <TimelineCard exp={exp} side="left" index={i} inView={inView} />
                    </div>
                  )}
                </div>

                {/* Center dot */}
                <div style={{ gridColumn: '2 / 3', gridRow: rowNumber, display: 'flex', justifyContent: 'center', paddingTop: '1.5rem', position: 'relative', zIndex: 10 }}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.18 + 0.1, type: 'spring', bounce: 0.5 }}
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: exp.color,
                      border: '3px solid #030712',
                      boxShadow: `0 0 0 3px ${exp.color}40, 0 0 18px ${exp.color}80`,
                      flexShrink: 0,
                    }}
                  />
                </div>

                {/* Right cell */}
                <div style={{ gridColumn: '3 / 4', gridRow: rowNumber, display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                  {!isLeft && (
                    <div style={{ width: '100%', paddingLeft: '2rem' }}>
                      <TimelineCard exp={exp} side="right" index={i} inView={inView} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* ── Education row ── */}
          {/* Left: empty */}
          <div style={{ gridColumn: '1 / 2', gridRow: experiences.length + 1 }} />

          {/* Center dot */}
          <div style={{ gridColumn: '2 / 3', gridRow: experiences.length + 1, display: 'flex', justifyContent: 'center', paddingTop: '1.5rem', position: 'relative', zIndex: 10 }}>
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.4, delay: experiences.length * 0.18 + 0.1, type: 'spring', bounce: 0.5 }}
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: '#4ade80',
                border: '3px solid #030712',
                boxShadow: '0 0 0 3px rgba(74,222,128,0.3), 0 0 18px rgba(74,222,128,0.6)',
                flexShrink: 0,
              }}
            />
          </div>

          {/* Right: education card */}
          <div style={{ gridColumn: '3 / 4', gridRow: experiences.length + 1, paddingLeft: '2rem' }}>
            <motion.div
              className="timeline-card"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: experiences.length * 0.18, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderColor: 'rgba(74,222,128,0.2)', background: 'rgba(74,222,128,0.03)' }}
            >
              <p className="timeline-period" style={{ color: '#4ade80' }}>2015 — 2019</p>
              <h3 className="timeline-role">Bachelor of Technology — Computer Science</h3>
              <p className="timeline-company">CHARUSAT University, Gujarat, India</p>
              <p className="text-sm text-slate-500 mt-2">
                🎓 Foundation in Data Structures, Algorithms, DBMS, OOP, Software Engineering & Web Technologies
              </p>
            </motion.div>
          </div>
        </div>

        {/* Mobile fallback — simple vertical stack */}
        <style>{`
          @media (max-width: 768px) {
            #experience [style*="grid-template-columns"] {
              display: flex !important;
              flex-direction: column !important;
              padding-left: 2.5rem;
              position: relative;
            }
            #experience [style*="grid-template-columns"]::before {
              content: '';
              position: absolute;
              left: 8px;
              top: 0; bottom: 0;
              width: 2px;
              background: linear-gradient(to bottom, #00F5FF, #7C3AED, #FF6B2B);
              border-radius: 2px;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
