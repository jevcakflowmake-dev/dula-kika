'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

const navLinks = [
  { href: '/', label: 'Úvod' },
  { href: '/o-mne', label: 'O mně' },
  { href: '/sluzby', label: 'Služby' },
  { href: '/balicky', label: 'Balíčky' },
  { href: '/workshopy', label: 'Workshopy' },
  { href: '/podcasty', label: 'Podcasty' },
  { href: '/recenze', label: 'Recenze' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);

  /* Page-load entrance animation */
  useEffect(() => {
    if (!headerRef.current) return;
    gsap.from(headerRef.current, {
      y: -48,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      delay: 0.1,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  /* Magnetic logo on hover */
  useEffect(() => {
    const el = logoRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.18;
      const dy = (e.clientY - cy) * 0.18;
      gsap.to(el, { x: dx, y: dy, duration: 0.4, ease: 'power2.out' });
    };
    const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave); };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(249,243,238,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        boxShadow: scrolled ? '0 2px 32px rgba(191,133,133,0.11)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(191,133,133,0.14)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link ref={logoRef} href="/" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg transition-transform duration-300 group-hover:scale-110"
              style={{
                background: 'linear-gradient(135deg, var(--mauve), var(--mauve-dark))',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
              }}
            >
              K
            </div>
            <div>
              <div
                className="text-lg leading-tight"
                style={{
                  color: 'var(--dark)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                }}
              >
                Dula <span style={{ color: 'var(--mauve)' }}>Kika</span>
              </div>
              <div className="section-num" style={{ fontSize: '0.62rem' }}>
                MODERNÍ DULA
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link ${pathname === href ? 'active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/rezervace"
              className="hidden md:inline-block btn-primary text-sm py-2.5 px-5"
            >
              Rezervace
            </Link>
            <button
              className="lg:hidden p-2 rounded-xl transition-colors"
              style={{ color: 'var(--mauve-dark)' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6"  x2="21" y2="6"  />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: mobileOpen ? '600px' : '0',
          background: 'rgba(249,243,238,0.98)',
          backdropFilter: 'blur(24px)',
          borderBottom: mobileOpen ? '1px solid rgba(191,133,133,0.14)' : 'none',
        }}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-4 py-3 rounded-xl font-medium transition-all text-sm tracking-wide"
              style={{
                color: pathname === href ? 'var(--mauve-dark)' : 'var(--dark)',
                background: pathname === href ? 'rgba(191,133,133,0.09)' : 'transparent',
                fontFamily: 'var(--font-body)',
              }}
            >
              {label}
            </Link>
          ))}
          <Link href="/rezervace" className="btn-primary text-center mt-2">
            Rezervace
          </Link>
        </nav>
      </div>
    </header>
  );
}
