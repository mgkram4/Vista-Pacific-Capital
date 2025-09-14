"use client"

import { motion } from 'framer-motion';
import {
    Building2,
    CheckCircle2,
    ChevronRight,
    Clock,
    Cog,
    DollarSign,
    Factory,
    type LucideIcon,
    Stethoscope,
    Truck,
    UtensilsCrossed
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ServicesCarousel from './ServicesCarousel';

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  href: string;
  imageSrc: string;
}

interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
}

interface Stat {
  value: string;
  label: string;
  description: string;
}

interface FAQ {
  q: string;
  a: string;
}

const services: Service[] = [
  {
    title: "Racks",
    description: "Financing for warehouse racks and equipment.",
    features: ["New & refurbished systems", "Labor & installation included", "Application-only up to $500,000"],
    icon: Factory,
    href: "/equipment/racks",
    imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Construction",
    description: "Financing for construction equipment from dealers or private parties.",
    features: ["New & used equipment", "Dealer or private party sales", "Application-only up to $750,000"],
    icon: Building2,
    href: "/equipment/construction",
    imageSrc: "https://5ycd9odhqw.ufs.sh/f/7JQdB1yagFle5yqq6OwWivOgUaMDFJpuPze7rjHXN4YZo01w"
  },
  {
    title: "Medical",
    description: "Specialized financing for medical practices of all sizes.",
    features: ["New & used medical equipment", "Funding for specialized equipment", "Solutions for all practice sizes"],
    icon: Stethoscope,
    href: "/equipment/medical",
    imageSrc: "/Images/medH.png"
  },
  {
    title: "Manufacturing",
    description: "Financing for manufacturing equipment with competitive rates.",
    features: ["Full production line programs", "International vendors supported", "Installation & shipping included"],
    icon: Cog,
    href: "/equipment/cnc-machine",
    imageSrc: "https://images.unsplash.com/photo-1526290766257-c015850e4629?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y25jJTIwbWlsbGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Restaurant",
    description: "Financing solutions for new locations and equipment upgrades.",
    features: ["Furniture, POS & kitchen equipment", "New & used equipment", "All credit types considered"],
    icon: UtensilsCrossed,
    href: "/equipment/restaurant",
    imageSrc: "https://images.unsplash.com/photo-1735599051587-6c13bb858214?q=80&w=1147&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Transportation",
    description: "Flexible financing for all types of commercial vehicles.",
    features: ["Long & short haul", "New & used vehicles", "Dealer or private party sales"],
    icon: Truck,
    href: "/equipment/dump-truck",
    imageSrc: "https://images.unsplash.com/photo-1610831499021-8d206e50bbb6?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const stats: Stat[] = [
  {
    value: "$50M",
    label: "Maximum Funding",
    description: "Comprehensive financing solutions from $20,000 to $50 million for businesses of all sizes"
  },
  {
    value: "A-C",
    label: "Credit Types",
    description: "We work with all credit profiles - from excellent A credit to rebuilding C credit businesses"
  },
  {
    value: "24hrs",
    label: "Fast Approval",
    description: "Quick decisions with funding available next business day for qualified applications"
  },
  {
    value: "15+",
    label: "Lender Network",
    description: "Access to over 15 specialized lenders ensuring competitive rates and flexible terms"
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
    title: "Quick Approval Time",
    description: "Fast approvals for qualified application-only transactions.",
    icon: Clock,
    points: ["2-minute application", "Soft credit pull only", "Application Only up to $750,000", "Financing from $20,000 to $50 million"]
  },
  {
    title: "Vendor Partnership Programs",
    description: "Provide easy streamline financing solutions for your customers so they can grow their business.",
    icon: DollarSign,
    points: ["Programs for startup customers", "Vendor Rewards Programs", "Great alternative for customer to cash or local bank", "Prepayment up to 100% prior to completion", "Can cover shipping/training/labor costs"]
  }
];

const faqs: FAQ[] = [
  {
    q: "How fast can I get approved?",
    a: "Most applications receive fast approval. Funding typically occurs within 24-48 hours of document completion."
  },
  {
    q: "What credit score do I need?",
    a: "We work with all credit profiles from A through C. Lower scores may require additional documentation."
  },
  {
    q: "What documentation is required?",
    a: "For requests under $400,000, we typically only need a one-page application. Larger amounts may require basic financial statements."
  },
  {
    q: "What are the financing amounts available?",
    a: "We offer equipment financing from $20,000 up to $50 million, with flexible terms and payment options to match your business needs."
  }
];

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
      staggerChildren: 0.1
    }
  }
};

export default function HomePageClient() {

  return (
    <>
      <main className="bg-white font-sans">
        <section className="relative w-full h-[80vh] lg:h-[70vh]">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/Images/bg-wave2.png"
              alt="Scenic coastal view for equipment financing background"
              fill
              priority
              className="object-cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-black/20 lg:hidden" />
          </div>

          {/* Content layout */}
          <div className="relative z-10 lg:grid lg:grid-cols-10 w-full h-full">
            {/* Left content area with overlay */}
            <div className="lg:col-span-3 lg:bg-[#0D3853]/95 text-white flex flex-col justify-center p-8 sm:p-12 lg:p-16 h-full lg:h-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-full max-w-md mx-auto [filter:drop-shadow(0_3px_4px_rgba(0,0,0,0.6))] lg:filter-none"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#F2F2F2] to-[#B3B3B3] mb-6">
                Your Growth 
                  <span className="bg-gradient-to-r from-[#FF6B35] to-[#ff825c] bg-clip-text text-transparent"> Partner</span>
                </h1>
                <p className="text-lg md:text-xl text-white lg:text-[#B3B3B3] mb-8">
                Equipment Financing from $20,000 to $50 million
                </p>
                <Link
                  href="/apply"
                  className="flex w-full max-w-[300px] mx-auto items-center justify-center lg:inline-flex lg:w-auto lg:max-w-none lg:mx-0 bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                    text-white px-8 py-4 rounded-lg font-semibold text-lg 
                    shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
                    transform hover:-translate-y-1 transition-all duration-300"
                >
                  Apply Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>

            {/* Right-side spacer for desktop grid */}
            <div className="hidden lg:block lg:col-span-7">
              {/* This area is transparent, revealing the background image */}
            </div>
          </div>
        </section>
        
        {/* Section Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#0EB5B2]/20 to-[#0D3853]/20"></div>
        
        {/* Benefits Section - Clean Modern Design */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold text-[#0EB5B2] mb-4 block tracking-wider">WHY CHOOSE US</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D3853] mb-6">
                Equipment Financing Made Simple
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fast approvals, competitive rates, and dedicated support for your business growth.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#0EB5B2]/20"
                  >
                    <div className="bg-[#0EB5B2] rounded-2xl p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0D3853] mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{benefit.description}</p>
                    <ul className="space-y-3 text-left">
                      {benefit.points.map((point, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-[#0EB5B2] mt-1 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Section Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#0D3853]/20 to-[#0EB5B2]/20"></div>
        
        {/* Stats Section - Clean Design */}
        <section className="py-20 bg-[#0D3853]">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold text-[#0EB5B2] mb-4 block">BY THE NUMBERS</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by Businesses Nationwide
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Our track record speaks for itself - delivering fast, reliable equipment financing solutions.
              </p>
            </motion.div>
            
            {/* Stats Display - Enhanced Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="bg-gradient-to-br from-[#0EB5B2] to-[#0EB5B2]/80 rounded-2xl p-6 mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-white/90 font-semibold text-lg">{stat.label}</div>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed px-2">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Section Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#0EB5B2]/20 to-[#0D3853]/20"></div>
        
        {/* Equipment Types Section with Carousel */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D3853]">
                Equipment Financing for Your Industry
              </h2>
              <p className="text-lg text-[#B3B3B3] mt-4 max-w-3xl mx-auto">
                We provide tailored equipment financing and business loan solutions for a wide range of industries. Get the capital you need for new or used equipment.
              </p>
            </div>
            
            {/* Services Carousel */}
            <ServicesCarousel services={services} />
          </div>
        </section>
        
        {/* Section Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#0EB5B2]/20 to-[#0D3853]/20"></div>
        
        {/* FAQ Section - adjust spacing here */}
        <section className="py-10 bg-gradient-to-b from-[#F2F2F2] to-white relative overflow-hidden w-full">
          <h2 className="sr-only">Frequently Asked Questions</h2>
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <span className="text-sm font-semibold text-[#0EB5B2] mb-2 block">COMMON QUESTIONS</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0D3853] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-[#B3B3B3]">
                Everything you need to know about equipment financing
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group bg-white rounded-lg p-6
                    transition-all duration-500 transform hover:-translate-y-1
                    border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30
                    shadow-lg hover:shadow-xl hover:shadow-[#0EB5B2]/10"
                >
                  <h3 className="text-xl font-bold text-[#0D3853] mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-[#B3B3B3]">{faq.a}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Section Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#0D3853]/20 to-[#0EB5B2]/20"></div>
        
        {/* Final CTA */}
        <footer className="relative py-10 overflow-hidden w-full">
          <div className="absolute inset-0">
            <Image 
              src="/Images/bg-wave2.png"
              alt="Modern office environment for equipment financing consultation"
              fill
              className="object-cover"
              quality={75}
            />
            <div className="absolute inset-0 bg-black/20 " />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 [filter:drop-shadow(0_3px_4px_rgba(0,0,0,0.6))]"
            >
              <span className="text-sm font-semibold text-[#0EB5B2] mb-2 block">GET STARTED TODAY</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto pb-4">
                Get pre-qualified in minutes with no impact to your credit score
              </p>
              <Link
                href="/apply"
                className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                  text-white px-8 py-4 rounded-lg font-semibold text-lg 
                  shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
                  transform hover:-translate-y-1 transition-all duration-300"
              >
                Apply Now
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </footer>
        <div className="sr-only">
          <h2>Comprehensive Equipment Financing and Business Loans</h2>
          <p>Vista Pacific Capital provides equipment financing solutions for businesses across the United States. We serve all 50 states, including California, Texas, Florida, and New York. Our business equipment loans cover a wide range of industries, from construction and medical to restaurant and manufacturing. We offer quick equipment financing with approvals in as little as 24 hours.</p>
          <h3>Construction and Heavy Equipment</h3>
          <p>Our construction equipment financing programs cover everything from excavators and dump trucks to cranes and other heavy machinery. We work with both new and used equipment vendors.</p>
          <h3>Medical and Dental Equipment</h3>
          <p>We provide medical equipment loans for practices of all sizes. This includes financing for dental equipment, imaging machines, and other specialized healthcare technology.</p>
          <h3>Restaurant and Hospitality</h3>
          <p>Our restaurant equipment financing helps new and existing establishments purchase kitchen equipment, point-of-sale systems, and furniture.</p>
        </div>
      </main>
    </>
  );
} 