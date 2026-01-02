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
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="inline-block bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 mb-6 animate-fade-in">
          <p className="font-heading text-lg md:text-xl lg:text-2xl text-black font-light tracking-widest">
            CUSCO TURISMO
          </p>
        </div>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl text-white mb-8 animate-fade-in">
          {t('hero.tagline')}
        </h1>
        <a 
          href={WHATSAPP_LINK} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block animate-fade-in"
          style={{ animationDelay: '0.2s' }}
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
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
