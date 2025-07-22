'use client';

import { motion } from 'framer-motion';
import {
  Banknote,
  CheckCircle,
  ChevronRight,
  FileText,
  MailCheck,
  PenSquare,
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
    'Up to $750,000 with just an application',
    'Terms from 24 to 72 months',
    'Approvals as quick as same day - typically within 24 hours',
    'Soft credit pull in most cases',
    'Competitive rates',
    'New or Used Equipment',
    'No financials required *Subject to credit, time in business, and company borrowing history',
    'No comparable borrowing required for requests under $75,000',
];

const qualifications = [
    'Business owners with 2+ years in business',
    'Companies who do not want financial underwriting',
    'Companies whose tax returns are not complete (or may show a loss)',
    'Equipment dealers needing fast approvals for their customers',
];

const applicationSteps = [
    {
        step: 1,
        title: 'Apply Online',
        description: 'Fill out our short online application.',
        icon: FileText
    },
    {
        step: 2,
        title: 'Submit Documents',
        description: 'Submit 3 months of business bank statements.',
        icon: Banknote
    },
    {
        step: 3,
        title: 'Get a Decision',
        description: 'Receive a response within one business day.',
        icon: MailCheck
    },
    {
        step: 4,
        title: 'Sign & Fund',
        description: 'Sign electronically and get funded fast.',
        icon: PenSquare
    }
];


export default function EquipmentFinancingClient() {
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
            src="/Images/bg-wave2.png"
            alt="Equipment financing background"
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
              Clear the Way for Growth.
              <br />
              <span className="bg-gradient-to-r from-[#FF6B35] to-[#ff825c] bg-clip-text text-transparent">We'll Handle the Financing.</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-[#F2F2F2]/90"
              variants={fadeInUp}
            >
              Application-only equipment financing up to $750,000 — no financials needed.
            </motion.p>
            <motion.div variants={fadeInUp}>
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
        </div>
      </motion.section>

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0EB5B2]/20 to-[#0D3853]/20"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-12">
          {/* Left Column */}
          <div className="col-span-1">
            {/* What is Application-Only Financing? */}
            <motion.section variants={fadeInUp} initial="hidden" animate="visible" className="mb-12 bg-white p-8 rounded-lg shadow-lg border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300">
              <h2 className="text-3xl font-bold text-[#0D3853] mb-4">What Is Application-Only Financing?</h2>
              <p className="text-lg text-[#0D3853]/80 mb-4">
                Application-only financing is the fastest way to secure funding for your equipment needs — no tax returns or financial statements required. This approach reduces underwriting friction and allows for quicker, streamlined approvals, without sacrificing competitive rates.
              </p>
              <p className="text-lg text-[#0D3853]/80 mb-4">
                For most approvals, businesses should have comparable borrowing history with at least 12 months paid-as-agreed. Three months of business bank statements are typically required to verify cash flow and support the request.
              </p>
              <div className="mt-4 bg-gradient-to-r from-[#0EB5B2]/10 to-[#0EB5B2]/5 border-l-4 border-[#0EB5B2] p-4 rounded-r-lg">
                <p className="text-md text-[#0D3853]">
                  <strong>Note:</strong> For transactions under $75,000, comparable borrowing history may not be required — making it ideal for businesses new to equipment financing.
                </p>
              </div>
            </motion.section>

            {/* Do you qualify? */}
            <motion.section variants={fadeInUp} initial="hidden" animate="visible" className="mb-12 bg-white p-8 rounded-lg shadow-lg border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300">
              <h2 className="text-3xl font-bold text-[#0D3853] mb-6">Do You Qualify?</h2>
              <p className="text-lg text-[#0D3853]/80 mb-6">This program is perfect for:</p>
              <motion.ul variants={staggerContainer} initial="hidden" animate="visible" className="space-y-4">
                {qualifications.map((item, index) => (
                  <motion.li key={index} variants={fadeInUp} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#0EB5B2] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg text-[#0D3853]/80">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.section>
            
            {/* How to Apply */}
            <motion.section variants={fadeInUp} initial="hidden" animate="visible" className="bg-white p-8 rounded-lg shadow-lg border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300">
                <h2 className="text-3xl font-bold text-center text-[#0D3853] mb-8">How to Apply</h2>
                <div className="relative">
                    <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-[#0EB5B2]/20 to-[#0D3853]/20" aria-hidden="true"></div>
                    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-12">
                        {applicationSteps.map((step, index) => (
                            <motion.div key={step.step} variants={fadeInUp} className="flex items-center">
                                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                    <h3 className="text-xl font-semibold text-[#0EB5B2] mb-1">{step.title}</h3>
                                    <p className="text-[#0D3853]/80">{step.description}</p>
                                </div>
                                <div className="flex-shrink-0 w-24 h-24 bg-white border-4 border-[#0EB5B2] rounded-full flex items-center justify-center z-10 shadow-lg">
                                    <step.icon className="w-12 h-12 text-[#0EB5B2]" />
                                </div>
                                <div className={`flex-1 ${index % 2 !== 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                 <div className="text-center mt-12">
                    <Link
                      href="/apply"
                      className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                        text-white px-8 py-4 rounded-lg font-semibold text-lg 
                        shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
                        transform hover:-translate-y-1 transition-all duration-300"
                    >
                      Start Your Application
                      <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </motion.section>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="col-span-1 space-y-8">
            <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-white p-6 rounded-lg shadow-lg border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0D3853] mb-4">Program Highlights</h3>
              <motion.ul variants={staggerContainer} initial="hidden" animate="visible" className="space-y-3">
                {programHighlights.map((highlight, index) => (
                  <motion.li key={index} variants={fadeInUp} className="flex items-start">
                    <ThumbsUp className="h-5 w-5 text-[#0EB5B2] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-md text-[#0D3853]/80">{highlight}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0D3853]/20 to-[#0EB5B2]/20"></div>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0D3853] mb-4">Why Choose Us?</h2>
          <p className="text-lg text-[#0D3853]/80 max-w-2xl mx-auto">
            Our commitment to your business growth sets us apart. Here's why clients choose Vista Pacific Capital for their equipment financing needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-white p-6 rounded-lg shadow-lg border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#0D3853] mb-3">We Shop the Lenders So You Don’t Have To</h3>
            <p className="text-[#0D3853]/80">Instead of going bank to bank and applying over and over, we do the legwork for you. One application gives you access to our network of lenders without the hassle.</p>
          </motion.div>
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-white p-6 rounded-lg shadow-lg border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#0D3853] mb-3">We Understand Equipment Financing</h3>
            <p className="text-[#0D3853]/80">We work with both large, established companies who don’t have time to deal with banks and small businesses tired of using personal credit to finance equipment. No matter your size, we save you time by eliminating the need to explain the purpose of your equipment or undergo unnecessary underwriting of the asset. We know exactly what lenders need to see, and we present it for you.</p>
          </motion.div>
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-white p-6 rounded-lg shadow-lg border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#0D3853] mb-3">A Built-In Source of Capital</h3>
            <p className="text-[#0D3853]/80">We’re not just here for one deal — we’re here to provide a source of capital whenever you need it. Whether you’re expanding or replacing equipment, our network of lenders will be there, ready to support your business growth now and in the future.</p>
          </motion.div>
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-white p-6 rounded-lg shadow-lg border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#0D3853] mb-3">We Understand Time is of the Essence</h3>
            <p className="text-[#0D3853]/80">Our goal is to provide pricing and approval as quickly as possible so you can make the right decision for your business. We know that time is valuable, and we work to get you the answers you need fast, so you can move forward with confidence.</p>
          </motion.div>
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-white p-6 rounded-lg shadow-lg border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#0D3853] mb-3">Fast, Flexible, and Straightforward</h3>
            <p className="text-[#0D3853]/80">Most transactions are approved in just a few business days. Whether your business is brand new or well-established, we tailor financing to fit your needs and timeline.</p>
          </motion.div>
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-white p-6 rounded-lg shadow-lg border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#0D3853] mb-3">Real People, Real Help</h3>
            <p className="text-[#0D3853]/80">You’ll have a direct contact, not just "customer service" or a general phone number. With 20+ years of experience, we’re here to guide you through every step of the process. You’ll always know exactly who to reach out to for questions, updates, or support</p>
          </motion.div>
        </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-[#F2F2F2]/90 max-w-3xl mx-auto pb-4">
              Get application-only financing up to $750,000 with no financials required
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