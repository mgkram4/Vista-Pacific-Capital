'use client';

import { motion } from 'framer-motion';
import { Factory, Hammer, Microscope, Truck, UtensilsCrossed, Warehouse } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const industries = [
  {
    title: 'Construction Equipment',
    description: 'Heavy machinery and tools for building and infrastructure projects. From excavators to cranes, we finance the equipment that builds America.',
    icon: Hammer,
    href: '/equipment/construction',
    features: ['Excavators & Bulldozers', 'Cranes & Lifting Equipment', 'Road Construction', 'Material Handling']
  },
  {
    title: 'Medical Equipment',
    description: 'Advanced healthcare devices and hospital furnishings. Financing solutions for practices, hospitals, and healthcare facilities.',
    icon: Microscope,
    href: '/equipment/medical',
    features: ['Diagnostic Imaging', 'Surgical Equipment', 'Patient Care', 'Laboratory Equipment']
  },
  {
    title: 'Restaurant Equipment',
    description: 'Commercial kitchen appliances and dining furniture. Complete financing solutions for restaurants, cafes, and food service businesses.',
    icon: UtensilsCrossed,
    href: '/equipment/restaurant',
    features: ['Kitchen Equipment', 'Bar & Beverage', 'POS Systems', 'Food Prep Equipment']
  },
  {
    title: 'Manufacturing Equipment',
    description: 'Industrial machinery and production line systems. CNC machines, automation systems, and manufacturing technology financing.',
    icon: Factory,
    href: '/equipment/cnc-machine',
    features: ['CNC Mills & Lathes', 'Automation Systems', 'Control Systems', 'Tool Systems']
  },
  {
    title: 'Transportation Equipment',
    description: 'Commercial vehicles and logistics solutions. Financing for trucks, trailers, and transportation fleet equipment.',
    icon: Truck,
    href: '/equipment/dump-truck',
    features: ['Dump Trucks', 'Commercial Vehicles', 'Fleet Equipment', 'Trailers & Transport']
  },
  {
    title: 'Racking & Material Handling',
    description: 'Warehouse racking and material handling equipment. Optimize your warehouse operations with our flexible financing solutions.',
    icon: Warehouse,
    href: '/equipment/racks',
    features: ['Warehouse Racking', 'Forklifts', 'Conveyor Systems', 'Automated Systems']
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function IndustriesClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] lg:h-[60vh] pt-20">
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
        
        <div className="relative z-10 lg:grid lg:grid-cols-10 w-full h-full">
          <div className="lg:col-span-4 lg:bg-[#0D3853]/95 text-white flex flex-col justify-center p-8 sm:p-12 lg:p-16 h-full lg:h-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="w-full max-w-md mx-auto [filter:drop-shadow(0_3px_4px_rgba(0,0,0,0.6))] lg:filter-none"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#F2F2F2] to-[#B3B3B3] mb-6">
                Industries We
                <span className="bg-gradient-to-r from-[#FF6B35] to-[#ff825c] bg-clip-text text-transparent"> Finance</span>
              </h1>
              <p className="text-lg md:text-xl text-white lg:text-[#B3B3B3] mb-8">
                Specialized equipment financing solutions across multiple industries
              </p>
            </motion.div>
          </div>
          <div className="hidden lg:block lg:col-span-6"></div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#0D3853] to-[#082F4A] flex items-center justify-center group-hover:from-[#082F4A] group-hover:to-[#0D3853] transition-all duration-300">
                  <industry.icon className="w-16 h-16 text-[#0EB5B2] group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#0D3853]">{industry.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{industry.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#0D3853] mb-2">Equipment Types:</h4>
                    <ul className="space-y-1">
                      {industry.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-[#0EB5B2] rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={industry.href}
                    className="inline-flex items-center bg-gradient-to-r from-[#0EB5B2] to-[#0D3853] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#0D3853] hover:to-[#0EB5B2] transition-all duration-300 group"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <footer className="relative py-10 overflow-hidden w-full">
        <div className="absolute inset-0">
          <Image 
            src="/Images/bg-wave2.png"
            alt="Modern office environment for equipment financing consultation"
            fill
            className="object-cover"
            quality={75}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
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
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
