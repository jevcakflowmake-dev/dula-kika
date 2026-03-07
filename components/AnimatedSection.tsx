'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'fade';
}

export default function AnimatedSection({ children, className = '', delay = 0, direction = 'up' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const getInitialTransform = () => {
      switch (direction) {
        case 'left': return 'translateX(-40px)';
        case 'right': return 'translateX(40px)';
        case 'fade': return 'scale(0.97)';
        default: return 'translateY(35px)';
      }
    };

    el.style.opacity = '0';
    el.style.transform = getInitialTransform();
    el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'none';
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
