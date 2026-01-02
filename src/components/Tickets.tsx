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
        <div ref={ref} className={`max-w-3xl mx-auto text-center fade-in-section ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-6">
            <Ticket className="w-8 h-8 text-gold" />
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-accent mb-6">
            {t('tickets.title')}
          </h2>
          
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
            {t('tickets.text')}
          </p>

          {/* Ticket Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {ticketLinks.map(({ name, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground hover:bg-gold hover:text-gold-foreground transition-colors"
              >
                {name}
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>

          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="whatsapp-btn gap-2">
              <MessageCircle className="w-5 h-5" />
              {t('tickets.help')}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
