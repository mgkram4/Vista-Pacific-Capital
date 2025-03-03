"use client"

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBeer, FaHandshake, FaIndustry, FaLightbulb, FaMedkit, FaTruck, FaUserTie, FaUtensils, FaWarehouse } from 'react-icons/fa';
import { GiCrane, GiForklift, GiGears } from 'react-icons/gi';

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
          src="https://5ycd9odhqw.ufs.sh/f/7JQdB1yagFle1CKBLbWFPlAD0i3xdR1NYFqthZ4mXIVyQTJG"
          alt="Vista Pacific Capital Hero"
          fill
          className="object-cover"
          quality={100}
          priority={true}
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
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
              className="bg-white rounded-lg shadow-xl overflow-hidden h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-[600px]">
                <Image 
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top"
                  priority
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

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden w-full">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2lnbiUyMHBhcGVyfGVufDB8fDB8fHww"
            alt="Modern office background"
            fill
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B365D]/95 via-[#1B365D]/90 to-[#48B0B0]/80" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-sm font-semibold text-cyan-400 mb-2 block">GET STARTED TODAY</span>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100/90 max-w-3xl mx-auto pb-10">
              Get pre-qualified in minutes with no impact to your credit score
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                text-white px-8 py-4 rounded-lg font-semibold text-lg 
                shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 
                transform hover:-translate-y-1 transition-all duration-300 group"
            >
              Apply Now
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;