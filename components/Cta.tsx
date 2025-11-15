'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function Cta() {
  return (
    <section id="cta" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-center overflow-hidden"
        >
          <div className="absolute -inset-2 bg-grid-pattern-white opacity-10" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Готови ли сте за безупречно обслужване?
            </h2>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-8">
              Не отлагайте грижата за вашия автомобил. Свържете се с нас днес и получете професионална консултация и качествено обслужване, на което можете да разчитате.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-200 text-primary-600 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-white/20 hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Запазете час сега
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}