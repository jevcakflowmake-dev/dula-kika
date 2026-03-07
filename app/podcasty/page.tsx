import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Podcasty',
  description: 'Poslechni si podcasty duly Kiky o porodu, těhotenství a mateřství.',
};

const podcasts = [
  {
    id: 1,
    title: 'Co vlastně dula dělá?',
    episode: 'Epizoda 1',
    duration: '32 min',
    date: '15. ledna 2026',
    description: 'V první epizodě vysvětluji, co to vlastně znamená být dulou, jak se liší od porodní asistentky a jak vypadá typická spolupráce s rodinou.',
    tags: ['Úvod', 'Co je dula'],
    emoji: '🎙️',
  },
  {
    id: 2,
    title: 'Strach z porodu – jak s ním pracovat',
    episode: 'Epizoda 2',
    duration: '45 min',
    date: '29. ledna 2026',
    description: 'Strach z porodu je naprosto normální. V této epizodě si povídáme o tom, odkud strach pramení, jak ho zpracovat a jak si vytvořit vztah důvěry ke svému tělu.',
    tags: ['Psychologie', 'Strach'],
    emoji: '💛',
  },
  {
    id: 3,
    title: 'Role partnera při porodu',
    episode: 'Epizoda 3',
    duration: '38 min',
    date: '12. února 2026',
    description: 'Partner u porodu – pomocník nebo pozorovatel? V epizodě rozebírám konkrétní způsoby, jak může partner aktivně pomoci a jak se na tuto roli připravit.',
    tags: ['Partner', 'Příprava'],
    emoji: '💑',
  },
  {
    id: 4,
    title: 'Kojení – první dny s miminkem',
    episode: 'Epizoda 4',
    duration: '41 min',
    date: '26. února 2026',
    description: 'Kojení je přirozené, ale ne vždy snadné. Povídáme si o nejčastějších problémech prvních dní, mýtech o kojení a o tom, kdy vyhledat odbornou pomoc.',
    tags: ['Kojení', 'Poporodní péče'],
    emoji: '🤱',
  },
  {
    id: 5,
    title: 'Porodní plán – proč a jak ho napsat',
    episode: 'Epizoda 5',
    duration: '29 min',
    date: '5. března 2026',
    description: 'Porodní plán není jen kousek papíru. Je to nástroj komunikace s porodnicí. Vysvětlím, co do něj patří, co ne a jak ho napsat, aby byl skutečně k užitku.',
    tags: ['Porodní plán', 'Příprava'],
    emoji: '📋',
  },
  {
    id: 6,
    title: 'Placenta – co s ní a proč?',
    episode: 'Epizoda 6',
    duration: '35 min',
    date: '19. března 2026',
    description: 'Zpracování placenty – mýtus nebo smysluplná praktika? V epizodě vysvětluji různé způsoby zpracování placenty, co o tom říká věda a co moje zkušenosti.',
    tags: ['Placenta', 'Poporodní'],
    emoji: '🌿',
  },
];

const platforms = [
  { name: 'Spotify', icon: '🎵', url: '#', color: '#1DB954' },
  { name: 'Apple Podcasts', icon: '🎧', url: '#', color: '#FC3C44' },
  { name: 'Google Podcasts', icon: '📻', url: '#', color: '#4285F4' },
  { name: 'YouTube', icon: '▶️', url: '#', color: '#FF0000' },
];

export default function PodcastyPage() {
  return (
    <div style={{ background: '#F7F0EC' }}>
      {/* Hero */}
      <section className="hero-gradient pt-28 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-10 right-10 pointer-events-none float-anim" style={{ width: 300, height: 300, background: 'radial-gradient(circle, rgba(191,133,133,0.15) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div className="max-w-4xl mx-auto text-center">
          <div className="badge mx-auto mb-6">🎙️ Podcasty</div>
          <h1 className="section-heading mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Podcast <span className="gradient-text">Dula Kika</span>
          </h1>
          <div className="section-divider" />
          <p className="text-lg mt-6 mb-8" style={{ color: '#6b5b5b', lineHeight: 1.75, maxWidth: 560, margin: '1.5rem auto 0' }}>
            Povídám o porodu, těhotenství, mateřství a všem, co k tomu patří. Upřímně, bez příkras a s trochou humoru.
          </p>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-12 px-4" style={{ background: '#F7F0EC' }}>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="soft-card p-6">
              <p className="text-center text-sm mb-5 font-semibold tracking-wider uppercase" style={{ color: '#BF8585' }}>Poslouchej na</p>
              <div className="flex flex-wrap justify-center gap-4">
                {platforms.map((p) => (
                  <a
                    key={p.name}
                    href={p.url}
                    className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all hover:scale-105"
                    style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}30` }}
                  >
                    <span>{p.icon}</span>
                    {p.name}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Episodes */}
      <section className="py-16 px-4" style={{ background: '#EDE3DB' }}>
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <div className="badge mx-auto mb-4">Epizody</div>
            <h2 className="section-heading" style={{ fontFamily: 'var(--font-playfair)' }}>Nejnovější <span className="gradient-text">epizody</span></h2>
            <div className="section-divider" />
          </AnimatedSection>

          <div className="space-y-5">
            {podcasts.map((ep, i) => (
              <AnimatedSection key={ep.id} delay={i * 60}>
                <div className="podcast-card p-6 flex flex-col sm:flex-row gap-5">
                  {/* Episode number/emoji */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 self-start"
                    style={{ background: 'linear-gradient(135deg, #F5EDED, #EDE3DB)' }}
                  >
                    {ep.emoji}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-semibold" style={{ color: '#BF8585' }}>{ep.episode}</span>
                      <span className="text-xs" style={{ color: '#c4b5b5' }}>•</span>
                      <span className="text-xs" style={{ color: '#9a8080' }}>{ep.date}</span>
                      <span className="text-xs" style={{ color: '#c4b5b5' }}>•</span>
                      <span className="text-xs" style={{ color: '#9a8080' }}>{ep.duration}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: '#3C3C3C', fontFamily: 'var(--font-playfair)' }}>{ep.title}</h3>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: '#6b5b5b' }}>{ep.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {ep.tags.map((tag) => (
                        <span key={tag} className="badge" style={{ fontSize: '0.72rem', padding: '3px 10px' }}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Play button */}
                  <div className="flex items-center self-center sm:self-start sm:mt-1 flex-shrink-0">
                    <button className="play-btn" aria-label={`Přehrát: ${ep.title}`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / notification */}
      <section className="py-20 px-4" style={{ background: '#F7F0EC' }}>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection direction="fade">
            <div className="soft-card p-10 text-center">
              <div className="text-5xl mb-5">🔔</div>
              <h2 className="font-bold text-2xl mb-4" style={{ fontFamily: 'var(--font-playfair)', color: '#3C3C3C' }}>Nechci přijít o novou epizodu</h2>
              <p className="text-sm mb-6" style={{ color: '#6b5b5b', lineHeight: 1.75 }}>
                Odebírej podcast na Spotify nebo Apple Podcasts a vždy budeš vědět, kdy vychází nová epizoda. Nebo mě sleduj na Instagramu, kde každou epizodu oznamuji.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://www.instagram.com/dula.kika_modernidula/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Sledovat na Instagramu
                </a>
                <Link href="/kontakt" className="btn-secondary">Napsat mi</Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Topic suggestions */}
      <section className="py-16 px-4" style={{ background: '#EDE3DB' }}>
        <AnimatedSection className="max-w-3xl mx-auto text-center" direction="fade">
          <h2 className="font-bold text-2xl mb-4" style={{ fontFamily: 'var(--font-playfair)', color: '#3C3C3C' }}>
            Máš téma, o kterém bych měla mluvit?
          </h2>
          <p className="text-sm mb-6" style={{ color: '#6b5b5b', lineHeight: 1.75 }}>
            Podcast dělám pro tebe – a tvoje otázky a témata jsou tím nejlepším zdrojem inspirace.
          </p>
          <Link href="/kontakt" className="btn-primary">Navrhnout téma</Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
