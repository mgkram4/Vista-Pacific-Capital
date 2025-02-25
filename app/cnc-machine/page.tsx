// app/cnc/cnc-financing.tsx
"use client"

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChartLine,
  FaClock,
  FaCogs,
  FaIndustry,
  FaLaptop,
  FaMicrochip,
  FaTools
} from 'react-icons/fa';
import { GiGears, GiReceiveMoney } from 'react-icons/gi';
import { cncMetadata } from '../lib/metadata';

const equipmentTypes = [
  {
    title: 'CNC Mills',
    description: 'Advanced vertical machining centers, horizontal machining centers, and 5-axis CNC mills.',
    icon: FaCogs,
    image: 'https://images.unsplash.com/photo-1674453450405-b2d71e482e80?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNuYyUyMG1pbGxpbmclMjBtYWNoaW5lfGVufDB8fDB8fHww'
  },
  {
    title: 'CNC Lathes',
    description: 'High-precision turning centers and multi-axis CNC lathes for complex parts.',
    icon: FaCogs,
    image: 'https://images.unsplash.com/photo-1563520240344-52b067aa5f84?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y25jJTIwbWlsbGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D'
  },
  {
    title: 'Automation Systems',
    description: 'Robotic automation solutions and material handling systems for CNC operations.',
    icon: FaIndustry,
    image: 'https://images.unsplash.com/photo-1563520240533-66480a3916fe?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y25jJTIwbWlsbGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D'
  },
  {
    title: 'Control Systems',
    description: 'Advanced CNC controls, software, and programming solutions.',
    icon: FaLaptop,
    image: 'https://images.unsplash.com/photo-1666618090858-fbcee636bd3e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNuYyUyMG1pbGxpbmclMjBtYWNoaW5lfGVufDB8fDB8fHww'
  },
  {
    title: 'Tool Systems',
    description: 'Automated tool changers, tool management systems, and cutting tools.',
    icon: FaTools,
    image: 'https://images.unsplash.com/photo-1666634157070-6fd830fb5672?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNuYyUyMG1pbGxpbmclMjBtYWNoaW5lfGVufDB8fDB8fHww'
  }
];

// Statistics display data
const stats = [
  { value: `$${cncMetadata.financingTerms.maxAmount.toLocaleString()}`, label: 'Maximum Financing', icon: FaMicrochip },
  { value: `${cncMetadata.financingTerms.minTerm}-${cncMetadata.financingTerms.maxTerm}`, label: 'Term Length (Months)', icon: FaClock },
  { value: `${cncMetadata.financingTerms.interestRange.min}%`, label: 'Starting Rate', icon: FaChartLine },
  { value: '24hrs', label: 'Quick Approval', icon: GiGears }
];

const processSteps = [
  'Simplified application process with minimal documentation required',
  'Financing for both new and used CNC machines',
  'Flexible terms up to 84 months to match your production cycles',
  'Competitive rates with rapid approval times',
  'Expert guidance from machine tool financing specialists'
];

export default function CNCFinancingContent() {
  // Define keyFeatures to match standard format
  const keyFeatures = [
    { value: '$20M', label: 'Maximum Financing', icon: GiReceiveMoney },
    { value: '24-84', label: 'Flexible Terms (Months)', icon: FaClock },
    { value: 'New/Used', label: 'Equipment Options', icon: FaTools },
    { value: '24hrs', label: 'Quick Approval', icon: GiGears }
  ];

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="w-full bg-indigo-dye text-white py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1526290766257-c015850e4629?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y25jJTIwbWlsbGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D"
            alt="CNC Machine background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            CNC Machine Equipment Financing
          </motion.h1>
          <motion.p
            className="text-2xl mb-12 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {cncMetadata.description}
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
              <span>Get Financing</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <feature.icon className="text-4xl text-light-sea-green mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-indigo-dye mb-2">{feature.value}</h3>
                <p className="text-gray-600">{feature.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Types Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center text-indigo-dye"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Equipment We Finance
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {equipmentTypes.map((type, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48">
                  <Image 
                    src={type.image}
                    alt={`${type.title} CNC equipment for financing`}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-indigo-dye bg-opacity-60 flex items-center justify-center">
                    <type.icon className="text-6xl text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-indigo-dye mb-3">{type.title}</h2>
                  <p className="text-gray-700 text-lg leading-relaxed">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Updated to match other pages */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center text-indigo-dye"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Benefits of CNC Machine Financing
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <GiGears className="text-3xl text-light-sea-green mb-4" />
              <h3 className="text-xl font-semibold text-indigo-dye mb-2">Technical Expertise</h3>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <GiGears className="text-3xl text-light-sea-green mb-4" />
              <h3 className="text-xl font-semibold text-indigo-dye mb-2">Flexible Solutions</h3>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <GiGears className="text-3xl text-light-sea-green mb-4" />
              <h3 className="text-xl font-semibold text-indigo-dye mb-2">Fast Approvals</h3>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <GiGears className="text-3xl text-light-sea-green mb-4" />
              <h3 className="text-xl font-semibold text-indigo-dye mb-2">Comprehensive Coverage</h3>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <GiGears className="text-3xl text-light-sea-green mb-4" />
              <h3 className="text-xl font-semibold text-indigo-dye mb-2">Preserve Working Capital</h3>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <GiGears className="text-3xl text-light-sea-green mb-4" />
              <h3 className="text-xl font-semibold text-indigo-dye mb-2">Competitive Rates</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Updated to match other pages */}
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-sm font-semibold text-cyan-400 mb-2 block">GET STARTED TODAY</span>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100/90 max-w-3xl mx-auto pb-10">
              Get pre-qualified in minutes with no impact to your credit score
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                text-white px-8 py-4 rounded-lg font-semibold text-lg 
                shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 
                transform hover:-translate-y-1 transition-all duration-300"
            >
              Get Started Today
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}