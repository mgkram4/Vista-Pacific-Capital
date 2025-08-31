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
      <section className="relative w-full bg-gradient-to-br from-[#0D3853] to-[#082F4A] text-white py-20 px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Industries background"
            fill
            className="object-cover opacity-20"
            quality={85}
            priority={true}
            loading="eager"
            sizes="100vw"
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Industries We Finance
          </motion.h1>
          <motion.p
            className="text-xl mb-12 leading-relaxed max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Specialized equipment financing solutions across multiple industries. 
            From construction to healthcare, we understand your unique equipment needs.
          </motion.p>
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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Industrial equipment background"
            fill
            className="object-cover"
            quality={75}
            priority={false}
            loading="lazy"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D3853]/90 via-[#0D3853]/80 to-[#0EB5B2]/80" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-8">
            <motion.span 
              className="text-sm font-semibold text-cyan-400 mb-2 block"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              GET STARTED TODAY
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Ready to Finance Your Equipment?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100/90 max-w-3xl mx-auto pb-10"
              initial={{ opacity: 0, y: 15 }}
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
        </div>
      </section>
    </div>
  );
}
