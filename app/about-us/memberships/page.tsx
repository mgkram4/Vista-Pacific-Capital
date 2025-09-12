"use client";

import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink } from 'lucide-react';
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

const affiliations = [
  {
    name: 'NEFA',
    fullName: 'National Equipment Finance Association',
    logo: '/Images/vendor/nefa.png',
    url: 'https://www.nefassociation.org/',
    description: 'The National Equipment Finance Association is the premier trade association for the equipment finance industry, providing advocacy, education, and networking opportunities.'
  },
  {
    name: 'ELFA',
    fullName: 'Equipment Leasing and Finance Association',
    logo: '/Images/vendor/elfa.png',
    url: 'https://www.elfaonline.org/',
    description: 'The Equipment Leasing and Finance Association is the trade association for companies in the $1 trillion equipment finance sector.'
  },
  {
    name: 'AACFB',
    fullName: 'American Association of Commercial Finance Brokers',
    logo: '/Images/vendor/aacfb.png',
    url: 'https://aacfb.org/home',
    description: 'The American Association of Commercial Finance Brokers represents commercial finance brokers and promotes ethical business practices in the industry.'
  }
];

export default function MembershipsPage() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/bg-wave2.png"
            alt="Memberships & Affiliations background"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-black/20 lg:hidden" />
        </div>
        <div className="relative z-10 lg:grid lg:grid-cols-10 w-full h-full">
          <div className="lg:col-span-3 lg:bg-[#0D3853]/95 text-white flex flex-col justify-center p-8 sm:p-12 lg:p-16 h-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="w-full max-w-md mx-auto [filter:drop-shadow(0_3px_4px_rgba(0,0,0,0.6))] lg:filter-none"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#F2F2F2] to-[#B3B3B3] mb-6">
                Memberships & Affiliations
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white lg:text-[#F2F2F2]/90">
                We are proud to be associated with leading industry organizations that uphold the highest standards.
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
              Professional Memberships & Affiliations
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[#0D3853]/80 max-w-3xl mx-auto mt-4">
              Our commitment to excellence is reflected in our active participation in leading industry organizations.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {affiliations.map((affiliation, index) => (
              <motion.div
                key={affiliation.name}
                variants={fadeInUp}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300 hover:shadow-xl"
              >
                <div className="p-6">
                  <div className="flex items-center justify-center mb-6 h-24">
                    <Image 
                      src={affiliation.logo} 
                      alt={`${affiliation.name} logo`} 
                      width={150} 
                      height={75} 
                      className="object-contain max-h-full" 
                    />
                  </div>
                  
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold text-[#0D3853] mb-2">
                      {affiliation.name}
                    </h3>
                    <p className="text-sm font-medium text-[#0EB5B2] mb-3">
                      {affiliation.fullName}
                    </p>
                  </div>
                  
                  <p className="text-[#0D3853]/80 text-sm leading-relaxed mb-6">
                    {affiliation.description}
                  </p>
                  
                  <div className="text-center">
                    <a 
                      href={affiliation.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#0EB5B2] hover:text-[#0D3853] font-medium transition-colors"
                    >
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 bg-gradient-to-br from-[#0D3853]/5 to-[#0EB5B2]/5 rounded-lg p-8 border border-[#0EB5B2]/20"
          >
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-[#0D3853] mb-4">
                Industry Standards & Ethics
              </h3>
              <p className="text-lg text-[#0D3853]/80 max-w-3xl mx-auto leading-relaxed">
                Our memberships in these prestigious organizations demonstrate our commitment to maintaining the highest industry standards, 
                ethical business practices, and staying current with the latest developments in equipment financing. These affiliations 
                provide us with ongoing education, networking opportunities, and access to industry best practices that benefit our clients.
              </p>
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
            <span className="text-sm font-semibold text-[#0EB5B2] mb-2 block">TRUSTED INDUSTRY PARTNER</span>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#B3B3B3]">
              Experience Professional Excellence
            </h2>
            <p className="text-xl text-[#F2F2F2]/90 max-w-3xl mx-auto pb-4">
              Work with a team that's committed to industry best practices and ethical standards.
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
