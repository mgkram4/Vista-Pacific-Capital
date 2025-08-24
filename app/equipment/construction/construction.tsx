// app/construction/construction-content.tsx
"use client"


import PaymentCalculator from '@/app/components/PaymentCalculator';
import { constructionMetadata } from '@/app/lib/metadata';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
    FaCreditCard,
    FaHardHat,
    FaIndustry,
    FaTools, FaTruck,
    FaWarehouse
} from 'react-icons/fa';
import { GiCrane, GiMineTruck, GiReceiveMoney } from 'react-icons/gi';

// Define equipment types with their details
const equipmentTypes = [
  {
    title: 'Earthmoving Equipment',
    description: constructionMetadata.equipment[0].types.join(', ') + ' and more.',
    icon: FaTruck,
    image: 'https://images.unsplash.com/photo-1621922688758-359fc864071e'
  },
  {
    title: 'Lifting Equipment',
    description: constructionMetadata.equipment[1].types.join(', ') + ' and more.',
    icon: GiCrane,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd'
  },
  {
    title: 'Road Construction',
    description: constructionMetadata.equipment[2].types.join(', ') + ' and more.',
    icon: FaIndustry,
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f'
  },
  {
    title: 'Material Handling',
    description: 'Forklifts, telehandlers, and specialized handling equipment.',
    icon: FaWarehouse,
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0'
  },
  {
    title: 'Demolition Equipment',
    description: 'Breakers, crushers, and demolition attachments.',
    icon: FaHardHat,
    image: 'https://images.unsplash.com/photo-1552879890-3a06dd3a06c2?q=80&w=954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Mining Equipment',
    description: 'Heavy-duty mining and quarry equipment.',
    icon: GiMineTruck,
    image: 'https://images.unsplash.com/photo-1586161148512-64a1b3dac527?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

// Statistics display data - updated according to requirements
const stats = [
  { value: '$50M', label: 'Maximum Financing', icon: FaHardHat },
  { value: '24-84', label: 'Flexible Terms (Months)', icon: FaTools },
  { value: 'New & Used', label: 'Equipment Options', icon: GiCrane },
  { value: 'All Credit', label: 'All Credit Scores Welcome', icon: FaCreditCard },
];

export default function ConstructionFinancingContent() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="w-full bg-indigo-dye text-white py-32 px-4 relative overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://5ycd9odhqw.ufs.sh/f/7JQdB1yagFle5yqq6OwWivOgUaMDFJpuPze7rjHXN4YZo01w"
            alt="Construction equipment background"
            fill
            sizes="100vw"
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0aGhocHxkYHBwYGRgcIiEcHh4cISEhHBwcJCQlHCwvMTExLzkqOio5LzkxMTn/2wBDARUXFx0ZHTgcHDg5LiEuOTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTn/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIAAwAAPwCdABmX/9k="
            priority={true}
            loading="eager"
            fetchPriority="high"
            className="object-cover"
          />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="bg-[#0D3853]/85 backdrop-blur-sm rounded-xl p-6 md:p-8 max-w-4xl">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Construction Equipment Financing
            </motion.h1>
            <motion.p
              className="text-2xl mb-12 leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              When it comes to construction projects, having the right equipment can make all the difference. With flexible financing options, from forklifts to bulldozers, our quick approvals and flexible terms ensure you get the equipment you need without breaking your budget.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/apply" className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white
                            bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700
                            rounded-lg shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
                <GiReceiveMoney className="mr-3 text-3xl" />
                <span>Get Financing</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <stat.icon className="text-4xl text-light-sea-green mx-auto mb-4" />
                </motion.div>
                <motion.h3 
                  className="text-3xl font-bold text-indigo-dye mb-2"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 + 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {stat.label}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Types Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center text-indigo-dye"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Equipment We Finance
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-bold text-indigo-dye mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {type.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 + 0.1 }}
                    viewport={{ once: true }}
                  >
                    {type.description}
                  </motion.p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center text-indigo-dye"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Go With Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-gradient-to-br from-[#113E59] to-[#082F4A] rounded-2xl shadow-xl p-6 md:p-8 text-white"
            >
              <motion.h3 
                className="text-2xl font-bold mb-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Why Choose Us?
              </motion.h3>
              <ul className="space-y-4">
                {[
                  'Financing for start-ups and growing businesses',
                  'Simple and streamlined application process',
                  'Flexible terms from 24 to 84 months',
                  'Financing for both new and used equipment',
                  'Dedicated construction equipment specialists',
                  'Competitive rates starting at 4.99%'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-2 w-2 bg-[#11B5B2] rounded-full mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100"
            >
              <motion.h3 
                className="text-2xl font-bold mb-6 text-indigo-dye"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our Advantages
              </motion.h3>
              <ul className="space-y-4">
                {[
                  'Preserve your working capital for other business needs',
                  'Potential tax advantages for your business',
                  'Simplified application process with minimal paperwork',
                  'Dedicated support team throughout the financing process',
                  'Flexible payment options tailored to your cash flow',
                  'No hidden fees or prepayment penalties'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="h-2 w-2 bg-light-sea-green rounded-full mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Calculator Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D3853] mb-4">
              Calculate Your Monthly Payments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get instant payment estimates for your construction equipment financing with our easy-to-use calculator.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <PaymentCalculator />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/Images/cta-background-signing.jpg"
            alt="Modern office background"
            fill
            className="object-cover"
            quality={75}
            priority={false}
            loading="lazy"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D3853]/05 via-[#0D3853]/02 to-[#0EB5B2]/02 " />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div
            className="space-y-8"
          >
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
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Ready to Get Started?
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
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                  text-white px-8 py-4 rounded-lg font-semibold text-lg 
                  shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 
                  transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started Today
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}