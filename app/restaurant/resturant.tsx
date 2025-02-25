"use client"

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaCashRegister,
  FaChartLine,
  FaClock,
  FaCoffee,
  FaDollarSign,
  FaHamburger,
  FaUtensils, FaWineGlassAlt
} from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

const equipmentTypes = [
  {
    title: 'Kitchen Equipment',
    description: 'Finance state-of-the-art ovens, grills, fryers, and refrigeration units to enhance your culinary capabilities.',
    icon: FaUtensils,
    image: 'https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnQlMjBraXRjaGVufGVufDB8fDB8fHww'
  },
  {
    title: 'Bar & Beverage',
    description: 'Equip your bar with top-quality espresso machines, draft systems, and ice makers through flexible financing options.',
    icon: FaCoffee,
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' 
  },
  {
    title: 'Dining Room Essentials',
    description: 'Create the perfect ambiance with financing for furniture, tableware, and decor that sets your restaurant apart.',
    icon: FaWineGlassAlt,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    title: 'POS & Management Systems',
    description: 'Streamline operations with cutting-edge point-of-sale systems and restaurant management software.',
    icon: FaCashRegister,
    image: 'https://images.unsplash.com/photo-1726065235239-b20b88d43eea?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9zJTIwc3lzdGVtfGVufDB8fDB8fHww'
  },
  {
    title: 'Food Prep Equipment',
    description: 'Maximize efficiency with high-quality food processors, slicers, and mixers designed for the demands of a busy kitchen.',
    icon: FaHamburger,
    image: 'https://images.unsplash.com/photo-1475610003943-f778cd2c3a6a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D'
  }
];

const stats = [
  { value: '$20M+', label: 'Maximum Financing', icon: FaDollarSign },
  { value: '24-84', label: 'Flexible Terms (Months)', icon: FaClock },
  { value: 'New & Used', label: 'Equipment Options', icon: FaChartLine },
  { value: '24hrs', label: 'Quick Approval', icon: FaUtensils }
];

export default function RestaurantFinancingContent() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="w-full bg-indigo-dye text-white py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1735599051587-6c13bb858214?q=80&w=1147&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Restaurant background"
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
            Restaurant Equipment Financing
          </motion.h1>
          <motion.p
            className="text-2xl mb-12 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Running a successful restaurant requires the right equipment, whether you need new ovens, refrigerators, or a complete kitchen overhaul. With quick approvals and tailored terms, we make it easy for you to get the equipment you need.
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

      {/* Benefits Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center text-indigo-dye"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Benefits of Restaurant Equipment Financing
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FaUtensils className="text-3xl text-light-sea-green mb-4" />
              <h3 className="text-xl font-semibold text-indigo-dye mb-2">Preserve Working Capital</h3>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaUtensils className="text-3xl text-light-sea-green mb-4" />
              <h3 className="text-xl font-semibold text-indigo-dye mb-2">Flexible Payment Options</h3>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FaUtensils className="text-3xl text-light-sea-green mb-4" />
              <h3 className="text-xl font-semibold text-indigo-dye mb-2">Upgrade with Ease</h3>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <FaUtensils className="text-3xl text-light-sea-green mb-4" />
              <h3 className="text-xl font-semibold text-indigo-dye mb-2">Tax Benefits</h3>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <FaUtensils className="text-3xl text-light-sea-green mb-4" />
              <h3 className="text-xl font-semibold text-indigo-dye mb-2">Fast Approval Process</h3>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <FaUtensils className="text-3xl text-light-sea-green mb-4" />
              <h3 className="text-xl font-semibold text-indigo-dye mb-2">Dedicated Support Team</h3>
            </motion.div>
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