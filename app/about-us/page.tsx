"use client";

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaAward, FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';

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

const teamMembers = [
  {
    name: 'Alan Johnson',
    role: 'CEO & Founder',
    bio: 'With over 20 years of experience in the finance industry, Alan founded Vista Pacific Capital with a mission to help businesses of all sizes acquire the equipment they need to grow. His expertise and dedication are the driving forces behind our success.',
    image: '/Images/alan-johnson.jpg',
    email: 'alanj@vistapacificcapital.com',
    phone: '(714) 500-7017',
  },
];

const testimonials = [
  {
    quote: "Vista Pacific Capital made the financing process seamless and straightforward. We got the equipment we needed faster than we thought possible.",
    author: "John Doe, ABC Construction",
  },
  {
    quote: "The team is knowledgeable, professional, and truly cares about their clients' success. I highly recommend them.",
    author: "Jane Smith, Smith Manufacturing",
  }
];

export default function AboutUsPage() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <motion.section
        className="relative w-full overflow-hidden pt-20 sm:pt-24 lg:pt-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="absolute inset-0">
          <Image
            src="/Images/gen-ai/bg-wave-7.png"
            alt="Vista Pacific Capital office"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D3853]/05 via-[#0D3853]/02 to-[#0EB5B2]/02" />
        </div>
        <div className="relative w-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 py-32 w-full text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#F2F2F2] to-[#B3B3B3] mb-6"
              variants={fadeInUp}
            >
              About Vista Pacific Capital
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-[#F2F2F2]/90"
              variants={fadeInUp}
            >
              Your trusted partner in equipment financing. We're dedicated to helping your business thrive.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                  text-white px-8 py-4 rounded-lg font-semibold text-lg 
                  shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
                  transform hover:-translate-y-1 transition-all duration-300"
              >
                Get in Touch
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0EB5B2]/20 to-[#0D3853]/20"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Our Story Section */}
        <motion.section
          id="our-story"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D3853]">Our Story</h2>
            <p className="mt-4 text-lg text-[#0D3853]/80 max-w-3xl mx-auto">
              How Vista Pacific Capital came to be.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-lg text-[#0D3853]/80 leading-relaxed border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300">
            <p>
              Founded on the principles of integrity, transparency, and a genuine desire to see businesses succeed, Vista Pacific Capital was established to fill a critical gap in the equipment financing industry. We saw firsthand how difficult it could be for small and medium-sized businesses to get fair, fast, and flexible financing for the essential equipment they needed to operate and grow.
            </p>
            <p className="mt-4">
              Our journey began with a small, dedicated team and a powerful vision: to become the most trusted and reliable financing partner for companies across various sectors. We believe that securing financing shouldn't be a roadblock but a catalyst for success. Today, we are proud to have helped countless businesses achieve their goals by providing tailored financing solutions and unwavering support.
            </p>
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#0D3853]/20 to-[#0EB5B2]/20 my-16"></div>

        {/* Our Team Section */}
        <motion.section
          id="our-team"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-[#0D3853]">Meet Our Team</motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-[#0D3853]/80">The dedicated professionals behind our success.</motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30"
              >
                <div className="relative h-96">
                  {member.image ? (
                    <Image src={member.image} alt={member.name} fill className="object-cover object-center" />
                  ) : (
                    <div className="h-full bg-gradient-to-br from-[#0EB5B2]/20 to-[#0EB5B2]/5 flex items-center justify-center">
                      <FaUser className="text-[#0EB5B2] text-6xl" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#0D3853]">{member.name}</h3>
                  <p className="text-[#0EB5B2] font-semibold">{member.role}</p>
                  <p className="mt-4 text-[#0D3853]/80">{member.bio}</p>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center text-[#0D3853]/80">
                      <FaEnvelope className="text-[#0EB5B2] mr-3" />
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center text-[#0D3853]/80">
                      <FaPhone className="text-[#0EB5B2] mr-3" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#0EB5B2]/20 to-[#0D3853]/20 my-16"></div>

        {/* Memberships & Affiliations Section */}
        <motion.section
          id="memberships"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D3853] mb-4">Memberships & Affiliations</h2>
            <p className="text-lg text-[#0D3853]/80 max-w-2xl mx-auto mb-8">We are proud to be associated with leading industry organizations.</p>
            <div className="flex justify-center items-center space-x-8">
                <div className="flex items-center">
                    <div className="bg-gradient-to-br from-[#0EB5B2]/20 to-[#0EB5B2]/5 rounded-lg p-3 mr-4">
                      <FaAward className="text-4xl text-[#0EB5B2]" />
                    </div>
                    <span className="text-2xl font-semibold text-[#0D3853]">NEFA</span>
                </div>
                <div className="flex items-center">
                    <div className="bg-gradient-to-br from-[#0EB5B2]/20 to-[#0EB5B2]/5 rounded-lg p-3 mr-4">
                      <FaAward className="text-4xl text-[#0EB5B2]" />
                    </div>
                    <span className="text-2xl font-semibold text-[#0D3853]">EFLA</span>
                </div>
            </div>
        </motion.section>

        {/* Section Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#0D3853]/20 to-[#0EB5B2]/20 my-16"></div>

      
        {/* Contact Info Section */}
        <motion.section
          id="contact"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#0D3853] to-[#0EB5B2] text-white rounded-lg shadow-lg p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
            <p className="mt-4 text-lg">
              Ready to discuss your financing needs? Contact us today.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-around items-center text-center md:text-left">
            <div className="flex items-center mb-6 md:mb-0">
              <FaEnvelope className="text-3xl text-[#F2F2F2] mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Email Us</h3>
                <p>alanj@vistapacificcapital.com</p>
              </div>
            </div>
            <div className="flex items-center mb-6 md:mb-0">
              <FaPhone className="text-3xl text-[#F2F2F2] mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Call Us</h3>
                <p>(714) 500-7017</p>
              </div>
            </div>
          
          </div>
        </motion.section>

      </div>

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0EB5B2]/20 to-[#0D3853]/20"></div>

      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden w-full">
        <div className="absolute inset-0">
          <Image 
            src="/Images/cta-background-signing.jpg"
            alt="Modern office environment for equipment financing consultation"
            fill
            className="object-cover"
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D3853]/05 via-[#0D3853]/02 to-[#0EB5B2]/02" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-sm font-semibold text-[#0EB5B2] mb-2 block">GET STARTED TODAY</span>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#B3B3B3]">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-[#F2F2F2]/90 max-w-3xl mx-auto pb-4">
              Let's discuss how we can help your business acquire the equipment it needs to grow and succeed.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                text-white px-8 py-4 rounded-lg font-semibold text-lg 
                shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
                transform hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us Today
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}