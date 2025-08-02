"use client"

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaWarehouse } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

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
  ];

  const recentFinancing = [
    { amount: "$245,000", description: "Warehouse Equipment" },
    { amount: "$128,000", description: "Restaurant Equipment" },
    { amount: "$1,500,000", description: "Construction Equipment" },
    { amount: "$350,000", description: "Medical Equipment" }
  ];

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="w-full">
        <motion.div 
          className="lg:grid lg:grid-cols-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Left Column (Text Content) */}
          <div className="lg:col-span-3 bg-[#0D3853]/95 lg:bg-[#0D3853] min-h-screen flex flex-col justify-center p-8 sm:p-12">
            <div className="max-w-md mx-auto w-full text-center">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#F2F2F2] to-[#B3B3B3] mb-6"
                variants={fadeInUp}
              >
                Industry Insights
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl mb-8 text-[#F2F2F2]/90"
                variants={fadeInUp}
              >
                Comprehensive information to power your equipment financing decisions
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                    text-white px-8 py-4 rounded-lg font-semibold text-lg 
                    shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
                    transform hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Financing Options
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="lg:col-span-7 relative h-96 lg:h-screen">
            <Image 
              src="/Images/bg-wave2.png"
              alt="Industry insights background"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D3853]/05 via-[#0D3853]/02 to-[#0EB5B2]/02" />
          </div>
        </motion.div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0EB5B2]/20 to-[#0D3853]/20"></div>

      {/* Articles Section */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-16"
        >
          {articles.map((article, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="relative h-64 md:h-full">
                    <Image 
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-[#0EB5B2]/20 to-[#0EB5B2]/5 rounded-lg p-2 w-fit mr-2">
                      <article.icon className="text-2xl text-[#0EB5B2]" />
                    </div>
                    <span className="text-sm text-[#0EB5B2] font-semibold">{article.category}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0D3853] mb-4">{article.title}</h3>
                  <div className="text-[#0D3853]/80 space-y-2">
                    {article.content.split('\n').map((paragraph, idx) => (
                      paragraph.trim() && <p key={idx}>{paragraph.trim()}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0D3853]/20 to-[#0EB5B2]/20"></div>

      {/* Recent Financing Section */}
      <section className="w-full bg-gradient-to-b from-[#F2F2F2] to-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-center text-[#0D3853]"
          >
            Recently Financed
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {recentFinancing.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-lg text-center shadow-lg border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300"
              >
                <p className="text-2xl font-bold mb-2 text-[#0EB5B2]">{item.amount}</p>
                <p className="text-sm text-[#0D3853]/80">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0EB5B2]/20 to-[#0D3853]/20"></div>

      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden w-full">
        <div className="absolute inset-0">
          <Image 
            src="/Images/cta-background-signing.jpg"
            alt="Modern office environment for equipment financing consultation"
            fill
            className="object-cover"
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D3853]/05 via-[#0D3853]/02 to-[#0EB5B2]/02" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-sm font-semibold text-[#0EB5B2] mb-2 block">GET STARTED TODAY</span>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#B3B3B3]">
              Ready to Explore Your Financing Options?
            </h2>
            <p className="text-xl text-[#F2F2F2]/90 max-w-3xl mx-auto pb-4">
              Let's discuss how our equipment financing solutions can help your business thrive.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                text-white px-8 py-4 rounded-lg font-semibold text-lg 
                shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
                transform hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us Today
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}