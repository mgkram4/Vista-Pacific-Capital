"use client";

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';
import { TEAM_MEMBERS } from '../components/HomePageApplicationForm';
import PageHeader from '../components/PageHeader';

export default function JohnMirabalPage() {
  const router = useRouter();
  
  // Custom submit handler to redirect to John's finance application
  const handleFormSubmit = () => {
    // Store the team member in session storage
    sessionStorage.setItem('teamMember', JSON.stringify(TEAM_MEMBERS.johnMirabal));
    router.push('/john-finance');
  };

  return (
    <div className="bg-gradient-to-br from-[#113E59]/10 to-[#082F4A]/10 min-h-screen font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "John Mirabal",
          "url": "https://www.vistapacificcapital.com/john-mirabal",
          "jobTitle": "Finance Specialist",
          "worksFor": {
            "@type": "Organization",
            "name": "Vista Pacific Capital"
          },
          "telephone": "+17145519955",
          "email": "johnm@vistapacificcapital.com"
        }) }}
      />
      <PageHeader
        title="Equipment Financing Application"
        subtitle="CLICK the button below to start the fast approval process."
        buttonText="Apply Now"
        onButtonClick={handleFormSubmit}
        backgroundImage="/Images/bg-wave2.png"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Click to Apply Button - Sticky on desktop, normal on mobile */}
          <div className="lg:order-2 lg:sticky lg:top-8 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-[#113E59] mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                Complete this simple no-financials application to get pre-approved for equipment financing.
              </p>
              <button
                onClick={handleFormSubmit}
                className="w-full inline-block bg-[#0EB5B2] text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-[#0D3853] transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Click to Apply
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Complete this simple no-financials form. We will respond within 2 business days.
              </p>
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
                <h2 className="text-2xl md:text-3xl font-bold ml-4 text-[#113E59]">John Mirabal</h2>
              </div>
              <p className="text-gray-600 mb-6">
                As your dedicated finance specialist, I'm here to help you secure the equipment financing 
                you need with the best terms possible. With years of experience in the industry, 
                I'll guide you through the entire process.
              </p>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-[#11B5B2]/10 rounded-lg">
                  <FaPhone className="text-[#1E5470] text-xl" />
                  <p className="ml-4 text-gray-700 font-medium">{TEAM_MEMBERS.johnMirabal.phone}</p>
                </div>
                <div className="flex items-center p-4 bg-[#11B5B2]/10 rounded-lg">
                  <FaEnvelope className="text-[#1E5470] text-xl" />
                  <p className="ml-4 text-gray-700 font-medium">{TEAM_MEMBERS.johnMirabal.email}</p>
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
