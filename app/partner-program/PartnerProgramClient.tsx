'use client';

import { motion } from 'framer-motion';
import {
    Award,
    ChevronRight,
    Users,
    Zap
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ApplicationForm from '../components/ApplicationForm';

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

const vendorPrograms = [
    'Access to a wide range of financing products to offer your customers.',
    'Competitive rates and flexible terms that help you close more sales.',
    'A dedicated support team to assist you and your customers through the financing process.',
    'Fast funding to ensure you get paid quickly.'
];

const referralProgram = [
    'Generous referral fees for every funded deal.',
    'A simple and straightforward referral process.',
    'Access to marketing materials to help you promote our financing options.',
    'Co-branded landing pages and applications to maintain your brand integrity.'
];

const partnerBenefits = [
    'Expand your service offerings and add a new revenue stream.',
    'Increase customer loyalty by providing a one-stop-shop for their equipment needs.',
    'Partner with a trusted and reliable financing provider.',
    'Work with a team of experienced professionals who are dedicated to your success.'
];


export default function PartnerProgramClient() {
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
            alt="Partner program background"
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
              Become a Partner
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-[#F2F2F2]/90"
              variants={fadeInUp}
            >
              Join our network of trusted partners and grow your business with our competitive financing solutions.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="#partner-form"
                className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                  text-white px-8 py-4 rounded-lg font-semibold text-lg 
                  shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
                  transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Partnering / Join Us
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
              <h2 className="text-3xl font-bold text-[#0D3853] mb-4">Vendor Programs</h2>
              <p className="text-lg text-[#0D3853]/80 mb-6">
                Our vendor program is designed to help you sell more equipment. We provide your customers with fast, flexible, and affordable financing options, so you can close more deals and get paid faster.
              </p>
              <motion.ul variants={staggerContainer} initial="hidden" animate="visible" className="space-y-4">
                {vendorPrograms.map((item, index) => (
                  <motion.li key={index} variants={fadeInUp} className="flex items-start">
                    <Zap className="h-6 w-6 text-[#0EB5B2] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg text-[#0D3853]/80">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.section>
            
            <motion.section variants={fadeInUp} initial="hidden" animate="visible" className="mb-12 bg-white p-8 rounded-lg shadow-lg border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300">
              <h2 className="text-3xl font-bold text-[#0D3853] mb-6">Referral Program</h2>
              <p className="text-lg text-[#0D3853]/80 mb-6">Refer your clients to us and earn a commission on every funded deal. Our referral program is perfect for CPAs, banks, consultants, and other professionals who work with businesses that need equipment financing.</p>
              <motion.ul variants={staggerContainer} initial="hidden" animate="visible" className="space-y-4">
                {referralProgram.map((item, index) => (
                  <motion.li key={index} variants={fadeInUp} className="flex items-start">
                    <Users className="h-6 w-6 text-[#0EB5B2] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg text-[#0D3853]/80">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.section>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="md:col-span-1 space-y-8">
            <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="bg-white p-6 rounded-lg shadow-lg border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0D3853] mb-4">Partner Benefits</h3>
              <motion.ul variants={staggerContainer} initial="hidden" animate="visible" className="space-y-3">
                {partnerBenefits.map((highlight, index) => (
                  <motion.li key={index} variants={fadeInUp} className="flex items-start">
                    <Award className="h-5 w-5 text-[#0EB5B2] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-md text-[#0D3853]/80">{highlight}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <div className="mt-6 text-center">
                <Link
                  href="#partner-form"
                  className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                    text-white px-6 py-3 rounded-lg font-semibold text-lg 
                    shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
                    transform hover:-translate-y-1 transition-all duration-300 w-full justify-center"
                >
                  Join Now
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Section Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#0D3853]/20 to-[#0EB5B2]/20 my-16"></div>
        
        <motion.section id="partner-form" variants={fadeInUp} initial="hidden" animate="visible" className="bg-white p-8 rounded-lg shadow-lg border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300">
            <h2 className="text-3xl font-bold text-center text-[#0D3853] mb-8">Partner with Us</h2>
            <ApplicationForm />
        </motion.section>
      </div>

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
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-[#F2F2F2]/90 max-w-3xl mx-auto pb-4">
              Join our network of trusted partners and start growing your business today
            </p>
            <Link
              href="#partner-form"
              className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                text-white px-8 py-4 rounded-lg font-semibold text-lg 
                shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
                transform hover:-translate-y-1 transition-all duration-300"
            >
              Join Now
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
