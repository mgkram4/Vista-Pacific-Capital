"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaBeer, FaBox, FaFlask, FaThermometerHalf, FaWineBottle } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

export default function BreweryDistilleryEquipment() {
  const equipmentTypes = [
    {
      title: 'Brewing Systems',
      description: 'Finance state-of-the-art brewhouses, fermentation tanks, and filtration systems to unleash your brewing potential.',
      icon: FaBeer,
      image: 'https://images.unsplash.com/photo-1532634733-cae1395e440f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJyZXdpbmclMjBiZWVyfGVufDB8fDB8fHww'
    },
    {
      title: 'Distillation Equipment',
      description: 'Lease top-of-the-line stills, fermenters, and aging barrels to craft your signature spirits.',
      icon: FaWineBottle,
      image: 'https://images.unsplash.com/photo-1668380608937-26e2435d369b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RGlzdGlsbGF0aW9ufGVufDB8fDB8fHww'
    },
    {
      title: 'Packaging Lines',
      description: 'Finance high-performance bottling, canning, and kegging equipment to elevate your product presentation.',
      icon: FaBox,
      image: 'https://images.unsplash.com/photo-1536638317175-32449deccfc0?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFja2luZyUyMGxpbmVzJTIwYmVlcnxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Quality Control Equipment',
      description: 'Invest in advanced testing and analysis equipment to ensure consistent product quality.',
      icon: FaFlask,
      image: 'https://images.unsplash.com/photo-1533646281814-761f53fc5483?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnJld2VyeXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Temperature Control Systems',
      description: 'Finance precise temperature control systems for fermentation, aging, and storage processes.',
      icon: FaThermometerHalf,
      image: 'https://images.unsplash.com/photo-1542835497-a6813df96ed9?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnJld2VyeXxlbnwwfHwwfHx8MA%3D%3D'
    }
  ];

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="w-full bg-indigo-dye text-white py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1584225064785-c62a8b43d148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt="Brewery background"
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
            Brewery and Distillery Equipment Financing
          </motion.h1>
          <motion.p
            className="text-2xl mb-12 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Craft your success with our specialized financing solutions
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
              <span>Get Equipment Financing</span>
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
          Equipment We Finance
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-700 text-center mb-16 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          At Vista Pacific Capital, we understand the unique needs of breweries and distilleries. Our tailored financing solutions include:
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
                  alt={`${type.title} for brewery and distillery financing`}
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
                Streamlined application process tailored for breweries and distilleries
              </li>
              <li className="flex items-center">
                <span className="text-light-sea-green mr-4">✓</span>
                Financing available for both new and used equipment
              </li>
              <li className="flex items-center">
                <span className="text-light-sea-green mr-4">✓</span>
                Flexible terms up to 84 months to match your production cycles
              </li>
              <li className="flex items-center">
                <span className="text-light-sea-green mr-4">✓</span>
                Competitive rates with rapid approval and funding
              </li>
              <li className="flex items-center">
                <span className="text-light-sea-green mr-4">✓</span>
                Expert guidance from our team specializing in craft beverage industry financing
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
            Benefits of Our Equipment Financing
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-indigo-dye">Scale Your Production</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Acquire advanced equipment to exponentially increase your brewing or distilling capacity and meet growing demand without depleting your working capital.</p>
            </motion.div>
            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-indigo-dye">Preserve Working Capital</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Invest in growth without straining your cash flow. Our financing options let you expand while maintaining financial flexibility for other aspects of your business.</p>
            </motion.div>
            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-indigo-dye">Flexible Payment Options</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Tailor your financing to match your unique business cycles and cash flow. We offer seasonal and step-up payment structures to align with your production and sales patterns.</p>
            </motion.div>
            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-indigo-dye">Stay Ahead of the Curve</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Access cutting-edge brewing and distilling technologies to elevate your product quality and stand out in a competitive market. Regularly upgrade your equipment to maintain a competitive edge.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center text-indigo-dye"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Success Story
          </motion.h2>
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-dye">Craft Brewery Doubles Production Capacity</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">A growing craft brewery needed to expand their production to meet increasing demand for their popular IPAs. Through our flexible financing solution, they were able to acquire a larger brewhouse, additional fermentation tanks, and a state-of-the-art canning line.</p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">Result: The brewery doubled their production capacity, reduced packaging time by 70%, and expanded distribution to three new states within six months of implementation.</p>
            <p className="text-light-sea-green text-lg italic">"Vista Pacific Capital's financing allowed us to scale our operations without compromising our cash flow. Their understanding of the craft brewing industry made the process smooth and tailored to our specific needs." - Head Brewer and Co-founder</p>
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
            Ready to Elevate Your Brewing or Distilling Operation?
          </motion.h2>
          <motion.p
            className="text-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our equipment financing can help you craft your next level of success.
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