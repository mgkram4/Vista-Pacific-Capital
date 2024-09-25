"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { FaCalculator, FaChartLine, FaFileInvoiceDollar, FaQuestionCircle } from 'react-icons/fa';

const Section179Page: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 py-32 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Maximizing Your Tax Savings with Section 179
          </motion.h1>
          <motion.p
            className="text-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Unlock the power of equipment financing and tax deductions
          </motion.p>
        </div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        ></motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto py-24 px-4">
        <motion.div
          className="bg-gray-800 rounded-lg shadow-xl p-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Understanding Section 179</h2>
          <p className="mb-4">
            As a business owner, you're always looking for ways to reduce costs while growing your
            operations. One powerful tool to help with this is Section 179 of the U.S. tax code. Section 179
            allows businesses to deduct the full purchase price of qualifying equipment in the year it's
            purchased or leased. Instead of depreciating equipment over time, you get the full tax benefit
            upfront.
          </p>
          <p>
            Here's a quick breakdown of how Section 179 works and why it's beneficial when combined with
            equipment financing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-gray-800 rounded-lg shadow-xl p-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <FaQuestionCircle className="text-3xl text-blue-400 mr-3" />
              <h3 className="text-2xl font-semibold">What is Section 179?</h3>
            </div>
            <p>
              Section 179 lets businesses deduct the full cost of qualifying equipment or software during the
              tax year it's acquired. This applies whether the equipment is purchased outright or financed. For
              companies using equipment leasing, you can still deduct the total price even if you're making
              monthly payments—making this a great option to conserve cash while benefiting from tax
              savings.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 rounded-lg shadow-xl p-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center mb-4">
              <FaChartLine className="text-3xl text-green-400 mr-3" />
              <h3 className="text-2xl font-semibold">Benefits for Equipment Financing</h3>
            </div>
            <p>
              One of the biggest advantages of Section 179 is the immediate cash flow improvement. By
              writing off the entire cost upfront, businesses reduce their taxable income for the year, leading to
              a smaller tax bill. This extra cash can be reinvested into your business. And when you finance
              equipment, you spread out payments over time, but still receive the full tax break right away.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="bg-gray-800 rounded-lg shadow-xl p-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center mb-4">
            <FaCalculator className="text-3xl text-yellow-400 mr-3" />
            <h3 className="text-2xl font-semibold">Are There Limits?</h3>
          </div>
          <p>
            For 2024, the deduction limit is $1.16 million, with a spending cap of $4.05 million. As long as
            your equipment is purchased or financed and in use by December 31st, you can take
            advantage of the deduction.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-800 rounded-lg shadow-xl p-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Final Thoughts</h3>
          <p className="mb-4">
            Section 179 offers significant tax savings and cash flow benefits, especially when paired with
            equipment financing. You get to invest in your business without heavy upfront costs, all while
            reducing your tax burden.
          </p>
          <p>
            If you're interested in learning more, feel free to contact me at (714) 985-6207 or email
            alanj@providencecapitalfunding.com.
          </p>
        </motion.div>

        <motion.div
          className="bg-blue-800 rounded-lg shadow-xl p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-2xl font-semibold mb-4">About the Author</h3>
          <p>
            Alan Johnson helps businesses find customized equipment leasing and financing solutions to
            support growth and maximize tax savings.
          </p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-blue-900 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Maximize Your Tax Savings?
          </motion.h2>
          <motion.p
            className="text-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how Section 179 and our equipment financing solutions can benefit your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="bg-white text-blue-900 py-4 px-10 rounded-full text-xl font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <FaFileInvoiceDollar className="mr-3 text-3xl" />
              <span>Contact Us Today</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Section179Page;