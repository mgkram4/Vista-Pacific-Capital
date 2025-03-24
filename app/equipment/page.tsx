"use client"

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';
import { FaIndustry, FaMedkit, FaRecycle, FaTools, FaTruck, FaUtensils } from 'react-icons/fa';
import { GiCrane, GiDrill } from 'react-icons/gi';
import { MdOutlineConstruction } from 'react-icons/md';

// Define the equipment categories based on your menu
const equipmentCategories = [
  {
    title: 'Construction Equipment',
    description: 'Finance excavators, bulldozers, loaders, and more with competitive rates.',
    icon: MdOutlineConstruction,
    image: 'https://images.unsplash.com/photo-1621922688758-359fc864071e',
    link: '/equipment/construction'
  },
  {
    title: 'Medical Equipment',
    description: 'Fund the latest medical technology and equipment for your practice.',
    icon: FaMedkit,
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67',
    link: '/equipment/medical'
  },
  {
    title: 'Restaurant Equipment',
    description: 'Get the commercial kitchen equipment you need to serve your customers.',
    icon: FaUtensils,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    link: '/equipment/restaurant'
  },
  {
    title: 'Used Equipment',
    description: 'Save costs with quality used equipment financing options.',
    icon: FaRecycle,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
    link: '/equipment/used'
  },
  {
    title: 'Brewery Equipment',
    description: 'Finance brewing systems and packaging equipment for your brewery.',
    icon: FaIndustry,
    image: 'https://images.unsplash.com/photo-1532634733-cae1395e440f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJyZXdpbmclMjBiZWVyfGVufDB8fDB8fHww',
    link: '/equipment/brewery'
  },
  {
    title: 'Crane Financing',
    description: 'Secure financing for mobile and tower cranes for your construction business.',
    icon: GiCrane,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd',
    link: '/equipment/crane'
  },
  {
    title: 'Dental Equipment',
    description: 'Fund state-of-the-art dental equipment and technology.',
    icon: FaMedkit,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09',
    link: '/equipment/dental'
  },
  {
    title: 'Excavator Financing',
    description: 'Get flexible financing options for excavators of all sizes.',
    icon: GiDrill,
    image: 'https://images.unsplash.com/photo-1667841680566-3007c4f1ca51?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/equipment/excavator'
  },
  {
    title: 'Dump Truck Financing',
    description: 'Finance dump trucks with competitive rates and terms.',
    icon: FaTruck,
    image: 'https://images.unsplash.com/photo-1646927509523-3885bbf172b0?q=80&w=1056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/equipment/dump-truck'
  },
  {
    title: 'Box Truck Financing',
    description: 'Finance box trucks for your delivery or moving business.',
    icon: FaTruck,
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c',
    link: '/equipment/box-truck'
  },
  {
    title: 'CNC Machine Financing',
    description: 'Fund CNC machines and manufacturing equipment for your business.',
    icon: FaTools,
    image: 'https://images.unsplash.com/photo-1674453450405-b2d71e482e80?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNuYyUyMG1pbGxpbmclMjBtYWNoaW5lfGVufDB8fDB8fHww',
    link: '/equipment/cnc-machine'
  }
];

export default function EquipmentFinancingPage() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="w-full bg-indigo-dye text-white py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1"
            alt="Equipment financing background"
            fill
            sizes="100vw"
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0aGhocHxkYHBwYGRgcIiEcHh4cISEhHBwcJCQlHCwvMTExLzkqOio5LzkxMTn/2wBDARUXFx0ZHTgcHDg5LiEuOTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTn/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            priority
          />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Equipment Financing Solutions
          </motion.h1>
          <motion.p
            className="text-2xl mb-12 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Whether you're in construction, medical, restaurant, or manufacturing, we offer flexible financing options for all your equipment needs. With quick approvals and competitive rates, we ensure you get the equipment you need to grow your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white
                          bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700
                          rounded-lg shadow-xl hover:shadow-orange-500/20 transition-all duration-300
                          group relative overflow-hidden">
              <span>Get Financing Today</span>
              <ChevronRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Equipment Categories Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center text-indigo-dye"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Explore Our Equipment Financing Options
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <Link href={category.link}>
                  <div className="relative h-48">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      style={{objectFit: "cover"}}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-indigo-dye bg-opacity-60 flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <category.icon className="text-6xl text-white" />
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <motion.h3 
                      className="text-xl font-bold text-indigo-dye mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 + 0.1 }}
                      viewport={{ once: true }}
                    >
                      {category.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      {category.description}
                    </motion.p>
                    <motion.div 
                      className="mt-4 flex items-center text-light-sea-green font-medium"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <span>Learn more</span>
                      <ChevronRight className="ml-1 w-5 h-5" />
                    </motion.div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2lnbiUyMHBhcGVyfGVufDB8fDB8fHww"
            alt="Modern office background"
            fill
            style={{objectFit: "cover"}}
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B365D]/95 via-[#1B365D]/90 to-[#48B0B0]/80 " />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-8">
            <motion.span 
              className="text-sm font-semibold text-cyan-400 mb-2 block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              GET STARTED TODAY
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Ready to Finance Your Equipment?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100/90 max-w-3xl mx-auto pb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Get pre-qualified in minutes with no impact to your credit score
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                  text-white px-8 py-4 rounded-lg font-semibold text-lg 
                  shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 
                  transform hover:-translate-y-1 transition-all duration-300"
              >
                Apply Now
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}