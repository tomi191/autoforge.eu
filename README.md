# AutoForge Garage

Професионален уебсайт за автосервиз AutoForge Garage, създаден с Next.js 15, React 19, TypeScript и Tailwind CSS.

## Характеристики

- **Mobile-First дизайн** - Оптимизиран за мобилни устройства
- **Bento UI стил** - Модерен и интерактивен дизайн
- **SEO оптимизиран** - С metadata и structured data (JSON-LD)
- **Анимации** - Плавни анимации с Framer Motion
- **Responsive** - Адаптивен дизайн за всички устройства
- **Бързо зареждане** - Оптимизирана производителност с Next.js

## Технологии

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React Icons

## Секции на сайта

1. **Hero** - Главна секция с CTA бутони
2. **Services** - Bento grid с 12 автомобилни услуги
3. **About** - Информация за сервиза, статистики и партньори
4. **Contact** - Контактна информация и социални мрежи

## Услуги

- Климатици
- Масла
- Филтри
- Ремъци
- Окачване
- Амортисьори
- Лагери
- Карета
- Съединители
- Спирачки
- Вулканизатор
- Диагностика

## Стартиране на проекта

```bash
# Инсталация на dependencies
npm install

# Development режим
npm run dev

# Production build
npm run build

# Стартиране на production сървър
npm start
```

Отворете [http://localhost:3000](http://localhost:3000) във вашия браузър.

## Структура на проекта

```
autoforge/
├── app/
│   ├── layout.tsx      # Root layout с SEO metadata
│   ├── page.tsx        # Главна страница
│   └── globals.css     # Глобални стилове
├── components/
│   ├── Navigation.tsx  # Навигационно меню
│   ├── Hero.tsx        # Hero секция
│   ├── Services.tsx    # Секция с услуги (Bento UI)
│   ├── About.tsx       # За нас секция
│   ├── Contact.tsx     # Контакти секция
│   └── StructuredData.tsx  # JSON-LD structured data
├── public/
│   └── favicon.ico
└── package.json
```

## SEO Оптимизация

- Open Graph metadata
- JSON-LD structured data
- Semantic HTML
- Responsive meta tags
- Robots.txt настройки

## Цветова схема

Базирана на логото на AutoForge Garage:
- Primary: Сини тонове (#435f88 - #5678a2)
- Accent: Тъмно сиви (#40454d - #606874)
- Background: Градиенти от тъмни тонове

## License

Този проект е създаден за AutoForge Garage.
