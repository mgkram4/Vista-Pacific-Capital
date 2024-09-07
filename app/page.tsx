"use client"

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaBeer, FaCalendarAlt, FaChartLine, FaClock, FaCogs, FaHardHat, FaIndustry, FaMedkit, FaTruck, FaWarehouse } from 'react-icons/fa';
import { GiCheckMark, GiHandSaw, GiMoneyStack, GiReceiveMoney, GiSandsOfTime } from 'react-icons/gi';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const services = [
    { name: 'Medical Equipment', icon: FaMedkit, image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', route: '/medical' },
    { name: 'Warehouse Racking', icon: FaWarehouse, image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', route: '/warehouse' },
    { name: 'Industrial Machinery', icon: FaIndustry, image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', route: '/industrial' },
    { name: 'Robotics and Automation', icon: FaCogs, image: 'https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', route: '/robotics' },
    { name: 'Brewery Equipment', icon: FaBeer, image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', route: '/brewery' },
    { name: 'Construction and Concrete', icon: FaHardHat, image: 'https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', route: '/construction' },
    { name: 'Titled Vehicle Programs', icon: FaTruck, image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', route: '/vehicle' },
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
    setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevService = () => {
    setCurrentServiceIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  useEffect(() => {
    const timer = setInterval(nextService, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="w-full h-screen relative overflow-hidden" id="home">
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
              alt={slides[currentSlide].title}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-50" />
          </motion.div>
        </AnimatePresence>
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <div className="text-center">
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl mb-8"
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
              <Link href="/contact" className="bg-blue-600 text-white py-4 px-10 rounded-full text-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Fuel Your Growth
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="w-full py-20 px-4 bg-gray-800" id="about">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-5xl font-bold mb-16 text-center text-blue-300"
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
                className="bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center transform hover:scale-105"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <benefit.icon className="text-6xl mb-6 text-blue-400 mx-auto" />
                <h3 className="text-2xl font-semibold mb-3 text-blue-200">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="w-full py-20 px-4 bg-gray-900" id="services">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-5xl font-bold mb-16 text-center text-blue-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Dominate Your Industry
          </motion.h2>
          <div className="relative h-96">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentServiceIndex}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 1 }}
              >
                <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden h-full">
                  <div className="relative h-2/3">
                    <Image
                      src={services[currentServiceIndex].image}
                      alt={services[currentServiceIndex].name}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
                      {/* <services[currentServiceIndex].icon className="text-7xl text-white" /> */}
                    </div>
                  </div>
                  <div className="p-2 h-1/8">
                    <h3 className="text-2xl font-semibold mb-2 text-blue-200">{services[currentServiceIndex].name}</h3>
                    <p className="text-gray-400 mb-2">Conquer the {services[currentServiceIndex].name.toLowerCase()} sector with our tailored financing.</p>
                    <Link href={services[currentServiceIndex].route} className="inline-block bg-blue-600 text-white  px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <button 
              onClick={prevService} 
              className="absolute  ml-4 left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 focus:outline-none"
              aria-label="Previous service"
            >
              <FaArrowLeft className="text-2xl" />
            </button>
            <button 
              onClick={nextService} 
              className="absolute mr-4 right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 focus:outline-none"
              aria-label="Next service"
            >
              <FaArrowRight className="text-2xl" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Tabs */}
      <section className="w-full py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-5xl font-bold mb-16 text-center text-blue-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            >
            Unrivaled Offerings
          </motion.h2>
          <div className="flex justify-center mb-12">
            {['Lightning Speed', 'Ultimate Flexibility', 'Expert Guidance'].map((tab, index) => (
              <motion.button
                key={index}
                className={`px-8 py-4 mr-4 rounded-full text-lg ${activeTab === index ? 'bg-blue-600 text-white' : 'bg-gray-700 text-blue-300'}`}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>
          <motion.div
            className="bg-gray-700 p-10 rounded-lg shadow-lg"
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 0 && (
              <div className="flex items-center">
                <FaClock className="text-7xl text-blue-400 mr-8" />
                <div>
                  <h3 className="text-3xl font-semibold mb-3 text-blue-200">24-48 Hour Approvals</h3>
                  <p className="text-xl text-gray-300">Seize opportunities at breakneck speed with our rapid approval process.</p>
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div className="flex items-center">
                <FaCalendarAlt className="text-7xl text-blue-400 mr-8" />
                <div>
                  <h3 className="text-3xl font-semibold mb-3 text-blue-200">Flexible Terms 12-72 Months</h3>
                  <p className="text-xl text-gray-300">Customize your financing to dominate your market on your terms.</p>
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className="flex items-center">
                <FaChartLine className="text-7xl text-blue-400 mr-8" />
                <div>
                  <h3 className="text-3xl font-semibold mb-3 text-blue-200">A-D Credit Financing</h3>
                  <p className="text-xl text-gray-300">Our financial wizards craft optimal solutions across the credit spectrum.</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-5xl font-bold mb-16 text-center text-blue-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Success Stories
          </motion.h2>
          <motion.div 
            className="bg-gray-800 p-10 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <p className="text-2xl text-gray-300 mb-6">"Vista Pacific Capital's financing solutions were the rocket fuel our company needed. Their lightning-fast approval and flexible terms enabled us to scale our operations and crush our competition."</p>
              <p className="text-blue-400 font-semibold text-xl">- John Doe, CEO of TechTitan Industries</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Finance Calculator */}
      <section className="w-full py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-5xl font-bold mb-16 text-center text-blue-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Power Up Your Finances
          </motion.h2>
          <motion.div 
            className="bg-gray-700 p-10 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Add your finance calculator component here */}
            <p className="text-center text-gray-300 text-xl">Our cutting-edge finance calculator is in development. Stay tuned to crunch your numbers and visualize your financial domination!</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-blue-900 text-white py-24 px-4" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Conquer Your Market?
          </motion.h2>
          <motion.p
            className="text-2xl mb-10"
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
            <Link href="/contact" className="bg-white text-blue-900 py-4 px-10 rounded-full text-xl font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-3xl" /> Ignite Your Growth
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}