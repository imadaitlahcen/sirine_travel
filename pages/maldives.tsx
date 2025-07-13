import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function MaldivesPage() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('site_name')}</title>
        <meta name="description" content="Découvrez les Maldives, paradis tropical aux eaux cristallines. Séjours de luxe dans des resorts d'exception." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Plage paradisiaque des Maldives"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            Maldives
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Paradis tropical aux eaux cristallines
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
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
                L'Éden Tropical des Maldives
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Les Maldives vous offrent l'expérience ultime du paradis tropical. 
                Cet archipel de 1 200 îles coralliennes baignées par l'océan Indien 
                propose des eaux turquoise d'une pureté exceptionnelle et des plages 
                de sable blanc immaculé.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Séjournez dans des resorts de luxe sur pilotis, explorez les fonds 
                marins extraordinaires, et laissez-vous bercer par la sérénité absolue 
                de ce sanctuaire naturel. Chaque moment aux Maldives est une invitation 
                au rêve et à la détente.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1200+</div>
                  <div className="text-gray-600">Îles coralliennes</div>
                </div>
                <div className="text-center p-4 bg-cyan-50 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">5-10</div>
                  <div className="text-gray-600">Jours de séjour</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Villa sur pilotis aux Maldives"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resorts Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              Resorts d'Exception
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos sélections de resorts de luxe pour un séjour inoubliable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Villas sur Pilotis',
                image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Hébergement de luxe au-dessus des eaux cristallines'
              },
              {
                name: 'Plages Privées',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Sable blanc immaculé et intimité absolue'
              },
              {
                name: 'Spa & Wellness',
                image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Soins relaxants face à l&rsquo;océan Indien'
              }
            ].map((resort, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={resort.image}
                    alt={resort.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{resort.name}</h3>
                  <p className="text-gray-600">{resort.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              Activités Paradisiaques
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🤿', title: 'Plongée & Snorkeling', desc: 'Explorez les récifs coralliens exceptionnels' },
              { icon: '🏝️', title: 'Excursions Îles', desc: 'Découverte des atolls et bancs de sable' },
              { icon: '🐠', title: 'Vie Marine', desc: 'Observation des raies manta et requins-baleines' },
              { icon: '🌅', title: 'Couchers de Soleil', desc: 'Moments magiques sur l&rsquo;océan Indien' }
            ].map((activity, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{activity.title}</h3>
                <p className="text-gray-600 text-sm">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
            Forfaits Maldives
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Séjour Découverte',
                price: '35,000 MAD',
                duration: '5 jours / 4 nuits',
                features: ['Resort 4*', 'Pension complète', 'Transferts inclus', 'Excursion snorkeling']
              },
              {
                title: 'Séjour Prestige',
                price: '58,000 MAD',
                duration: '7 jours / 6 nuits',
                features: ['Resort 5*', 'Villa sur pilotis', 'All inclusive', 'Spa & activités', 'Excursions privées'],
                featured: true
              },
              {
                title: 'Séjour Luxe',
                price: '92,000 MAD',
                duration: '10 jours / 9 nuits',
                features: ['Resort 5* Deluxe', 'Suite présidentielle', 'Butler privé', 'Yacht privé', 'Expériences sur mesure']
              }
            ].map((package_, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg ${package_.featured ? 'ring-2 ring-blue-500 transform scale-105' : ''}`}>
                {package_.featured && (
                  <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    Recommandé
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{package_.title}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">{package_.price}</div>
                <div className="text-gray-600 mb-6">{package_.duration}</div>
                <ul className="space-y-3 mb-8">
                  {package_.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="text-blue-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  package_.featured 
                    ? 'bg-blue-500 text-white hover:bg-blue-600' 
                    : 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
                }`}>
                  Réserver
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Prêt pour votre Évasion aux Maldives ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Laissez-nous créer votre séjour de rêve dans ce paradis tropical
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