import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import ReservationForm from './ReservationForm';

export const metadata: Metadata = {
  title: 'Rezervace',
  description: 'Rezervuj si konzultaci s dulou Kikou – první setkání je zdarma.',
};

export default function RezervacePage() {
  return (
    <div style={{ background: '#F7F0EC' }}>
      {/* Hero */}
      <section className="hero-gradient pt-28 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-10 right-10 pointer-events-none float-anim" style={{ width: 300, height: 300, background: 'radial-gradient(circle, rgba(191,133,133,0.15) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div className="max-w-4xl mx-auto text-center">
          <div className="badge mx-auto mb-6">📅 Rezervace</div>
          <h1 className="section-heading mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Rezervuj si <span className="gradient-text">konzultaci</span>
          </h1>
          <div className="section-divider" />
          <p className="text-lg mt-6" style={{ color: '#6b5b5b', lineHeight: 1.75, maxWidth: 540, margin: '1.5rem auto 0' }}>
            První setkání je vždy zdarma a nezávazné. Zjistíme si vzájemně, jestli si sedneme, a probereme tvoje potřeby.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 px-4" style={{ background: '#F7F0EC' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {[
                { step: '1', icon: '📝', title: 'Vyplň formulář', desc: 'Pošli mi základní informace o sobě a svém těhotenství.' },
                { step: '2', icon: '📞', title: 'Ozvu se ti', desc: 'Do 24 hodin ti napíšu a domluvíme termín konzultace.' },
                { step: '3', icon: '☕', title: 'Setkáme se', desc: 'Při kávě nebo online si popovídáme a zjistíme, jestli si sedneme.' },
              ].map((s) => (
                <div key={s.step} className="soft-card p-6 text-center">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <div className="font-bold text-xs tracking-widest uppercase mb-2" style={{ color: '#BF8585' }}>Krok {s.step}</div>
                  <h3 className="font-bold mb-2" style={{ color: '#3C3C3C', fontFamily: 'var(--font-playfair)' }}>{s.title}</h3>
                  <p className="text-sm" style={{ color: '#6b5b5b' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Form */}
      <section className="py-10 pb-24 px-4" style={{ background: '#EDE3DB' }}>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <ReservationForm />
          </AnimatedSection>
        </div>
      </section>

      {/* Alternative */}
      <section className="py-16 px-4" style={{ background: '#F7F0EC' }}>
        <AnimatedSection className="max-w-3xl mx-auto text-center" direction="fade">
          <h2 className="font-bold text-2xl mb-4" style={{ fontFamily: 'var(--font-playfair)', color: '#3C3C3C' }}>Raději napíšeš přímo?</h2>
          <p className="text-sm mb-6" style={{ color: '#6b5b5b' }}>Nebojím se toho! Napiš mi na e-mail nebo Instagram.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:dula.kikakoj@gmail.com" className="btn-secondary">dula.kikakoj@gmail.com</a>
            <a href="https://www.instagram.com/dula.kika_modernidula/" target="_blank" rel="noopener noreferrer" className="btn-secondary">@dula.kika_modernidula</a>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
