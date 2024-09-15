"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaQuoteLeft } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

export default function Testimonials() {
    const testimonials = [
        {
          name: "John Smith",
          company: "Smith Manufacturing Co.",
          quote: "Vista Pacific Capital's financing solutions allowed us to upgrade our entire production line. Their expert guidance and flexible terms were instrumental in our company's growth.",
          image: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBidWlzbmVzcyUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D", 
          industry: "Manufacturing"
        },
        {
          name: "Sarah Johnson",
          company: "Johnson Construction LLC",
          quote: "As a small construction firm, we were hesitant about financing new equipment. Vista Pacific made the process smooth and manageable, helping us take on larger projects.",
          image: "https://images.unsplash.com/photo-1485217988980-11786ced9454?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW4lMjBidWlzbmVzc3xlbnwwfHwwfHx8MA%3D%3D", 
          industry: "Construction"
        },
        {
          name: "Michael Chen",
          company: "Chen's Restaurant Group",
          quote: "Expanding our restaurant chain seemed daunting, but Vista Pacific's restaurant equipment financing made it possible. Their understanding of our industry was impressive.",
          image: "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXNhaW4lMjBjaGVmfGVufDB8fDB8fHww",
          industry: "Food Service"
        },
        {
          name: "Emily Rodriguez",
          company: "Rodriguez Logistics Inc.",
          quote: "Vista Pacific's fleet financing options allowed us to upgrade our entire fleet, improving efficiency and reducing maintenance costs. Their team was supportive throughout the process.",
          image: "https://images.unsplash.com/photo-1554151228-14d9def656e4", 
          industry: "Transportation"
        }
      ];
      
      
      
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
            Client Testimonials
          </motion.h1>
          <motion.p
            className="text-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hear from businesses we've helped succeed
          </motion.p>
        </div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        ></motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto py-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 mr-4">
                    <Image 
                      src={testimonial.image}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-blue-300">{testimonial.company}</p>
                  </div>
                </div>
                <FaQuoteLeft className="text-3xl text-blue-400 mb-4" />
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <span className="text-sm text-blue-400">{testimonial.industry}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full bg-blue-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Join Our Success Stories?
          </motion.h2>
          <motion.p
            className="text-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our equipment financing solutions can help your business thrive.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="bg-white text-blue-900 py-4 px-10 rounded-full text-xl font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Get Started Today</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}