'use client';

import { motion } from 'framer-motion';
import {
  Droplets,
  Filter,
  Cable,
  Wrench,
  Zap,
  Circle,
  Settings,
  RotateCw,
  Disc,
  Wifi,
  Search,
} from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Климатици',
    description: 'Диагностика, зареждане и ремонт на автомобилни климатични системи',
    color: 'from-blue-500 to-cyan-500',
    size: 'md:col-span-2',
  },
  {
    icon: Droplets,
    title: 'Масла',
    description: 'Смяна на моторни масла и филтри с високо качество',
    color: 'from-amber-500 to-orange-500',
    size: 'md:col-span-1',
  },
  {
    icon: Filter,
    title: 'Филтри',
    description: 'Подмяна на въздушни, маслени и горивни филтри',
    color: 'from-green-500 to-emerald-500',
    size: 'md:col-span-1',
  },
  {
    icon: Cable,
    title: 'Ремъци',
    description: 'Смяна на семеринги и разпределителни ремъци',
    color: 'from-purple-500 to-pink-500',
    size: 'md:col-span-1',
  },
  {
    icon: Wrench,
    title: 'Окачване',
    description: 'Ремонт и профилактика на окачване и ходова част',
    color: 'from-red-500 to-rose-500',
    size: 'md:col-span-2',
  },
  {
    icon: Zap,
    title: 'Амортисьори',
    description: 'Диагностика и подмяна на амортисьори',
    color: 'from-indigo-500 to-blue-500',
    size: 'md:col-span-1',
  },
  {
    icon: Circle,
    title: 'Лагери',
    description: 'Подмяна на колесни и други лагери',
    color: 'from-teal-500 to-cyan-500',
    size: 'md:col-span-1',
  },
  {
    icon: Settings,
    title: 'Карета',
    description: 'Ремонт на кормилни карета и системи',
    color: 'from-yellow-500 to-amber-500',
    size: 'md:col-span-1',
  },
  {
    icon: RotateCw,
    title: 'Съединители',
    description: 'Подмяна на съединители и сервизиране',
    color: 'from-pink-500 to-rose-500',
    size: 'md:col-span-1',
  },
  {
    icon: Disc,
    title: 'Спирачки',
    description: 'Смяна на накладки, дискове и спирачна течност',
    color: 'from-red-500 to-orange-500',
    size: 'md:col-span-2',
  },
  {
    icon: Wifi,
    title: 'Вулканизатор',
    description: 'Смяна на гуми, баланс и ремонт на джанти',
    color: 'from-slate-500 to-gray-500',
    size: 'md:col-span-1',
  },
  {
    icon: Search,
    title: 'Диагностика',
    description: 'Компютърна диагностика на всички системи',
    color: 'from-violet-500 to-purple-500',
    size: 'md:col-span-1',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Нашите Услуги
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Професионални автомобилни услуги с гаранция за качество
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className={`${service.size} group relative bg-gradient-to-br from-accent-900/50 to-accent-950/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-accent-700/30 hover:border-accent-600/50 transition-all duration-300 bento-card overflow-hidden`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
