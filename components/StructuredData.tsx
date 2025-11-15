export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'AutoForge Garage',
    description: 'Професионален автосервиз за ремонт и поддръжка на автомобили',
    url: 'https://autoforge-garage.com',
    telephone: '+359881234567',
    email: 'info@autoforge.bg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Примерна 123',
      addressLocality: 'София',
      addressCountry: 'BG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.6977,
      longitude: 23.3219,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    image: 'https://autoforge-garage.com/logo.png',
    sameAs: [
      'https://facebook.com/autoforge',
      'https://instagram.com/autoforge',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Автомобилни услуги',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Климатици',
            description: 'Диагностика, зареждане и ремонт на автомобилни климатични системи',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Смяна на масла',
            description: 'Смяна на моторни масла и филтри',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Спирачки',
            description: 'Смяна на накладки, дискове и спирачна течност',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Диагностика',
            description: 'Компютърна диагностика на всички системи',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Вулканизация',
            description: 'Смяна на гуми, баланс и ремонт на джанти',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
