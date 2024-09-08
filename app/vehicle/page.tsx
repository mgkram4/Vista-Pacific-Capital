"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaBus, FaCarSide, FaShuttleVan, FaTruck } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

export default function VehicleFinancing() {
  const vehicleTypes = [
    {
      title: 'Commercial Trucks',
      description: 'Keep your business moving with financing for semi-trucks, box trucks, and delivery vehicles that power your operations.',
      icon: FaTruck,
      image: 'https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80'
    },
    {
      title: 'Buses and Coaches',
      description: 'Transport passengers in style and comfort with leasing options for school buses, tour buses, and shuttle buses.',
      icon: FaBus,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
    },
    {
      title: 'Specialty Vehicles',
      description: 'Outfit your business with flexible financing for food trucks, mobile clinics, and utility vehicles that set you apart.',
      icon: FaShuttleVan,
      image: 'https://images.unsplash.com/photo-1656857720256-a80aca6398da?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMHRydWNrc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Fleet Vehicles',
      description: 'Maximize your fleets potential with comprehensive financing solutions tailored to your business vehicle needs.',
      icon: FaCarSide,
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
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
            Vehicle Financing Solutions
          </motion.h1>
          <motion.p
            className="text-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Drive your business forward with our comprehensive vehicle financing options
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
          Vista Pacific Capital offers tailored financing solutions for a wide range of commercial vehicles, including:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vehicleTypes.map((type, index) => (
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

      {/* Truck Image */}
      <section className="w-full relative h-96 mb-24">
        <Image
          src="https://images.unsplash.com/photo-1605705658744-45f0fe8f9663?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Commercial Truck Fleet"
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
            Fuel Your Fleet's Growth with Flexible Financing
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
            Benefits of Our Vehicle Financing Programs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-white">Flexible Terms</h3>
              <p className="text-gray-200">Customize your financing to match your business cycles and cash flow needs. We offer a range of term lengths and payment structures to ensure a seamless fit.</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-white">Competitive Rates</h3>
              <p className="text-gray-200">Leverage our extensive industry connections to secure the most favorable financing rates. We work tirelessly to ensure you get the best deal possible.</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-white">Quick Approval Process</h3>
              <p className="text-gray-200">Put your vehicles on the road faster with our streamlined approval procedures. Our dedicated team works efficiently to expedite your financing and get you moving.</p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-white">Extensive Vehicle Options</h3>
              <p className="text-gray-200">Choose from a wide array of commercial vehicles to perfectly suit your business needs. We have relationships with top vehicle manufacturers to provide you with the best selection.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="max-w-6xl mx-auto py-24 px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-blue-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why Choose Vista Pacific Capital for Vehicle Financing?
        </motion.h2>
        <motion.div 
          className="bg-gray-800 p-10 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ul className="list-disc pl-5 space-y-6 text-gray-300">
            <li className="text-xl">Deep expertise in commercial vehicle financing across a broad spectrum of industries, ensuring tailored solutions that align with your unique business model</li>
            <li className="text-xl">Customized financing structures designed to optimize your cash flow and provide maximum flexibility as your business needs evolve</li>
            <li className="text-xl">Potential tax advantages through strategic vehicle leasing and financing, allowing you to preserve capital for other critical investments</li>
            <li className="text-xl">Dedicated support from our knowledgeable team, guiding you through the entire financing process and helping you make informed decisions</li>
            <li className="text-xl">Opportunities to regularly upgrade your fleet as your business expands, ensuring you always have access to the latest vehicle technologies</li>
          </ul>
        </motion.div>
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
            Ready to Upgrade Your Vehicle Fleet?
          </motion.h2>
          <motion.p
            className="text-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our vehicle financing solutions can help drive your business to new heights.
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