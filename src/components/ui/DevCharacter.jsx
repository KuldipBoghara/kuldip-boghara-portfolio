import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 3 states: chilling, coding, victory
const states = ['coding', 'chilling', 'victory'];

function DevCharacterSVG({ state }) {
  return (
    <svg viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Desk */}
      <rect x="30" y="300" width="340" height="14" rx="7" fill="#1E293B" />
      <rect x="60" y="314" width="12" height="80" rx="6" fill="#1E293B" />
      <rect x="328" y="314" width="12" height="80" rx="6" fill="#1E293B" />

      {/* Monitor 1 */}
      <rect x="90" y="180" width="150" height="120" rx="8" fill="#0F172A" stroke="#00F5FF" strokeWidth="2" />
      <rect x="98" y="188" width="134" height="104" rx="4" fill="#030712" />
      {/* Code lines on monitor 1 */}
      <rect x="106" y="198" width="60" height="4" rx="2" fill="#7C3AED" opacity="0.9" />
      <rect x="106" y="208" width="90" height="4" rx="2" fill="#00F5FF" opacity="0.7" />
      <rect x="114" y="218" width="70" height="4" rx="2" fill="#FF6B2B" opacity="0.8" />
      <rect x="114" y="228" width="50" height="4" rx="2" fill="#4ade80" opacity="0.7" />
      <rect x="106" y="238" width="80" height="4" rx="2" fill="#00F5FF" opacity="0.6" />
      <rect x="106" y="248" width="40" height="4" rx="2" fill="#7C3AED" opacity="0.8" />
      <rect x="114" y="258" width="65" height="4" rx="2" fill="#FF6B2B" opacity="0.5" />
      <rect x="114" y="268" width="45" height="4" rx="2" fill="#4ade80" opacity="0.6" />
      {/* Cursor blink */}
      <rect x="106" y="278" width="3" height="10" rx="1" fill="#00F5FF">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
      </rect>
      {/* Monitor stand */}
      <rect x="158" y="300" width="14" height="10" rx="2" fill="#1E293B" />
      <rect x="148" y="308" width="34" height="4" rx="2" fill="#1E293B" />

      {/* Monitor 2 (right) */}
      <rect x="255" y="195" width="120" height="100" rx="8" fill="#0F172A" stroke="#7C3AED" strokeWidth="2" />
      <rect x="262" y="202" width="106" height="86" rx="4" fill="#030712" />
      {/* Terminal on monitor 2 */}
      <rect x="270" y="210" width="6" height="6" rx="3" fill="#FF6B2B" />
      <rect x="280" y="210" width="6" height="6" rx="3" fill="#FBBF24" />
      <rect x="290" y="210" width="6" height="6" rx="3" fill="#4ade80" />
      <rect x="270" y="226" width="50" height="3" rx="1.5" fill="#4ade80" opacity="0.8" />
      <rect x="270" y="234" width="80" height="3" rx="1.5" fill="#94a3b8" opacity="0.6" />
      <rect x="270" y="242" width="65" height="3" rx="1.5" fill="#00F5FF" opacity="0.7" />
      <rect x="270" y="250" width="40" height="3" rx="1.5" fill="#94a3b8" opacity="0.5" />
      <rect x="270" y="258" width="70" height="3" rx="1.5" fill="#4ade80" opacity="0.7" />
      <rect x="270" y="266" width="30" height="3" rx="1.5" fill="#00F5FF" opacity="0.6" />
      <rect x="270" y="274" width="3" height="8" rx="1" fill="#4ade80">
        <animate attributeName="opacity" values="1;0;1" dur="0.8s" repeatCount="indefinite" />
      </rect>
      <rect x="307" y="295" width="12" height="10" rx="2" fill="#1E293B" />
      <rect x="298" y="303" width="30" height="4" rx="2" fill="#1E293B" />

      {/* Keyboard */}
      <rect x="100" y="292" width="120" height="14" rx="5" fill="#1E293B" />
      {[0,1,2,3,4,5,6,7,8].map(i => (
        <rect key={i} x={107 + i * 12} y="296" width="8" height="6" rx="2" fill="#0F172A" />
      ))}

      {/* Coffee mug */}
      <rect x="290" y="278" width="28" height="26" rx="4" fill="#1E293B" />
      <path d="M318 285 Q328 285 328 291 Q328 297 318 297" stroke="#1E293B" strokeWidth="3" fill="none" />
      <rect x="293" y="278" width="22" height="6" rx="2" fill="#FF6B2B" opacity="0.3" />
      {/* Steam */}
      <path d="M300 275 Q302 270 300 265" stroke="#94a3b8" strokeWidth="1.5" fill="none" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M307 274 Q309 268 307 263" stroke="#94a3b8" strokeWidth="1.5" fill="none" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2.5s" repeatCount="indefinite" />
      </path>

      {/* Small plant */}
      <rect x="55" y="285" width="20" height="18" rx="3" fill="#1E293B" />
      <circle cx="65" cy="280" r="10" fill="#15803d" />
      <circle cx="58" cy="276" r="7" fill="#16a34a" />
      <circle cx="72" cy="277" r="7" fill="#16a34a" />

      {/* Chair */}
      <rect x="145" y="370" width="110" height="8" rx="4" fill="#1E293B" />
      <rect x="165" y="378" width="14" height="60" rx="7" fill="#1E293B" />
      <rect x="221" y="378" width="14" height="60" rx="7" fill="#1E293B" />
      <rect x="140" y="360" width="120" height="14" rx="7" fill="#334155" />

      {/* Chair back */}
      <rect x="160" y="240" width="80" height="125" rx="8" fill="#1E293B" />
      <rect x="168" y="248" width="64" height="109" rx="5" fill="#0F172A" />

      {/* BODY - person sitting */}
      {/* Torso / hoodie */}
      <rect x="168" y="248" width="64" height="75" rx="8" fill="#E2E8F0" />
      {/* Hoodie details */}
      <rect x="190" y="248" width="20" height="40" rx="3" fill="#CBD5E1" />
      {/* Hoodie pocket */}
      <rect x="183" y="288" width="34" height="22" rx="5" fill="#CBD5E1" />

      {/* Neck */}
      <rect x="190" y="238" width="20" height="16" rx="5" fill="#d4a574" />

      {/* HEAD */}
      <ellipse cx="200" cy="220" rx="34" ry="36" fill="#d4a574" />

      {/* Hair */}
      <ellipse cx="200" cy="190" rx="34" ry="16" fill="#1a1a2e" />
      <rect x="166" y="188" width="68" height="12" rx="6" fill="#1a1a2e" />
      {/* Hair detail */}
      <ellipse cx="185" cy="185" rx="14" ry="8" fill="#1a1a2e" />
      <ellipse cx="215" cy="185" rx="14" ry="8" fill="#1a1a2e" />

      {/* Ears */}
      <ellipse cx="166" cy="220" rx="7" ry="9" fill="#c8956c" />
      <ellipse cx="234" cy="220" rx="7" ry="9" fill="#c8956c" />
      <ellipse cx="166" cy="220" rx="4" ry="6" fill="#d4a574" />
      <ellipse cx="234" cy="220" rx="4" ry="6" fill="#d4a574" />

      {/* Beard/stubble */}
      <ellipse cx="200" cy="242" rx="20" ry="8" fill="#4a3728" opacity="0.35" />

      {/* Glasses frames */}
      <rect x="176" y="213" width="20" height="14" rx="5" fill="none" stroke="#94a3b8" strokeWidth="2" />
      <rect x="204" y="213" width="20" height="14" rx="5" fill="none" stroke="#94a3b8" strokeWidth="2" />
      <line x1="196" y1="219" x2="204" y2="219" stroke="#94a3b8" strokeWidth="2" />
      {/* Glass lens shine */}
      <rect x="177" y="214" width="6" height="4" rx="2" fill="white" opacity="0.3" />
      <rect x="205" y="214" width="6" height="4" rx="2" fill="white" opacity="0.3" />

      {/* Eyes */}
      <ellipse cx="186" cy="220" rx="4" ry="4.5" fill="#1a1a2e" />
      <ellipse cx="214" cy="220" rx="4" ry="4.5" fill="#1a1a2e" />
      <circle cx="188" cy="218" r="1.5" fill="white" opacity="0.8" />
      <circle cx="216" cy="218" r="1.5" fill="white" opacity="0.8" />

      {/* Expression based on state */}
      {state === 'coding' && (
        // Focused look
        <path d="M190 234 Q200 238 210 234" stroke="#1a1a2e" strokeWidth="2" fill="none" strokeLinecap="round" />
      )}
      {state === 'chilling' && (
        // Relaxed smile
        <path d="M189 233 Q200 242 211 233" stroke="#1a1a2e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      )}
      {state === 'victory' && (
        // Big smile
        <>
          <path d="M187 232 Q200 246 213 232" stroke="#1a1a2e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M187 232 Q200 246 213 232" fill="#ff9a8b" opacity="0.2" />
          <circle cx="183" cy="228" r="5" fill="#ff9a8b" opacity="0.4" />
          <circle cx="217" cy="228" r="5" fill="#ff9a8b" opacity="0.4" />
        </>
      )}

      {/* Arms */}
      {state === 'coding' && (
        // Typing arms
        <>
          <path d="M168 265 Q145 275 130 290 Q125 295 135 298 Q145 290 160 282 L168 270Z"
            fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />
          <path d="M232 265 Q255 275 270 290 Q275 295 265 298 Q255 290 240 282 L232 270Z"
            fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />
          {/* Hands */}
          <ellipse cx="133" cy="299" rx="9" ry="7" fill="#d4a574" />
          <ellipse cx="267" cy="299" rx="9" ry="7" fill="#d4a574" />
        </>
      )}
      {state === 'chilling' && (
        // Relaxed arms crossed
        <>
          <path d="M168 270 Q150 280 145 295 Q155 300 165 290 L172 275Z"
            fill="#E2E8F0" />
          <path d="M232 270 Q250 280 255 295 Q245 300 235 290 L228 275Z"
            fill="#E2E8F0" />
          <ellipse cx="148" cy="297" rx="9" ry="7" fill="#d4a574" />
          <ellipse cx="252" cy="297" rx="9" ry="7" fill="#d4a574" />
        </>
      )}
      {state === 'victory' && (
        // Arms raised
        <>
          <path d="M168 262 Q140 240 130 215 Q128 208 138 210 Q148 235 165 255Z"
            fill="#E2E8F0" />
          <path d="M232 262 Q260 240 270 215 Q272 208 262 210 Q252 235 235 255Z"
            fill="#E2E8F0" />
          {/* Hands */}
          <ellipse cx="134" cy="210" rx="9" ry="9" fill="#d4a574" />
          <ellipse cx="266" cy="210" rx="9" ry="9" fill="#d4a574" />
          {/* Victory fingers */}
          <rect x="128" y="200" width="5" height="12" rx="2.5" fill="#d4a574" />
          <rect x="135" y="198" width="5" height="14" rx="2.5" fill="#d4a574" />
          <rect x="260" y="198" width="5" height="14" rx="2.5" fill="#d4a574" />
          <rect x="267" y="200" width="5" height="12" rx="2.5" fill="#d4a574" />
          {/* Victory stars */}
          <text x="100" y="190" fontSize="20" fill="#FBBF24">✨</text>
          <text x="285" y="185" fontSize="20" fill="#FBBF24">✨</text>
        </>
      )}

      {/* Headphones (when chilling) */}
      {state === 'chilling' && (
        <>
          <path d="M166 195 Q166 165 200 165 Q234 165 234 195" stroke="#1E293B" strokeWidth="5" fill="none" strokeLinecap="round" />
          <rect x="158" y="193" width="14" height="20" rx="5" fill="#1E293B" />
          <rect x="228" y="193" width="14" height="20" rx="5" fill="#1E293B" />
          <rect x="160" y="195" width="10" height="16" rx="4" fill="#00F5FF" opacity="0.6" />
          <rect x="230" y="195" width="10" height="16" rx="4" fill="#00F5FF" opacity="0.6" />
        </>
      )}

      {/* Desk glow reflection */}
      <ellipse cx="165" cy="302" rx="50" ry="4" fill="#00F5FF" opacity="0.05" />
      <ellipse cx="315" cy="302" rx="35" ry="3" fill="#7C3AED" opacity="0.05" />

      {/* Screen glow on face */}
      <ellipse cx="200" cy="215" rx="40" ry="30" fill="#00F5FF" opacity="0.03" />
    </svg>
  );
}

export default function DevCharacter() {
  const [currentState, setCurrentState] = useState(0);
  const stateLabels = {
    coding: { label: '💻 Coding Mode', color: '#00F5FF' },
    chilling: { label: '🎵 Vibe Mode', color: '#7C3AED' },
    victory: { label: '🎉 Ship It!', color: '#FF6B2B' },
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentState(prev => (prev + 1) % states.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const currentStateName = states[currentState];
  const stateInfo = stateLabels[currentStateName];

  return (
    <div className="character-container">
      {/* State label */}
      <motion.div
        key={currentStateName}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap"
      >
        <span
          className="font-mono text-xs px-3 py-1.5 rounded-full border"
          style={{
            color: stateInfo.color,
            borderColor: stateInfo.color + '40',
            background: stateInfo.color + '0d',
          }}
        >
          {stateInfo.label}
        </span>
      </motion.div>

      {/* Character SVG */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStateName}
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="w-full"
        >
          <DevCharacterSVG state={currentStateName} />
        </motion.div>
      </AnimatePresence>

      {/* Ground shadow/glow */}
      <div className="character-glow" />

      {/* State dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {states.map((s, i) => (
          <button
            key={s}
            onClick={() => setCurrentState(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === currentState ? 20 : 6,
              height: 6,
              background: i === currentState ? stateInfo.color : '#1E293B',
            }}
          />
        ))}
      </div>
    </div>
  );
}
