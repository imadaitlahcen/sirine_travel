import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import LanguageSelector from './LanguageSelector';

interface SubmenuItem {
  href: string;
  label: string;
}

interface ServiceLink {
  href?: string;
  label: string;
  hasSubmenu?: boolean;
  submenu?: SubmenuItem[];
}

export default function OmraHajjHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { t } = useTranslation('navigation');
  const { t: tCommon } = useTranslation('common');

  const servicesLinks: ServiceLink[] = [
    { href: '/services/omra-hajj', label: t('services_submenu.omra_hajj') },
    {
      label: t('services_submenu.national_destinations'),
      hasSubmenu: true,
      submenu: [
         { href: '/aventure-desert-dakhla', label: t('national_submenu.aventure_desert_dakhla') },
         { href: '/road-trip-atlantique', label: t('national_submenu.road_trip_atlantique') },
         { href: '/entre-mer-montagne', label: t('national_submenu.entre_mer_montagne') },
         { href: '/agadir-atlantique', label: t('national_submenu.agadir_atlantique') },
         { href: '/le-nord', label: t('national_submenu.le_nord') },
         { href: '/escapade-sablotherapie-sahara', label: t('national_submenu.escapade_sablotherapie_sahara') }
       ]
    },
    {
      label: t('services_submenu.international_destinations'),
      hasSubmenu: true,
      submenu: [
        { href: '/dubai', label: t('international_submenu.dubai') },
        { href: '/egypte', label: t('international_submenu.egypt') },
        { href: '/istanbul', label: t('international_submenu.istanbul') }
      ]
    }
  ];

  return (
    <header className="bg-black fixed top-0 left-0 right-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <h1 className="text-xl sm:text-2xl font-bold text-white group-hover:text-gray-300 transition-colors duration-300">
                {tCommon('site_name')}
              </h1>
              <span className="ml-2 sm:ml-3 text-xs sm:text-sm text-gray-400 font-medium">Omra & Hajj</span>
            </Link>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="/" className="text-white hover:text-gray-300 font-medium transition-colors duration-300 px-2 py-1 rounded">
              {t('menu.home')}
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-green-400 hover:text-green-300 font-medium transition-colors duration-300 px-2 py-1 rounded border-b-2 border-green-400 flex items-center">
                {t('menu.services')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {servicesLinks.map((item, index) => (
                    item.hasSubmenu ? (
                      <div key={index} className="relative group">
                        <div className="px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 font-medium cursor-pointer flex items-center justify-between">
                          {item.label}
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="absolute left-full top-0 ml-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                          {item.submenu?.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 font-medium"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : item.href ? (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-3 font-medium transition-colors duration-200 ${
                          item.href === '/services/omra-hajj' 
                            ? 'text-green-600 bg-green-50 border-l-4 border-green-600' 
                            : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ) : null
                  ))}
                </div>
              )}
            </div>
            
            
            <a href="/#about" className="text-white hover:text-gray-300 font-medium transition-colors duration-300 px-2 py-1 rounded">
              {t('menu.about')}
            </a>
            <a href="/#contact" className="text-white hover:text-gray-300 font-medium transition-colors duration-300 px-2 py-1 rounded">
              {t('menu.contact')}
            </a>
          </nav>

          {/* Language Selector, Omra/Hajj & Menu Mobile */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            {/* Language Selector */}
            <div className="flex-shrink-0">
              <LanguageSelector />
            </div>
            
            {/* WhatsApp spécialisé Omra */}
            <a
              href="https://wa.me/message/HCUPHT7NUHCOO1"
              className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center space-x-1 font-medium flex-shrink-0 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-base">🕌</span>
              <span className="hidden sm:inline">Omra/Hajj</span>
            </a>

            {/* Menu Mobile */}
            <button
              className="lg:hidden text-white hover:text-gray-300 transition-colors duration-300 p-2 rounded flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-800">
            <nav className="px-4 py-3 space-y-2">
              <Link
                href="/"
                className="block text-white hover:text-gray-300 font-medium transition-colors duration-300 px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('menu.home')}
              </Link>
              
              {/* Services Mobile Submenu */}
              <div>
                <button 
                  className="w-full text-left text-white hover:text-gray-300 font-medium transition-colors duration-300 px-3 py-2 rounded flex items-center justify-between"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  {t('menu.services')}
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {servicesLinks.map((item, index) => (
                      item.hasSubmenu ? (
                        <div key={index}>
                          <div className="text-gray-300 font-medium px-3 py-2 text-sm">
                            {item.label}
                          </div>
                          <div className="ml-4 space-y-1">
                            {item.submenu?.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block text-gray-400 hover:text-white font-medium transition-colors duration-300 px-3 py-2 rounded text-xs"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : item.href ? (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block text-gray-300 hover:text-white font-medium transition-colors duration-300 px-3 py-2 rounded text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ) : null
                    ))}
                  </div>
                )}
              </div>
              
              <a
                href="/#destinations"
                className="block text-white hover:text-gray-300 font-medium transition-colors duration-300 px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('menu.destinations')}
              </a>
              <a
                href="/#about"
                className="block text-white hover:text-gray-300 font-medium transition-colors duration-300 px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('menu.about')}
              </a>
              <a
                href="/#contact"
                className="block text-white hover:text-gray-300 font-medium transition-colors duration-300 px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('menu.contact')}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}