'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Телефон',
    value: '+359 88 123 4567',
    href: 'tel:+359881234567',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Mail,
    label: 'Имейл',
    value: 'info@autoforge.bg',
    href: 'mailto:info@autoforge.bg',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: MapPin,
    label: 'Адрес',
    value: 'ул. Примерна 123, София',
    href: 'https://maps.google.com',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Clock,
    label: 'Работно време',
    value: 'Пн-Пт: 9:00-18:00',
    subValue: 'Събота и Неделя: Почивни дни',
    color: 'from-purple-500 to-pink-500',
  },
];

const socialMedia = [
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://facebook.com',
    color: 'hover:text-blue-500',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://instagram.com',
    color: 'hover:text-pink-500',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent-950 to-transparent" />

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
              Свържете се с нас
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Свържете се с нас за консултация или запазване на час
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: info.href ? 1.02 : 1 }}
                className="group relative bg-gradient-to-br from-accent-900/50 to-accent-950/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-accent-700/30 hover:border-accent-600/50 transition-all duration-300"
              >
                {/* Content */}
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${info.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm text-gray-400 mb-1">{info.label}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.icon === MapPin ? '_blank' : undefined}
                        rel={info.icon === MapPin ? 'noopener noreferrer' : undefined}
                        className="text-lg md:text-xl font-semibold text-white hover:text-primary-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <>
                        <p className="text-lg md:text-xl font-semibold text-white">
                          {info.value}
                        </p>
                        {info.subValue && (
                          <p className="text-sm text-gray-400 mt-1">{info.subValue}</p>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${info.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
              </motion.div>
            );
          })}
        </div>

        {/* Map & Social Media */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-accent-900/50 to-accent-950/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-accent-700/30 min-h-[300px] flex items-center justify-center overflow-hidden group"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />

            <div className="relative text-center">
              <MapPin className="w-16 h-16 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Нашето местоположение</h3>
              <p className="text-gray-400 mb-4">ул. Примерна 123, София</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-semibold transition-all duration-300"
              >
                Вижте в Google Maps
              </a>
            </div>
          </motion.div>

          {/* Social Media & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Social Media */}
            <div className="bg-gradient-to-br from-accent-900/50 to-accent-950/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-accent-700/30">
              <h3 className="text-xl font-bold text-white mb-4">Последвайте ни</h3>
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 rounded-lg bg-accent-800/50 border border-accent-700/30 ${social.color} transition-all duration-300 hover:scale-110`}
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-red-700/30">
              <h3 className="text-xl font-bold text-white mb-2">Аварийна помощ</h3>
              <p className="text-gray-400 mb-4">
                Налични сме 24/7 за консултации и аварийна помощ на пътя
              </p>
              <a
                href="tel:+359881234567"
                className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 font-semibold transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+359 88 123 4567</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-accent-700/30 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} AutoForge Garage. Всички права запазени.</p>
        </motion.div>
      </div>
    </section>
  );
}
