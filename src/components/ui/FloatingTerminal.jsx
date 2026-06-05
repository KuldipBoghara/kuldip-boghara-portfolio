import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Animated typing lines for the editor
const codeLines = [
  { indent: 0, tokens: [{ t: 'const ', c: '#569CD6' }, { t: 'kuldip', c: '#9CDCFE' }, { t: ' = {', c: '#D4D4D4' }] },
  { indent: 1, tokens: [{ t: 'role:', c: '#9CDCFE' }, { t: ' "', c: '#D4D4D4' }, { t: 'MERN Stack Developer', c: '#CE9178' }, { t: '",', c: '#D4D4D4' }] },
  { indent: 1, tokens: [{ t: 'experience:', c: '#9CDCFE' }, { t: ' "', c: '#D4D4D4' }, { t: '3+ years', c: '#CE9178' }, { t: '",', c: '#D4D4D4' }] },
  { indent: 1, tokens: [{ t: 'location:', c: '#9CDCFE' }, { t: ' "', c: '#D4D4D4' }, { t: 'India 🇮🇳', c: '#CE9178' }, { t: '",', c: '#D4D4D4' }] },
  { indent: 1, tokens: [{ t: 'stack:', c: '#9CDCFE' }, { t: ' [', c: '#D4D4D4' }, { t: '"React"', c: '#CE9178' }, { t: ', ', c: '#D4D4D4' }, { t: '"Node"', c: '#CE9178' }, { t: ', ', c: '#D4D4D4' }, { t: '"MongoDB"', c: '#CE9178' }, { t: '],', c: '#D4D4D4' }] },
  { indent: 1, tokens: [{ t: 'ai:', c: '#9CDCFE' }, { t: ' true', c: '#569CD6' }, { t: ',', c: '#D4D4D4' }] },
  { indent: 1, tokens: [{ t: 'passion:', c: '#9CDCFE' }, { t: ' "', c: '#D4D4D4' }, { t: 'Building great products', c: '#CE9178' }, { t: '"', c: '#D4D4D4' }] },
  { indent: 0, tokens: [{ t: '};', c: '#D4D4D4' }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ t: 'async function ', c: '#569CD6' }, { t: 'hire', c: '#DCDCAA' }, { t: '(', c: '#D4D4D4' }, { t: 'kuldip', c: '#9CDCFE' }, { t: ') {', c: '#D4D4D4' }] },
  { indent: 1, tokens: [{ t: 'const ', c: '#569CD6' }, { t: 'result', c: '#9CDCFE' }, { t: ' = await ', c: '#D4D4D4' }, { t: 'buildAmazingProduct', c: '#DCDCAA' }, { t: '();', c: '#D4D4D4' }] },
  { indent: 1, tokens: [{ t: 'return ', c: '#569CD6' }, { t: '{ success: ', c: '#D4D4D4' }, { t: 'true', c: '#569CD6' }, { t: ' };', c: '#D4D4D4' }] },
  { indent: 0, tokens: [{ t: '}', c: '#D4D4D4' }] },
];

const terminalLines = [
  { prefix: '$', cmd: ' npm run build', color: '#4ade80' },
  { prefix: '✓', cmd: ' Build complete in 1.2s', color: '#00F5FF' },
  { prefix: '$', cmd: ' git push origin main', color: '#4ade80' },
  { prefix: '✓', cmd: ' Deployed to production 🚀', color: '#FF6B2B' },
  { prefix: '$', cmd: ' AI integration: enabled ✨', color: '#a78bfa' },
];

const floatingBadges = [
  { label: 'React', color: '#61DAFB', x: '85%', y: '10%', delay: 0 },
  { label: 'Node.js', color: '#68A063', x: '-8%', y: '15%', delay: 0.5 },
  { label: 'MongoDB', color: '#4DB33D', x: '90%', y: '75%', delay: 1 },
  { label: 'OpenAI', color: '#74AA9C', x: '-5%', y: '72%', delay: 1.5 },
  { label: 'TypeScript', color: '#3178C6', x: '78%', y: '88%', delay: 0.8 },
];

function CodeLine({ line, lineNum, visible }) {
  return (
    <div className={`flex text-xs font-mono transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <span className="w-8 text-right mr-4 select-none" style={{ color: '#555' }}>{lineNum}</span>
      <span style={{ paddingLeft: line.indent * 16 + 'px' }}>
        {line.tokens.map((tok, i) => (
          <span key={i} style={{ color: tok.c }}>{tok.t}</span>
        ))}
      </span>
    </div>
  );
}

export default function FloatingTerminal() {
  const containerRef = useRef(null);
  const [visibleLines, setVisibleLines] = useState(0);
  const [terminalIdx, setTerminalIdx] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const rotateX = useTransform(springY, [-200, 200], [8, -8]);
  const rotateY = useTransform(springX, [-200, 200], [-8, 8]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // Typing animation for code lines
  useEffect(() => {
    if (visibleLines >= codeLines.length) return;
    const timer = setTimeout(() => {
      setVisibleLines(v => v + 1);
    }, 180);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  // Cursor blink
  useEffect(() => {
    const timer = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(timer);
  }, []);

  // Terminal lines appear after code
  useEffect(() => {
    if (visibleLines < codeLines.length) return;
    if (terminalIdx >= terminalLines.length) return;
    const timer = setTimeout(() => setTerminalIdx(v => v + 1), 600);
    return () => clearTimeout(timer);
  }, [visibleLines, terminalIdx]);

  return (
    <div ref={containerRef} className="relative w-full max-w-[520px] mx-auto select-none">
      {/* Floating tech badges */}
      {floatingBadges.map((badge, i) => (
        <motion.div
          key={badge.label}
          className="absolute z-10 px-2.5 py-1 rounded-full text-xs font-mono font-semibold border"
          style={{
            left: badge.x, top: badge.y,
            color: badge.color,
            borderColor: badge.color + '40',
            background: badge.color + '12',
            boxShadow: `0 0 12px ${badge.color}20`,
          }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: badge.delay, ease: 'easeInOut' }}
        >
          {badge.label}
        </motion.div>
      ))}

      {/* 3D tilt container */}
      <motion.div
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        className="relative"
      >
        {/* Outer glow */}
        <div className="absolute -inset-3 rounded-2xl opacity-30 blur-xl"
          style={{ background: 'linear-gradient(135deg, #00F5FF30, #7C3AED30)' }} />

        {/* ===== EDITOR WINDOW ===== */}
        <div className="relative rounded-xl overflow-hidden border"
          style={{
            background: '#1E1E1E',
            borderColor: 'rgba(0,245,255,0.2)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
          }}>

          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b"
            style={{ background: '#252526', borderColor: 'rgba(255,255,255,0.06)' }}>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
              <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-2 px-3 py-0.5 rounded text-xs font-mono"
                style={{ background: '#1E1E1E', color: '#9CDCFE', borderRadius: 4 }}>
                <span style={{ color: '#6A9955' }}>⚛</span>
                <span>kuldip.js</span>
                <span className="ml-1 w-1.5 h-1.5 rounded-full bg-yellow-400 opacity-70" title="unsaved" />
              </div>
            </div>
          </div>

          {/* Editor body */}
          <div className="p-4 space-y-1" style={{ minHeight: 260 }}>
            {codeLines.map((line, i) => (
              <CodeLine key={i} line={line} lineNum={i + 1} visible={i < visibleLines} />
            ))}
            {/* Cursor at end */}
            {visibleLines >= codeLines.length && (
              <div className="flex text-xs font-mono">
                <span className="w-8 text-right mr-4" style={{ color: '#555' }}>{codeLines.length + 1}</span>
                <span
                  className="inline-block w-2 h-4"
                  style={{ background: cursorVisible ? '#00F5FF' : 'transparent', transition: 'background 0.1s' }}
                />
              </div>
            )}
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-1 text-xs font-mono"
            style={{ background: '#007ACC', color: 'white' }}>
            <span>⎇ main</span>
            <span>JavaScript</span>
            <span>UTF-8</span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Ln {Math.min(visibleLines, codeLines.length)}, Col 1
            </span>
          </div>
        </div>

        {/* ===== TERMINAL WINDOW (floats below) ===== */}
        <motion.div
          className="relative mt-3 rounded-xl overflow-hidden border"
          style={{
            background: '#0D1117',
            borderColor: 'rgba(124,58,237,0.3)',
            boxShadow: '0 15px 40px rgba(0,0,0,0.5)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: visibleLines > 5 ? 1 : 0, y: visibleLines > 5 ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          {/* Terminal title */}
          <div className="flex items-center gap-2 px-4 py-2 border-b"
            style={{ background: '#161B22', borderColor: 'rgba(255,255,255,0.06)' }}>
            <div className="w-2 h-2 rounded-full" style={{ background: '#4ade80' }} />
            <span className="font-mono text-xs" style={{ color: '#8B949E' }}>TERMINAL</span>
            <span className="ml-auto font-mono text-xs" style={{ color: '#8B949E' }}>bash</span>
          </div>
          {/* Terminal content */}
          <div className="p-3 space-y-1.5 font-mono text-xs" style={{ minHeight: 90 }}>
            {terminalLines.slice(0, terminalIdx).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2"
              >
                <span style={{ color: line.color }}>{line.prefix}</span>
                <span style={{ color: '#E6EDF3' }}>{line.cmd}</span>
              </motion.div>
            ))}
            {/* Blinking cursor in terminal */}
            {terminalIdx < terminalLines.length && visibleLines >= codeLines.length && (
              <div className="flex items-center gap-2">
                <span style={{ color: '#4ade80' }}>$</span>
                <span className="inline-block w-2 h-3.5"
                  style={{ background: cursorVisible ? '#4ade80' : 'transparent' }} />
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom glow */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full blur-xl opacity-20"
        style={{ background: 'linear-gradient(to right, #00F5FF, #7C3AED)' }} />
    </div>
  );
}
