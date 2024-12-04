"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

export default function Contact() {
  return (
    <div className="bg-gradient-to-br from-[#113E59]/10 to-[#082F4A]/10 min-h-screen font-sans">
      {/* Hero Section with Contract Signing Image */}
      <section className="w-full relative overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 h-[40vh] md:h-[30vh]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#082F4A]/80 to-[#113E59]/50 z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
            alt="Contract signing"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 h-[40vh] md:h-[40vh] flex items-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Let's Get Started
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Ready to secure financing for your equipment? Our team is here to help you every step of the way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-24 relative z-30 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Form - Sticky on desktop, normal on mobile */}
          <div className="lg:order-2 lg:sticky lg:top-8 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#113E59]">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#11B5B2] focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#11B5B2] focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#11B5B2] focus:border-transparent transition-all"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#11B5B2] focus:border-transparent transition-all"
                    placeholder="How can we help you?"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white py-4 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                >
                  <GiReceiveMoney className="text-xl" />
                  <span>Get Equipment Financing</span>
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Contact Information */}
          <div className="lg:order-1 space-y-6 md:space-y-8 mt-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#113E59]">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-[#11B5B2]/10 rounded-lg hover:bg-[#11B5B2]/20 transition-colors">
                  <FaPhone className="text-[#1E5470] text-xl" />
                  <p className="ml-4 text-gray-700 font-medium">(714) 985-6207</p>
                </div>
                <div className="flex items-center p-4 bg-[#11B5B2]/10 rounded-lg hover:bg-[#11B5B2]/20 transition-colors">
                  <FaEnvelope className="text-[#1E5470] text-xl" />
                  <p className="ml-4 text-gray-700 font-medium">Alanj@vistapacificapital.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#113E59] to-[#082F4A] rounded-2xl shadow-xl p-6 md:p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  'Fast approvals within 24-48 hours',
                  'Flexible terms from 12 to 72 months',
                  'High approval rate of 94.6%',
                  'Financing for both new and used equipment'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="h-2 w-2 bg-[#11B5B2] rounded-full mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}