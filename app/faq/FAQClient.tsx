'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const faqs = [
  {
    question: "How fast can I get approved?",
    answer: "Most applications receive fast approval. Funding typically occurs within 24-48 hours of document completion."
  },
  {
    question: "What credit score do I need?",
    answer: "We work with all credit profiles from A through C. Lower scores may require additional documentation."
  },
  {
    question: "What documentation is required?",
    answer: "For requests under $400,000, we typically only need a one-page application. Larger amounts may require basic financial statements."
  },
  {
    question: "What are the financing amounts available?",
    answer: "We offer equipment financing from $20,000 up to $50 million, with flexible terms and payment options to match your business needs."
  },
  {
    question: "What types of equipment can be financed?",
    answer: "We finance a wide range of equipment across various industries, including manufacturing, construction, healthcare, transportation, restaurant, and more. We handle both new and used equipment, with financing available for amounts ranging from $20,000 to $50 million."
  },
  {
    question: "Do you finance used equipment?",
    answer: "Yes, we finance both new and used equipment. Our flexible programs allow businesses to acquire the equipment they need regardless of whether it's brand new or previously owned."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve virtually all industries including construction, manufacturing, medical, restaurant, transportation, material handling, and many others. Our team has experience across diverse sectors."
  },
  {
    question: "Can I finance soft costs like installation and training?",
    answer: "Yes, we can often include related costs such as installation, training, shipping, and other soft costs as part of your equipment financing package."
  }
];

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

export default function FAQClient() {

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
                Frequently Asked Questions
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl mb-8 text-[#F2F2F2]/90"
                variants={fadeInUp}
              >
                Find answers to common questions about our equipment financing solutions
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                    text-white px-8 py-4 rounded-lg font-semibold text-lg 
                    shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
                    transform hover:-translate-y-1 transition-all duration-300"
                >
                  Get Personalized Answers
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="lg:col-span-7 relative h-96 lg:h-screen">
            <Image 
              src="/Images/bg-wave2.png"
              alt="FAQ background"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </motion.div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0EB5B2]/20 to-[#0D3853]/20"></div>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto py-20 px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="bg-white border border-[#0EB5B2]/10 rounded-lg overflow-hidden shadow-lg transition-all duration-300"
              id={`faq-${index + 1}`}
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#0D3853] mb-6">{faq.question}</h3>
                <div className="text-[#0D3853]/80 leading-relaxed text-lg">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      
      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0D3853]/20 to-[#0EB5B2]/20"></div>

      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden w-full">
        <div className="absolute inset-0">
          <Image 
            src="/Images/bg-wave2.png"
            alt="Modern office environment for equipment financing consultation"
            fill
            className="object-cover"
            quality={75}
          />
          <div className="absolute inset-0 bg-black/20" />
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
              Still Have Questions?
            </h2>
            <p className="text-xl text-[#F2F2F2]/90 max-w-3xl mx-auto pb-4">
              Our team is here to help. Contact us for personalized assistance with your equipment financing needs.
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