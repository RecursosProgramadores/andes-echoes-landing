import { useEffect, useState } from 'react';
import { MessageCircle, Images, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

interface ServiceCardProps {
  titleKey: string;
  descKey: string;
  image: string;
  price?: string;
  galleryImages?: string[];
  itinerary?: string;
}

const WHATSAPP_LINK = 'https://wa.me/51949992147';

export function ServiceCard({ titleKey, descKey, image, price, galleryImages = [], itinerary }: ServiceCardProps) {
  const { t } = useLanguage();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const whatsappMessage = encodeURIComponent(`Hi! I'm interested in the ${t(titleKey)} tour.`);

  useEffect(() => {
    if (!isGalleryOpen) {
      setCurrentIndex(0);
    }
  }, [isGalleryOpen]);

  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="group bg-card rounded-lg overflow-hidden shadow-card card-hover">
        {/* Image */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <img
            src={image}
            alt={t(titleKey)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          {price && (
            <div className="absolute top-4 right-4 bg-gold text-gold-foreground px-3 py-1 rounded-full text-sm font-semibold">
              {price}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-heading text-xl text-accent mb-2">{t(titleKey)}</h3>
          <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
            {t(descKey)}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2">
            <a
              href={`${WHATSAPP_LINK}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full whatsapp-btn gap-2 text-sm">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
            {galleryImages.length > 0 && (
              <Button
                variant="outline"
                onClick={() => setIsGalleryOpen(true)}
                className="gap-2 text-sm border-gold text-gold hover:bg-gold hover:text-gold-foreground"
              >
                <Images className="w-4 h-4" />
                Tours
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <DialogTitle className="sr-only">{t(titleKey)} Tours</DialogTitle>
          <div className="relative bg-black">
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative w-full h-[320px] md:h-[460px] flex items-center justify-center bg-black">
                {galleryImages.length > 0 && (
                  <img
                    key={currentIndex}
                    src={galleryImages[currentIndex]}
                    alt={`${t(titleKey)} ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}
                {galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={showPrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/70 text-foreground p-2 rounded-full hover:bg-background"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={showNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/70 text-foreground p-2 rounded-full hover:bg-background"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                      {galleryImages.map((_, idx) => (
                        <span
                          key={idx}
                          className={`h-2 w-2 rounded-full ${
                            idx === currentIndex ? 'bg-gold' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              <div className="p-6 md:p-8 bg-background text-foreground max-h-[460px] overflow-y-auto">
                <h3 className="font-heading text-2xl text-accent mb-3">{t(titleKey)}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t(descKey)}</p>
                {itinerary && itinerary.trim() && (
                  <div className="space-y-3 text-sm leading-relaxed text-foreground/90 whitespace-pre-line">
                    {itinerary}
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
