import React, { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

interface TravelOffer {
  id: number;
  image: string;
  title: string;
  locations: string;
  date: string;
  duration: string;
  rating: number;
  route: string;
}

const VoyageMaroc: React.FC = () => {
  const { t } = useTranslation(['common', 'home']);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const travelOffers: TravelOffer[] = [
    {
      id: 1,
      image: '/destinations/morocco-desert.jpg',
      title: t('morocco.offers.dakhla.title', { ns: 'home' }),
      locations: t('morocco.offers.dakhla.locations', { ns: 'home' }),
      date: '15/08/2025',
      duration: t('morocco.offers.dakhla.duration', { ns: 'home' }),
      rating: 4.9,
      route: '/aventure-desert-dakhla'
    },
    {
      id: 2,
      image: '/destinations/Aghroud-Agadir-webp_format.webp',
      title: t('morocco.offers.road_trip.title', { ns: 'home' }),
      locations: t('morocco.offers.road_trip.locations', { ns: 'home' }),
      date: '22/09/2025',
      duration: t('morocco.offers.road_trip.duration', { ns: 'home' }),
      rating: 4.8,
      route: '/road-trip-atlantique'
    },
    {
      id: 3,
      image: '/destinations/Carablanca-Nador-webp_format.webp',
      title: t('morocco.offers.mer_montagne.title', { ns: 'home' }),
      locations: t('morocco.offers.mer_montagne.locations', { ns: 'home' }),
      date: '10/10/2025',
      duration: t('morocco.offers.mer_montagne.duration', { ns: 'home' }),
      rating: 4.7,
      route: '/entre-mer-montagne'
    },
    {
      id: 4,
      image: '/destinations/Surf-Taghazout-image_webp.webp',
      title: t('morocco.offers.agadir.title', { ns: 'home' }),
      locations: t('morocco.offers.agadir.locations', { ns: 'home' }),
      date: '05/11/2025',
      duration: t('morocco.offers.agadir.duration', { ns: 'home' }),
      rating: 4.6,
      route: '/agadir-atlantique'
    },
    {
      id: 5,
      image: '/destinations/bain-de-sable-webp_format.webp',
      title: t('morocco.offers.sablotherapie.title', { ns: 'home' }),
      locations: t('morocco.offers.sablotherapie.locations', { ns: 'home' }),
      date: '18/12/2025',
      duration: t('morocco.offers.sablotherapie.duration', { ns: 'home' }),
      rating: 4.8,
      route: '/escapade-sablotherapie-sahara'
    },
    {
      id: 6,
      image: '/destinations/Jebha-Playa-Sghira-webp_format.webp',
      title: t('morocco.offers.nord.title', { ns: 'home' }),
      locations: t('morocco.offers.nord.locations', { ns: 'home' }),
      date: '25/01/2026',
      duration: t('morocco.offers.nord.duration', { ns: 'home' }),
      rating: 4.5,
      route: '/le-nord'
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Width of one card plus gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-4 h-4">
          <StarIcon className="w-4 h-4 text-gray-300 fill-current absolute" />
          <div className="overflow-hidden w-1/2">
            <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
          </div>
        </div>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <StarIcon key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-current" />
      );
    }

    return stars;
  };

  return (
    <section id="maroc-terre-lumiere" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif cursor-pointer hover:text-blue-600 transition-colors duration-300"
          >
            {t('morocco.title', { ns: 'home' })}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('morocco.subtitle', { ns: 'home' })}
          </p>
        </div>

        {/* Scroll Container */}
        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 hidden md:block border border-gray-200"
            aria-label="Scroll left"
          >
            <ChevronLeftIcon className="w-5 h-5 text-gray-700" />
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 hidden md:block border border-gray-200"
            aria-label="Scroll right"
          >
            <ChevronRightIcon className="w-5 h-5 text-gray-700" />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 md:px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {travelOffers.map((offer) => (
              <div
                key={offer.id}
                className="flex-none w-80 h-[480px] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100 flex flex-col"
                onClick={() => router.push(offer.route)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden rounded-t-2xl flex-shrink-0">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/destinations/default-morocco.jpg';
                    }}
                  />
                  {/* Date Pill */}
                  <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                    {offer.date}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-200 font-serif">
                    {offer.title}
                  </h3>

                  {/* Locations */}
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {offer.locations}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-700 font-semibold text-sm bg-gray-100 px-3 py-1 rounded-full">
                      {offer.duration}
                    </span>
                  </div>

                  {/* Spacer to push button to bottom */}
                  <div className="flex-grow"></div>

                  {/* Rating and Button - Fixed at bottom */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-1">
                      {renderStars(offer.rating)}
                      <span className="text-sm text-gray-600 ml-1">
                        ({offer.rating})
                      </span>
                    </div>
                    <button 
                       className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                       onClick={(e) => {
                         e.stopPropagation();
                         router.push(offer.route);
                       }}
                     >
                      {t('buttons.discover', { ns: 'common' })}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default VoyageMaroc;