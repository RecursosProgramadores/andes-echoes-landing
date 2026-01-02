import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ABOUT_IMAGE = 'https://www.geoex.com/_next/image?url=https%3A%2F%2Fkxn3vdktxmez55pl.public.blob.vercel-storage.com%2FHero-machupicchu-peru-GettyImages-1339071089-tobiasjo-24.jpg&w=1920&q=75';

export function About() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center fade-in-section ${isVisible ? 'visible' : ''}`}
        >
          {/* Image */}
          <div className="relative overflow-hidden rounded-lg shadow-card">
            <img
              src={ABOUT_IMAGE}
              alt="Family at Machu Picchu"
              className="w-full h-[400px] lg:h-[500px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="text-center md:text-left">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-accent mb-6">
              {t('about.title')}
            </h2>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              Nuestra Historia
              Somos una familia cusqueña dedicada a compartir la magia de los Andes con el mundo. Con más de 20 años de experiencia, creamos itinerarios personalizados que van más allá del turismo convencional, conectándote con la verdadera esencia de nuestra cultura, historia y gente.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-foreground/5 border border-gold/40 rounded-2xl px-6 py-5 shadow-card text-center">
                <span className="font-heading text-4xl md:text-5xl text-gold">32</span>
                <p className="text-sm uppercase tracking-wide text-muted-foreground">Years</p>
              </div>
              <div className="bg-foreground/5 border border-gold/40 rounded-2xl px-6 py-5 shadow-card text-center">
                <span className="font-heading text-4xl md:text-5xl text-gold">1000+</span>
                <p className="text-sm uppercase tracking-wide text-muted-foreground">Tours</p>
              </div>
              <div className="bg-foreground/5 border border-gold/40 rounded-2xl px-6 py-5 shadow-card text-center">
                <span className="font-heading text-4xl md:text-5xl text-gold">5★</span>
                <p className="text-sm uppercase tracking-wide text-muted-foreground">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
