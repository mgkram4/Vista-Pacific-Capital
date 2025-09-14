"use client"

import { motion } from 'framer-motion';
import {
    Clock,
    DollarSign,
    Heart,
    Shield,
    Users,
    Zap
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChartLine, FaHandshake, FaMoneyBillWave, FaRocket, FaUserFriends } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import PageHeader from '../components/PageHeader';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function VendorPrograms() {
  const benefits = [
    {
      title: 'Increased Sales Potential',
      description: 'Offer financing options to customers who may not have the capital to purchase equipment outright.',
      icon: FaChartLine,
    },
    {
      title: 'Improved Cash Flow',
      description: 'Get paid quickly upon equipment delivery, reducing accounts receivable and improving your cash flow.',
      icon: FaMoneyBillWave,
    },
    {
      title: 'Enhanced Customer Relationships',
      description: 'Provide added value to your customers by offering flexible financing solutions.',
      icon: FaHandshake,
    },
    {
      title: 'Streamlined Process',
      description: 'Our easy-to-use online portal simplifies the application and approval process.',
      icon: FaRocket,
    },
    {
      title: 'Dedicated Support',
      description: 'Work with our experienced team to create customized financing programs for your business.',
      icon: FaUserFriends,
    },
  ];

  const vendorSupport = [
    {
        title: 'Help Convert More Sales with Seamless Financing Options',
        description: 'Easy-to-integrate financing solutions with flexible payment options for customers and right-time financing for equipment upgrades and operational expansion.',
        icon: Zap
    },
    {
        title: 'A Great Alternative to Cash',
        description: 'Minimal advance payment requirements that preserve capital for customers and enable growth without draining cash reserves.',
        icon: DollarSign
    },
    {
        title: 'We Have Options for Every Customer',
        description: 'Solutions for customers who avoid traditional banking, competitive rate shopping options, complex and story-based transaction handling, and one-stop shop positioning.',
        icon: Users
    },
    {
        title: 'Quick Approvals & Clear Communication',
        description: 'Streamlined approval process in few business days with real-time status updates throughout the process and full transparency from application to funding.',
        icon: Clock
    },
    {
        title: 'No Costs to You',
        description: 'Zero fees for vendor services with full-service financing management and end-to-end support from application to funding.',
        icon: Shield
    },
    {
        title: 'A Long-Term Capital Partner for Your Business',
        description: 'Ongoing partnership commitment with scalable solutions from small purchases to large expansions and comprehensive financing needs coverage.',
        icon: Heart
    }
];

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <PageHeader
        title="Vendor Programs"
        subtitle="Focus on the selling, we'll handle the financing"
        buttonText="Become a Partner"
        buttonHref="/apply"
        backgroundImage="/Images/office.png"
      />

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0EB5B2]/20 to-[#0D3853]/20"></div>





      {/* How We Support Equipment Vendors */}
      <section className="py-24 px-4">
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-[#0D3853] mb-12 text-center">How We Support Equipment Vendors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vendorSupport.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-lg shadow-lg border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-[#0EB5B2] to-[#0D3853] rounded-lg mr-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-[#0D3853]">{item.title}</h4>
                  </div>
                  <p className="text-[#0D3853]/80 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0D3853]/20 to-[#0EB5B2]/20"></div>

      {/* Benefits Section */}
    
      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0EB5B2]/20 to-[#0D3853]/20"></div>

      {/* How It Works Section */}
   

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0D3853]/20 to-[#0EB5B2]/20"></div>

      {/* CTA Section */}
      <section className="relative py-24 px-4 overflow-hidden w-full">
        <div className="absolute inset-0">
          <Image 
            src="/Images/bg-wave2.png"
            alt="Modern office background"
            fill
            className="object-cover"
            quality={75}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-sm font-semibold text-[#0EB5B2] mb-2 block">JOIN OUR NETWORK</span>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#B3B3B3]">
              Ready to Become a Vista Pacific Capital Vendor Partner?
            </h2>
            <p className="text-xl text-[#F2F2F2]/90 max-w-3xl mx-auto">
              Join our Vendor Program today and start offering your customers flexible financing solutions that can help grow your business.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/vendor-form/" className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                text-white px-8 py-4 rounded-lg font-semibold text-lg 
                shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
                transform hover:-translate-y-1 transition-all duration-300">
                <GiReceiveMoney className="mr-3 text-2xl" />
                <span>Sign Up Now</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
