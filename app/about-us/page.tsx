"use client";

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';
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

const teamMembers = [
  {
    name: 'Alan Johnson',
    role: 'CEO & Founder',
    bio: "Alan Johnson, a graduate of California State University, Fullerton, grew up in Northern California and later moved to Southern California. He now resides in Orange County, CA, with his wife and two children. With over 20 years of experience in the finance industry, Alan founded Vista Pacific Capital to combine best practices with a people-first approach, adapting to changes in technology, the commercial marketplace, and lending institutions.\n\nOutside of work, Alan enjoys living an active lifestyle and spending time with family and friends. His goal is simple: to build a company that works hard for its customers, fosters strong relationships, and stays true to its values.",
    image: '/Images/alan-johnson.jpg',
    email: 'alanj@vistapacificcapital.com',
    phone: '(714) 500-7017',
  },
];

const affiliations = [
    {
      name: 'NEFA',
      logo: '/Images/vendor/nefa.png',
      url: 'https://www.nefassociation.org/'
    },
    {
      name: 'ELFA',
      logo: '/Images/vendor/elfa.png',
      url: 'https://www.elfaonline.org/'
    },
    {
      name: 'AACFB',
      logo: '/Images/vendor/aacfb.png',
      url: 'https://aacfb.org/home'
    }
  ];

export default function AboutUsPage() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <PageHeader
        title="About Vista Pacific Capital"
        subtitle="Your trusted partner in equipment financing. We're dedicated to helping your business thrive."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />

      {/* Section Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-[#0EB5B2]/20 to-[#0D3853]/20"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Who We Are Section */}
        <motion.section
          id="who-we-are"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D3853]">Who We Are</h2>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-lg text-[#0D3853]/80 leading-relaxed border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30 transition-all duration-300">
            <p>
            <strong>Vista Pacific Capital is a bonded commercial finance brokerage</strong> committed to transparency, accountability, and long-term relationships. We're more than just a finance company — we're a service-driven team focused on <strong>making equipment financing easy, fast, and reliable.</strong>
            </p>
            <p className="mt-4">
            Our portfolio is built on a blend of repeat customers and trusted vendor referrals — a reflection of the strong relationships we’ve earned over time. Whether you're an established enterprise or a growing business just getting started, we tailor each solution to fit your unique needs and deliver the best programs available.
            </p>
            <p className="mt-4">
            We take pride in offering quick turnarounds, flexible structures, and a clear, straightforward process — because financing shouldn’t be complicated.
            </p>
            <p className="mt-4">
            Our commitment extends beyond customers. We foster a positive, balanced work environment where our employees thrive. In an industry often driven solely by profit, we focus on people — bringing integrity, clarity, and optimism to every interaction.
            </p>
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#0D3853]/20 to-[#0EB5B2]/20 my-16"></div>

        {/* About the Founder Section */}
        <motion.section
          id="about-founder"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-[#0D3853]">About the Founder</motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30"
              >
                <div className="flex flex-col md:flex-row items-center">
                    <div className="relative h-96 w-full md:w-1/3">
                        {member.image ? (
                        <Image src={member.image} alt={member.name} layout="fill" className="object-contain" />
                        ) : (
                        <div className="h-full bg-gradient-to-br from-[#0EB5B2]/20 to-[#0EB5B2]/5 flex items-center justify-center">
                            <FaUser className="text-[#0EB5B2] text-6xl" />
                        </div>
                        )}
                    </div>
                    <div className="p-6 md:w-2/3">
                        <h3 className="text-2xl font-bold text-[#0D3853]">{member.name}</h3>
                        <p className="text-[#0EB5B2] font-semibold">{member.role}</p>
                        <p className="mt-4 text-[#0D3853]/80 whitespace-pre-line">{member.bio}</p>
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
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#0D3853]/20 to-[#0EB5B2]/20 my-16"></div>

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
                {affiliations.map(aff => (
                    <a key={aff.name} href={aff.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Image src={aff.logo} alt={`${aff.name} logo`} width={150} height={75} className="object-contain" />
                    </a>
                ))}
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
