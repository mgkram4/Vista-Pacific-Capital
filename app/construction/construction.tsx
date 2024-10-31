// app/construction/construction-content.tsx
"use client"


import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaHardHat,
  FaIndustry,
  FaTools, FaTruck,
  FaWarehouse
} from 'react-icons/fa';
import { GiCrane, GiMineTruck, GiReceiveMoney } from 'react-icons/gi';
import { constructionMetadata } from '../lib/metadata';

// Define equipment types with their details
const equipmentTypes = [
  {
    title: 'Earthmoving Equipment',
    description: constructionMetadata.equipment[0].types.join(', ') + ' and more.',
    icon: FaTruck,
    image: 'https://images.unsplash.com/photo-1621922688758-359fc864071e'
  },
  {
    title: 'Lifting Equipment',
    description: constructionMetadata.equipment[1].types.join(', ') + ' and more.',
    icon: GiCrane,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd'
  },
  {
    title: 'Road Construction',
    description: constructionMetadata.equipment[2].types.join(', ') + ' and more.',
    icon: FaIndustry,
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f'
  },
  {
    title: 'Material Handling',
    description: 'Forklifts, telehandlers, and specialized handling equipment.',
    icon: FaWarehouse,
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0'
  },
  {
    title: 'Demolition Equipment',
    description: 'Breakers, crushers, and demolition attachments.',
    icon: FaHardHat,
    image: 'https://images.unsplash.com/photo-1574486941178-456e3fe0e69d'
  },
  {
    title: 'Mining Equipment',
    description: 'Heavy-duty mining and quarry equipment.',
    icon: GiMineTruck,
    image: 'https://images.unsplash.com/photo-1578324927389-6ef3d9c85921'
  }
];

// Statistics display data
const stats = [
  { value: '$10M+', label: 'Maximum Financing', icon: FaHardHat },
  { value: '24-84', label: 'Flexible Terms (Months)', icon: FaTools },
  { value: '4.99%', label: 'Starting Rates', icon: GiCrane },
  { value: '24hrs', label: 'Quick Approval', icon: FaTruck }
];

export default function ConstructionFinancingContent() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="w-full bg-indigo-dye text-white py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
            alt="Construction equipment background"
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
            {constructionMetadata.title}
          </motion.h1>
          <motion.p
            className="text-2xl mb-12 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {constructionMetadata.description}
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
            Construction Equipment We Finance
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
            {constructionMetadata.features.map((feature, index) => (
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
            Benefits of Construction Equipment Financing
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {constructionMetadata.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FaTools className="text-3xl text-light-sea-green mb-4" />
                <h3 className="text-xl font-semibold text-indigo-dye mb-2">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study or Success Story Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-dye">Construction Company Expands Fleet</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A growing construction company needed to expand their equipment fleet to take on larger projects. Through our flexible financing solution, they were able to acquire multiple pieces of heavy equipment including excavators, bulldozers, and cranes.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Result: The company increased their project capacity by 60% and successfully expanded into new construction sectors within the first year.
            </p>
            <p className="text-light-sea-green text-lg italic">
              "Vista Pacific Capital's construction equipment financing allowed us to scale our operations without compromising our cash flow. Their understanding of the construction industry made the process smooth and tailored to our specific needs."
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
            Ready to Finance Your Construction Equipment?
          </motion.h2>
          <motion.p
            className="text-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our construction equipment financing solutions can help your business grow.
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