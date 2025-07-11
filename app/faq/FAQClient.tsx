'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

const faqs = [
  // ... (copy the faqs array from the original file)
  {
    question: "What types of equipment can be financed?",
    answer: "We finance a wide range of equipment across various industries, including manufacturing, construction, healthcare, transportation, restaurant, and more. We handle both new and used equipment, with financing available for amounts ranging from $25,000 to $5 million."
  },
  // Add all other faqs here similarly
];

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="w-full bg-indigo-dye text-white py-32 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className="text-2xl mb-12 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find answers to common questions about our equipment financing solutions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact" className="bg-light-sea-green text-white py-4 px-10 rounded-full text-xl font-semibold hover:bg-white hover:text-indigo-dye transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Get Personalized Answers</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto py-24 px-4">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xl font-semibold text-indigo-dye">{faq.question}</span>
                {openIndex === index ? <FaChevronUp className="text-light-sea-green" /> : <FaChevronDown className="text-light-sea-green" />}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full bg-light-sea-green text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Still Have Questions?
          </motion.h2>
          <motion.p
            className="text-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our team is here to help. Contact us for personalized assistance with your equipment financing needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="bg-white text-light-sea-green py-4 px-10 rounded-full text-xl font-semibold hover:bg-indigo-dye hover:text-white transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Contact Us Today</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 