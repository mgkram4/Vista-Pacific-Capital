// app/cnc/cnc-financing.tsx
"use client"

import { motion } from 'framer-motion';
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
    image: 'https://images.unsplash.com/photo-1565361849269-f462ef49d218'
  },
  {
    title: 'CNC Lathes',
    description: 'High-precision turning centers and multi-axis CNC lathes for complex parts.',
    icon: FaCogs,
    image: 'https://images.unsplash.com/photo-1669703437226-eb4d9571bf19'
  },
  {
    title: 'Automation Systems',
    description: 'Robotic automation solutions and material handling systems for CNC operations.',
    icon: FaIndustry,
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b'
  },
  {
    title: 'Control Systems',
    description: 'Advanced CNC controls, software, and programming solutions.',
    icon: FaLaptop,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
  },
  {
    title: 'Tool Systems',
    description: 'Automated tool changers, tool management systems, and cutting tools.',
    icon: FaTools,
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122'
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
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="w-full bg-indigo-dye text-white py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1565361849269-f462ef49d218"
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
            {cncMetadata.title}
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
              <span>Get Financing Now</span>
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

      {/* Main Content */}
      <section className="max-w-6xl mx-auto py-24 px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-indigo-dye"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          CNC Equipment We Finance
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-700 text-center mb-16 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          At Vista Pacific Capital, we specialize in providing comprehensive financing solutions for the machine tool industry, including:
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
      </section>

      {/* Features Section */}
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
              {processSteps.map((step, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-light-sea-green mr-4">✓</span>
                  {step}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center text-indigo-dye"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Benefits of Our CNC Machine Financing
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {cncMetadata.benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-8 rounded-2xl shadow-xl"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <GiGears className="text-4xl text-light-sea-green mb-4" />
                <h3 className="text-2xl font-semibold text-indigo-dye mb-4">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center text-indigo-dye"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Success Story
          </motion.h2>
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-dye">Precision Manufacturing Company Expands Capabilities</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A growing precision manufacturing company needed to upgrade their machining capabilities with advanced 5-axis CNC equipment. Through our flexible financing solution, they were able to acquire state-of-the-art CNC machines and automation systems.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Result: The company increased their production capacity by 200% and reduced setup times by 60%, leading to a significant boost in profitability within the first year.
            </p>
            <p className="text-light-sea-green text-lg italic">
              "Vista Pacific Capital's CNC machine financing enabled us to revolutionize our manufacturing capabilities without impacting our working capital. Their deep understanding of machining technology made the process seamless."
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
            Ready to Upgrade Your CNC Equipment?
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white
                        bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700
                        rounded-lg shadow-xl hover:shadow-orange-500/20 transition-all duration-300
                        group relative overflow-hidden">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Get Financing Today</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center text-indigo-dye"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Choose Our CNC Financing
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-indigo-dye">Technical Expertise</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our team understands CNC technology and can help you make informed decisions about equipment financing that aligns with your manufacturing goals.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-indigo-dye">Flexible Solutions</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Customize your financing terms to match your production cycles and cash flow patterns with options for deferred payments or step-up structures.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-indigo-dye">Fast Approvals</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Quick decision-making process helps you seize opportunities and meet tight production deadlines with rapid equipment acquisition.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-indigo-dye">Comprehensive Coverage</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Finance complete CNC systems including tooling, automation, and software to create a fully integrated manufacturing solution.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Financing Options Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center text-indigo-dye"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Available Financing Options
          </motion.h2>

          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-center">
                <span className="text-light-sea-green mr-4">✓</span>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-dye">Capital Leases</h3>
                  <p className="text-gray-700 mt-2">Equipment ownership options with potential tax benefits</p>
                </div>
              </div>

              <div className="flex items-center">
                <span className="text-light-sea-green mr-4">✓</span>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-dye">Operating Leases</h3>
                  <p className="text-gray-700 mt-2">Lower monthly payments with equipment upgrade flexibility</p>
                </div>
              </div>

              <div className="flex items-center">
                <span className="text-light-sea-green mr-4">✓</span>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-dye">Equipment Finance Agreements</h3>
                  <p className="text-gray-700 mt-2">Traditional financing with competitive rates</p>
                </div>
              </div>

              <div className="flex items-center">
                <span className="text-light-sea-green mr-4">✓</span>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-dye">Sale-Leaseback Options</h3>
                  <p className="text-gray-700 mt-2">Convert existing equipment equity into working capital</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}