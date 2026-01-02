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
    <footer className="relative overflow-hidden bg-black py-16 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" aria-hidden />
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold/10 blur-3xl" aria-hidden />
      <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-gold/5 blur-3xl" aria-hidden />

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Logo */}
          <div className="space-y-2 text-center lg:text-left">
            <span className="font-heading text-3xl md:text-4xl text-gold tracking-wide">Recuerdos Eternos</span>
            <p className="text-sm md:text-base text-white/70">Cusco Turismo · Experiencias memorables</p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 text-sm md:text-base font-medium">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-gold hover:border-gold/60 hover:bg-white/10 transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="text-center lg:text-right space-y-1 text-white/80 text-sm md:text-base">
            <p className="font-semibold text-white">+51 949 992 147</p>
            <p className="text-white/70">flyup.sale@gmail.com</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          <p className="text-xs md:text-sm text-white/60 text-center">
            © {new Date().getFullYear()} Recuerdos Eternos. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
