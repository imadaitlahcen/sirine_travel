import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function GrecePage() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Grèce - Berceau de la Civilisation | Agence de Voyage</title>
        <meta name="description" content="Découvrez la Grèce, berceau de la civilisation occidentale. Îles paradisiaques, sites antiques et culture méditerranéenne." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Santorin avec ses maisons blanches et bleues"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            Grèce
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Berceau de la civilisation, terre des dieux
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
                Grèce, Éternelle Méditerranée
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                La Grèce vous transporte dans un voyage à travers l'histoire, 
                où chaque pierre raconte une légende et chaque île révèle un 
                paradis. Des ruines antiques d'Athènes aux eaux cristallines 
                des Cyclades, découvrez le berceau de la démocratie et de la philosophie.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Savourez la gastronomie méditerranéenne authentique, explorez 
                des villages pittoresques aux maisons blanches et bleues, et 
                laissez-vous envoûter par l'hospitalité légendaire des Grecs. 
                La Grèce est une invitation au voyage dans le temps et à la détente.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">6,000+</div>
                  <div className="text-gray-600">Îles et îlots</div>
                </div>
                <div className="text-center p-4 bg-cyan-50 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">7-14</div>
                  <div className="text-gray-600">Jours de séjour</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Acropole d'Athènes"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Islands Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              Îles Emblématiques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explorez les perles de la mer Égée
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Santorin',
                image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Couchers de soleil légendaires et architecture cycladique'
              },
              {
                name: 'Mykonos',
                image: 'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Vie nocturne animée et plages de rêve'
              },
              {
                name: 'Crète',
                image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Plus grande île grecque, riche en histoire minoenne'
              }
            ].map((island, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={island.image}
                    alt={island.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{island.name}</h3>
                  <p className="text-gray-600">{island.description}</p>
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
              { icon: '🏛️', title: 'Sites Antiques', desc: 'Acropole, Delphes et Olympie' },
              { icon: '🍇', title: 'Gastronomie', desc: 'Moussaka, souvlaki et vins locaux' },
              { icon: '⛵', title: 'Croisières', desc: 'Navigation entre les îles grecques' },
              { icon: '🏖️', title: 'Plages Paradisiaques', desc: 'Eaux cristallines et sable doré' }
            ].map((experience, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                <div className="text-4xl mb-4">{experience.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{experience.title}</h3>
                <p className="text-gray-600 text-sm">{experience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
            Forfaits Grèce
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Découverte',
                price: '1,400€',
                duration: '7 jours / 6 nuits',
                features: ['Hôtel 3-4*', 'Petit-déjeuner', 'Transferts', 'Athènes & 1 île', 'Visites guidées']
              },
              {
                title: 'Odyssée',
                price: '2,200€',
                duration: '10 jours / 9 nuits',
                features: ['Hôtel 4-5*', 'Demi-pension', 'Multi-îles', 'Croisière incluse', 'Expériences locales'],
                featured: true
              },
              {
                title: 'Luxe Antique',
                price: '3,800€',
                duration: '14 jours / 13 nuits',
                features: ['Resort 5*', 'Pension complète', 'Yacht privé', 'Guide archéologue', 'Expériences VIP']
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
            Prêt pour votre Odyssée Grecque ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Découvrez les trésors de la Méditerranée antique
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