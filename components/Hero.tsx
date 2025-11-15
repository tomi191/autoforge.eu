'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <Image
        src="/images/hero-bg.jpg"
        alt="Автосервиз AutoForge Garage"
        layout="fill"
        objectFit="cover"
        quality={85}
        className="z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-primary-900/30 border border-primary-700/50 rounded-full px-4 py-2 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-primary-300">Вашият доверен автосервиз във Варна</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Професионален Автосервиз
            </span>
            <span className="block mt-2 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              AutoForge Garage
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed px-4">
            Ние предлагаме качествени ремонти, компютърна диагностика и пълна поддръжка за вашия автомобил. Доверете се на нашия опит.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-primary-500/50 hover:scale-105"
            >
              Разгледайте услугите
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-accent-800 hover:bg-accent-700 text-white rounded-lg font-semibold transition-all duration-300 border border-accent-600"
            >
              Запазете час
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a href="#services" className="flex flex-col items-center space-y-2 group">
            <span className="text-sm text-gray-500 group-hover:text-primary-400 transition-colors">
              Разгледай
            </span>
            <ChevronDown className="w-6 h-6 text-primary-400 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
