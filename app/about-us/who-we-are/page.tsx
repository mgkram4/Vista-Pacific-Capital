"use client";

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '../../components/PageHeader';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function WhoWeArePage() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <PageHeader
        title="Who We Are"
        subtitle="Learn about Vista Pacific Capital and our commitment to excellence in equipment financing."
        buttonText="Get Started"
        buttonHref="/apply"
      />

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0EB5B2]/20 to-[#0D3853]/20"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-lg text-[#0D3853]/80 leading-relaxed border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300 space-y-6">
            <p>
              <strong>Vista Pacific Capital is a bonded commercial finance brokerage</strong> with a scope that ranges from $50,000 to $50,000,000, providing national coverage across all industries. We're more than just a finance company — we're a service-driven team focused on <strong>making equipment financing easy, fast, and reliable.</strong>
            </p>
            
            <p>
              Our portfolio is built on a blend of repeat customers and trusted vendor referrals — a reflection of the strong relationships we've earned over time. Whether you're an established enterprise or a growing business just getting started, we tailor each solution to fit your unique needs and deliver the best programs available.
            </p>
            
            <p>
              We take pride in offering quick turnarounds, flexible structures, and a clear, straightforward process — because financing shouldn't be complicated. Our national coverage ensures that businesses across the United States can access our comprehensive financing solutions.
            </p>
            
            <p>
              Our commitment extends beyond customers. We foster a positive, balanced work environment where our employees thrive. In an industry often driven solely by profit, we focus on people — bringing integrity, clarity, and optimism to every interaction.
            </p>
            
            <p>
              With financing capabilities spanning from $50,000 for small business equipment needs up to $50,000,000 for large-scale commercial projects, Vista Pacific Capital serves as your trusted partner regardless of your business size or industry sector.
            </p>
          </div>
        </motion.section>
      </div>

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0EB5B2]/20 to-[#0D3853]/20"></div>

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
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-[#F2F2F2]/90 max-w-3xl mx-auto pb-4">
              Let's discuss how we can help your business acquire the equipment it needs to grow and succeed.
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
