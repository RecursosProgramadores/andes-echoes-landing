import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.rosita', href: '#rosita' },
    { key: 'nav.hotels', href: '#hotels' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <footer className="bg-accent py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="font-heading text-2xl text-gold">Recuerdos Eternos</span>
            <p className="text-accent-foreground/60 text-sm mt-1">
              Cusco Turismo
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm text-accent-foreground/70 hover:text-gold transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="text-center md:text-right text-sm text-accent-foreground/60">
            <p>+51 949 992 147</p>
            <p>flyup.sale@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-accent-foreground/10 mt-8 pt-8 text-center">
          <p className="text-sm text-accent-foreground/50">
            © {new Date().getFullYear()} Recuerdos Eternos. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
