import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Calendar, Clock, CheckCircle, Sparkles } from 'lucide-react';

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
    <section id="availability" className="relative overflow-hidden py-24 bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(248,198,99,0.08),_transparent_45%)]" aria-hidden />
      <div className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" aria-hidden />
      <div className="absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-gold/6 blur-3xl" aria-hidden />

      <div className="container relative mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 mb-4">
            <Sparkles className="w-4 h-4 text-gold" />
            {language === 'en' ? 'Live slots updated' : 'Cupos en vivo actualizados'}
          </div>
          <div className="flex items-center justify-center gap-3 mb-3">
            <Calendar className="w-9 h-9 text-gold" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white">
              {t.title}
            </h2>
          </div>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs md:text-sm text-white/70">
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">{language === 'en' ? 'Peak season: May–Oct' : 'Temporada alta: May–Oct'}</span>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">{language === 'en' ? 'Ask for flexible dates' : 'Pregunta por fechas flexibles'}</span>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">{language === 'en' ? 'Response < 1 hour' : 'Respuesta < 1 hora'}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Calendar Embed */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gold/20 via-gold/10 to-transparent border-b border-white/10">
                <div className="flex items-center gap-3 text-white">
                  <Clock className="w-5 h-5 text-gold" />
                  <h3 className="font-semibold">{t.calendarNote}</h3>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-white/70">GMT-5</span>
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
            <div className="relative h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 via-white/4 to-black/20 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-0 rounded-3xl border border-white/5" aria-hidden />
              <h3 className="text-xl font-heading font-bold text-white mb-6">
                {language === 'en' ? 'Booking Tips' : 'Consejos de Reserva'}
              </h3>
              
              <div className="space-y-4">
                {t.tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <p className="text-white/80">{tip}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/51949992147?text=Hola,%20quiero%20consultar%20disponibilidad%20de%20tours"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full bg-gradient-to-r from-gold via-amber-300 to-gold text-black font-semibold py-3 px-6 text-center shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-amber-500/30"
                >
                  {language === 'en' ? 'Check Availability' : 'Consultar Disponibilidad'}
                </a>
              </div>

              <p className="text-sm text-white/60 mt-4 text-center">
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
