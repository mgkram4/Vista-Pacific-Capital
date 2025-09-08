'use client';

import { motion } from 'framer-motion';

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Please read these terms carefully before using our services.
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
              <h2 className="text-2xl font-bold text-[#113E59] mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing and using the Vista Pacific Capital website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#113E59] mb-4">2. Description of Service</h2>
              <p className="text-gray-700">
                Vista Pacific Capital provides equipment financing and business loan services. We act as a broker to connect businesses with appropriate lenders and financing solutions. We do not guarantee approval for any financing application.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#113E59] mb-4">3. Application Process</h2>
              <p className="text-gray-700 mb-4">
                By submitting a financing application through our website, you:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Certify that all information provided is true and accurate</li>
                <li>Authorize us to verify the information provided</li>
                <li>Authorize us to obtain credit reports and financial information</li>
                <li>Understand that we may share your information with potential lenders</li>
                <li>Agree to our Privacy Policy regarding the use of your information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#113E59] mb-4">4. Credit Authorization</h2>
              <p className="text-gray-700">
                By submitting an application, you provide written instructions under the Fair Credit Reporting Act authorizing Vista Pacific Capital to obtain information from your personal credit profile or other information from credit bureaus. This authorization is solely for the purpose of prequalifying you for equipment financing/leases or small business finance/working capital.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#113E59] mb-4">5. Communication Consent</h2>
              <p className="text-gray-700">
                By providing your contact information and submitting forms on our website, you consent to receive communications from Vista Pacific Capital including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Email communications regarding your application and our services</li>
                <li>Automated text messages related to your application</li>
                <li>Phone calls from our team members</li>
              </ul>
              <p className="text-gray-700">
                You may opt-out of communications at any time by following the unsubscribe instructions in emails or replying STOP to text messages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#113E59] mb-4">6. Website Use</h2>
              <p className="text-gray-700 mb-4">
                You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others. You may not:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Submit false or misleading information</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use our website to transmit harmful or malicious code</li>
                <li>Interfere with the proper functioning of our website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#113E59] mb-4">7. Intellectual Property</h2>
              <p className="text-gray-700">
                All content on this website, including text, graphics, logos, images, and software, is the property of Vista Pacific Capital or its licensors and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#113E59] mb-4">8. Disclaimer of Warranties</h2>
              <p className="text-gray-700">
                Our website and services are provided "as is" without any warranties, express or implied. We do not guarantee that our website will be uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#113E59] mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700">
                Vista Pacific Capital shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our website or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#113E59] mb-4">10. Equal Credit Opportunity</h2>
              <p className="text-gray-700">
                The Federal Equal Credit Opportunity Act prohibits creditors from discriminating against credit applicants on the basis of race, color, religion, national origin, sex, marital status, age (provided the applicant has the capacity to enter into a binding contract); because all or part of the applicant's income derives from any public assistance program; or because the applicant has in good faith exercised any right under the Consumer Credit Protection Act.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#113E59] mb-4">11. Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#113E59] mb-4">12. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
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

          </div>
        </div>
      </div>
    </motion.div>
  );
}
