import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function EgyptePage() {

  return (
    <>
      <Head>
        <title>Égypte - Terre des Pharaons | Agence de Voyage</title>
        <meta name="description" content="Découvrez l'Égypte, berceau de la civilisation antique. Pyramides, temples et croisière sur le Nil." />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1568322445389-f64ac2515020?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Pyramides de Gizeh"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
          
          <div className="relative h-full flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
              <div className="transform transition-all duration-1000">
                <span className="inline-block text-amber-300 font-semibold text-sm uppercase tracking-wider mb-4">Destination Mystique</span>
                <h1 className="text-6xl md:text-8xl font-bold font-serif text-white mb-6 drop-shadow-2xl">
                  Égypte
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full mb-8"></div>
                <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12 drop-shadow-lg">
                  Explorez les merveilles de l'Égypte antique, des majestueuses pyramides aux temples sacrés
                </p>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                  <Link href="#destinations" className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Découvrir l'Égypte
                  </Link>
                  <Link href="#contact" className="bg-transparent border-2 border-white/80 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm">
                    Planifier votre voyage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations Section */}
        <section id="destinations" className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">Destinations Incontournables</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto rounded-full mb-6"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez les sites les plus emblématiques de l'Égypte
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Pyramides de Gizeh */}
              <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1568322445389-f64ac2515020?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Pyramides de Gizeh"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pyramides de Gizeh</h3>
                  <p className="text-gray-600 mb-4">Les dernières merveilles du monde antique encore debout</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">À partir de 120€</span>
                    <span className="text-sm text-gray-500">par personne</span>
                  </div>
                </div>
              </div>

              {/* Vallée des Rois */}
              <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Vallée des Rois"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Vallée des Rois</h3>
                  <p className="text-gray-600 mb-4">Tombeaux des pharaons et trésors de l'Égypte antique</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">À partir de 95€</span>
                    <span className="text-sm text-gray-500">par personne</span>
                  </div>
                </div>
              </div>

              {/* Croisière sur le Nil */}
              <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1553913861-c0fddf2619ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Croisière sur le Nil"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Croisière sur le Nil</h3>
                  <p className="text-gray-600 mb-4">Voyage magique sur le fleuve légendaire</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">À partir de 450€</span>
                    <span className="text-sm text-gray-500">par personne</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">Planifiez votre voyage en Égypte</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto rounded-full mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 mb-12">
              Contactez nos experts pour créer votre voyage sur mesure
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact" className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Nous contacter
              </Link>
              <Link href="/" className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg border border-gray-200">
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'fr', ['common', 'navigation'])),
    },
  };
};