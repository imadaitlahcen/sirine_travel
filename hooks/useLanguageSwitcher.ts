import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

interface LanguageOption {
  code: string;
  name: string;
  flag: string;
  direction: 'ltr' | 'rtl';
}

const languages: LanguageOption[] = [
  { code: 'ar', name: 'العربية', flag: '🇸🇦', direction: 'rtl' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', direction: 'ltr' },
  { code: 'en', name: 'English', flag: '🇬🇧', direction: 'ltr' }
];

export interface LanguageSwitcherState {
  currentLanguage: LanguageOption;
  availableLanguages: LanguageOption[];
  isChanging: boolean;
  switchLanguage: (langCode: string) => Promise<void>;
  getLanguageByCode: (code: string) => LanguageOption | undefined;
  isRTL: boolean;
}

export const useLanguageSwitcher = (): LanguageSwitcherState => {
  const router = useRouter();
  const { i18n } = useTranslation();
  const [isChanging, setIsChanging] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === router.locale) || languages[1]; // Default to French
  const isRTL = currentLanguage.direction === 'rtl';

  // Update document direction when language changes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.dir = currentLanguage.direction;
      document.documentElement.lang = currentLanguage.code;
      
      // Update meta tags for SEO
      const metaLang = document.querySelector('meta[name="language"]');
      if (metaLang) {
        metaLang.setAttribute('content', currentLanguage.code);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'language';
        meta.content = currentLanguage.code;
        document.head.appendChild(meta);
      }
    }
  }, [currentLanguage]);

  // Add smooth transition classes for RTL/LTR switching
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const body = document.body;
      body.classList.add('language-transition');
      
      const timer = setTimeout(() => {
        body.classList.remove('language-transition');
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [currentLanguage.direction]);

  const switchLanguage = useCallback(async (langCode: string) => {
    if (langCode === currentLanguage.code || isChanging) {
      return;
    }

    setIsChanging(true);

    try {
      // Add transition class to body
      if (typeof document !== 'undefined') {
        document.body.classList.add('language-switching');
      }

      // Get current path and query
      const { pathname, asPath, query } = router;
      
      // Store scroll position
      const scrollPosition = window.pageYOffset;
      
      // Change language using Next.js router
      await router.push({ pathname, query }, asPath, { 
        locale: langCode,
        scroll: false // Prevent automatic scroll to top
      });
      
      // Restore scroll position after language change
      setTimeout(() => {
        window.scrollTo(0, scrollPosition);
      }, 100);
      
      // Update i18n instance
      if (i18n.language !== langCode) {
        await i18n.changeLanguage(langCode);
      }
      
      // Dispatch custom event for other components to listen
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('languageChanged', {
          detail: { 
            previousLanguage: currentLanguage.code,
            newLanguage: langCode,
            direction: languages.find(l => l.code === langCode)?.direction || 'ltr'
          }
        }));
      }
      
    } catch (error) {
      console.error('Error switching language:', error);
    } finally {
      setIsChanging(false);
      
      // Remove transition class
      if (typeof document !== 'undefined') {
        setTimeout(() => {
          document.body.classList.remove('language-switching');
        }, 300);
      }
    }
  }, [currentLanguage.code, isChanging, router, i18n]);

  const getLanguageByCode = useCallback((code: string): LanguageOption | undefined => {
    return languages.find(lang => lang.code === code);
  }, []);

  return {
    currentLanguage,
    availableLanguages: languages,
    isChanging,
    switchLanguage,
    getLanguageByCode,
    isRTL
  };
};

// Hook for listening to language changes
export const useLanguageChangeListener = (callback: (detail: any) => void) => {
  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      callback(event.detail);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('languageChanged', handleLanguageChange as EventListener);
      
      return () => {
        window.removeEventListener('languageChanged', handleLanguageChange as EventListener);
      };
    }
  }, [callback]);
};

// Hook for dynamic content loading based on language
export const useDynamicContent = (contentKey: string, namespace: string = 'common') => {
  const { t, i18n } = useTranslation(namespace);
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const loadContent = useCallback(async () => {
    setIsLoading(true);
    try {
      // Simulate dynamic content loading
      await new Promise(resolve => setTimeout(resolve, 100));
      const translatedContent = t(contentKey);
      setContent(translatedContent);
    } catch (error) {
      console.error('Error loading dynamic content:', error);
      setContent(contentKey); // Fallback to key
    } finally {
      setIsLoading(false);
    }
  }, [contentKey, t]);

  useEffect(() => {
    loadContent();
  }, [loadContent, i18n.language]);

  return { content, isLoading, reload: loadContent };
};

// Utility function to get browser language preference
export const getBrowserLanguage = (): string => {
  if (typeof navigator === 'undefined') return 'fr';
  
  const browserLang = navigator.language || (navigator as any).userLanguage;
  const langCode = browserLang.split('-')[0].toLowerCase();
  
  // Check if browser language is supported
  const supportedLanguages = languages.map(l => l.code);
  return supportedLanguages.includes(langCode) ? langCode : 'fr';
};

// Utility function to format text based on language direction
export const formatTextDirection = (text: string, isRTL: boolean): string => {
  if (!isRTL) return text;
  
  // Add RTL-specific formatting if needed
  return text;
};

// Hook for managing language-specific animations
export const useLanguageAnimations = () => {
  const { isRTL, isChanging } = useLanguageSwitcher();
  
  const getAnimationClass = useCallback((baseClass: string) => {
    const rtlClass = isRTL ? 'rtl' : 'ltr';
    const changingClass = isChanging ? 'changing' : '';
    return `${baseClass} ${rtlClass} ${changingClass}`.trim();
  }, [isRTL, isChanging]);
  
  const getSlideDirection = useCallback((direction: 'left' | 'right') => {
    if (isRTL) {
      return direction === 'left' ? 'right' : 'left';
    }
    return direction;
  }, [isRTL]);
  
  return {
    getAnimationClass,
    getSlideDirection,
    isRTL,
    isChanging
  };
};