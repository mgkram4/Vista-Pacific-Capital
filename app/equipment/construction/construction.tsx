// app/construction/construction-content.tsx
"use client"



import { constructionMetadata } from '@/app/lib/metadata';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
    FaCreditCard,
    FaHammer,
    FaHardHat,
    FaIndustry,
    FaTools,
    FaWarehouse
} from 'react-icons/fa';
import { GiBulldozer, GiCrane, GiMineTruck } from 'react-icons/gi';
import PageHeader from '../../components/PageHeader';

// Define equipment types with their details
const equipmentTypes = [
  {
    title: 'Earthmoving Equipment',
    description: constructionMetadata.equipment[0].types.join(', ') + ' and more.',
    icon: GiBulldozer
  },
  {
    title: 'Lifting Equipment',
    description: constructionMetadata.equipment[1].types.join(', ') + ' and more.',
    icon: GiCrane
  },
  {
    title: 'Road Construction',
    description: constructionMetadata.equipment[2].types.join(', ') + ' and more.',
    icon: FaIndustry
  },
  {
    title: 'Material Handling',
    description: 'Forklifts, telehandlers, and specialized handling equipment.',
    icon: FaWarehouse
  },
  {
    title: 'Demolition Equipment',
    description: 'Breakers, crushers, and demolition attachments.',
    icon: FaHammer
  },
  {
    title: 'Mining Equipment',
    description: 'Heavy-duty mining and quarry equipment.',
    icon: GiMineTruck
  }
];

// Statistics display data - updated according to requirements
const stats = [
  { value: '$50M', label: 'Maximum Financing', icon: FaHardHat },
  { value: '24-84', label: 'Flexible Terms (Months)', icon: FaTools },
  { value: 'New & Used', label: 'Equipment Options', icon: GiCrane },
  { value: 'All Credit', label: 'All Credit Scores Welcome', icon: FaCreditCard },
];

export default function ConstructionFinancingContent() {
  return (
    <div className="bg-white font-sans">
      <PageHeader 
        title="Construction Equipment Financing"
        subtitle="When it comes to construction projects, having the right equipment can make all the difference. With flexible financing options, from forklifts to bulldozers, our quick approvals and flexible terms ensure you get the equipment you need without breaking your budget."
        buttonText="Apply Now"
        buttonHref="/apply"
        backgroundImage="/Images/constructionH.png"
        highlightWord="Construction"
      />

      {/* Key Features Section */}
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
            )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4">
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
                  'Financing for start-ups and growing businesses',
                  'Simple and streamlined application process',
                  'Flexible terms from 24 to 84 months',
                  'Financing for both new and used equipment',
                  'Dedicated construction equipment specialists',
                  'Competitive rates starting at 4.99%'
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
                  'Flexible payment options tailored to your cash flow',
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
      <section className="relative py-10 overflow-hidden w-full">
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
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div
            className="space-y-4 [filter:drop-shadow(0_3px_4px_rgba(0,0,0,0.6))]"
          >
            <motion.span 
              className="text-sm font-semibold text-[#0EB5B2] mb-2 block"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              GET STARTED TODAY
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              className="text-xl text-white/90 max-w-3xl mx-auto pb-4"
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