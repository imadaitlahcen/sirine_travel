import Head from 'next/head';
import VoyagesSurMesureHeader from '../../components/VoyagesSurMesureHeader';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function VoyagesSurMesurePage() {
  const { t } = useTranslation(['common', 'services']);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const destinations = [
    {
      name: t('services:custom_travel.destinations.items.0.name'),
      image: "🏯",
      duration: t('services:custom_travel.destinations.items.0.duration'),
      highlights: t('services:custom_travel.destinations.items.0.highlights', { returnObjects: true }) as string[]
    },
    {
      name: t('services:custom_travel.destinations.items.1.name'),
      image: "🦁",
      duration: t('services:custom_travel.destinations.items.1.duration'),
      highlights: t('services:custom_travel.destinations.items.1.highlights', { returnObjects: true }) as string[]
    },
    {
      name: t('services:custom_travel.destinations.items.2.name'),
      image: "🏝️",
      duration: t('services:custom_travel.destinations.items.2.duration'),
      highlights: t('services:custom_travel.destinations.items.2.highlights', { returnObjects: true }) as string[]
    },
    {
      name: t('services:custom_travel.destinations.items.3.name'),
      image: "🏔️",
      duration: t('services:custom_travel.destinations.items.3.duration'),
      highlights: t('services:custom_travel.destinations.items.3.highlights', { returnObjects: true }) as string[]
    }
  ];

  const services = [
    {
      icon: "🎯",
      title: t('services:custom_travel.services.items.0.title'),
      description: t('services:custom_travel.services.items.0.description')
    },
    {
      icon: "🏆",
      title: t('services:custom_travel.services.items.1.title'),
      description: t('services:custom_travel.services.items.1.description')
    },
    {
      icon: "👨‍💼",
      title: t('services:custom_travel.services.items.2.title'),
      description: t('services:custom_travel.services.items.2.description')
    },
    {
      icon: "✈️",
      title: t('services:custom_travel.services.items.3.title'),
      description: t('services:custom_travel.services.items.3.description')
    }
  ];

  return (
    <>
      <Head>
        <title>{t('services:custom_travel.title')} - {t('site_name')} | {t('services:custom_travel.subtitle')}</title>
        <meta name="description" content={t('services:custom_travel.description')} />
        <meta name="keywords" content="voyage sur mesure, circuit privé, voyage luxe, destination exclusive, conciergerie voyage, voyage personnalisé" />
      </Head>

      <div className="min-h-screen bg-white">
        <VoyagesSurMesureHeader />
        
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-800 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-56 h-56 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="inline-block text-purple-300 font-semibold text-sm uppercase tracking-wider mb-4">{t('services:custom_travel.hero.tagline')}</span>
              <h1 className="text-6xl md:text-7xl font-bold font-serif text-white mb-6">
                {t('services:custom_travel.hero.title')}
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto rounded-full mb-8"></div>
              <p className="text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed mb-12">
                {t('services:custom_travel.hero.description')}
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="#destinations" className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  {t('services:custom_travel.hero.cta_primary')}
                </a>
                <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300">
                  {t('services:custom_travel.hero.cta_secondary')}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold font-serif text-gray-900 mb-6">{t('services:custom_travel.process.title')}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                step: "01",
                title: t('services:custom_travel.process.steps.0.title'),
                description: t('services:custom_travel.process.steps.0.description')
              },
              {
                step: "02",
                title: t('services:custom_travel.process.steps.1.title'),
                description: t('services:custom_travel.process.steps.1.description')
              },
              {
                step: "03",
                title: t('services:custom_travel.process.steps.2.title'),
                description: t('services:custom_travel.process.steps.2.description')
              },
              {
                step: "04",
                title: t('services:custom_travel.process.steps.3.title'),
                description: t('services:custom_travel.process.steps.3.description')
              }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg">
                      {process.step}
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 transform -translate-y-1/2"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold font-serif text-gray-900 mb-6">{t('services:custom_travel.services.title')}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-200">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Destinations Section */}
        <section id="destinations" className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold font-serif text-gray-900 mb-6">{t('services:custom_travel.destinations.title')}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('services:custom_travel.destinations.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {destinations.map((destination, index) => (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-6xl">
                    {destination.image}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                    <div className="text-purple-600 font-semibold mb-4">{destination.duration}</div>
                    
                    <ul className="space-y-2">
                      {destination.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center text-gray-600 text-sm">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    
                    <a href="/contact" className="block w-full text-center mt-6 py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-500 transition-all duration-300">
                      Personnaliser
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <div className="text-6xl mb-6">⭐</div>
              <blockquote className="text-2xl text-gray-700 font-serif italic mb-8">
                "VAOYAGE a créé pour nous un voyage absolument magique au Japon. Chaque détail était parfait, des ryokans traditionnels aux expériences culinaires exclusives. Un service irréprochable !"
              </blockquote>
              <div className="text-lg font-semibold text-gray-900">Sarah & Ahmed M.</div>
              <div className="text-purple-600">Voyage au Japon - Mars 2024</div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gradient-to-br from-purple-900 to-blue-900">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold font-serif text-white mb-6">Créons Ensemble Votre Voyage de Rêve</h2>
            <p className="text-xl text-purple-100 mb-8">
              Contactez nos experts pour concevoir votre voyage sur-mesure
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="tel:+212XXXXXXXXX" className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                📞 Consultation gratuite
              </a>
              <a href="https://wa.me/message/HCUPHT7NUHCOO1" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                💬 WhatsApp
              </a>
              <a href="mailto:contact@vaoyage.com" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300">
                ✉️ Devis personnalisé
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'fr', ['common', 'navigation', 'services'])),
    },
  };
};