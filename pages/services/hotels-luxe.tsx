import Head from 'next/head';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import HotelsLuxeHeader from '../../components/HotelsLuxeHeader';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';

export default function HotelsLuxePage() {
  const { t } = useTranslation(['common', 'services']);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const hotelCategories = [
    {
      name: t('services:hotels_luxe.categories.items.0.name'),
      icon: "🏙️",
      description: t('services:hotels_luxe.categories.items.0.description'),
      examples: t('services:hotels_luxe.categories.items.0.examples', { returnObjects: true })
    },
    {
      name: t('services:hotels_luxe.categories.items.1.name'),
      icon: "🏝️",
      description: t('services:hotels_luxe.categories.items.1.description'),
      examples: t('services:hotels_luxe.categories.items.1.examples', { returnObjects: true })
    },
    {
      name: t('services:hotels_luxe.categories.items.2.name'),
      icon: "🏰",
      description: t('services:hotels_luxe.categories.items.2.description'),
      examples: t('services:hotels_luxe.categories.items.2.examples', { returnObjects: true })
    },
    {
      name: t('services:hotels_luxe.categories.items.3.name'),
      icon: "🦁",
      description: t('services:hotels_luxe.categories.items.3.description'),
      examples: t('services:hotels_luxe.categories.items.3.examples', { returnObjects: true })
    }
  ];

  const advantages = [
    {
      icon: "💎",
      title: t('services:hotels_luxe.advantages.items.0.title'),
      description: t('services:hotels_luxe.advantages.items.0.description')
    },
    {
      icon: "⬆️",
      title: t('services:hotels_luxe.advantages.items.1.title'),
      description: t('services:hotels_luxe.advantages.items.1.description')
    },
    {
      icon: "🎁",
      title: t('services:hotels_luxe.advantages.items.2.title'),
      description: t('services:hotels_luxe.advantages.items.2.description')
    },
    {
      icon: "🏆",
      title: t('services:hotels_luxe.advantages.items.3.title'),
      description: t('services:hotels_luxe.advantages.items.3.description')
    }
  ];

  const featuredHotels = [
    {
      name: t('services:hotels_luxe.featured.hotels.0.name'),
      location: t('services:hotels_luxe.featured.hotels.0.location'),
      category: t('services:hotels_luxe.featured.hotels.0.category'),
      image: "🕌",
      highlights: t('services:hotels_luxe.featured.hotels.0.highlights', { returnObjects: true })
    },
    {
      name: t('services:hotels_luxe.featured.hotels.1.name'),
      location: t('services:hotels_luxe.featured.hotels.1.location'),
      category: t('services:hotels_luxe.featured.hotels.1.category'),
      image: "🏗️",
      highlights: t('services:hotels_luxe.featured.hotels.1.highlights', { returnObjects: true })
    },
    {
      name: t('services:hotels_luxe.featured.hotels.2.name'),
      location: t('services:hotels_luxe.featured.hotels.2.location'),
      category: t('services:hotels_luxe.featured.hotels.2.category'),
      image: "🏯",
      highlights: t('services:hotels_luxe.featured.hotels.2.highlights', { returnObjects: true })
    },
    {
      name: t('services:hotels_luxe.featured.hotels.3.name'),
      location: t('services:hotels_luxe.featured.hotels.3.location'),
      category: t('services:hotels_luxe.featured.hotels.3.category'),
      image: "🦁",
      highlights: t('services:hotels_luxe.featured.hotels.3.highlights', { returnObjects: true })
    }
  ];

  return (
    <>
      <Head>
        <title>{`${t('services:hotels_luxe.title')} - ${t('site_name')} | ${t('services:hotels_luxe.subtitle')}`}</title>
        <meta name="description" content={t('services:hotels_luxe.description')} />
        <meta name="keywords" content="hôtel luxe, palace, resort, château, lodge safari, 5 étoiles, séjour luxe, avantages VIP" />
      </Head>

      <div className="min-h-screen bg-white">
        <HotelsLuxeHeader />
        
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-amber-900 via-orange-900 to-red-800 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-36 h-36 bg-amber-400/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-52 h-52 bg-orange-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="inline-block text-amber-300 font-semibold text-sm uppercase tracking-wider mb-4">{t('services:hotels_luxe.hero.tagline')}</span>
              <h1 className="text-6xl md:text-7xl font-bold font-serif text-white mb-6">
                {t('services:hotels_luxe.hero.title')}
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full mb-8"></div>
              <p className="text-2xl text-amber-100 max-w-4xl mx-auto leading-relaxed mb-12">
                {t('services:hotels_luxe.hero.description')}
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="#categories" className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  {t('services:hotels_luxe.hero.cta_primary')}
                </a>
                <a href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-amber-900 transition-all duration-300">
                  {t('services:hotels_luxe.hero.cta_secondary')}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold font-serif text-gray-900 mb-6">{t('services:hotels_luxe.advantages.title')}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('services:hotels_luxe.advantages.description')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-amber-200">
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold font-serif text-gray-900 mb-6">{t('services:hotels_luxe.categories.title')}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('services:hotels_luxe.categories.description')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hotelCategories.map((category, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-amber-200">
                  <div className="flex items-start space-x-6">
                    <div className="text-5xl">{category.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">{category.name}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800 mb-3">Établissements de référence :</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {Array.isArray(category.examples) && category.examples.map((example, exampleIndex) => (
                            <div key={exampleIndex} className="flex items-center text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                              {example}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Hotels Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold font-serif text-gray-900 mb-6">{t('services:hotels_luxe.featured.title')}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('services:hotels_luxe.featured.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredHotels.map((hotel, index) => (
                <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 overflow-hidden border border-gray-100 hover:border-amber-200">
                  <div className="relative h-48 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-6xl">
                    {hotel.image}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {hotel.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{hotel.name}</h3>
                    <div className="text-amber-600 font-semibold mb-4">{hotel.location}</div>
                    
                    <ul className="space-y-2 mb-6">
                      {Array.isArray(hotel.highlights) && hotel.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center text-gray-600 text-sm">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    
                    <a href="#contact" className="block w-full text-center py-3 px-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-amber-500 transition-all duration-300">
                      Réserver
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold font-serif text-gray-900 mb-6">{t('services:hotels_luxe.concierge.title')}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {t('services:hotels_luxe.concierge.description')}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "📞",
                    title: t('services:hotels_luxe.concierge.services.0.title'),
                    description: t('services:hotels_luxe.concierge.services.0.description')
                  },
                  {
                    icon: "🎯",
                    title: t('services:hotels_luxe.concierge.services.1.title'),
                    description: t('services:hotels_luxe.concierge.services.1.description')
                  },
                  {
                    icon: "🚗",
                    title: t('services:hotels_luxe.concierge.services.2.title'),
                    description: t('services:hotels_luxe.concierge.services.2.description')
                  }
                ].map((service, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gradient-to-br from-amber-900 to-orange-900">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-serif text-white mb-6">{t('services:hotels_luxe.contact.title')}</h2>
          <p className="text-xl text-amber-100 mb-8">
            {t('services:hotels_luxe.contact.description')}
          </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="tel:+212XXXXXXXXX" className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                {t('services:hotels_luxe.contact.cta_phone')}
              </a>
              <a href="https://wa.me/212XXXXXXXXX" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                {t('services:hotels_luxe.contact.cta_whatsapp')}
              </a>
              <a href="mailto:contact@vaoyage.com" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-amber-900 transition-all duration-300">
                {t('services:hotels_luxe.contact.cta_email')}
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
      ...(await serverSideTranslations(locale ?? 'fr', [
        'common',
        'navigation',
        'services'
      ])),
    },
  };
};