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
import { GiReceiveMoney } from 'react-icons/gi';

const equipmentTypes = [
  {
    title: 'Construction Equipment',
    description: 'Quality used construction machinery including excavators, bulldozers, and cranes at competitive rates.',
    icon: FaTools,
    image: 'https://images.unsplash.com/photo-1621922688758-359fc864071e'
  },
  {
    title: 'Manufacturing Equipment',
    description: 'Pre-owned manufacturing equipment including CNC machines, production lines, and industrial machinery.',
    icon: FaIndustry,
    image: 'https://images.unsplash.com/photo-1589792923962-537704632910'
  },
  {
    title: 'Medical Equipment',
    description: 'Certified pre-owned medical and healthcare equipment with warranty options.',
    icon: FaMedkit,
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514'
  },
  {
    title: 'Transportation Equipment',
    description: 'Used trucks, vans, and commercial vehicles with comprehensive inspection reports.',
    icon: FaTruck,
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c'
  },
  {
    title: 'Warehouse Equipment',
    description: 'Pre-owned forklifts, pallet jacks, and material handling equipment for logistics operations.',
    icon: FaWarehouse,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d'
  }
];

// Statistics display data
const stats = [
  { value: '$20M+', label: 'Maximum Financing', icon: FaSearchDollar },
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
      {/* Hero Section */}
      <section className="w-full bg-indigo-dye text-white py-32 px-4 relative overflow-hidden">
        <link
          rel="preload"
          href="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=1200&auto=format&fit=crop&q=60"
          as="image"
          fetchPriority="high"
        />
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=1200&auto=format&fit=crop&q=60"
            alt="Used equipment financing"
            fill
            className="object-cover"
            quality={100}
            priority={true}
            loading="eager"
            sizes="100vw"
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Used Equipment Financing
          </motion.h1>
          <motion.p
            className="text-2xl mb-12 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            For a more affordable and economical route, used equipment may be the right direction for you. With excellent quality equipment and machinery, get your company rolling with our tailored terms.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/apply" className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white
                        bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700
                        rounded-lg shadow-xl hover:shadow-orange-500/20 transition-all duration-300
                        group relative overflow-hidden">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Apply NOW</span>
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
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
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

      {/* Benefits Section - Updated to match medical.tsx */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center text-indigo-dye"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Go With Us
          </motion.h2>

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
              src="/Images/cta-background-signing.jpg"
              alt="Modern office background"
              fill
              className="object-cover"
              quality={75}
              priority={false}
              loading="lazy"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D3853]/05 via-[#0D3853]/02 to-[#0EB5B2]/02 " />
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