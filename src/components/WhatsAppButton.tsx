import { MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/51949992147';

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
