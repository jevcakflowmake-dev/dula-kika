'use client';

import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'fade';
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      delay: delay / 1000,
    };

    if (direction === 'up')    fromVars.y = 50;
    if (direction === 'left')  fromVars.x = -48;
    if (direction === 'right') fromVars.x = 48;
    if (direction === 'fade')  fromVars.scale = 0.97;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        ...fromVars,
      });
    });

    return () => ctx.revert();
  }, [delay, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
