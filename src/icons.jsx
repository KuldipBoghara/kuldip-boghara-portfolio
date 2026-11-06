const base = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };

export const Arrow = ({ dir }) => (
  <svg {...base} style={dir === 'left' ? { transform: 'scaleX(-1)' } : undefined}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

export const Sun = () => (
  <svg {...base}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
);

export const Moon = () => (
  <svg {...base}><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" /></svg>
);

export const Download = () => (
  <svg {...base}><path d="M12 4v11M7 10l5 5 5-5M5 20h14" /></svg>
);
