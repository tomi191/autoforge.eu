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

const allServices = [
  {
    icon: Search,
    title: 'Диагностика 💻',
    description: 'Компютърна диагностика на всички системи за точно откриване на проблеми.',
    color: 'from-violet-500 to-purple-500',
    isMain: true,
  },
  {
    icon: Droplets,
    title: 'Климатици ❄️',
    description: 'Диагностика, зареждане и ремонт на автомобилни климатични системи.',
    color: 'from-blue-500 to-cyan-500',
    isMain: true,
  },
  {
    icon: Disc,
    title: 'Спирачки 🛑',
    description: 'Смяна на накладки, дискове и спирачна течност за вашата безопасност.',
    color: 'from-red-500 to-orange-500',
    isMain: true,
  },
  {
    icon: Wrench,
    title: 'Окачване 🚗',
    description: 'Ремонт и профилактика на окачване и ходова част за комфортно пътуване.',
    color: 'from-red-500 to-rose-500',
    isMain: true,
  },
  {
    icon: Droplets,
    title: 'Масла 💧',
    description: 'Смяна на моторни масла и филтри.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Filter,
    title: 'Филтри 🌬️',
    description: 'Подмяна на въздушни, маслени и горивни филтри.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Cable,
    title: 'Ремъци ⚙️',
    description: 'Смяна на ангренажни и пистови ремъци.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Амортисьори 🔩',
    description: 'Диагностика и подмяна на амортисьори.',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Circle,
    title: 'Лагери 🔄',
    description: 'Подмяна на колесни и други лагери.',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Settings,
    title: 'Карета 🔧',
    description: 'Ремонт на кормилни карета и системи.',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: RotateCw,
    title: 'Съединители ⚙️',
    description: 'Подмяна на съединители и маховици.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Wifi,
    title: 'Вулканизатор  pneus',
    description: 'Смяна, баланс и ремонт на гуми и джанти.',
    color: 'from-slate-500 to-gray-500',
  },
];

const mainServices = allServices.filter(s => s.isMain);
const otherServices = allServices.filter(s => !s.isMain);

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
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(to bottom, transparent 0%, rgba(43, 57, 79, 0.15) 50%, transparent 100%)',
            'linear-gradient(to bottom, transparent 0%, rgba(67, 95, 136, 0.15) 50%, transparent 100%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
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
              Нашите Услуги
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Предлагаме пълна гама от професионални автомобилни услуги с гаранция за качество.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="group relative bg-gradient-to-br from-accent-900/50 to-accent-950/50 backdrop-blur-sm rounded-2xl p-8 border border-accent-700/30 hover:border-accent-600/50 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute -inset-2 bg-gradient-to-r ${service.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Other Services */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
        >
            <h3 className="text-2xl font-bold text-white mb-8">И още...</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {otherServices.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-accent-900/30 rounded-lg p-4 flex items-center gap-4 border border-transparent hover:bg-accent-800/50 hover:border-accent-700 transition-all"
                        >
                            <Icon className={`w-6 h-6 text-primary-400`} />
                            <span className="font-semibold text-gray-300">{service.title}</span>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
      </div>
    </section>
  );
}
