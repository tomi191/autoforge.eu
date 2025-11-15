'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Clock, Users, Shield } from 'lucide-react';
import Image from 'next/image';

const stats = [
  {
    icon: Award,
    value: '10+',
    number: 10,
    suffix: '+',
    label: 'Години опит',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Users,
    value: '5000+',
    number: 5000,
    suffix: '+',
    label: 'Доволни клиенти',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Clock,
    value: '24/7',
    number: 0,
    suffix: '',
    label: 'Консултации',
    color: 'from-green-500 to-emerald-500',
    noAnimation: true,
  },
  {
    icon: Shield,
    value: '100%',
    number: 100,
    suffix: '%',
    label: 'Гаранция',
    color: 'from-purple-500 to-pink-500',
  },
];

// Animated Counter Component
function AnimatedCounter({ end, suffix, noAnimation }: { end: number; suffix: string; noAnimation?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !noAnimation) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end, noAnimation]);

  return (
    <span ref={ref}>
      {noAnimation ? '' : count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-950/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                За нас
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              AutoForge Garage е модерен автосервиз във Варна, специализиран в предоставянето на цялостни решения за вашия автомобил. Нашият екип от сертифицирани механици използва последно поколение оборудване за диагностика и ремонт, гарантирайки прецизност и надеждност.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Ние работим само с висококачествени части от доказани производители, за да осигурим дълъг живот и безупречна работа на вашия автомобил.
            </p>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-80 md:h-full rounded-2xl overflow-hidden border border-accent-700/30"
          >
            <Image
              src="/images/about-us.svg"
              alt="Екипът на AutoForge Garage"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 my-16"
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
                  {stat.noAnimation ? (
                    stat.value
                  ) : (
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} noAnimation={stat.noAnimation} />
                  )}
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

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-primary-900/20 to-primary-950/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary-700/30">
            <h4 className="text-xl font-bold text-white mb-3">Качество ⭐</h4>
            <p className="text-gray-400">
              Използваме само оригинални части и висококачествени материали от водещи производители.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary-900/20 to-primary-950/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary-700/30">
            <h4 className="text-xl font-bold text-white mb-3">Професионализъм 👨‍🔧</h4>
            <p className="text-gray-400">
              Нашият екип се състои от сертифицирани специалисти с богат опит.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary-900/20 to-primary-950/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary-700/30">
            <h4 className="text-xl font-bold text-white mb-3">Гаранция 🛡️</h4>
            <p className="text-gray-400">
              Предлагаме гаранция на всички извършени услуги и използвани части.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
