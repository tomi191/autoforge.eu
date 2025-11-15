import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import StructuredData from '@/components/StructuredData';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-geist-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://autoforge.eu'),
  title: {
    default: 'AutoForge Garage - Автосервиз Варна',
    template: '%s | AutoForge Garage'
  },
  description: 'AutoForge Garage е вашият доверен автосервиз във Варна. Предлагаме качествена компютърна диагностика, ремонт на климатици, спирачки, окачване, смяна на масла и гуми.',
  keywords: ['автосервиз варна', 'ремонт на коли варна', 'компютърна диагностика варна', 'автоклиматици варна', 'ремонт спирачки варна', 'смяна масла варна', 'вулканизатор варна', 'автомобилни услуги варна', 'AutoForge Garage'],
  authors: [{ name: 'AutoForge Garage' }],
  creator: 'AutoForge Garage',
  publisher: 'AutoForge Garage',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'AutoForge Garage - Автосервиз Варна',
    description: 'Професионални автомонтьорски услуги във Варна - диагностика, ремонти и поддръжка.',
    url: 'https://autoforge.eu',
    siteName: 'AutoForge Garage',
    locale: 'bg_BG',
    type: 'website',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'AutoForge Garage Logo',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg">
      <head>
        <StructuredData />
      </head>
      <body className={inter.variable}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3998FG9S1S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3998FG9S1S');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
