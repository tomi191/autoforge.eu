'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  { name: 'Bosch', logo: 'https://cdn.worldvectorlogo.com/logos/bosch-2.svg' },
  { name: 'Castrol', logo: 'https://cdn.worldvectorlogo.com/logos/castrol-2.svg' },
  { name: 'Shell', logo: 'https://cdn.worldvectorlogo.com/logos/shell-4.svg' },
  { name: 'Mobil 1', logo: 'https://cdn.worldvectorlogo.com/logos/mobil-6.svg' },
  { name: 'Michelin', logo: 'https://cdn.worldvectorlogo.com/logos/michelin-1.svg' },
  { name: 'Brembo', logo: 'https://cdn.worldvectorlogo.com/logos/brembo-2.svg' },
];

export default function Partners() {
  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section id="partners" className="py-20 md:py-24 bg-accent-950/50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Партньори, на които се доверяваме
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Работим само с доказани марки, за да гарантираме най-високо качество на частите и консумативите.
          </p>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative w-full">
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-accent-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-accent-950 to-transparent z-10" />

          {/* Animated Scroll */}
          <motion.div
            className="flex gap-12 md:gap-16"
            animate={{
              x: ['0%', '-33.333%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-40 h-24 p-6 bg-accent-800/30 rounded-xl border border-accent-700/20 hover:border-primary-500/30 transition-all duration-300 group"
                style={{
                  filter: 'grayscale(100%) brightness(0.7)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'grayscale(0%) brightness(1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'grayscale(100%) brightness(0.7)';
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pause hint text */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Посочете с мишката върху лого за да го видите в цвят
        </p>
      </div>
    </section>
  );
}
