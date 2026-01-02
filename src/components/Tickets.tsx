import { Ticket, MessageCircle, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';

const WHATSAPP_LINK = 'https://wa.me/51949992147';

const ticketLinks = [
  { name: 'Machu Picchu', url: 'https://tuboleto.cultura.pe/llaqta_machupicchu' },
  { name: 'BTC (Boleto Turístico)', url: 'https://cosituc.gob.pe/' },
];

export function Tickets() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`fade-in-section ${isVisible ? 'visible' : ''}`}
        >
          <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl shadow-card p-8 lg:p-10">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4">
                <Ticket className="w-8 h-8 text-gold" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-accent mb-4">
                Entradas y Asesoría
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                Si bien nosotros ofrecemos los tours, los visitantes deben adquirir algunas entradas por su cuenta. Te asesoramos y, si prefieres, gestionamos la compra con un costo de servicio.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {[
                {
                  title: 'Comprar online',
                  body: 'Asegura tu ingreso antes de viajar: elige fecha y horario en la web oficial.',
                },
                {
                  title: 'Al llegar a Cusco',
                  body: 'Compra presencial, sujeta a disponibilidad en taquilla local.',
                },
                {
                  title: 'Nosotros gestionamos',
                  body: 'Tramitamos por ti con un costo de servicio adicional y confirmamos tus horarios.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-black/40 p-5 shadow-card"
                >
                  <h3 className="font-heading text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-10">
              <div className="rounded-xl border border-white/10 bg-black/40 p-5 shadow-card">
                <h4 className="font-heading text-lg text-white mb-2">Machu Picchu</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Compra tu Boleto Machu Picchu en el sitio oficial para asegurar cupo y horario.
                </p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={ticketLinks[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 text-sm text-white hover:bg-gold hover:text-gold-foreground transition-colors"
                  >
                    {ticketLinks[0].name}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/40 p-5 shadow-card">
                <h4 className="font-heading text-lg text-white mb-2">BTC (Boleto Turístico)</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Acceso a museos e iglesias. Indispensable para circuitos de Valle Sagrado y City Tour.
                </p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={ticketLinks[1].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 text-sm text-white hover:bg-gold hover:text-gold-foreground transition-colors"
                  >
                    {ticketLinks[1].name}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="whatsapp-btn gap-2">
                  <MessageCircle className="w-5 h-5" />
                  ¿Necesitas ayuda?
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
