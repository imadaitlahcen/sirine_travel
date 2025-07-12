import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';

export default function TrendingDestinations() {
  const { t } = useTranslation('home');
  const [hoveredDestination, setHoveredDestination] = useState<string | null>(null);

  const mainDestinations = [
    {
      name: 'Omra & Hajj',
      slug: 'services/omra-hajj',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      descriptionKey: 'trending.destinations.mecca.description',
      price: 'À partir de 28,000 MAD'
    },
    {
      name: 'Istanbul',
      subtitle: 'Turquie',
      slug: 'istanbul',
      image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      descriptionKey: 'trending.destinations.istanbul.description',
      price: 'À partir de 12,000 MAD'
    },
    {
      name: 'Dubaï',
      slug: 'dubai',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      descriptionKey: 'trending.destinations.dubai.description',
      price: 'À partir de 22,000 MAD'
    },
    {
      name: 'Égypte',
      slug: 'egypte',
      image: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      descriptionKey: 'trending.destinations.egypt.description',
      price: 'À partir de 14,000 MAD'
    }
  ];



  return (
    <section id="tendances-moment" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            {t('trending.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('trending.subtitle')}
          </p>
        </div>

        {/* Main Destinations - 2 Columns Layout */}
        <div className="space-y-16">
          {mainDestinations.map((destination, index) => (
            <div key={destination.name} className={`grid lg:grid-cols-2 gap-8 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Image Column */}
              <div className={`relative h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl group ${
                index % 2 === 1 ? 'lg:col-start-2' : ''
              }`}
                onMouseEnter={() => setHoveredDestination(destination.name)}
                onMouseLeave={() => setHoveredDestination(null)}
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <div className={`transform transition-all duration-500 ${
                    hoveredDestination === destination.name ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-90'
                  }`}>
                    <h3 className="text-4xl md:text-5xl font-bold mb-2 font-serif">
                      {destination.name}
                    </h3>
                    {destination.subtitle && (
                      <p className="text-xl opacity-90 mb-4">
                        {destination.subtitle}
                      </p>
                    )}
                    <div className="flex items-center">
                      <span className="text-2xl font-semibold">
                        {destination.price}
                      </span>
                      <div className="ml-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">✈️</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className={`space-y-6 ${
                index % 2 === 1 ? 'lg:col-start-1' : ''
              }`}>
                <div>
                  <h4 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
                    {destination.name}
                    {destination.subtitle && (
                      <span className="text-gray-600 text-2xl ml-2">({destination.subtitle})</span>
                    )}
                  </h4>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {t(destination.descriptionKey)}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      {destination.price}
                    </span>
                    <Link
                      href={`/${destination.slug}`}
                      className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Découvrir
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}