import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const PDFForm = dynamic(
  () => import('../pdf-form/page'),
  { ssr: false }
);

export const metadata: Metadata = {
  title: 'Contact Vista Pacific Capital | Equipment Financing Experts',
  description: 'Get in touch with our team for equipment financing solutions.',
};

export default function Contact() {
  return (
    <div className="bg-gradient-to-br from-[#113E59]/10 to-[#082F4A]/10 min-h-screen font-sans">
      {/* Hero Section with Contract Signing Image */}
      <section className="relative w-full overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image 
            src="/Images/contactH.png"
            alt="Contact us for equipment financing"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 h-[40vh] md:h-[40vh] flex items-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            {/* The motion.div for hero content was removed as per the edit hint */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's Get Started
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Ready to secure financing for your equipment? Our team is here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-24 relative z-30 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Quick Quote Form - Sticky on desktop, normal on mobile */}
          <div className="lg:order-2 lg:sticky lg:top-8 mt-10">
            {/* The motion.div for PDFForm was removed as per the edit hint */}
            <PDFForm />
          </div>

          {/* Contact Information */}
          <div className="lg:order-1 space-y-6 md:space-y-8 mt-10">
            {/* The motion.div for contact info was removed as per the edit hint */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#113E59]">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-[#11B5B2]/10 rounded-lg">
                  <FaPhone className="text-[#1E5470] text-xl" />
                  <p className="ml-4 text-gray-700 font-medium">(714)500-7017</p>
                </div>
                <div className="flex items-center p-4 bg-[#11B5B2]/10 rounded-lg">
                  <FaEnvelope className="text-[#1E5470] text-xl" />
                  <p className="ml-4 text-gray-700 font-medium">alanj@vistapacificcapital.com</p>
                </div>
              </div>
            </div>

            {/* The motion.div for "Why Choose Us?" was removed as per the edit hint */}
            <div className="bg-gradient-to-br from-[#113E59] to-[#082F4A] rounded-2xl shadow-xl p-6 md:p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  'Personalized financing consultations',
                  'Solutions for all credit profiles',
                  'Flexible terms from 12 to 72 months',
                  'Financing for both new and used equipment'
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center"
                  >
                    <div className="h-2 w-2 bg-[#11B5B2] rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}