import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AutoForge Garage - Професионален Автосервиз',
    short_name: 'AutoForge',
    description: 'Професионални автомобилни услуги - диагностика, ремонт, поддръжка',
    start_url: '/',
    display: 'standalone',
    background_color: '#1d2535',
    theme_color: '#435f88',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
