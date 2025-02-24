// app/restaurant/restaurant-content.tsx
"use client"


import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
    FaCalendarAlt,
    FaCashRegister,
    FaChartLine,
    FaClock,
    FaCoffee,
    FaDollarSign,
    FaHamburger,
    FaTools,
    FaUtensils, FaWineGlassAlt
} from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { restaurantMetadata } from '../lib/metadata';

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

// Statistics display data
const stats = [
  { value: `$${restaurantMetadata.financingTerms.maxAmount.toLocaleString()}`, label: 'Maximum Financing', icon: FaDollarSign },
  { value: `${restaurantMetadata.financingTerms.minTerm}-${restaurantMetadata.financingTerms.maxTerm}`, label: 'Term Length (Months)', icon: FaClock },
  { value: `${restaurantMetadata.financingTerms.interestRange.min}%`, label: 'Starting Rate', icon: FaChartLine },
  { value: '24hrs', label: 'Quick Approval', icon: FaUtensils }
];

const processSteps = [
  'Quick application process - just a credit application and three months of bank statements required',
  'Financing available for both new and used restaurant equipment',
  'Flexible terms up to 72 months to suit your cash flow needs',
  'Competitive rates with same-day qualification available',
  'Expert guidance from our team with over 20 years of industry experience'
];

export default function RestaurantFinancingContent() {
  // Update keyFeatures to match standard format
  const keyFeatures = [
    { value: '$20M', label: 'Maximum Financing', icon: GiReceiveMoney },
    { value: '24-84', label: 'Flexible Terms (Months)', icon: FaCalendarAlt },
    { value: 'New/Used', label: 'Equipment Options', icon: FaTools },
    { value: '24hrs', label: 'Quick Approval', icon: FaClock }
  ];

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="w-full bg-indigo-dye text-white py-32 px-4 relative overflow-hidden">
        <link
          rel="preload"
          href="/Images/cncMachineH.png"
          as="image"
          type="image/png"
        />
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/Images/cncMachineH.png"
            alt="CNC machine equipment financing"
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
            {restaurantMetadata.title}
          </motion.h1>
          <motion.p
            className="text-2xl mb-12 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {restaurantMetadata.description}
          </motion.p>
          <motion.div>
            <Link href="/apply" className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white
                        bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700
                        rounded-lg shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
              <span>Apply NOW</span>
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

      {/* Main Content */}
      <section className="max-w-6xl mx-auto py-24 px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-indigo-dye"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Restaurant Equipment We Finance
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-700 text-center mb-16 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          At Vista Pacific Capital, we understand the unique needs of the restaurant industry. Our restaurant equipment financing solutions include:
        </motion.p>
        
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
                  alt={`${type.title} restaurant equipment for financing`}
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
      </section>
 {/* Financing Details Section */}
 <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center text-indigo-dye"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Financing Process
          </motion.h2>
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ul className="list-none space-y-6 text-gray-700 text-lg">
              <li className="flex items-center">
                <span className="text-light-sea-green mr-4">✓</span>
                Quick application process - just a credit application and three months of bank statements required
              </li>
              <li className="flex items-center">
                <span className="text-light-sea-green mr-4">✓</span>
                Financing available for both new and used restaurant equipment
              </li>
              <li className="flex items-center">
                <span className="text-light-sea-green mr-4">✓</span>
                Flexible terms up to 72 months to suit your cash flow needs
              </li>
              <li className="flex items-center">
                <span className="text-light-sea-green mr-4">✓</span>
                Competitive rates with same-day qualification available
              </li>
              <li className="flex items-center">
                <span className="text-light-sea-green mr-4">✓</span>
                Expert guidance from our team with over 20 years of industry experience
              </li>
            </ul>
          </motion.div>
        </div>
      </section>   

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center text-indigo-dye"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Benefits of Our Equipment Financing
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-indigo-dye">Flexible Solutions</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Customizable financing options to match your business needs and cash flow requirements.</p>
            </motion.div>
            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-indigo-dye">Quick Approvals</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Fast approval process to get your equipment when you need it.</p>
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
            Ready to Finance Your CNC Machine?
          </motion.h2>
          <motion.p
            className="text-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our CNC machine financing solutions can help your business grow.
          </motion.p>
          <motion.div>
            <Link href="/apply" className="bg-white text-light-sea-green py-4 px-10 rounded-lg text-xl font-semibold hover:bg-indigo-dye hover:text-white transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Get Started Today</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}