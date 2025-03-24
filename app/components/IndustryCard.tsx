import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface IndustryCardProps {
  title: string;
  description: string;
  features: string[];
  equipmentList: string[];
  benefits: string[];
  successStory?: string;
}

export default function IndustryCard({
  title,
  description,
  features,
  equipmentList,
  benefits,
  successStory
}: IndustryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-5xl mx-auto">
      {/* Industry name */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B365D]">{title}</h1>
      
      {/* Blurb */}
      <p className="text-gray-700 mb-8 text-lg">{description}</p>
      
      {/* Get Financing button (orange) */}
      <div className="mb-10">
        <Link 
          href="/contact"
          className="inline-block bg-gradient-to-r from-[#FF6B35] to-[#ff825c] 
            text-white font-medium px-8 py-4 rounded-lg shadow-md transition duration-300 
            hover:shadow-lg hover:scale-105 text-lg"
        >
          Get Financing
        </Link>
      </div>
      
      {/* 4 key features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex flex-col items-center text-center"
          >
            <div className="w-3 h-3 bg-orange-500 rounded-full mb-3" />
            <span className="text-[#1B365D] font-medium">{feature}</span>
          </div>
        ))}
      </div>

      {/* Equipment we finance */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#1B365D] border-b border-gray-200 pb-2">
          Equipment We Finance
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {equipmentList.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <CheckCircle2 className="h-5 w-5 text-cyan-600 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits section */}
      <div className="mb-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-[#1B365D]">
          Benefits of Our Financing
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-cyan-500 rounded-full" />
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Success story (if available) */}
      {successStory && (
        <div className="mb-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h2 className="text-2xl font-bold mb-4 text-[#1B365D]">Success Story</h2>
          <p className="text-gray-700">{successStory}</p>
        </div>
      )}

      {/* Get started today button */}
      <div className="text-center mt-8">
        <Link 
          href="/contact"
          className="inline-block bg-gradient-to-r from-[#FF6B35] to-[#ff825c] 
            text-white font-medium px-8 py-4 rounded-lg shadow-md transition duration-300 
            hover:shadow-lg hover:scale-105 text-lg"
        >
          Get Started Today
        </Link>
      </div>
    </div>
  );
} 