import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function IstanbulPage() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Istanbul - Istanbul is the New Cool | Agence de Voyage</title>
        <meta name="description" content="Découvrez Istanbul, pont entre l'Orient et l'Occident. Escapade chic entre tradition et modernité." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Vue panoramique d'Istanbul"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            Istanbul
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Istanbul is the New Cool - Partez pour une escapade chic
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
              Réserver maintenant
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
              Demander un devis
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
                Istanbul, Pont entre Deux Mondes
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Istanbul vous fascine par sa position unique entre l'Europe et l'Asie, 
                où se mélangent harmonieusement traditions ottomanes et modernité cosmopolite. 
                Cette métropole vibrante offre une expérience urbaine incomparable.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Explorez ses bazars colorés, ses mosquées majestueuses, sa gastronomie 
                raffinée et sa vie nocturne animée. Istanbul is the new cool - découvrez 
                pourquoi cette ville captive tous les voyageurs en quête d'authenticité 
                et de sophistication.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">2000+</div>
                  <div className="text-gray-600">Ans d'histoire</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-pink-600 mb-2">3-7</div>
                  <div className="text-gray-600">Jours de voyage</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Mosquée Bleue à Istanbul"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              Lieux Incontournables
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les sites emblématiques qui font la magie d'Istanbul
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sainte-Sophie',
                image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Chef-d\'œuvre architectural byzantin et ottoman'
              },
              {
                name: 'Grand Bazar',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Marché couvert historique aux mille couleurs'
              },
              {
                name: 'Bosphore',
                image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Détroit mythique entre Europe et Asie'
              }
            ].map((destination, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                  <p className="text-gray-600">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              Expériences Uniques
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🕌', title: 'Mosquées Historiques', desc: 'Visite guidée des plus belles mosquées' },
              { icon: '🛍️', title: 'Shopping Chic', desc: 'Boutiques tendance et bazars authentiques' },
              { icon: '🍽️', title: 'Gastronomie', desc: 'Cuisine turque raffinée et street food' },
              { icon: '🌃', title: 'Vie Nocturne', desc: 'Rooftops et clubs branchés du Bosphore' }
            ].map((experience, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                <div className="text-4xl mb-4">{experience.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{experience.title}</h3>
                <p className="text-gray-600 text-sm">{experience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Prêt pour votre Escapade à Istanbul ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Laissez-vous séduire par la magie d'Istanbul avec nos circuits sur mesure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Nous contacter
            </Link>
            <Link href="/" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'fr', ['common'])),
    },
  };
};