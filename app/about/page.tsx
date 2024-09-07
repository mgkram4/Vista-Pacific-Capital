"use client"

// File: src/pages/about.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaHandshake, FaLightbulb } from 'react-icons/fa';
import { GiGears, GiReceiveMoney } from 'react-icons/gi';

export default function About() {
  const coreValues = [
    { name: "Trust", icon: FaHandshake, description: "Building lasting relationships with our clients through transparency and reliability." },
    { name: "Efficiency", icon: GiGears, description: "Streamlined processes to provide quick and effective financing solutions." },
    { name: "Simplicity", icon: FaLightbulb, description: "Clear, straightforward approaches to complex financial needs." }
  ];

  const stats = [
    { value: "20+", label: "Years of Experience" },
    { value: "$3B+", label: "Equipment Funded" },
    { value: "100+", label: "Industries Served" }
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
            About Vista Pacific Capital
          </motion.h1>
          <motion.p
            className="text-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering businesses with innovative financing solutions for over two decades
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
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-800 rounded-lg shadow-xl p-10">
            <h2 className="text-4xl font-bold mb-6 text-blue-300">Financing Your Success</h2>
            <p className="mb-6 text-xl text-gray-300">
              At Vista Pacific Capital, we understand that every business is unique, with its own set of challenges and goals. That's why we take a personalized approach to financing, working closely with each client to develop tailored solutions that fit their specific needs.
            </p>
            <p className="mb-6 text-xl text-gray-300">
              Our team of experts leverages their deep industry knowledge and extensive network of funding partners to secure the best possible terms for your business. Whether you're looking to acquire new equipment, expand your facilities, or seize a new growth opportunity, we have the expertise and resources to help you succeed.
            </p>
            <Link href="/contact" className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl">
              <GiReceiveMoney className="mr-2 text-2xl" /> Get Started
            </Link>
          </div>
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80" 
              alt="Financing Your Success" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg" 
            />
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="bg-blue-600 text-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}  
            >
              <div className="text-5xl font-bold mb-4">{stat.value}</div>
              <div className="text-2xl">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Core Values Section */}
        <motion.h2 
          className="text-5xl font-bold mb-16 text-center text-blue-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Core Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md p-8 text-center transition duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <value.icon className="text-6xl text-blue-400 mb-6 mx-auto" />
              <h3 className="text-3xl font-semibold mb-4 text-blue-200">{value.name}</h3>
              <p className="text-lg text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Company Image */}
      <section className="w-full relative h-96 mb-24">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Vista Pacific Capital"
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
            Accelerating Business Growth Since 2003
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
            Ready to Grow Your Business?
          </motion.h2>
          <motion.p
            className="text-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our innovative financing solutions can help you achieve your goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="bg-white text-blue-900 py-4 px-10 rounded-full text-xl font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-3xl" /> Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}