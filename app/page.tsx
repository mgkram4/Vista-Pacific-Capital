"use client"

import { motion } from 'framer-motion';
import {
  Beer,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  DollarSign,
  Factory,
  Stethoscope,
  Truck,
  UtensilsCrossed
} from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Enhanced SEO metadata with long-tail keywords
const SEO = {
  title: "Equipment Financing & Leasing | Same-Day Approval | Vista Pacific Capital",
  description: "Get equipment financing in 24 hours with rates from 4.99%. Specialized funding for construction, medical, manufacturing & more. $10M+ available. Apply now for instant quote.",
  keywords: "equipment financing, business equipment loans, construction equipment financing, medical equipment leasing, manufacturing equipment loans, restaurant equipment financing, same day equipment financing",
};

// Optimized service offerings with clear value propositions
const services = [
  {
    title: "Construction Equipment Financing",
    description: "New & used equipment funding up to $10M. Same-day approval for excavators, cranes & heavy machinery.",
    features: [
      "Same-day funding available",
      "Rates from 4.99%",
      "Up to 84-month terms",
      "No down payment options"
    ],
    icon: Building2,
    href: "/construction"
  },
  {
    title: "Medical Equipment Financing",
    description: "Specialized healthcare funding for imaging systems, surgical equipment & medical technology.",
    features: [
      "100% equipment financing",
      "Tax-advantage options",
      "Deferred payments available",
      "Equipment-specific programs"
    ],
    icon: Stethoscope,
    href: "/medical"
  },
  {
    title: "Manufacturing Equipment",
    description: "Custom financing for CNC machines, production lines & industrial equipment.",
    features: [
      "Step payment options",
      "Sale-leaseback available",
      "Working capital included",
      "Equipment lines of credit"
    ],
    icon: Factory,
    href: "/manufacturing"
  },
  {
    title: "Restaurant Equipment",
    description: "Flexible financing for commercial kitchen equipment, refrigeration & food service.",
    features: [
      "90-day deferred payments",
      "Seasonal payment structures",
      "Start-up programs",
      "Software included options"
    ],
    icon: UtensilsCrossed,
    href: "/restaurant"
  },
  {
    title: "Transportation Equipment",
    description: "Competitive rates for trucks, trailers & fleet vehicles with maintenance programs.",
    features: [
      "TRAC lease options",
      "Fleet management tools",
      "Fuel card programs",
      "Maintenance included"
    ],
    icon: Truck,
    href: "/dump-truck"
  },
  {
    title: "Brewery Equipment",
    description: "Specialized funding for brewing systems, tanks & packaging equipment.",
    features: [
      "Revenue-based payments",
      "Equipment-specific terms",
      "Working capital included",
      "Expansion programs"
    ],
    icon: Beer,
    href: "/brewery-equipment"
  }
];

// Trust indicators and social proof
const stats = [
  {
    value: "$10M+",
    label: "Maximum Funding",
    description: "Largest equipment financing available"
  },
  {
    value: "4.99%",
    label: "Starting Rate",
    description: "Industry-leading financing rates"
  },
  {
    value: "24hrs",
    label: "Approval Time",
    description: "Get funded next business day"
  },
  {
    value: "95%",
    label: "Approval Rate",
    description: "Highest approval success rate"
  }
];

// Enhanced features focusing on customer benefits
const benefits = [
  {
    title: "Same-Day Approvals",
    description: "Get approved in hours, not days. Simple online process with minimal documentation.",
    icon: Clock,
    points: [
      "2-minute application",
      "Soft credit pull only",
      "No financials under $400k",
      "Next-day funding available"
    ]
  },
  {
    title: "Flexible Payment Options",
    description: "Custom payment structures aligned with your business cash flow.",
    icon: DollarSign,
    points: [
      "Seasonal payments",
      "90-day deferred start",
      "Step payment programs",
      "Skip payment options"
    ]
  },
  {
    title: "Competitive Rates",
    description: "Industry-leading rates with our Rate Match Guarantee program.",
    icon: DollarSign,
    points: [
      "Rates from 4.99%",
      "Terms up to 84 months",
      "No prepayment penalties",
      "Tax advantage options"
    ]
  }
];

// Enhanced structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Vista Pacific Capital",
  "description": SEO.description,
  "url": "https://vistapacificcapital.com",
  "areaServed": "United States",
  "priceRange": "$$",
  "telephone": "(714) 985-6207",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Orange County",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "312"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Equipment Financing Solutions",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Construction Equipment Financing",
        "description": "Financing for construction and heavy equipment"
      },
      {
        "@type": "Service",
        "name": "Medical Equipment Financing",
        "description": "Healthcare equipment financing solutions"
      }
    ]
  }
};

// Animation variants
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
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <>
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta name="keywords" content={SEO.keywords} />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vistapacificcapital.com" />
        <meta property="og:image" content="https://vistapacificcapital.com/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://vistapacificcapital.com" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>

      <main className="bg-white">
      <section className="relative min-h-screen overflow-hidden">
  {/* Modern Gradient Background */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-[#1B365D] via-[#234578] to-[#48B0B0]">
      {/* Abstract Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.05)_75%,transparent_75%,transparent)] bg-[length:64px_64px]" />
      </div>
      
      {/* Animated Gradient Accent */}
      <div className="absolute inset-0">
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-[#48B0B0] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-[#1B365D] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-48 left-48 w-96 h-96 bg-[#FF6B35] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>
    </div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="text-white space-y-8"
      >
        <div className="inline-flex items-center space-x-2 bg-[#48B0B0]/20 backdrop-blur-md 
          px-4 py-2 rounded-full border border-[#48B0B0]/40">
          <span className="animate-pulse relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5ED3D3] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#48B0B0]"></span>
          </span>
          <span className="text-sm font-medium">Live Rates Available Now</span>
        </div>

        <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
          Get Equipment
          <br />
          Financing in
          <br />
          <span className="text-[#FF6B35]">24 Hours</span>
        </h1>

        <div className="space-y-6">
          <div className="flex items-center space-x-4 text-xl lg:text-2xl text-gray-200">
            <span className="flex-shrink-0 w-1 h-8 bg-[#48B0B0] rounded-full" />
            <p>Rates from 4.99% | $10M+ Available</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              ["Same-Day Approval", "bg-[#48B0B0]/10 border-[#48B0B0]/20"],
              ["Minimal Documentation", "bg-[#1B365D]/10 border-[#1B365D]/20"],
              ["Flexible Terms", "bg-[#2C4C7C]/10 border-[#2C4C7C]/20"],
              ["Rate Match Guarantee", "bg-[#FF6B35]/10 border-[#FF6B35]/20"]
            ].map(([item, bgColor], index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }
                }}
                className={`flex items-center space-x-2 p-3 rounded-lg border ${bgColor}
                  backdrop-blur-md hover:bg-white/5 transition-colors duration-300`}
              >
                <CheckCircle2 className="text-[#48B0B0] h-5 w-5 flex-shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setIsFormVisible(true)}
            className="group relative px-8 py-4 rounded-xl bg-[#ff652d] 
              text-white font-semibold text-lg shadow-lg hover:shadow-[#FF6B35]/20
              transform hover:-translate-y-1 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center justify-center">
              Get Your Rate - It Takes 2 Minutes
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button
            className="group px-8 py-4 rounded-xl border border-[#48B0B0]/30 text-white
              font-semibold text-lg hover:bg-[#48B0B0]/10 backdrop-blur-md
              transform hover:-translate-y-1 transition-all duration-300"
          >
            <span className="flex items-center justify-center">
              Watch How It Works
            </span>
          </button>
        </div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="backdrop-blur-lg bg-white/20 p-8 rounded-2xl border border-[#48B0B0]/20
          shadow-2xl shadow-black/20"
      >
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Get Your Rate</h2>
          <p className="text-[#a5e3e3] font-medium">Free quote • No obligations • 2 minutes</p>
        </div>
        <QuickQuoteForm />
      </motion.div>
    </div>
  </div>
</section>
        {/* Services Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-[#1B365D] mb-4">
                Equipment Financing Solutions
              </h2>
              <p className="text-xl text-[#2C4C7C]">
                Specialized funding programs for every industry
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl 
                    transition-all duration-300 transform hover:-translate-y-1
                    border border-[#48B0B0]/10"
                >
                  <service.icon className="h-12 w-12 text-[#48B0B0] mb-4" />
                  <h3 className="text-xl font-bold text-[#1B365D] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#2C4C7C] mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-[#2C4C7C]">
                        <CheckCircle2 className="h-5 w-5 text-[#48B0B0]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="text-[#48B0B0] font-semibold flex items-center hover:text-[#3A8E8E]
                      transition-colors duration-300"
                  >
                    Learn More <ChevronRight className="h-5 w-5 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-[#1B365D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Vista Pacific Capital
              </h2>
              <p className="text-xl text-[#48B0B0]">
                Industry-leading solutions with unmatched service
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-[#48B0B0]/20
                    hover:bg-white/10 transition-colors duration-300"
                >
                  <benefit.icon className="h-12 w-12 text-[#48B0B0] mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{benefit.description}</p>
                  <ul className="space-y-2">
                    {benefit.points.map((point, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-200">
                        <CheckCircle2 className="h-5 w-5 text-[#48B0B0]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex justify-center space-x-4 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-8 h-8 text-[#FF6B35]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h2 className="text-4xl font-bold text-[#1B365D] mb-4">
                Trusted by 10,000+ Businesses
              </h2>
              <p className="text-xl text-[#2C4C7C]">
                4.9/5 average rating from verified customers
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  quote: "Same-day approval and incredible rates. Vista Pacific made expanding our construction fleet easy.",
                  author: "John D.",
                  role: "Construction Company Owner",
                  image: "/testimonial1.jpg"
                },
                {
                  quote: "The medical equipment financing program helped us upgrade our entire imaging department.",
                  author: "Dr. Sarah M.",
                  role: "Medical Practice Director",
                  image: "/testimonial2.jpg"
                },
                {
                  quote: "Their restaurant equipment program got us the kitchen upgrades we needed with flexible payments.",
                  author: "Michael R.",
                  role: "Restaurant Owner",
                  image: "/testimonial3.jpg"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-xl shadow-lg p-6 border border-[#48B0B0]/10
                    hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1B365D]">{testimonial.author}</div>
                      <div className="text-[#2C4C7C] text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-[#2C4C7C] italic">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-[#1B365D] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-[#2C4C7C]">
                Everything you need to know about equipment financing
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {[
                {
                  q: "How fast can I get approved?",
                  a: "Most applications receive same-day approval. Funding typically occurs within 24-48 hours of document completion."
                },
                {
                  q: "What credit score do I need?",
                  a: "We work with all credit profiles and have programs starting from 600+ FICO. Lower scores may require additional documentation."
                },
                {
                  q: "What documentation is required?",
                  a: "For requests under $400,000, we typically only need a one-page application. Larger amounts may require basic financial statements."
                },
                {
                  q: "Do you offer seasonal payments?",
                  a: "Yes, we can structure payments around your business's cash flow with seasonal, step, and deferred payment options."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-xl shadow-lg p-6 border border-[#48B0B0]/10
                    hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-[#1B365D] mb-2">{faq.q}</h3>
                  <p className="text-[#2C4C7C]">{faq.a}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-[#1B365D] to-[#48B0B0] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto  pb-10">
                Get pre-qualified in minutes with no impact to your credit score
              </p>
              <Link
                href="/contact"
                className="bg-[#FF6B35] hover:bg-[#ff825c] text-white px-8 py-4 rounded-xl
                  font-semibold text-lg shadow-lg hover:shadow-[#FF6B35]/20 
                  transform hover:-translate-y-1 transition-all duration-300 "
              >
                Get Your Equipment Financing Quote
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

// QuickQuoteForm Component
const QuickQuoteForm = () => {
  const [formData, setFormData] = useState({
    equipmentType: '',
    equipmentCost: '',
    businessType: '',
    timeInBusiness: '',
    creditScore: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
      
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Equipment Cost
          </label>
          <input
            type="text"
            value={formData.equipmentCost}
            onChange={(e) => setFormData({...formData, equipmentCost: e.target.value})}
            placeholder="Estimated Cost"
            className="w-full rounded-sm border-[#48B0B0]/20 bg-white/10 backdrop-blur-md
              text-white focus:border-[#48B0B0] focus:ring-[#48B0B0]
              placeholder-gray-400"
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Business Type
          </label>
          <input
            type="text"
            value={formData.businessType}
            onChange={(e) => setFormData({...formData, businessType: e.target.value})}
            placeholder="Type of Business"
            className="w-full rounded-sm border-[#48B0B0]/20 bg-white/10 backdrop-blur-md
              text-white focus:border-[#48B0B0] focus:ring-[#48B0B0]
              placeholder-gray-400"
            required
          />
        </div>

       
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="Full Name"
            className="w-full rounded-sm border-[#48B0B0]/20 bg-white/10 backdrop-blur-md
              text-white focus:border-[#48B0B0] focus:ring-[#48B0B0]
              placeholder-gray-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            placeholder="Email Address"
            className="w-full rounded-sm border-[#48B0B0]/20 bg-white/10 backdrop-blur-md
              text-white focus:border-[#48B0B0] focus:ring-[#48B0B0]
              placeholder-gray-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Phone
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            placeholder="Phone Number"
            className="w-full rounded-sm border-[#48B0B0]/20 bg-white/10 backdrop-blur-md
              text-white focus:border-[#48B0B0] focus:ring-[#48B0B0]
              placeholder-gray-400"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-[#FF6B35] hover:bg-[#ff825c] text-white px-6 py-3 rounded-sm
          font-semibold text-lg shadow-lg hover:shadow-[#FF6B35]/20 
          transform hover:-translate-y-1 transition-all duration-300"
      >
        Get Your Quote Now
      </button>

      <p className="text-sm text-gray-300 text-center">
        Your information is secure and will never be shared. By submitting,
        you agree to our Privacy Policy and Terms of Service.
      </p>
    </form>
  );
};

// CSS constants for consistent styling
const styles = {
  input: `w-full rounded-lg border-[#48B0B0]/20 bg-white/10 backdrop-blur-md
    text-white focus:border-[#48B0B0] focus:ring-[#48B0B0]
    placeholder-gray-400`,
  label: `block text-sm font-medium text-white mb-1`,
  button: `w-full bg-[#FF6B35] hover:bg-[#ff825c] text-white px-6 py-3 rounded-lg
    font-semibold text-lg shadow-lg hover:shadow-[#FF6B35]/20 
    transform hover:-translate-y-1 transition-all duration-300`,
  gradientBg: `bg-gradient-to-br from-[#1B365D] to-[#48B0B0]`,
  cardHover: `hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`,
  glassEffect: `backdrop-blur-md bg-white/10 border border-[#48B0B0]/20`,
};

