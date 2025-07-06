"use client"

import { motion } from 'framer-motion';
import PaymentCalculator from '../components/PaymentCalculator';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function CalculatorPage() {
  return (
    <main className="bg-[#f8fafc] relative overflow-hidden min-h-screen py-12">
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-8"
        >
          <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-2 block">
            CALCULATE YOUR PAYMENTS
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2b4b] mb-3">
            Equipment Financing Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get instant payment estimates for equipment financing with flexible terms and competitive rates
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <PaymentCalculator />
        </motion.div>
      </div>
    </main>
  );
} 