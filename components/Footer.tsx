import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Footer() {
  const { t } = useTranslation('navigation');
  const { t: tCommon } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Nos Services',
      links: [
        { label: 'Omra & Hajj', href: '#services' },
        { label: 'Voyages Sur-Mesure', href: '#services' },
        { label: 'Hôtels de Luxe', href: '#services' },
        { label: 'Voyages d\'Affaires', href: '#services' }
      ]
    },
    {
      title: 'Destinations',
      links: [
        { label: 'La Mecque', href: '#destinations' },
        { label: 'Istanbul', href: '#destinations' },
        { label: 'Dubai', href: '#destinations' },
        { label: 'Paris', href: '#destinations' }
      ]
    },
    {
      title: 'À Propos',
      links: [
        { label: 'Notre Histoire', href: '#about' },
        { label: 'Notre Équipe', href: '#team' },
        { label: 'Nos Valeurs', href: '#values' },
        { label: 'Mentions Légales', href: '/legal' }
      ]
    },
    {
      title: 'Contact',
      links: [
        { label: 'Téléphone: +212 XX XX XX XX', href: 'tel:+212XXXXXXXXX' },
        { label: 'WhatsApp: +212 XX XX XX XX', href: 'https://wa.me/212XXXXXXXXX' },
        { label: 'Email: contact@vaoyage.com', href: 'mailto:contact@vaoyage.com' },
        { label: 'Adresse: Casablanca, Maroc', href: 'https://goo.gl/maps/XXXXXX' }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Brand Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent mb-4">
            {tCommon('site_name')}
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Votre partenaire de confiance pour des voyages d'exception. Depuis 2024, nous créons des expériences uniques et mémorables.
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {sections.map((section) => (
            <div key={section.title} className="group">
              <h3 className="text-xl font-inter font-semibold text-white mb-6 relative">
                {section.title}
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500" />
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-all duration-300 flex items-center group/link text-sm leading-relaxed"
                    >
                      <span className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 transform scale-0 group-hover/link:scale-100 transition-transform duration-300" />
                      <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-slate-700/50 pt-12 mb-12">
          <div className="max-w-lg mx-auto text-center">
            <h3 className="text-2xl font-playfair font-semibold text-white mb-3">Newsletter Exclusive</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">Découvrez en avant-première nos offres exceptionnelles et destinations secrètes</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-4 rounded-xl bg-slate-800/50 border border-slate-600/50 focus:outline-none focus:border-blue-400 focus:bg-slate-800/80 transition-all duration-300 text-white placeholder-slate-400 backdrop-blur-sm"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-white rounded-xl hover:from-purple-500 hover:via-blue-500 hover:to-purple-600 transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 font-medium"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-6 md:mb-0">
            {[
              { icon: '📱', label: 'WhatsApp', href: 'https://wa.me/212XXXXXXXXX', color: 'hover:text-green-400' },
              { icon: '📸', label: 'Instagram', href: '#', color: 'hover:text-pink-400' },
              { icon: '👍', label: 'Facebook', href: '#', color: 'hover:text-blue-400' },
              { icon: '🐦', label: 'Twitter', href: '#', color: 'hover:text-sky-400' }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className={`w-12 h-12 flex items-center justify-center text-xl bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 backdrop-blur-sm ${social.color}`}
                title={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="text-slate-400 text-sm text-center md:text-right">
            <p className="font-medium">© {currentYear} {tCommon('site_name')}. Tous droits réservés.</p>
            <p className="mt-1 text-slate-500">Agence de voyage de luxe • Casablanca, Maroc</p>
          </div>
        </div>
      </div>
    </footer>
  );
}