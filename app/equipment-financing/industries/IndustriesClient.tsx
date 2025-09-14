'use client';

import { motion } from 'framer-motion';
import { Factory, Hammer, Microscope, Truck, UtensilsCrossed, Warehouse } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '../../components/PageHeader';

const industries = [
  {
    title: 'Construction Equipment',
    description: 'Financing for construction equipment from dealers or private parties. We provide comprehensive funding solutions for new & used equipment, dealer or private party sales, with application-only financing up to $750,000. From excavators to cranes, we finance the equipment that builds America.',
    icon: Hammer,
    href: '/equipment/construction',
    features: ['New & used equipment', 'Dealer or private party sales', 'Application-only up to $750,000', 'Excavators & Bulldozers', 'Cranes & Lifting Equipment']
  },
  {
    title: 'Medical Equipment',
    description: 'Specialized financing for medical practices of all sizes. We offer funding for new & used medical equipment, specialized equipment financing, and solutions for all practice sizes. Advanced healthcare devices and hospital furnishings for practices, hospitals, and healthcare facilities.',
    icon: Microscope,
    href: '/equipment/medical',
    features: ['New & used medical equipment', 'Funding for specialized equipment', 'Solutions for all practice sizes', 'Diagnostic Imaging', 'Surgical Equipment']
  },
  {
    title: 'Restaurant Equipment',
    description: 'Financing solutions for new locations and equipment upgrades. We provide funding for furniture, POS & kitchen equipment, new & used equipment, with all credit types considered. Complete financing solutions for restaurants, cafes, and food service businesses.',
    icon: UtensilsCrossed,
    href: '/equipment/restaurant',
    features: ['Furniture, POS & kitchen equipment', 'New & used equipment', 'All credit types considered', 'Kitchen Equipment', 'Bar & Beverage']
  },
  {
    title: 'Manufacturing Equipment',
    description: 'Financing for manufacturing equipment with competitive rates. We offer full production line programs, support for international vendors, and installation & shipping included. Industrial machinery and production line systems, CNC machines, automation systems, and manufacturing technology financing.',
    icon: Factory,
    href: '/equipment/cnc-machine',
    features: ['Full production line programs', 'International vendors supported', 'Installation & shipping included', 'CNC Mills & Lathes', 'Automation Systems']
  },
  {
    title: 'Transportation Equipment',
    description: 'Flexible financing for all types of commercial vehicles. We provide financing for long & short haul vehicles, new & used vehicles, dealer or private party sales. Commercial vehicles and logistics solutions for trucks, trailers, and transportation fleet equipment.',
    icon: Truck,
    href: '/equipment/dump-truck',
    features: ['Long & short haul', 'New & used vehicles', 'Dealer or private party sales', 'Dump Trucks', 'Commercial Vehicles']
  },
  {
    title: 'Racking & Material Handling',
    description: 'Financing for warehouse racks and equipment. We provide funding for new & refurbished systems, labor & installation included, with application-only financing up to $500,000. Optimize your warehouse operations with our flexible financing solutions.',
    icon: Warehouse,
    href: '/equipment/racks',
    features: ['New & refurbished systems', 'Labor & installation included', 'Application-only up to $500,000', 'Warehouse Racking', 'Forklifts']
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function IndustriesClient() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        title="Industries We Finance"
        subtitle="Specialized equipment financing solutions across multiple industries"
        buttonText="Get Started"
        buttonHref="/apply"
        backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        highlightWord="Finance"
      />

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
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#0EB5B2]/10 p-3 rounded-lg mr-4">
                      <industry.icon className="w-8 h-8 text-[#0EB5B2]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0D3853]">{industry.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
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
