import React, { useState } from 'react';
import { Globe, MapPin } from 'lucide-react';
import { useTranslation } from 'next-i18next';

interface DestinationToggleProps {
  onToggle?: (selected: 'national' | 'international') => void;
  defaultSelected?: 'national' | 'international';
}

const DestinationToggle: React.FC<DestinationToggleProps> = ({ 
  onToggle, 
  defaultSelected = 'national' 
}) => {
  const { t } = useTranslation('home');
  const [selected, setSelected] = useState<'national' | 'international'>(defaultSelected);

  const handleToggle = (option: 'national' | 'international') => {
    setSelected(option);
    onToggle?.(option);
    
    // Smooth scroll to relevant section
    setTimeout(() => {
      if (option === 'national') {
        const element = document.getElementById('maroc-terre-lumiere');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        const element = document.getElementById('tendances-moment');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  };

  return (
    <div className="flex items-center justify-center mb-8">
      <div className="flex bg-white/20 backdrop-blur-sm rounded-full p-1 shadow-lg border border-white/30">
        {/* Destinations Nationales Button */}
        <button
          onClick={() => handleToggle('national')}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-countryside font-semibold text-sm
            ${
              selected === 'national'
                ? 'bg-black/80 backdrop-blur-sm text-white shadow-md transform scale-105'
                : 'bg-white/10 backdrop-blur-sm text-gray-700 hover:text-gray-900 hover:bg-white/20'
            }
          `}
        >
          <MapPin 
            size={18} 
            className={`
              transition-all duration-300
              ${
                selected === 'national'
                  ? 'text-white'
                  : 'text-gray-500'
              }
            `}
          />
          <span>{t('hero.cta_secondary')}</span>
        </button>

        {/* Voyages Internationaux Button */}
        <button
          onClick={() => handleToggle('international')}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-countryside font-semibold text-sm
            ${
              selected === 'international'
                ? 'bg-black/80 backdrop-blur-sm text-white shadow-md transform scale-105'
                : 'bg-white/10 backdrop-blur-sm text-gray-700 hover:text-gray-900 hover:bg-white/20'
            }
          `}
        >
          <Globe 
            size={18} 
            className={`
              transition-all duration-300
              ${
                selected === 'international'
                  ? 'text-white'
                  : 'text-gray-500'
              }
            `}
          />
          <span>{t('hero.cta_primary')}</span>
        </button>
      </div>
    </div>
  );
};

export default DestinationToggle;