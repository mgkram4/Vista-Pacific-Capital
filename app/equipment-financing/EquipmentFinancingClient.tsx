'use client';

import { motion } from 'framer-motion';
import {
  Banknote,
  CheckCircle,
  ChevronRight,
  FileText,
  MailCheck,
  PenSquare,
  Phone,
  ThumbsUp
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '../components/PageHeader';

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
    'Up to $500,000 with just an application',
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
    'Companies looking for under $75,000',
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
        title: 'Submit Bank Statements',
        description: 'Upload last 3 months business bank statements.',
        icon: Banknote
    },
    {
        step: 3,
        title: 'Contact from Vista Pacific Capital',
        description: 'Our rep will reach out to you for a quick interview.',
        icon: Phone
    },
    {
        step: 4,
        title: 'Receive Decision',
        description: 'If approved, a formal term sheet will be sent to you.',
        icon: MailCheck
    },
    {
        step: 5,
        title: 'Sign & Fund',
        description: 'Sign electronically and get funded.',
        icon: PenSquare
    }
];


export default function EquipmentFinancingClient() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <PageHeader
        title="Clear the Way for Growth. We'll Handle the Financing."
        subtitle="Application-only equipment financing up to $500,000 — no financials needed."
        buttonText="Apply Now"
        buttonHref="/apply"
        backgroundImage="https://images.squarespace-cdn.com/content/v1/62043a8d2e13545aea533b03/03d973c1-058a-46e2-ab30-bb52d5f5fd94/IMG_1071.jpg"
        highlightWord="We'll Handle the Financing."
      />

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0EB5B2]/20 to-[#0D3853]/20"></div>

      {/* Main Content Section - White Background */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {/* Left Column */}
            <div className="col-span-1">
              {/* What is Application-Only Financing? */}
              <motion.section variants={fadeInUp} initial="hidden" animate="visible" className="mb-12 bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:border-gray-300 transition-all duration-300">
                <h2 className="text-3xl font-bold text-[#0D3853] mb-4">What Is Application-Only Financing?</h2>
                <p className="text-lg text-[#0D3853]/80 mb-4">
                  Application-only financing is the fastest way to secure funding for your equipment needs — no tax returns or financial statements required. This approach reduces underwriting friction and allows for quicker, streamlined approvals, without sacrificing competitive rates.
                </p>
                <p className="text-lg text-[#0D3853]/80 mb-4">
                  For most approvals, businesses should have comparable borrowing history with at least 12 months paid-as-agreed. Three months of business bank statements are typically required to verify cash flow and support the request.
                </p>
                <div className="mt-4 bg-gradient-to-r from-[#0EB5B2]/15 to-[#0EB5B2]/8 border-l-4 border-[#0EB5B2] p-4 rounded-r-lg">
                  <p className="text-md text-[#0D3853]">
                    <strong>Note:</strong> For transactions under $75,000, comparable borrowing history may not be required — making it ideal for businesses new to equipment financing.
                  </p>
                </div>
              </motion.section>

              {/* Do you qualify? */}
              <motion.section variants={fadeInUp} initial="hidden" animate="visible" className="mb-12 bg-gray-100 p-8 rounded-lg shadow-lg border border-gray-200 hover:border-gray-300 transition-all duration-300">
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
              <motion.section variants={fadeInUp} initial="hidden" animate="visible" className="bg-gray-100 p-8 rounded-lg shadow-lg border border-gray-200 hover:border-gray-300 transition-all duration-300">
                  <h2 className="text-3xl font-bold text-center text-[#0D3853] mb-8">How to Apply</h2>
                  <div className="relative">
                      <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-[#0EB5B2]/30 to-[#0D3853]/30" aria-hidden="true"></div>
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
              <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-gray-100 p-6 rounded-lg shadow-lg border border-gray-200 hover:border-gray-300 transition-all duration-300">
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-[#F2F2F2]/90 max-w-3xl mx-auto pb-4">
              Get application-only financing up to $500,000 with no financials required
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