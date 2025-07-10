import { useMemo } from 'react';
import { useTranslation } from 'next-i18next';

// Interface pour les données de statistiques
interface StatData {
  iconSrc: string;
  iconLabel: string;
  value: string;
  title: string;
  description: string;
  bgColor: string;
  hoverColor: string;
  textColor: string;
}

// Composant StatCard réutilisable
interface StatCardProps {
  stat: StatData;
}

function StatCard({ stat }: StatCardProps) {
  return (
    <article className="text-center group" role="article">
      <div 
        className={`w-32 h-32 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 ${stat.hoverColor} transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-105`}
        aria-label={stat.iconLabel}
      >
        <img 
          src={stat.iconSrc} 
          alt={stat.iconLabel}
          className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className={`text-3xl font-bold ${stat.textColor} mb-2`}>
        {stat.value}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {stat.title}
      </h3>
      <p className="text-gray-600">
        {stat.description}
      </p>
    </article>
  );
}

export default function AboutSection() {
  const { t } = useTranslation('about');
  
  // Données extraites en constantes pour faciliter la maintenance
  const statsData: StatData[] = useMemo(() => [
    {
      iconSrc: '/2023-10-20T13_51_55.017648620_Experts.png',
      iconLabel: t('why_serine.stats.advisors.icon_label'),
      value: t('why_serine.stats.advisors.value'),
      title: t('why_serine.stats.advisors.title'),
      description: t('why_serine.stats.advisors.description'),
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
      hoverColor: 'group-hover:from-blue-100 group-hover:to-blue-200',
      textColor: 'text-blue-600'
    },
    {
      iconSrc: '/2023-10-20T13_51_43.434424206_Curation.png',
      iconLabel: t('why_serine.stats.destinations.icon_label'),
      value: t('why_serine.stats.destinations.value'),
      title: t('why_serine.stats.destinations.title'),
      description: t('why_serine.stats.destinations.description'),
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
      hoverColor: 'group-hover:from-green-100 group-hover:to-green-200',
      textColor: 'text-green-600'
    },
    {
      iconSrc: '/2023-10-20T13_51_32.843632941_Accompagnement (1).png',
      iconLabel: t('why_serine.stats.guides.icon_label'),
      value: t('why_serine.stats.guides.value'),
      title: t('why_serine.stats.guides.title'),
      description: t('why_serine.stats.guides.description'),
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
      hoverColor: 'group-hover:from-purple-100 group-hover:to-purple-200',
      textColor: 'text-purple-600'
    },
    {
      iconSrc: '/2023-10-20T13_51_21.553009047_Assistance.png',
      iconLabel: t('why_serine.stats.support.icon_label'),
      value: t('why_serine.stats.support.value'),
      title: t('why_serine.stats.support.title'),
      description: t('why_serine.stats.support.description'),
      bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100',
      hoverColor: 'group-hover:from-orange-100 group-hover:to-orange-200',
      textColor: 'text-orange-600'
    }
  ], [t]);

  return (
    <section className="py-16 md:py-20 bg-white" aria-labelledby="about-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Pourquoi Serine Travel */}
        <section 
          className="bg-gray-50 rounded-2xl p-8 sm:p-12 md:p-16"
          aria-labelledby="why-serine-title"
        >
          <h2 
            id="why-serine-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 md:mb-12 text-center font-serif"
          >
            {t('why_serine.title')}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {statsData.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}