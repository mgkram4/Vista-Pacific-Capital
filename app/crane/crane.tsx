"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaBuilding, FaCalendarAlt, FaClock, FaIndustry, FaShip, FaTools, FaTruck } from 'react-icons/fa';
import { GiCrane, GiReceiveMoney } from 'react-icons/gi';

export default function CraneServices() {
  const keyFeatures = [
    { value: '$20M', label: 'Maximum Financing', icon: GiReceiveMoney },
    { value: '24-84', label: 'Flexible Terms (Months)', icon: FaCalendarAlt },
    { value: 'New/Used', label: 'Equipment Options', icon: FaTools },
    { value: '24hrs', label: 'Quick Approval', icon: FaClock }
  ];

  const equipmentTypes = [
    {
      title: 'Mobile Crane Financing',
      description: 'Flexible financing solutions for all-terrain cranes, rough terrain cranes, and truck mounted cranes.',
      icon: GiCrane,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd'
    },
    {
      title: 'Tower Crane Financing',
      description: 'Comprehensive financing for fixed tower cranes, self-erecting cranes, and climbing cranes.',
      icon: FaBuilding,
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f'
    },
    {
      title: 'Port & Marine Cranes',
      description: 'Specialized funding solutions for port cranes, container cranes, and marine lifting equipment.',
      icon: FaShip,
      image: 'https://images.unsplash.com/photo-1519074069444-1ba4fff66d16'
    },
    {
      title: 'Industrial Cranes',
      description: 'Financing options for overhead cranes, gantry cranes, and industrial lifting systems.',
      icon: FaIndustry,
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0'
    },
    {
      title: 'Specialized Lifting Equipment',
      description: 'Custom financing programs for specialized lifting equipment and attachments.',
      icon: FaTools,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758'
    },
    {
      title: 'Transport & Installation',
      description: 'Additional financing options covering transport and installation costs.',
      icon: FaTruck,
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7'
    }
  ];

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="w-full bg-indigo-dye text-white py-32 px-4 relative overflow-hidden">
        <link
          rel="preload"
          href="/Images/craneH.png"
          as="image"
          type="image/png"
        />
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/Images/craneH.png"
            alt="Crane financing"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Crane Equipment Financing
          </motion.h1>
          <motion.p
            className="text-2xl mb-12 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Crane equipment is essential to getting the job done, we make it easier for you to get the cranes you need to lift your business to new heights. Our crane financing options offer flexible terms and quick approvals, ensuring that you can secure the right equipment without compromising your budget.
          </motion.p>
          <motion.div>
            <Link href="/apply" className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white
                        bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700
                        rounded-lg shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
              <span>Apply NOW</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {keyFeatures.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <stat.icon className="text-4xl text-light-sea-green mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-indigo-dye mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center text-indigo-dye"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Crane Equipment We Finance
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentTypes.map((type, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48">
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
                <div className="p-6">
                  <h3 className="text-xl font-bold text-indigo-dye mb-3">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center text-indigo-dye"
            initial={{ opacity: 0, y: 20 }}
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
              <h3 className="text-3xl font-semibold mb-4 text-indigo-dye">Expert Equipment Evaluation</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Our team provides thorough equipment evaluations to ensure you get the best value for your investment.</p>
            </motion.div>
            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-indigo-dye">Flexible Payment Structures</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Customize your payment schedule to match your business's cash flow and project timelines.</p>
            </motion.div>
            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-indigo-dye">Industry Expertise</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Benefit from our deep understanding of crane equipment and industry requirements.</p>
            </motion.div>
            <motion.div 
              className="bg-gray-50 p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-indigo-dye">Competitive Rates</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Access industry-leading rates and terms tailored to your specific needs.</p>
            </motion.div>
          </div>
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
            Ready to Finance Your Crane Equipment?
          </motion.h2>
          <motion.p
            className="text-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our crane equipment financing solutions can help your business grow.
          </motion.p>
          <motion.div>
            <Link href="/apply" className="bg-white text-light-sea-green py-4 px-10 rounded-lg text-xl font-semibold hover:bg-indigo-dye hover:text-white transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Get Started Today</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}