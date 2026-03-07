import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Balíčky služeb',
  description: 'Vyberte si balíček porodní podpory – od BASIC po VIP QUEEN. Praha a Středočeský kraj.',
};

const packages = [
  {
    id: 'last-minute',
    name: 'LAST MINUTE',
    subtitle: 'Rychlá podpora',
    price: '6 990 Kč',
    note: '+ 10 Kč/km za dopravu, od 37. týdne',
    color: '#E8D5C4',
    textColor: '#3C3C3C',
    emoji: '⚡',
    features: [
      '1 předporodní schůzka (2 hodiny)',
      'Aktivní porodní podpora',
      '1 poporodní videohovor',
      'E-booky k porodu',
    ],
    cta: 'Objednat',
    featured: false,
  },
  {
    id: 'basic',
    name: 'BASIC',
    subtitle: 'Základ péče',
    price: '15 990 Kč',
    note: '+ 10 Kč/km za dopravu',
    color: '#F7F0EC',
    textColor: '#3C3C3C',
    emoji: '🌱',
    features: [
      '2 předporodní schůzky (4 hodiny)',
      'Porodní podpora (38.–42. týden)',
      '1 poporodní návštěva (1 hodina)',
      'Příprava partnera',
      'E-booky a pomůcky',
    ],
    cta: 'Objednat',
    featured: false,
  },
  {
    id: 'standard',
    name: 'STANDARD',
    subtitle: 'Oblíbený výběr',
    price: '19 990 Kč',
    note: '10% sleva na dopravu',
    color: '#BF8585',
    textColor: '#FFFFFF',
    emoji: '⭐',
    features: [
      '3 předporodní schůzky (6 hodin)',
      'Porodní podpora od 38.–42. týdne',
      '1 poporodní návštěva (2 hodiny)',
      'Příprava partnera',
      'E-booky a pomůcky',
      'Telefonická dostupnost',
    ],
    cta: 'Objednat STANDARD',
    featured: true,
  },
  {
    id: 'comfort',
    name: 'COMFORT',
    subtitle: 'Komplexní péče',
    price: '25 990 Kč',
    note: 'Vč. dopravy',
    color: '#F7F0EC',
    textColor: '#3C3C3C',
    emoji: '💎',
    features: [
      '4 předporodní schůzky (8 hodin)',
      'Porodní podpora + rebozo techniky',
      '2 poporodní návštěvy (4 hodiny)',
      'Bylinné pářání',
      'Možnost fotografování',
      'Zpracování placenty',
      'E-booky a vše potřebné',
    ],
    cta: 'Objednat',
    featured: false,
  },
  {
    id: 'vip',
    name: 'VIP QUEEN',
    subtitle: 'Maximální péče',
    price: 'Individuálně',
    note: 'Vše v ceně, žádné překvapení',
    color: '#C9A96E',
    textColor: '#FFFFFF',
    emoji: '👑',
    features: [
      'Neomezená předporodní podpora',
      '4+ předporodní schůzky + měsíční hovory',
      'Porodní podpora od 37. týdne',
      '3 poporodní návštěvy + laktační poradenství',
      'Fotografie + zpracování placenty',
      'Srdce z pupečníku + otisk placenty',
      'Veškeré náklady na dopravu v ceně',
      'Prioritní dostupnost 24/7',
    ],
    cta: 'Nezávazně poptat',
    featured: false,
  },
];

const comparison = [
  { feature: 'Předporodní schůzky', lastMinute: '1×', basic: '2×', standard: '3×', comfort: '4×', vip: '4×+' },
  { feature: 'Porodní podpora', lastMinute: '✓', basic: '✓', standard: '✓', comfort: '✓', vip: '✓' },
  { feature: 'Poporodní návštěva', lastMinute: 'video', basic: '1×', standard: '1×', comfort: '2×', vip: '3×' },
  { feature: 'Rebozo techniky', lastMinute: '–', basic: '–', standard: '–', comfort: '✓', vip: '✓' },
  { feature: 'Fotografování', lastMinute: '–', basic: '–', standard: '–', comfort: 'volba', vip: '✓' },
  { feature: 'Zpracování placenty', lastMinute: '–', basic: '–', standard: '–', comfort: '✓', vip: '✓' },
  { feature: 'Bylinné pářání', lastMinute: '–', basic: '–', standard: '–', comfort: '✓', vip: '✓' },
  { feature: 'Doprava', lastMinute: '+10 Kč/km', basic: '+10 Kč/km', standard: '-10%', comfort: 'v ceně', vip: 'v ceně' },
];

export default function BalickyPage() {
  return (
    <div style={{ background: '#F7F0EC' }}>
      {/* Hero */}
      <section className="hero-gradient pt-28 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-10 right-10 pointer-events-none float-anim" style={{ width: 300, height: 300, background: 'radial-gradient(circle, rgba(201,169,110,0.15) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div className="max-w-4xl mx-auto text-center">
          <div className="badge mx-auto mb-6">📦 Balíčky služeb</div>
          <h1 className="section-heading mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Vyber si balíček, <span className="gradient-text">který ti sedí</span>
          </h1>
          <div className="section-divider" />
          <p className="text-lg mt-6" style={{ color: '#6b5b5b', lineHeight: 1.75, maxWidth: 560, margin: '1.5rem auto 0' }}>
            Od rychlé podpory po kompletní VIP péči. Nevíš si rady? Konzultace je zdarma.
          </p>
        </div>
      </section>

      {/* Package cards */}
      <section className="py-20 px-4" style={{ background: '#F7F0EC' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {packages.map((pkg, i) => (
              <AnimatedSection key={pkg.id} delay={i * 80}>
                <div
                  className="package-card h-full flex flex-col"
                  style={pkg.featured ? { background: 'linear-gradient(145deg, #BF8585 0%, #9B6B6B 100%)', color: 'white' } : { background: 'white' }}
                >
                  {pkg.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="badge" style={{ background: 'rgba(255,255,255,0.25)', color: 'white', border: '1px solid rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>
                        Nejoblíbenější
                      </span>
                    </div>
                  )}
                  <div className="text-3xl mb-3">{pkg.emoji}</div>
                  <div className="font-bold text-xs tracking-widest mb-1 uppercase" style={{ color: pkg.featured ? 'rgba(255,255,255,0.75)' : '#BF8585' }}>{pkg.subtitle}</div>
                  <h3 className="font-bold text-2xl mb-1" style={{ fontFamily: 'var(--font-playfair)', color: pkg.featured ? 'white' : '#3C3C3C' }}>{pkg.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold" style={{ fontFamily: 'var(--font-playfair)', color: pkg.featured ? 'white' : '#BF8585' }}>{pkg.price}</span>
                  </div>
                  <p className="text-xs mb-5 pb-5" style={{ color: pkg.featured ? 'rgba(255,255,255,0.7)' : '#9a8080', borderBottom: `1px solid ${pkg.featured ? 'rgba(255,255,255,0.2)' : 'rgba(191,133,133,0.15)'}` }}>{pkg.note}</p>
                  <ul className="flex-1 space-y-2.5 mb-6">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <span className="flex-shrink-0 font-bold" style={{ color: pkg.featured ? 'rgba(255,255,255,0.8)' : '#C9A96E' }}>✓</span>
                        <span style={{ color: pkg.featured ? 'rgba(255,255,255,0.9)' : '#5a5a5a' }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/rezervace"
                    className={pkg.featured ? 'btn-gold text-center' : pkg.id === 'vip' ? 'btn-secondary text-center' : 'btn-secondary text-center'}
                    style={pkg.featured ? {} : { borderColor: 'rgba(191,133,133,0.5)' }}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 px-4" style={{ background: '#EDE3DB' }}>
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="badge mx-auto mb-4">Srovnání</div>
            <h2 className="section-heading" style={{ fontFamily: 'var(--font-playfair)' }}>Co je <span className="gradient-text">v každém balíčku</span></h2>
            <div className="section-divider" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="soft-card overflow-auto">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr style={{ background: 'rgba(191,133,133,0.08)' }}>
                    <th className="text-left p-4 font-semibold" style={{ color: '#3C3C3C' }}>Funkce</th>
                    {['Last Minute', 'Basic', 'Standard ⭐', 'Comfort', 'VIP Queen 👑'].map(n => (
                      <th key={n} className="text-center p-4 font-semibold" style={{ color: '#9B6B6B' }}>{n}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.feature} style={{ borderTop: '1px solid rgba(191,133,133,0.1)', background: i % 2 === 0 ? 'transparent' : 'rgba(191,133,133,0.03)' }}>
                      <td className="p-4" style={{ color: '#5a5a5a' }}>{row.feature}</td>
                      {[row.lastMinute, row.basic, row.standard, row.comfort, row.vip].map((val, j) => (
                        <td key={j} className="p-4 text-center" style={{ color: val === '–' ? '#c4b5b5' : val.includes('✓') ? '#9B6B6B' : '#3C3C3C', fontWeight: val.includes('✓') ? 600 : 400 }}>{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4" style={{ background: '#F7F0EC' }}>
        <AnimatedSection className="max-w-3xl mx-auto text-center" direction="fade">
          <div className="text-5xl mb-6">💬</div>
          <h2 className="section-heading mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>Nevíš si rady s výběrem?</h2>
          <p className="text-lg mb-8" style={{ color: '#6b5b5b', lineHeight: 1.75 }}>
            To je naprosto v pořádku! Domluv si bezplatnou konzultaci a společně si promluvíme o tom, co pro tebe dává největší smysl.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rezervace" className="btn-primary pulse-glow">Konzultace zdarma</Link>
            <Link href="/kontakt" className="btn-secondary">Napsat Kristýně</Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
