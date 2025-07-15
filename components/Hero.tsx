import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import DestinationToggle from './DestinationToggle';

export default function Hero() {
  const { t } = useTranslation('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          {/* Fallback background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
        </video>
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center text-white transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4 text-white drop-shadow-2xl">
              {t('hero.title')}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-white/50 to-white/20 mx-auto rounded-full"></div>
          </div>

          <DestinationToggle 
            defaultSelected="national"
          />
          
          <div className="flex justify-center mt-6">
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border-2 border-white/80 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm text-lg font-countryside"
            >
              {t('hero.cta_contact')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}