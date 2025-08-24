'use client';

import { motion } from 'framer-motion';
import {
    CheckCircle,
    ChevronRight,
    ThumbsUp
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import FeatureTabs from '../components/FeatureTabs';

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
    'Financing from $500,000 to $50 million',
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
    <div className="font-sans">
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
                Commercial Equipment Financing
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl mb-8 text-[#F2F2F2]/90"
                variants={fadeInUp}
              >
                Financing from $500,000 to $50 million built for scale.
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
              src="https://images.unsplash.com/photo-1568056308658-aa380181da25?q=80&w=3003&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Commercial equipment financing background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D3853]/05 via-[#0D3853]/02 to-[#0EB5B2]/02" />
          </div>
        </motion.div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0EB5B2]/20 to-[#0D3853]/20"></div>

      {/* Program Overview Section - Light Gray Background */}
      <section className="bg-gradient-to-br from-gray-50 via-gray-100/50 to-[#0EB5B2]/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content - 2 columns */}
            <div className="lg:col-span-2 space-y-12">
              <motion.section variants={fadeInUp} initial="hidden" animate="visible" className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-[#0EB5B2]/20 hover:border-[#0EB5B2]/40 transition-all duration-300">
                <h2 className="text-3xl font-bold text-[#0D3853] mb-6">Financing Built for Scale</h2>
                <p className="text-lg text-[#0D3853]/80 mb-6">
                  One of the core strengths of Vista Pacific Capital is our ability to secure financing for middle- to large-ticket equipment purchases — the kind many traditional banks are hesitant to approve.
                </p>
                <p className="text-lg text-[#0D3853]/80">
                  We partner with lenders that specialize in high-dollar transactions and bring deep expertise in structuring and packaging these deals. Our experience helps business owners confidently make major investments that drive growth, expansion, and long-term success.
                </p>
              </motion.section>

              <motion.section variants={fadeInUp} initial="hidden" animate="visible" className="bg-gradient-to-br from-[#0D3853]/5 via-white to-[#0EB5B2]/5 p-8 rounded-lg shadow-lg border border-[#0D3853]/20 hover:border-[#0D3853]/40 transition-all duration-300">
                <h2 className="text-3xl font-bold text-[#0D3853] mb-6">Do You Qualify?</h2>
                <p className="text-lg text-[#0D3853]/80 mb-6">This program is best suited for companies that meet most of the following:</p>
                <motion.ul variants={staggerContainer} initial="hidden" animate="visible" className="space-y-4 mb-8">
                  {qualifications.map((item, index) => (
                    <motion.li key={index} variants={fadeInUp} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#0EB5B2] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-lg text-[#0D3853]/80">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#ff825c]/5 border-l-4 border-[#FF6B35] p-4 rounded-r-lg">
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
                </div>
              </motion.section>
            </div>

            {/* Sidebar - 1 column */}
            <div className="lg:col-span-1">
              <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-gradient-to-br from-[#0EB5B2]/10 via-white to-[#0D3853]/5 p-6 rounded-lg shadow-lg border border-[#0EB5B2]/20 hover:border-[#0EB5B2]/40 transition-all duration-300 sticky top-8">
                <h3 className="text-2xl font-bold text-[#0D3853] mb-6">Program Highlights</h3>
                <motion.ul variants={staggerContainer} initial="hidden" animate="visible" className="space-y-4 mb-8">
                  {programHighlights.map((highlight, index) => (
                    <motion.li key={index} variants={fadeInUp} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#0EB5B2] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-md text-[#0D3853]/80">{highlight}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <div className="text-center">
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
      </section>

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0D3853]/20 to-[#0EB5B2]/20"></div>

      {/* Financing Options Section - Orange Accent Background */}
      <section className="bg-gradient-to-br from-white via-[#FF6B35]/5 to-[#ff825c]/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.section variants={fadeInUp} initial="hidden" animate="visible" className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-[#FF6B35]/20 hover:border-[#FF6B35]/40 transition-all duration-300">
            <h2 className="text-3xl font-bold text-[#0D3853] mb-8 text-center">Financing Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {financingOptions.map((option, index) => (
                <motion.div key={index} variants={fadeInUp} className="p-6 border border-[#0EB5B2]/20 rounded-lg bg-gradient-to-br from-[#0EB5B2]/8 to-white hover:from-[#0EB5B2]/15 transition-all duration-300 h-full">
                  <h3 className="text-xl font-semibold text-[#0D3853] mb-3">{option.name}</h3>
                  <p className="text-[#0D3853]/80">{option.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0D3853]/20 to-[#0EB5B2]/20"></div>

      {/* Why Choose Us Section - Teal Accent Background */}
      <section className="bg-gradient-to-br from-[#0EB5B2]/8 via-white to-[#0D3853]/5 py-20">
        <FeatureTabs />
      </section>

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
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-[#F2F2F2]/90 max-w-3xl mx-auto pb-4">
              Get financing from $500,000 to $50 million with flexible terms and competitive rates
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
