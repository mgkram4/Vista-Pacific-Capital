// app/cnc/cnc-financing.tsx
"use client"

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
    FaChartLine,
    FaClock,
    FaDesktop,
    FaHandshake,
    FaMicrochip,
    FaRobot,
    FaTools
} from 'react-icons/fa';
import { GiDrill, GiGears } from 'react-icons/gi';
import PageHeader from '../../components/PageHeader';

const equipmentTypes = [
  {
    title: 'CNC Mills',
    description: 'Advanced vertical machining centers, horizontal machining centers, and 5-axis CNC mills.',
    icon: GiDrill
  },
  {
    title: 'CNC Lathes',
    description: 'High-precision turning centers and multi-axis CNC lathes for complex parts.',
    icon: GiGears
  },
  {
    title: 'Automation Systems',
    description: 'Robotic automation solutions and material handling systems for CNC operations.',
    icon: FaRobot
  },
  {
    title: 'Control Systems',
    description: 'Advanced CNC controls, software, and programming solutions.',
    icon: FaDesktop
  },
  {
    title: 'Tool Systems',
    description: 'Automated tool changers, tool management systems, and cutting tools.',
    icon: FaTools
  }
];

// Statistics display data
const stats = [
  { value: "50M", label: 'Maximum Financing', icon: FaMicrochip },
  { value:  '24-84', label: 'Flexible Terms (Months)', icon: FaClock },
  { value: 'New & Used', label: 'Equipment Options', icon: FaChartLine },
  { value: 'Custom', label: 'Tailored Solutions', icon: FaHandshake },
];



const processSteps = [
  'Simplified application process with minimal documentation required',
  'Financing for both new and used manufacturing equipment',
  'Flexible terms up to 84 months to match your production cycles',
  'Competitive rates with rapid approval times',
  'Expert guidance from machine tool financing specialists'
];

export default function ManufacturingFinancingContent() {
  return (
    <div className="bg-white font-sans">
      <PageHeader 
        title="Manufacturing Equipment Financing"
        subtitle="Precision manufacturing requires precision financing. Whether you need CNC mills, lathes, automation systems, or other manufacturing equipment, our flexible financing solutions help you acquire the advanced machinery that drives your production capabilities."
        buttonText="Apply Now"
        buttonHref="/apply"
        backgroundImage="/Images/photo-1717386255773-a456c611dc4e.avif"
        highlightWord="Manufacturing"
      />

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <stat.icon className="text-4xl text-light-sea-green mx-auto mb-4" />
                </motion.div>
                <motion.h3 
                  className="text-3xl font-bold text-indigo-dye mb-2"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 + 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {stat.label}
                </motion.p>
              </div>
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
                      Manufacturing Equipment We Finance
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
          <div 
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <motion.ul 
              className="list-none space-y-6 text-gray-700 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {processSteps.map((step, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-light-sea-green mr-4">✓</span>
                  {step}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-gradient-to-br from-[#113E59] to-[#082F4A] rounded-2xl shadow-xl p-6 md:p-8 text-white"
            >
              <motion.h3 
                className="text-2xl font-bold mb-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Why Choose Us?
              </motion.h3>
              <ul className="space-y-4">
                {[
                  'Solutions for all credit profiles',
                  'Vendor & private party sales financing',
                  'Flexible terms from 24 to 84 months',
                  'Financing for both new and used machines',
                  'Dedicated manufacturing equipment specialists',
                  'Competitive rates with flexible options'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-2 w-2 bg-[#11B5B2] rounded-full mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100"
            >
              <motion.h3 
                className="text-2xl font-bold mb-6 text-indigo-dye"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our Advantages
              </motion.h3>
              <ul className="space-y-4">
                {[
                  'Preserve your working capital for other business needs',
                  'Potential tax advantages for your business',
                  'Simplified application process with minimal paperwork',
                  'Dedicated support team throughout the financing process',
                  'Flexible payment options tailored to your production cycles',
                  'No hidden fees or prepayment penalties'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-2 w-2 bg-light-sea-green rounded-full mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
          <div
            className="space-y-8"
          >
            <motion.span 
              className="text-sm font-semibold text-cyan-400 mb-2 block"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              GET STARTED TODAY
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Ready to Get Your Manufacturing Equipment?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100/90 max-w-3xl mx-auto pb-10"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Get pre-qualified in minutes with no impact to your credit score
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                href="/apply"
                className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                  text-white px-8 py-4 rounded-lg font-semibold text-lg 
                  shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
                  transform hover:-translate-y-1 transition-all duration-300"
              >
                Apply Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}