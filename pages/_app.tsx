import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import { Kalam } from 'next/font/google';
import { Noto_Sans_Arabic } from 'next/font/google';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import Header from '../components/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const countryside = Kalam({
  variable: '--font-countryside',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: '--font-arabic',
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  // Set document direction for RTL languages
  useEffect(() => {
    const isRTL = router.locale === 'ar';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = router.locale || 'fr';
    
    // Add Arabic font class for Arabic locale
    if (isRTL) {
      document.documentElement.classList.add('font-arabic');
    } else {
      document.documentElement.classList.remove('font-arabic');
    }
  }, [router.locale]);

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} ${countryside.variable} ${notoSansArabic.variable} antialiased`}>
      <Header />
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
    </div>
  );
}

export default appWithTranslation(MyApp);