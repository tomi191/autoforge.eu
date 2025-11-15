'use client';

import { motion } from 'framer-motion';
import { Award, Clock, Users, Shield } from 'lucide-react';

const stats = [
  {
    icon: Award,
    value: '10+',
    label: 'Години опит',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Users,
    value: '5000+',
    label: 'Доволни клиенти',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Консултации',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Гаранция',
    color: 'from-purple-500 to-pink-500',
  },
];

const partners = [
  'Bosch',
  'Castrol',
  'Total',
  'Gates',
  'Monroe',
  'Repsol',
];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-950/50 to-transparent" />

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
              За Нас
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            AutoForge Garage е професионален автосервиз с богат опит в областта на автомобилната индустрия.
            Нашият екип от квалифицирани специалисти предлага висококачествени услуги с използване на
            най-съвременно оборудване и оригинални части.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative group bg-gradient-to-br from-accent-900/50 to-accent-950/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-accent-700/30 hover:border-accent-600/50 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>

                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-accent-900/30 to-accent-950/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-accent-700/30"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
            Нашите Партньори
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center p-4 bg-accent-800/50 rounded-xl border border-accent-700/30 hover:border-primary-500/50 transition-all duration-300"
              >
                <span className="text-lg font-semibold text-gray-300 hover:text-primary-400 transition-colors">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 md:mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-primary-900/20 to-primary-950/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary-700/30">
            <h4 className="text-xl font-bold text-white mb-3">Качество</h4>
            <p className="text-gray-400">
              Използваме само оригинални части и висококачествени материали от водещи производители.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary-900/20 to-primary-950/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary-700/30">
            <h4 className="text-xl font-bold text-white mb-3">Професионализъм</h4>
            <p className="text-gray-400">
              Нашият екип се състои от сертифицирани специалисти с богат опит в автомобилната индустрия.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary-900/20 to-primary-950/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary-700/30">
            <h4 className="text-xl font-bold text-white mb-3">Гаранция</h4>
            <p className="text-gray-400">
              Предлагаме гаранция на всички извършени услуги и използвани части.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
