import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    titleKey: 'services.cityTour.title',
    descKey: 'services.cityTour.desc',
    image: 'https://freewalkingtoursperu.com/wp-content/uploads/2025/10/City_tour_Cusco_4_ruinas_de_Sacsayhuaman_1-1.webp',
    price: '$50/pp',
    itinerary: `Itinerario y Puntos Clave
El tour tiene una duración aproximada de 5 horas y explora los siguientes sitios arqueológicos y religiosos:
1. Catedral del Cusco: Majestuoso templo colonial ubicado en la Plaza de Armas.
2. Qoricancha (Templo del Sol): Antiguo templo incaico que sirvió como base para la construcción del convento de Santo Domingo.
3. Sacsayhuamán: Fortaleza inca monumental famosa por sus enormes muros de piedra.
4. Qenqo: Centro ceremonial y religioso que destaca por su altar de piedra natural.
5. Pucapucara: Conocida como la "fortaleza roja", era un punto de control militar inca.
6. Tambomachay: Los "Baños del Inca", un sitio dedicado al culto al agua.

Información Útil para el Turista
• Horarios sugeridos:
  - Turno Mañana: Inicio aprox. 09:30 AM.
  - Turno Tarde: Inicio aprox. 12:45 PM o 01:00 PM.
• Entradas: Es importante recordar al cliente que para ingresar a la mayoría de estos sitios se requiere el Boleto Turístico del Cusco (BTC).
• Recomendación: Ideal para quienes desean conocer los puntos más emblemáticos de la ciudad en poco tiempo y con la comodidad de un servicio exclusivo.`,
    galleryImages: [
      'https://freewalkingtoursperu.com/wp-content/uploads/2025/10/City_tour_Cusco_4_ruinas_de_Sacsayhuaman_1-1.webp',
      'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800',
    ],
  },
  {
    titleKey: 'services.valleSagrado.title',
    descKey: 'services.valleSagrado.desc',
    image: 'https://www.libertyperutravel.com/valle-sagrado-de-los-incas/pisaq-panoramico-valle-sagrado/',
    price: '$150/pp',
    itinerary: `El Valle Sagrado es una región fértil en los Andes peruanos, ubicada a lo largo del río Urubamba. Es un destino clave para la aclimatación debido a que se encuentra a una menor altitud que la ciudad de Cusco.

💰 Tarifas y Logística
• Precio Individual: $150 dólares americanos por persona.
• Oferta Especial: Si son dos personas o más, el precio se reduce a $75 dólares por persona.
• Incluye:
  o Transporte en camioneta cerrada.
  o Chofer profesional.
  o Guía de turismo especializado.
• Horario y Duración: Todo el día, aproximadamente 12 horas (de 07:00 AM a 07:00 PM/19:00 PM).
• Recojo y Retorno: Servicio puerta a puerta (recojo en el hotel al inicio y retorno al mismo al concluir el tour).

📍 Atractivos Principales del Recorrido
El itinerario se centra en los sitios arqueológicos y pueblos tradicionales más importantes de la región:
• Pisac: Destaca por sus impresionantes terrazas agrícolas y su famoso mercado de artesanías.
• Ollantaytambo: Una fortaleza inca y un pueblo que aún conserva sus cimientos incas originales.
• Moray: Misteriosos andenes circulares que funcionaron como un avanzado laboratorio agrícola inca.
• Chinchero: Conocido por sus ruinas arqueológicas y la demostración de tejidos tradicionales.
• Pueblos Tradicionales: Oportunidad de visitar Maras y Yucay para disfrutar de las tradiciones andinas y la gastronomía local.

ℹ️ Consejos y Datos Prácticos
• Boleto Turístico (BTC): Es indispensable adquirir el Boleto Turístico del Cusco para poder acceder a los sitios principales de Pisac, Ollantaytambo, Moray y Chinchero.
• Clima: El valle posee un clima agradable ideal para la producción agrícola. La temporada seca va de abril a noviembre, mientras que la temporada de lluvias es de diciembre a marzo.
• Actividades Adicionales: Además de la historia, el valle ofrece opciones de canotaje en el río Urubamba y visitas a ferias locales.`,
    galleryImages: [
      'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800',
      'https://images.unsplash.com/photo-1548430395-ec39eaf2aa1a?w=800',
    ],
  },
  {
    titleKey: 'services.machuPicchu.title',
    descKey: 'services.machuPicchu.desc',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800',
    price: '$150',
    itinerary: `Machu Picchu es una ciudadela inca y obra maestra de la ingeniería, construida alrededor de 1450 bajo el mando del Inca Pachacútec. Declarada Patrimonio de la Humanidad por la UNESCO y una de las Nuevas Maravillas del Mundo, ofrece una armonía perfecta entre la arquitectura de piedra y la montaña andina.

💰 Tarifas y Logística
• Precio: $150.00 USD.
• Tipo de servicio: Auto privado y guía personalizado durante todo el trayecto.
• Incluye:
  o Traslados en auto privado (Cusco - Ollantaytambo - Cusco).
  o Guía bilingüe profesional (acompañamiento desde Cusco hasta el retorno).
  o Una noche de hotel en el poblado de Machu Picchu (Aguas Calientes).
  o Buses de subida y bajada entre el poblado y la ciudadela de Machu Picchu.
• No Incluye (Por cuenta del turista):
  o Entrada a la ciudadela de Machu Picchu (se recomienda comprar con antelación online).
  o Boleto de pasaje en tren (Ollantaytambo - Machu Picchu - Ollantaytambo).

📍 Itinerario Detallado
El recorrido está diseñado para ofrecer comodidad y seguridad constante mediante transporte privado:
1. Traslado a Ollantaytambo: Recojo en el hotel del turista en Cusco para un viaje de 1 hora en auto privado hacia la estación de Ollantaytambo.
2. Viaje en Tren: Salida desde Ollantaytambo hacia el poblado de Machu Picchu (Aguas Calientes).
3. Estadía: Pernocte de una noche en el hotel incluido en el poblado.
4. Visita a la Ciudadela: Traslado en bus hacia la ciudadela para el tour guiado, explorando el diseño urbano, templos y terrazas agrícolas.
5. Retorno: Descenso en bus al poblado, viaje en tren de regreso a Ollantaytambo y traslado final en auto privado de retorno a la ciudad del Cusco.

ℹ️ Información y Consejos Prácticos
• Ubicación y Altura: Se encuentra a más de 2,400 metros sobre el nivel del mar. Aunque es más bajo que Cusco, se recomienda aclimatarse previamente para evitar el mal de altura.
• Circuitos de Visita: Existen rutas definidas y reguladas para gestionar el flujo turístico y proteger el sitio arqueológico.
• Clima: La región cuenta con estaciones secas (abril-noviembre) y lluviosas (diciembre-marzo), lo cual es importante considerar para el equipo de viaje.`,
    galleryImages: [
      'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800',
      'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800',
    ],
  },
  {
    titleKey: 'services.salkantay.title',
    descKey: 'services.salkantay.desc',
    image: 'https://www.salkantaytrekking.com/blog/wp-content/uploads/2020/11/Salkantay-Pass.jpg',
    price: 'Cotizar',
    itinerary: `El Nevado Salkantay es una imponente montaña sagrada situada en la Cordillera Vilcabamba, siendo la segunda más alta de la región de Cusco con 6,271 msnm. Es el punto culminante del famoso "Salkantay Trek", la alternativa de aventura más popular y desafiante al Camino Inca hacia Machu Picchu.

💰 Tarifas y Logística (Cotización Referencial)
• Precio: Cotización
• Tipo de servicio: Expedición privada con guía especializado en alta montaña.
• Incluye:
  o Traslados privados desde el hotel en Cusco hasta el punto de inicio del trek.
  o Guía profesional bilingüe con experiencia en rutas de aventura.
  o Equipo de campamento de alta calidad y alimentación completa durante la ruta.
  o Caballos de carga para equipo logístico y equipaje personal.
• Nivel de Dificultad: Exigente pero gratificante, ideal para amantes de la naturaleza y la aventura extrema.

📍 Atractivos y Experiencia
El recorrido ofrece una conexión profunda con la naturaleza andina y la espiritualidad local:
• El Apu Salkantay: Considerado una deidad protectora o "Apu" desde tiempos incas, es una fuente vital de agua para la región.
• Abra Salkantay: El paso de montaña más alto de la ruta, ubicado a unos 4,600 msnm, ofreciendo vistas espectaculares del glaciar.
• Diversidad de Ecosistemas: El trayecto atraviesa paisajes que varían desde la alta montaña andina hasta la selva nublada.
• Cosmovisión Andina: Permite experimentar de cerca la reverencia ancestral por las montañas sagradas.

ℹ️ Consejos y Preparación Crucial
Para garantizar la seguridad y el disfrute del turista, se deben seguir estas recomendaciones:
• Aclimatación Obligatoria: Es crucial permanecer en Cusco al menos 1 o 2 días antes de iniciar el trek para evitar el mal de altura o soroche.
• Mejor Época: La temporada seca (mayo a octubre) es la ideal, especialmente los meses de mayo y junio por sus cielos despejados.
• Equipo Necesario:
  o Ropa muy abrigadora e impermeable, incluso en temporada seca, debido al frío intenso en las alturas.
  o Calzado de trekking de buena calidad.
• Salud: Consumir agua constante y mate de coca para ayudar a la digestión y la presión en la altura.`,
    galleryImages: [
      'https://www.salkantaytrekking.com/blog/wp-content/uploads/2020/11/Salkantay-Pass.jpg',
    ],
  },
  {
    titleKey: 'services.humantay.title',
    descKey: 'services.humantay.desc',
    image: 'https://www.cusconative.com/wp-content/uploads/2020/02/humantay-header-c.jpg',
    price: 'Cotizar',
    itinerary: `La Laguna Humantay es una impresionante laguna glaciar de aguas turquesas vibrantes que contrastan con los glaciares circundantes. Es famosa tanto por su belleza natural como por su valor místico, siendo un lugar sagrado donde las comunidades locales realizan ofrendas a la Pachamama.

💰 Tarifas y Logística (Servicio Cotizable)
• Precio: Bajo cotización (Sujeto a número de personas y tipo de servicio).
• Tipo de servicio: Tour de día completo (Full Day).
• Incluye (Sugerido para comodidad):
  o Transporte ida y retorno desde Cusco.
  o Guía profesional bilingüe.
  o Desayuno y almuerzo.
• No Incluye:
  o Entrada a la laguna (se requiere llevar dinero en efectivo en Soles).
  o Alquiler de caballos (opcional para el trayecto de subida).

📍 Itinerario y Experiencia
El recorrido ofrece una caminata desafiante pero gratificante en el corazón de los Andes:
1. Partida de Cusco: Traslado hacia el punto de inicio en Soraypampa.
2. La Caminata: Ascenso de aproximadamente 1.5 a 2 horas desde Soraypampa hasta la laguna. Existe la opción de alquilar caballos para facilitar el trayecto.
3. Llegada a la Laguna: Tiempo para disfrutar del paisaje a 4,200 msnm y observar los nevados Humantay y Salkantay que alimentan la laguna.

ℹ️ Consejos Importantes
Debido a la altitud y el esfuerzo físico requerido, es fundamental seguir estas recomendaciones:
• Aclimatación Crucial: Es indispensable visitar Cusco primero y tomarse de uno a dos días para aclimatarse antes de realizar esta excursión para evitar el mal de altura.
• Ritmo Personal: La laguna se encuentra a 4,200 msnm; se recomienda caminar al propio ritmo y escuchar al cuerpo.
• Equipo Necesario:
  o Ropa abrigadora y buen calzado para caminata.
  o Protección solar, agua y snacks.
• Efectivo: Llevar Soles en efectivo para la entrada y gastos adicionales, ya que no siempre hay cajeros en la zona.`,
    galleryImages: [
      'https://www.cusconative.com/wp-content/uploads/2020/02/humantay-header-c.jpg',
    ],
  },
  {
    titleKey: 'services.quillabamba.title',
    descKey: 'services.quillabamba.desc',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800',
    price: 'Cotizar',
    itinerary: `Quillabamba es la capital de la provincia de La Convención en el departamento de Cusco. Situada en la ceja de selva a una altitud de 1,050 m.s.n.m., es conocida por su clima tropical, cálido y húmedo durante todo el año. Es el destino ideal para quienes buscan una experiencia diferente al clima altoandino, combinando naturaleza exuberante, aventura y cultura cafetalera.

💰 Tarifas y Logística (Servicio Cotizable)
• Precio: Bajo cotización (Dependiendo del número de días y actividades elegidas).
• Tipo de servicio: Tour de varios días o excursión personalizada.
• Acceso: El viaje se realiza vía terrestre desde la ciudad del Cusco, con una duración aproximada de 4 a 5 horas y media.
• Ubicación estratégica: Situada a orillas del río Vilcanota, funciona como puerta de entrada al Santuario Nacional de Megantoni.

📍 Atractivos y Actividades Principales
El área de Quillabamba ofrece una amplia gama de experiencias para distintos perfiles de viajeros:
• Naturaleza y Cataratas: Visita a las impresionantes caídas de agua de Siete Tinajas, Yanay e Illapani.
• Turismo Especializado: Punto estratégico para el avistamiento del gallito de las rocas y rutas de turismo cafetalero para conocer el proceso del café local.
• Cultura y Gastronomía: Recorridos por la Plaza de Armas, el Museo Andino Amazónico y degustación de platos típicos como el "pollito quillabambino" y café de alta calidad.
• Aventura: Práctica de ciclismo de montaña, excursiones profundas a la selva y acceso hacia los baños termales de Cocalmayo o el sitio arqueológico de Choquequirao.

ℹ️ Información y Consejos Prácticos
• Clima: Al ser cálido y húmedo, se recomienda llevar ropa ligera, repelente de insectos y protector solar.
• Festividades: El 29 de noviembre es una fecha importante, ya que la ciudad celebra su aniversario con desfiles, serenatas y ferias como la Expo Feria Quillabamba.
• Aclimatación Inversa: Debido a su baja altitud en comparación con Cusco, es un excelente lugar para descansar y disfrutar de una mayor oxigenación.`,
    galleryImages: [
      'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800',
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
    ],
  },
  {
    titleKey: 'services.vilcabamba.title',
    descKey: 'services.vilcabamba.desc',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Espiritu_Pampa_Archaeological_site_-_overgrown_house.jpg',
    price: 'Cotizar',
    itinerary: `Vilcabamba, cuyo nombre en quechua significa "llanura sagrada", fue la última capital del Imperio Inca. Es un destino fascinante y remoto ubicado en la selva alta de Perú, que sirvió como refugio oculto donde la resistencia inca enfrentó a los españoles durante casi 40 años.

💰 Tarifas y Logística (Servicio Cotizable)
• Precio: Bajo cotización (Debido a la complejidad de la ruta y los días de expedición requeridos).
• Tipo de servicio: Trekking de aventura y expedición histórica de varios días.
• Ubicación: Se encuentra en una región montañosa y selvática al sur del Perú, dentro de la Cordillera de Vilcabamba, una zona de difícil acceso con profundos cañones y picos elevados.
• Dificultad: Alta, ideal para viajeros experimentados que buscan rutas poco convencionales y contacto profundo con la historia.

📍 Importancia Histórica y Puntos Clave
Este tour es una inmersión en los "últimos suspiros" de una de las civilizaciones más grandes del mundo:
• El Reino Neoinca: Fue el centro de poder y resistencia liderado por Manco Inca y sus sucesores hasta la caída de Túpac Amaru en 1572.
• Preservación Cultural: Representó un lugar clave para mantener vivas las costumbres, la religión y la cultura andina frente a la conquista.
• El Misterio de la Ciudad Perdida: Aunque Hiram Bingham buscó la "ciudad perdida" en 1911, la verdadera Vilcabamba (identificada como Espíritu Pampa) fue descubierta y validada arqueológicamente mucho tiempo después.
• Refugio Natural: La geografía de la zona, que incluye picos como el Salkantay, funcionó como un bastión natural impenetrable para las fuerzas españolas.

ℹ️ Información para el Viajero
• Perfil del Turista: Recomendado para entusiastas de la arqueología y el senderismo de resistencia que deseen explorar sitios menos concurridos que Machu Picchu.
• Clima y Entorno: Al ser ceja de selva (selva alta), el clima es húmedo y la vegetación es densa, lo que requiere equipo especializado y preparación física.
• Logística de Expedición: Al ser una ruta de difícil acceso, el servicio cotizable suele incluir mulas de carga, campamentos completos y guías expertos en la historia de la resistencia inca.`,
    galleryImages: [
      'https://upload.wikimedia.org/wikipedia/commons/d/dd/Espiritu_Pampa_Archaeological_site_-_overgrown_house.jpg',
    ],
  },
  {
    titleKey: 'services.cocalmayo.title',
    descKey: 'services.cocalmayo.desc',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ac/0b/10/banos-termales-de-cocalmayo.jpg',
    price: 'Cotizar',
    itinerary: `Los Baños Termales de Cocalmayo son considerados uno de los mejores destinos de relajación en la región de Cusco. Situados al pie de una montaña y junto al río Urubamba, ofrecen una experiencia única de descanso en aguas termales transparentes rodeadas de una exuberante vegetación tropical.

💰 Tarifas y Logística (Servicio Cotizable)
• Precio: Bajo cotización (Sujeto al tipo de transporte y si forma parte de un paquete hacia Machu Picchu).
• Ubicación: Se encuentran en el distrito de Santa Teresa, provincia de La Convención, a una altitud de 1,600 m.s.n.m..
• Tipo de servicio: Excursión de relajación, ideal como parada después de caminatas largas (como el Salkantay Trek) o en la ruta alternativa hacia Machu Picchu vía Hidroeléctrica.

📍 Propiedades y Facilidades
El complejo destaca por la calidad de sus aguas y la comodidad de sus instalaciones:
• Aguas Medicinales: Las aguas oscilan entre los 40°C y 44°C. Son ricas en minerales como sodio, calcio y magnesio, conocidos por sus propiedades terapéuticas para dolores musculares, articulares y la salud de la piel.
• Infraestructura: Cuenta con 4 piscinas principales de diferentes tamaños y temperaturas.
• Servicios Adicionales: El complejo dispone de duchas de agua fría, vestuarios, zonas de descanso, canchas de fútbol, área de camping y quioscos de venta de comida y bebidas.`,
    galleryImages: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ac/0b/10/banos-termales-de-cocalmayo.jpg',
    ],
  },
];

export function Services() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`fade-in-section ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-accent text-center mb-4">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.titleKey}
                {...service}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
