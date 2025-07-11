'use client';

import { motion } from 'framer-motion';
import { Clock, DollarSign } from 'lucide-react';
import Image from 'next/image';
import { FaBriefcase, FaIndustry } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

const services = [
  // Copy the services array from the original file
  {
    title: 'Material Handling Equipment Financing',
    description: 'Complete financing solutions for warehouse and material handling equipment with flexible terms.',
    icon: FaIndustry,
    image: '/Images/services/material-handling.jpg', // Updated to local path
  },
  // Add all other services similarly, updating images to local paths
];

const industries = [
  'Manufacturing', 'Construction', 'Healthcare', 'Transportation', 
  'Warehouse and Logistics', 'Restaurants and Hospitality', 'Brewing and Distilling'
];

const keyFeatures = [
  { value: '$20M', label: 'Maximum Financing', icon: DollarSign },
  { value: '24-84', label: 'Flexible Terms (Months)', icon: Clock },
  { value: '15+', label: 'Lender Partners', icon: FaBriefcase },
  { value: 'Fast', label: 'Quick Approval', icon: GiReceiveMoney }
];

export default function ServicesClient() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="w-full bg-indigo-dye text-white py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/Images/hero-background.jpg" // Updated to local
            alt="Services background"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          {/* Rest of the hero content */}
        </div>
      </section>
      {/* Copy and paste the rest of the JSX from the original file, ensuring all images use local paths */}
    </div>
  );
} 