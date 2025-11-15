'use client';

import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';

const testimonials = [
  {
    name: 'Иван Петров',
    role: 'Собственик на BMW',
    avatar: User,
    rating: 5,
    text: 'Невероятно обслужване! Екипът на AutoForge Garage се справи перфектно с ремонта на колата ми. Бързи, коректни и на разумни цени. Препоръчвам!',
  },
  {
    name: 'Мария Георгиева',
    role: 'Шофьор на Audi',
    avatar: User,
    rating: 5,
    text: 'Много съм доволна от компютърната диагностика. Откриха проблема веднага и го отстраниха в рамките на деня. Определено ще ги посетя отново.',
  },
  {
    name: 'Георги Димитров',
    role: 'Клиент',
    avatar: User,
    rating: 5,
    text: 'Професионализъм на най-високо ниво. Смениха ми съединителя и колата върви като нова. Благодаря ви, момчета!',
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
  return (
    <section id="testimonials" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-accent-900/50 to-accent-950/50 backdrop-blur-sm rounded-2xl p-8 border border-accent-700/30 flex flex-col"
            >
              <div className="flex-grow mb-4">
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </div>
              <div className="flex items-center mt-auto">
                <div className="flex-shrink-0">
                  <testimonial.avatar className="w-12 h-12 p-2 rounded-full bg-primary-500/20 text-primary-400" />
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
      </div>
    </section>
  );
}
