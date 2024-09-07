"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaHardHat, FaIndustry, FaTruck } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

export default function ConstructionConcreteEquipment() {
  const equipmentTypes = [
    {
      title: 'Heavy Machinery',
      description: 'Power up your projects with financing for excavators, bulldozers, and cranes that move mountains.',
      icon: FaTruck,
      image: 'https://images.unsplash.com/photo-1581650107963-3e8c1f48241b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'Concrete Equipment',
      description: 'Pour a solid foundation for your business with leasing options for mixers, pumps, and formwork systems.',
      icon: FaIndustry,
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'Specialty Tools',
      description: 'Tackle any task with flexible financing for compactors, graders, and power trowels that get the job done.',
      icon: FaHardHat,
      image: 'https://images.unsplash.com/photo-1508873760731-9c3d0bb6b961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
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
            Construction and Concrete Equipment Financing
          </motion.h1>
          <motion.p
            className="text-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Build your future with our robust financing solutions
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
          Vista Pacific Capital offers comprehensive financing solutions for construction and concrete equipment, including:
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

      {/* Construction Image */}
      <section className="w-full relative h-96 mb-24">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Construction Equipment"
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
            Elevate Your Construction Capabilities
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
            Benefits of Our Construction Equipment Financing
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-white">Expand Your Fleet</h3>
              <p className="text-gray-200">Acquire new equipment to take on larger projects, broaden your capabilities, and grow your business to new heights.</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-white">Flexible Terms</h3>
              <p className="text-gray-200">Customize your financing to match your project timelines and cash flow. We offer payment structures that work for you.</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-white">Stay Competitive</h3>
              <p className="text-gray-200">Access the latest construction technologies to improve efficiency, productivity, and profitability in a demanding market.</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-white">Tax Benefits</h3>
              <p className="text-gray-200">Potentially reduce your tax liability and improve cash flow through equipment leasing and financing.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Concrete Image */}
      <section className="w-full relative h-96 my-24">
        <Image
          src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Concrete Equipment"
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
            Forge a Solid Foundation for Your Business
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
            Ready to Elevate Your Construction Capabilities?
          </motion.h2>
          <motion.p
            className="text-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our equipment financing can help you build your business to new heights.
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