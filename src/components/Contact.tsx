import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { MapPin, Phone, Mail, Facebook, Send, Calendar as CalendarIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { useToast } from '@/hooks/use-toast';

const tourOptions = [
  'City Tour',
  'Sacred Valley',
  'Machu Picchu',
  'Salkantay Trek',
  'Humantay Lake',
  'Rosita Cooking Class',
  'Other',
];

export function Contact() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const formattedRange = (() => {
    if (dateRange?.from && dateRange.to) {
      return `${format(dateRange.from, 'MMM d, yyyy')} - ${format(dateRange.to, 'MMM d, yyyy')}`;
    }
    if (dateRange?.from) {
      return format(dateRange.from, 'MMM d, yyyy');
    }
    return '';
  })();

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`fade-in-section ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-accent text-center mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-12" />

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card rounded-lg p-6 md:p-8 shadow-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">{t('contact.name')}</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="mt-1"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">{t('contact.email')}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dates">{t('contact.dates')}</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="mt-1 w-full justify-start text-left font-normal border-white/15 bg-black/30 hover:bg-black/40"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formattedRange ? formattedRange : 'Elige fechas'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-card border border-white/10 shadow-card" align="start">
                        <Calendar
                          initialFocus
                          mode="range"
                          selected={dateRange}
                          onSelect={setDateRange}
                          numberOfMonths={1}
                        />
                      </PopoverContent>
                    </Popover>
                    <input type="hidden" name="dates" value={formattedRange} />
                  </div>
                  <div>
                    <Label htmlFor="people">{t('contact.people')}</Label>
                    <Input
                      id="people"
                      name="people"
                      type="number"
                      min="1"
                      className="mt-1"
                      placeholder="2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="tour">{t('contact.tour')}</Label>
                  <Select name="tour">
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a tour" />
                    </SelectTrigger>
                    <SelectContent>
                      {tourOptions.map((tour) => (
                        <SelectItem key={tour} value={tour.toLowerCase()}>
                          {tour}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 gap-2"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Sending...' : t('contact.send')}
                </Button>
              </form>
            </div>

            {/* Map & Info */}
            <div className="space-y-6">
              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden shadow-card h-64 lg:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.8!2d-71.97!3d-13.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDMxJzQ4LjAiUyA3McKwNTgnMTIuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>

              {/* Contact Info */}
              <div className="bg-card rounded-lg p-6 shadow-card space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gold mt-1" />
                  <div>
                    <p className="font-medium">{t('contact.address')}</p>
                    <p className="text-muted-foreground">Tiobamba n15, Santiago, Cusco, Peru</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-gold" />
                  <a 
                    href="tel:+51949992147" 
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    +51 949 992 147
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-gold" />
                  <a 
                    href="mailto:flyup.sale@gmail.com"
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    flyup.sale@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Facebook className="w-5 h-5 text-gold" />
                  <a 
                    href="https://www.facebook.com/share/1CKeRWdJ92/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    Facebook Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
