// File: src/pages/contact.tsx
"use client"

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

export default function Contact() {
  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white py-32 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We are here to answer your questions and help your business grow
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
      <section className="max-w-6xl mx-auto py-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-blue-300">Get in Touch</h2>
            <p className="mb-8 text-gray-400">We are here to answer any questions you may have about our equipment financing solutions. Reach out to us using the information below:</p>
            
            <div className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-200">Vista Pacific Capital</h3>
              {/* <div className="flex items-center mb-4"> */}
                {/* <FaMapMarkerAlt className="text-blue-400 mr-4 text-2xl" /> */}
                {/* <p className="text-gray-300">2951 Saturn Street, Suite E<br />Brea, CA 92821</p> */}
              {/* </div> */}
              <div className="flex items-center mb-4">
                <FaPhone className="text-blue-400 mr-4 text-2xl" />
                <p className="text-gray-300">(714) 985-6207</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-4 text-2xl" />
                <p className="text-gray-300">info@vistapacificcapital.com</p>
              </div>
            </div>

            {/* Additional Information */}
            <motion.div 
              className="bg-blue-900 p-8 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-200">Why Choose Us?</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
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
            <h2 className="text-4xl font-bold mb-6 text-blue-300">Send Us a Message</h2>
            <form className="bg-gray-800 p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 font-semibold text-blue-200">Name</label>
                <input type="text" id="name" name="name" className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-white" required />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-semibold text-blue-200">Email</label>
                <input type="email" id="email" name="email" className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-white" required />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block mb-2 font-semibold text-blue-200">Phone</label>
                <input type="tel" id="phone" name="phone" className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-white" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-semibold text-blue-200">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-white" required></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105">
                <GiReceiveMoney className="mr-2 text-2xl" /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="w-full py-24 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-8 text-center text-blue-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Location
          </motion.h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.0700215138095!2d-117.89626106703561!3d33.83650307319133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd5c75f2900a3%3A0x28c6c77f5f1f8f6d!2s2951%20Saturn%20St%20Suite%20E%2C%20Brea%2C%20CA%2092821!5e0!3m2!1sen!2sus!4v1695702834592!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{border:0}} 
            
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section> */}
    </div>
  );
}