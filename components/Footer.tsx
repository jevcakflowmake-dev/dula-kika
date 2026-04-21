import Link from 'next/link';

const footerLinks = [
  { href: '/', label: 'Úvod' },
  { href: '/o-mne', label: 'O mně' },
  { href: '/sluzby', label: 'Služby & Ceník' },
  { href: '/balicky', label: 'Balíčky' },
  { href: '/workshopy', label: 'Workshopy' },
  { href: '/podcasty', label: 'Podcasty' },
  { href: '/recenze', label: 'Recenze' },
  { href: '/rezervace', label: 'Rezervace' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#231616', color: '#e8d5c4' }}>
      {/* Wave transition from page background */}
      <div style={{ background: 'var(--bg)', marginBottom: '-2px' }}>
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
          <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="#231616" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-white text-lg flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, var(--mauve), var(--mauve-dark))',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                }}
              >
                K
              </div>
              <div>
                <div
                  className="text-xl text-white leading-tight"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.02em' }}
                >
                  Dula Kika
                </div>
                <div style={{ color: 'var(--mauve)', fontSize: '0.66rem', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                  Moderní dula
                </div>
              </div>
            </div>
            <p style={{ color: '#c2aaaa', lineHeight: 1.75, fontSize: '0.88rem' }}>
              Pomohu ti ke krásnějšímu zážitku z porodu, který budeš mít celý život.
              Praha a Středočeský kraj.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/dula.kika_modernidula/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'rgba(191,133,133,0.18)', color: '#D4A9A9' }}
                aria-label="Instagram"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="mailto:dula.kikakoj@gmail.com"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'rgba(191,133,133,0.18)', color: '#D4A9A9' }}
                aria-label="Email"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4
              className="mb-5 text-xs tracking-[0.16em] uppercase font-semibold"
              style={{ color: 'var(--mauve)' }}
            >
              Navigace
            </h4>
            <div className="grid grid-cols-2 gap-y-2.5">
              {footerLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: '#c2aaaa' }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="mb-5 text-xs tracking-[0.16em] uppercase font-semibold"
              style={{ color: 'var(--mauve)' }}
            >
              Kontakt
            </h4>
            <div className="space-y-3 text-sm" style={{ color: '#c2aaaa' }}>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--mauve)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Ružinovská 1162/10<br />Praha 4 – Krč, 142 00</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--mauve)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:dula.kikakoj@gmail.com" className="hover:text-white transition-colors">
                  dula.kikakoj@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--mauve)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>Po–Pá: 9:00–18:00<br />Pohotovost 38–42. týden: 24/7</span>
              </div>
              <div
                className="text-xs rounded-xl p-3"
                style={{ background: 'rgba(191,133,133,0.1)', marginTop: '14px' }}
              >
                <strong style={{ color: '#D4A9A9' }}>IČO:</strong> 23731401<br />
                Kristýna Pokorná, DiS.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: '1px solid rgba(191,133,133,0.18)', color: '#8a7070' }}
        >
          <div>© {new Date().getFullYear()} Dula Kika – Kristýna Pokorná, DiS. Všechna práva vyhrazena.</div>
          <Link href="/ochrana-soukromi" className="hover:text-white transition-colors">
            Ochrana soukromí
          </Link>
        </div>
      </div>
    </footer>
  );
}
