"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaHardHat, FaIndustry } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Manufacturing Equipment Financing",
      description: "A leading manufacturer of precision machined parts faced the challenge of expanding its production capabilities to meet increasing demand. The company needed to acquire advanced CNC machines but was concerned about the large upfront capital expenditure required for these high-cost pieces of equipment.",
      solution: "The manufacturer opted for equipment leasing through our financing program. They secured a lease for the CNC machines with a term of 60 months and a minimal advanced payment. The leasing arrangement provided them with the flexibility to upgrade to newer technology as it became available without being locked into outdated equipment.",
      results: "The financing solution allowed the manufacturer to acquire the CNC machines promptly, enhancing their production capacity and efficiency. With predictable monthly payments, they managed their cash flow effectively and avoided large capital expenditures. The flexibility to upgrade equipment helped them stay competitive in the market, and the improved production capabilities resulted in a 25% increase in output within the first year.",
      icon: FaIndustry,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      industry: "Manufacturing"
    },
    {
      title: "Construction Equipment Financing",
      description: "A prominent construction company was preparing for a series of large-scale projects that required the purchase of several pieces of heavy construction equipment, including excavators and bulldozers. The company needed a financing solution that would accommodate their cash flow constraints and provide the flexibility to manage equipment needs across multiple projects.",
      solution: "The construction company chose to finance their construction equipment through a lease agreement with terms of 84 months. The lease included an option for minimal advanced payment and covered both new and used equipment. This approach allowed them to acquire the equipment needed for their projects without significant upfront costs.",
      results: "The leasing arrangement enabled the construction company to efficiently manage their cash flow while equipping their team with the necessary machinery. The predictable monthly payments helped with budgeting and financial planning. Additionally, the ability to choose between new and used equipment provided flexibility and cost savings. The company successfully completed their projects on time and within budget, reporting a 30% increase in project efficiency.",
      icon: FaHardHat,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      industry: "Construction"
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
            Case Studies
          </motion.h1>
          <motion.p
            className="text-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Real stories of businesses thriving with our equipment financing solutions
          </motion.p>
        </div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        ></motion.div>
      </section>

      {/* Case Studies Section */}
      <section className="max-w-6xl mx-auto py-24 px-4">
        <div className="grid grid-cols-1 gap-16">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64">
                <Image 
                  src={study.image}
                  alt={study.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <study.icon className="text-3xl text-blue-400 mr-2" />
                  <span className="text-lg text-blue-300">{study.industry}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{study.title}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-300 mb-2">Challenge</h4>
                    <p className="text-gray-400">{study.description}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-300 mb-2">Solution</h4>
                    <p className="text-gray-400">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-300 mb-2">Results</h4>
                    <p className="text-gray-400">{study.results}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full bg-blue-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Write Your Success Story?
          </motion.h2>
          <motion.p
            className="text-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our equipment financing solutions can help your business thrive.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="bg-white text-blue-900 py-4 px-10 rounded-full text-xl font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Start Your Success Story</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}