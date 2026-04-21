'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedSection from '@/components/AnimatedSection';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: '🌸', title: 'Porodní podpora', desc: 'Jsem po tvém boku od začátku porodu až po příchod miminka. Fyzická, emocionální i informační podpora.' },
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

/* ── Counter-up helper ─────────────────────────────────────── */
function useCounterUp() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = statsRef.current;
    if (!section) return;

    const counters = section.querySelectorAll<HTMLElement>('[data-count]');

    const ctx = gsap.context(() => {
      counters.forEach((el) => {
        const target = parseInt(el.dataset.count || '0', 10);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 80%', once: true },
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + (el.dataset.suffix || '');
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return statsRef;
}

/* ── Page-load hero sequence ───────────────────────────────── */
function useHeroAnimation() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.hero-badge',    { y: 20, opacity: 0, duration: 0.5, delay: 0.3 })
      .from('.hero-word',     { y: 64, opacity: 0, stagger: 0.09, duration: 0.8 }, '-=0.1')
      .from('.hero-sub',      { y: 20, opacity: 0, duration: 0.7 }, '-=0.3')
      .from('.hero-cta',      { opacity: 0, scale: 0.92, duration: 0.5 }, '-=0.3')
      .from('.hero-visual',   { clipPath: 'inset(0 100% 0 0)', duration: 1.1, ease: 'power2.inOut' }, '-=1')
      .from('.hero-quote-card', { opacity: 0, x: -30, duration: 0.6 }, '-=0.4');
  }, []);
}

export default function Home() {
  const statsRef = useCounterUp();
  useHeroAnimation();

  return (
    <div style={{ background: 'var(--bg)' }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden min-h-screen flex items-center"
        style={{
          background: 'radial-gradient(ellipse at 65% 40%, rgba(212,169,169,0.22) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(196,149,74,0.1) 0%, transparent 50%), var(--bg)',
        }}
      >
        {/* Decorative ambient blobs */}
        <div className="absolute top-24 right-8 rounded-full float-anim pointer-events-none" style={{ width: 420, height: 420, background: 'radial-gradient(circle, rgba(191,133,133,0.16) 0%, transparent 70%)' }} />
        <div className="absolute bottom-24 left-0 rounded-full float-anim-delay pointer-events-none" style={{ width: 280, height: 280, background: 'radial-gradient(circle, rgba(196,149,74,0.1) 0%, transparent 70%)' }} />

        {/* Rotated side label */}
        <div className="rotated-label absolute left-5 top-1/2 -translate-y-1/2 hidden xl:block">
          Praha & Středočeský kraj
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — copy */}
            <div>
              <div className="hero-badge badge mb-8">
                <span>🌸</span> Praha &amp; Středočeský kraj
              </div>

              {/* Headline split into words for GSAP stagger */}
              <h1
                className="mb-6 overflow-hidden"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  lineHeight: 1.0,
                  color: 'var(--dark)',
                }}
              >
                {['Tvůj', 'porod.'].map((w) => (
                  <span key={w} className="hero-word inline-block mr-[0.2em]">{w}</span>
                ))}
                <br />
                {['Tvůj'].map((w) => (
                  <span key={w} className="hero-word inline-block mr-[0.2em]">{w}</span>
                ))}
                <span className="hero-word inline-block gradient-text mr-[0.2em]">zážitek.</span>
                <br />
                {['Má', 'podpora.'].map((w) => (
                  <span key={w} className="hero-word inline-block mr-[0.2em]">{w}</span>
                ))}
              </h1>

              <div className="hero-sub">
                <p className="text-base mb-2" style={{ color: '#6b5252', lineHeight: 1.78, maxWidth: 460 }}>
                  Jsem <strong style={{ color: 'var(--mauve-dark)' }}>Kristýna</strong> – porodní a poporodní dula, fotografka a průvodkyně na jedné z nejkrásnějších cest tvého života.
                </p>
                <p className="mb-10 text-base" style={{ color: '#7a6a6a', lineHeight: 1.78, maxWidth: 460 }}>
                  Nebuď na porod sama ty ani tvůj doprovod. Pomohu ti ke krásnějšímu zážitku z porodu, který budeš mít celý život.
                </p>
              </div>

              <div className="hero-cta flex flex-wrap gap-3">
                <Link href="/rezervace" className="btn-primary pulse-glow">
                  Domluvit konzultaci zdarma
                </Link>
                <Link href="/o-mne" className="btn-secondary">
                  Více o mně
                </Link>
              </div>

              {/* ── COUNTER-UP STATS — signature moment ── */}
              <div ref={statsRef} className="flex gap-10 mt-14">
                {[
                  { count: 5, suffix: '+', label: 'let zkušeností' },
                  { count: 100, suffix: '+', label: 'spokojených rodin' },
                  { count: 0, suffix: '24/7', label: 'dostupnost', static: true },
                ].map(({ count, suffix, label, static: isStatic }) => (
                  <div key={label}>
                    <div
                      className="font-bold leading-none"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                        color: 'var(--mauve)',
                        letterSpacing: '-0.03em',
                      }}
                    >
                      {isStatic ? (
                        <span>{suffix}</span>
                      ) : (
                        <span data-count={count} data-suffix={suffix}>0{suffix}</span>
                      )}
                    </div>
                    <div className="text-xs mt-1 tracking-wide" style={{ color: '#9a8080' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — photo */}
            <div className="relative flex justify-center lg:justify-end">
              <div
                className="hero-visual relative"
                style={{
                  width: 'min(360px, 90vw)',
                  aspectRatio: '3/4',
                  borderRadius: '40% 60% 55% 45% / 45% 40% 60% 55%',
                  overflow: 'hidden',
                  boxShadow: '0 40px 90px rgba(191,133,133,0.35)',
                  border: '3px solid rgba(191,133,133,0.28)',
                  clipPath: 'inset(0 0% 0 0)',   /* animated by GSAP */
                }}
              >
                <Image
                  src="/images/kristyna.jpg"
                  alt="Kristýna Pokorná – Dula Kika"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                  priority
                />
              </div>

              {/* Floating review card */}
              <div
                className="hero-quote-card soft-card p-4 float-anim-delay absolute bottom-8 -left-4"
                style={{ maxWidth: 210, zIndex: 10 }}
              >
                <div className="flex mb-1">
                  {[...Array(5)].map((_, i) => <span key={i} className="star text-sm">★</span>)}
                </div>
                <p className="text-xs font-medium" style={{ color: 'var(--dark)' }}>
                  &ldquo;Nejkrásnější zážitek mého života&rdquo;
                </p>
                <p className="text-xs mt-1" style={{ color: 'var(--mauve-dark)' }}>— Tereza K.</p>
              </div>

              {/* Section numeral decoration */}
              <span
                className="absolute -top-4 -right-2 font-bold select-none pointer-events-none hidden lg:block"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '9rem',
                  color: 'rgba(191,133,133,0.07)',
                  lineHeight: 1,
                  letterSpacing: '-0.05em',
                }}
              >
                K
              </span>
            </div>
          </div>
        </div>

        {/* Wave transition */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
            <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="var(--bg)" />
          </svg>
        </div>
      </section>

      {/* ── QUOTE ────────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center" direction="fade">
          <div className="decorative-quote">
            Nebuď na porod sama ty ani tvůj doprovod. Jsem tu, abych tě provázela celou touto krásnou cestou – od prvních příprav až po uvítání tvého miminka.
          </div>
          <div className="section-divider mx-auto mt-6" />
          <p
            className="mt-5 text-xs tracking-[0.18em] uppercase font-semibold"
            style={{ color: 'var(--mauve)' }}
          >
            Kristýna Pokorná, DiS. · Moderní dula
          </p>
        </AnimatedSection>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className="py-24 px-4 petal-bg" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-4 mb-3">
              <div className="section-divider-left" />
              <span className="section-num">01 — Služby</span>
            </div>
            <h2
              className="section-heading"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--dark)' }}
            >
              Jak ti mohu{' '}
              <em className="gradient-text not-italic">pomoci</em>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 70}>
                <div className="soft-card p-7 h-full group">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg, var(--soft-pink), var(--cream-dark))' }}
                  >
                    {s.icon}
                  </div>
                  <h3
                    className="font-semibold text-lg mb-3"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--dark)', letterSpacing: '-0.02em' }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b5252' }}>{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12">
            <Link href="/sluzby" className="btn-primary">Zobrazit všechny služby a ceník</Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-4 mb-3">
              <div className="section-divider-left" />
              <span className="section-num">02 — Jak to funguje</span>
            </div>
            <h2
              className="section-heading"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--dark)' }}
            >
              Cesta od{' '}
              <em className="gradient-text not-italic">prvního setkání</em>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 90}>
                <div className="soft-card p-7 h-full relative overflow-hidden">
                  {/* Large decorative numeral */}
                  <span
                    className="absolute -top-3 -right-1 font-bold select-none pointer-events-none"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '5.5rem',
                      color: 'rgba(191,133,133,0.09)',
                      lineHeight: 1,
                      letterSpacing: '-0.04em',
                    }}
                  >
                    {step.num}
                  </span>
                  <div
                    className="text-xs font-bold mb-4 tracking-[0.15em] uppercase"
                    style={{ color: 'var(--mauve)' }}
                  >
                    {step.num}
                  </div>
                  <h3
                    className="font-semibold text-base mb-3"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--dark)', letterSpacing: '-0.01em' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b5252' }}>{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PACKAGES CTA ─────────────────────────────────────── */}
      <section
        className="py-24 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--mauve) 0%, var(--mauve-dark) 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(196,149,74,0.22) 0%, transparent 55%)' }} />
        {/* Grain on dark section */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")", backgroundRepeat: 'repeat', backgroundSize: '200px 200px' }} />

        <div className="max-w-4xl mx-auto text-center relative">
          <AnimatedSection>
            <div
              className="badge mx-auto mb-6"
              style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', border: '1px solid rgba(255,255,255,0.28)' }}
            >
              Balíčky služeb
            </div>
            <h2
              className="section-heading text-white mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Vyber si balíček,<br />
              <em className="not-italic" style={{ color: 'var(--gold-light)' }}>který ti sedí</em>
            </h2>
            <p className="text-base mb-10 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.78 }}>
              Od základní porodní podpory po kompletní VIP péči včetně fotografie, zpracování placenty a mnoho dalšího. Ceny od 6 990 Kč.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/balicky" className="btn-gold">Prohlédnout balíčky</Link>
              <Link
                href="/rezervace"
                className="btn-secondary"
                style={{ borderColor: 'rgba(255,255,255,0.45)', color: '#fff' }}
              >
                Domluvit konzultaci
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────── */}
      <section className="py-24 px-4" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-4 mb-3">
              <div className="section-divider-left" />
              <span className="section-num">03 — Recenze</span>
            </div>
            <h2
              className="section-heading"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--dark)' }}
            >
              Co říkají{' '}
              <em className="gradient-text not-italic">maminky</em>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <AnimatedSection key={r.name} delay={i * 80}>
                <div className="soft-card p-7 h-full flex flex-col">
                  <div className="flex mb-3">
                    {[...Array(r.stars)].map((_, j) => <span key={j} className="star">★</span>)}
                  </div>
                  <p className="flex-1 text-sm leading-relaxed mb-5 italic" style={{ color: '#5a4e4e' }}>
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, var(--mauve), var(--mauve-dark))' }}
                    >
                      {r.name[0]}
                    </div>
                    <span
                      className="font-semibold text-sm"
                      style={{ color: 'var(--mauve-dark)', fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}
                    >
                      {r.name}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10">
            <Link href="/recenze" className="btn-secondary">Číst více recenzí</Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="py-28 px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center" direction="fade">
          <div
            className="text-6xl mb-6 float-anim inline-block select-none"
            aria-hidden="true"
          >
            🌸
          </div>
          <h2
            className="section-heading mb-6"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--dark)' }}
          >
            Připravena začít?
          </h2>
          <p className="text-base mb-10" style={{ color: '#6b5252', lineHeight: 1.8, maxWidth: 480, margin: '0 auto 2.5rem' }}>
            První konzultace je zdarma a nezávazná. Setkáme se v Praze 4 (Krč) nebo online a zjistíme, jestli si sedneme.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rezervace" className="btn-primary pulse-glow">
              Domluvit konzultaci zdarma
            </Link>
            <Link href="/balicky" className="btn-secondary">
              Prohlédnout balíčky
            </Link>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}
