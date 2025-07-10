import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

const TransitionDemo: React.FC = () => {
  const router = useRouter();

  const demoPages = [
    { href: '/', label: 'Accueil', color: 'bg-yellow-500' },
    { href: '/services/omra-hajj', label: 'Omra & Hajj', color: 'bg-green-500' },
    { href: '/services/voyages-affaires', label: 'Voyages d\'Affaires', color: 'bg-blue-500' },
    { href: '/services/hotels-luxe', label: 'Hôtels de Luxe', color: 'bg-purple-500' },
    { href: '/services/voyages-sur-mesure', label: 'Voyages Sur Mesure', color: 'bg-green-600' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-4 right-4 z-40 bg-white rounded-lg shadow-lg p-4 border"
    >
      <h3 className="text-sm font-semibold mb-3 text-gray-800">Test des Transitions</h3>
      <div className="space-y-2">
        {demoPages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className={`block px-3 py-2 text-xs text-white rounded transition-all duration-200 hover:scale-105 ${
              router.asPath === page.href ? 'ring-2 ring-gray-400' : ''
            } ${page.color}`}
          >
            {page.label}
          </Link>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-gray-200">
        <p className="text-xs text-gray-600 text-center">
          Cliquez pour tester les animations
        </p>
      </div>
    </motion.div>
  );
};

export default TransitionDemo;