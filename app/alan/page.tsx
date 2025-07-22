"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';
import HomePageApplicationForm, { TEAM_MEMBERS } from '../components/HomePageApplicationForm';

export default function AlanPage() {
  const router = useRouter();
  
  // Custom submit handler to redirect to the PDF form
  const handleFormSubmit = () => {
    // Store the team member in session storage
    sessionStorage.setItem('teamMember', JSON.stringify(TEAM_MEMBERS.alan));
    router.push('/pdf-form');
  };

  return (
    <div className="bg-gradient-to-br from-[#113E59]/10 to-[#082F4A]/10 min-h-screen font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Alan Johnson",
          "url": "https://www.vistapacificcapital.com/alan",
          "jobTitle": "Finance Specialist",
          "worksFor": {
            "@type": "Organization",
            "name": "Vista Pacific Capital"
          },
          "telephone": "+17145007017",
          "email": "alanj@vistapacificcapital.com"
        }) }}
      />
      {/* Hero Section with Equipment Financing Image */}
      <section className="w-full relative overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 h-[40vh] md:h-[30vh]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D3853]/05 via-[#0D3853]/02 to-[#0EB5B2]/02 z-10" />
          <Image 
            src="/Images/cta-background-signing.jpg"
            alt="Equipment Financing"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 h-[40vh] md:h-[40vh] flex items-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Equipment Financing Finance Application
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Fill out the form below to get your free finance application and fast approval
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-24 relative z-30 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Application Form - Sticky on desktop, normal on mobile */}
          <div className="lg:order-2 lg:sticky lg:top-8 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <HomePageApplicationForm 
                teamMember={TEAM_MEMBERS.alan} 
                onSubmit={handleFormSubmit} 
              />
            </motion.div>
          </div>

          {/* Agent Information */}
          <div className="lg:order-1 space-y-6 md:space-y-8 mt-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
            >
              <div className="flex items-center mb-6">
                <div className="bg-[#11B5B2]/10 p-3 rounded-full">
                  <FaUser className="text-[#1E5470] text-xl" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold ml-4 text-[#113E59]">Alan Johnson</h2>
              </div>
              <p className="text-gray-600 mb-6">
                As your dedicated finance specialist, I'm here to help you secure the equipment financing 
                you need with the best terms possible. With years of experience in the industry, 
                I'll guide you through the entire process.
              </p>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-[#11B5B2]/10 rounded-lg">
                  <FaPhone className="text-[#1E5470] text-xl" />
                  <p className="ml-4 text-gray-700 font-medium">{TEAM_MEMBERS.alan.phone}</p>
                </div>
                <div className="flex items-center p-4 bg-[#11B5B2]/10 rounded-lg">
                  <FaEnvelope className="text-[#1E5470] text-xl" />
                  <p className="ml-4 text-gray-700 font-medium">{TEAM_MEMBERS.alan.email}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#113E59] to-[#082F4A] rounded-2xl shadow-xl p-6 md:p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">My Commitment to You</h3>
              <ul className="space-y-4">
                {[
                  'Fast approvals within 24-48 hours',
                  'Personalized financing solutions',
                  'Competitive rates and flexible terms',
                  'Support throughout the entire process'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="h-2 w-2 bg-[#11B5B2] rounded-full mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 