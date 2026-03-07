import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

const services = [
  { icon: '🌸', title: 'Porodní podpora', desc: 'Jsem po tvém boku od začátku porodu až po příchod miminku na svět. Fyzická, emocionální i informační podpora.' },
  { icon: '🤱', title: 'Poporodní péče', desc: 'Pomoc s kojením, péčí o novorozence a tvé zotavení po porodu. Přijedu domů za tebou.' },
  { icon: '📚', title: 'Předporodní příprava', desc: 'Připravíme se spolu na porod – porodní plán, techniky zvládání bolesti, role partnera.' },
  { icon: '📸', title: 'Těhotenská fotografie', desc: 'Zvěčním toto výjimečné období tvého života. Domácí i ateliérové focení.' },
  { icon: '🌿', title: 'Zpracování placenty', desc: 'Kapsle, tinktura nebo koktejl z placenty pro rychlejší zotavení po porodu.' },
  { icon: '🎓', title: 'Workshopy', desc: 'Celodenní porodní workshopy pro páry. Praktické cvičení, diskuze, sdílení.' },
];

const steps = [
  { num: '01', title: 'Bezplatná konzultace', desc: 'Setkáme se v Praze 4 nebo online a zjistíme, jestli si vzájemně sedneme.' },
  { num: '02', title: 'Předporodní schůzky', desc: '2–3 setkání, kde probereme tvoje přání, obavy a připravíme porodní plán.' },
  { num: '03', title: 'Porodní podpora', desc: 'Od začátku porodní aktivity jsem s tebou. Celá cesta, dokud nepřijde miminko.' },
  { num: '04', title: 'Poporodní návštěva', desc: 'Přijedu domů, pomůžu s kojením, miminkem i s tebou – tělo i duše.' },
];

const reviews = [
  { name: 'Tereza K.', text: 'Kika byla neuvěřitelná! Díky ní jsem se cítila silná a připravená. Doporučuji každé mamince.', stars: 5 },
  { name: 'Markéta S.', text: 'Bez Kiky by to bylo mnohem těžší. Její klid a empatie mi dodaly sílu, kterou jsem potřebovala.', stars: 5 },
  { name: 'Jana a Petr V.', text: 'Workshop byl naprosto skvělý. Vrátili jsme se domů připravení a plní těšení na porod.', stars: 5 },
];

export default function Home() {
  return (
    <div style={{ background: '#F7F0EC' }}>
      {/* HERO */}
      <section className="hero-gradient relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute top-20 right-10 rounded-full float-anim" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(191,133,133,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="absolute bottom-20 left-0 rounded-full float-anim-delay" style={{ width: 300, height: 300, background: 'radial-gradient(circle, rgba(201,169,110,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        {[...Array(6)].map((_, i) => (
          <div key={i} className="absolute select-none pointer-events-none" style={{ left: `${10 + i * 15}%`, top: `${5 + (i % 3) * 20}%`, opacity: 0.12, fontSize: `${1.5 + (i % 3) * 0.5}rem`, animation: `float ${4 + i}s ease-in-out infinite ${i * 0.8}s` }}>🌸</div>
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge mb-6"><span>🌸</span> Praha & Středočeský kraj</div>
              <h1 className="section-heading mb-6" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', lineHeight: 1.15 }}>
                Tvůj porod.{' '}<span className="gradient-text">Tvůj zážitek.</span><br />Má podpora.
              </h1>
              <p className="text-lg mb-3" style={{ color: '#6b5b5b', lineHeight: 1.75, maxWidth: 480 }}>
                Jsem <strong style={{ color: '#9B6B6B' }}>Kristýna</strong> – porodní a poporodní dula, fotografka a průvodkyně na jedné z nejkrásnějších cest tvého života.
              </p>
              <p className="mb-10 text-base" style={{ color: '#7a6a6a', lineHeight: 1.75, maxWidth: 480 }}>
                Nebuď na porod sama ty ani tvůj doprovod. Pomohu ti ke krásnějšímu zážitku z porodu, který budeš mít celý život.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/rezervace" className="btn-primary pulse-glow">Domluvit konzultaci zdarma</Link>
                <Link href="/o-mne" className="btn-secondary">Více o mně</Link>
              </div>
              <div className="flex gap-8 mt-12">
                {[{ num: '5+', label: 'let zkušeností' }, { num: '100+', label: 'rodin' }, { num: '24/7', label: 'dostupnost' }].map(({ num, label }) => (
                  <div key={label} className="text-center">
                    <div className="font-bold text-2xl" style={{ color: '#BF8585', fontFamily: 'var(--font-playfair)' }}>{num}</div>
                    <div className="text-xs mt-1" style={{ color: '#9a8080' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="float-anim" style={{ width: 380, height: 460, maxWidth: '100%', borderRadius: '50%', boxShadow: '0 30px 80px rgba(191,133,133,0.4)', overflow: 'hidden', position: 'relative', border: '4px solid rgba(191,133,133,0.35)' }}>
                <Image
                  src="/images/kristyna.jpg"
                  alt="Kristýna Pokorná – Dula Kika"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                  priority
                />
              </div>
              <div className="absolute bottom-10 -left-4 soft-card p-4 float-anim-delay" style={{ maxWidth: 200, zIndex: 10 }}>
                <div className="flex mb-1">{[...Array(5)].map((_, i) => <span key={i} className="star text-sm">★</span>)}</div>
                <p className="text-xs font-medium" style={{ color: '#3C3C3C' }}>&ldquo;Nejkrásnější zážitek mého života&rdquo;</p>
                <p className="text-xs mt-1" style={{ color: '#9B6B6B' }}>— Tereza K.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#F7F0EC" />
          </svg>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-20 px-4" style={{ background: '#F7F0EC' }}>
        <AnimatedSection className="max-w-3xl mx-auto text-center" direction="fade">
          <div className="decorative-quote">
            Nebuď na porod sama ty ani tvůj doprovod. Jsem tu, abych tě provázela celou touto krásnou cestou – od prvních příprav až po uvítání tvého miminku.
          </div>
          <div className="section-divider mt-6" />
          <p className="mt-4 text-sm font-semibold tracking-wider" style={{ color: '#BF8585' }}>KRISTÝNA POKORNÁ, DiS. • MODERNÍ DULA</p>
        </AnimatedSection>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 petal-bg" style={{ background: '#EDE3DB' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <div className="badge mx-auto mb-4">Moje služby</div>
            <h2 className="section-heading" style={{ fontFamily: 'var(--font-playfair)' }}>Jak ti mohu <span className="gradient-text">pomoci</span></h2>
            <div className="section-divider" />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 80}>
                <div className="soft-card p-7 h-full">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5" style={{ background: 'linear-gradient(135deg, #F5EDED, #EDE3DB)' }}>{s.icon}</div>
                  <h3 className="font-bold text-lg mb-3" style={{ color: '#3C3C3C', fontFamily: 'var(--font-playfair)' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b5b5b' }}>{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-12">
            <Link href="/sluzby" className="btn-primary">Zobrazit všechny služby a ceník</Link>
          </AnimatedSection>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-4" style={{ background: '#F7F0EC' }}>
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <div className="badge mx-auto mb-4">Jak spolupracujeme</div>
            <h2 className="section-heading" style={{ fontFamily: 'var(--font-playfair)' }}>Cesta od <span className="gradient-text">prvního setkání</span></h2>
            <div className="section-divider" />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 100}>
                <div className="soft-card p-7 h-full text-center">
                  <div className="font-bold text-5xl mb-3 leading-none" style={{ color: 'rgba(191,133,133,0.25)', fontFamily: 'var(--font-playfair)' }}>{step.num}</div>
                  <h3 className="font-bold text-base mb-3" style={{ color: '#3C3C3C', fontFamily: 'var(--font-playfair)' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b5b5b' }}>{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES CTA */}
      <section className="py-24 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #BF8585 0%, #9B6B6B 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(201,169,110,0.2) 0%, transparent 60%)' }} />
        <div className="max-w-4xl mx-auto text-center relative">
          <AnimatedSection>
            <div className="badge mx-auto mb-6" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>Balíčky služeb</div>
            <h2 className="section-heading text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>Vyber si balíček,<br />který ti sedí</h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
              Od základní porodní podpory po kompletní VIP péči včetně fotografie, zpracování placenty a mnoho dalšího. Ceny od 6 990 Kč.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/balicky" className="btn-gold">Prohlédnout balíčky</Link>
              <Link href="/rezervace" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}>Domluvit konzultaci</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 px-4" style={{ background: '#EDE3DB' }}>
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <div className="badge mx-auto mb-4">Recenze</div>
            <h2 className="section-heading" style={{ fontFamily: 'var(--font-playfair)' }}>Co říkají <span className="gradient-text">maminky</span></h2>
            <div className="section-divider" />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <AnimatedSection key={r.name} delay={i * 80}>
                <div className="soft-card p-7 h-full flex flex-col">
                  <div className="flex mb-3">{[...Array(r.stars)].map((_, j) => <span key={j} className="star">★</span>)}</div>
                  <p className="flex-1 text-sm leading-relaxed mb-5 italic" style={{ color: '#5a5a5a' }}>&ldquo;{r.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: 'linear-gradient(135deg, #BF8585, #9B6B6B)' }}>{r.name[0]}</div>
                    <span className="font-semibold text-sm" style={{ color: '#9B6B6B' }}>{r.name}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Link href="/recenze" className="btn-secondary">Číst více recenzí</Link>
          </AnimatedSection>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4" style={{ background: '#F7F0EC' }}>
        <AnimatedSection className="max-w-3xl mx-auto text-center" direction="fade">
          <div className="text-6xl mb-6 float-anim inline-block">🌸</div>
          <h2 className="section-heading mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>Připravena začít?</h2>
          <p className="text-lg mb-10" style={{ color: '#6b5b5b', lineHeight: 1.75 }}>
            První konzultace je zdarma a nezávazná. Setkáme se v Praze 4 (Krč) nebo online a zjistíme, jestli si sedneme.
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
