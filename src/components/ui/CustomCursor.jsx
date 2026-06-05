import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    let mouse = { x: 0, y: 0 };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      // Dot follows instantly
      dot.style.left = mouse.x + 'px';
      dot.style.top = mouse.y + 'px';
    };

    // Smooth ring lerp
    const animate = () => {
      ringPos.current.x += (mouse.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mouse.y - ringPos.current.y) * 0.12;
      ring.style.left = ringPos.current.x + 'px';
      ring.style.top = ringPos.current.y + 'px';
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    // Hover effect on interactive elements
    const onEnter = () => {
      dot.classList.add('hovered');
      ring.classList.add('hovered');
    };
    const onLeave = () => {
      dot.classList.remove('hovered');
      ring.classList.remove('hovered');
    };

    const addHover = () => {
      const els = document.querySelectorAll('a, button, [data-hover]');
      els.forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    window.addEventListener('mousemove', onMove);
    // Small delay so DOM is ready
    setTimeout(addHover, 500);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
