module.exports = {
  i18n: {
    defaultLocale: 'fr',
    locales: ['ar', 'fr', 'en'],
    localeDetection: true,
  },
  fallbackLng: {
    default: ['fr'],
    fr: ['fr'],
    en: ['en'],
    ar: ['ar']
  },
  debug: process.env.NODE_ENV === 'development',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  
  // Support for RTL languages
  interpolation: {
    escapeValue: false,
  },
  
  // Namespace configuration
  ns: ['common', 'navigation', 'home', 'about', 'services', 'destinations', 'contact', 'egypte', 'istanbul', 'dubai'],
  defaultNS: 'common',
};