import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Služby & Ceník',
  description: 'Přehled všech služeb duly Kiky – od porodní podpory po fotografii a zpracování placenty. Praha a Středočeský kraj.',
};

const additionalServices = [
  { service: 'Předporodní příprava (individuální)', price: '1 390 Kč + doprava' },
  { service: 'Předporodní příprava (páry)', price: '2 290 Kč + doprava' },
  { service: 'Baby mapping – mapování polohy', price: '1 190 Kč + doprava' },
  { service: 'Konzultace / laktační poradenství', price: '690 Kč / hod' },
  { service: 'Rebozo masáž (30 min)', price: '590 Kč + doprava' },
  { service: 'Rebozo masáž (60 min)', price: '990 Kč + doprava' },
  { service: 'Zpracování placenty – koktejl', price: '390 Kč' },
  { service: 'Zpracování placenty – tinktura', price: '990 Kč' },
  { service: 'Zpracování placenty – kapsle', price: '2 990 Kč' },
  { service: 'Srdce z pupečníku', price: '490 Kč' },
  { service: 'Otisk placenty', price: '290 Kč' },
  { service: 'Těhotenská fotografie', price: '1 990 Kč / hod' },
  { service: 'Porodní fotografie', price: '9 990 Kč' },
  { service: 'Půjčovné rebozo šátku', price: '200 Kč / měsíc' },
  { service: 'Půjčovné kresadlového křesla', price: '50 Kč / týden (záloha 1 000 Kč)' },
  { service: 'Půjčovné knihy', price: '50 Kč / týden' },
];

export default function SluzbyPage() {
  return (
    <div style={{ background: '#F7F0EC' }}>
      {/* Hero */}
      <section className="hero-gradient pt-28 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-10 right-10 pointer-events-none float-anim" style={{ width: 300, height: 300, background: 'radial-gradient(circle, rgba(191,133,133,0.15) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div className="max-w-4xl mx-auto text-center">
          <div className="badge mx-auto mb-6">Služby & Ceník</div>
          <h1 className="section-heading mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Vše, co pro tebe <span className="gradient-text">mohu udělat</span>
          </h1>
          <div className="section-divider" />
          <p className="text-lg mt-6" style={{ color: '#6b5b5b', lineHeight: 1.75, maxWidth: 600, margin: '1.5rem auto 0' }}>
            Od konzultace zdarma po kompletní VIP balíček. Každá rodina je jiná – pojďme najít, co sedí té tvé.
          </p>
        </div>
      </section>

      {/* Packages shortcut */}
      <section className="py-10 px-4" style={{ background: '#F7F0EC' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="soft-card p-6 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="text-4xl flex-shrink-0">📦</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1" style={{ color: '#3C3C3C', fontFamily: 'var(--font-playfair)' }}>Hledáš kompletní balíček?</h3>
                <p className="text-sm" style={{ color: '#6b5b5b' }}>Prohlédni si naše připravené balíčky – od BASIC (15 990 Kč) po VIP QUEEN (individuální nabídka).</p>
              </div>
              <Link href="/balicky" className="btn-primary flex-shrink-0">Zobrazit balíčky</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Consultation */}
      <section className="py-16 px-4" style={{ background: '#EDE3DB' }}>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="badge mx-auto mb-4">Konzultace</div>
            <h2 className="section-heading" style={{ fontFamily: 'var(--font-playfair)' }}>Kde se <span className="gradient-text">setkáme</span></h2>
            <div className="section-divider" />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: '🏠', title: 'Praha 4 – Krč', price: 'ZDARMA', desc: 'Konzultace v domácím prostředí nebo v kavárně v okolí.' },
              { icon: '🌍', title: 'Ostatní části Prahy', price: '490 Kč', desc: 'Poplatek za dopravu, který se odečte z ceny balíčku, pokud si ho objednáš.' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="soft-card p-8 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: '#3C3C3C', fontFamily: 'var(--font-playfair)' }}>{item.title}</h3>
                  <div className="text-3xl font-bold mb-3" style={{ color: '#BF8585', fontFamily: 'var(--font-playfair)' }}>{item.price}</div>
                  <p className="text-sm" style={{ color: '#6b5b5b' }}>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional services */}
      <section className="py-20 px-4" style={{ background: '#F7F0EC' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="badge mx-auto mb-4">Doplňkové služby</div>
            <h2 className="section-heading" style={{ fontFamily: 'var(--font-playfair)' }}>Individuální <span className="gradient-text">služby</span></h2>
            <div className="section-divider" />
            <p className="mt-4 text-sm" style={{ color: '#7a6a6a' }}>Tyto služby si můžeš objednat samostatně nebo je přidat k vybranému balíčku.</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="soft-card overflow-hidden">
              {additionalServices.map((s, i) => (
                <div
                  key={s.service}
                  className="flex items-center justify-between p-4 gap-4"
                  style={{ borderBottom: i < additionalServices.length - 1 ? '1px solid rgba(191,133,133,0.1)' : 'none', background: i % 2 === 0 ? 'transparent' : 'rgba(191,133,133,0.03)' }}
                >
                  <span className="text-sm" style={{ color: '#3C3C3C' }}>{s.service}</span>
                  <span className="text-sm font-semibold flex-shrink-0" style={{ color: '#9B6B6B' }}>{s.price}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Important notes */}
      <section className="py-16 px-4" style={{ background: '#EDE3DB' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="soft-card p-8">
              <h3 className="font-bold text-xl mb-6" style={{ color: '#3C3C3C', fontFamily: 'var(--font-playfair)' }}>⚠️ Důležité informace</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm" style={{ color: '#6b5b5b' }}>
                {[
                  'Všechny ceny jsou bez DPH (nejsem plátce DPH).',
                  'Ceny za dopravu: Praha – dle dohody; mimo Prahu – 10 Kč/km.',
                  'Záloha 50 % při podpisu smlouvy, doplatek po porodu.',
                  'Smlouva se podepisuje vždy písemně.',
                  'Dostupnost 24/7 platí od 38. do 42. týdne těhotenství.',
                  'Nezajišťuji zálohu – pokud jsem obsazená, pomůžu ti najít jiná řešení.',
                ].map((note, i) => (
                  <div key={i} className="flex gap-3">
                    <span style={{ color: '#BF8585', flexShrink: 0 }}>•</span>
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4" style={{ background: '#F7F0EC' }}>
        <AnimatedSection className="max-w-3xl mx-auto text-center" direction="fade">
          <h2 className="section-heading mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>Nevíš si rady s výběrem?</h2>
          <p className="text-lg mb-8" style={{ color: '#6b5b5b', lineHeight: 1.75 }}>
            Domluv si bezplatnou konzultaci a společně zjistíme, co je pro tebe to nejlepší.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rezervace" className="btn-primary pulse-glow">Domluvit konzultaci zdarma</Link>
            <Link href="/balicky" className="btn-secondary">Prohlédnout balíčky</Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
