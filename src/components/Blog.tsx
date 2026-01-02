import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

interface BlogPost {
  id: number;
  image: string;
  category: { en: string; es: string };
  title: { en: string; es: string };
  excerpt: { en: string; es: string };
  date: string;
  readTime: number;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/2929906/pexels-photo-2929906.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: { en: 'Travel Tips', es: 'Consejos de Viaje' },
    title: { 
      en: 'How to Prepare for Altitude in Cusco', 
      es: 'Cómo Prepararse para la Altura en Cusco' 
    },
    excerpt: { 
      en: 'Essential tips to acclimatize and enjoy your Andean adventure without altitude sickness.',
      es: 'Consejos esenciales para aclimatarse y disfrutar tu aventura andina sin mal de altura.'
    },
    date: '2024-12-15',
    readTime: 5
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: { en: 'Gastronomy', es: 'Gastronomía' },
    title: { 
      en: 'Top 10 Dishes You Must Try in Cusco', 
      es: 'Los 10 Platos que Debes Probar en Cusco' 
    },
    excerpt: { 
      en: 'From cuy to alpaca, discover the authentic flavors of Peruvian Andean cuisine.',
      es: 'Del cuy a la alpaca, descubre los sabores auténticos de la cocina andina peruana.'
    },
    date: '2024-12-10',
    readTime: 7
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: { en: 'Culture', es: 'Cultura' },
    title: { 
      en: 'The Mysteries of Machu Picchu Revealed', 
      es: 'Los Misterios de Machu Picchu Revelados' 
    },
    excerpt: { 
      en: 'Uncover the secrets and legends behind the most famous Inca citadel in the world.',
      es: 'Descubre los secretos y leyendas detrás de la ciudadela inca más famosa del mundo.'
    },
    date: '2024-12-05',
    readTime: 8
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/13218528/pexels-photo-13218528.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: { en: 'Adventure', es: 'Aventura' },
    title: { 
      en: 'Best Season to Visit the Sacred Valley', 
      es: 'Mejor Época para Visitar el Valle Sagrado' 
    },
    excerpt: { 
      en: 'Plan your trip according to weather, festivals, and crowd levels throughout the year.',
      es: 'Planifica tu viaje según el clima, festivales y afluencia durante todo el año.'
    },
    date: '2024-11-28',
    readTime: 6
  }
];

export const Blog = () => {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const content = {
    en: {
      title: 'Travel Blog',
      subtitle: 'Tips, Stories & Inspiration',
      comingSoon: 'Full articles coming soon!',
      readMore: 'Read More',
      minRead: 'min read'
    },
    es: {
      title: 'Blog de Viajes',
      subtitle: 'Consejos, Historias e Inspiración',
      comingSoon: '¡Artículos completos próximamente!',
      readMore: 'Leer Más',
      minRead: 'min lectura'
    }
  };

  const t = content[language];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              {t.title}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          <div className="mt-4 inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium">
            {t.comingSoon}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group bg-card rounded-2xl overflow-hidden shadow-lg border border-accent/10 
                transition-all duration-500 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-2
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title[language]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-3 left-3 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category[language]}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-bold text-foreground mb-2 line-clamp-2 group-hover:text-secondary transition-colors">
                  {post.title[language]}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt[language]}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime} {t.minRead}</span>
                  </div>
                </div>

                {/* Read More Link */}
                <button 
                  className="mt-4 w-full flex items-center justify-center gap-2 text-sm font-semibold text-secondary 
                    hover:text-secondary/80 transition-colors group/btn cursor-not-allowed opacity-70"
                  disabled
                >
                  {t.readMore}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
