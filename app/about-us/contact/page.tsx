"use client";

import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, MapPin, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

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

export default function ContactUsPage() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/bg-wave2.png"
            alt="Contact Us background"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-black/20 lg:hidden" />
        </div>
        <div className="relative z-10 lg:grid lg:grid-cols-10 w-full min-h-screen">
          <div className="lg:col-span-3 lg:bg-[#0D3853]/95 text-white flex flex-col justify-center p-8 sm:p-12 lg:p-16 min-h-screen lg:min-h-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="w-full max-w-md mx-auto [filter:drop-shadow(0_3px_4px_rgba(0,0,0,0.6))] lg:filter-none"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#F2F2F2] to-[#B3B3B3] mb-6">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white lg:text-[#F2F2F2]/90">
                Ready to discuss your financing needs? We're here to help you every step of the way.
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
          <div className="hidden lg:block lg:col-span-7" />
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0EB5B2]/20 to-[#0D3853]/20"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-[#0D3853]">
              Get in Touch with Vista Pacific Capital
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[#0D3853]/80 max-w-3xl mx-auto mt-4">
              We're here to help you with all your equipment financing needs. Contact us today to get started.
            </motion.p>
          </div>

          {/* Contact Information - Single Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Phone Contact */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-lg p-6 border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300 hover:shadow-xl text-center"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-[#0EB5B2] to-[#0D3853] rounded-full">
                  <FaPhone className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#0D3853] mb-3">Call Us</h3>
              <p className="text-[#0D3853]/80 mb-3 text-sm">
                Speak directly with our team
              </p>
              <a 
                href="tel:+17145007017" 
                className="text-lg font-bold text-[#0EB5B2] hover:text-[#0D3853] transition-colors"
              >
                (714) 500-7017
              </a>
            </motion.div>

            {/* Email Contact */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-lg p-6 border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300 hover:shadow-xl text-center"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-[#0EB5B2] to-[#0D3853] rounded-full">
                  <FaEnvelope className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#0D3853] mb-3">Email Us</h3>
              <p className="text-[#0D3853]/80 mb-3 text-sm">
                Send us your inquiries
              </p>
              <a 
                href="mailto:alanj@vistapacificcapital.com" 
                className="text-sm font-semibold text-[#0EB5B2] hover:text-[#0D3853] transition-colors break-all"
              >
                alanj@vistapacificcapital.com
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-lg p-6 border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300 hover:shadow-xl text-center"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-[#0EB5B2] to-[#0D3853] rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#0D3853] mb-3">Location</h3>
              <div className="text-[#0D3853]/80 text-sm space-y-1">
                <p className="font-medium">Vista Pacific Capital</p>
                <p>1234 Business Center Dr</p>
                <p>Suite 200</p>
                <p>Newport Beach, CA 92660</p>
                <p className="text-[#0EB5B2] font-medium mt-2">Serving businesses nationwide</p>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="font-medium text-[#0D3853]">Office Hours:</p>
                  <p>Monday - Friday</p>
                  <p>8:00 AM - 6:00 PM PST</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Secure Portals Information */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-lg shadow-lg p-8 border border-[#0EB5B2]/10"
          >
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-[#0EB5B2] mr-3" />
                <h3 className="text-2xl font-semibold text-[#0D3853]">Secure Document Submission</h3>
              </div>
              <p className="text-lg text-[#0D3853]/80 max-w-3xl mx-auto">
                For your security and privacy, we provide secure methods for submitting financial applications and documents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-[#0D3853] mb-4">Financial Applications</h4>
                <p className="text-[#0D3853]/80 mb-6">
                  Submit your equipment financing application through our secure portal
                </p>
                <Link
                  href="/apply"
                  className="inline-flex items-center bg-gradient-to-r from-[#0EB5B2] to-[#0D3853] hover:from-[#0D3853] hover:to-[#0EB5B2] 
                    text-white px-6 py-3 rounded-lg font-semibold 
                    shadow-lg hover:shadow-xl 
                    transform hover:-translate-y-1 transition-all duration-300"
                >
                  Secure Application Portal
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="text-center">
                <h4 className="text-xl font-semibold text-[#0D3853] mb-4">Document Upload</h4>
                <p className="text-[#0D3853]/80 mb-6">
                  Upload documents for pending transactions via secure connection from your account representative
                </p>
                <div className="text-[#0D3853]/60">
                  <p className="text-sm">
                    Your account representative will provide you with a secure link for document submission
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-[#F2F2F2]/90 max-w-3xl mx-auto pb-4">
              Contact us today to discuss your equipment financing needs and discover how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <a
                href="tel:+17145007017"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 
                  text-white px-8 py-4 rounded-lg font-semibold text-lg 
                  shadow-lg hover:shadow-xl 
                  transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaPhone className="mr-2" />
                Call (714) 500-7017
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
