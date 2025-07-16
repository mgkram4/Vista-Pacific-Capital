"use client"

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCalculator, FaChartLine, FaFileInvoiceDollar, FaQuestionCircle } from 'react-icons/fa';

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

const Section179Page: React.FC = () => {
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
            src="/Images/hero-background.jpg"
            alt="Section 179 tax benefits background"
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
              Maximizing Your Tax Savings
              <br />
              <span className="bg-gradient-to-r from-[#FF6B35] to-[#ff825c] bg-clip-text text-transparent">with Section 179</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-[#F2F2F2]/90"
              variants={fadeInUp}
            >
              Unlock the power of equipment financing and tax deductions
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                  text-white px-8 py-4 rounded-lg font-semibold text-lg 
                  shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
                  transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaFileInvoiceDollar className="mr-3 text-xl" />
                Maximize Your Savings
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0EB5B2]/20 to-[#0D3853]/20"></div>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto py-20 px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-lg shadow-lg p-8 mb-12 border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300"
        >
          <h2 className="text-3xl font-semibold mb-6 text-[#0D3853]">Understanding Section 179</h2>
          <p className="mb-4 text-[#0D3853]/80">
            As a business owner, you're always looking for ways to reduce costs while growing your
            operations. One powerful tool to help with this is Section 179 of the U.S. tax code. Section 179
            allows businesses to deduct the full purchase price of qualifying equipment in the year it's
            purchased or leased. Instead of depreciating equipment over time, you get the full tax benefit
            upfront.
          </p>
          <p className="text-[#0D3853]/80">
            Here's a quick breakdown of how Section 179 works and why it's beneficial when combined with
            equipment financing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-lg shadow-lg p-6 border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br from-[#0EB5B2]/20 to-[#0EB5B2]/5 rounded-lg p-3 w-fit mr-3">
                <FaQuestionCircle className="text-3xl text-[#0EB5B2]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0D3853]">What is Section 179?</h3>
            </div>
            <p className="text-[#0D3853]/80">
              Section 179 lets businesses deduct the full cost of qualifying equipment or software during the
              tax year it's acquired. This applies whether the equipment is purchased outright or financed. For
              companies using equipment leasing, you can still deduct the total price even if you're making
              monthly payments—making this a great option to conserve cash while benefiting from tax
              savings.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-lg shadow-lg p-6 border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br from-[#0EB5B2]/20 to-[#0EB5B2]/5 rounded-lg p-3 w-fit mr-3">
                <FaChartLine className="text-3xl text-[#0EB5B2]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0D3853]">Benefits for Equipment Financing</h3>
            </div>
            <p className="text-[#0D3853]/80">
              One of the biggest advantages of Section 179 is the immediate cash flow improvement. By
              writing off the entire cost upfront, businesses reduce their taxable income for the year, leading to
              a smaller tax bill. This extra cash can be reinvested into your business. And when you finance
              equipment, you spread out payments over time, but still receive the full tax break right away.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-lg shadow-lg p-8 mb-12 border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300"
        >
          <div className="flex items-center mb-4">
            <div className="bg-gradient-to-br from-[#0EB5B2]/20 to-[#0EB5B2]/5 rounded-lg p-3 w-fit mr-3">
              <FaCalculator className="text-3xl text-[#0EB5B2]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#0D3853]">Are There Limits?</h3>
          </div>
          <p className="text-[#0D3853]/80">
            For 2024, the deduction limit is $1.16 million, with a spending cap of $4.05 million. As long as
            your equipment is purchased or financed and in use by December 31st, you can take
            advantage of the deduction.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-lg shadow-lg p-8 mb-12 border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#0D3853]">Final Thoughts</h3>
          <p className="mb-4 text-[#0D3853]/80">
            Section 179 offers significant tax savings and cash flow benefits, especially when paired with
            equipment financing. You get to invest in your business without heavy upfront costs, all while
            reducing your tax burden.
          </p>
          <p className="text-[#0D3853]/80">
            If you're interested in learning more, feel free to contact me at (714) 500-7017 or email
            alanj@providencecapitalfunding.com.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-[#0EB5B2]/10 to-[#0EB5B2]/5 rounded-lg shadow-lg p-8 border border-[#0EB5B2]/20"
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#0D3853]">About the Author</h3>
          <p className="text-[#0D3853]/80">
            Alan Johnson helps businesses find customized equipment leasing and financing solutions to
            support growth and maximize tax savings.
          </p>
        </motion.div>
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
              Ready to Maximize Your Tax Savings?
            </h2>
            <p className="text-xl text-[#F2F2F2]/90 max-w-3xl mx-auto pb-4">
              Let's discuss how Section 179 and our equipment financing solutions can benefit your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                text-white px-8 py-4 rounded-lg font-semibold text-lg 
                shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
                transform hover:-translate-y-1 transition-all duration-300"
            >
              <FaFileInvoiceDollar className="mr-3 text-xl" />
              Contact Us Today
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Section179Page;