import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

import TrendingDestinations from '../components/TrendingDestinations';
import Footer from '../components/Footer';

export default function TendancesPage() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('site_name')}</title>
        <meta name="description" content="Découvrez les destinations tendances du moment avec Serine Travel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tendances du Moment
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Découvrez les destinations les plus populaires et les expériences de voyage uniques du moment
            </p>
          </div>
        </section>

        {/* Trending Destinations Section */}
        <section className="py-16">
          <TrendingDestinations />
        </section>
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'fr', ['common', 'navigation', 'home'])),
    },
  };
};