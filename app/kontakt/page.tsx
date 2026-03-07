import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktuj dulu Kiku – Kristýnu Pokornou. Praha a Středočeský kraj.',
};

const contactInfo = [
  {
    icon: '📧',
    title: 'E-mail',
    value: 'dula.kikakoj@gmail.com',
    link: 'mailto:dula.kikakoj@gmail.com',
    desc: 'Odpovídám do 24 hodin v pracovní dny.',
  },
  {
    icon: '📍',
    title: 'Adresa',
    value: 'Ružinovská 1162/10\nPraha 4 – Krč, 14200',
    link: 'https://maps.google.com/?q=Ružinovská+1162/10+Praha+4',
    desc: 'Konzultace v Praze 4 (Krč) nebo online.',
  },
  {
    icon: '📸',
    title: 'Instagram',
    value: '@dula.kika_modernidula',
    link: 'https://www.instagram.com/dula.kika_modernidula/',
    desc: 'Sleduj mě na Instagramu pro tipy a novinky.',
  },
  {
    icon: '🕐',
    title: 'Pracovní doba',
    value: 'Po–Pá: 9:00–18:00',
    link: null,
    desc: 'Ve 38.–42. týdnu jsem dostupná 24/7 pro moje klientky.',
  },
];

export default function KontaktPage() {
  return (
    <div style={{ background: '#F7F0EC' }}>
      {/* Hero */}
      <section className="hero-gradient pt-28 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-10 right-10 pointer-events-none float-anim" style={{ width: 300, height: 300, background: 'radial-gradient(circle, rgba(191,133,133,0.15) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div className="max-w-4xl mx-auto text-center">
          <div className="badge mx-auto mb-6">💌 Kontakt</div>
          <h1 className="section-heading mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Pojďme si <span className="gradient-text">popovídat</span>
          </h1>
          <div className="section-divider" />
          <p className="text-lg mt-6" style={{ color: '#6b5b5b', lineHeight: 1.75, maxWidth: 500, margin: '1.5rem auto 0' }}>
            Neváhej mi napsat nebo rezervovat bezplatnou konzultaci. Ráda tě poznám!
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-20 px-4" style={{ background: '#F7F0EC' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {contactInfo.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 80}>
                <div className="soft-card p-7 h-full">
                  <div className="text-3xl mb-4">{c.icon}</div>
                  <h3 className="font-bold text-base mb-1" style={{ color: '#3C3C3C', fontFamily: 'var(--font-playfair)' }}>{c.title}</h3>
                  {c.link ? (
                    <a href={c.link} target={c.link.startsWith('http') ? '_blank' : undefined} rel={c.link.startsWith('http') ? 'noopener noreferrer' : undefined} className="font-semibold text-sm block mb-2 whitespace-pre-line hover:opacity-75 transition-opacity" style={{ color: '#9B6B6B' }}>{c.value}</a>
                  ) : (
                    <p className="font-semibold text-sm block mb-2 whitespace-pre-line" style={{ color: '#9B6B6B' }}>{c.value}</p>
                  )}
                  <p className="text-sm" style={{ color: '#7a6a6a' }}>{c.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Quick CTA */}
          <AnimatedSection>
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: 'linear-gradient(135deg, rgba(191,133,133,0.1), rgba(201,169,110,0.08))', border: '1px solid rgba(191,133,133,0.2)' }}
            >
              <h2 className="font-bold text-2xl mb-3" style={{ fontFamily: 'var(--font-playfair)', color: '#3C3C3C' }}>
                Chceš rovnou rezervovat konzultaci?
              </h2>
              <p className="text-sm mb-6" style={{ color: '#6b5b5b', lineHeight: 1.75 }}>
                Přejdi na stránku s rezervací a vyber si termín, který ti vyhovuje. Je to rychlé a zdarma.
              </p>
              <Link href="/rezervace" className="btn-primary pulse-glow">Rezervovat konzultaci zdarma</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4" style={{ background: '#EDE3DB' }}>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="badge mx-auto mb-4">FAQ</div>
            <h2 className="section-heading" style={{ fontFamily: 'var(--font-playfair)' }}>Časté <span className="gradient-text">otázky</span></h2>
            <div className="section-divider" />
          </AnimatedSection>
          <div className="space-y-4">
            {[
              { q: 'Kde probíhá první konzultace?', a: 'V Praze 4 (Krč) – v kavárně nebo v mém domácím prostředí. Případně online přes video hovor. Praha 4 je zdarma, ostatní části Prahy za 490 Kč (odečte se z balíčku).' },
              { q: 'Jak rychle odpovídáte?', a: 'Snažím se odpovědět do 24 hodin v pracovní dny. Mým klientkám ve 38.–42. týdnu jsem dostupná 24/7.' },
              { q: 'Jestli si Vás "nesednem", jak to funguje?', a: 'To je naprosto v pořádku! Nejdůležitější je, abyste se s dulou cítila bezpečně. Ráda ti doporučím kolegyně, se kterými bys mohla být spokojená.' },
              { q: 'Pracujete mimo Prahu?', a: 'Pracuji v Praze a Středočeském kraji. Na dopravu mimo Prahu účtuji 10 Kč/km. Výjimky lze domluvit individuálně.' },
              { q: 'Máte zálohu?', a: 'Ne, nemám zálohu – pokud bych byla obsazena nebo nemohla přijít, pomůžu ti najít náhradní řešení nebo jinak vyřeším situaci.' },
            ].map((faq, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="soft-card p-6">
                  <h3 className="font-bold mb-2" style={{ color: '#3C3C3C', fontFamily: 'var(--font-playfair)' }}>🌸 {faq.q}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b5b5b' }}>{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Business info */}
      <section className="py-16 px-4" style={{ background: '#F7F0EC' }}>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="soft-card p-7">
              <h3 className="font-bold text-lg mb-5" style={{ color: '#3C3C3C', fontFamily: 'var(--font-playfair)' }}>📄 Fakturační údaje</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm" style={{ color: '#5a5a5a' }}>
                {[
                  { label: 'Jméno', value: 'Kristýna Pokorná, DiS.' },
                  { label: 'IČO', value: '23731401' },
                  { label: 'Adresa', value: 'Ružinovská 1162/10, Praha 4 – Krč, 14200' },
                  { label: 'E-mail', value: 'dula.kikakoj@gmail.com' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="text-xs font-semibold tracking-wider uppercase mb-1" style={{ color: '#BF8585' }}>{label}</div>
                    <div>{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
