import type { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Ochrana soukromí',
  description: 'Zásady ochrany osobních údajů – Dula Kika, Kristýna Pokorná.',
};

export default function OchranaPage() {
  return (
    <div style={{ background: '#F7F0EC' }}>
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="badge mb-6">⚖️ Právní informace</div>
            <h1 className="section-heading mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>Ochrana soukromí</h1>
            <div className="section-divider mb-8" style={{ margin: '0 0 2rem 0' }} />
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="soft-card p-8 prose-kika space-y-6">
              <div>
                <h2 className="font-bold text-xl mb-3" style={{ fontFamily: 'var(--font-playfair)', color: '#3C3C3C' }}>1. Správce osobních údajů</h2>
                <p style={{ color: '#5a5a5a', lineHeight: 1.8 }}>Správcem osobních údajů je Kristýna Pokorná, DiS., IČO: 23731401, se sídlem Ružinovská 1162/10, Praha 4 – Krč, 14200. Kontakt: dula.kikakoj@gmail.com.</p>
              </div>
              <div>
                <h2 className="font-bold text-xl mb-3" style={{ fontFamily: 'var(--font-playfair)', color: '#3C3C3C' }}>2. Jaké údaje zpracováváme</h2>
                <ul className="space-y-2" style={{ color: '#5a5a5a' }}>
                  {['Jméno a příjmení', 'E-mailová adresa', 'Telefonní číslo', 'Informace o těhotenství (předpokládaný termín porodu)', 'Obsah vzájemné komunikace'].map(item => (
                    <li key={item} className="flex gap-2"><span style={{ color: '#BF8585' }}>•</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-bold text-xl mb-3" style={{ fontFamily: 'var(--font-playfair)', color: '#3C3C3C' }}>3. Účel zpracování</h2>
                <p style={{ color: '#5a5a5a', lineHeight: 1.8 }}>Osobní údaje zpracováváme pro účely: vyřízení poptávky a uzavření smlouvy o poskytování dulských služeb, plnění zákonných povinností (účetnictví), a komunikace s klientkami.</p>
              </div>
              <div>
                <h2 className="font-bold text-xl mb-3" style={{ fontFamily: 'var(--font-playfair)', color: '#3C3C3C' }}>4. Doba uchovávání</h2>
                <p style={{ color: '#5a5a5a', lineHeight: 1.8 }}>Osobní údaje uchováváme po dobu 3 let od ukončení spolupráce, nebo po dobu vyžadovanou právními předpisy (účetní doklady 10 let).</p>
              </div>
              <div>
                <h2 className="font-bold text-xl mb-3" style={{ fontFamily: 'var(--font-playfair)', color: '#3C3C3C' }}>5. Vaše práva</h2>
                <p style={{ color: '#5a5a5a', lineHeight: 1.8, marginBottom: '0.75rem' }}>Máte právo na přístup ke svým osobním údajům, jejich opravu nebo výmaz, omezení zpracování, přenositelnost údajů a právo podat stížnost u Úřadu pro ochranu osobních údajů.</p>
                <p style={{ color: '#5a5a5a', lineHeight: 1.8 }}>Žádost o uplatnění práv posílejte na: <a href="mailto:dula.kikakoj@gmail.com" style={{ color: '#BF8585' }}>dula.kikakoj@gmail.com</a></p>
              </div>
              <div>
                <h2 className="font-bold text-xl mb-3" style={{ fontFamily: 'var(--font-playfair)', color: '#3C3C3C' }}>6. Cookies</h2>
                <p style={{ color: '#5a5a5a', lineHeight: 1.8 }}>Tento web používá pouze technicky nezbytné cookies pro správné fungování webu. Nepoužíváme analytické ani marketingové cookies třetích stran.</p>
              </div>
              <div style={{ padding: '16px', background: 'rgba(191,133,133,0.07)', borderRadius: '12px' }}>
                <p className="text-sm" style={{ color: '#7a6a6a' }}>Poslední aktualizace: března 2026</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
