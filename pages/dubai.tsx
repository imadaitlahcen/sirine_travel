import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function DubaiPage() {

  return (
    <>
      <Head>
        <title>Dubaï - Luxe Moderne et Traditions | Agence de Voyage</title>
        <meta name="description" content="Découvrez Dubaï, métropole futuriste alliant luxe moderne et traditions orientales. Expérience unique au cœur des Émirats." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Skyline de Dubaï au coucher du soleil"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            Dubaï
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Luxe moderne et traditions orientales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
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
                Dubaï, Métropole des Mille et Une Nuits
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Dubaï vous éblouit par son mélange unique de modernité futuriste 
                et de traditions ancestrales. Cette métropole des Émirats Arabes Unis 
                repousse constamment les limites de l'architecture, du luxe et de 
                l'innovation.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Explorez ses gratte-ciels vertigineux, ses centres commerciaux 
                grandioses, ses souks authentiques et ses plages dorées. Dubaï 
                offre une expérience de voyage incomparable où le rêve devient 
                réalité à chaque instant.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-3xl font-bold text-amber-600 mb-2">828m</div>
                  <div className="text-gray-600">Burj Khalifa</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">4-7</div>
                  <div className="text-gray-600">Jours de voyage</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Burj Khalifa et fontaines de Dubaï"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              Attractions Emblématiques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les merveilles architecturales et culturelles de Dubaï
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Burj Khalifa',
                image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Plus haute tour du monde avec vue panoramique'
              },
              {
                name: 'Burj Al Arab',
                image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Hôtel iconique en forme de voile'
              },
              {
                name: 'Palm Jumeirah',
                image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Île artificielle en forme de palmier'
              }
            ].map((attraction, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{attraction.name}</h3>
                  <p className="text-gray-600">{attraction.description}</p>
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
              Expériences Uniques
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏜️', title: 'Safari Désert', desc: 'Aventure dans les dunes avec dîner bédouin' },
              { icon: '🛍️', title: 'Shopping Luxe', desc: 'Centres commerciaux et souks traditionnels' },
              { icon: '🏖️', title: 'Plages Premium', desc: 'Détente sur les plages privées de luxe' },
              { icon: '🍽️', title: 'Gastronomie', desc: 'Restaurants étoilés et cuisine orientale' }
            ].map((experience, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                <div className="text-4xl mb-4">{experience.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{experience.title}</h3>
                <p className="text-gray-600 text-sm">{experience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
            Forfaits Dubaï
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Découverte',
                price: '2,200€',
                duration: '4 jours / 3 nuits',
                features: ['Hôtel 4*', 'Petit-déjeuner', 'Transferts', 'City tour', 'Safari désert']
              },
              {
                title: 'Prestige',
                price: '3,800€',
                duration: '6 jours / 5 nuits',
                features: ['Hôtel 5*', 'Demi-pension', 'Burj Khalifa', 'Atlantis', 'Shopping tour', 'Spa'],
                featured: true
              },
              {
                title: 'Luxe Absolu',
                price: '6,500€',
                duration: '8 jours / 7 nuits',
                features: ['Resort 5* Deluxe', 'All inclusive', 'Suite premium', 'Yacht privé', 'Hélicoptère', 'Butler']
              }
            ].map((package_, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg ${package_.featured ? 'ring-2 ring-amber-500 transform scale-105' : ''}`}>
                {package_.featured && (
                  <div className="bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    Populaire
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{package_.title}</h3>
                <div className="text-3xl font-bold text-amber-600 mb-2">{package_.price}</div>
                <div className="text-gray-600 mb-6">{package_.duration}</div>
                <ul className="space-y-3 mb-8">
                  {package_.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="text-amber-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  package_.featured 
                    ? 'bg-amber-500 text-white hover:bg-amber-600' 
                    : 'border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white'
                }`}>
                  Réserver
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Prêt pour votre Aventure à Dubaï ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Découvrez la magie de Dubaï avec nos circuits personnalisés
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