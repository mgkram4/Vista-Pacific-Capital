"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCogs, FaIndustry, FaRobot } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

export default function ManufacturingEquipment() {
  const equipmentTypes = [
    {
      title: 'CNC Machinery',
      description: 'Boost your precision manufacturing with financing for CNC mills, lathes, and multi-axis machining centers.',
      icon: FaCogs,
      image: 'https://images.unsplash.com/photo-1553867745-6e038d085e86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'Robotics and Automation',
      description: 'Streamline your operations with leasing options for robotic arms, automated assembly lines, and AGVs.',
      icon: FaRobot,
      image: 'https://images.unsplash.com/photo-1532162420881-63a54a55d94a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80'
    },
    {
      title: 'Production Line Equipment',
      description: 'Maximize your output with flexible financing for conveyor systems, packaging machines, and quality control equipment.',
      icon: FaIndustry,
      image: 'https://images.unsplash.com/photo-1625522593489-ad64aebb5f18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
  ];

  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white py-32 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Manufacturing Equipment Financing
          </motion.h1>
          <motion.p
            className="text-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empower your production capabilities with our tailored financing solutions
          </motion.p>
        </div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        ></motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto py-24 px-4">
        <motion.p 
          className="text-2xl text-gray-400 text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Vista Pacific Capital offers comprehensive financing solutions for a wide range of manufacturing equipment, including:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentTypes.map((type, index) => (
            <motion.div 
              key={index} 
              className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 mb-6">
                <Image 
                  src={type.image}
                  alt={type.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="flex items-center mb-4">
                <type.icon className="text-4xl text-white mr-4" />
                <h2 className="text-2xl font-semibold text-white">{type.title}</h2>
              </div>
              <p className="text-gray-200">{type.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CNC Machine Image */}
      <section className="w-full relative h-96 mb-24">
        <Image
          src="https://images.unsplash.com/photo-1501925796503-68c300a57c18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt="CNC Machine"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-75 flex items-center justify-center">
          <motion.h2
            className="text-5xl font-bold text-white text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Precision Manufacturing at Your Fingertips
          </motion.h2>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-800 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center text-blue-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Benefits of Our Manufacturing Equipment Financing
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-white">Increase Production Capacity</h3>
              <p className="text-gray-200">Acquire advanced machinery that enables you to scale your manufacturing output and meet growing demand.</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-white">Stay Competitive</h3>
              <p className="text-gray-200">Access cutting-edge technology that keeps you ahead of the curve, without tying up large amounts of capital.</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-white">Improve Efficiency</h3>
              <p className="text-gray-200">Finance automation solutions that streamline your production processes, reduce waste, and boost productivity.</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-white">Customized Payment Plans</h3>
              <p className="text-gray-200">Tailor your financing to perfectly align with your production cycles and cash flow, ensuring optimal financial flexibility.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Automation Image */}
      <section className="w-full relative h-96 my-24">
        <Image
          src="https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          alt="Industrial Automation"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-75 flex items-center justify-center">
          <motion.h2
            className="text-5xl font-bold text-white text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Harness the Power of Automation
          </motion.h2>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full bg-blue-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Upgrade Your Manufacturing Capabilities?
          </motion.h2>
          <motion.p
            className="text-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our manufacturing equipment financing can propel your business forward.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="bg-white text-blue-900 py-4 px-10 rounded-full text-xl font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-3xl" /> Get Financing Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}