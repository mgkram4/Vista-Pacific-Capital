"use client"

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaArrowRight, FaBeer, FaCalendarAlt, FaChartLine, FaClock, FaHardHat, FaIndustry, FaMedkit, FaTruck, FaWarehouse } from 'react-icons/fa';
import { GiCheckMark, GiHandSaw, GiMoneyStack, GiReceiveMoney, GiSandsOfTime } from 'react-icons/gi';


export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);

  const services = [
    { 
      name: "Medical Equipment", 
      description: "Cutting-edge financing for healthcare technology",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1128&q=80",
      href: "/medical"
    },
    {
      name: "Manufacturing Equipment",
      description: "Powering industrial growth with flexible financing",
      image: "https://images.unsplash.com/photo-1469289759076-d1484757abc3?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFudWZhY3R1cmluZ3xlbnwwfHwwfHx8MA%3D%3D",
      href: "/manufacturing"
    },
    {
      name: "Brewery Equipment",
      description: "Crafting success in the brewing industry",
      image: "https://images.unsplash.com/photo-1532634733-cae1395e440f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJyZXdpbmclMjBiZWVyfGVufDB8fDB8fHww",
      href: "/brewery"
    },
    {
      name: "Construction Equipment",
      description: "Building the future with robust financing solutions",
      image: "https://images.unsplash.com/photo-1621922688758-359fc864071e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVsbGRvemVyc3xlbnwwfHwwfHx8MA%3D%3D",
      href: "/construction"
    },
    {
      name: "Vehicle Financing",
      description: "Driving business forward with tailored vehicle solutions",
      image: "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80",
      href: "/vehicle"
    },
    {
      name: "Warehouse Racking",
      description: "Optimizing storage with innovative financing options",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      href: "/warehouse"
    },
  ];
  const benefits = [
    { title: "Century of Experience", description: "Unrivaled industry expertise", icon: GiSandsOfTime },
    { title: "$2 Billion+ Funded", description: "Proven financial powerhouse", icon: GiMoneyStack },
    { title: "20,000+ Businesses Empowered", description: "Driving success across industries", icon: GiHandSaw },
    { title: "A+ BBB Rating", description: "Trust and excellence guaranteed", icon: GiCheckMark },
  ];

  const slides = [
    { 
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
      title: "Unleash Your Business Potential" 
    },
    { 
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
      title: "Forging Powerful Partnerships" 
    },
    { 
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
      title: "Revolutionary Financing Solutions" 
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextService = () => {
    setSlideDirection(1);
    setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevService = () => {
    setSlideDirection(-1);
    setCurrentServiceIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  useEffect(() => {
    const timer = setInterval(nextService, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="w-full h-screen relative overflow-hidden rounded-sm" id="home">
        <AnimatePresence initial={false}>
          <motion.div 
            key={currentSlide}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={slides[currentSlide].image}
              alt={`Vista Pacific Capital - ${slides[currentSlide].title}`}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-50" />
          </motion.div>
        </AnimatePresence>
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <div className="text-center px-4">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Dominate your industry with our cutting-edge financing
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/contact" className="bg-blue-600 text-white py-3 px-8 sm:py-2 sm:px-6 text-sm md:py-4 md:px-10 md:text-lg lg:text-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
    Get Started with Vista Pacific Capital
</Link>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="w-full py-20 px-4 bg-gray-800 relative mt-20 rounded-sm" id="about">
        <Image
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt="Vista Pacific Capital benefits background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className='rounded-sm'
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-80" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-blue-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            The Vista Pacific Advantage
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center transform hover:scale-105"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <benefit.icon className="text-5xl md:text-6xl mb-6 text-blue-400 mx-auto" aria-hidden="true" />
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-200">{benefit.title}</h3>
                <p className="text-sm md:text-base text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

          {/* Services Section */}
          {/* Services Section */}
<section className="max-w-6xl mx-auto py-24 px-4">
  <motion.h2 
    className="text-4xl md:text-5xl font-bold mb-16 text-center text-blue-300"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    Our Financing Solutions
  </motion.h2>
  <motion.p 
    className="text-xl md:text-2xl text-gray-400 text-center mb-12"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true }}
  >
    Vista Pacific Capital offers comprehensive financing solutions for a wide range of industries, including:
  </motion.p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {services.map((service, index) => (
      <motion.div 
        key={index} 
        className="relative overflow-hidden rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="absolute inset-0">
          <Image 
            src={service.image}
            alt={service.name}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-40" />
        </div>
        <div className="relative z-10 p-6 h-full flex flex-col justify-between backdrop-filter  bg-blue-900 bg-opacity-10">
          <div>
            <div className="flex items-center mb-4">
              {service.name === "Medical Equipment" && <FaMedkit className="text-3xl text-blue-300 mr-3" />}
              {service.name === "Manufacturing Equipment" && <FaIndustry className="text-3xl text-blue-300 mr-3" />}
              {service.name === "Brewery Equipment" && <FaBeer className="text-3xl text-blue-300 mr-3" />}
              {service.name === "Construction Equipment" && <FaHardHat className="text-3xl text-blue-300 mr-3" />}
              {service.name === "Vehicle Financing" && <FaTruck className="text-3xl text-blue-300 mr-3" />}
              {service.name === "Warehouse Racking" && <FaWarehouse className="text-3xl text-blue-300 mr-3" />}
              <h3 className="text-2xl font-semibold text-white">{service.name}</h3>
            </div>
            <p className="text-gray-200 mb-6">{service.description}</p>
          </div>
          <Link 
            href={service.href}
            className="inline-flex items-center text-blue-300 hover:text-white transition duration-300"
          >
            Learn More
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      {/* Features Tabs */}
      <section className="w-full py-20 px-4 bg-gray-800 relative mb-10 rounded-sm">
        <Image
          src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
          alt="Vista Pacific Capital features background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-80" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-blue-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3.0 }}
            viewport={{ once: true }}
          >
            Unrivaled Offerings
          </motion.h2>
          <div className="flex flex-wrap justify-center mb-12">
            {['Lightning Speed', 'Ultimate Flexibility', 'Expert Guidance'].map((tab, index) => (
              <motion.button
                key={index}
                className={`px-6 py-3 m-2 rounded-full text-base md:text-lg ${activeTab === index ? 'bg-blue-600 text-white' : 'bg-gray-700 text-blue-300'}`}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>
          <motion.div
            className="bg-gray-700 bg-opacity-80 p-6 md:p-10 rounded-lg shadow-lg "
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 0 && (
              <div className="flex flex-col md:flex-row items-center">
                <FaClock className="text-5xl md:text-7xl text-blue-400 mb-4 md:mb-0 md:mr-8" aria-hidden="true" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-blue-200">24-48 Hour Approvals</h3>
                  <p className="text-base md:text-xl text-gray-300">Seize opportunities at breakneck speed with our rapid approval process.</p>
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div className="flex flex-col md:flex-row items-center">
                <FaCalendarAlt className="text-5xl md:text-7xl text-blue-400 mb-4 md:mb-0 md:mr-8" aria-hidden="true" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-blue-200">Flexible Terms 12-72 Months</h3>
                  <p className="text-base md:text-xl text-gray-300">Customize your financing to dominate your market on your terms.</p>
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className="flex flex-col md:flex-row items-center">
                <FaChartLine className="text-5xl md:text-7xl text-blue-400 mb-4 md:mb-0 md:mr-8" aria-hidden="true" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-blue-200">A-D Credit Financing</h3>
                  <p className="text-base md:text-xl text-gray-300">Our financial wizards craft optimal solutions across the credit spectrum.</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      

    

      {/* CTA Section */}
      <section className="w-full bg-blue-900 text-white py-20 md:py-24 px-4 relative rounded-sm" id="contact">
        <Image
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Vista Pacific Capital CTA background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className='rounded-sm'
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-80" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Conquer Your Market?
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's unleash the full potential of your business with our groundbreaking financing solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="bg-white text-blue-900 py-3 px-8 md:py-4 md:px-10 rounded-full text-lg md:text-xl font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-2xl md:text-3xl" aria-hidden="true" /> Start Your Financing Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}