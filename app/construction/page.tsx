"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaHardHat, FaRuler, FaTruck } from 'react-icons/fa';
import { GiConcreteBag, GiCrane, GiReceiveMoney } from 'react-icons/gi';

export default function ConstructionConcreteEquipment() {
  const equipmentTypes = [
    {
      title: 'Heavy Machinery',
      description: 'Finance powerful excavators, bulldozers, and cranes to move mountains and shape landscapes for your ambitious projects.',
      icon: FaTruck,
      image: 'https://images.unsplash.com/photo-1621922688758-359fc864071e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVsbGRvemVyc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Concrete Equipment',
      description: 'Lease state-of-the-art mixers, pumps, and formwork systems to pour the foundation of your success in the construction industry.',
      icon: GiConcreteBag,
      image: 'https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbnN0cnVjdGlvbiUyMGNvbmNyZWF0ZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'Specialty Tools',
      description: 'Access flexible financing for compactors, graders, and power trowels that bring precision and efficiency to every task on your job site.',
      icon: FaHardHat,
      image: 'https://images.unsplash.com/photo-1714562377019-e6d03ea94ba2?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbnN0dWN0aW9uJTIwJTIwY29tcGFjdG9yfGVufDB8fDB8fHww'
    },
    {
      title: 'Lifting Equipment',
      description: 'Elevate your capabilities with financed cranes, hoists, and lifts that safely handle materials and personnel at any height.',
      icon: GiCrane,
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      title: 'Paving Equipment',
      description: 'Smooth out your road to success with financed pavers, rollers, and milling machines for top-quality road construction projects.',
      icon: FaRuler,
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
  ];

  return (
    <div className="bg-gray-900 font-sans">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white py-32 px-4 relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Construction site background"
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
            Construction and Concrete Equipment Financing
          </motion.h1>
          <motion.p
            className="text-2xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Build your future with our robust financing solutions tailored for the construction industry
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
          At Vista Pacific Capital, we understand the unique needs of the construction industry. Our comprehensive financing solutions include:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {equipmentTypes.map((type, index) => (
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
                  alt={`${type.title} for construction and concrete financing`}
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
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Construction equipment"
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
            Our Financing Process
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
                Streamlined application process tailored for construction businesses
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-4">✓</span>
                Financing available for both new and used construction equipment
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-4">✓</span>
                Flexible terms up to 84 months to match your project cycles
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-4">✓</span>
                Competitive rates with rapid approval and funding
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-4">✓</span>
                Expert guidance from our team specializing in construction industry financing
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
            Benefits of Our Construction Equipment Financing
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-2xl backdrop-filter backdrop-blur-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-blue-300">Expand Your Fleet</h3>
              <p className="text-gray-200 text-lg leading-relaxed">Acquire new equipment to take on larger projects, broaden your capabilities, and grow your business to new heights without depleting your working capital.</p>
            </motion.div>
            <motion.div 
              className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-2xl backdrop-filter backdrop-blur-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-blue-300">Flexible Terms</h3>
              <p className="text-gray-200 text-lg leading-relaxed">Customize your financing to match your project timelines and cash flow. We offer payment structures that work for you, including seasonal adjustments for weather-dependent operations.</p>
            </motion.div>
            <motion.div 
              className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-2xl backdrop-filter backdrop-blur-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-blue-300">Stay Competitive</h3>
              <p className="text-gray-200 text-lg leading-relaxed">Access the latest construction technologies to improve efficiency, productivity, and profitability in a demanding market. Regular equipment upgrades keep you ahead of the competition.</p>
            </motion.div>
            <motion.div 
              className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-2xl backdrop-filter backdrop-blur-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-blue-300">Tax Benefits</h3>
              <p className="text-gray-200 text-lg leading-relaxed">Potentially reduce your tax liability and improve cash flow through equipment leasing and financing. Our experts can guide you through the tax advantages specific to the construction industry.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
           src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
           alt="Construction site"
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
           <h3 className="text-2xl font-semibold mb-4 text-blue-300">Regional Construction Firm Expands Operations</h3>
           <p className="text-gray-200 text-lg leading-relaxed mb-4">A growing regional construction company needed to expand its equipment fleet to take on larger commercial projects. Through our flexible financing solution, they were able to acquire multiple pieces of heavy machinery, including excavators, bulldozers, and a state-of-the-art concrete pumping system.</p>
           <p className="text-gray-200 text-lg leading-relaxed mb-4">Result: The company increased its project capacity by 150%, reduced equipment downtime by 40%, and secured three major commercial contracts within the first year of implementation.</p>
           <p className="text-blue-300 text-lg italic">"Vista Pacific Capital's financing allowed us to scale our operations without compromising our cash flow. Their understanding of the construction industry's unique challenges made the process smooth and tailored to our specific needs." - CEO, Regional Construction Firm</p>
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
           Why Choose Vista Pacific Capital for Construction Equipment Financing?
         </motion.h2>
         <motion.div 
           className="bg-gray-700 p-10 rounded-2xl shadow-2xl"
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
         >
           <ul className="list-disc pl-5 space-y-6 text-gray-200">
             <li className="text-xl">Deep expertise in construction equipment financing across various sectors, ensuring tailored solutions that align with your unique project needs</li>
             <li className="text-xl">Customized financing structures designed to optimize your cash flow and provide maximum flexibility as your project demands evolve</li>
             <li className="text-xl">Potential tax advantages through strategic equipment leasing and financing, allowing you to reinvest in your business growth</li>
             <li className="text-xl">Dedicated support from our knowledgeable team, guiding you through the entire financing process and helping you make informed decisions</li>
             <li className="text-xl">Opportunities to regularly upgrade your fleet, ensuring you always have access to the latest construction technologies and maintain a competitive edge</li>
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
           Ready to Elevate Your Construction Capabilities?
         </motion.h2>
         <motion.p
           className="text-2xl mb-10 leading-relaxed"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           viewport={{ once: true }}
         >
           Let's discuss how our equipment financing can help you build your business to new heights and tackle bigger projects with confidence.
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