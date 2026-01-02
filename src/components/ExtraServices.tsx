import { MessageCircle, Home, Car } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';

const WHATSAPP_LINK = 'https://wa.me/51949992147';

const extras = [
  {
    key: 'extras.airbnb',
    icon: Home,
    image: 'https://a0.muscache.com/im/pictures/895d4029-aca6-4af0-91f5-38c12e0ed0ec.jpg',
  },
  {
    key: 'extras.transport',
    icon: Car,
    image: 'https://cuscotransport.com/wp-content/uploads/2023/04/apt-or-hotel-transfer-768x472.webp',
  },
];

export function ExtraServices() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`fade-in-section ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-accent text-center mb-4">
            {t('extras.title')}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-12" />

          <div className="max-w-5xl mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-card p-6 lg:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {extras.map(({ key, icon: Icon, image }) => (
                <div
                  key={key}
                  className="group relative overflow-hidden rounded-lg shadow-card card-hover"
                >
                  <img
                    src={image}
                    alt={t(key)}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-6 h-6 text-gold" />
                      <h3 className="font-heading text-xl text-white">{t(key)}</h3>
                    </div>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="whatsapp-btn gap-2">
                        <MessageCircle className="w-4 h-4" />
                        {t('services.quote')}
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
