"use client"

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaBox,
  FaCalendarAlt,
  FaClock,
  FaShippingFast,
  FaStore,
  FaTools,
  FaTruck,
  FaTruckMoving
} from 'react-icons/fa';
import { GiDeliveryDrone, GiReceiveMoney } from 'react-icons/gi';
import { boxTruckMetadata } from '../lib/metadata';

// Define equipment types with their details
const equipmentTypes = [
  {
    title: 'Delivery Box Trucks',
    description: boxTruckMetadata.equipment[0].types.join(', ') + ' and more.',
    icon: FaTruckMoving,
    image: 'https://images.unsplash.com/photo-1592838064575-70ed626d3a0e'
  },
  {
    title: 'Commercial Vans',
    description: boxTruckMetadata.equipment[1].types.join(', ') + ' and more.',
    icon: FaShippingFast,
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e'
  },
  {
    title: 'Last Mile Delivery',
    description: 'Specialized vehicles for urban and residential delivery.',
    icon: GiDeliveryDrone,
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7'
  },
  {
    title: 'Retail Delivery Trucks',
    description: 'Custom solutions for retail and furniture delivery.',
    icon: FaStore,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d'
  },
  {
    title: 'Express Cargo Vans',
    description: 'Efficient cargo vans for express delivery services.',
    icon: FaBox,
    image: 'https://images.unsplash.com/photo-1543465077-db45d34b88a5'
  },
  {
    title: 'Fleet Solutions',
    description: 'Comprehensive fleet financing options.',
    icon: FaTruck,
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c'
  }
];

// Update keyFeatures to match standard format
const keyFeatures = [
  { value: '$20M', label: 'Maximum Financing', icon: GiReceiveMoney },
  { value: '24-84', label: 'Flexible Terms (Months)', icon: FaCalendarAlt },
  { value: 'New/Used', label: 'Equipment Options', icon: FaTools },
  { value: '24hrs', label: 'Quick Approval', icon: FaClock }
];

export default function BoxTruckFinancingContent() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="w-full bg-indigo-dye text-white py-32 px-4 relative overflow-hidden">
        <link
          rel="preload"
          href="/Images/boxTruckH.png"
          as="image"
          type="image/png"
        />
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1592838064575-70ed626d3a0e"
            alt="Box truck equipment financing"
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
            {boxTruckMetadata.title}
          </motion.h1>
          <motion.p
            className="text-2xl mb-12 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {boxTruckMetadata.description}
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
            Benefits of Box Truck Equipment Financing
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FaTruckMoving className="text-3xl text-light-sea-green mb-4" />
              <h3 className="text-xl font-semibold text-indigo-dye mb-2">Flexible Solutions</h3>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaTruckMoving className="text-3xl text-light-sea-green mb-4" />
              <h3 className="text-xl font-semibold text-indigo-dye mb-2">Quick Approvals</h3>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FaTruckMoving className="text-3xl text-light-sea-green mb-4" />
              <h3 className="text-xl font-semibold text-indigo-dye mb-2">Competitive Rates</h3>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <FaTruckMoving className="text-3xl text-light-sea-green mb-4" />
              <h3 className="text-xl font-semibold text-indigo-dye mb-2">New & Used Options</h3>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <FaTruckMoving className="text-3xl text-light-sea-green mb-4" />
              <h3 className="text-xl font-semibold text-indigo-dye mb-2">Preserve Working Capital</h3>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <FaTruckMoving className="text-3xl text-light-sea-green mb-4" />
              <h3 className="text-xl font-semibold text-indigo-dye mb-2">Tailored Payment Plans</h3>
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