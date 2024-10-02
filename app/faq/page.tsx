"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

export default function FAQ() {
  const faqs = [
    {
      question: "What types of equipment can be financed?",
      answer: "We finance a wide range of equipment across various industries, including manufacturing, construction, healthcare, transportation, restaurant, and more. We handle both new and used equipment, with financing available for amounts ranging from $25,000 to $5 million."
    },
    {
      question: "What are the typical terms for equipment financing?",
      answer: "Our financing terms typically range from 24 to 84 months, depending on the type of equipment and your business needs."
    },
    {
      question: "How long does the approval process take?",
      answer: "For most applications, we can provide an approval decision within 24-48 hours. Larger transactions may require additional time."
    },
    {
      question: "Is there a minimum or maximum financing amount?",
      answer: "We offer financing solutions for equipment ranging from $25,000 to $5 million. Larger transactions can be accommodated with custom packages."
    },
    {
      question: "Do you finance both new and used equipment?",
      answer: "Yes, we provide financing options for both new and used equipment to fit your business needs and budget."
    },
    {
      question: "What documents are required for the application process?",
      answer: "Typically, we require a completed credit application and the most recent 3 months of bank statements. Larger transactions may require additional documentation such as financial statements or tax returns."
    },
    {
      question: "Do you require a down payment or advanced payment?",
      answer: "We collect as little as one advanced payment, sometimes first and last depending on the program. Customers are welcome to put more money down if they would like to reduce the financed amount."
    },
    {
      question: "Are there any early repayment penalties or fees?",
      answer: "Customers can pay off early if they would like, however, they will be responsible for the sum of the remaining payments."
    },
    {
      question: "What kind of support do you offer during the term of the lease or loan?",
      answer: "We offer support for any questions regarding the lease related to billing, insurance, payoffs, etc. For questions about the financed equipment, that would be handled with the seller."
    },
    {
      question: "Do you offer financing for startups or new businesses?",
      answer: "Yes, we offer flexible financing solutions for startups. We understand the unique challenges new businesses face and have programs designed to meet their needs."
    },
    {
      question: "What are the interest rates for equipment financing?",
      answer: "Our interest rates are competitive and vary based on factors such as credit history, type of equipment, and lease term. We work with many major lenders to offer rates as low as the market is offering."
    },
    {
      question: "Do you offer vendor programs for equipment sellers?",
      answer: "Yes, we offer comprehensive vendor programs designed to streamline the leasing process for equipment sellers and their clients. These programs provide additional support and benefits to both vendors and customers."
    },
    {
      question: "How does your application-only financing work?",
      answer: "We offer application-only financing for transactions up to $1 million. This streamlined process typically requires less documentation, making it faster and easier for qualified businesses to secure equipment financing."
    }
  ];

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