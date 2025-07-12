import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const destinations = [
  {
    name: 'Omra & Hajj',
    description: 'Vivez une expérience spirituelle unique avec nos forfaits Omra premium',
    price: 'À partir de 25 000 DH',
    image: '/destinations/mecca.svg',
    category: 'Spirituel'
  },
  {
    name: 'Maldives',
    description: 'Séjournez dans des villas sur pilotis au cœur du paradis',
    price: 'À partir de 35 000 DH',
    image: '/destinations/maldives.svg',
    category: 'Luxe'
  },
  {
    name: 'Dubai',
    description: 'Découvrez le summum du luxe moderne dans la ville des superlatifs',
    price: 'À partir de 15 000 DH',
    image: '/destinations/dubai.svg',
    category: 'Prestige'
  },
  {
    name: 'Seychelles',
    description: 'Évadez-vous sur des plages immaculées et dans des resorts exclusifs',
    price: 'À partir de 40 000 DH',
    image: '/destinations/seychelles.svg',
    category: 'Luxe'
  },
  {
    name: 'Istanbul',
    description: 'Immergez-vous dans l\'histoire et le raffinement ottoman',
    price: 'À partir de 12 000 DH',
    image: '/destinations/istanbul.svg',
    category: 'Culture'
  },
  {
    name: 'Bali',
    description: 'Ressourcez-vous dans des villas privées au cœur de la nature',
    price: 'À partir de 28 000 DH',
    image: '/destinations/bali.svg',
    category: 'Bien-être'
  }
];

export default function Destinations() {
  const { t } = useTranslation('home');
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('destinations.title')}</h2>
          <p className="text-xl text-gray-600">{t('destinations.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.name}
              className="group relative overflow-hidden rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                <Image
                  src={destination.image}
                  alt={destination.name}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                <span className="inline-block px-3 py-1 mb-3 text-sm font-semibold bg-white/20 rounded-full backdrop-blur-sm">
                  {destination.category}
                </span>
                <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                <p className="text-white/90 mb-3">{destination.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-yellow-400">{destination.price}</span>
                  <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm transition-colors duration-300">
                    En savoir plus
                  </button>
                </div>
              </div>

              <div className="absolute top-4 right-4 z-20">
                <span className="animate-pulse">
                  {destination.category === 'Luxe' && '💎'}
                  {destination.category === 'Spirituel' && '🕌'}
                  {destination.category === 'Prestige' && '✨'}
                  {destination.category === 'Culture' && '🏛️'}
                  {destination.category === 'Bien-être' && '🌺'}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Découvrir toutes nos destinations
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}