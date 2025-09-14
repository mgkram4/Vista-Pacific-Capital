"use client";

import { motion } from 'framer-motion';
import { CheckCircle, ChevronRight } from 'lucide-react';
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

const whyChooseUsPoints = [
  {
    title: "We Shop the Lenders So You Don't Have To",
    description: "We partner with a wide network of lenders to find you the most competitive financing rates and terms, saving you valuable time and effort in the shopping process."
  },
  {
    title: "We Understand Equipment Financing",
    description: "Our team specializes in equipment financing and understands the nuances of the industry, allowing us to structure financing solutions that make sense for your specific business needs."
  },
  {
    title: "A Built-In Source of Capital",
    description: "We provide a reliable source of capital, giving you the financial flexibility to acquire the equipment you need to grow your business without tying up your cash reserves."
  },
  {
    title: "We Understand Time is of the Essence",
    description: "In business, time is money. Our streamlined process ensures fast approvals and funding so you can get your equipment and get to work quickly."
  },
  {
    title: "Fast, Flexible, and Straightforward",
    description: "Our financing process is designed to be as simple and transparent as possible, with flexible terms to match your business's cash flow and financial situation."
  },
  {
    title: "Real People, Real Help",
    description: "When you work with us, you get a dedicated financing partner. Our team provides personalized support and guidance throughout the entire process."
  }
];

export default function WhyChooseUsPage() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <PageHeader
        title="Why Choose Us"
        subtitle="Our commitment to your business growth sets us apart. Here's why clients choose us for their equipment financing needs."
        buttonText="Get Started"
        buttonHref="/apply"
      />

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
              Why Choose Vista Pacific Capital
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[#0D3853]/80 max-w-3xl mx-auto mt-4">
              We're more than just a financing company. We're your dedicated partner in business growth.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUsPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-lg shadow-lg p-6 border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-[#0EB5B2]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0D3853] mb-3">
                      {point.title}
                    </h3>
                    <p className="text-[#0D3853]/80 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-[#F2F2F2]/90 max-w-3xl mx-auto pb-4">
              Join thousands of businesses who have chosen Vista Pacific Capital for their equipment financing needs.
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
