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

const tierCopy: Record<string, string> = {
  '5star': 'Lujo clásico y servicio premium en casonas y conventos históricos.',
  '4star': 'Confort moderno con ubicación céntrica y excelente relación valor.',
  '3star': 'Opciones prácticas y cómodas para viajeros exploradores.',
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
    <section id="hotels" className="relative py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`fade-in-section ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-accent text-center mb-3">
            {t('hotels.title')}
          </h2>
          <p className="text-center text-muted-foreground mb-6">
            Hoteles recomendados en Cusco, curados por categoría para que elijas tu estilo de viaje.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto mb-10" />

          <div className="max-w-5xl mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-card p-6 lg:p-8">
            <Tabs defaultValue="5star">
              <TabsList className="grid w-full grid-cols-3 mb-6 bg-white/5 border border-white/10 rounded-lg">
                <TabsTrigger value="5star" className="gap-2">
                  {renderStars(5)}
                  <span className="text-sm">5★</span>
                </TabsTrigger>
                <TabsTrigger value="4star" className="gap-2">
                  {renderStars(4)}
                  <span className="text-sm">4★</span>
                </TabsTrigger>
                <TabsTrigger value="3star" className="gap-2">
                  {renderStars(3)}
                  <span className="text-sm">3★</span>
                </TabsTrigger>
              </TabsList>

              {Object.entries(hotelData).map(([key, hotels]) => (
                <TabsContent key={key} value={key}>
                  <div className="mb-4 text-sm text-muted-foreground">
                    {tierCopy[key]}
                  </div>
                  <div className="grid gap-4">
                    {hotels.map((hotel) => (
                      <a
                        key={hotel.name}
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 rounded-lg border border-white/10 bg-black/40 shadow-card hover:border-gold/60 hover:shadow-card-hover transition"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                            <Star className="w-4 h-4 text-gold" />
                          </div>
                          <span className="font-semibold text-white">{hotel.name}</span>
                        </div>
                        <span className="text-gold text-sm font-semibold">View →</span>
                      </a>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
      <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-12 h-24 bg-gradient-to-b from-black via-black to-transparent" />
    </section>
  );
}
