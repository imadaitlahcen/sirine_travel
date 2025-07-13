import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function ItaliePage() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('site_name')}</title>
        <meta name="description" content="Découvrez l'Italie avec nos voyages sur mesure. Art, cuisine, histoire et dolce vita vous attendent." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Paysage toscan en Italie"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            Italie
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Dolce Vita Italienne - Voyage au Cœur de l&rsquo;Art, de la Cuisine et de l&rsquo;Histoire
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
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
                Découvrez la Beauté de l&rsquo;Italie
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                L&rsquo;Italie vous invite à un voyage extraordinaire à travers ses villes d&rsquo;art, 
                ses paysages à couper le souffle et sa gastronomie légendaire. De Rome la 
                Éternelle à Venise la Sérénissime, en passant par Florence et la Toscane, 
                chaque région révèle ses trésors uniques.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Laissez-vous séduire par l&rsquo;art de vivre italien, entre patrimoine historique 
                exceptionnel, cuisine raffinée et hospitalité chaleureuse. Nos circuits sur 
                mesure vous permettront de vivre une expérience authentique et inoubliable.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                  <div className="text-gray-600">Villes visitées</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">7-14</div>
                  <div className="text-gray-600">Jours de voyage</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Colisée de Rome"
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
              Destinations Incontournables
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explorez les plus belles destinations d'Italie avec nos circuits personnalisés
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rome',
                image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'La Ville Éternelle et ses monuments antiques'
              },
              {
                name: 'Florence',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Berceau de la Renaissance et de l&rsquo;art italien'
              },
              {
                name: 'Venise',
                image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'La Sérénissime et ses canaux romantiques'
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Prêt pour votre Voyage en Italie ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contactez nos experts pour créer votre voyage sur mesure en Italie
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