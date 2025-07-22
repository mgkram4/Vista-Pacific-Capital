'use client';

import { motion } from 'framer-motion';
import {
    Building2,
    CheckCircle2,
    ChevronRight,
    Clock,
    Cog,
    DollarSign,
    Factory,
    LucideIcon,
    Stethoscope,
    Truck,
    UtensilsCrossed
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  href: string;
  imageSrc: string;
}

interface Stat {
  value: string;
  label: string;
  description: string;
}

interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
}

const services: Service[] = [
  {
    title: "Material Handling Equipment Financing",
    description: "Complete financing solutions for warehouse and material handling equipment with flexible terms.",
    features: ["New or refurbished racking systems", "Labor and installation cost included", "Application only financing up to $500,000", "Can included other items (security equipment, forklifts, etc)", "Projects up to $10 million"],
    icon: Factory,
    href: "/equipment/construction",
    imageSrc: "/Images/services/material-handling-new.jpg"
  },
  {
    title: "Construction Equipment Financing",
    description: "Comprehensive financing for construction equipment from dealers or private parties.",
    features: ["New and Use Equipment", "Dealer or private party", "Title or non-titled", "Application Only up to $750,000"],
    icon: Building2,
    href: "/equipment/construction",
    imageSrc: "/Images/services/construction-new.jpg"
  },
  {
    title: "Medical Equipment Financing",
    description: "Specialized financing for medical practices of all sizes with flexible application limits.",
    features: ["New and Used Medical Equipment", "Funding for specialized equipment", "Refurbished equipment is okay", "Small practices to large surgery centers", "Special Application Only limits for MD's"],
    icon: Stethoscope,
    href: "/equipment/medical",
    imageSrc: "/Images/services/medical-new.jpg"
  },
  {
    title: "Manufacturing Equipment Financing",
    description: "Comprehensive manufacturing equipment financing with competitive rates and international vendor support.",
    features: ["Full Production Line Programs", "Can finance from international vendors", "Installation and shipping costs included", "Aggressive rates"],
    icon: Cog,
    href: "/equipment/cnc-machine",
    imageSrc: "/Images/services/manufacturing-new.jpg"
  },
  {
    title: "Restaurant Equipment Financing",
    description: "Complete restaurant financing solutions for new locations and equipment upgrades.",
    features: ["Furniture, POS, kitchen equipment", "New and used equipment", "Second locations and existing locations", "A through C Credit"],
    icon: UtensilsCrossed,
    href: "/equipment/restaurant",
    imageSrc: "/Images/services/restaurant-new.jpg"
  },
  {
    title: "Transportation Financing Programs",
    description: "Flexible transportation financing for all types of commercial vehicles and drivers.",
    features: ["Long and short haul", "New and used", "Dealer or private party", "No fleet requirement", "1099 drivers up to $250,000 with comparable borrowing"],
    icon: Truck,
    href: "/equipment/dump-truck",
    imageSrc: "/Images/services/transportation-new.jpg"
  }
];

const stats: Stat[] = [
  {
    value: "$20M",
    label: "Maximum Funding",
    description: "Financing from $20,000 to $20 million"
  },
  {
    value: "A-C",
    label: "Credit Types",
    description: "A through C Credit accepted"
  },
  {
    value: "Fast",
    label: "Quick Approval",
    description: "Streamlined approval process"
  },
  {
    value: "100%",
    label: "Equipment Types",
    description: "New and used equipment available"
  }
];

const benefits: Benefit[] = [
  {
    title: "Financing Solutions",
    description: "Industry-leading solutions with our comprehensive funding programs.",
    icon: DollarSign,
    points: ["Terms up to 84 months", "Access to as many as 15 different lenders", "No money down for qualified customers", "Competitive Rates", "New and Used Equipment"]
  },
  {
    title: "Quick Approval Process",
    description: "Fast approvals for qualified application-only transactions.",
    icon: Clock,
    points: ["Simple application process", "Soft credit pull only", "Application Only up to $750,000", "Financing from $20,000 to $20 million"]
  },
  {
    title: "Vendor Partnership Programs",
    description: "Provide easy streamline financing solutions for your customers so they can grow their business.",
    icon: DollarSign,
    points: ["Programs for startup customers", "Vendor Rewards Programs", "Great alternative for customer to cash or local bank", "Prepayment up to 100% prior to completion", "Can cover shipping/training/labor costs"]
  }
];

const industries = [
  'Manufacturing', 'Construction', 'Healthcare', 'Transportation', 
  'Warehouse and Logistics', 'Restaurants and Hospitality', 'Brewing and Distilling'
];

const keyFeatures = [
  { value: '$20M', label: 'Maximum Financing', icon: DollarSign },
  { value: '24-84', label: 'Flexible Terms (Months)', icon: Clock },
  { value: '15+', label: 'Lender Partners', icon: DollarSign },
  { value: 'Fast', label: 'Quick Approval', icon: Clock }
];

// Animation variants
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

export default function ServicesClient() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="w-full bg-indigo-dye text-white py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-2">
          <Image
            src="/Images/bg-wave2.png"
            alt="Services background"
            fill
            className="object-cover object-top"
            loading="lazy"
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive equipment financing solutions tailored to your industry needs
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {industries.map((industry, index) => (
              <span key={index} className="bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                {industry}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-[#0EB5B2]" />
                </div>
                <div className="text-3xl font-bold text-[#0D3853] mb-2">{feature.value}</div>
                <div className="text-gray-600">{feature.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D3853] mb-6">
              Equipment Financing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized financing programs designed for your industry with competitive rates and flexible terms
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.article
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-[#0EB5B2]/30 overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={service.imageSrc}
                    alt={`${service.title} illustration for equipment financing`}
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={75}
                  />
                </div>
                <div className="p-6">
                  <div className="bg-gradient-to-br from-[#0EB5B2]/10 to-[#0D3853]/5 rounded-lg p-3 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-[#0EB5B2]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D3853] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-[#0EB5B2] mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="inline-flex items-center font-semibold text-[#0EB5B2] hover:text-[#0D3853] transition-colors">
                    Learn More <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-[#0D3853] text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Vista Pacific Capital</h2>
            <p className="text-xl opacity-90">Industry-leading equipment financing with unmatched service</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#0EB5B2] mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm opacity-80">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D3853] mb-6">
              Benefits & Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financing solutions designed to help your business grow
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-[#0EB5B2]/10 to-[#0D3853]/5 rounded-lg p-4 w-fit mb-6">
                  <benefit.icon className="h-10 w-10 text-[#0EB5B2]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0D3853] mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
                <ul className="space-y-3">
                  {benefit.points.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-[#0EB5B2] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#0EB5B2] to-[#0D3853] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Finance Your Equipment?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get started with our streamlined application process for fast equipment financing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/apply" 
                className="inline-flex items-center px-8 py-4 bg-white text-[#0D3853] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Apply Now <ChevronRight className="h-5 w-5 ml-2" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0D3853] transition-colors"
              >
                Contact Us <ChevronRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 