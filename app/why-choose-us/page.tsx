'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import FeatureTabs from '../components/FeatureTabs';
import PageHeader from '../components/PageHeader';

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
      <PageHeader
        title="Why Choose Vista Pacific Capital?"
        subtitle="Our commitment to your business growth sets us apart. Here's why clients choose us for their equipment financing needs."
        buttonText="Get a Quote / Apply Now"
        buttonHref="/apply"
        highlightWord="Vista Pacific Capital"
      />

      {/* Main Content - Why Choose Us */}
      <FeatureTabs />

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
