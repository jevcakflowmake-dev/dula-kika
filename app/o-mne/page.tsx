import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'O mně',
  description: 'Jsem Kristýna Pokorná, DiS. – moderní porodní a poporodní dula z Prahy. Poznej mě blíže.',
};

const values = [
  { icon: '💛', title: 'Empatie', desc: 'Ke každé rodině přistupuji s hlubokým porozuměním a respektem k jejich jedinečné cestě.' },
  { icon: '🌿', title: 'Přirozenost', desc: 'Věřím v sílu ženského těla. Porod je přirozený proces, ne nemoc.' },
  { icon: '😄', title: 'Humor', desc: 'Vážím si tohoto povolání, ale life is too short to be serious all the time.' },
  { icon: '🤝', title: 'Spolupráce', desc: 'Pracuji s tebou, ne za tebe. Tvoje rozhodnutí jsou vždy na prvním místě.' },
  { icon: '📚', title: 'Vzdělání', desc: 'Neustále se vzdělávám, abych ti mohla nabídnout to nejlepší z oboru.' },
  { icon: '💪', title: 'Ženská síla', desc: 'Věřím, že každá žena má v sobě sílu projít porodem důstojně a hezky.' },
];

const qualifications = [
  'Mentorovaná porodní a poporodní dula',
  'Těhotenská a porodní fotografka',
  'Absolventka kurzů laktační poradkyně',
  'Výcvik v technice Rebozo',
  'Kurz baby mapping (ultrazvukové mapování polohy)',
  'Průběžné vzdělávání v oblasti perinatální péče',
];

export default function AboutPage() {
  return (
    <div style={{ background: '#F7F0EC' }}>
      {/* Hero */}
      <section className="hero-gradient pt-28 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-20 right-0 float-anim pointer-events-none" style={{ width: 350, height: 350, background: 'radial-gradient(circle, rgba(191,133,133,0.15) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge mb-6">🌸 O mně</div>
              <h1 className="section-heading mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                Ahoj, jsem <span className="gradient-text">Kristýna</span>
              </h1>
              <p className="text-lg mb-4" style={{ color: '#6b5b5b', lineHeight: 1.8 }}>
                Říkají mi Týnko nebo Kika – a jsem moderní porodní a poporodní dula, těhotenská fotografka a nadšená průvodkyně na jedné z nejkrásnějších cest tvého života.
              </p>
              <p className="mb-4" style={{ color: '#7a6a6a', lineHeight: 1.8 }}>
                Narodila jsem se a vyrůstala v Praze, kde stále žiji. Porodní péčí jsem se začala zabývat, protože věřím, že každá žena si zaslouží být v porodu obklopena lidmi, kteří ji skutečně podporují.
              </p>
              <p className="mb-8" style={{ color: '#7a6a6a', lineHeight: 1.8 }}>
                <strong style={{ color: '#9B6B6B' }}>Nejsem „ezo" dula.</strong> Jsem moderní, praktická a s humorem. Mám hluboký respekt k tomuto povolání, ale zároveň věřím, že porod může být krásný zážitek i bez mystiky.
              </p>
              <Link href="/rezervace" className="btn-primary">Pojďme se poznat</Link>
            </div>

            <div className="relative flex justify-center">
              <div className="float-anim" style={{ width: 380, height: 460, maxWidth: '100%', borderRadius: '40% 60% 50% 50% / 60% 40% 60% 40%', background: 'linear-gradient(145deg, #F5EDED 0%, #D4A9A9 40%, #BF8585 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 25px 70px rgba(191,133,133,0.3)' }}>
                <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.9)' }}>
                  <div style={{ fontSize: '4rem' }}>👩‍⚕️</div>
                  <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.1rem', marginTop: '1rem' }}>Kristýna Pokorná</p>
                  <p style={{ fontSize: '0.8rem', opacity: 0.85, marginTop: '0.25rem' }}>DiS. • Moderní dula</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 soft-card p-5" style={{ maxWidth: 180 }}>
                <p className="text-2xl font-bold" style={{ color: '#BF8585', fontFamily: 'var(--font-playfair)' }}>100+</p>
                <p className="text-xs mt-1" style={{ color: '#7a6a6a' }}>rodin doprovázeno na jejich cestě</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My story */}
      <section className="py-20 px-4" style={{ background: '#F7F0EC' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="badge mx-auto mb-4">Můj příběh</div>
            <h2 className="section-heading" style={{ fontFamily: 'var(--font-playfair)' }}>Proč jsem se stala <span className="gradient-text">dulou</span></h2>
            <div className="section-divider" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="soft-card p-10">
              <div className="prose-kika space-y-4 text-base" style={{ color: '#5a5a5a', lineHeight: 1.85 }}>
                <p>Vždy mě fascinovala síla, kterou mají ženy v sobě. Porod je jedním z nejintenzivnějších okamžiků lidského života – a přesto tolik žen na něj není dobře připraveno, nebo ho prožívá v prostředí, kde se necítí bezpečně.</p>
                <p>Začala jsem pracovat jako dobrovolná podpora v porodnicích a rychle jsem pochopila, jak obrovský rozdíl může udělat přítomnost člověka, který tě zná, věří ti a stojí za tebou – bez ohledu na to, jak porod probíhá.</p>
                <p>Dnes pracuji jako <strong style={{ color: '#9B6B6B' }}>mentorovaná porodní a poporodní dula</strong> a každou rodinu beru jako svůj vlastní malý projekt. Průměrně doprovázím 6–8 rodin ročně, protože chci, abys cítila, že jsi pro mě opravdu důležitá – ne jen jedna z mnoha.</p>
                <p>Miluji svoji práci. A to se, věřím, přenáší na každou rodinu, se kterou spolupracuji. 🌸</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 petal-bg" style={{ background: '#EDE3DB' }}>
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <div className="badge mx-auto mb-4">Moje hodnoty</div>
            <h2 className="section-heading" style={{ fontFamily: 'var(--font-playfair)' }}>Na čem mi <span className="gradient-text">záleží</span></h2>
            <div className="section-divider" />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 70}>
                <div className="soft-card p-6 h-full flex gap-4">
                  <div className="text-3xl flex-shrink-0">{v.icon}</div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: '#3C3C3C', fontFamily: 'var(--font-playfair)' }}>{v.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#6b5b5b' }}>{v.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 px-4" style={{ background: '#F7F0EC' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="badge mx-auto mb-4">Vzdělání & kvalifikace</div>
            <h2 className="section-heading" style={{ fontFamily: 'var(--font-playfair)' }}>Co jsem <span className="gradient-text">vystudovala</span></h2>
            <div className="section-divider" />
          </AnimatedSection>
          <AnimatedSection>
            <div className="soft-card p-8">
              <div className="space-y-4">
                {qualifications.map((q, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: i % 2 === 0 ? 'rgba(191,133,133,0.05)' : 'transparent' }}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style={{ background: 'linear-gradient(135deg, #BF8585, #9B6B6B)' }}>✓</div>
                    <span style={{ color: '#3C3C3C' }}>{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #BF8585, #9B6B6B)' }}>
        <AnimatedSection className="max-w-3xl mx-auto text-center" direction="fade">
          <h2 className="section-heading text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>Pojďme se poznat</h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.88)', lineHeight: 1.75 }}>
            První konzultace je zdarma a nezávazná. Setkáme se v Praze 4 nebo online.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rezervace" className="btn-gold">Rezervovat konzultaci zdarma</Link>
            <Link href="/kontakt" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}>Kontaktovat</Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
