import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Workshopy',
  description: 'Porodní workshopy pro páry v Praze. Celodenní příprava na porod s Kristýnou Pokornou a Barborou Novákovou.',
};

const upcomingDates = [
  { date: '8. března 2026', day: 'Neděle', spots: '2 místa zbývají', full: false },
  { date: '12. dubna 2026', day: 'Neděle', spots: '4 místa zbývají', full: false },
  { date: '17. května 2026', day: 'Neděle', spots: '6 míst zbývá', full: false },
];

const curriculum = [
  { icon: '🏥', title: 'Výběr porodnice', desc: 'Jak vybrat porodnici a co vzít v potaz.' },
  { icon: '🎒', title: 'Balení do porodnice', desc: 'Co zabalit pro sebe, pro miminko i pro partnera.' },
  { icon: '🧠', title: 'Psychologická příprava', desc: 'Jak se připravit mentálně a emocionálně.' },
  { icon: '💑', title: 'Komunikace s partnerem', desc: 'Jak spolu mluvit o očekáváních a strachách.' },
  { icon: '🌊', title: 'Průběh porodu', desc: 'Fáze porodu, co čekat a jak se orientovat.' },
  { icon: '🌿', title: 'Prostředí při porodu', desc: 'Jak si přizpůsobit prostředí v porodnici.' },
  { icon: '🛡️', title: 'Prevence poranění', desc: 'Techniky pro minimalizaci rizika poranění.' },
  { icon: '💊', title: 'Medikace a intervence', desc: 'Co o nich vědět a jak se rozhodovat.' },
  { icon: '📋', title: 'Porodní plán', desc: 'Jak napsat funkční porodní plán.' },
  { icon: '🤝', title: 'Role partnera', desc: 'Konkrétní techniky podpory pro doprovázející osobu.' },
  { icon: '😮‍💨', title: 'Zvládání bolesti', desc: 'Dechové techniky, pohyb, rebozo.' },
  { icon: '🧘', title: 'Praktická cvičení', desc: 'Párová cvičení pro aktivní přípravu.' },
];

export default function WorkshopyPage() {
  return (
    <div style={{ background: '#F7F0EC' }}>
      {/* Hero */}
      <section className="hero-gradient pt-28 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-10 left-10 pointer-events-none float-anim" style={{ width: 350, height: 350, background: 'radial-gradient(circle, rgba(191,133,133,0.15) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div className="max-w-4xl mx-auto text-center">
          <div className="badge mx-auto mb-6">🎓 Workshopy</div>
          <h1 className="section-heading mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Porodní workshop <span className="gradient-text">pro páry</span>
          </h1>
          <div className="section-divider" />
          <p className="text-lg mt-6" style={{ color: '#6b5b5b', lineHeight: 1.75, maxWidth: 560, margin: '1.5rem auto 0' }}>
            Celodenní příprava na porod plná praktických cvičení, informací a sdílení. Pro tebe i tvého partnera.
          </p>
        </div>
      </section>

      {/* Workshop overview */}
      <section className="py-20 px-4" style={{ background: '#F7F0EC' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="soft-card p-8">
                <h2 className="font-bold text-2xl mb-6" style={{ fontFamily: 'var(--font-playfair)', color: '#3C3C3C' }}>O workshopu</h2>
                <div className="space-y-4">
                  {[
                    { icon: '📅', label: 'Čas', value: '10:00 – 17:00 (7 hodin)' },
                    { icon: '📍', label: 'Místo', value: 'Praha 8' },
                    { icon: '💰', label: 'Cena', value: '4 799 Kč / pár' },
                    { icon: '👥', label: 'Lektorky', value: 'Kristýna Pokorná & Barbora Marie Nováková' },
                    { icon: '🎁', label: 'V ceně', value: 'Občerstvení, bylinné čaje, přírodní hojivá mast, botanika' },
                    { icon: '📝', label: 'Pro koho', value: 'Těhotné ženy a jejich partneři / doprovázející osoby' },
                  ].map(({ icon, label, value }) => (
                    <div key={label} className="flex items-start gap-4 p-3 rounded-xl" style={{ background: 'rgba(191,133,133,0.05)' }}>
                      <span className="text-xl flex-shrink-0">{icon}</span>
                      <div>
                        <div className="text-xs font-semibold tracking-wider uppercase mb-0.5" style={{ color: '#BF8585' }}>{label}</div>
                        <div className="text-sm" style={{ color: '#3C3C3C' }}>{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="space-y-6">
                <div className="badge mb-2">Nejbližší termíny</div>
                {upcomingDates.map((d, i) => (
                  <div key={i} className="soft-card p-5 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: 'linear-gradient(135deg, #F5EDED, #EDE3DB)' }}>📅</div>
                    <div className="flex-1">
                      <div className="font-bold" style={{ color: '#3C3C3C', fontFamily: 'var(--font-playfair)' }}>{d.date}</div>
                      <div className="text-sm" style={{ color: '#9a8080' }}>{d.day}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: 'rgba(191,133,133,0.1)', color: '#9B6B6B' }}>{d.spots}</div>
                    </div>
                  </div>
                ))}
                <Link href="/rezervace?typ=workshop" className="btn-primary w-full text-center block">Rezervovat místo</Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 px-4 petal-bg" style={{ background: '#EDE3DB' }}>
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <div className="badge mx-auto mb-4">Program</div>
            <h2 className="section-heading" style={{ fontFamily: 'var(--font-playfair)' }}>Co se <span className="gradient-text">naučíte</span></h2>
            <div className="section-divider" />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {curriculum.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 50}>
                <div className="soft-card p-5 h-full">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: '#3C3C3C', fontFamily: 'var(--font-playfair)' }}>{item.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#6b5b5b' }}>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Sharing circle */}
      <section className="py-20 px-4" style={{ background: '#F7F0EC' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="soft-card p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="badge mb-4">🌙 Sdílecí kruh</div>
                  <h2 className="font-bold text-2xl mb-4" style={{ fontFamily: 'var(--font-playfair)', color: '#3C3C3C' }}>
                    Kruh těhotných žen
                  </h2>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#6b5b5b' }}>
                    Pravidelné setkání těhotných žen v bezpečném prostoru. Sdílení zážitků, obav, radostí. Řízená meditace a svíčková věštba.
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b5b5b' }}>
                    Kruh probíhá v menší skupině (max. 8 žen), aby každá měla prostor a pocit bezpečí.
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Frekvence', value: 'Měsíčně' },
                    { label: 'Místo', value: 'Praha (upřesníme)' },
                    { label: 'Kapacita', value: 'Max. 8 žen' },
                    { label: 'Cena', value: 'Dle aktuální nabídky' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center p-3 rounded-xl" style={{ background: 'rgba(191,133,133,0.05)' }}>
                      <span className="text-sm" style={{ color: '#7a6a6a' }}>{label}</span>
                      <span className="text-sm font-semibold" style={{ color: '#9B6B6B' }}>{value}</span>
                    </div>
                  ))}
                  <Link href="/kontakt" className="btn-secondary w-full text-center block mt-4">Zjistit více</Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #BF8585, #9B6B6B)' }}>
        <AnimatedSection className="max-w-3xl mx-auto text-center" direction="fade">
          <h2 className="section-heading text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>Přidej se k nám</h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.88)', lineHeight: 1.75 }}>
            Místa jsou omezena. Rezervuj si místo na nejbližším workshopu a připrav se na porod s jistotou.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rezervace?typ=workshop" className="btn-gold">Rezervovat místo na workshopu</Link>
            <Link href="/kontakt" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}>Mám otázku</Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
