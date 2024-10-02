"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaWarehouse } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

export default function BlogResources() {
  const articles = [
    {
      title: "Why Equipment Leasing is a Game Changer for Warehouse Racking Purchases",
      content: `
        Equipment leasing offers significant advantages for warehouse racking purchases:
        
        1. Cost Management and Financial Flexibility: Avoid large upfront capital expenditures, preserve cash, and manage working capital effectively.
        2. Adaptability to Changing Needs: Upgrade or adjust racking systems as warehouse requirements evolve, staying competitive and efficient.
        3. Simplified Budgeting and Tax Benefits: Enjoy predictable monthly payments and potential tax advantages with lease payments often considered operational expenses.
        4. Streamlined Process: Quick approval process with minimal documentation required.
        
        With leasing terms up to 72 months and same-day qualifications available, equipment leasing provides a flexible solution for businesses looking to optimize their warehouse operations.
      `,
      icon: FaWarehouse,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "Warehouse Solutions"
    },
    // ... (other articles remain the same)
  ];

  const recentFinancing = [
    { amount: "$245,000", description: "Warehouse Equipment" },
    { amount: "$128,000", description: "Restaurant Equipment" },
    { amount: "$1,500,000", description: "Construction Equipment" },
    { amount: "$350,000", description: "Medical Equipment" }
  ];

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
            Industry Insights
          </motion.h1>
          <motion.p
            className="text-2xl mb-12 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive information to power your equipment financing decisions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact" className="bg-light-sea-green text-white py-4 px-10 rounded-full text-xl font-semibold hover:bg-white hover:text-indigo-dye transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Explore Financing Options</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="max-w-6xl mx-auto py-24 px-4">
        <div className="grid grid-cols-1 gap-16">
          {articles.map((article, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="relative h-64 md:h-full">
                    <Image 
                      src={article.image}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center mb-4">
                    <article.icon className="text-2xl text-light-sea-green mr-2" />
                    <span className="text-sm text-indigo-dye">{article.category}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-indigo-dye mb-4">{article.title}</h3>
                  <div className="text-gray-700 space-y-2">
                    {article.content.split('\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recent Financing Section */}
      <section className="w-full bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-dye">Recently Financed</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {recentFinancing.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg text-center shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-2xl font-bold mb-2 text-light-sea-green">{item.amount}</p>
                <p className="text-sm text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
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
            Ready to Explore Your Financing Options?
          </motion.h2>
          <motion.p
            className="text-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our equipment financing solutions can help your business thrive.
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