import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.rosita': 'Rosita School',
    'nav.hotels': 'Hotels',
    'nav.contact': 'Contact',
    'nav.quote': 'Get Quote',
    
    // Hero
    'hero.tagline': 'Eternal Memories in the Andes: Private Tours & Cultural Immersion',
    'hero.subtitle': '',
    'hero.cta': 'Contact via Chat',
    
    // About
    'about.title': 'About Us',
    'about.text': '32 years of family tradition guiding through the Andes. Private tours uniquely crafted for authentic experiences.',
    
    // Services
    'services.title': 'Our Services',
    'services.cityTour.title': 'City Tour',
    'services.cityTour.desc': 'Private vehicle, guide, hotel pickup. Cathedral, Qoricancha, Sacsayhuamán.',
    'services.valleSagrado.title': 'Sacred Valley',
    'services.valleSagrado.desc': 'Transport, guide. Pisac, Ollantaytambo, Moray, Chinchero.',
    'services.machuPicchu.title': 'Machu Picchu',
    'services.machuPicchu.desc': 'Transfers, overnight hotel, buses. Entry & train not included.',
    'services.salkantay.title': 'Salkantay Trek',
    'services.salkantay.desc': 'Challenging level, includes guide and equipment.',
    'services.humantay.title': 'Humantay Lake',
    'services.humantay.desc': 'Full day, includes transport and meals.',
    'services.quillabamba.title': 'Quillabamba',
    'services.quillabamba.desc': 'Tropical nature, waterfalls.',
    'services.vilcabamba.title': 'Vilcabamba',
    'services.vilcabamba.desc': 'Historic trek to Espíritu Pampa.',
    'services.cocalmayo.title': 'Cocalmayo Hot Springs',
    'services.cocalmayo.desc': 'Relaxation, mineral pools.',
    'services.includes': 'Includes',
    'services.notIncludes': 'Not Included',
    'services.perPerson': '/person',
    'services.quote': 'Get Quote',
    'services.whatsapp': 'Quote via WhatsApp',
    'services.gallery': 'Gallery',
    
    // Rosita School
    'rosita.title': 'Rosita Culinary School',
    'rosita.text': 'Live ancestral cooking experience. Prepare and taste traditional dishes like pachamanca. Take home authentic recipes.',
    'rosita.cta': 'Reserve Your Spot',
    
    // Extras
    'extras.title': 'Extra Services',
    'extras.airbnb': 'Airbnb with Views',
    'extras.transport': 'Airport Transfer',
    
    // Tickets
    'tickets.title': 'Tickets & Advisory',
    'tickets.text': 'Three options: Buy online, upon arrival in Peru, or we manage + service cost.',
    'tickets.online': 'Buy Online',
    'tickets.help': 'Need Help?',
    
    // Hotels
    'hotels.title': 'Recommended Hotels',
    'hotels.5star': '5 Stars',
    'hotels.4star': '4 Stars',
    'hotels.3star': '3 Stars',
    
    // Testimonials
    'testimonials.title': 'Guest Experiences',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.dates': 'Travel Dates',
    'contact.people': 'Number of People',
    'contact.tour': 'Tour of Interest',
    'contact.send': 'Send Message',
    'contact.address': 'Address',
    
    // Footer
    'footer.rights': 'All rights reserved.',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Nosotros',
    'nav.services': 'Servicios',
    'nav.rosita': 'Escuela Rosita',
    'nav.hotels': 'Hoteles',
    'nav.contact': 'Contacto',
    'nav.quote': 'Cotiza Ahora',
    
    // Hero
    'hero.tagline': 'Recuerdos Eternos en los Andes: Tours Privados e Inmersión Cultural',
    'hero.subtitle': '',
    'hero.cta': 'Contacta por Chat',
    
    // About
    'about.title': 'Sobre Nosotros',
    'about.text': '32 años de tradición familiar guiando por los Andes. Tours privados únicos para experiencias auténticas.',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.cityTour.title': 'City Tour',
    'services.cityTour.desc': 'Vehículo privado, guía, recojo hotel. Catedral, Qoricancha, Sacsayhuamán.',
    'services.valleSagrado.title': 'Valle Sagrado',
    'services.valleSagrado.desc': 'Transporte, guía. Pisac, Ollantaytambo, Moray, Chinchero.',
    'services.machuPicchu.title': 'Machu Picchu',
    'services.machuPicchu.desc': 'Traslados, hotel noche, buses. Entrada y tren no incluidos.',
    'services.salkantay.title': 'Salkantay Trek',
    'services.salkantay.desc': 'Nivel exigente, incluye guía y equipo.',
    'services.humantay.title': 'Laguna Humantay',
    'services.humantay.desc': 'Full day, incluye transporte y comidas.',
    'services.quillabamba.title': 'Quillabamba',
    'services.quillabamba.desc': 'Naturaleza tropical, cataratas.',
    'services.vilcabamba.title': 'Vilcabamba',
    'services.vilcabamba.desc': 'Trek histórico a Espíritu Pampa.',
    'services.cocalmayo.title': 'Baños Termales Cocalmayo',
    'services.cocalmayo.desc': 'Relajación, piscinas minerales.',
    'services.includes': 'Incluye',
    'services.notIncludes': 'No Incluye',
    'services.perPerson': '/persona',
    'services.quote': 'Cotizar',
    'services.whatsapp': 'Cotiza por WhatsApp',
    'services.gallery': 'Galería',
    
    // Rosita School
    'rosita.title': 'Escuela Gastronómica Rosita',
    'rosita.text': 'Cocina en vivo ancestral. Prepara y degusta platos tradicionales como pachamanca. Llévate recetas auténticas.',
    'rosita.cta': 'Reserva Tu Lugar',
    
    // Extras
    'extras.title': 'Servicios Extras',
    'extras.airbnb': 'Airbnb con Vistas',
    'extras.transport': 'Transporte Aeropuerto',
    
    // Tickets
    'tickets.title': 'Entradas y Asesoría',
    'tickets.text': 'Tres opciones: Comprar online, al llegar a Perú, o nosotros gestionamos + costo servicio.',
    'tickets.online': 'Comprar Online',
    'tickets.help': '¿Necesitas Ayuda?',
    
    // Hotels
    'hotels.title': 'Hoteles Recomendados',
    'hotels.5star': '5 Estrellas',
    'hotels.4star': '4 Estrellas',
    'hotels.3star': '3 Estrellas',
    
    // Testimonials
    'testimonials.title': 'Experiencias de Viajeros',
    
    // Contact
    'contact.title': 'Contáctanos',
    'contact.name': 'Nombre',
    'contact.email': 'Correo',
    'contact.dates': 'Fechas de Viaje',
    'contact.people': 'Número de Personas',
    'contact.tour': 'Tour de Interés',
    'contact.send': 'Enviar Mensaje',
    'contact.address': 'Dirección',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
