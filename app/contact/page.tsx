// File: src/pages/contact.tsx
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

export default function Contact() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl mb-8">We are here to answer your questions and help your business grow</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <p className="mb-8 text-gray-600">We are here to answer any questions you may have about our equipment financing solutions. Reach out to us using the information below:</p>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold mb-4">Vista Pacific Capital</h3>
              <div className="flex items-center mb-3">
                <FaMapMarkerAlt className="text-blue-600 mr-3" />
                <p>2951 Saturn Street, Suite E<br />Brea, CA 92821</p>
              </div>
              <div className="flex items-center mb-3">
                <FaPhone className="text-blue-600 mr-3" />
                <p>(800) 341-1288</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-600 mr-3" />
                <p>info@vistapacificcapital.com</p>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Fast approvals within 24-48 hours</li>
                <li>Flexible terms from 12 to 72 months</li>
                <li>High approval rate of 94.6%</li>
                <li>Financing for both new and used equipment</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
                <input type="text" id="name" name="name" className="w-full p-2 border rounded focus:border-blue-500 focus:ring focus:ring-blue-200" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
                <input type="email" id="email" name="email" className="w-full p-2 border rounded focus:border-blue-500 focus:ring focus:ring-blue-200" required />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-2 font-semibold">Phone</label>
                <input type="tel" id="phone" name="phone" className="w-full p-2 border rounded focus:border-blue-500 focus:ring focus:ring-blue-200" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded focus:border-blue-500 focus:ring focus:ring-blue-200" required></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                <GiReceiveMoney className="mr-2" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="w-full py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.0700215138095!2d-117.89626106703561!3d33.83650307319133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd5c75f2900a3%3A0x28c6c77f5f1f8f6d!2s2951%20Saturn%20St%20Suite%20E%2C%20Brea%2C%20CA%2092821!5e0!3m2!1sen!2sus!4v1695702834592!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{border:0}} 
            
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}