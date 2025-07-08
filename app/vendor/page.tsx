"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaChartLine, FaHandshake, FaMoneyBillWave, FaRocket, FaUserFriends } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

export default function VendorPrograms() {
  const benefits = [
    {
      title: 'Increased Sales Potential',
      description: 'Offer financing options to customers who may not have the capital to purchase equipment outright.',
      icon: FaChartLine,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      title: 'Improved Cash Flow',
      description: 'Get paid quickly upon equipment delivery, reducing accounts receivable and improving your cash flow.',
      icon: FaMoneyBillWave,
      image: 'https://images.unsplash.com/photo-1642211840197-62e225801ca4?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FzaCUyMGZsb3d8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Enhanced Customer Relationships',
      description: 'Provide added value to your customers by offering flexible financing solutions.',
      icon: FaHandshake,
      image: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      title: 'Streamlined Process',
      description: 'Our easy-to-use online portal simplifies the application and approval process.',
      icon: FaRocket,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      title: 'Dedicated Support',
      description: 'Work with our experienced team to create customized financing programs for your business.',
      icon: FaUserFriends,
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
  ];



  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="w-full bg-[#1B365D] text-white py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1556155092-490a1ba16284?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsZXN8ZW58MHx8MHx8fDA%3D"
            alt="Vendor programs background"
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
            Partner Solutions
          </motion.h1>
          <motion.p
            className="text-2xl mb-12 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empower your sales with our flexible financing solutions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact" className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
              text-white px-8 py-4 rounded-lg font-semibold text-lg 
              shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
              transform hover:-translate-y-1 transition-all duration-300">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Become a Partner</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-6 text-center text-[#1B365D]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Choose Vista Pacific Capital
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Fast approvals with flexible terms for your business needs
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-gradient-to-br from-[#113E59] to-[#082F4A] rounded-2xl shadow-xl p-6 md:p-8 text-white"
            >
              <motion.h3 
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Financing Solutions
              </motion.h3>
              <motion.p 
                className="text-blue-100 mb-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Industry-leading solutions with our comprehensive funding programs.
              </motion.p>
              <ul className="space-y-4">
                {[
                  'Terms up to 84 months',
                  'Access to as many as 15 different lenders',
                  'No money down for qualified customers',
                  'Competitive Rates',
                  'New and Used Equipment'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-2 w-2 bg-[#11B5B2] rounded-full mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100"
            >
              <motion.h3 
                className="text-2xl font-bold mb-4 text-[#1B365D]"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Quick Approval Time
              </motion.h3>
              <motion.p 
                className="text-gray-600 mb-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Same day approvals for qualified application-only transactions.
              </motion.p>
              <ul className="space-y-4">
                {[
                  '2-minute application',
                  'Soft credit pull only',
                  'Application Only up to $750,000',
                  'Financing from $20,000 to $20 million'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-2 w-2 bg-[#11B5B2] rounded-full mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div
              className="bg-gradient-to-br from-[#11B5B2] to-[#0E9B97] rounded-2xl shadow-xl p-6 md:p-8 text-white"
            >
              <motion.h3 
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Vendor Partnership Programs
              </motion.h3>
              <motion.p 
                className="text-blue-100 mb-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                Provide easy streamline financing solutions for your customers so they can grow their business.
              </motion.p>
              <ul className="space-y-4">
                {[
                  'Programs for startup customers',
                  'Vendor Rewards Programs',
                  'Great alternative for customer to cash or local bank',
                  'Prepayment up to 100% prior to completion',
                  'Can cover shipping/training/labor costs'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-2 w-2 bg-white rounded-full mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto py-24 px-4">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center text-[#1B365D]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Unlock the Benefits of Our Partner Solutions
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-56">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1B365D] mb-3">{benefit.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center text-[#1B365D]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {['Sign up for our Vendor Program', 'Submit customer applications through our online portal', 'Receive quick credit decisions', 'Deliver the equipment to your customer', 'Get paid promptly after equipment delivery'].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl text-center transition-all duration-300 hover:shadow-2xl hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-[#1B365D] font-bold text-xl">{`${index + 1}. ${step}`}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative py-24 px-4 overflow-hidden w-full">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2lnbiUyMHBhcGVyfGVufDB8fDB8fHww"
            alt="Modern office background"
            fill
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D3853]/95 via-[#0D3853]/90 to-[#0EB5B2]/80" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-sm font-semibold text-[#0EB5B2] mb-2 block">JOIN OUR NETWORK</span>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#B3B3B3]">
              Ready to Become a Vista Pacific Capital Vendor Partner?
            </h2>
            <p className="text-xl text-[#F2F2F2]/90 max-w-3xl mx-auto">
              Join our Vendor Program today and start offering your customers flexible financing solutions that can help grow your business.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/contact" className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                text-white px-8 py-4 rounded-lg font-semibold text-lg 
                shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
                transform hover:-translate-y-1 transition-all duration-300">
                <GiReceiveMoney className="mr-3 text-2xl" />
                <span>Sign Up Now</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}