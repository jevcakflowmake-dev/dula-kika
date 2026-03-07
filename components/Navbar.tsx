'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(247, 240, 236, 0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        boxShadow: scrolled ? '0 2px 30px rgba(191, 133, 133, 0.12)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(191, 133, 133, 0.15)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg transition-transform duration-300 group-hover:scale-110"
              style={{ background: 'linear-gradient(135deg, #BF8585, #9B6B6B)' }}
            >
              K
            </div>
            <div>
              <div className="font-bold text-lg leading-tight" style={{ color: '#3C3C3C' }}>
                Dula <span style={{ color: '#BF8585' }}>Kika</span>
              </div>
              <div className="text-xs tracking-wider" style={{ color: '#BF8585', fontSize: '0.7rem' }}>
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
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ color: '#9B6B6B' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
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
          background: 'rgba(247, 240, 236, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: mobileOpen ? '1px solid rgba(191, 133, 133, 0.15)' : 'none',
        }}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-4 py-3 rounded-xl font-medium transition-all"
              style={{
                color: pathname === href ? '#9B6B6B' : '#3C3C3C',
                background: pathname === href ? 'rgba(191, 133, 133, 0.1)' : 'transparent',
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/rezervace"
            className="btn-primary text-center mt-2"
          >
            Rezervace
          </Link>
        </nav>
      </div>
    </header>
  );
}
