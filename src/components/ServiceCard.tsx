import { useState } from 'react';
import { MessageCircle, Images, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

interface ServiceCardProps {
  titleKey: string;
  descKey: string;
  image: string;
  price?: string;
  galleryImages?: string[];
}

const WHATSAPP_LINK = 'https://wa.me/51949992147';

export function ServiceCard({ titleKey, descKey, image, price, galleryImages = [] }: ServiceCardProps) {
  const { t } = useLanguage();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(`Hi! I'm interested in the ${t(titleKey)} tour.`);

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
                {t('services.whatsapp')}
              </Button>
            </a>
            {galleryImages.length > 0 && (
              <Button
                variant="outline"
                onClick={() => setIsGalleryOpen(true)}
                className="gap-2 text-sm border-gold text-gold hover:bg-gold hover:text-gold-foreground"
              >
                <Images className="w-4 h-4" />
                {t('services.gallery')}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <DialogTitle className="sr-only">{t(titleKey)} Gallery</DialogTitle>
          <div className="relative">
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
              {galleryImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${t(titleKey)} ${idx + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
