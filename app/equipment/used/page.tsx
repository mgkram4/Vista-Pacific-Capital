"use client"

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
    FaBarcode,
    FaCogs,
    FaCreditCard,
    FaIndustry,
    FaMedkit,
    FaSearchDollar,
    FaTools,
    FaTruck,
    FaWarehouse
} from 'react-icons/fa';
import PageHeader from '../../components/PageHeader';

const equipmentTypes = [
  {
    title: 'Construction Equipment',
    description: 'Quality used construction machinery including excavators, bulldozers, and cranes at competitive rates.',
    icon: FaTools
  },
  {
    title: 'Manufacturing Equipment',
    description: 'Pre-owned manufacturing equipment including CNC machines, production lines, and industrial machinery.',
    icon: FaIndustry
  },
  {
    title: 'Medical Equipment',
    description: 'Certified pre-owned medical and healthcare equipment with warranty options.',
    icon: FaMedkit
  },
  {
    title: 'Transportation Equipment',
    description: 'Used trucks, vans, and commercial vehicles with comprehensive inspection reports.',
    icon: FaTruck
  },
  {
    title: 'Warehouse Equipment',
    description: 'Pre-owned forklifts, pallet jacks, and material handling equipment for logistics operations.',
    icon: FaWarehouse
  },
  {
    title: 'Restaurant Equipment',
    description: 'Pre-owned commercial kitchen equipment, dining furniture, and food service machinery.',
    icon: FaCogs
  }
];

// Statistics display data
const stats = [
  { value: '$50M+', label: 'Maximum Financing', icon: FaSearchDollar },
  { value: '24-84', label: 'Flexible Terms (Months)', icon: FaBarcode },
  { value: 'A-C', label: 'Credit Types', icon: FaCogs },
  { value: 'All Credit', label: 'Flexible Credit Options', icon: FaCreditCard },
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
      <PageHeader 
        title="Used Equipment Financing"
        subtitle="For a more affordable and economical route, used equipment may be the right direction for you. With excellent quality equipment and machinery, get your company rolling with our tailored terms."
        buttonText="Apply Now"
        buttonHref="/apply"
        backgroundImage="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=1200&auto=format&fit=crop&q=60"
        highlightWord="Used"
      />

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
            {equipmentTypes.map((type, index) => {
              const Icon = type.icon;
              return (
              <motion.div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border border-gray-100 hover:border-[#11B5B2]/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-[#11B5B2]/20 to-[#11B5B2]/5 rounded-full p-6 w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-[#11B5B2] mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-[#113E59] mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {type.description}
                </p>
              </motion.div>
            )})}
          </div>
        </div>
      </section>

      {/* Benefits Section - Updated to match medical.tsx */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#113E59] to-[#082F4A] rounded-2xl shadow-xl p-6 md:p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  'Financing from private party sellers and dealers',
                  'Solutions for businesses with challenged credit',
                  'Flexible terms from 24 to 84 months',
                  'Financing for all types of used equipment',
                  'Dedicated used equipment specialists',
                  'Competitive rates for quality pre-owned machinery'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="h-2 w-2 bg-[#11B5B2] rounded-full mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-6 text-indigo-dye">Our Advantages</h3>
              <ul className="space-y-4">
                {[
                  'Lower initial investment costs compared to new equipment',
                  'Immediate availability without long lead times',
                  'Proven performance history and reliability',
                  'Comprehensive inspection and certification process',
                  'Extended warranty options available',
                  'Expert guidance on equipment valuation'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="h-2 w-2 bg-light-sea-green rounded-full mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Updated to match medical.tsx */}
      <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src="/Images/bg-wave2.png"
              alt="Modern office background"
              fill
              className="object-cover"
              quality={75}
              priority={false}
              loading="lazy"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/20 " />
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
                Apply Now
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
    </div>
  );
}