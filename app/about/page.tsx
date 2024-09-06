// File: src/pages/about.tsx
import { FaHandshake, FaLightbulb } from 'react-icons/fa';
import { GiGears, GiMoneyStack } from 'react-icons/gi';

export default function About() {
  const coreValues = [
    { name: "Trust", icon: FaHandshake, description: "Building lasting relationships with our clients through transparency and reliability." },
    { name: "Efficiency", icon: GiGears, description: "Streamlined processes to provide quick and effective financing solutions." },
    { name: "Simplicity", icon: FaLightbulb, description: "Clear, straightforward approaches to complex financial needs." }
  ];

  const stats = [
    { value: "20+", label: "Years of Experience" },
    { value: "$3B+", label: "Equipment Funded" },
    { value: "100+", label: "Industries Served" }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Vista Pacific Capital</h1>
          <p className="text-xl mb-8">Empowering businesses with innovative financing solutions for over two decades</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <p className="mb-4 text-lg">
            Vista Pacific Capital is an independent equipment leasing company providing creative financing solutions to meet the demanding needs of todays growing companies. With over 20 years of experience, we have successfully funded over $3 billion in equipment, empowering companies to grow and thrive.
          </p>
          <p className="mb-4 text-lg">
            We recognize the variety of financing options available in todays marketplace and are confident that our programs, pricing, and experience collectively represent a superior financing alternative. We work closely with related banks and various funding partners, enabling us to offer you the best financing options to help your business grow.
          </p>
          <p className="mb-4 text-lg">
            Our team of experts brings extensive industry knowledge and a commitment to excellence, ensuring that each client receives personalized support and flexible financing options. From start-ups to Fortune 100 businesses, we work across various industries, understanding the unique needs of our clients and helping them secure the capital needed for their success.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-blue-600 text-white rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Core Values Section */}
        <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:transform hover:-translate-y-2">
              <value.icon className="text-5xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{value.name}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8">Lets discuss how our innovative financing solutions can help you achieve your goals.</p>
          <a href="/contact" className="bg-white text-blue-600 py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl">
            <GiMoneyStack className="mr-2 text-2xl" /> Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}