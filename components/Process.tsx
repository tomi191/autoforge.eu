'use client';

import { motion } from 'framer-motion';
import { Phone, Search, Wrench, Car } from 'lucide-react';

const processSteps = [
  {
    icon: Phone,
    title: '1. Свържете се с нас',
    description: 'Обадете ни се или ни посетете на място, за да обсъдим нуждите на вашия автомобил и да запазим удобен час.',
  },
  {
    icon: Search,
    title: '2. Пълна диагностика',
    description: 'Ще извършим обстоен преглед и компютърна диагностика, за да идентифицираме точно проблема.',
  },
  {
    icon: Wrench,
    title: '3. Качествен ремонт',
    description: 'Нашият екип ще извърши ремонта с прецизност, използвайки висококачествени части и спазвайки стандартите.',
  },
  {
    icon: Car,
    title: '4. Готови за път!',
    description: 'Ще се свържем с вас, когато автомобилът ви е готов, преминал финален тест и готов за път.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Как работим?
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Нашият процес е създаден да бъде лесен, прозрачен и удобен за вас.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-accent-700/30 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative text-center"
                >
                  <div className="relative inline-block">
                    <div className="absolute -inset-2 bg-primary-500/20 rounded-full blur-lg" />
                    <div className="relative w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-accent-900 border-2 border-primary-500/50">
                      <Icon className="w-10 h-10 text-primary-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-6 mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}