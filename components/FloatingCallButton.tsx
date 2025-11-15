'use client';

import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingCallButton() {
  return (
    <motion.a
      href="tel:0899891170"
      className="md:hidden fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full shadow-2xl hover:shadow-primary-500/50 transition-all duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 1,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulsing Ring Animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-primary-400"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <Phone className="w-6 h-6 text-white relative z-10" />
    </motion.a>
  );
}
