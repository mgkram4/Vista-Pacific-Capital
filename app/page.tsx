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
  LucideIcon,
  Play,
  Stethoscope,
  Truck,
  UtensilsCrossed
} from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import QuickQuoteForm from './components/form';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
}

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  href: string;
}

interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
}

interface Stat {
  value: string;
  label: string;
  description: string;
}

interface FAQ {
  q: string;
  a: string;
}

const SEO: SEOProps = {
  title: "Equipment Financing & Leasing | Same-Day Approval | Vista Pacific Capital",
  description: "Get equipment financing in 24 hours with rates from 4.99%. Specialized funding for construction, medical, manufacturing & more. $10M+ available. Apply now for instant quote.",
  keywords: "equipment financing, business equipment loans, construction equipment financing, medical equipment leasing, manufacturing equipment loans, restaurant equipment financing, same day equipment financing",
};

const services: Service[] = [
  {
    title: "Construction Equipment Financing",
    description: "New & used equipment funding up to $10M. Same-day approval for excavators, cranes & heavy machinery.",
    features: ["Same-day funding available", "Rates from 4.99%", "Up to 84-month terms", "No down payment options"],
    icon: Building2,
    href: "/construction"
  },
  {
    title: "Medical Equipment Financing",
    description: "Specialized healthcare funding for imaging systems, surgical equipment & medical technology.", 
    features: ["100% equipment financing", "Tax-advantage options", "Deferred payments available", "Equipment-specific programs"],
    icon: Stethoscope,
    href: "/medical"
  },
  {
    title: "Manufacturing Equipment",
    description: "Custom financing for CNC machines, production lines & industrial equipment.",
    features: ["Step payment options", "Sale-leaseback available", "Working capital included", "Equipment lines of credit"],
    icon: Factory,
    href: "/manufacturing"
  },
  {
    title: "Restaurant Equipment",
    description: "Flexible financing for commercial kitchen equipment, refrigeration & food service.",
    features: ["90-day deferred payments", "Seasonal payment structures", "Start-up programs", "Software included options"],
    icon: UtensilsCrossed,
    href: "/restaurant"
  },
  {
    title: "Transportation Equipment", 
    description: "Competitive rates for trucks, trailers & fleet vehicles with maintenance programs.",
    features: ["TRAC lease options", "Fleet management tools", "Fuel card programs", "Maintenance included"],
    icon: Truck,
    href: "/dump-truck"
  },
  {
    title: "Brewery Equipment",
    description: "Specialized funding for brewing systems, tanks & packaging equipment.",
    features: ["Revenue-based payments", "Equipment-specific terms", "Working capital included", "Expansion programs"],
    icon: Beer,
    href: "/brewery-equipment"
  }
 ];
 
 const stats: Stat[] = [
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
 
 const benefits: Benefit[] = [
  {
    title: "Same-Day Approvals",
    description: "Get approved in hours, not days. Simple online process with minimal documentation.",
    icon: Clock,
    points: ["2-minute application", "Soft credit pull only", "No financials under $400k", "Next-day funding available"]
  },
  {
    title: "Flexible Payment Options",
    description: "Custom payment structures aligned with your business cash flow.",
    icon: DollarSign,
    points: ["Seasonal payments", "90-day deferred start", "Step payment programs", "Skip payment options"]
  },
  {
    title: "Competitive Rates",
    description: "Industry-leading rates with our Rate Match Guarantee program.",
    icon: DollarSign,
    points: ["Rates from 4.99%", "Terms up to 84 months", "No prepayment penalties", "Tax advantage options"]
  }
 ];
 
 const faqs: FAQ[] = [
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
 ];

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
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

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
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://vistapacificcapital.com" />
      </Head>

      <main className="bg-white">
        <section className="relative min-h-screen  overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
          <Image 
  src="https://images.unsplash.com/photo-1438089966501-33bb60deddf6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  alt="Modern cityscape background"
  fill
  priority
  className=""
  quality={100}
/>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/90 to-cyan-900/85 " />
          </div>

          {/* Hero Content */}
          <div className="relative w-full min-h-screen flex items-center">
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
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md 
                    px-4 py-2 rounded-full border border-cyan-400/30 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-300">
                    <span className="animate-pulse relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                    </span>
                    <span className="text-sm font-medium">Live Rates Available Now</span>
                  </div>

                  {/* Hero Title */}
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
                    Get Equipment
                    <br />
                    Financing in
                    <br />
                    <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">24 Hours</span>
                  </h1>

                  {/* Features Section */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 text-lg md:text-xl lg:text-2xl">
                      <span className="flex-shrink-0 w-1 h-8 bg-gradient-to-b from-cyan-400 to-cyan-500 rounded-full" />
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300">
                        Rates from 4.99% | $10M+ Available
                      </p>
                    </div>
                    
                    {/* Feature Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        ["Same-Day Approval", "bg-gradient-to-r from-cyan-500/20 to-cyan-400/10 border-cyan-500/20"],
                        ["Minimal Documentation", "bg-gradient-to-r from-blue-500/20 to-blue-400/10 border-blue-500/20"],
                        ["Flexible Terms", "bg-gradient-to-r from-blue-400/20 to-cyan-500/10 border-blue-400/20"],
                        ["Rate Match Guarantee", "bg-gradient-to-r from-orange-500/20 to-orange-400/10 border-orange-500/20"]
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
                            backdrop-blur-md hover:bg-white/5 transition-all duration-300 shadow-lg hover:shadow-xl`}
                        >
                          <CheckCircle2 className="text-cyan-400 h-5 w-5 flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-100">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] text-white px-8 py-4 rounded-xl
                        font-semibold text-lg shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 
                        transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center backdrop-blur-sm"
                    >
                      Get Your Equipment Financing Quote 
                      <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href="/about"
                      className="group px-6 py-3 rounded-xl border border-cyan-400/30 text-white
                        font-semibold text-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20
                        backdrop-blur-md transform hover:-translate-y-1 transition-all duration-300 
                        flex items-center justify-center shadow-lg hover:shadow-cyan-500/20"
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
                  className="relative z-10"
                >
                  <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-cyan-500/20
                    shadow-2xl shadow-black/20 hover:shadow-cyan-500/10 transition-all duration-500"
                  >
                    <QuickQuoteForm />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold text-cyan-600 mb-2 block">TAILORED SOLUTIONS</span>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1B365D] to-[#2C4C7C] bg-clip-text text-transparent mb-4">
                Equipment Financing Solutions
              </h2>
              <p className="text-xl text-[#2C4C7C]/80">
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
                  className="group bg-white rounded-xl p-6
                    transition-all duration-500 transform hover:-translate-y-2
                    border border-cyan-500/10 hover:border-cyan-500/30
                    shadow-lg hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded-lg p-3 w-fit
                    group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="h-12 w-12 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1B365D] mt-4 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#2C4C7C]/80 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-[#2C4C7C]/80">
                        <CheckCircle2 className="h-5 w-5 text-cyan-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="text-cyan-600 font-semibold flex items-center
                      group-hover:text-cyan-700 transition-colors duration-300"
                  >
                    Learn More <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-[#1B365D] via-[#1B365D] to-[#1B365D]/95 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(72,176,176,0.1),transparent_50%)]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold text-cyan-400 mb-2 block">WHY CHOOSE US</span>
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-4">
                Why Choose Vista Pacific Capital
              </h2>
              <p className="text-xl text-cyan-400">
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
                  className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-6 
                    border border-cyan-500/20 hover:border-cyan-400/30
                    hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-500
                    transform hover:-translate-y-2"
                >
                  <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 rounded-lg p-3 w-fit
                    group-hover:scale-110 transition-transform duration-500">
                    <benefit.icon className="h-12 w-12 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mt-4 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300/90 mb-4">{benefit.description}</p>
                  <ul className="space-y-2">
                    {benefit.points.map((point, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-200/90">
                        <CheckCircle2 className="h-5 w-5 text-cyan-400" />
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
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold text-cyan-600 mb-2 block">COMMON QUESTIONS</span>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1B365D] to-[#2C4C7C] bg-clip-text text-transparent mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-[#2C4C7C]/80">
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
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group bg-white rounded-xl p-6
                    transition-all duration-500 transform hover:-translate-y-1
                    border border-cyan-500/10 hover:border-cyan-500/30
                    shadow-lg hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <h3 className="text-xl font-bold bg-gradient-to-r from-[#1B365D] to-[#2C4C7C] bg-clip-text text-transparent mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-[#2C4C7C]/80">{faq.a}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2lnbiUyMHBhcGVyfGVufDB8fDB8fHww"
              alt="Modern office background"
              fill
              className="object-cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1B365D]/95 via-[#1B365D]/90 to-[#48B0B0]/80 " />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="text-sm font-semibold text-cyan-400 mb-2 block">GET STARTED TODAY</span>
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100/90 max-w-3xl mx-auto pb-10">
                Get pre-qualified in minutes with no impact to your credit score
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                  text-white px-8 py-4 rounded-xl font-semibold text-lg 
                  shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 
                  transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Your Equipment Financing Quote
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}