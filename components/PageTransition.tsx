import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { usePageTransition } from '../hooks/usePageTransition';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const router = useRouter();
  const { isLoading, config } = usePageTransition({
    minLoadingTime: 300,
    showProgress: false
  });

  return (
    <>
      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center space-y-4">
              {/* Simple Professional Spinner */}
              <div className="relative">
                <div className="w-8 h-8 border-2 border-gray-300 rounded-full animate-spin border-t-blue-600"></div>
              </div>
              
              {/* Simple Loading Text */}
              <p className="text-sm font-medium text-gray-700">Chargement...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content with Subtle Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={router.asPath}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: config.duration / 1000,
            ease: "easeInOut"
          }}
          className="min-h-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageTransition;