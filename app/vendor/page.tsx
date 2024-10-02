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

  const faqs = [
    {
      question: 'What types of equipment can be financed through your Vendor Program?',
      answer: 'We finance a wide range of equipment across various industries, including manufacturing, construction, healthcare, transportation, and more.',
    },
    {
      question: 'How long does the approval process take?',
      answer: 'We strive to provide credit decisions within 24-48 hours for most applications.',
    },
    {
      question: 'Is there a minimum or maximum financing amount?',
      answer: 'We offer financing from $25,000 up to $5 million, with options for larger transactions available.',
    },
    {
      question: 'Do you offer financing for both new and used equipment?',
      answer: 'Yes, we provide financing solutions for both new and used equipment.',
    },
    {
      question: 'What fees are associated with the Vendor Program?',
      answer: 'There are no fees charged to vendors for participating in our program.',
    },
  ];

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="w-full bg-indigo-dye text-white py-32 px-4 relative overflow-hidden">
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
            <Link href="/contact" className="bg-light-sea-green text-white py-4 px-10 rounded-full text-xl font-semibold hover:bg-white hover:text-indigo-dye transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Become a Partner</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto py-24 px-4">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center text-indigo-dye"
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
                  alt={`${benefit.title} benefit`}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-indigo-dye bg-opacity-60 flex items-center justify-center">
                  <benefit.icon className="text-6xl text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-indigo-dye mb-3">{benefit.title}</h3>
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
            className="text-4xl font-bold mb-16 text-center text-indigo-dye"
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
                <p className="text-indigo-dye font-bold text-xl">{`${index + 1}. ${step}`}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center text-indigo-dye"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-indigo-dye">{faq.question}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
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
            Ready to Become a Vista Pacific Capital Vendor Partner?
          </motion.h2>
          <motion.p
            className="text-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join our Vendor Program today and start offering your customers flexible financing solutions that can help grow your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="bg-white text-light-sea-green py-4 px-10 rounded-full text-xl font-semibold hover:bg-indigo-dye hover:text-white transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Sign Up Now</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}