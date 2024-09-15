"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaBriefcase, FaChartLine, FaHandshake, FaIndustry } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

export default function ServicesOverview() {
  const services = [
    {
      title: 'Equipment Leasing',
      description: 'Flexible terms from 24 to 84 months with competitive rates and minimal upfront costs.',
      icon: FaBriefcase,
      image: 'https://images.unsplash.com/photo-1641932969401-a541b8f29155?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVhc2V8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Equipment Loans',
      description: 'Fixed and variable rate options with financing available for up to 100% of equipment value.',
      icon: FaChartLine,
      image: 'https://images.unsplash.com/photo-1625225233840-695456021cde?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpbmFjZSUyMGxvYW5zfGVufDB8fDB8fHww',
    },
    {
      title: 'Sale-Leaseback',
      description: 'Unlock capital from your existing equipment while retaining use of your assets.',
      icon: FaHandshake,
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhc2UlMjBhZ3JlZW1lbnR8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Vendor Programs',
      description: 'Streamlined financing options for equipment sellers to increase sales potential.',
      icon: FaIndustry,
      image: 'https://images.unsplash.com/photo-1471347219181-ea568f4ef9a3?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2dyYW0lMjB2ZW5kb3J8ZW58MHx8MHx8fDA%3D',
    },
  ];

  const industries = [
    'Manufacturing', 'Construction', 'Healthcare', 'Transportation', 
    'Warehouse and Logistics', 'Restaurants and Hospitality', 'Brewing and Distilling'
  ];

  return (
    <div className="bg-gray-900 font-sans">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white py-32 px-4 relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            alt="Services background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-2xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive financing solutions to power your business growth
          </motion.p>
        </div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        ></motion.div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto py-24 px-4">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center text-blue-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Financing Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-56">
                <Image
                  src={service.image}
                  alt={`${service.title} financing service`}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <service.icon className="text-6xl text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-200 text-lg leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image 
            src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1306&q=80"
            alt="Industries background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center text-blue-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Industries We Serve
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-2xl backdrop-filter backdrop-blur-lg text-center transition-all duration-300 hover:shadow-3xl hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-white font-bold text-xl">{industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center text-blue-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Choose Vista Pacific Capital
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-2xl backdrop-filter backdrop-blur-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-blue-300">Industry Experience</h3>
              <p className="text-gray-200 text-lg leading-relaxed">Over 20 years of expertise in equipment financing across various sectors.</p>
            </motion.div>
            <motion.div
              className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-2xl backdrop-filter backdrop-blur-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-blue-300">Competitive Rates</h3>
              <p className="text-gray-200 text-lg leading-relaxed">Access to multiple lending partners ensures best-in-market rates for our clients.</p>
            </motion.div>
            <motion.div
              className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-2xl backdrop-filter backdrop-blur-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-blue-300">Fast Approvals</h3>
              <p className="text-gray-200 text-lg leading-relaxed">Quick turnaround times with approvals often within 24-48 hours.</p>
            </motion.div>
            <motion.div
              className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-2xl backdrop-filter backdrop-blur-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-blue-300">Personalized Service</h3>
              <p className="text-gray-200 text-lg leading-relaxed">Dedicated support and customized solutions tailored to your business needs.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Explore Your Financing Options?
          </motion.h2>
          <motion.p
            className="text-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our tailored financing solutions can help your business thrive.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="bg-white text-blue-900 py-4 px-10 rounded-full text-xl font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Contact Us Today</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}