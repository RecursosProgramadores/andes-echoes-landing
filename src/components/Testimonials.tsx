import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    en: "An unforgettable family experience – clean, authentic, and magical!",
    es: "¡Una experiencia familiar inolvidable – limpia, auténtica y mágica!",
    author: "John D.",
    location: "USA",
  },
  {
    en: "The best guides we've ever had. True local experts with genuine warmth.",
    es: "Los mejores guías que hemos tenido. Verdaderos expertos locales con calidez genuina.",
    author: "Marie L.",
    location: "France",
  },
  {
    en: "Private tours made all the difference. Personalized and professional.",
    es: "Los tours privados hicieron toda la diferencia. Personalizado y profesional.",
    author: "Hans M.",
    location: "Germany",
  },
  {
    en: "Rosita's cooking class was the highlight of our trip! Authentic flavors.",
    es: "¡La clase de cocina de Rosita fue lo mejor del viaje! Sabores auténticos.",
    author: "Sarah K.",
    location: "UK",
  },
  {
    en: "32 years of experience shows in every detail. Highly recommend!",
    es: "32 años de experiencia se nota en cada detalle. ¡Muy recomendado!",
    author: "Carlos R.",
    location: "Spain",
  },
];

export function Testimonials() {
  const { language, t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setCurrentIndex(index);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-accent">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`fade-in-section ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-accent-foreground text-center mb-4">
            {t('testimonials.title')}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-12" />

          <div className="max-w-3xl mx-auto relative">
            {/* Carousel */}
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="text-center">
                      <Quote className="w-12 h-12 text-gold/50 mx-auto mb-6" />
                      <p className="font-body text-xl md:text-2xl text-accent-foreground/90 italic mb-6 leading-relaxed">
                        "{language === 'en' ? testimonial.en : testimonial.es}"
                      </p>
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-heading text-lg text-gold">{testimonial.author}</span>
                        <span className="text-accent-foreground/60">•</span>
                        <span className="text-accent-foreground/60">{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-accent-foreground/60 hover:text-gold transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-accent-foreground/60 hover:text-gold transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-gold w-6'
                      : 'bg-accent-foreground/30 hover:bg-accent-foreground/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
