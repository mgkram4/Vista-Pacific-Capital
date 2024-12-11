"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaBeer, FaHandshake, FaIndustry, FaLightbulb, FaMedkit, FaTruck, FaUserTie, FaUtensils, FaWarehouse } from 'react-icons/fa';
import { GiCrane, GiForklift, GiGears, GiReceiveMoney } from 'react-icons/gi';

const About = () => {
  const coreValues = [
    { name: "Integrity", icon: FaHandshake, description: "We build lasting relationships with our clients through transparency and reliability." },
    { name: "Innovation", icon: FaLightbulb, description: "We constantly seek new and creative financing solutions to meet our clients' evolving needs." },
    { name: "Expertise", icon: FaUserTie, description: "Our team brings decades of industry knowledge to every financing solution we craft." },
    { name: "Efficiency", icon: GiGears, description: "We streamline our processes to provide quick and effective financing solutions." }
  ];

  const industries = [
    { name: "Medical Equipment", icon: FaMedkit },
    { name: "Warehouse Racking", icon: GiForklift },
    { name: "Manufacturing Equipment", icon: FaIndustry },
    { name: "Brewery Equipment", icon: FaBeer },
    { name: "Construction Equipment", icon: GiCrane },
    { name: "Vehicle Programs", icon: FaTruck },
    { name: "Restaurant Equipment", icon: FaUtensils },
    { name: "Industrial Solutions", icon: FaWarehouse },
  ];

  const teamMembers = [
    {
      name: "Alan Johnson",
      title: "Senior Account Executive",
      image: "/Images/alan-johnson.jpg",
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
      image: "/Images/noah-miller.jpg",  
      bio: "Noah brings nine years of experience in equipment finance to our team. His background in the restaurant and hospitality sectors complements his financial skills, positioning him as a versatile asset in addressing both operational and financial challenges.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image 
          src="/Images/contactH.png"
          alt="Vista Pacific Capital Hero"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-indigo-dye bg-opacity-70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Vista Pacific Capital
            </motion.h1>
            <motion.p
              className="text-xl mb-6 text-gray-200"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empowering businesses with innovative financing solutions
            </motion.p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-6 text-center text-indigo-dye"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Vision
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            At Vista Pacific Capital, based in Orange County, California, we provide capital lease options to businesses of all sizes, from startups to Fortune 500 companies. Our vision is to empower businesses by offering innovative, flexible, and accessible equipment financing solutions that drive growth and success. We specialize in industries such as construction, manufacturing, and technology, helping organizations acquire essential equipment through structured payments that lead to ownership.

Our leasing solutions allow businesses to spread the cost of equipment over time, improving cash flow management and reducing the need for large upfront investments. Additionally, we offer vendor programs that assist equipment suppliers in providing financing options to their customers, supporting a wide range of business needs across various sectors

 
          </motion.p>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center text-indigo-dye"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md p-6 text-center transition duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <value.icon className="text-5xl text-light-sea-green mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-indigo-dye">{value.name}</h3>
                <p className="text-sm text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center text-indigo-dye"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Industries We Serve
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="text-center bg-white p-4 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <industry.icon className="text-4xl text-light-sea-green mb-3 mx-auto" />
                <h3 className="text-lg font-semibold text-indigo-dye">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-indigo-dye"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-56 w-full">
                <Image 
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-indigo-dye">{member.name}</h3>
                <p className="text-md text-light-sea-green mb-4">{member.title}</p>
                <p className="text-sm text-gray-700">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-light-sea-green text-white py-20 px-4 relative">
        <Image 
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Vista Pacific Capital CTA background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-light-sea-green bg-opacity-80" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Grow Your Business?
          </motion.h2>
          <motion.p
            className="text-xl mb-8"
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
            <Link href="/contact" className="bg-white text-light-sea-green py-3 px-8 rounded-full text-lg font-semibold hover:bg-indigo-dye hover:text-white transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-2 text-2xl" /> Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;