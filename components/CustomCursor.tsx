'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      requestAnimationFrame(animate);
    };

    const onEnter = () => {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };
    const onLeave = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseleave', onLeave);
    requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] opacity-0 transition-opacity duration-300"
        style={{ background: 'var(--mauve)' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998] opacity-0 transition-opacity duration-300"
        style={{ border: '1.5px solid var(--mauve)', mixBlendMode: 'multiply' }}
      />
    </>
  );
}
