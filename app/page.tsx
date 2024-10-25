"use client"

import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  FaArrowRight,
  FaBeer,
  FaClock,
  FaCog,
  FaDollarSign,
  FaHandshake,
  FaHardHat,
  FaMedkit,
  FaShieldAlt,
  FaTruck,
  FaUtensils
} from 'react-icons/fa';
import { GiCheckMark, GiHandSaw, GiMoneyStack, GiSandsOfTime } from 'react-icons/gi';

// Refined SEO metadata with more targeted keywords
const SEO = {
  title: "Equipment Financing & Leasing Solutions | Vista Pacific Capital",
  description: "Get fast equipment financing approval with competitive rates and flexible terms. Specialized solutions for construction, medical, restaurant, manufacturing & more. Apply now and get funded in 24-48 hours.",
  keywords: "equipment financing, equipment leasing, business equipment loans, construction equipment financing, medical equipment financing, commercial equipment financing",
};


// At the top of your file, after the existing imports and before SEO constant:

// Optimized service data with more focused descriptions and features
const services = [
  {
    title: "Construction Equipment",
    name: "Construction Equipment",
    description: "Fast funding for bulldozers, cranes, excavators & heavy machinery. Get competitive rates and 84-month terms.",
    features: [
      "Same-day approval available",
      "Rates from 4.99%",
      "Terms up to 84 months",
      "100% financing options"
    ],
    image: "https://images.unsplash.com/photo-1621922688758-359fc864071e",
    href: "/construction",
    icon: FaHardHat
  },
  {
    title: "Medical Equipment",
    name: "Medical Equipment",
    description: "Finance imaging systems, surgical equipment & medical technology. Specialized healthcare funding solutions.",
    features: [
      "Deferred payment options",
      "Equipment-specific expertise",
      "Quick funding process",
      "Tax advantages available"
    ],
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
    href: "/medical",
    icon: FaMedkit
  },
  {
    title: "Manufacturing Equipment",
    name: "Manufacturing Equipment",
    description: "Fund CNC machines, production lines & industrial equipment. Custom manufacturing financing programs.",
    features: [
      "High-value equipment expertise",
      "Upgrade programs available",
      "Step payment options",
      "Industry-focused solutions"
    ],
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    href: "/manufacturing",
    icon: FaCog
  },
  {
    title: "Restaurant Equipment",
    name: "Restaurant Equipment",
    description: "Finance commercial kitchens, refrigeration & food service equipment. Restaurant-specific payment terms.",
    features: [
      "Seasonal payment structures",
      "Start-up friendly programs",
      "Quick expansion funding",
      "Flexible terms"
    ],
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83",
    href: "/restaurant",
    icon: FaUtensils
  },
  {
    title: "Transportation Equipment",
    name: "Transportation Equipment",
    description: "Finance trucks, trailers & delivery vehicles. Fleet-focused funding with competitive rates.",
    features: [
      "Fleet program expertise",
      "New & used vehicles",
      "Maintenance included options",
      "Quick approval process"
    ],
    image: "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e",
    href: "/transportation",
    icon: FaTruck
  },
  {
    title: "Brewery Equipment",
    name: "Brewery Equipment",
    description: "Fund brewing systems, tanks & packaging lines. Specialized craft brewery financing solutions.",
    features: [
      "Industry expertise",
      "Growth-focused options",
      "Flexible payment plans",
      "Equipment-specific knowledge"
    ],
    image: "https://images.unsplash.com/photo-1532634733-cae1395e440f",
    href: "/brewery",
    icon: FaBeer
  }
];

// Enhanced stats data
const stats = [
  {
    value: "$10M+",
    label: "Maximum Financing",
    description: "Fund major equipment purchases"
  },
  {
    value: "24-84",
    label: "Month Terms",
    description: "Flexible payment schedules"
  },
  {
    value: "4.99%",
    label: "Starting Rates",
    description: "Competitive financing options"
  },
  {
    value: "24hrs",
    label: "Quick Approval",
    description: "Fast funding when you need it"
  }
];

// Enhanced features data
const features = [
  {
    title: "Fast Approval Process",
    description: "Get approved in as little as 24 hours with minimal documentation",
    icon: FaClock,
    details: [
      "Simple online application",
      "Quick credit decisions",
      "Minimal paperwork required",
      "Fast funding process"
    ]
  },
  {
    title: "Flexible Payment Options",
    description: "Customize your financing to match your business needs",
    icon: FaHandshake,
    details: [
      "Seasonal payment plans",
      "Step payment programs",
      "Deferred payment options",
      "Skip payment plans"
    ]
  },
  {
    title: "Industry-Leading Rates",
    description: "Access competitive rates across all equipment types",
    icon: FaDollarSign,
    details: [
      "Rate match guarantee",
      "Volume discounts",
      "Early payoff options",
      "Special programs"
    ]
  }
];

// ... [Rest of your component code remains the same] ...

// Enhanced structured data for better search visibility
const structuredData = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Vista Pacific Capital",
  "description": SEO.description,
  "url": "https://vistapacificcapital.com",
  "areaServed": "United States",
  "priceRange": "$$",
  "openingHours": "Mo-Fr 08:00-17:00",
  "telephone": "(714) 985-6207",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Orange County",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.linkedin.com/company/vista-pacific-capital",
    "https://www.facebook.com/vistapacificcapital"
  ]
};

// Optimized slides with more engaging content
const slides = [
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    title: "Fast Equipment Financing Solutions",
    subtitle: "Get Funded in 24-48 Hours",
    description: "Competitive rates starting at 4.99% with flexible terms up to 84 months."
  },
  {
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7",
    title: "Construction & Medical Equipment",
    subtitle: "$25K to $10M Financing Available",
    description: "Specialized funding for heavy equipment, medical devices & more."
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    title: "Restaurant & Manufacturing Equipment",
    subtitle: "100% Equipment Financing",
    description: "Custom payment plans aligned with your business cash flow."
  }
];

// Text animation variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

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
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>

      <main className="flex flex-col items-center bg-white text-indigo-dye">
        {/* Hero Section */}
        <section className="w-full h-[90vh] relative overflow-hidden" aria-label="Hero section">
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
              <div className="absolute inset-0 bg-gradient-to-br from-prussian-blue/80 to-black/60" />
            </motion.div>
          </AnimatePresence>

          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                  {slides[currentSlide].title}
                </h1>
                <h2 className="text-2xl md:text-3xl text-white/90">
                  {slides[currentSlide].subtitle}
                </h2>
                <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
                  {slides[currentSlide].description}
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white
                      bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700
                      rounded-lg shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1
                      transition-all duration-300"
                  >
                    <span className="flex items-center">
                      Get Instant Quote
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>

                  <Link
                    href="/about"
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold
                      border-2 border-white text-white rounded-lg 
                      hover:bg-white hover:text-indigo-dye hover:-translate-y-1
                      transition-all duration-300"
                  >
                    <span className="flex items-center">
                      See How It Works
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
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

        {/* Trust Indicators Section */}
        <section className="w-full py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "100+", label: "Years Experience", icon: GiSandsOfTime },
                { value: "$2B+", label: "Equipment Funded", icon: GiMoneyStack },
                { value: "20k+", label: "Clients Served", icon: GiHandSaw },
                { value: "A+", label: "BBB Rating", icon: FaShieldAlt }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <stat.icon className="text-4xl text-light-sea-green mb-2" />
                  <div className="text-3xl font-bold text-indigo-dye">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid - Just showing a few key methods */}
        <section className="py-24 px-4 w-full bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-indigo-dye mb-4">
                Equipment Financing Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fast approvals and flexible terms for all types of business equipment
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 6).map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden 
                    hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Link href={service.href}>
                    <div className="relative h-64">
                      <Image
                        src={service.image}
                        alt={service.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      
                      <motion.div 
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="absolute bottom-0 left-0 right-0 p-6"
                      >
                        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-white/90">{service.description}</p>
                      </motion.div>
                    </div>
                    
                    <div className="p-6">
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <motion.li 
                            key={idx}
                            variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex items-center text-gray-700"
                          >
                            <GiCheckMark className="text-light-sea-green mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white
                  bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 rounded-lg hover:-translate-y-1
                  transition-all duration-300"
              >
                View All Financing Solutions
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-24 px-4 bg-gradient-to-br from-indigo-dye to-prussian-blue">
          <div className="max-w-7xl mx-auto text-center text-white">
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold">Ready to Get Started?</h2>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Get pre-qualified in minutes with no impact to your credit score
              </p>
              
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold
                  bg-white text-indigo-dye rounded-lg shadow-xl hover:shadow-white/20
                  hover:-translate-y-1 transition-all duration-300"
              >
                <span className="flex items-center">
                  Apply Now - It's Free
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}