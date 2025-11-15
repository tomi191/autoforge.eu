export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'AutoForge Garage',
    description: 'Професионален автосервиз за ремонт и поддръжка на автомобили във Варна.',
    url: 'https://autoforge.eu',
    telephone: '+359899891170',
    email: 'info@autoforge.bg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'бул. "Трети март"',
      addressLocality: 'Варна',
      postalCode: '9000',
      addressCountry: 'BG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.237424,
      longitude: 27.888844,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
       {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '10:00',
        closes: '14:00',
      },
    ],
    priceRange: '$$',
    image: 'https://autoforge.eu/logo.jpg',
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
