import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function JaponPage() {

  return (
    <>
      <Head>
        <title>{t('site_name')}</title>
        <meta name="description" content="Découvrez le Japon, pays des traditions millénaires et de la modernité. Temples, cerisiers en fleurs et culture unique." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Temple japonais avec cerisiers en fleurs"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            Japon
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Terre du Soleil Levant, entre tradition et modernité
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
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
                Japon, Harmonie des Contrastes
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Le Japon vous invite à un voyage extraordinaire où traditions 
                millénaires et innovations futuristes coexistent en parfaite 
                harmonie. Des temples zen de Kyoto aux gratte-ciels de Tokyo, 
                découvrez un pays fascinant qui ne cesse de surprendre.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Immergez-vous dans la culture japonaise authentique : 
                cérémonie du thé, art des jardins, gastronomie raffinée et 
                hospitalité légendaire. Le Japon offre une expérience unique 
                qui marquera votre âme à jamais.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">6,800+</div>
                  <div className="text-gray-600">Îles</div>
                </div>
                <div className="text-center p-4 bg-pink-50 rounded-lg">
                  <div className="text-3xl font-bold text-pink-600 mb-2">10-21</div>
                  <div className="text-gray-600">Jours de séjour</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Torii flottant de Miyajima"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              Villes Incontournables
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explorez la diversité culturelle du Japon
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Tokyo',
                image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Métropole futuriste et centre de la modernité japonaise'
              },
              {
                name: 'Kyoto',
                image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Ancienne capitale impériale aux mille temples'
              },
              {
                name: 'Osaka',
                image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Capitale gastronomique et cœur commercial du Kansai'
              }
            ].map((city, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{city.name}</h3>
                  <p className="text-gray-600">{city.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              Expériences Authentiques
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🌸', title: 'Hanami', desc: 'Contemplation des cerisiers en fleurs' },
              { icon: '🍣', title: 'Gastronomie', desc: 'Sushi, ramen et kaiseki traditionnel' },
              { icon: '🏯', title: 'Temples & Châteaux', desc: 'Patrimoine historique exceptionnel' },
              { icon: '🚅', title: 'Shinkansen', desc: 'Voyage en train à grande vitesse' }
            ].map((experience, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-xl">
                <div className="text-4xl mb-4">{experience.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{experience.title}</h3>
                <p className="text-gray-600 text-sm">{experience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
            Forfaits Japon
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Découverte',
                price: '32,000 MAD',
                duration: '10 jours / 9 nuits',
                features: ['Hôtel 3-4*', 'Petit-déjeuner', 'JR Pass 7 jours', 'Tokyo & Kyoto', 'Guides francophones']
              },
              {
                title: 'Grand Tour',
                price: '48,000 MAD',
                duration: '14 jours / 13 nuits',
                features: ['Hôtel 4-5*', 'Demi-pension', 'JR Pass 14 jours', 'Multi-villes', 'Expériences culturelles'],
                featured: true
              },
              {
                title: 'Luxe Impérial',
                price: '75,000 MAD',
                duration: '21 jours / 20 nuits',
                features: ['Ryokan de luxe', 'Pension complète', 'Transport privé', 'Guides privés', 'Expériences VIP']
              }
            ].map((package_, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg ${package_.featured ? 'ring-2 ring-red-500 transform scale-105' : ''}`}>
                {package_.featured && (
                  <div className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    Recommandé
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{package_.title}</h3>
                <div className="text-3xl font-bold text-red-600 mb-2">{package_.price}</div>
                <div className="text-gray-600 mb-6">{package_.duration}</div>
                <ul className="space-y-3 mb-8">
                  {package_.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="text-red-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  package_.featured 
                    ? 'bg-red-500 text-white hover:bg-red-600' 
                    : 'border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
                }`}>
                  Réserver
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-pink-500">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Prêt pour votre Aventure Japonaise ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Découvrez la magie du Pays du Soleil Levant
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