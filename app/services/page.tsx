"use client"

import { motion } from 'framer-motion';
import { ChevronRight, Clock, DollarSign } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBriefcase, FaChartLine, FaHandshake, FaIndustry } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

export default function ServicesOverview() {
  const services = [
    {
      title: 'Material Handling Equipment Financing',
      description: 'Complete financing solutions for warehouse and material handling equipment with flexible terms.',
      icon: FaIndustry,
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0',
    },
    {
      title: 'Construction Equipment Financing',
      description: 'Comprehensive financing for construction equipment from dealers or private parties.',
      icon: FaBriefcase,
      image: 'https://images.unsplash.com/photo-1621922688758-359fc864071e',
    },
    {
      title: 'Medical Equipment Financing',
      description: 'Specialized financing for medical practices of all sizes with flexible application limits.',
      icon: FaHandshake,
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907',
    },
    {
      title: 'Manufacturing Equipment Financing',
      description: 'Comprehensive manufacturing equipment financing with competitive rates and international vendor support.',
      icon: FaChartLine,
      image: 'https://images.unsplash.com/photo-1674453450405-b2d71e482e80',
    },
    {
      title: 'Restaurant Equipment Financing',
      description: 'Complete restaurant financing solutions for new locations and equipment upgrades.',
      icon: FaIndustry,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    },
    {
      title: 'Transportation Financing Programs',
      description: 'Flexible transportation financing for all types of commercial vehicles and drivers.',
      icon: FaBriefcase,
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c',
    },
  ];

  const industries = [
    'Manufacturing', 'Construction', 'Healthcare', 'Transportation', 
    'Warehouse and Logistics', 'Restaurants and Hospitality', 'Brewing and Distilling'
  ];

  // Key features similar to equipment pages
  const keyFeatures = [
    { value: '$20M', label: 'Maximum Financing', icon: DollarSign },
    { value: '24-84', label: 'Flexible Terms (Months)', icon: Clock },
    { value: '15+', label: 'Lender Partners', icon: FaBriefcase },
    { value: 'Fast', label: 'Quick Approval', icon: GiReceiveMoney }
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
            <Link href="/contact" className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white
                        bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700
                        rounded-lg shadow-xl hover:shadow-orange-500/20 transition-all duration-300
                        group relative overflow-hidden">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Explore Financing Options</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-6 text-center text-indigo-dye"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Choose Vista Pacific Capital
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Fast approvals with flexible terms for your business needs
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-gradient-to-br from-[#113E59] to-[#082F4A] rounded-2xl shadow-xl p-6 md:p-8 text-white"
            >
              <motion.h3 
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Financing Solutions
              </motion.h3>
              <motion.p 
                className="text-blue-100 mb-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Industry-leading solutions with our comprehensive funding programs.
              </motion.p>
              <ul className="space-y-4">
                {[
                  'Terms up to 84 months',
                  'Access to as many as 15 different lenders',
                  'No money down for qualified customers',
                  'Competitive Rates',
                  'New and Used Equipment'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-2 w-2 bg-[#11B5B2] rounded-full mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100"
            >
              <motion.h3 
                className="text-2xl font-bold mb-4 text-indigo-dye"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Quick Approval Time
              </motion.h3>
              <motion.p 
                className="text-gray-600 mb-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Same day approvals for qualified application-only transactions.
              </motion.p>
              <ul className="space-y-4">
                {[
                  '2-minute application',
                  'Soft credit pull only',
                  'Application Only up to $750,000',
                  'Financing from $20,000 to $20 million'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-2 w-2 bg-light-sea-green rounded-full mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div
              className="bg-gradient-to-br from-light-sea-green to-[#0E9B97] rounded-2xl shadow-xl p-6 md:p-8 text-white"
            >
              <motion.h3 
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Vendor Partnership Programs
              </motion.h3>
              <motion.p 
                className="text-blue-100 mb-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                Provide easy streamline financing solutions for your customers so they can grow their business.
              </motion.p>
              <ul className="space-y-4">
                {[
                  'Programs for startup customers',
                  'Vendor Rewards Programs',
                  'Great alternative for customer to cash or local bank',
                  'Prepayment up to 100% prior to completion',
                  'Can cover shipping/training/labor costs'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-2 w-2 bg-white rounded-full mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <feature.icon className="text-4xl text-light-sea-green mx-auto mb-4" />
                </motion.div>
                <motion.h3 
                  className="text-3xl font-bold text-indigo-dye mb-2"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 + 0.1 }}
                  viewport={{ once: true }}
                >
                  {feature.value}
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {feature.label}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
                     <motion.h2
             className="text-4xl font-bold mb-12 text-center text-indigo-dye"
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
           >
             Explore Our Equipment
           </motion.h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {services.map((service, index) => (
               <div
                 key={index}
                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
               >
                 <div className="relative h-48">
                   <Image
                     src={service.image}
                     alt={service.title}
                     layout="fill"
                     objectFit="cover"
                   />
                   <motion.div 
                     className="absolute inset-0 bg-indigo-dye bg-opacity-60 flex items-center justify-center"
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.5, delay: index * 0.05 }}
                     viewport={{ once: true }}
                   >
                     <service.icon className="text-6xl text-white" />
                   </motion.div>
                 </div>
                 <div className="p-6">
                   <motion.h3 
                     className="text-xl font-bold text-indigo-dye mb-3"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: index * 0.05 }}
                     viewport={{ once: true }}
                   >
                     {service.title}
                   </motion.h3>
                   <motion.p 
                     className="text-gray-600"
                     initial={{ opacity: 0, y: 15 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: index * 0.05 + 0.1 }}
                     viewport={{ once: true }}
                   >
                     {service.description}
                   </motion.p>
                 </div>
               </div>
             ))}
          </div>
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

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2lnbiUyMHBhcGVyfGVufDB8fDB8fHww"
            alt="Modern office background"
            fill
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B365D]/95 via-[#1B365D]/90 to-[#48B0B0]/80 " />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-8">
            <motion.span 
              className="text-sm font-semibold text-cyan-400 mb-2 block"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              GET STARTED TODAY
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Ready to Explore Your Financing Options?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100/90 max-w-3xl mx-auto pb-10"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's discuss how our tailored financing solutions can help your business thrive.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                  text-white px-8 py-4 rounded-lg font-semibold text-lg 
                  shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 
                  transform hover:-translate-y-1 transition-all duration-300"
              >
                Contact Us Today
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}