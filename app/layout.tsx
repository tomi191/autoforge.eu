import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StructuredData from '@/components/StructuredData';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-geist-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'AutoForge Garage - Професионален Автосервиз',
    template: '%s | AutoForge Garage'
  },
  description: 'AutoForge Garage - вашият доверен партньор за професионална автомобилна поддръжка и ремонт. Специализирани услуги за климатици, спирачки, окачване, диагностика и много други.',
  keywords: ['автосервиз', 'ремонт на автомобили', 'диагностика', 'климатици', 'спирачки', 'окачване', 'вулканизация', 'автомобилни услуги'],
  authors: [{ name: 'AutoForge Garage' }],
  creator: 'AutoForge Garage',
  publisher: 'AutoForge Garage',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'AutoForge Garage - Професионален Автосервиз',
    description: 'Професионални автомобилни услуги - диагностика, ремонт, поддръжка',
    url: 'https://autoforge-garage.com',
    siteName: 'AutoForge Garage',
    locale: 'bg_BG',
    type: 'website',
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
    icon: '/favicon.ico',
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
        {children}
      </body>
    </html>
  );
}
