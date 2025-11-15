'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: 'С какви марки автомобили работите?',
    answer: 'Работим с почти всички популярни марки и модели автомобили. Нашият екип има богат опит с европейски, азиатски и американски производители. За специфични или по-редки модели, моля, свържете се с нас предварително.',
  },
  {
    question: 'Предлагате ли гаранция за вложените части и труд?',
    answer: 'Да, предлагаме пълна гаранция както за вложените части, така и за извършения труд. Периодът на гаранцията варира в зависимост от вида на ремонта и използваните части. Всичко се описва в документите, които получавате.',
  },
  {
    question: 'Колко време отнема стандартна смяна на масло и филтри?',
    answer: 'Стандартна смяна на масло и филтри обикновено отнема между 30 и 60 минути. Препоръчваме да си запазите час предварително, за да избегнете чакане.',
  },
  {
    question: 'Мога ли да дойда на място без предварително записан час?',
    answer: 'Приемаме и клиенти без предварително записан час, но даваме предимство на тези с резервация. За да сме сигурни, че ще можем да ви обърнем внимание веднага, е най-добре да ни се обадите предварително.',
  },
];

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-accent-700/30 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-primary-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 pb-6 pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Често задавани въпроси
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Намирате отговори на най-често задаваните въпроси от нашите клиенти.
          </p>
        </motion.div>

        <div className="bg-accent-950/30 backdrop-blur-sm rounded-2xl border border-accent-700/30 px-6">
          {faqData.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}