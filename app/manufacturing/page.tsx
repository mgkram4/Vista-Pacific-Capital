"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCogs, FaIndustry, FaRobot, FaTruck, FaWarehouse } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

export default function ManufacturingEquipment() {
  const equipmentTypes = [
    {
      title: 'CNC Machinery',
      description: 'Finance state-of-the-art CNC mills, lathes, and multi-axis machining centers.',
      icon: FaCogs,
      image: 'https://images.unsplash.com/photo-1717386255773-a456c611dc4e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q05DJTIwTWFjaGluZXJ5fGVufDB8fDB8fHww'
    },
    {
      title: 'Robotics and Automation',
      description: 'Lease advanced robotic arms, automated assembly lines, and AGVs.',
      icon: FaRobot,
      image: 'https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Production Line Equipment',
      description: 'Finance conveyor systems, packaging machines, and quality control equipment.',
      icon: FaIndustry,
      image: 'https://images.unsplash.com/photo-1651525670033-279c26cc2347?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbnZleW9yJTIwc3lzdGVtc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Warehousing Solutions',
      description: 'Equip your facilities with advanced storage systems and material handling equipment.',
      icon: FaWarehouse,
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'Heavy Machinery',
      description: 'Finance heavy-duty equipment for large-scale manufacturing operations.',
      icon: FaTruck,
      image: 'https://images.unsplash.com/photo-1545262722-9e0d80a0bc01?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhdnklMjBtYWNoaW5lcnl8ZW58MHx8MHx8fDA%3D'
    }
  ];

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="w-full bg-indigo-dye text-white py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Manufacturing background"
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
            Manufacturing Equipment Financing
          </motion.h1>
          <motion.p
            className="text-2xl mb-12 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering manufacturers with cutting-edge equipment financing solutions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/apply" className="bg-light-sea-green text-white py-4 px-10 rounded-full text-xl font-semibold hover:bg-white hover:text-indigo-dye transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Get Financing Now</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Vista Pacific Capital Section */}
      <section className="max-w-6xl mx-auto py-24 px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-indigo-dye"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why Choose Vista Pacific Capital for Manufacturing Equipment Leasing
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-xl border border-gray-200"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-dye">Tailored Leasing Solutions</h3>
            <p className="text-gray-700 leading-relaxed">Customized options to meet the unique needs of your manufacturing operation, ensuring optimal financial flexibility and operational efficiency.</p>
          </motion.div>
          <motion.div
            className="bg-white p-8 rounded-lg shadow-xl border border-gray-200"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-dye">Industry Expertise</h3>
            <p className="text-gray-700 leading-relaxed">Benefit from our deep understanding of the manufacturing sector, providing you with valuable insights and advice to make informed equipment financing decisions.</p>
          </motion.div>
        </div>
      </section>

      {/* Manufacturing Equipment We Finance Section */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-6xl mx-auto">
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
            At Vista Pacific Capital, we understand the unique needs of the manufacturing industry. Our equipment financing solutions include:
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
                    alt={`${type.title} manufacturing equipment for financing`}
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
        </div>
      </section>

      {/* Apply Now Section */}
      <section className="w-full bg-light-sea-green text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Upgrade Your Manufacturing Equipment?
          </motion.h2>
          <motion.p
            className="text-2xl mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our tailored financing solutions can help your manufacturing facility thrive.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/apply" className="bg-white text-light-sea-green py-4 px-10 rounded-full text-xl font-semibold hover:bg-indigo-dye hover:text-white transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Apply Now</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}