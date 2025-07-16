'use client';

import { motion } from 'framer-motion';
import {
    CheckCircle,
    ChevronRight,
    ThumbsUp
} from 'lucide-react';
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

const programHighlights = [
    'Financing from $500,000 to $20,000,000',
    'Terms from 36 to 84 months',
    'Approvals in as little as 2-3 business days',
    'Pre-funding available to vendors on approved transactions',
    'Minimal upfront costs — as little as one advance payment due at closing',
    'Bank-level rates with more flexibility and speed than traditional institutions'
];

const qualifications = [
    'At least 2-5 years in business',
    'Strong financials, typically with positive cash flow',
    'Demonstrated comparable borrowing history',
    'Clean business credit profile',
    'Clear business use for the equipment'
];

const compensatingFactors = [
    'A clear and credible growth story',
    'High-net-worth guarantors',
    'Strong industry experience',
    'Ability to put significant money down or include collateral'
];

const financingOptions = [
    { name: 'Fair Market Value (FMV) Lease', description: 'Lowest monthly payment, with the option to purchase the equipment at its fair market value at the end of the term.' },
    { name: '$1 Buyout Lease', description: 'Slightly higher monthly payment, but you own the equipment for $1 at the end of the term.' },
    { name: 'Equipment Finance Agreement (EFA)', description: 'A straightforward loan where you are the owner of the equipment from day one.' }
];

export default function CommercialEquipmentFinancingClient() {
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
            src="/Images/cta-background-signing.jpg"
            alt="Commercial equipment financing background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D3853]/95 via-[#0D3853]/90 to-[#0EB5B2]/85" />
        </div>
        <div className="relative w-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 py-32 w-full text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#F2F2F2] to-[#B3B3B3] mb-6"
              variants={fadeInUp}
            >
              Commercial Equipment Financing
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-[#F2F2F2]/90"
              variants={fadeInUp}
            >
              Financing from $500,000 to $20,000,000 built for scale.
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="md:col-span-2">
            <motion.section variants={fadeInUp} initial="hidden" animate="visible" className="mb-12 bg-white p-8 rounded-lg shadow-lg border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300">
              <h2 className="text-3xl font-bold text-[#0D3853] mb-4">Financing Built for Scale</h2>
              <p className="text-lg text-[#0D3853]/80 mb-4">
                One of the core strengths of Vista Pacific Capital is our ability to secure financing for middle- to large-ticket equipment purchases — the kind many traditional banks are hesitant to approve.
              </p>
              <p className="text-lg text-[#0D3853]/80">
                We partner with lenders that specialize in high-dollar transactions and bring deep expertise in structuring and packaging these deals. Our experience helps business owners confidently make major investments that drive growth, expansion, and long-term success.
              </p>
            </motion.section>
            
            <motion.section variants={fadeInUp} initial="hidden" animate="visible" className="mb-12 bg-white p-8 rounded-lg shadow-lg border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300">
              <h2 className="text-3xl font-bold text-[#0D3853] mb-6">Do you Qualify?</h2>
              <p className="text-lg text-[#0D3853]/80 mb-6">This program is best suited for companies that meet most of the following:</p>
              <motion.ul variants={staggerContainer} initial="hidden" animate="visible" className="space-y-4 mb-8">
                {qualifications.map((item, index) => (
                  <motion.li key={index} variants={fadeInUp} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#0EB5B2] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg text-[#0D3853]/80">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <h3 className="text-2xl font-bold text-[#0D3853] mb-4">Not a perfect fit?</h3>
              <p className="text-lg text-[#0D3853]/80 mb-6">Applicants that don't meet all the above — such as newer businesses or those with negative cash flow — may still be considered if there's a strong compensating factor, such as:</p>
              <motion.ul variants={staggerContainer} initial="hidden" animate="visible" className="space-y-4">
                {compensatingFactors.map((item, index) => (
                  <motion.li key={index} variants={fadeInUp} className="flex items-start">
                    <ThumbsUp className="h-6 w-6 text-[#0EB5B2] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg text-[#0D3853]/80">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.section>

            <motion.section variants={fadeInUp} initial="hidden" animate="visible" className="bg-white p-8 rounded-lg shadow-lg border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300">
              <h2 className="text-3xl font-bold text-[#0D3853] mb-6">Financing Options</h2>
              <div className="space-y-6">
                {financingOptions.map((option, index) => (
                    <motion.div key={index} variants={fadeInUp} className="p-4 border border-[#0EB5B2]/20 rounded-lg bg-gradient-to-br from-[#0EB5B2]/5 to-white hover:from-[#0EB5B2]/10 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-[#0D3853]">{option.name}</h3>
                        <p className="text-[#0D3853]/80">{option.description}</p>
                    </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="md:col-span-1 space-y-8">
            <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-white p-6 rounded-lg shadow-lg border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0D3853] mb-4">Program Highlights</h3>
              <motion.ul variants={staggerContainer} initial="hidden" animate="visible" className="space-y-3">
                {programHighlights.map((highlight, index) => (
                  <motion.li key={index} variants={fadeInUp} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0EB5B2] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-md text-[#0D3853]/80">{highlight}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <div className="mt-6 text-center">
                <Link
                  href="/apply"
                  className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                    text-white px-6 py-3 rounded-lg font-semibold text-lg 
                    shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
                    transform hover:-translate-y-1 transition-all duration-300 w-full justify-center"
                >
                  Apply Now
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D3853]/95 via-[#0D3853]/90 to-[#0EB5B2]/80" />
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
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-[#F2F2F2]/90 max-w-3xl mx-auto pb-4">
              Get financing from $500,000 to $20,000,000 with flexible terms and competitive rates
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