import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  // Set document direction for RTL languages
  useEffect(() => {
    const isRTL = router.locale === 'ar';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = router.locale || 'fr';
  }, [router.locale]);

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(MyApp);