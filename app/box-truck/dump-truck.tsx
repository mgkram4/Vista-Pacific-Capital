// File: src/pages/services.tsx
import { FaBeer, FaCogs, FaHardHat, FaIndustry, FaMedkit, FaTruck, FaWarehouse } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

export default function Services() {
  const services = [
    {
      title: 'Medical Equipment Financing',
      description: 'Tailored solutions for hospitals, clinics, and healthcare providers.',
      icon: FaMedkit
    },
    {
      title: 'Warehouse Racking Equipment',
      description: 'Flexible financing options for optimizing your storage and logistics.',
      icon: FaWarehouse
    },
    {
      title: 'Manufacturing Equipment',
      description: 'Customized leasing programs for industrial machinery and production lines.',
      icon: FaIndustry
    },
    {
      title: 'CNC and Machining Equipment',
      description: 'Innovative financing for precision engineering and metalworking tools.',
      icon: FaCogs
    },
    {
      title: 'Brewery Equipment',
      description: 'Specialized leasing solutions for craft breweries and large-scale operations.',
      icon: FaBeer
    },
    {
      title: 'Construction and Concrete Equipment',
      description: 'Robust financing options for heavy machinery and construction tools.',
      icon: FaHardHat
    },
    {
      title: 'Titled Vehicle Programs',
      description: 'Comprehensive leasing solutions for commercial vehicles and fleets.',
      icon: FaTruck
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl mb-8">Tailored equipment financing solutions across various industries</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-700">
            At Vista Pacific Capital, we specialize in providing tailored equipment financing solutions across various industries. Our expertise includes:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <service.icon className="text-5xl text-blue-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Fast Approval Process</h3>
              <p>Get your equipment financing approved within 24-48 hours, allowing you to seize opportunities quickly.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Flexible Terms</h3>
              <p>Choose from lease terms ranging from 12 to 72 months, tailored to fit your business cash flow.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">High Approval Rate</h3>
              <p>Benefit from our industry-leading 94.6% approval ratio, making financing accessible to more businesses.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p>Work with our team of industry experts to find the best financing solution for your specific needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Finance Your Equipment?</h2>
          <p className="text-xl mb-8">Lets discuss how our tailored financing solutions can help your business grow.</p>
          <a href="/contact" className="bg-white text-blue-600 py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl">
            <GiReceiveMoney className="mr-2 text-2xl" /> Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}