"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaChartLine,
  FaIndustry,
  FaTools,
  FaTractor,
  FaTruck,
  FaWarehouse
} from 'react-icons/fa';
import { GiCrane, GiEarthAmerica, GiReceiveMoney } from 'react-icons/gi';
import { excavatorMetadata } from '../lib/metadata';

// Define equipment types with their details
const equipmentTypes = [
  {
    title: 'Mini Excavators',
    description: excavatorMetadata.equipment[0].types.join(', ') + ' and more.',
    icon: FaTractor,
    image: 'https://images.unsplash.com/photo-1580245146707-75f30b550fe7'
  },
  {
    title: 'Standard Excavators',
    description: excavatorMetadata.equipment[1].types.join(', ') + ' and more.',
    icon: GiCrane,
    image: 'https://images.unsplash.com/photo-1597645587165-1e238a06e486'
  },
  {
    title: 'Large Excavators',
    description: excavatorMetadata.equipment[2].types.join(', ') + ' and more.',
    icon: GiEarthAmerica,
    image: 'https://images.unsplash.com/photo-1621922688758-359fc864071e'
  },
  {
    title: 'Specialty Attachments',
    description: 'Complete range of excavator attachments and accessories.',
    icon: FaTools,
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0'
  },
  {
    title: 'Material Handling',
    description: 'Material handling and sorting attachments.',
    icon: FaWarehouse,
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5'
  },
  {
    title: 'Transportation Equipment',
    description: 'Trailers and transport solutions for excavators.',
    icon: FaTruck,
    image: 'https://images.unsplash.com/photo-1595514736566-3ca87d7a3330'
  }
];

// Statistics display data
const stats = [
  { value: '$5M+', label: 'Maximum Financing', icon: GiCrane },
  { value: '24-84', label: 'Flexible Terms (Months)', icon: FaTools },
  { value: '4.99%', label: 'Starting Rates', icon: FaChartLine },
  { value: '24hrs', label: 'Quick Approval', icon: FaIndustry }
];

export default function ExcavatorFinancingContent() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="w-full bg-indigo-dye text-white py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1597645587165-1e238a06e486"
            alt="Excavator equipment background"
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
            {excavatorMetadata.title}
          </motion.h1>
          <motion.p
            className="text-2xl mb-12 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {excavatorMetadata.description}
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
            Excavator Equipment We Finance
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

      {/* Features Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center text-indigo-dye"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Financing Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {excavatorMetadata.features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
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
            Benefits of Excavator Equipment Financing
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {excavatorMetadata.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GiCrane className="text-3xl text-light-sea-green mb-4" />
                <h3 className="text-xl font-semibold text-indigo-dye mb-2">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-dye">Excavation Company Expands Fleet</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A growing excavation contractor needed to expand their equipment fleet to handle larger projects. Through our flexible financing solution, they were able to acquire multiple excavators ranging from compact to large-scale machines.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Result: The company increased their project capacity by 75% and successfully expanded into new construction sectors within the first year.
            </p>
            <p className="text-light-sea-green text-lg italic">
              "Vista Pacific Capital's excavator financing allowed us to take on larger projects without compromising our cash flow. Their understanding of excavation equipment made the process smooth and tailored to our specific needs."
            </p>
          </motion.div>
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
            Ready to Finance Your Excavator Equipment?
          </motion.h2>
          <motion.p
            className="text-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our excavator financing solutions can help your business grow.
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