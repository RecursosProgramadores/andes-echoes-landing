import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const hotelData = {
  '5star': [
    { name: 'JW Marriott El Convento', url: 'https://www.marriott.com/hotels/travel/cuzmc-jw-marriott-el-convento-cusco/' },
    { name: 'Palacio del Inka', url: 'https://www.marriott.com/hotels/travel/cuzlc-palacio-del-inka-a-luxury-collection-hotel-cusco/' },
    { name: 'Belmond Monasterio', url: 'https://www.belmond.com/hotels/south-america/peru/cusco/belmond-hotel-monasterio/' },
    { name: 'Inkaterra La Casona', url: 'https://www.inkaterra.com/inkaterra-la-casona/' },
  ],
  '4star': [
    { name: 'Antigua Casona San Blas', url: 'https://www.antiguacasonasanblas.com/' },
    { name: 'Novotel Cusco', url: 'https://all.accor.com/hotel/3256/index.en.shtml' },
    { name: 'Sonesta Hotel Cusco', url: 'https://www.sonesta.com/sonesta-hotels-resorts/peru/cusco/sonesta-hotel-cusco/' },
  ],
  '3star': [
    { name: 'LP Los Portales', url: 'https://www.losportaleshoteles.com.pe/en/hotel/cusco' },
    { name: 'Tierra Viva Cusco Centro', url: 'https://www.tierravivahoteles.com/en/hoteles/tierra-viva-cusco-centro' },
  ],
};

export function Hotels() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const renderStars = (count: number) => (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
      ))}
    </div>
  );

  return (
    <section id="hotels" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`fade-in-section ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-accent text-center mb-4">
            {t('hotels.title')}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-12" />

          <Tabs defaultValue="5star" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="5star" className="gap-2">
                {renderStars(5)}
              </TabsTrigger>
              <TabsTrigger value="4star" className="gap-2">
                {renderStars(4)}
              </TabsTrigger>
              <TabsTrigger value="3star" className="gap-2">
                {renderStars(3)}
              </TabsTrigger>
            </TabsList>

            {Object.entries(hotelData).map(([key, hotels]) => (
              <TabsContent key={key} value={key}>
                <div className="grid gap-4">
                  {hotels.map((hotel) => (
                    <a
                      key={hotel.name}
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-card rounded-lg shadow-card hover:shadow-card-hover transition-shadow"
                    >
                      <span className="font-medium text-foreground">{hotel.name}</span>
                      <span className="text-gold text-sm">View →</span>
                    </a>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
