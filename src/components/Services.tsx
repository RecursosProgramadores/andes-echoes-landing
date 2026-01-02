import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    titleKey: 'services.cityTour.title',
    descKey: 'services.cityTour.desc',
    image: 'https://freewalkingtoursperu.com/wp-content/uploads/2025/10/City_tour_Cusco_4_ruinas_de_Sacsayhuaman_1-1.webp',
    price: '$50/pp',
    galleryImages: [
      'https://freewalkingtoursperu.com/wp-content/uploads/2025/10/City_tour_Cusco_4_ruinas_de_Sacsayhuaman_1-1.webp',
      'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800',
    ],
  },
  {
    titleKey: 'services.valleSagrado.title',
    descKey: 'services.valleSagrado.desc',
    image: 'https://www.libertyperutravel.com/valle-sagrado-de-los-incas/pisaq-panoramico-valle-sagrado/',
    price: '$150/pp',
    galleryImages: [
      'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800',
      'https://images.unsplash.com/photo-1548430395-ec39eaf2aa1a?w=800',
    ],
  },
  {
    titleKey: 'services.machuPicchu.title',
    descKey: 'services.machuPicchu.desc',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800',
    price: '$150',
    galleryImages: [
      'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800',
      'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800',
    ],
  },
  {
    titleKey: 'services.salkantay.title',
    descKey: 'services.salkantay.desc',
    image: 'https://www.salkantaytrekking.com/blog/wp-content/uploads/2020/11/Salkantay-Pass.jpg',
    galleryImages: [
      'https://www.salkantaytrekking.com/blog/wp-content/uploads/2020/11/Salkantay-Pass.jpg',
    ],
  },
  {
    titleKey: 'services.humantay.title',
    descKey: 'services.humantay.desc',
    image: 'https://www.cusconative.com/wp-content/uploads/2020/02/humantay-header-c.jpg',
    galleryImages: [
      'https://www.cusconative.com/wp-content/uploads/2020/02/humantay-header-c.jpg',
    ],
  },
  {
    titleKey: 'services.quillabamba.title',
    descKey: 'services.quillabamba.desc',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800',
    galleryImages: [],
  },
  {
    titleKey: 'services.vilcabamba.title',
    descKey: 'services.vilcabamba.desc',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Espiritu_Pampa_Archaeological_site_-_overgrown_house.jpg',
    galleryImages: [],
  },
  {
    titleKey: 'services.cocalmayo.title',
    descKey: 'services.cocalmayo.desc',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ac/0b/10/banos-termales-de-cocalmayo.jpg',
    galleryImages: [],
  },
];

export function Services() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`fade-in-section ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-accent text-center mb-4">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.titleKey}
                {...service}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
