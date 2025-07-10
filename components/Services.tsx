import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

// Fonction pour obtenir le lien vers la page du service
const getServiceLink = (serviceTitle: string): string => {
  const serviceLinks: { [key: string]: string } = {
    'Omra & Hajj': '/services/omra-hajj',
    'Voyages Sur-Mesure': '/services/voyages-sur-mesure',
    'Hôtels de Luxe': '/services/hotels-luxe',
    'Voyages d\'Affaires': '/services/voyages-affaires'
  };
  return serviceLinks[serviceTitle] || '#contact';
};

const services = [
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16-.21 2-.3 3-.3s1.84.09 3 .3c5.16-1 9-5.45 9-11V7l-10-5z"/>
        <path d="M12 7v10l-7-3.5V9l7-2z" opacity="0.7"/>
      </svg>
    ),
    title: 'Omra & Hajj',
    description: 'Vivez une expérience spirituelle unique avec nos forfaits premium tout inclus',
    features: [
      'Vols directs et confortables',
      'Hôtels 5 étoiles près des lieux saints',
      'Guide spirituel expérimenté',
      'Visa et transferts inclus'
    ]
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
      </svg>
    ),
    title: 'Voyages Sur-Mesure',
    description: 'Des circuits exclusifs conçus selon vos envies et votre style de voyage',
    features: [
      'Destinations d\'exception',
      'Expériences uniques',
      'Conciergerie privée',
      'Service VIP aéroport'
    ]
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V6H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
      </svg>
    ),
    title: 'Hôtels de Luxe',
    description: 'Une sélection des plus beaux établissements à travers le monde',
    features: [
      'Tarifs préférentiels',
      'Surclassement privilégié',
      'Avantages exclusifs',
      'Service 24/7'
    ]
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: 'Voyages d\'Affaires',
    description: 'Des solutions haut de gamme pour vos déplacements professionnels',
    features: [
      'Confort optimal',
      'Reporting détaillé',
      'Assistance dédiée',
      'Facturation simplifiée'
    ]
  }
];

export default function Services() {
  const { t } = useTranslation('home');
  const [visibleServices, setVisibleServices] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleServices((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.service-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
             <div className="inline-block relative">
               <div className="absolute -inset-4 bg-gradient-to-r from-gray-100/50 via-gray-200/30 to-gray-100/50 rounded-2xl blur-xl opacity-60"></div>
               <div className="relative">
                 <span className="inline-flex items-center gap-2 text-gray-800 font-semibold text-sm uppercase tracking-wider mb-4 px-4 py-2 bg-gray-100/80 rounded-full border border-gray-200/50 backdrop-blur-sm">
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                   </svg>
                   Excellence & Expertise
                 </span>
                 <h2 className="text-5xl md:text-6xl font-bold font-serif bg-gradient-to-r from-gray-900 via-black to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
                   {t('services.title')}
                 </h2>
                 <div className="flex items-center justify-center gap-2 mb-6">
                   <div className="w-8 h-1 bg-gradient-to-r from-transparent to-gray-800 rounded-full"></div>
                   <div className="w-12 h-1 bg-gradient-to-r from-gray-800 to-black rounded-full"></div>
                   <div className="w-8 h-1 bg-gradient-to-r from-black to-transparent rounded-full"></div>
                 </div>
               </div>
             </div>
             <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
               {t('services.subtitle')}
             </p>
           </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-card group relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.02] overflow-hidden border border-gray-200/50 hover:border-blue-300/50 before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-50/30 before:via-transparent before:to-indigo-50/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 ${
                visibleServices.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              data-index={index}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative p-8 z-10">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-blue-500/30">
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"></div>
                </div>
                <h3 className="text-2xl font-bold font-serif text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300 leading-tight">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed font-light">{service.description}</p>
                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li
                        key={featureIndex}
                        className="flex items-start text-gray-700 group-hover:text-blue-700 transition-all duration-300 transform group-hover:translate-x-1"
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <span className="w-6 h-6 bg-gradient-to-r from-blue-100 to-indigo-200 rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:from-blue-200 group-hover:to-indigo-300 group-hover:scale-110 transition-all duration-300 shadow-sm">
                          <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="font-medium leading-relaxed">{feature}</span>
                      </li>
                  ))}
                </ul>
              </div>
              <div className="relative px-8 py-6 bg-gradient-to-r from-gray-50/80 to-blue-50/60 border-t border-gray-200/30 backdrop-blur-sm z-10">
                <div className="flex flex-col space-y-3">
                  <a
                    href={getServiceLink(service.title)}
                    className="group/btn relative block w-full text-center py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-0.5 shadow-lg hover:shadow-blue-500/30 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      En savoir plus
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="#contact"
                    className="group/btn relative block w-full text-center py-3 px-6 rounded-xl border-2 border-blue-300/50 text-blue-700 font-semibold hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-sm bg-blue-50/30 hover:shadow-lg"
                  >
                    <span className="relative flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 transform group-hover/btn:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Demander un devis
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}