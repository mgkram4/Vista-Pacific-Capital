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
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="w-full bg-indigo-dye text-white py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            alt="Services background"
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
            Our Services
          </motion.h1>
          <motion.p
            className="text-2xl mb-12 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive financing solutions to power your business growth
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact" className="bg-light-sea-green text-white py-4 px-10 rounded-full text-xl font-semibold hover:bg-white hover:text-indigo-dye transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Explore Financing Options</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto py-24 px-4">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center text-indigo-dye"
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
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-56">
                <Image
                  src={service.image}
                  alt={`${service.title} financing service`}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-indigo-dye bg-opacity-60 flex items-center justify-center">
                  <service.icon className="text-6xl text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-indigo-dye mb-3">{service.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center text-indigo-dye"
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
                className="bg-white p-8 rounded-2xl shadow-xl text-center transition-all duration-300 hover:shadow-2xl hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-indigo-dye font-bold text-xl">{industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center text-indigo-dye"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Choose Vista Pacific Capital
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="bg-gray-50 p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-indigo-dye">Industry Experience</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Over 20 years of expertise in equipment financing across various sectors.</p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-indigo-dye">Competitive Rates</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Access to multiple lending partners ensures best-in-market rates for our clients.</p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-indigo-dye">Fast Approvals</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Quick turnaround times with approvals often within 24-48 hours.</p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-indigo-dye">Personalized Service</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Dedicated support and customized solutions tailored to your business needs.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-light-sea-green text-white py-24 px-4">
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
            <Link href="/contact" className="bg-white text-light-sea-green py-4 px-10 rounded-full text-xl font-semibold hover:bg-indigo-dye hover:text-white transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Contact Us Today</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}