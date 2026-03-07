import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Recenze',
  description: 'Co říkají maminky a páry o spolupráci s dulou Kikou. Přečti si jejich příběhy.',
};

const reviews = [
  {
    name: 'Tereza K.',
    tag: 'STANDARD balíček',
    stars: 5,
    date: 'Únor 2026',
    text: 'Kika byla neuvěřitelná! Díky ní jsem se cítila silná a připravená na porod. Byla přesně to, co jsem potřebovala – klid, humor a obrovská empatie. Doporučuji každé mamince. Bez Kiky by to byl úplně jiný zážitek.',
    initials: 'TK',
  },
  {
    name: 'Markéta S.',
    tag: 'COMFORT balíček',
    stars: 5,
    date: 'Leden 2026',
    text: 'Bez Kiky by to bylo mnohem těžší. Její klid a empatie mi dodaly sílu, kterou jsem potřebovala. Porod trval 18 hodin a po celou dobu byla po mém boku. Nikdy ji nezapomenu. Navíc fotografie jsou nádherné.',
    initials: 'MS',
  },
  {
    name: 'Jana a Petr V.',
    tag: 'Workshop + BASIC',
    stars: 5,
    date: 'Prosinec 2025',
    text: 'Workshop byl naprosto skvělý. Vrátili jsme se domů připravení a plní těšení na porod. Petr říká, že bez toho workshopu by vůbec nevěděl, co dělat. A já jsem konečně přestala mít strach. Mockrát díky!',
    initials: 'JV',
  },
  {
    name: 'Lucie M.',
    tag: 'VIP QUEEN',
    stars: 5,
    date: 'Listopad 2025',
    text: 'Kristýna je prostě úžasná. Celé těhotenství jsem věděla, že na to nejsem sama. Porod byl krásný a klidný. Kapsle z placenty mi moc pomohly v poporodním období. A fotky jsou prostě dokonalé.',
    initials: 'LM',
  },
  {
    name: 'Eva a Tomáš R.',
    tag: 'STANDARD balíček',
    stars: 5,
    date: 'Říjen 2025',
    text: 'Nevěřili jsme, že dula může tak zásadně ovlivnit celý porod. Kika přijela ve 2 ráno bez jediné stížnosti a byl tam celých 12 hodin. Její přítomnost byla pro nás oba obrovskou oporou. 100% doporučujeme.',
    initials: 'ER',
  },
  {
    name: 'Monika B.',
    tag: 'LAST MINUTE',
    stars: 5,
    date: 'Září 2025',
    text: 'I přes to, že jsem si Kiku zavolala na poslední chvíli (37. týden), připravila vše bravurně. Bylo to moje třetí dítě, ale první porod s dulou – a byl úplně nejhezčí ze všech. Příště rozhodně dřív!',
    initials: 'MB',
  },
];

const stats = [
  { num: '100+', label: 'spokojených rodin' },
  { num: '5.0', label: 'průměrné hodnocení' },
  { num: '98%', label: 'doporučilo by dál' },
];

export default function RecenzePage() {
  return (
    <div style={{ background: '#F7F0EC' }}>
      {/* Hero */}
      <section className="hero-gradient pt-28 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-10 right-10 pointer-events-none float-anim" style={{ width: 300, height: 300, background: 'radial-gradient(circle, rgba(191,133,133,0.15) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div className="max-w-4xl mx-auto text-center">
          <div className="badge mx-auto mb-6">⭐ Recenze</div>
          <h1 className="section-heading mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Co říkají <span className="gradient-text">maminky</span>
          </h1>
          <div className="section-divider" />
          <p className="text-lg mt-6" style={{ color: '#6b5b5b', lineHeight: 1.75, maxWidth: 500, margin: '1.5rem auto 0' }}>
            Nejlepší hodnocení jsou od rodin, které jsem mohla doprovázet. Čti jejich příběhy.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4" style={{ background: '#F7F0EC' }}>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="soft-card p-6">
              <div className="grid grid-cols-3 gap-6 text-center">
                {stats.map(({ num, label }) => (
                  <div key={label}>
                    <div className="text-3xl font-bold mb-1" style={{ color: '#BF8585', fontFamily: 'var(--font-playfair)' }}>{num}</div>
                    <div className="text-xs" style={{ color: '#9a8080' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16 px-4" style={{ background: '#EDE3DB' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <AnimatedSection key={r.name} delay={i * 70}>
                <div className="soft-card p-7 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex mb-3">
                    {[...Array(r.stars)].map((_, j) => <span key={j} className="star">★</span>)}
                  </div>
                  {/* Badge */}
                  <div className="mb-3">
                    <span className="badge" style={{ fontSize: '0.72rem', padding: '3px 10px' }}>{r.tag}</span>
                  </div>
                  {/* Text */}
                  <p className="flex-1 text-sm leading-relaxed mb-5 italic" style={{ color: '#5a5a5a' }}>
                    &ldquo;{r.text}&rdquo;
                  </p>
                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: 'linear-gradient(135deg, #BF8585, #9B6B6B)' }}>{r.initials}</div>
                      <div>
                        <div className="font-semibold text-sm" style={{ color: '#9B6B6B' }}>{r.name}</div>
                        <div className="text-xs" style={{ color: '#b0a0a0' }}>{r.date}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Write review */}
      <section className="py-20 px-4" style={{ background: '#F7F0EC' }}>
        <AnimatedSection className="max-w-3xl mx-auto text-center" direction="fade">
          <div className="text-5xl mb-5">💌</div>
          <h2 className="section-heading mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>Spolupracovala jsi se mnou?</h2>
          <p className="text-lg mb-8" style={{ color: '#6b5b5b', lineHeight: 1.75 }}>
            Budu moc ráda za tvoji recenzi. Pomáhá mi i dalším maminkám, které mě teprve hledají.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.google.com/search?q=Dula+Kika" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Zanechat recenzi na Google
            </a>
            <Link href="/kontakt" className="btn-secondary">Napsat mně přímo</Link>
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 petal-bg" style={{ background: '#EDE3DB' }}>
        <AnimatedSection className="max-w-3xl mx-auto text-center" direction="fade">
          <h2 className="section-heading mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>Chceš být <span className="gradient-text">další šťastná maminka?</span></h2>
          <p className="text-lg mb-8" style={{ color: '#6b5b5b', lineHeight: 1.75 }}>
            Domluv si bezplatnou konzultaci a zjistíme, jestli si sedneme. Bez závazku.
          </p>
          <Link href="/rezervace" className="btn-primary pulse-glow">Domluvit konzultaci zdarma</Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
