"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaHardHat, FaRecycle, FaRoad, FaTools, FaTree } from 'react-icons/fa';
import { GiConcreteBag, GiReceiveMoney } from 'react-icons/gi';

export default function ConstructionEquipmentFinancing() {
  const financingTypes = [
    {
      title: 'Forestry, Landscaping, Excavation and Agriculture Financing',
      description: 'Specialized equipment financing for land management, agricultural operations, and excavation projects.',
      icon: FaTree,
      image: 'https://images.unsplash.com/photo-1621922688758-359fc864071e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVsbGRvemVyc3xlbnwwfHwwfHx8MA%3D%3D',
      equipment: [
        'Bulldozers', 'Excavators', 'Skid Steers', 'Backhoes',
        'Tractors', 'Harvesters', 'Logging Equipment',
        'Mulchers', 'Stump Grinders', 'Trenchers'
      ]
    },
    {
      title: 'Concrete and Paving Equipment Financing',
      description: 'Financing solutions for mixers, pumps, and paving systems for concrete and road construction projects.',
      icon: GiConcreteBag,
      image: 'https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbnN0cnVjdGlvbiUyMGNvbmNyZWF0ZXxlbnwwfHwwfHx8MA%3D%3D',
      equipment: [
        'Concrete Mixers', 'Concrete Pumps', 'Paving Machines',
        'Asphalt Pavers', 'Concrete Screeds', 'Concrete Saws',
        'Concrete Placing Booms', 'Concrete Batching Plants'
      ]
    },
    {
      title: 'Building Construction Equipment Financing',
      description: 'Financing for HVAC, plumbing, site prep, and electrical equipment essential for building projects.',
      icon: FaHardHat,
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      equipment: [
        'HVAC Systems', 'Plumbing Tools', 'Electrical Systems',
        'Scaffolding', 'Power Tools', 'Welding Equipment',
        'Generators', 'Compressors', 'Lifts and Hoists'
      ]
    },
    {
      title: 'Environment Construction Equipment Financing',
      description: 'Financing options for waste management and landfill equipment for environmentally focused construction projects.',
      icon: FaRecycle,
      image: 'https://images.unsplash.com/photo-1532634733-cae1395e440f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJyZXdpbmclMjBiZWVyfGVufDB8fDB8fHww',
      equipment: [
        'Waste Compactors', 'Recycling Sorters', 'Landfill Compactors',
        'Environmental Monitoring Equipment', 'Soil Remediation Equipment',
        'Waste Water Treatment Systems', 'Air Pollution Control Systems'
      ]
    },
    {
      title: 'Highway Construction Equipment Financing',
      description: 'Financing solutions for traffic control equipment, signage, and other highway construction necessities.',
      icon: FaRoad,
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      equipment: [
        'Road Rollers', 'Asphalt Milling Machines', 'Traffic Signs',
        'Road Marking Machines', 'Highway Sweepers', 'Guardrail Installers',
        'Bridge Construction Equipment', 'Traffic Light Systems'
      ]
    }
  ];

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="w-full bg-indigo-dye text-white py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Construction site background"
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
            Construction Equipment Financing
          </motion.h1>
          <motion.p
            className="text-2xl mb-12 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tailored financing solutions for every aspect of the construction industry
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

      {/* Financing Types Sections */}
      {financingTypes.map((type, index) => (
        <section key={index} className={`py-24 px-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="relative h-64 md:h-full">
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
                </div>
                <div className="md:w-2/3 p-6">
                  <h2 className="text-3xl font-bold text-indigo-dye mb-4">{type.title}</h2>
                  <p className="text-gray-700 text-lg mb-6">{type.description}</p>
                  <h3 className="text-xl font-semibold text-light-sea-green mb-3">Equipment We Finance:</h3>
                  <ul className="grid grid-cols-2 gap-2 text-gray-700 mb-6">
                    {type.equipment.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <FaTools className="text-light-sea-green mr-2" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="bg-light-sea-green text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-indigo-dye transition duration-300 inline-flex items-center">
                    <GiReceiveMoney className="mr-2" />
                    Get Financing
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

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
            Contact us today to discuss how our tailored financing solutions can help your construction business grow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="bg-white text-light-sea-green py-4 px-10 rounded-full text-xl font-semibold hover:bg-indigo-dye hover:text-white transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Get Started Now</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}