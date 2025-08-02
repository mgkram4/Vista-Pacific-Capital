'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import FeatureTabs from '../components/FeatureTabs';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function WhyChooseUsPage() {
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
            <div className="max-w-md mx-auto w-full">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#F2F2F2] to-[#B3B3B3] mb-6"
                variants={fadeInUp}
              >
                Why Choose{' '}
                <span className="bg-gradient-to-r from-[#FF6B35] to-[#ff825c] bg-clip-text text-transparent">
                  Vista Pacific Capital
                </span>
                ?
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl mb-8 text-[#F2F2F2]/90"
                variants={fadeInUp}
              >
                Our commitment to your business growth sets us apart. Here's why
                clients choose us for their equipment financing needs.
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

          {/* Right Column (Image) */}
          <div className="lg:col-span-7 relative h-96 lg:h-screen">
            <Image
              src="/Images/gen-ai/bg-wave-5.png"
              alt="Why Choose Us background"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D3853]/05 via-[#0D3853]/02 to-[#0EB5B2]/02" />
          </div>
        </motion.div>
      </section>

      {/* Main Content - Why Choose Us */}
      <FeatureTabs />

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
            <span className="text-sm font-semibold text-[#0EB5B2] mb-2 block">
              GET STARTED TODAY
            </span>
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
