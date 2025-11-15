import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Телефон 📞',
    value: '089 989 1170',
    href: 'tel:0899891170',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MapPin,
    label: 'Адрес 📍',
    value: 'бул. "Трети март", 9000 Варна',
    href: 'https://maps.app.goo.gl/NoZTihRYMMtMJW7L9',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Clock,
    label: 'Работно време ⏰',
    value: 'Пн-Пт: 9:00-18:00',
    subValue: 'Събота и Неделя: Почивни дни',
    color: 'from-purple-500 to-pink-500',
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
            Имате въпроси или искате да запазите час? Свържете се с нас!
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

        {/* Map & Emergency & Social */}
        <div className="grid md:grid-cols-5 gap-6">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 relative bg-gradient-to-br from-accent-900/50 to-accent-950/50 backdrop-blur-sm rounded-2xl p-1 border border-accent-700/30 min-h-[400px] overflow-hidden group"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d422.76620407732077!2d27.888844280890563!3d43.23742407563568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a455ee9ee0f92d%3A0xb6c20a36426bf01f!2sAutoForge%20Garage!5e1!3m2!1sen!2sbg!4v1763222228912!5m2!1sen!2sbg" 
              width="100%" 
              height="100%" 
              style={{ border:0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            ></iframe>
          </motion.div>

          <div className="md:col-span-2 flex flex-col gap-6">
            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-sm rounded-2xl p-6 border border-red-700/30 flex flex-col justify-center items-center text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-2">Аварийна помощ 🆘</h3>
              <p className="text-gray-400 mb-4">
                На разположение сме 24/7 за спешни случаи и консултации.
              </p>
              <a
                href="tel:0899891170"
                className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 font-semibold transition-colors text-xl"
              >
                <Phone className="w-6 h-6" />
                <span>089 989 1170</span>
              </a>
            </motion.div>
            
            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex-1 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-700/30 flex flex-col justify-center items-center text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-2">Последвайте ни 👥</h3>
              <p className="text-gray-400 mb-4">
                Присъединете се към нашата Facebook група за промоции и новини.
              </p>
              <a
                href="https://www.facebook.com/profile.php?id=61583678194221"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors text-lg"
              >
                <Facebook className="w-6 h-6" />
                <span>Facebook Група</span>
              </a>
            </motion.div>
          </div>
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
