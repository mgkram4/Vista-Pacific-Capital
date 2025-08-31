"use client";

import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaLinkedin, FaPhone, FaUser } from 'react-icons/fa';

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

const founder = {
  name: 'Alan Johnson',
  role: 'CEO & Founder',
  bio: "Alan Johnson, a graduate of California State University, Fullerton, grew up in Northern California and later moved to Southern California. He now resides in Orange County, CA, with his wife and two children. With over 20 years of experience in the finance industry, Alan founded Vista Pacific Capital to combine best practices with a people-first approach, adapting to changes in technology, the commercial marketplace, and lending institutions.\n\nOutside of work, Alan enjoys living an active lifestyle and spending time with family and friends. His goal is simple: to build a company that works hard for its customers, fosters strong relationships, and stays true to its values.",
  image: '/Images/alan-johnson.jpg',
  email: 'alanj@vistapacificcapital.com',
  phone: '(714) 500-7017',
  linkedin: 'https://www.linkedin.com/in/alan-johnson-vista-pacific-capital'
};

export default function MeetTheFounderPage() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/bg-wave2.png"
            alt="Meet the Founder background"
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
                Meet the Founder
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white lg:text-[#F2F2F2]/90">
                Get to know Alan Johnson, the visionary behind Vista Pacific Capital and our commitment to excellence.
              </p>
              <Link
                href="/apply"
                className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                    text-white px-8 py-4 rounded-lg font-semibold text-lg 
                    shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
                    transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started
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
              {founder.name}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-[#0EB5B2] font-semibold mt-2">
              {founder.role}
            </motion.p>
          </div>

          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30"
          >
            <div className="flex flex-col lg:flex-row items-center">
              <div className="relative h-96 w-full lg:w-1/3">
                {founder.image ? (
                  <Image 
                    src={founder.image} 
                    alt={founder.name} 
                    fill
                    className="object-contain" 
                  />
                ) : (
                  <div className="h-full bg-gradient-to-br from-[#0EB5B2]/20 to-[#0EB5B2]/5 flex items-center justify-center">
                    <FaUser className="text-[#0EB5B2] text-6xl" />
                  </div>
                )}
              </div>
              <div className="p-8 lg:w-2/3">
                <div className="mb-6">
                  <p className="text-lg text-[#0D3853]/80 whitespace-pre-line leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#0D3853] mb-4">Contact Information</h3>
                  
                  <div className="flex items-center text-[#0D3853]/80 hover:text-[#0EB5B2] transition-colors">
                    <FaEnvelope className="text-[#0EB5B2] mr-4 text-lg" />
                    <a href={`mailto:${founder.email}`} className="text-lg">
                      {founder.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center text-[#0D3853]/80 hover:text-[#0EB5B2] transition-colors">
                    <FaPhone className="text-[#0EB5B2] mr-4 text-lg" />
                    <a href={`tel:${founder.phone.replace(/[^\d]/g, '')}`} className="text-lg">
                      {founder.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center text-[#0D3853]/80 hover:text-[#0EB5B2] transition-colors">
                    <FaLinkedin className="text-[#0EB5B2] mr-4 text-lg" />
                    <a 
                      href={founder.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-lg flex items-center"
                    >
                      Connect on LinkedIn
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
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
              Ready to Work with Alan and Our Team?
            </h2>
            <p className="text-xl text-[#F2F2F2]/90 max-w-3xl mx-auto pb-4">
              Experience the personal touch and expertise that sets Vista Pacific Capital apart.
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
