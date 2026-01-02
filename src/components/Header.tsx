import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const WHATSAPP_LINK = 'https://wa.me/51949992147';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.rosita', href: '#rosita' },
    { key: 'nav.hotels', href: '#hotels' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-sm border-b border-gold shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-24">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <span className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold transition-colors text-gold">
              Recuerdos Eternos
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`text-base font-semibold transition-colors ${
                  isScrolled
                    ? 'text-white/80 hover:text-gold'
                    : 'text-white/90 hover:text-gold'
                }`}
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Right side: Language + CTA */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center rounded-full p-1 bg-white/10">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm font-semibold rounded-full transition-all ${
                  language === 'en'
                    ? 'bg-gold text-gold-foreground'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 text-sm font-semibold rounded-full transition-all ${
                  language === 'es'
                    ? 'bg-gold text-gold-foreground'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                ES
              </button>
            </div>

            {/* CTA Button - Desktop */}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hidden md:block">
              <Button className="gap-2 transition-all text-base font-bold px-6 py-2 h-auto bg-gold hover:bg-gold/90 text-black">
                <MessageCircle className="w-5 h-5" />
                {t('nav.quote')}
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 transition-colors text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`lg:hidden border-t animate-fade-in transition-colors ${
              isScrolled ? 'border-white/20 bg-black/90' : 'border-white/20 bg-black/5'
            }`}
          >
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-base font-semibold transition-colors text-white/80 hover:text-gold hover:bg-white/10"
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
                <Button className="w-full bg-gold hover:bg-gold/90 text-black gap-2 font-bold text-base">
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
