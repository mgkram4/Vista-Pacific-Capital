"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCashRegister, FaCoffee, FaHamburger, FaUtensils, FaWineGlassAlt } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

export default function RestaurantEquipmentFinancing() {
  const equipmentTypes = [
    {
      title: 'Kitchen Equipment',
      description: 'Finance state-of-the-art ovens, grills, fryers, and refrigeration units to enhance your culinary capabilities.',
      icon: FaUtensils,
      image: 'https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnQlMjBraXRjaGVufGVufDB8fDB8fHww'
    },
    {
      title: 'Bar & Beverage',
      description: 'Equip your bar with top-quality espresso machines, draft systems, and ice makers through flexible financing options.',
      icon: FaCoffee,
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' 
    },
    {
      title: 'Dining Room Essentials',
      description: 'Create the perfect ambiance with financing for furniture, tableware, and decor that sets your restaurant apart.',
      icon: FaWineGlassAlt,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'POS & Management Systems',
      description: 'Streamline operations with cutting-edge point-of-sale systems and restaurant management software.',
      icon: FaCashRegister,
      image: 'https://images.unsplash.com/photo-1726065235239-b20b88d43eea?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9zJTIwc3lzdGVtfGVufDB8fDB8fHww'
    },
    {
      title: 'Food Prep Equipment',
      description: 'Maximize efficiency with high-quality food processors, slicers, and mixers designed for the demands of a busy kitchen.',
      icon: FaHamburger,
      image: 'https://images.unsplash.com/photo-1475610003943-f778cd2c3a6a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D'
    }
  ];

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="w-full bg-indigo-dye text-white py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
            alt="Restaurant background"
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
            Restaurant Equipment Financing
          </motion.h1>
          <motion.p
            className="text-2xl mb-12 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Equip your culinary vision with flexible financing solutions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact" className="bg-light-sea-green text-white py-4 px-10 rounded-full text-xl font-semibold hover:bg-white hover:text-indigo-dye transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Get Financing Now</span>
            </Link>
          </motion.div>
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
          Restaurant Equipment We Finance
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-700 text-center mb-16 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          At Vista Pacific Capital, we understand the unique needs of the restaurant industry. Our restaurant equipment financing solutions include:
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
                  alt={`${type.title} restaurant equipment for financing`}
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

     {/* Financing Details Section */}
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
              <li className="flex items-center">
                <span className="text-light-sea-green mr-4">✓</span>
                Quick application process - just a credit application and three months of bank statements required
              </li>
              <li className="flex items-center">
                <span className="text-light-sea-green mr-4">✓</span>
                Financing available for both new and used restaurant equipment
              </li>
              <li className="flex items-center">
                <span className="text-light-sea-green mr-4">✓</span>
                Flexible terms up to 72 months to suit your cash flow needs
              </li>
              <li className="flex items-center">
                <span className="text-light-sea-green mr-4">✓</span>
                Competitive rates with same-day qualification available
              </li>
              <li className="flex items-center">
                <span className="text-light-sea-green mr-4">✓</span>
                Expert guidance from our team with over 20 years of industry experience
              </li>
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
            Benefits of Our Restaurant Equipment Financing
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-indigo-dye">Preserve Working Capital</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Invest in growth opportunities while maintaining cash flow for day-to-day operations. Allocate funds to other critical areas of your restaurant while acquiring the equipment you need.</p>
            </motion.div>
            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-indigo-dye">Flexible Payment Options</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Customize your financing to match your restaurant's unique cash flow patterns. We offer tailored payment structures, including seasonal and step-up options, to ensure a seamless fit for your business.</p>
            </motion.div>
            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-indigo-dye">Upgrade with Ease</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Stay current with the latest culinary trends and technology. Our financing solutions allow you to easily upgrade your equipment as your restaurant grows and evolves.</p>
            </motion.div>
            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-indigo-dye">Tax Benefits</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Potentially reduce your tax liability through equipment leasing and financing. Our expert team will guide you through potential tax benefits, helping you make the most of your investment.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center text-indigo-dye"
            initial={{ opacity: 0, y:50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Success Story
          </motion.h2>
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-dye">Michelin-Starred Chef Opens New Venture</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">An acclaimed chef wanted to open a new restaurant concept but needed to finance a complete kitchen renovation. Through our flexible financing solution, they were able to acquire top-of-the-line equipment without compromising their vision or budget.</p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">Result: The restaurant launched to rave reviews, earning a Michelin star within its first year of operation and seeing a 25% increase in revenue compared to projections.</p>
            <p className="text-light-sea-green text-lg italic">"Vista Pacific Capital's financing gave us the freedom to bring our culinary dreams to life without financial constraints." - Executive Chef and Owner</p>
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
            Ready to Upgrade Your Restaurant?
          </motion.h2>
          <motion.p
            className="text-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our tailored financing solutions can help your restaurant thrive.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="bg-white text-light-sea-green py-4 px-10 rounded-full text-xl font-semibold hover:bg-indigo-dye hover:text-white transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Get Financing Today</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}