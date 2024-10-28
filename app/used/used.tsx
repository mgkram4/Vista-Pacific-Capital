// app/used/used-equipment.tsx
"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaBarcode,
  FaCheckCircle,
  FaCogs,
  FaIndustry,
  FaMedkit,
  FaSearchDollar,
  FaTools,
  FaTruck,
  FaWarehouse
} from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { usedEquipmentMetadata } from '../lib/metadata';

const equipmentTypes = [
  {
    title: 'Construction Equipment',
    description: 'Quality used construction machinery including excavators, bulldozers, and cranes at competitive rates.',
    icon: FaTools,
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=1200&auto=format&fit=crop&q=60'
  },
  {
    title: 'Manufacturing Equipment',
    description: 'Pre-owned manufacturing equipment including CNC machines, production lines, and industrial machinery.',
    icon: FaIndustry,
    image: 'https://images.unsplash.com/photo-1570151579868-df1945396549?w=1200&auto=format&fit=crop&q=60'
  },
  {
    title: 'Medical Equipment',
    description: 'Certified pre-owned medical and healthcare equipment with warranty options.',
    icon: FaMedkit,
    image: 'https://images.unsplash.com/photo-1583912267550-d776e4aa6916?w=1200&auto=format&fit=crop&q=60'
  },
  {
    title: 'Transportation Equipment',
    description: 'Used trucks, vans, and commercial vehicles with comprehensive inspection reports.',
    icon: FaTruck,
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&auto=format&fit=crop&q=60'
  },
  {
    title: 'Warehouse Equipment',
    description: 'Pre-owned forklifts, pallet jacks, and material handling equipment for logistics operations.',
    icon: FaWarehouse,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=60'
  }
];

// Statistics display data
const stats = [
  { value: '$5M+', label: 'Maximum Financing', icon: FaSearchDollar },
  { value: '24-72', label: 'Flexible Terms (Months)', icon: FaBarcode },
  { value: '5.99%', label: 'Starting Rates', icon: FaCogs },
  { value: '24hrs', label: 'Quick Approval', icon: FaCheckCircle }
];

const benefits = [
  "Lower initial investment costs compared to new equipment",
  "Immediate availability without long lead times",
  "Proven performance history and reliability",
  "Comprehensive inspection and certification process",
  "Extended warranty options available",
  "Expert guidance on equipment valuation"
];

export default function UsedEquipmentContent() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="w-full bg-indigo-dye text-white py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=1200&auto=format&fit=crop&q=60"
            alt="Used equipment financing"
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
            {usedEquipmentMetadata.title}
          </motion.h1>
          <motion.p
            className="text-2xl mb-12 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {usedEquipmentMetadata.description}
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
              <span>Get Equipment Financing</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <stat.icon className="text-4xl text-light-sea-green mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-indigo-dye mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
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
            Used Equipment We Finance
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48">
                  <Image
                    src={type.image}
                    alt={type.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-indigo-dye bg-opacity-60 flex items-center justify-center">
                    <type.icon className="text-6xl text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-indigo-dye mb-3">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center text-indigo-dye"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Benefits of Used Equipment Financing
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FaTools className="text-3xl text-light-sea-green mb-4" />
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center text-indigo-dye"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Used Equipment Financing Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {usedEquipmentMetadata.features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-light-sea-green rounded-full mr-3" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              </motion.div>
            ))}
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
            Ready to Finance Your Used Equipment?
          </motion.h2>
          <motion.p
            className="text-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our used equipment financing solutions can help your business grow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="bg-white text-light-sea-green py-4 px-10 rounded-lg text-xl font-semibold hover:bg-indigo-dye hover:text-white transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Get Started Today</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}