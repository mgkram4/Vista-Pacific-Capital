"use client"

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBeer, FaBox, FaFlask, FaThermometerHalf, FaWineBottle } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { breweryMetadata } from '../lib/metadata';

// Define equipment types with their details
const equipmentTypes = [
  {
    title: 'Brewing Systems',
    description: breweryMetadata.equipment[0].types.join(', ') + ' and more.',
    icon: FaBeer,
    image: 'https://images.unsplash.com/photo-1532634733-cae1395e440f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJyZXdpbmclMjBiZWVyfGVufDB8fDB8fHww'
  },
  {
    title: 'Distillation Equipment',
    description: 'Lease top-of-the-line stills, fermenters, and aging barrels to craft your signature spirits.',
    icon: FaWineBottle,
    image: 'https://images.unsplash.com/photo-1668380608937-26e2435d369b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RGlzdGlsbGF0aW9ufGVufDB8fDB8fHww'
  },
  {
    title: 'Packaging Lines',
    description: breweryMetadata.equipment[1].types.join(', ') + ' and more.',
    icon: FaBox,
    image: 'https://images.unsplash.com/photo-1536638317175-32449deccfc0?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFja2luZyUyMGxpbmVzJTIwYmVlcnxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    title: 'Quality Control Equipment',
    description: 'Invest in advanced testing and analysis equipment to ensure consistent product quality.',
    icon: FaFlask,
    image: 'https://images.unsplash.com/photo-1533646281814-761f53fc5483?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnJld2VyeXxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    title: 'Temperature Control Systems',
    description: breweryMetadata.equipment[2].types.join(', ') + ' and more.',
    icon: FaThermometerHalf,
    image: 'https://images.unsplash.com/photo-1542835497-a6813df96ed9?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnJld2VyeXxlbnwwfHwwfHx8MA%3D%3D'
  }
];

// Statistics display data - updated according to requirements
const stats = [
  { value: '$20M', label: 'Maximum Financing', icon: FaBeer },
  { value: '24-84', label: 'Flexible Terms (Months)', icon: FaWineBottle },
  { value: 'New & Used', label: 'Equipment Options', icon: FaFlask },
  { value: '24hrs', label: 'Quick Approval', icon: FaBox }
];

export default function BreweryDistilleryEquipment() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="w-full bg-indigo-dye text-white py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1584225064785-c62a8b43d148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt="Brewery background"
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
            Brewery Equipment Financing
          </motion.h1>
          <motion.p
            className="text-2xl mb-12 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Craft your success with state of the art equipment from kegging equipment to brewhouses. Whether you are looking for new or used equipment, we make it easy to keep your focus on crafting excellent brews.
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

      {/* Financing Process Section */}
     

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
                  'Fast approvals within 24-48 hours',
                  'Flexible terms from 24 to 84 months',
                  'High approval rate of 94.6%',
                  'Financing for both new and used equipment',
                  'Dedicated brewery equipment specialists',
                  'Competitive rates for craft breweries and distilleries'
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
                  'Preserve your working capital for brewing operations',
                  'Potential tax advantages for your brewery business',
                  'Simplified application process with minimal paperwork',
                  'Dedicated support team throughout the financing process',
                  'Flexible payment options tailored to your cash flow',
                  'No hidden fees or prepayment penalties'
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