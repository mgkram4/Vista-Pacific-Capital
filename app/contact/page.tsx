"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

export default function Contact() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="w-full bg-indigo-dye text-white py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            alt="Contact us background"
            layout="fill"
            objectFit="cover"
            
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-2xl mb-12 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We are here to answer your questions and help your business grow
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto py-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-indigo-dye">Get in Touch</h2>
            <p className="mb-8 text-gray-600 text-lg leading-relaxed">We are here to answer any questions you may have about our equipment financing solutions. Reach out to us using the information below:</p>
            
            <div className="bg-gray-50 p-8 rounded-2xl shadow-xl mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-dye">Vista Pacific Capital</h3>
              <div className="flex items-center mb-4">
                <FaPhone className="text-light-sea-green mr-4 text-2xl" />
                <p className="text-gray-700">(714) 985-6207</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-light-sea-green mr-4 text-2xl" />
                <p className="text-gray-700">info@vistapacificcapital.com</p>
              </div>
            </div>

            {/* Additional Information */}
            <motion.div 
              className="bg-indigo-dye p-8 rounded-2xl shadow-xl text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Fast approvals within 24-48 hours</li>
                <li>Flexible terms from 12 to 72 months</li>
                <li>High approval rate of 94.6%</li>
                <li>Financing for both new and used equipment</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-indigo-dye">Send Us a Message</h2>
            <form className="bg-gray-50 p-8 rounded-2xl shadow-xl">
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="w-full p-3 bg-white border border-gray-300 rounded focus:border-indigo-dye focus:ring focus:ring-indigo-dye focus:ring-opacity-50 text-gray-900" required />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="w-full p-3 bg-white border border-gray-300 rounded focus:border-indigo-dye focus:ring focus:ring-indigo-dye focus:ring-opacity-50 text-gray-900" required />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block mb-2 font-semibold text-gray-700">Phone</label>
                <input type="tel" id="phone" name="phone" className="w-full p-3 bg-white border border-gray-300 rounded focus:border-indigo-dye focus:ring focus:ring-indigo-dye focus:ring-opacity-50 text-gray-900" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full p-3 bg-white border border-gray-300 rounded focus:border-indigo-dye focus:ring focus:ring-indigo-dye focus:ring-opacity-50 text-gray-900" required></textarea>
              </div>
              <button type="submit" className="bg-light-sea-green text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-light-sea-green transition duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105">
                <GiReceiveMoney className="mr-2 text-2xl" /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}