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
    <section className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`fade-in-section ${isVisible ? 'visible' : ''}`}>
          <div className="max-w-5xl mx-auto mb-10 text-center">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-3">
              {t('testimonials.title')}
            </h2>
            <p className="text-center text-muted-foreground mb-4">
              Experiencias de viajeros que confiaron en nosotros.
            </p>
            <div className="flex items-center gap-4 justify-center">
              <span className="h-px w-16 bg-white/20" />
              <div className="w-24 h-1 bg-gold rounded-full" />
              <span className="h-px w-16 bg-white/20" />
            </div>
          </div>

          <div className="max-w-4xl mx-auto relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-card p-6 md:p-10">
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
                      <Quote className="w-14 h-14 text-gold/70 mx-auto mb-6" />
                      <p className="font-body text-xl md:text-2xl text-white/90 italic mb-6 leading-relaxed">
                        "{language === 'en' ? testimonial.en : testimonial.es}"
                      </p>
                      <div className="flex items-center justify-center gap-2 text-white/80">
                        <span className="font-heading text-lg text-gold">{testimonial.author}</span>
                        <span className="text-white/50">•</span>
                        <span className="text-white/70">{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-gold transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-gold transition-colors"
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
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-gold w-6'
                      : 'bg-white/30 hover:bg-white/60 w-2'
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
