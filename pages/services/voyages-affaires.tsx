import Head from 'next/head';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import VoyagesAffairesHeader from '../../components/VoyagesAffairesHeader';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';

export default function VoyagesAffairesPage() {
  const { t } = useTranslation(['common', 'services']);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const businessServices = [
    {
      icon: "✈️",
      title: t('services:business_travel.services.items.0.title'),
      description: t('services:business_travel.services.items.0.description'),
      features: t('services:business_travel.services.items.0.features', { returnObjects: true })
    },
    {
      icon: "🏨",
      title: t('services:business_travel.services.items.1.title'),
      description: t('services:business_travel.services.items.1.description'),
      features: t('services:business_travel.services.items.1.features', { returnObjects: true })
    },
    {
      icon: "🚗",
      title: t('services:business_travel.services.items.2.title'),
      description: t('services:business_travel.services.items.2.description'),
      features: t('services:business_travel.services.items.2.features', { returnObjects: true })
    },
    {
      icon: "📊",
      title: t('services:business_travel.services.items.3.title'),
      description: t('services:business_travel.services.items.3.description'),
      features: t('services:business_travel.services.items.3.features', { returnObjects: true })
    }
  ];

  const corporateAdvantages = [
    {
      icon: "💰",
      title: t('services:business_travel.advantages.items.0.title'),
      description: t('services:business_travel.advantages.items.0.description')
    },
    {
      icon: "⏱️",
      title: t('services:business_travel.advantages.items.1.title'),
      description: t('services:business_travel.advantages.items.1.description')
    },
    {
      icon: "📱",
      title: t('services:business_travel.advantages.items.2.title'),
      description: t('services:business_travel.advantages.items.2.description')
    },
    {
      icon: "📈",
      title: t('services:business_travel.advantages.items.3.title'),
      description: t('services:business_travel.advantages.items.3.description')
    }
  ];

  const solutions = [
    {
      name: t('services:business_travel.solutions.items.0.name'),
      description: t('services:business_travel.solutions.items.0.description'),
      features: t('services:business_travel.solutions.items.0.features', { returnObjects: true }),
      ideal: t('services:business_travel.solutions.items.0.ideal')
    },
    {
      name: t('services:business_travel.solutions.items.1.name'),
      description: t('services:business_travel.solutions.items.1.description'),
      features: t('services:business_travel.solutions.items.1.features', { returnObjects: true }),
      ideal: t('services:business_travel.solutions.items.1.ideal'),
      popular: true
    },
    {
      name: t('services:business_travel.solutions.items.2.name'),
      description: t('services:business_travel.solutions.items.2.description'),
      features: t('services:business_travel.solutions.items.2.features', { returnObjects: true }),
      ideal: t('services:business_travel.solutions.items.2.ideal')
    }
  ];

  return (
    <>
      <Head>
        <title>{t('services:business_travel.title')} - {t('site_name')} | {t('services:business_travel.subtitle')}</title>
        <meta name="description" content={t('services:business_travel.description')} />
        <meta name="keywords" content="voyage affaires, corporate travel, gestion voyage entreprise, vol business, hôtel affaires, TMC" />
      </Head>

      <div className="min-h-screen bg-white">
        <VoyagesAffairesHeader />
        
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-800 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-56 h-56 bg-indigo-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="inline-block text-blue-300 font-semibold text-sm uppercase tracking-wider mb-4">{t('services:business_travel.hero.tagline')}</span>
              <h1 className="text-6xl md:text-7xl font-bold font-serif text-white mb-6">
                {t('services:business_travel.hero.title')}
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full mb-8"></div>
              <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
                {t('services:business_travel.hero.description')}
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="#solutions" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  {t('services:business_travel.hero.cta_primary')}
                </a>
                <a href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  {t('services:business_travel.hero.cta_secondary')}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold font-serif text-gray-900 mb-6">{t('services:business_travel.advantages.title')}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('services:business_travel.advantages.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {corporateAdvantages.map((advantage, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold font-serif text-gray-900 mb-6">{t('services:business_travel.services.title')}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {businessServices.map((service, index) => (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
                  <div className="flex items-start space-x-6">
                    <div className="text-5xl">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold font-serif text-gray-900 mb-6">{t('services:business_travel.solutions.title')}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('services:business_travel.solutions.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 overflow-hidden border-2 ${
                  solution.popular ? 'border-blue-400 scale-105' : 'border-gray-200'
                }`}>
                  {solution.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Plus Demandé
                      </span>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.name}</h3>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    <div className="text-blue-600 font-semibold mb-6">{solution.ideal}</div>
                    
                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <a href="#contact" className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      solution.popular 
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-indigo-600 hover:to-blue-500 shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}>
                      En savoir plus
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-serif text-white mb-6">VAOYAGE en Chiffres</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                La confiance de nos clients corporate
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Entreprises clientes" },
                { number: "25%", label: "Économies moyennes" },
                { number: "24/7", label: "Support disponible" },
                { number: "98%", label: "Satisfaction client" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 shadow-xl">
              <div className="text-6xl mb-6">💼</div>
              <blockquote className="text-2xl text-gray-700 font-serif italic mb-8">
                "VAOYAGE a révolutionné la gestion de nos voyages d'affaires. Nous avons réduit nos coûts de 30% tout en améliorant le confort de nos collaborateurs. Leur équipe est réactive et professionnelle."
              </blockquote>
              <div className="text-lg font-semibold text-gray-900">Directeur Général</div>
              <div className="text-blue-600">Groupe industriel international</div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 to-blue-900">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold font-serif text-white mb-6">Optimisez Vos Voyages d'Affaires</h2>
            <p className="text-xl text-blue-100 mb-8">
              Demandez un audit gratuit de vos dépenses voyage actuelles
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="tel:+212XXXXXXXXX" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                📞 Audit gratuit
              </a>
              <a href="https://wa.me/212XXXXXXXXX" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                💬 WhatsApp
              </a>
              <a href="mailto:corporate@vaoyage.com" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                ✉️ Devis corporate
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