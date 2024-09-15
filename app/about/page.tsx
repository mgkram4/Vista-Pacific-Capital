"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaBirthdayCake, FaBuilding, FaChartLine, FaGlobe, FaHandshake, FaLightbulb, FaUserTie } from 'react-icons/fa';
import { GiGears, GiReceiveMoney } from 'react-icons/gi';

export default function About() {
  const coreValues = [
    { name: "Integrity", icon: FaHandshake, description: "We build lasting relationships with our clients through transparency and reliability." },
    { name: "Innovation", icon: FaLightbulb, description: "We constantly seek new and creative financing solutions to meet our clients' evolving needs." },
    { name: "Expertise", icon: FaUserTie, description: "Our team brings decades of industry knowledge to every financing solution we craft." },
    { name: "Efficiency", icon: GiGears, description: "We streamline our processes to provide quick and effective financing solutions." }
  ];

  const teamMembers = [
    {
      name: "Alan Johnson",
      title: "Senior Account Executive",
      image: "/images/alan-johnson.jpg",
      bio: "Alan brings over 25 years of invaluable experience in the equipment finance industry. Based in Southern California, Alan's expertise is complemented by his unwavering commitment to delivering bespoke financial solutions. He has managed over 30 sales representatives and consistently drives impressive results with a client retention rate of over 96%.",
    },
    {
      name: "Alec Sarrail", 
      title: "Equipment Investment Consultant",
      image: "/Images/alec-sarrial.jpg",
      bio: "With a strong foundation in economics and 3 years of experience in the financial consulting industry, Alec is a key member of our team. He excels in crafting strategies that align with clients' financial objectives, especially for businesses with revenues under $100 million.",
    },
    {
      name: "Noah Miller",
      title: "Account Executive",
      image: "/images/noah-miller.jpg",  
      bio: "Noah brings nine years of experience in equipment finance to our team. His background in the restaurant and hospitality sectors complements his financial skills, positioning him as a versatile asset in addressing both operational and financial challenges.",
    },
  ];

  const journeyMilestones = [
    { year: 2003, event: "Vista Pacific Capital founded", icon: FaBuilding },
    { year: 2008, event: "Weathered the financial crisis, emerging stronger", icon: FaChartLine },
    { year: 2013, event: "Expanded operations nationwide", icon: FaGlobe },
    { year: 2018, event: "Surpassed $1 billion in total financed equipment", icon: GiReceiveMoney },
    { year: 2023, event: "Celebrating 20 years of empowering businesses", icon: FaBirthdayCake },
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

      {/* Company History */}
      <section className="max-w-6xl mx-auto py-24 px-4">
        <motion.h2 
          className="text-5xl font-bold mb-20 text-blue-300 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Journey
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600"></div>
          {journeyMilestones.map((milestone, index) => (
            <motion.div 
              key={index}
              className={`flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="w-5/12">
                    <div className="bg-gray-800 rounded-lg shadow-xl p-6">
                      <h3 className="text-3xl font-bold text-blue-300 mb-2">{milestone.year}</h3>
                      <p className="text-xl text-gray-300">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center z-10">
                      <milestone.icon className="text-2xl text-blue-400" />
                    </div>
                  </div>
                  <div className="w-5/12"></div>
                </>
              ) : (
                <>
                  <div className="w-5/12"></div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center z-10">
                      <milestone.icon className="text-2xl text-blue-400" />
                    </div>
                  </div>
                  <div className="w-5/12">
                    <div className="bg-gray-800 rounded-lg shadow-xl p-6">
                      <h3 className="text-3xl font-bold text-blue-300 mb-2">{milestone.year}</h3>
                      <p className="text-xl text-gray-300">{milestone.event}</p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="bg-gray-800 rounded-lg shadow-xl p-10 mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-6 text-xl text-gray-300">
            Founded in 2003, Vista Pacific Capital has grown from a small, local financing firm to a national leader in equipment financing solutions. Our journey began with a vision to provide businesses with the financial tools they need to grow and thrive in an ever-changing economic landscape.
          </p>
          <p className="text-xl text-gray-300">
            Today, Vista Pacific Capital stands as a testament to the power of perseverance, expertise, and client-focused service. We're proud of our history and excited about the future as we continue to empower businesses with cutting-edge financing solutions.
          </p>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-800 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-5xl font-bold mb-16 text-center text-blue-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 rounded-lg shadow-md p-8 text-center transition duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <value.icon className="text-6xl text-blue-400 mb-6 mx-auto" />
                <h3 className="text-2xl font-semibold mb-4 text-blue-200">{value.name}</h3>
                <p className="text-lg text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="max-w-6xl mx-auto py-24 px-4">
        <motion.h2 
          className="text-5xl font-bold mb-16 text-center text-blue-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 rounded-lg shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64 w-full">
                <Image 
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-blue-300">{member.name}</h3>
                <p className="text-lg text-gray-400 mb-4">{member.title}</p>
                <p className="text-gray-300">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-blue-900 text-white py-24 px-4 relative">
        <Image 
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Vista Pacific Capital CTA background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-80" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
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