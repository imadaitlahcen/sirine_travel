import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export interface TransitionConfig {
  duration: number;
  showProgress: boolean;
  minLoadingTime: number;
  customMessage?: string;
}

const defaultConfig: TransitionConfig = {
  duration: 300,
  showProgress: false,
  minLoadingTime: 400,
};

export const usePageTransition = (config: Partial<TransitionConfig> = {}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStartTime, setLoadingStartTime] = useState<number | null>(null);
  const finalConfig = { ...defaultConfig, ...config };

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
      setLoadingStartTime(Date.now());
    };

    const handleComplete = () => {
      if (loadingStartTime) {
        const elapsed = Date.now() - loadingStartTime;
        const remainingTime = Math.max(0, finalConfig.minLoadingTime - elapsed);
        
        setTimeout(() => {
          setIsLoading(false);
          setLoadingStartTime(null);
        }, remainingTime);
      } else {
        setIsLoading(false);
      }
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router, finalConfig.minLoadingTime, loadingStartTime]);

  const getPageType = () => {
    const path = router.asPath;
    if (path === '/') return 'home';
    if (path.includes('/services/omra-hajj')) return 'omra';
    if (path.includes('/services/voyages-affaires')) return 'business';
    if (path.includes('/services/hotels-luxe')) return 'luxury';
    if (path.includes('/services/voyages-sur-mesure')) return 'custom';
    if (path.includes('/services')) return 'services';
    return 'default';
  };

  const getLoadingMessage = () => {
    if (finalConfig.customMessage) return finalConfig.customMessage;
    
    const pageType = getPageType();
    const messages = {
      home: 'Retour à l\'accueil...',
      omra: 'Préparation de votre voyage spirituel...',
      business: 'Chargement des solutions d\'affaires...',
      luxury: 'Accès aux hôtels de luxe...',
      custom: 'Création de votre voyage sur mesure...',
      services: 'Chargement de nos services...',
      default: 'Chargement en cours...'
    };
    
    return messages[pageType] || messages.default;
  };

  const getSpinnerColor = () => {
    const pageType = getPageType();
    const colors = {
      home: 'yellow' as const,
      omra: 'green' as const,
      business: 'blue' as const,
      luxury: 'purple' as const,
      custom: 'green' as const,
      services: 'blue' as const,
      default: 'blue' as const
    };
    
    return colors[pageType] || colors.default;
  };

  return {
    isLoading,
    config: finalConfig,
    pageType: getPageType(),
    loadingMessage: getLoadingMessage(),
    spinnerColor: getSpinnerColor()
  };
};

export default usePageTransition;