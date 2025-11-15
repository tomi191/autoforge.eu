# Deployment Guide - AutoForge Garage

## ✅ Build Status
Проектът е готов за production deployment!

## 🚀 Deployment Options

### Option 1: Vercel (Препоръчително)
```bash
# Инсталирай Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Netlify
```bash
# Build команда
npm run build

# Output директория
.next
```

### Option 3: Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📝 Персонализация

### 1. Обнови контактната информация

**app/layout.tsx** - Промени metadata:
```typescript
export const metadata: Metadata = {
  title: 'AutoForge Garage - Професионален Автосервиз',
  description: 'Вашето описание тук...',
  // ...
};
```

**components/Contact.tsx** - Линия 8-33:
```typescript
const contactInfo = [
  {
    icon: Phone,
    label: 'Телефон',
    value: '+359 XX XXX XXXX', // ⬅️ Промени тук
    href: 'tel:+359XXXXXXXXX',
  },
  {
    icon: Mail,
    label: 'Имейл',
    value: 'info@autoforge.bg', // ⬅️ Промени тук
    href: 'mailto:info@autoforge.bg',
  },
  {
    icon: MapPin,
    label: 'Адрес',
    value: 'ул. Примерна 123, София', // ⬅️ Промени тук
    href: 'https://maps.google.com/?q=your-address',
  },
  // ...
];
```

### 2. Обнови социалните мрежи

**components/Contact.tsx** - Линия 35-47:
```typescript
const socialMedia = [
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://facebook.com/yourpage', // ⬅️ Промени тук
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://instagram.com/yourpage', // ⬅️ Промени тук
  },
];
```

### 3. Обнови SEO Structured Data

**components/StructuredData.tsx** - Цялата информация за Google:
```typescript
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'AutoForge Garage', // ⬅️ Промени
  telephone: '+359881234567', // ⬅️ Промени
  email: 'info@autoforge.bg', // ⬅️ Промени
  address: {
    streetAddress: 'ул. Примерна 123', // ⬅️ Промени
    addressLocality: 'София', // ⬅️ Промени
  },
  geo: {
    latitude: 42.6977, // ⬅️ Промени (от Google Maps)
    longitude: 23.3219, // ⬅️ Промени
  },
  // ...
};
```

### 4. Добави истински лого

Замени **photo_2025-11-15_14-03-33.jpg** с:
- `public/logo.png` (за Open Graph)
- `public/favicon.ico` (за browser icon)
- Можеш да използваш [favicon.io](https://favicon.io) за генериране

### 5. Обнови домейна

В следните файлове промени `https://autoforge-garage.com` с твоя домейн:

- **app/layout.tsx** (line 28)
- **app/sitemap.ts** (line 4)
- **app/robots.ts** (line 8)
- **components/StructuredData.tsx** (line 7, 36)

### 6. Обнови партньорите (опционално)

**components/About.tsx** - Линия 36-43:
```typescript
const partners = [
  'Bosch',
  'Castrol',
  'Total',
  'Gates',
  'Monroe',
  'Repsol',
  // Добави или премахни партньори
];
```

## 🎨 Промяна на цветовата схема

**app/globals.css** - @theme секция (линии 3-29):
```css
@theme {
  --color-primary-500: #5678a2; /* Основен цвят */
  --color-primary-600: #435f88; /* По-тъмен вариант */
  /* ... */
}
```

## 📊 SEO Checklist

- ✅ Structured Data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Open Graph metadata
- ✅ Mobile-first responsive
- ✅ PWA ready (manifest.json)
- ⬜ Добави Google Analytics (вж. долу)
- ⬜ Добави Google Search Console
- ⬜ Добави meta description на български

### Добавяне на Google Analytics

В **app/layout.tsx** добави:
```tsx
<head>
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
    strategy="afterInteractive"
  />
  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `}
  </Script>
</head>
```

## 🔒 Security

Добави в **.env.local**:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📱 Тестване

- Chrome DevTools - Mobile simulation
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Schema Markup Validator](https://validator.schema.org/)

## 🎯 Performance

Текущи резултати:
- First Load JS: **145 kB**
- Всички страници: **Static (SSG)**
- Lighthouse Score: Тествай на localhost!

## 📞 Support

Ако имаш въпроси относно deployment или персонализация, препоръчвам:
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)

Успех с AutoForge Garage! 🚗✨
