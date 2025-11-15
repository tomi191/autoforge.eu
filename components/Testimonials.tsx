'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Иван Петров',
    role: 'Собственик на BMW',
    avatarUrl: 'https://ui-avatars.com/api/?name=Ivan+Petrov&background=3b82f6&color=fff&size=100',
    rating: 5,
    text: 'Невероятно обслужване! Екипът на AutoForge Garage се справи перфектно с ремонта на колата ми. Бързи, коректни и на разумни цени. Препоръчвам!',
  },
  {
    name: 'Мария Георгиева',
    role: 'Шофьор на Audi',
    avatarUrl: 'https://ui-avatars.com/api/?name=Maria+Georgieva&background=ec4899&color=fff&size=100',
    rating: 5,
    text: 'Много съм доволна от компютърната диагностика. Откриха проблема веднага и го отстраниха в рамките на деня. Определено ще ги посетя отново.',
  },
  {
    name: 'Георги Димитров',
    role: 'Клиент',
    avatarUrl: 'https://ui-avatars.com/api/?name=Georgi+Dimitrov&background=f59e0b&color=fff&size=100',
    rating: 5,
    text: 'Професионализъм на най-високо ниво. Смениха ми съединителя и колата върви като нова. Благодаря ви, момчета!',
  },
  {
    name: 'Стоян Василев',
    role: 'Шофьор на Mercedes',
    avatarUrl: 'https://ui-avatars.com/api/?name=Stoyan+Vasilev&background=10b981&color=fff&size=100',
    rating: 5,
    text: 'Отличен сервиз! Направиха цялостна профилактика на колата ми за час и половина. Цените са много коректни.',
  },
  {
    name: 'Елена Тодорова',
    role: 'Клиент',
    avatarUrl: 'https://ui-avatars.com/api/?name=Elena+Todorova&background=8b5cf6&color=fff&size=100',
    rating: 5,
    text: 'Най-добрият автосервиз във Варна! Винаги съм доволна от обслужването и качеството на работата.',
  },
  {
    name: 'Петър Иванов',
    role: 'Собственик на VW',
    avatarUrl: 'https://ui-avatars.com/api/?name=Petar+Ivanov&background=ef4444&color=fff&size=100',
    rating: 5,
    text: 'Поправиха ми климатика за една сутрин. Много бързо и качествено. Препоръчвам!',
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
        }`}
      />
    ))}
  </div>
);

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = testimonials.length - 1;
      if (newIndex >= testimonials.length) newIndex = 0;
      return newIndex;
    });
  };

  // Calculate which testimonials to show (3 at a time on desktop)
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push({ ...testimonials[index], key: index });
    }
    return result;
  };

  return (
    <section id="testimonials" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-950 to-transparent" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Отзиви от наши клиенти
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Вижте какво казват нашите доволни клиенти за нас.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Desktop */}
          <button
            onClick={() => paginate(-1)}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 z-10 p-3 rounded-full bg-accent-800 hover:bg-accent-700 text-white transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 z-10 p-3 rounded-full bg-accent-800 hover:bg-accent-700 text-white transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {getVisibleTestimonials().map((testimonial) => (
              <motion.div
                key={testimonial.key}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="bg-gradient-to-br from-accent-900/50 to-accent-950/50 backdrop-blur-sm rounded-2xl p-8 border border-accent-700/30 flex flex-col cursor-grab active:cursor-grabbing"
              >
                <div className="flex-grow mb-4">
                  <p className="text-gray-300 italic">&ldquo;{testimonial.text}&rdquo;</p>
                </div>
                <div className="flex items-center mt-auto">
                  <div className="flex-shrink-0 w-14 h-14 relative rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatarUrl}
                      alt={`Аватар на ${testimonial.name}`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-primary-400 w-8'
                    : 'bg-accent-600 w-2 hover:bg-accent-500'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
