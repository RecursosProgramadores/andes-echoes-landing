import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const WHATSAPP_LINK = 'https://wa.me/51949992147';
const HERO_IMAGE = 'https://images.pexels.com/photos/29468443/pexels-photo-29468443/free-photo-of-scenic-view-of-ollantaytambo-in-cusco-peru.jpeg';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center parallax"
      style={{ backgroundImage: `url(${HERO_IMAGE})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl text-primary-foreground mb-4 animate-fade-in">
          {t('hero.tagline')}
        </h1>
        <p className="font-body text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {t('hero.subtitle')}
        </p>
        <a 
          href={WHATSAPP_LINK} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <Button 
            size="lg" 
            className="whatsapp-btn text-lg px-8 py-6 rounded-full gap-3 shadow-gold"
          >
            <MessageCircle className="w-6 h-6" />
            {t('hero.cta')}
          </Button>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
