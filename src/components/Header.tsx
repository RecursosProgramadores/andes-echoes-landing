import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const WHATSAPP_LINK = 'https://wa.me/51949992147';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.rosita', href: '#rosita' },
    { key: 'nav.hotels', href: '#hotels' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <span className="font-heading text-xl md:text-2xl font-semibold text-gold">
              Recuerdos Eternos
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Right side: Language + CTA */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-muted rounded-full p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                  language === 'en' 
                    ? 'bg-gold text-gold-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                  language === 'es' 
                    ? 'bg-gold text-gold-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                ES
              </button>
            </div>

            {/* CTA Button - Desktop */}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hidden md:block">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2">
                <MessageCircle className="w-4 h-4" />
                {t('nav.quote')}
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border animate-fade-in">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-foreground/80 hover:text-gold hover:bg-muted transition-colors"
                >
                  {t(item.key)}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-4"
              >
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2">
                  <MessageCircle className="w-4 h-4" />
                  {t('nav.quote')}
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
