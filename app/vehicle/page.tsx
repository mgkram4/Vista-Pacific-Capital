"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaAmbulance, FaBus, FaCarSide, FaShuttleVan, FaTruck } from 'react-icons/fa';
import { GiDeliveryDrone, GiReceiveMoney } from 'react-icons/gi';

export default function VehicleFinancing() {
  const vehicleTypes = [
    {
      title: 'Commercial Trucks',
      description: 'Finance semi-trucks, box trucks, and delivery vehicles to keep your business moving and power your logistics operations.',
      icon: FaTruck,
      image: 'https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80'
    },
    {
      title: 'Buses and Coaches',
      description: 'Lease school buses, tour buses, and shuttle buses to transport passengers in style, comfort, and safety.',
      icon: FaBus,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
    },
    {
      title: 'Specialty Vehicles',
      description: 'Access flexible financing for food trucks, mobile clinics, and utility vehicles that set your business apart from the competition.',
      icon: FaShuttleVan,
      image: 'https://images.unsplash.com/photo-1656857720256-a80aca6398da?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMHRydWNrc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Fleet Vehicles',
      description: 'Maximize your fleets potential with comprehensive financing solutions tailored to your business vehicle needs and growth plans.',
      icon: FaCarSide,
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'Emergency Vehicles',
      description: 'Finance ambulances, fire trucks, and other emergency response vehicles to serve your community effectively.',
      icon: FaAmbulance,
      image: 'https://images.unsplash.com/photo-1599700403969-f77b3aa74837?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1idWxhbmNlfGVufDB8fDB8fHww'
    },
    {
      title: 'Innovative Transport',
      description: 'Stay ahead of the curve with financing for electric vehicles, autonomous vehicles, and other cutting-edge transport solutions.',
      icon: GiDeliveryDrone,
      image: 'https://images.unsplash.com/photo-1676288176918-232f7caadfee?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXV0b21vdGl2ZXxlbnwwfHwwfHx8MA%3D%3D'
    }
  ];

  return (
    <div className="bg-gray-900 font-sans">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white py-32 px-4 relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image 
            src="https://images.unsplash.com/photo-1605705658744-45f0fe8f9663?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Fleet of commercial vehicles"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Vehicle Financing Solutions
          </motion.h1>
          <motion.p
            className="text-2xl mb-8 leading-relaxed"
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
          className="text-2xl text-gray-300 text-center mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          At Vista Pacific Capital, we understand the diverse needs of businesses relying on vehicle fleets. Our tailored financing solutions include:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {vehicleTypes.map((type, index) => (
            <motion.div 
              key={index} 
              className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48">
                <Image 
                  src={type.image}
                  alt={`${type.title} for commercial financing`}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <type.icon className="text-6xl text-white" />
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-3">{type.title}</h2>
                <p className="text-gray-200 text-lg leading-relaxed">{type.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Financing Details Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image 
            src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Fleet vehicles"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center text-blue-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Vehicle Financing Process
          </motion.h2>
          <motion.div 
            className="bg-gray-800 bg-opacity-90 p-8 rounded-2xl shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ul className="list-none space-y-6 text-gray-200 text-lg">
              <li className="flex items-center">
                <span className="text-blue-400 mr-4">✓</span>
                Streamlined application process tailored for businesses of all sizes
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-4">✓</span>
                Financing available for both new and used vehicles across various categories
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-4">✓</span>
                Flexible terms up to 84 months to match your business cycles and cash flow
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-4">✓</span>
                Competitive rates with rapid approval and funding to get you on the road quickly
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-4">✓</span>
                Expert guidance from our team specializing in commercial vehicle financing
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center text-blue-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Benefits of Our Vehicle Financing Programs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-2xl backdrop-filter backdrop-blur-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-blue-300">Flexible Terms</h3>
              <p className="text-gray-200 text-lg leading-relaxed">Customize your financing to match your business cycles and cash flow needs. We offer a range of term lengths and payment structures to ensure a seamless fit with your operations.</p>
            </motion.div>
            <motion.div 
              className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-2xl backdrop-filter backdrop-blur-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-blue-300">Competitive Rates</h3>
              <p className="text-gray-200 text-lg leading-relaxed">Leverage our extensive industry connections to secure the most favorable financing rates. Our team works tirelessly to ensure you get the best deal possible for your vehicle fleet.</p>
            </motion.div>
            <motion.div 
              className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-2xl backdrop-filter backdrop-blur-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-blue-300">Quick Approval Process</h3>
              <p className="text-gray-200 text-lg leading-relaxed">Put your vehicles on the road faster with our streamlined approval procedures. Our dedicated team works efficiently to expedite your financing and get your business moving.</p>
            </motion.div>
            <motion.div 
              className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-2xl backdrop-filter backdrop-blur-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-blue-300">Extensive Vehicle Options</h3>
              <p className="text-gray-200 text-lg leading-relaxed">Choose from a wide array of commercial vehicles to perfectly suit your business needs. Our relationships with top vehicle manufacturers ensure you have access to the best selection and latest models.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1605705658744-45f0fe8f9663?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Commercial truck fleet"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
            className="text-4xl font-bold mb-12 text-center text-blue-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Success Story
          </motion.h2>
          <motion.div 
            className="bg-gray-800 bg-opacity-90 p-8 rounded-2xl shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">Logistics Company Expands Fleet and Market Reach</h3>
            <p className="text-gray-200 text-lg leading-relaxed mb-4">A growing logistics company needed to expand its fleet to meet increasing demand and enter new markets. Through our flexible financing solution, they were able to acquire a mix of 20 new semi-trucks and delivery vans, fitted with the latest GPS and efficiency tracking technology.</p>
            <p className="text-gray-200 text-lg leading-relaxed mb-4">Result: The company increased its delivery capacity by 40%, reduced fuel costs by 15% due to newer, more efficient vehicles, and successfully expanded into two new state markets within the first year of implementation.</p>
            <p className="text-blue-300 text-lg italic">"Vista Pacific Capital's vehicle financing allowed us to scale our fleet without compromising our cash flow. Their understanding of the logistics industry's unique challenges made the process smooth and tailored to our specific needs." - COO, Expanding Logistics Firm</p>
          </motion.div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-24 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
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
            className="bg-gray-700 p-10 rounded-2xl shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ul className="list-disc pl-5 space-y-6 text-gray-200">
              <li className="text-xl">Deep expertise in commercial vehicle financing across a broad spectrum of industries, ensuring tailored solutions that align with your unique business model and operational needs</li>
              <li className="text-xl">Customized financing structures designed to optimize your cash flow and provide maximum flexibility as your business needs evolve, including seasonal payment options for certain industries</li>
              <li className="text-xl">Potential tax advantages through strategic vehicle leasing and financing, allowing you to preserve capital for other critical investments while potentially reducing your tax liability</li>
              <li className="text-xl">Dedicated support from our knowledgeable team, guiding you through the entire financing process and helping you make informed decisions about your fleet investments</li>
              <li className="text-xl">Opportunities to regularly upgrade your fleet as your business expands, ensuring you always have access to the latest vehicle technologies and can maintain a competitive edge in your industry</li>
              <li className="text-xl">Comprehensive financing options for both traditional and alternative fuel vehicles, supporting your sustainability goals and potential cost savings</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Upgrade Your Vehicle Fleet?
          </motion.h2>
          <motion.p
            className="text-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our vehicle financing solutions can help drive your business to new heights and give you a competitive edge in your industry.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="bg-white text-blue-900 py-4 px-10 rounded-full text-xl font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Get Financing Today</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}