"use client"

import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  FaArrowRight, FaBeer, FaBuilding, FaClock, FaCog,
  FaDollarSign, FaHandshake, FaHardHat, FaMedkit, FaShieldAlt, FaTools, FaTooth, FaTractor,
  FaTruck,
  FaTruckMoving,
  FaUtensils
} from 'react-icons/fa';
import { GiCheckMark, GiHandSaw, GiMoneyStack, GiSandsOfTime } from 'react-icons/gi';
// Enhanced SEO metadata
const SEO = {
  title: "Equipment Financing Solutions | Construction, Medical & Restaurant Equipment Financing",
  description: "Industry-leading equipment financing solutions with rapid approvals. Specialized financing for construction equipment, medical equipment, restaurant equipment, used equipment, brewery equipment, cranes, dental equipment, excavators, dump trucks, box trucks, and CNC machines. Competitive rates and flexible terms available.",
  keywords: "construction equipment financing, medical equipment financing, restaurant equipment financing, used equipment financing, brewery equipment financing, crane financing, dental equipment financing, excavator financing, dump truck financing, box truck financing, cnc machine financing",
};

// Enhanced structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Vista Pacific Capital Equipment Financing",
  "description": SEO.description,
  "url": "https://vistapacificcapital.com",
  "areaServed": "United States",
  "priceRange": "$$",
  "knowsAbout": [
    "Construction Equipment Financing",
    "Medical Equipment Financing",
    "Restaurant Equipment Financing",
    "Used Equipment Financing",
    "Brewery Equipment Financing",
    "Crane Financing",
    "Dental Equipment Financing",
    "Excavator Financing",
    "Dump Truck Financing",
    "Box Truck Financing",
    "CNC Machine Financing"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Equipment Financing Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "FinancialProduct",
          "name": "Construction Equipment Financing",
          "description": "Flexible financing solutions for construction equipment"
        }
      },
      // Add other equipment types similarly
    ]
  }
};

// Enhanced service data
const services = [
  {
    title: "Construction Equipment Financing",
    name: "Construction Equipment",
    description: "Comprehensive construction equipment financing with competitive rates. Get funding for bulldozers, cranes, loaders & more with flexible terms up to 84 months.",
    features: [
      "New & used construction equipment funded",
      "Competitive rates starting at 4.99%",
      "Same-day approvals available",
      "No down payment options"
    ],
    image: "https://images.unsplash.com/photo-1621922688758-359fc864071e",
    href: "/construction",
    icon: FaHardHat
  },
  {
    title: "Medical Equipment Financing",
    name: "Medical Equipment",
    description: "Specialized medical equipment financing solutions for healthcare providers. Fund MRI machines, X-ray equipment, ultrasound devices & more.",
    features: [
      "100% equipment financing available",
      "Deferred payment options",
      "Tax benefits and write-offs",
      "Quick funding for time-sensitive needs"
    ],
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
    href: "/medical",
    icon: FaMedkit
  },
  {
    title: "Restaurant Equipment Financing",
    name: "Restaurant Equipment",
    description: "Custom restaurant equipment financing packages. Finance commercial kitchens, ovens, refrigeration systems & food service equipment.",
    features: [
      "Seasonal payment structures",
      "Equipment-only financing available",
      "Quick approvals for expansion",
      "Flexible term options"
    ],
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83",
    href: "/restaurant",
    icon: FaUtensils
  },
  {
    title: "Used Equipment Financing",
    name: "Used Equipment",
    description: "Affordable used equipment financing options. Save money while getting the quality equipment your business needs to grow.",
    features: [
      "Competitive rates for used equipment",
      "Equipment inspection assistance",
      "Flexible financing terms",
      "Quick funding process"
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    href: "/used",
    icon: FaTools
  },
  {
    title: "Brewery Equipment Financing",
    name: "Brewery Equipment",
    description: "Specialized brewery equipment financing solutions. Fund tanks, kettles, canning lines & complete brewing systems.",
    features: [
      "Custom payment schedules",
      "Start-up friendly options",
      "Equipment-specific expertise",
      "Growth-focused solutions"
    ],
    image: "https://images.unsplash.com/photo-1532634733-cae1395e440f",
    href: "/brewery",
    icon: FaBeer
  },
  {
    title: "Crane Financing",
    name: "Crane Equipment",
    description: "Specialized crane financing solutions for construction and industrial use. Finance all types of cranes with flexible terms.",
    features: [
      "High-value equipment expertise",
      "Long-term financing available",
      "Skip payment options",
      "Industry-specific knowledge"
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
    href: "/crane",
    icon: FaBuilding
  },
  {
    title: "Dental Equipment Financing",
    name: "Dental Equipment",
    description: "Comprehensive dental equipment financing solutions. Fund chairs, X-ray machines, CAD/CAM systems & more.",
    features: [
      "Practice-friendly payment terms",
      "New practice programs",
      "Technology upgrade financing",
      "Tax-advantaged options"
    ],
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe",
    href: "/dental",
    icon: FaTooth
  },
  {
    title: "Excavator Financing",
    name: "Excavator Equipment",
    description: "Competitive excavator financing rates. Fund mini to large excavators with flexible terms and quick approvals.",
    features: [
      "All sizes of excavators funded",
      "Seasonal payment options",
      "Low down payment programs",
      "Quick approval process"
    ],
    image: "https://images.unsplash.com/photo-1594411549090-9d6c0706c123",
    href: "/excavator",
    icon: FaTractor
  },
  {
    title: "Dump Truck Financing",
    name: "Dump Trucks",
    description: "Easy dump truck financing solutions. Finance new and used dump trucks with flexible terms and competitive rates.",
    features: [
      "Commercial vehicle expertise",
      "Fleet financing available",
      "Maintenance programs",
      "Quick funding options"
    ],
    image: "https://images.unsplash.com/photo-1501700493788-fa1a4f8029ef",
    href: "/dump-truck",
    icon: FaTruck
  },
  {
    title: "Box Truck Financing",
    name: "Box Trucks",
    description: "Simple box truck financing options. Get your delivery fleet on the road with competitive rates and flexible terms.",
    features: [
      "Fleet-friendly options",
      "New & used trucks funded",
      "Quick approval process",
      "Flexible payment schedules"
    ],
    image: "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e",
    href: "/box-truck",
    icon: FaTruckMoving
  },
  {
    title: "CNC Machine Financing",
    name: "CNC Machines",
    description: "Specialized CNC machine financing programs. Fund mills, lathes, and machining centers with expert guidance.",
    features: [
      "High-tech equipment expertise",
      "Upgrade programs available",
      "Manufacturing focus",
      "Competitive rates"
    ],
    image: "https://images.unsplash.com/photo-1565361849269-f462ef49d218",
    href: "/cnc",
    icon: FaCog
  }
];

// Enhanced features data
const features = [
  {
    title: "Rapid Approvals",
    description: "Get approved in as little as 24 hours with our streamlined process",
    icon: FaClock,
    details: [
      "Quick online application",
      "Minimal documentation needed",
      "Same-day decisions available",
      "Expedited funding process"
    ]
  },
  {
    title: "Flexible Terms",
    description: "Customize your financing to match your business cash flow",
    icon: FaHandshake,
    details: [
      "Terms up to 84 months",
      "Seasonal payment options",
      "Step payment programs",
      "Deferred payment plans"
    ]
  },
  {
    title: "Competitive Rates",
    description: "Access industry-leading rates for all equipment types",
    icon: FaDollarSign,
    details: [
      "Rate match guarantee",
      "Volume discounts available",
      "Special industry programs",
      "Early payoff options"
    ]
  }
];

// Enhanced benefits data
const benefits = [
  {
    title: "100+ Years Combined Experience",
    description: "Benefit from our team's deep industry expertise and market knowledge",
    subtext: "Our seasoned professionals understand your equipment financing needs",
    icon: GiSandsOfTime
  },
  {
    title: "$2 Billion+ in Funding",
    description: "Proven track record of helping businesses grow and succeed",
    subtext: "Stable funding source for all your equipment needs",
    icon: GiMoneyStack
  },
  {
    title: "20,000+ Businesses Served",
    description: "Trusted by companies across all industries nationwide",
    subtext: "Join thousands of satisfied clients",
    icon: GiHandSaw
  },
  {
    title: "A+ BBB Rating",
    description: "Commitment to excellence and customer satisfaction",
    subtext: "Transparent and ethical business practices",
    icon: FaShieldAlt
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Hero section slides with enhanced content
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      title: "Leading Equipment Financing Solutions",
      subtitle: "Powering Business Growth Nationwide",
      description: "Fast approvals, competitive rates, and flexible terms for all your equipment needs."
    },
    {
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7",
      title: "Construction & Medical Equipment Financing",
      subtitle: "Specialized Industry Solutions",
      description: "Expert financing for construction, medical, and specialized equipment."
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      title: "Restaurant & Brewery Equipment Funding",
      subtitle: "Custom Financing Programs",
      description: "Tailored solutions for food service and beverage production equipment."
    }
  ];

  useEffect(() => {
    // Slide timer
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta name="keywords" content={SEO.keywords} />
        {/* Additional meta tags remain the same */}
      </Head>

      <main className="flex flex-col items-center bg-white text-indigo-dye">
        {/* Enhanced Hero Section */}
        <section className="w-full h-screen relative overflow-hidden" aria-label="Hero section">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                layout="fill"
                objectFit="cover"
                priority
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-prussian-blue/70 to-black/50" />
            </motion.div>
          </AnimatePresence>

          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto">
                  {slides[currentSlide].description}
                </p>
                
                {/* Enhanced CTA Button */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white
                        bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700
                        rounded-lg shadow-xl hover:shadow-orange-500/20 transition-all duration-300
                        group relative overflow-hidden"
                    >
                      <span className="absolute w-64 h-64 mt-12 group-hover:-rotate-45 group-hover:-translate-x-12 
                        transition-all duration-500 ease-out -translate-y-24 -translate-x-32 
                        bg-white opacity-10 rounded-full">
                      </span>
                      <span className="relative flex items-center">
                        Get Equipment Financing
                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/about"
                      className="inline-flex items-center px-8 py-4 text-lg font-semibold
                        border-2 border-white text-white rounded-lg transition-all duration-300
                        hover:bg-white hover:text-indigo-dye group"
                    >
                      <span className="flex items-center">
                        About Us
                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Enhanced Services Section */}
        <section className="py-24 px-4 w-full bg-gray-50" aria-label="Our Services">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-indigo-dye mb-6">
                Equipment Financing Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive range of equipment financing options designed to help your business thrive.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl 
                    transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Link href={service.href}>
                    <div className="relative h-64">
                      <Image
                        src={service.image}
                        alt={service.title}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-white/90">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <GiCheckMark className="text-light-sea-green mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-6 flex items-center text-light-sea-green group-hover:text-indigo-dye">
                        <span className="font-semibold">Learn More</span>
                        <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        {/* Features Section */}
        {/* Testimonials Section */}
        {/* FAQ Section */}
        {/* Enhanced CTA Section */}
        
        {/* Final CTA Section */}
        <section className="w-full py-24 px-4 bg-gradient-to-br from-indigo-dye to-prussian-blue relative">
          <div className="max-w-7xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold">Ready to Get Started?</h2>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Join thousands of businesses who trust Vista Pacific Capital for their equipment financing needs.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold
                    bg-white text-indigo-dye rounded-lg shadow-xl hover:shadow-white/20
                    transition-all duration-300 group"
                >
                  <span className="flex items-center">
                    Apply Now
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

