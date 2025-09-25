'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <motion.div 
      className="bg-gradient-to-br from-[#113E59]/10 to-[#082F4A]/10 min-h-screen font-sans"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.1
      }}
    >
      {/* Hero Section with Contract Signing Image */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/Images/unsplash/contact-hero.jpg"
            alt="Yosemite National Park landscape"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 h-[25vh] md:h-[30vh] flex items-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Get Started
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Ready to secure financing for your equipment? Our team is here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-24 relative z-30 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8 mt-10">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#113E59]">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-[#11B5B2]/10 rounded-lg">
                  <FaPhone className="text-[#1E5470] text-xl" />
                  <p className="ml-4 text-gray-700 font-medium">(714)500-7017</p>
                </div>
                <div className="flex items-center p-4 bg-[#11B5B2]/10 rounded-lg">
                  <FaEnvelope className="text-[#1E5470] text-xl" />
                  <p className="ml-4 text-gray-700 font-medium">alanj@vistapacificcapital.com</p>
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#113E59]">Visit Our Office</h3>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-[#11B5B2]/10 rounded-lg">
                  <FaMapMarkerAlt className="text-[#1E5470] text-xl mt-1" />
                  <div className="ml-4">
                    <p className="text-gray-700 font-medium">Vista Pacific Capital</p>
                    <p className="text-gray-600">180 N Riverview</p>
                    <p className="text-gray-600">#360</p>
                    <p className="text-gray-600">Anaheim, CA 92808</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-10">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#113E59]">Find Us</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.1234567890123!2d-117.9144!3d33.8369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7c5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2s180%20N%20Riverview%20Dr%20%23360%2C%20Anaheim%2C%20CA%2092808!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vista Pacific Capital Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}