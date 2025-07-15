import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function BaliPage() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('site_name')}</title>
        <meta name="description" content="Découvrez Bali, l'île des dieux et des temples sacrés. Spiritualité, nature luxuriante et culture balinaise authentique." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Rizières en terrasses de Bali"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            Bali
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Île des dieux et des temples sacrés
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">
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
                Bali, Sanctuaire de Sérénité
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Bali vous transporte dans un monde où spiritualité et nature 
                s'harmonisent parfaitement. Cette île indonésienne, surnommée 
                &ldquo;l&rsquo;Île des Dieux&rdquo;, offre un mélange envoûtant de temples anciens, 
                de rizières verdoyantes et de plages paradisiaques.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Immergez-vous dans la culture balinaise authentique, explorez 
                des paysages à couper le souffle, et laissez-vous bercer par 
                la philosophie de vie locale. Bali est une invitation au 
                ressourcement et à la découverte de soi.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">10,000+</div>
                  <div className="text-gray-600">Temples hindous</div>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">7-14</div>
                  <div className="text-gray-600">Jours de séjour</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Temple de Tanah Lot à Bali"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
              Régions Emblématiques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explorez la diversité des paysages et cultures de Bali
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ubud',
                image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Centre culturel et spirituel avec rizières en terrasses'
              },
              {
                name: 'Seminyak',
                image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Plages sophistiquées et vie nocturne branchée'
              },
              {
                name: 'Sanur',
                image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                description: 'Tranquillité et traditions balinaises authentiques'
              }
            ].map((region, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={region.image}
                    alt={region.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{region.name}</h3>
                  <p className="text-gray-600">{region.description}</p>
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
              { icon: '🏛️', title: 'Temples Sacrés', desc: 'Visite des temples hindous et cérémonies' },
              { icon: '🌾', title: 'Rizières', desc: 'Randonnées dans les terrasses de Jatiluwih' },
              { icon: '🧘', title: 'Yoga & Spa', desc: 'Retraites bien-être et massages balinais' },
              { icon: '🎨', title: 'Artisanat', desc: 'Ateliers de sculpture et peinture traditionnelle' }
            ].map((experience, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                <div className="text-4xl mb-4">{experience.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{experience.title}</h3>
                <p className="text-gray-600 text-sm">{experience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">
            Forfaits Bali
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Découverte',
                price: '18,000 MAD',
                duration: '7 jours / 6 nuits',
                features: ['Hôtel 3-4*', 'Petit-déjeuner', 'Transferts', 'Ubud & temples', 'Cours de cuisine']
              },
              {
                title: 'Immersion',
                price: '28,000 MAD',
                duration: '10 jours / 9 nuits',
                features: ['Resort 4-5*', 'Demi-pension', 'Multi-régions', 'Spa traditionnel', 'Activités culturelles'],
                featured: true
              },
              {
                title: 'Luxe Spirituel',
                price: '42,000 MAD',
                duration: '14 jours / 13 nuits',
                features: ['Villa privée', 'Butler personnel', 'Retraite yoga', 'Expériences VIP', 'Guide privé']
              }
            ].map((package_, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg ${package_.featured ? 'ring-2 ring-green-500 transform scale-105' : ''}`}>
                {package_.featured && (
                  <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    Recommandé
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{package_.title}</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">{package_.price}</div>
                <div className="text-gray-600 mb-6">{package_.duration}</div>
                <ul className="space-y-3 mb-8">
                  {package_.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  package_.featured 
                    ? 'bg-green-500 text-white hover:bg-green-600' 
                    : 'border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white'
                }`}>
                  Réserver
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-500">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Prêt pour votre Voyage Spirituel à Bali ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Laissez-vous guider vers la sérénité de l&rsquo;île des dieux
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
      ...(await serverSideTranslations(locale ?? 'fr', ['common', 'navigation'])),
    },
  };
};