import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Balíčky služeb',
  description: 'Vyberte si balíček porodní podpory – od LAST MINUTE po VIP QUEEN. Praha a Středočeský kraj.',
};

const packages = [
  {
    id: 'last-minute',
    name: 'LAST MINUTE',
    subtitle: 'Pro rozhodnuté na poslední chvíli',
    price: '6 990 Kč',
    priceNote: '+ 10 Kč/km za dopravu',
    availability: 'Od 37. týdne dle kapacity',
    photo: '/images/balicky/lastminute.png',
    photoAlt: 'Last minute porodní podpora',
    accent: '#C9A96E',
    featured: false,
    description: 'Jestliže jsi se rozhodla na poslední chvíli, že bys chtěla při porodu péči své osobní duly, tento balíček je pro tebe. Zahrnuje vše podstatné pro hladký průběh porodu.',
    features: [
      { label: 'Seznamovací schůzka ZDARMA', detail: 'Online' },
      { label: '1× předporodní schůzka', detail: '2 hodiny – online nebo osobně' },
      { label: 'Doprovod při aktivním porodu', detail: 'Přijedu, jakmile budeš potřebovat' },
      { label: 'Rebozo techniky', detail: 'Úlevové polohy a masáže' },
      { label: 'Napářka a světýlka u porodu', detail: 'Pro příjemnější atmosféru' },
      { label: '1× videohovor v šestinedělí', detail: '1 hodina – sdílení a podpora' },
    ],
  },
  {
    id: 'basic',
    name: 'BASIC',
    subtitle: 'Základní porodní podpora',
    price: '15 990 Kč',
    priceNote: '+ 10 Kč/km za dopravu',
    availability: 'Pohotovost od 38. do 42. týdne',
    photo: '/images/balicky/basic.jpg',
    photoAlt: 'Základní porodní podpora',
    accent: '#BF8585',
    featured: false,
    description: 'Vhodná pro ženy bez větších finančních možností, které chtějí základní přípravu a přítomnost duly u porodu. Dostaneš to nejdůležitější – být na porod připravená a mít mě po svém boku.',
    features: [
      { label: 'Seznamovací schůzka ZDARMA', detail: 'Osobně Praha 4 nebo online' },
      { label: '2× předporodní schůzka', detail: '4 hodiny celkem' },
      { label: 'Pomoc s výběrem porodnice', detail: 'A sestavení porodního přání' },
      { label: 'Napářka v těhotenství', detail: 'Bylinná koupel pro úlevu' },
      { label: 'Základy práce s rebozem', detail: 'Šatka pro úlevové polohy' },
      { label: 'Pohotovost od 38. do 42. týdne', detail: 'Jsem dostupná kdykoliv' },
      { label: 'Doprovod při aktivním porodu', detail: 'Po celou dobu porodu' },
      { label: 'Rebozo techniky + napářka', detail: 'Přímá podpora u porodu' },
      { label: '1× poporodní schůzka', detail: '1 hodina – kontrola kojení' },
    ],
  },
  {
    id: 'standard',
    name: 'STANDARD',
    subtitle: 'Nejoblíbenější balíček',
    price: '19 990 Kč',
    priceNote: '10% sleva na cestovné',
    availability: 'Pohotovost od 38. do 42. týdne',
    photo: '/images/balicky/standard.jpg',
    photoAlt: 'Standard porodní podpora',
    accent: '#BF8585',
    featured: true,
    description: 'Ideální pro páry, kteří si přejí být sehraný tým s vědomou a klidnou přípravou na porod. Zaměřuji se na to, aby byl váš porod zážitkem, na který budete rádi vzpomínat.',
    features: [
      { label: 'Seznamovací schůzka ZDARMA', detail: 'Osobně Praha 4 nebo online' },
      { label: '3× předporodní schůzka', detail: '6 hodin – komplexní příprava' },
      { label: 'Pomoc s výběrem porodnice', detail: 'A sestavení porodního přání' },
      { label: 'Napářka + práce s rebozem', detail: 'Pro příjemné těhotenství' },
      { label: 'Základy porodní přípravy', detail: 'Techniky zvládání bolesti' },
      { label: 'Příprava partnera', detail: 'Aby byl oporou, ne divákem' },
      { label: 'Malba polohy miminka', detail: 'Krásná vzpomínka na těhotenství' },
      { label: 'Pohotovost od 38. do 42. týdne', detail: 'Dostupnost 24/7' },
      { label: 'Doprovod po celou dobu porodu', detail: 'Od příjezdu do porodnice až po miminko' },
      { label: 'Rebozo techniky + TENS', detail: 'Úleva od porodních bolestí' },
      { label: '1× poporodní schůzka', detail: '2 hodiny – kojení a zotavení' },
      { label: 'Kontrola kojení', detail: 'Pomoc se správnou technikou' },
      { label: 'Zpracování placenty, srdce, obtisk', detail: 'Možnost přidání' },
    ],
  },
  {
    id: 'comfort',
    name: 'COMFORT',
    subtitle: 'Komplexní péče s maximálním komfortem',
    price: '25 990 Kč',
    priceNote: 'Vč. cestovného',
    availability: 'Pohotovost od 38. týdne až do porodu',
    photo: '/images/balicky/comfort.jpg',
    photoAlt: 'Comfort porodní podpora',
    accent: '#9B6B6B',
    featured: false,
    description: 'Balíček určen pro ženy, které chtějí být na porod kvalitně připravené spolu se svým partnerem. Intenzivní podpora s důrazem na pohodu, klid a radost z celého procesu.',
    features: [
      { label: 'Seznamovací schůzka ZDARMA', detail: 'Osobně Praha 4 nebo online' },
      { label: '4× předporodní schůzka', detail: '8 hodin – hluboká příprava' },
      { label: 'Pomoc s výběrem porodnice', detail: 'A sestavení porodního přání' },
      { label: 'Napářka + rebozo + olejíček na hráz', detail: 'Kompletní tělesná příprava' },
      { label: 'Těhotenský čaj na míru', detail: 'Bylinná směs pro vaše těhotenství' },
      { label: 'Neomezená podpora přes zprávy', detail: 'Jsem tu kdykoliv napíšeš' },
      { label: 'Rozsáhlá párová příprava', detail: 'Partner jako skutečný tým' },
      { label: 'Malba polohy miminka', detail: 'Krásná vzpomínka' },
      { label: 'Pohotovost od 38. týdne', detail: 'Až do porodu, bez omezení' },
      { label: 'Doprovod po celou dobu porodu', detail: 'Nepřetržitá přítomnost' },
      { label: 'Rebozo techniky + TENS + nahřívání hráze', detail: 'Maximální úleva u porodu' },
      { label: '2× poporodní schůzka', detail: '4 hodiny – kojení, debrief, podpora' },
      { label: 'Zpracování placenty', detail: 'Možnost přidání' },
      { label: 'Srdce z pupeční šňůry + obtisk placenty', detail: 'Nezapomenutelná vzpomínka' },
    ],
  },
  {
    id: 'vip',
    name: 'VIP QUEEN',
    subtitle: 'Exkluzivní péče bez kompromisů',
    price: 'Individuálně',
    priceNote: 'Dle domluvy – vše v ceně',
    availability: 'Pohotovost od 37. týdne, max. 1× za 2 měsíce',
    photo: '/images/balicky/vip.jpg',
    photoAlt: 'VIP Queen porodní podpora',
    accent: '#C9A96E',
    featured: false,
    description: 'Exkluzivní péče s omezenou kapacitou – maximálně jednu rodinu za dva měsíce. Dostaneš absolutní prioritu a kompletní podporu od těhotenství až po šestinedělí. Žádná starost, žádné překvapení.',
    features: [
      { label: 'Absolutní časová priorita', detail: 'Jsi moje jediná klientka' },
      { label: '4× předporodní schůzka', detail: 'Individuálně dle potřeb' },
      { label: '2× měsíčně 30min. hovor', detail: 'Průběžná podpora v těhotenství' },
      { label: 'Neomezená podpora přes zprávy', detail: '24 hodin denně, 7 dní v týdnu' },
      { label: 'Párová předporodní příprava', detail: 'Komplexní příprava vás obou' },
      { label: 'Těhotenské focení doma', detail: 'Profesionální fotodokumentace' },
      { label: 'Těhotenská rebozo masáž', detail: 'Relaxace a úleva v těhotenství' },
      { label: 'Pohotovost od 37. týdne', detail: 'Jsem připravena kdykoliv' },
      { label: 'Doprovod po celou dobu porodu', detail: 'Nepřetržitá přítomnost' },
      { label: '3× poporodní schůzka', detail: '6 hodin – komplexní péče v šestinedělí' },
      { label: 'Laktační poradenství', detail: 'Odborná pomoc s kojením' },
      { label: 'Zpracování placenty', detail: 'Kapsle, tinktura nebo koktejl' },
      { label: 'Cestovné v ceně', detail: 'Žádné příplatky za dopravu' },
    ],
  },
];

const comparison = [
  { feature: 'Předporodní schůzky', lastMinute: '1× (2h)', basic: '2× (4h)', standard: '3× (6h)', comfort: '4× (8h)', vip: '4×+' },
  { feature: 'Porodní podpora', lastMinute: '✓', basic: '✓', standard: '✓', comfort: '✓', vip: '✓' },
  { feature: 'Pohotovost', lastMinute: 'od 37. týdne', basic: '38.–42. týden', standard: '38.–42. týden', comfort: 'od 38. týdne', vip: 'od 37. týdne' },
  { feature: 'Poporodní schůzka', lastMinute: 'videohovor 1h', basic: '1× (1h)', standard: '1× (2h)', comfort: '2× (4h)', vip: '3× (6h)' },
  { feature: 'Příprava partnera', lastMinute: '–', basic: '–', standard: 'základní', comfort: 'rozsáhlá', vip: 'kompletní' },
  { feature: 'Rebozo techniky', lastMinute: 'základní', basic: 'základní', standard: '✓', comfort: '✓ + TENS', vip: '✓ + masáž' },
  { feature: 'Napářka', lastMinute: '✓', basic: '✓', standard: '✓', comfort: '✓', vip: '✓' },
  { feature: 'Malba polohy miminka', lastMinute: '–', basic: '–', standard: '✓', comfort: '✓', vip: '✓' },
  { feature: 'Těhotenská fotografie', lastMinute: '–', basic: '–', standard: '–', comfort: '–', vip: '✓' },
  { feature: 'Zpracování placenty', lastMinute: '–', basic: '–', standard: 'možnost', comfort: 'možnost', vip: '✓' },
  { feature: 'Srdce z pupečníku + obtisk', lastMinute: '–', basic: '–', standard: 'možnost', comfort: '✓', vip: '✓' },
  { feature: 'Podpora přes zprávy', lastMinute: '–', basic: '–', standard: '–', comfort: 'neomezená', vip: 'neomezená' },
  { feature: 'Cestovné', lastMinute: '+10 Kč/km', basic: '+10 Kč/km', standard: '−10%', comfort: 'v ceně', vip: 'v ceně' },
];

export default function BalickyPage() {
  return (
    <div style={{ background: '#F7F0EC' }}>
      {/* Hero */}
      <section className="hero-gradient pt-28 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-10 right-10 pointer-events-none float-anim" style={{ width: 300, height: 300, background: 'radial-gradient(circle, rgba(201,169,110,0.15) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div className="absolute bottom-0 left-10 pointer-events-none float-anim-delay" style={{ width: 200, height: 200, background: 'radial-gradient(circle, rgba(191,133,133,0.12) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div className="max-w-4xl mx-auto text-center">
          <div className="badge mx-auto mb-6">📦 Balíčky služeb</div>
          <h1 className="section-heading mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Vyber si balíček,{' '}<span className="gradient-text">který ti sedí</span>
          </h1>
          <div className="section-divider" />
          <p className="text-lg mt-6" style={{ color: '#6b5b5b', lineHeight: 1.75, maxWidth: 580, margin: '1.5rem auto 0' }}>
            Od rychlé podpory při porodu po kompletní VIP péči od těhotenství po šestinedělí.
            Každý balíček zahrnuje bezplatnou úvodní konzultaci.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="#balicky" className="btn-primary">Prohlédnout balíčky</a>
            <Link href="/rezervace" className="btn-secondary">Konzultace zdarma</Link>
          </div>
        </div>
      </section>

      {/* Packages – detailed cards */}
      <section id="balicky" className="py-20 px-4" style={{ background: '#F7F0EC' }}>
        <div className="max-w-6xl mx-auto space-y-20">

          {packages.map((pkg, i) => (
            <AnimatedSection key={pkg.id} direction={i % 2 === 0 ? 'left' : 'right'}>
              <div className={`grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-lg`}
                style={{ outline: pkg.featured ? `3px solid ${pkg.accent}` : 'none', outlineOffset: 4 }}>

                {/* Photo side */}
                <div className={`relative min-h-80 lg:min-h-full ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={pkg.photo}
                    alt={pkg.photoAlt}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                  {/* Overlay with price */}
                  <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)' }}>
                    <div className="text-white">
                      <p className="text-3xl font-bold" style={{ fontFamily: 'var(--font-playfair)', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>{pkg.price}</p>
                      <p className="text-sm opacity-85">{pkg.priceNote}</p>
                    </div>
                  </div>
                  {pkg.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="badge text-white font-bold px-4 py-2" style={{ background: 'linear-gradient(135deg, #BF8585, #9B6B6B)', border: 'none', fontSize: '0.8rem' }}>
                        ⭐ Nejoblíbenější
                      </span>
                    </div>
                  )}
                </div>

                {/* Content side */}
                <div className={`p-8 lg:p-10 flex flex-col ${i % 2 === 1 ? 'lg:order-1' : ''}`}
                  style={{ background: pkg.featured ? 'linear-gradient(145deg, #BF8585 0%, #9B6B6B 100%)' : 'white' }}>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: pkg.featured ? 'rgba(255,255,255,0.7)' : pkg.accent }}>{pkg.subtitle}</p>
                    <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'var(--font-playfair)', color: pkg.featured ? 'white' : '#3C3C3C' }}>{pkg.name}</h2>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs px-3 py-1 rounded-full" style={{ background: pkg.featured ? 'rgba(255,255,255,0.2)' : 'rgba(191,133,133,0.1)', color: pkg.featured ? 'rgba(255,255,255,0.9)' : '#9B6B6B' }}>
                        🕐 {pkg.availability}
                      </span>
                    </div>
                    <p className="text-sm mb-6 leading-relaxed" style={{ color: pkg.featured ? 'rgba(255,255,255,0.85)' : '#6b5b5b' }}>{pkg.description}</p>
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: pkg.featured ? 'rgba(255,255,255,0.6)' : '#9B6B6B' }}>Co je zahrnuto:</p>
                    <ul className="space-y-2.5 mb-8">
                      {pkg.features.map((f) => (
                        <li key={f.label} className="flex items-start gap-3 text-sm">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                            style={{ background: pkg.featured ? 'rgba(255,255,255,0.25)' : 'rgba(191,133,133,0.15)', color: pkg.featured ? 'white' : '#9B6B6B' }}>✓</span>
                          <span>
                            <span className="font-medium" style={{ color: pkg.featured ? 'white' : '#3C3C3C' }}>{f.label}</span>
                            {f.detail && <span className="block text-xs mt-0.5" style={{ color: pkg.featured ? 'rgba(255,255,255,0.65)' : '#9a8080' }}>{f.detail}</span>}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/rezervace"
                    className={pkg.featured ? 'btn-gold text-center' : 'btn-primary text-center'}
                    style={!pkg.featured ? { background: `linear-gradient(135deg, ${pkg.accent}, ${pkg.accent}cc)` } : {}}
                  >
                    {pkg.id === 'vip' ? 'Nezávazně poptat' : `Objednat ${pkg.name}`}
                  </Link>
                </div>

              </div>
            </AnimatedSection>
          ))}
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
            <div className="soft-card overflow-x-auto">
              <table className="w-full text-sm" style={{ minWidth: 700 }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid rgba(191,133,133,0.2)' }}>
                    <th className="text-left p-4 font-semibold" style={{ color: '#3C3C3C', minWidth: 180 }}>Služba</th>
                    {[
                      { name: 'Last Minute', price: '6 990 Kč' },
                      { name: 'Basic', price: '15 990 Kč' },
                      { name: 'Standard', price: '19 990 Kč', featured: true },
                      { name: 'Comfort', price: '25 990 Kč' },
                      { name: 'VIP Queen', price: 'Individuálně' },
                    ].map(col => (
                      <th key={col.name} className="text-center p-4" style={{ minWidth: 110 }}>
                        <div className={`rounded-xl py-2 px-1 ${col.featured ? 'text-white' : ''}`}
                          style={{ background: col.featured ? 'linear-gradient(135deg, #BF8585, #9B6B6B)' : 'transparent' }}>
                          <div className="font-bold text-sm" style={{ color: col.featured ? 'white' : '#3C3C3C' }}>{col.name}</div>
                          <div className="text-xs mt-0.5" style={{ color: col.featured ? 'rgba(255,255,255,0.8)' : '#9B6B6B' }}>{col.price}</div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.feature} style={{ borderTop: '1px solid rgba(191,133,133,0.1)', background: i % 2 === 0 ? 'transparent' : 'rgba(191,133,133,0.03)' }}>
                      <td className="p-4 font-medium" style={{ color: '#5a5a5a' }}>{row.feature}</td>
                      {[row.lastMinute, row.basic, row.standard, row.comfort, row.vip].map((val, j) => (
                        <td key={j} className="p-4 text-center text-xs" style={{
                          color: val === '–' ? '#d0c0c0' : val.includes('✓') ? '#9B6B6B' : '#3C3C3C',
                          fontWeight: val.includes('✓') ? 700 : 400,
                          background: j === 2 ? 'rgba(191,133,133,0.05)' : 'transparent',
                        }}>{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Notes */}
      <section className="py-16 px-4" style={{ background: '#F7F0EC' }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="soft-card p-8">
              <h3 className="text-xl font-bold mb-5" style={{ fontFamily: 'var(--font-playfair)', color: '#3C3C3C' }}>📌 Důležité informace</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm" style={{ color: '#5a5a5a', lineHeight: 1.7 }}>
                <div className="space-y-3">
                  <p>✦ <strong>Bezplatná konzultace</strong> je vždy prvním krokem – setkáme se osobně nebo online, abychom si sedly.</p>
                  <p>✦ <strong>Kapacita je omezená</strong> – doprovázím max. 6–8 rodin ročně, abys cítila, že jsi pro mě opravdu důležitá.</p>
                  <p>✦ <strong>Cestovné</strong> (pokud není zahrnuto) se počítá od mé adresy v Praze 4 – 10 Kč/km.</p>
                </div>
                <div className="space-y-3">
                  <p>✦ <strong>Záloha 30 %</strong> se platí při podpisu smlouvy. Zbytek 14 dní před termínem porodu.</p>
                  <p>✦ <strong>Zpracování placenty a další doplňky</strong> lze přidat k libovolnému balíčku dle ceníku.</p>
                  <p>✦ <strong>Nevíš si rady s výběrem?</strong> Pošli mi zprávu nebo zavolej – ráda ti poradím.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #BF8585 0%, #9B6B6B 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(201,169,110,0.2) 0%, transparent 60%)' }} />
        <AnimatedSection className="max-w-3xl mx-auto text-center relative" direction="fade">
          <div className="text-5xl mb-6">💬</div>
          <h2 className="section-heading text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>Nevíš si rady s výběrem?</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.88)', lineHeight: 1.75 }}>
            To je naprosto v pořádku! Domluv si bezplatnou konzultaci a společně si promluvíme o tom, co pro tebe dává největší smysl.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/rezervace" className="btn-gold pulse-glow">Konzultace zdarma</Link>
            <Link href="/kontakt" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}>Napsat Kristýně</Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
