import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

export const Availability = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const content = {
    en: {
      title: 'Tour Availability',
      subtitle: 'Check our calendar and plan your adventure',
      description: 'View available dates for all our tours. Green slots are available, book now!',
      tips: [
        'Book at least 2 weeks in advance',
        'High season: May - October',
        'Flexible dates? Ask for deals!'
      ],
      calendarNote: 'Calendar shows real-time availability'
    },
    es: {
      title: 'Disponibilidad de Tours',
      subtitle: 'Consulta nuestro calendario y planifica tu aventura',
      description: 'Ve las fechas disponibles para todos nuestros tours. ¡Los espacios verdes están disponibles!',
      tips: [
        'Reserva con 2 semanas de anticipación',
        'Temporada alta: Mayo - Octubre',
        '¿Fechas flexibles? ¡Pregunta por ofertas!'
      ],
      calendarNote: 'El calendario muestra disponibilidad en tiempo real'
    }
  };

  const t = content[language];

  // Public Google Calendar embed URL - this is a placeholder
  // Replace with actual calendar ID: src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=America/Lima"
  const calendarEmbedUrl = "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLima&bgcolor=%23ffffff&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0&mode=MONTH";

  return (
    <section id="availability" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              {t.title}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar Embed */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-accent/20">
              <div className="bg-primary p-4">
                <h3 className="text-white font-display font-semibold flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {t.calendarNote}
                </h3>
              </div>
              <div className="aspect-[4/3] md:aspect-[16/10]">
                <iframe
                  src={calendarEmbedUrl}
                  style={{ border: 0 }}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  title="Tour Availability Calendar"
                  loading="lazy"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Tips Sidebar */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-gradient-to-br from-secondary/30 to-accent/10 rounded-2xl p-6 h-full border border-accent/20">
              <h3 className="text-xl font-display font-bold text-primary mb-6">
                {language === 'en' ? 'Booking Tips' : 'Consejos de Reserva'}
              </h3>
              
              <div className="space-y-4">
                {t.tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground/80">{tip}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/51949992147?text=Hola,%20quiero%20consultar%20disponibilidad%20de%20tours"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-6 rounded-lg text-center transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  {language === 'en' ? 'Check Availability' : 'Consultar Disponibilidad'}
                </a>
              </div>

              <p className="text-sm text-muted-foreground mt-4 text-center">
                {language === 'en' 
                  ? 'Response within 1 hour' 
                  : 'Respuesta en 1 hora'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
