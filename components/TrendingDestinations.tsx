import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';

export default function TrendingDestinations() {
  const { t } = useTranslation('home');
  const [hoveredCountry, setHoveredCountry] = useState<number | null>(null);

  const trendingCountries = [
    {
      name: 'La Mecque',
      slug: 'services/omra-hajj',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Ville sainte de l\'Islam - Pèlerinage spirituel et découverte culturelle',
      price: 'À partir de 2,800€',
      gradient: 'from-emerald-400 to-green-600'
    },
    {
      name: 'Italie',
      slug: 'italie',
      image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Dolce Vita Italienne - Voyage au Cœur de l\'Art, de la Cuisine et de l\'Histoire',
      price: 'À partir de 1,500€',
      gradient: 'from-green-400 to-red-500'
    },
    {
      name: 'Istanbul',
      slug: 'istanbul',
      image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Istanbul is the New Cool - Partez pour une escapade chic',
      price: 'À partir de 1,200€',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Maldives',
      slug: 'maldives',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Paradis tropical aux eaux cristallines',
      price: 'À partir de 3,500€',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      name: 'Dubaï',
      slug: 'dubai',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Luxe moderne et traditions orientales',
      price: 'À partir de 2,200€',
      gradient: 'from-amber-400 to-orange-500'
    },
    {
      name: 'Bali',
      slug: 'bali',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Île des dieux et des temples sacrés',
      price: 'À partir de 1,800€',
      gradient: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
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

        {/* Countries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingCountries.map((country, index) => (
            <Link
              key={index}
              href={`/${country.slug}`}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer block"
              onMouseEnter={() => setHoveredCountry(index)}
              onMouseLeave={() => setHoveredCountry(null)}
            >
              {/* Background Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={country.image}
                  alt={country.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${country.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className={`transform transition-all duration-500 ${
                  hoveredCountry === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-90'
                }`}>
                  <h3 className="text-2xl font-bold mb-2 font-serif">
                    {country.name}
                  </h3>
                  <p className="text-sm opacity-90 mb-3 leading-relaxed">
                    {country.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">
                      {country.price}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                      hoveredCountry === index ? 'scale-110 bg-white/30' : ''
                    }`}>
                      <span className="text-sm">→</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Border */}
              <div className={`absolute inset-0 border-2 border-white/20 rounded-2xl transition-all duration-300 ${
                hoveredCountry === index ? 'border-white/40 scale-105' : ''
              }`} />

              {/* Floating Elements */}
              <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${
                hoveredCountry === index ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
              }`}>
                <span className="text-xl">✈️</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105">
            Voir toutes les destinations
          </button>
        </div>
      </div>
    </section>
  );
}