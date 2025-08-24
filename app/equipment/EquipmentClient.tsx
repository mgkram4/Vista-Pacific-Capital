'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Factory, Hammer, Microscope, Truck, UtensilsCrossed, Warehouse } from 'lucide-react';

const equipmentCategories = [
  {
    title: 'Construction Equipment',
    description: 'Heavy machinery and tools for building and infrastructure',
    icon: Hammer,
    href: '/equipment/construction',
    image: '/Images/services/construction-new.jpg',
  },
  {
    title: 'Medical Equipment',
    description: 'Advanced healthcare devices and hospital furnishings',
    icon: Microscope,
    href: '/equipment/medical',
    image: '/Images/services/medical-new.jpg',
  },
  {
    title: 'Restaurant Equipment',
    description: 'Commercial kitchen appliances and dining furniture',
    icon: UtensilsCrossed,
    href: '/equipment/restaurant',
    image: '/Images/services/restaurant-new.jpg',
  },
  {
    title: 'Manufacturing Equipment',
    description: 'Industrial machinery and production line systems',
    icon: Factory,
    href: '/equipment/cnc-machine',
    image: '/Images/services/manufacturing-new.jpg',
  },
  {
    title: 'Transportation Equipment',
    description: 'Commercial vehicles and logistics solutions',
    icon: Truck,
    href: '/equipment/dump-truck',
    image: '/Images/services/transportation-new.jpg',
  },
  {
    title: 'Racking & Material Handling',
    description:
      "Financing for warehouse racking and material handling equipment.",
    icon: Warehouse,
    href: '/equipment/racks',
    image: '/Images/bg-wave2.png',
  },
];

export default function EquipmentClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#113E59]/10 to-[#082F4A]/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-[#113E59]"
        >
          Equipment Financing Categories
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={category.image}
                  alt={`${category.title} financing`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <category.icon className="w-12 h-12 text-[#11B5B2] mb-4" />
                <h2 className="text-xl font-bold mb-2 text-[#113E59]">{category.title}</h2>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link 
                  href={category.href}
                  className="inline-block bg-[#11B5B2] text-white px-6 py-2 rounded-lg hover:bg-[#0F9FA0] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 