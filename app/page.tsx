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
  Play,
  Stethoscope,
  Truck,
  UtensilsCrossed
} from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import QuickQuoteForm from './components/form';

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
        {/* HERO SECTION */}
      <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
          alt="Background" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/85 to-cyan-900/80" />
      </div>

      {/* Glassmorphism Cards Container */}
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Column - Hero Content */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-white space-y-8"
            >
              {/* Live Badge */}
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 backdrop-blur-md 
                px-4 py-2 rounded-full border border-cyan-500/20">
                <span className="animate-pulse relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </span>
                <span className="text-sm font-medium">Live Rates Available Now</span>
              </div>

              {/* Hero Title */}
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                Get Equipment
                <br />
                Financing in
                <br />
                <span className="text-orange-500">24 Hours</span>
              </h1>

              {/* Features Section */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-lg md:text-xl lg:text-2xl text-gray-200">
                  <span className="flex-shrink-0 w-1 h-8 bg-cyan-500 rounded-full" />
                  <p>Rates from 4.99% | $10M+ Available</p>
                </div>
                
                {/* Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    ["Same-Day Approval", "bg-cyan-500/10 border-cyan-500/20"],
                    ["Minimal Documentation", "bg-blue-900/10 border-blue-900/20"],
                    ["Flexible Terms", "bg-blue-800/10 border-blue-800/20"],
                    ["Rate Match Guarantee", "bg-orange-500/10 border-orange-500/20"]
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
                      <CheckCircle2 className="text-cyan-500 h-5 w-5 flex-shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              
              <div className="flex flex-col sm:flex-row gap-4">
                
              <Link
                href="/contact"
                className="bg-[#FF6B35] hover:bg-[#ff825c] text-white px-8 py-4 rounded-xl
                  font-semibold text-lg shadow-lg hover:shadow-[#FF6B35]/20 
                  transform hover:-translate-y-1 transition-all duration-300 "
              >
                Get Your Equipment Financing Quote <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>


                <Link
                 href="/about"
                  className="group px-6 py-3 rounded-xl border border-cyan-500/30 text-white
                    font-semibold text-lg hover:bg-cyan-500/10 backdrop-blur-md
                    transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                >

                  <Play className="mr-2 h-5 w-5" />
                  Watch How It Works
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="backdrop-blur-xl bg-white/10 p-6 md:p-8 rounded-2xl border border-cyan-500/20
                shadow-2xl shadow-black/20"
            >
              {/* QuickQuoteForm would go here */}
              <div className="text-white text-center p-4">
              <QuickQuoteForm/>
              </div>
            </motion.div>
          </div>
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

