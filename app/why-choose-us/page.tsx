'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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

export default function WhyChooseUsPage() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <motion.section
        className="relative w-full overflow-hidden pt-20 sm:pt-24 lg:pt-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="absolute inset-0">
          <Image
            src="/Images/gen-ai/bg-wave-5.png"
            alt="Why Choose Us background"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D3853]/05 via-[#0D3853]/02 to-[#0EB5B2]/02" />
        </div>
        <div className="relative w-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 py-32 w-full text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#F2F2F2] to-[#B3B3B3] mb-6"
              variants={fadeInUp}
            >
              Why Choose <span className="bg-gradient-to-r from-[#FF6B35] to-[#ff825c] bg-clip-text text-transparent">Vista Pacific Capital</span>?
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-[#F2F2F2]/90"
              variants={fadeInUp}
            >
              Our commitment to your business growth sets us apart. Here's why clients choose us for their equipment financing needs.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="/apply"
                className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35]
                  text-white px-8 py-4 rounded-lg font-semibold text-lg
                  shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40
                  transform hover:-translate-y-1 transition-all duration-300"
              >
                Get a Quote / Apply Now
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0EB5B2]/20 to-[#0D3853]/20"></div>

      {/* Main Content - Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-lg border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#0D3853] mb-3">We Shop the Lenders So You Don’t Have To</h3>
            <p className="text-[#0D3853]/80">Instead of going bank to bank and applying over and over, we do the legwork for you. One application gives you access to our network of lenders without the hassle.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-lg border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#0D3853] mb-3">We Understand Equipment Financing</h3>
            <p className="text-[#0D3853]/80">We work with both large, established companies who don’t have time to deal with banks and small businesses tired of using personal credit to finance equipment. No matter your size, we save you time by eliminating the need to explain the purpose of your equipment or undergo unnecessary underwriting of the asset. We know exactly what lenders need to see, and we present it for you.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-lg border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#0D3853] mb-3">A Built-In Source of Capital</h3>
            <p className="text-[#0D3853]/80">We’re not just here for one deal — we’re here to provide a source of capital whenever you need it. Whether you’re expanding or replacing equipment, our network of lenders will be there, ready to support your business growth now and in the future.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-lg border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#0D3853] mb-3">We Understand Time is of the Essence</h3>
            <p className="text-[#0D3853]/80">Our goal is to provide pricing and approval as quickly as possible so you can make the right decision for your business. We know that time is valuable, and we work to get you the answers you need fast, so you can move forward with confidence.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-lg border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#0D3853] mb-3">Fast, Flexible, and Straightforward</h3>
            <p className="text-[#0D3853]/80">Most transactions are approved in just a few business days. Whether your business is brand new or well-established, we tailor financing to fit your needs and timeline.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-lg border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#0D3853] mb-3">Real People, Real Help</h3>
            <p className="text-[#0D3853]/80">You’ll have a direct contact, not just "customer service" or a general phone number. With 20+ years of experience, we’re here to guide you through every step of the process. You’ll always know exactly who to reach out to for questions, updates, or support</p>
          </motion.div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0D3853]/20 to-[#0EB5B2]/20"></div>

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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-[#F2F2F2]/90 max-w-3xl mx-auto pb-4">
              Get financing that works for your business.
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35]
                text-white px-8 py-4 rounded-lg font-semibold text-lg
                shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40
                transform hover:-translate-y-1 transition-all duration-300"
            >
              Apply Now
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 