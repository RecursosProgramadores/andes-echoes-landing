import { MessageCircle, ChefHat, BookOpen, Utensils } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';

const WHATSAPP_LINK = 'https://wa.me/51949992147';
const ROSITA_IMAGE = 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/90/c0/fb.jpg';

export function RositaSchool() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    { icon: ChefHat, text: 'Live Cooking' },
    { icon: Utensils, text: 'Taste Tradition' },
    { icon: BookOpen, text: 'Take Recipes' },
  ];

  return (
    <section id="rosita" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center fade-in-section ${isVisible ? 'visible' : ''}`}
        >
          {/* Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-accent mb-6">
              {t('rosita.title')}
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              {t('rosita.text')}
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto md:mx-0">
              {features.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex flex-col items-center rounded-xl border border-gold/40 bg-white/5 backdrop-blur-sm shadow-card px-4 py-5"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <span className="text-sm font-semibold text-foreground text-center">{text}</span>
                </div>
              ))}
            </div>

            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="whatsapp-btn gap-2">
                <MessageCircle className="w-5 h-5" />
                {t('rosita.cta')}
              </Button>
            </a>
          </div>

          {/* Image */}
          <div className="relative order-1 md:order-2">
            <div className="relative overflow-hidden rounded-lg shadow-card">
              <img
                src={ROSITA_IMAGE}
                alt="Rosita Culinary School"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
