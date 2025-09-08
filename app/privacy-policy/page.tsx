'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  return (
    <motion.div 
      className="bg-gradient-to-br from-[#113E59]/10 to-[#082F4A]/10 min-h-screen font-sans"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.1
      }}
    >
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pt-20">
        <div className="relative z-20 h-[25vh] md:h-[30vh] flex items-center bg-gradient-to-r from-[#113E59] to-[#0EB5B2]">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            
            <p className="text-gray-600 mb-8">
              <strong>Effective Date:</strong> September 7, 2025<br />
              <strong>Last Updated:</strong> September 7, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#113E59] mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Fill out and submit financing applications</li>
                <li>Request quotes for equipment financing</li>
                <li>Contact us through our website or by phone</li>
                <li>Subscribe to our communications</li>
                <li>Upload documents related to your application</li>
              </ul>
              <p className="text-gray-700 mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Personal information (name, address, phone number, email address)</li>
                <li>Business information (business name, type, address, revenue, years in operation)</li>
                <li>Financial information (Social Security number, Federal Tax ID, credit information)</li>
                <li>Equipment and financing details</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#113E59] mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Process and evaluate your financing applications</li>
                <li>Provide you with quotes and financing options</li>
                <li>Communicate with you about your applications and our services</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our services and website functionality</li>
                <li>Send you occasional updates about our services (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#113E59] mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Lenders and Financial Partners:</strong> To process your financing applications</li>
                <li><strong>Credit Bureaus:</strong> To obtain credit reports and verify information</li>
                <li><strong>Service Providers:</strong> Who assist us in operating our business</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
              </ul>
              <p className="text-gray-700">
                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#113E59] mb-4">4. Data Security</h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#113E59] mb-4">5. Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Access and update your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request deletion of your personal information (subject to legal requirements)</li>
                <li>File a complaint with appropriate regulatory authorities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#113E59] mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700">
                Our website uses cookies and similar tracking technologies to improve your browsing experience, analyze website traffic, and understand where our visitors are coming from. You can control cookies through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#113E59] mb-4">7. SMS/Text Messaging</h2>
              <p className="text-gray-700">
                By providing your phone number and consenting to receive text messages, you agree to receive occasional automated text messages from Vista Pacific Capital regarding your application. Message frequency may vary. Message and data rates may apply. You can opt-out at any time by replying STOP. Reply HELP for more information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#113E59] mb-4">8. Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#113E59] mb-4">9. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-[#11B5B2]/10 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Vista Pacific Capital</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  180 N Riverview Dr #360<br />
                  Anaheim, CA 92808
                </p>
                <p className="text-gray-700 mb-2">
                  Phone: <a href="tel:+17145007017" className="text-[#0EB5B2] hover:underline">(714) 500-7017</a>
                </p>
                <p className="text-gray-700">
                  Email: <a href="mailto:alanj@vistapacificcapital.com" className="text-[#0EB5B2] hover:underline">alanj@vistapacificcapital.com</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#113E59] mb-4">10. Fair Credit Reporting Act Notice</h2>
              <p className="text-gray-700">
                By submitting an application, you authorize Vista Pacific Capital to obtain information from your personal credit profile or other information from credit bureaus. We will use this information solely to prequalify you for equipment financing/leases or small business finance/working capital. The Federal Equal Credit Opportunity Act prohibits creditors from discriminating against credit applicants on the basis of race, color, religion, national origin, sex, marital status, age (provided the applicant has the capacity to enter into a binding contract); because all or part of the applicant's income derives from any public assistance program; or because the applicant has in good faith exercised any right under the Consumer Credit Protection Act.
              </p>
            </section>

          </div>
        </div>
      </div>
    </motion.div>
  );
}
