'use client';

import { motion } from 'framer-motion';
import {
    CheckCircle,
    ChevronRight,
    Clock,
    DollarSign,
    Heart,
    Shield,
    Users,
    Zap
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import NewVendorPartnerForm from '../components/NewVendorPartnerForm';
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

const vendorSupport = [
    {
        title: 'Help Convert More Sales with Seamless Financing Options',
        description: 'Easy-to-integrate financing solutions with flexible payment options for customers and right-time financing for equipment upgrades and operational expansion.',
        icon: Zap
    },
    {
        title: 'A Great Alternative to Cash',
        description: 'Minimal advance payment requirements that preserve capital for customers and enable growth without draining cash reserves.',
        icon: DollarSign
    },
    {
        title: 'We Have Options for Every Customer',
        description: 'Solutions for customers who avoid traditional banking, competitive rate shopping options, complex and story-based transaction handling, and one-stop shop positioning.',
        icon: Users
    },
    {
        title: 'Quick Approvals & Clear Communication',
        description: 'Streamlined approval process in few business days with real-time status updates throughout the process and full transparency from application to funding.',
        icon: Clock
    },
    {
        title: 'No Costs to You',
        description: 'Zero fees for vendor services with full-service financing management and end-to-end support from application to funding.',
        icon: Shield
    },
    {
        title: 'A Long-Term Capital Partner for Your Business',
        description: 'Ongoing partnership commitment with scalable solutions from small purchases to large expansions and comprehensive financing needs coverage.',
        icon: Heart
    }
];

const partnerBenefits = [
    {
        title: 'Same-Day Approvals on Application-Only Deals',
        description: 'Small transactions same-day, larger deals 2-3 business days'
    },
    {
        title: 'No Fees, No Commitment',
        description: 'No cost, no commitment, no formal onboarding required'
    },
    {
        title: 'Clear, Reliable Communication',
        description: 'Proactive updates at every step'
    },
    {
        title: 'Flexible Financing Options',
        description: 'Serves startups to established companies with tailored structures'
    },
    {
        title: 'White-Glove Customer Service',
        description: 'Immediate response, high-touch professional experience'
    },
    {
        title: 'Custom Financing Page for Your Website',
        description: 'Co-branded page for polished, full-service experience'
    },
    {
        title: 'Co-Branded Application Experience',
        description: 'Dual logo application for seamless, trustworthy process'
    }
];

export default function PartnerProgramClient() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <PageHeader
        title="Partner Program"
        subtitle="Your Trusted Partner, No Matter the Tide"
        buttonText="Start Partnering / Join Us"
        buttonHref="/vendor-form/"
        backgroundImage="/Images/header4.png"
      />

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0EB5B2]/20 to-[#0D3853]/20"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Section Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#0D3853]/20 to-[#0EB5B2]/20 my-16"></div>

        {/* Partner Benefits Section */}
        <motion.section variants={fadeInUp} initial="hidden" animate="visible" className="mb-16">
          <h3 className="text-3xl font-bold text-[#0D3853] mb-12 text-center">Partner Benefits</h3>
          <div className="bg-gradient-to-br from-[#0D3853]/5 to-[#0EB5B2]/5 p-8 rounded-2xl border border-[#0EB5B2]/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnerBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-[#0EB5B2] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#0D3853] mb-1">{benefit.title}</h4>
                    <p className="text-sm text-[#0D3853]/70">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Vendor Partner Form Section */}
        <motion.section variants={fadeInUp} initial="hidden" animate="visible" className="mb-16">
          <h3 className="text-3xl font-bold text-[#0D3853] mb-12 text-center">Start Your Partnership</h3>
          <NewVendorPartnerForm />
        </motion.section>
      </div>

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0EB5B2]/20 to-[#0D3853]/20"></div>

      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden w-full">
        <div className="absolute inset-0">
          <Image 
            src="/Images/bg-wave2.png"
            alt="Team collaborating on a business strategy"
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
            <span className="text-sm font-semibold text-[#0EB5B2] mb-2 block">JOIN US ON THE PATH TO SUCCESS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#B3B3B3]">
              The View is Better at the Top
            </h2>
            <p className="text-xl text-[#F2F2F2]/90 max-w-3xl mx-auto pb-4">
              Partner with us and discover how easy equipment financing can be for your business and your customers
            </p>
            <Link
              href="/vendor-form/"
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
      </section>
    </div>
  );
}
