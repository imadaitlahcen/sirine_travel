import Head from 'next/head';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import TrendingDestinations from '../components/TrendingDestinations';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>{t('site_name')}</title>
        <meta name="description" content={t('tagline')} />
        <meta property="og:title" content={t('site_name')} />
        <meta property="og:description" content={t('tagline')} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white">
        <main>
          <Hero />
          <AboutSection />

          <TrendingDestinations />
    
          <Contact />
        </main>
        <Footer />

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/message/HCUPHT7NUHCOO1"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 animate-bounce-slow"
          target="_blank"
          rel="noopener noreferrer"
          title={t('contact.whatsapp')}
        >
          <span className="text-2xl">📱</span>
        </a>
      </div>

      {/* Custom Animation Classes */}
      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'fr', [
        'common',
        'navigation', 
        'home',
        'about',
        'contact'
      ])),
    },
  };
};