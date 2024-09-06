"use client"

// File: src/pages/index.tsx
import Link from 'next/link';
import { useState } from 'react';
import { FaBeer, FaCalendarAlt, FaChartLine, FaClock, FaCogs, FaHardHat, FaIndustry, FaMedkit, FaTruck, FaWarehouse } from 'react-icons/fa';
import { GiCheckMark, GiHandSaw, GiMoneyStack, GiReceiveMoney, GiRocketFlight, GiSandsOfTime } from 'react-icons/gi';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    { name: 'Medical Equipment', icon: FaMedkit },
    { name: 'Warehouse Racking', icon: FaWarehouse },
    { name: 'Manufacturing Equipment', icon: FaIndustry },
    { name: 'CNC and Machining', icon: FaCogs },
    { name: 'Brewery Equipment', icon: FaBeer },
    { name: 'Construction and Concrete', icon: FaHardHat },
    { name: 'Titled Vehicle Programs', icon: FaTruck },
  ];

  const benefits = [
    { title: "Fast Approval", description: "Approvals in 24-48 hours", icon: GiRocketFlight },
    { title: "Flexible Financing", description: "For NEW and USED equipment", icon: GiHandSaw },
    { title: "High Approval Rate", description: "94.6% Approval Ratio", icon: GiCheckMark },
    { title: "Flexible Terms", description: "Lease Terms 12-72 Months", icon: GiSandsOfTime },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-50">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Empower Your Business Growth</h1>
            <p className="text-xl mb-8">Innovative financing solutions tailored to your industry needs</p>
            <Link href="/contact" className="bg-white text-blue-600 py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300 flex items-center justify-center w-max shadow-lg hover:shadow-xl">
              <GiReceiveMoney className="mr-2 text-2xl" /> Get Started
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-blue-300 rounded-full animate-pulse"></div>
              <GiMoneyStack className="absolute inset-0 m-auto text-white text-6xl md:text-9xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Vista Pacific Capital</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center transform hover:-translate-y-1">
                <benefit.icon className="text-5xl mb-4 text-blue-600 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approval Ratio Highlight */}
      <section className="w-full py-16 bg-blue-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-blue-600 transform -skew-y-6"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-4">94.6% APPROVAL RATIO</h2>
          <p className="text-xl mb-8">See how we maintain our industry-high approval ratio</p>
          <Link href="/approval-process" className="bg-white text-blue-600 py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300 shadow-lg hover:shadow-xl">
            Learn More
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Financing Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <service.icon className="text-5xl mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600">Specialized financing tailored for {service.name.toLowerCase()} industries.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Tabs */}
      <section className="w-full py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Unique Offerings</h2>
          <div className="flex justify-center mb-8">
            {['Fast Process', 'Flexible Options', 'Expert Support'].map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 mr-2 rounded-full ${activeTab === index ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {activeTab === 0 && (
              <div className="flex items-center">
                <FaClock className="text-6xl text-blue-600 mr-6" />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Approvals in 24-48 hours</h3>
                  <p>Get the equipment when you need it the most with our rapid approval process.</p>
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div className="flex items-center">
                <FaCalendarAlt className="text-6xl text-blue-600 mr-6" />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Flexible Terms 12-72 Months</h3>
                  <p>Choose the lease term that best fits your business needs and cash flow.</p>
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div className="flex items-center">
                <FaChartLine className="text-6xl text-blue-600 mr-6" />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Financing for A – D Credit</h3>
                  <p>Our expert team works with businesses across the credit spectrum to find optimal solutions.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8">Lets discuss how our flexible financing solutions can help you achieve your goals.</p>
          <Link href="/contact" className="bg-white text-blue-600 py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl">
            <GiReceiveMoney className="mr-2 text-2xl" /> Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}