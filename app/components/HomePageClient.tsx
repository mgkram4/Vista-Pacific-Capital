"use client"

import PDFForm from '@/app/pdf-form/page';
import { motion } from 'framer-motion';
import {
  Building2,
  Calculator,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cog,
  DollarSign,
  Factory,
  LucideIcon,
  Stethoscope,
  Truck,
  UtensilsCrossed
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  href: string;
  imageSrc: string;
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
  description:string;
}

interface FAQ {
  q: string;
  a: string;
}

const services: Service[] = [
  {
    title: "Material Handling Equipment Financing",
    description: "Complete financing solutions for warehouse and material handling equipment with flexible terms.",
    features: ["New or refurbished racking systems", "Labor and installation cost included", "Application only financing up to $500,000", "Can included other items (security equipment, forklifts, etc)", "Projects up to $10 million"],
    icon: Factory,
    href: "/equipment/construction",
    imageSrc: "/Images/services/material-handling-new.jpg"
  },
  {
    title: "Construction Equipment Financing",
    description: "Comprehensive financing for construction equipment from dealers or private parties.",
    features: ["New and Use Equipment", "Dealer or private party", "Title or non-titled", "Application Only up to $750,000"],
    icon: Building2,
    href: "/equipment/construction",
    imageSrc: "/Images/services/construction-new.jpg"
  },
  {
    title: "Medical Equipment Financing",
    description: "Specialized financing for medical practices of all sizes with flexible application limits.",
    features: ["New and Used Medical Equipment", "Funding for specialized equipment", "Refurbished equipment is okay", "Small practices to large surgery centers", "Special Application Only limits for MD's"],
    icon: Stethoscope,
    href: "/equipment/medical",
    imageSrc: "/Images/services/medical-new.jpg"
  },
  {
    title: "Manufacturing Equipment Financing",
    description: "Comprehensive manufacturing equipment financing with competitive rates and international vendor support.",
    features: ["Full Production Line Programs", "Can finance from international vendors", "Installation and shipping costs included", "Aggressive rates"],
    icon: Cog,
    href: "/equipment/cnc-machine",
    imageSrc: "/Images/services/manufacturing-new.jpg"
  },
  {
    title: "Restaurant Equipment Financing",
    description: "Complete restaurant financing solutions for new locations and equipment upgrades.",
    features: ["Furniture, POS, kitchen equipment", "New and used equipment", "Second locations and existing locations", "A through C Credit"],
    icon: UtensilsCrossed,
    href: "/equipment/restaurant",
    imageSrc: "/Images/services/restaurant-new.jpg"
  },
  {
    title: "Transportation Financing Programs",
    description: "Flexible transportation financing for all types of commercial vehicles and drivers.",
    features: ["Long and short haul", "New and used", "Dealer or private party", "No fleet requirement", "1099 drivers up to $250,000 with comparable borrowing"],
    icon: Truck,
    href: "/equipment/dump-truck",
    imageSrc: "/Images/services/transportation-new.jpg"
  }
];

const stats: Stat[] = [
  {
    value: "$20M",
    label: "Maximum Funding",
    description: "Financing from $20,000 to $20 million"
  },
  {
    value: "A-C",
    label: "Credit Types",
    description: "A through C Credit accepted"
  },
  {
    value: "24hrs",
    label: "Approval Time",
    description: "Get funded next business day"
  },
  {
    value: "100%",
    label: "Equipment Types",
    description: "New and used equipment available"
  }
];

const benefits: Benefit[] = [
  {
    title: "Financing Solutions",
    description: "Industry-leading solutions with our comprehensive funding programs.",
    icon: DollarSign,
    points: ["Terms up to 84 months", "Access to as many as 15 different lenders", "No money down for qualified customers", "Competitive Rates", "New and Used Equipment"]
  },
  {
    title: "Quick Approval Time",
    description: "Same day approvals for qualified application-only transactions.",
    icon: Clock,
    points: ["2-minute application", "Soft credit pull only", "Application Only up to $750,000", "Financing from $20,000 to $20 million"]
  },
  {
    title: "Vendor Partnership Programs",
    description: "Provide easy streamline financing solutions for your customers so they can grow their business.",
    icon: DollarSign,
    points: ["Programs for startup customers", "Vendor Rewards Programs", "Great alternative for customer to cash or local bank", "Prepayment up to 100% prior to completion", "Can cover shipping/training/labor costs"]
  }
];

const faqs: FAQ[] = [
  {
    q: "How fast can I get approved?",
    a: "Most applications receive same-day approval. Funding typically occurs within 24-48 hours of document completion."
  },
  {
    q: "What credit score do I need?",
    a: "We work with all credit profiles from A through C. Lower scores may require additional documentation."
  },
  {
    q: "What documentation is required?",
    a: "For requests under $400,000, we typically only need a one-page application. Larger amounts may require basic financial statements."
  },
  {
    q: "What are the financing amounts available?",
    a: "We offer equipment financing from $20,000 up to $20 million, with flexible terms and payment options to match your business needs."
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

export default function HomePageClient() {
  return (
    <>
      <main className="bg-white">
        <section className="relative w-full overflow-hidden pt-20 sm:pt-24 lg:pt-16">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image 
              src="/Images/hero-background.jpg"
              alt="Business professional reviewing equipment financing options with 24-hour approval"
              fill
              priority
              className="object-cover"
              quality={75}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D3853]/95 via-[#0D3853]/90 to-[#0EB5B2]/85" />
          </div>

          {/* Hero Content */}
          <div className="relative w-full flex items-center">
            <div className="max-w-7xl mx-auto px-2 py-8 w-full">
              <div className="grid lg:grid-cols-2 gap-2 items-center">
                {/* Left Column - Hero Content */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  className="text-white space-y-4"
                >
                  {/* Hero Title */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#F2F2F2] to-[#B3B3B3] rounded-lg overflow-hidden">
                    Get Equipment
                    <br />
                    Financing Terms
                    <br />
                    <span className="bg-gradient-to-r from-[#FF6B35] to-[#ff825c] bg-clip-text text-transparent">In 24 Hours</span>
                  </h1>

                  {/* Features Section */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-lg md:text-xl">
                      <span className="flex-shrink-0 w-1 h-6 bg-gradient-to-b from-[#0EB5B2] to-[#0EB5B2] rounded-full" />
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F2] to-[#B3B3B3]">
                        Financing from $20,000 to $20 million
                      </p>
                    </div>
                    
                    {/* Feature Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        ["Same-Day Approval", "bg-gradient-to-r from-[#0EB5B2]/20 to-[#0EB5B2]/10 border-[#0EB5B2]/20"],
                        ["New and Used Equipment", "bg-gradient-to-r from-[#0D3853]/20 to-[#0D3853]/10 border-[#0D3853]/20"],
                        ["Flexible Terms", "bg-gradient-to-r from-[#0D3853]/20 to-[#0EB5B2]/10 border-[#0D3853]/20"],
                        ["A through C Credit", "bg-gradient-to-r from-[#FF6B35]/20 to-[#FF6B35]/10 border-[#FF6B35]/20"]
                      ].map((item, index) => (
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
                          className={`flex items-center space-x-2 p-3 rounded-lg border ${item[1]}
                            backdrop-blur-md hover:bg-white/5 transition-all duration-300 shadow-lg hover:shadow-xl`}
                        >
                          <CheckCircle2 className="text-[#0EB5B2] h-5 w-5 flex-shrink-0" />
                          <span className="text-sm font-medium text-[#F2F2F2]">{item[0]}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      href="/pdf-form"
                      className="bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] text-white px-6 py-3 rounded-lg
                        font-semibold text-lg shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
                        transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center backdrop-blur-sm"
                    >
                      Apply Now
                      <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href="/calculator"
                      className="group px-4 py-2 rounded-lg border border-[#0EB5B2]/30 text-white
                        font-semibold text-lg bg-gradient-to-r from-[#0EB5B2]/10 to-[#0D3853]/10 hover:from-[#0EB5B2]/20 hover:to-[#0D3853]/20
                        backdrop-blur-md transform hover:-translate-y-1 transition-all duration-300 
                        flex items-center justify-center shadow-lg hover:shadow-[#0EB5B2]/20"
                    >
                      <Calculator className="mr-2 h-5 w-5" />
                      Payment Calculator
                    </Link>
                  </div>
                </motion.div>

                {/* Right Column - Form */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  className="relative"
                >
                  <PDFForm />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#0EB5B2]/20 to-[#0D3853]/20"></div>
        
        {/* Benefits Section - adjust spacing here */}
        <section className="py-20 bg-gray-50">
          <h2 className="sr-only">Our Financing Benefits</h2>
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-[#1B365D]">
                Benefits of Our Equipment Financing
              </h3>
              <p className="text-lg text-gray-600">
                Our streamlined process, competitive rates, and dedicated support make our equipment financing and business loans the ideal solution for your growth.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index}>
                    <div className="bg-gradient-to-br from-[#0EB5B2]/20 to-[#0EB5B2]/5 rounded-lg p-3 w-fit
                      group-hover:scale-110 transition-transform duration-500">
                      <benefit.icon className="h-12 w-12 text-[#0EB5B2]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0D3853] mt-4 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-[#0D3853]/80 mb-4">{benefit.description}</p>
                    <ul className="space-y-2">
                      {benefit.points.map((point, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-[#0D3853]/80">
                          <CheckCircle2 className="h-5 w-5 text-[#0EB5B2]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <figure>
                <Image 
                  src="/Images/constructionH.png"
                  alt="Business owner signing equipment financing agreement"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-lg"
                  quality={60}
                />
              </figure>
            </div>
          </div>
        </section>
        
        {/* Section Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#0D3853]/20 to-[#0EB5B2]/20"></div>
        
        {/* Services Section - adjust spacing here */}
        <section className="py-12 md:py-20 bg-white">
          <h2 className="sr-only">Industries We Serve</h2>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-[#1B365D]">
                Equipment Financing for Your Industry
              </h3>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                We provide tailored equipment financing and business loan solutions for a wide range of industries. Get the capital you need for new or used equipment.
              </p>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.article
                  key={index}
                  variants={fadeInUp}
                  className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-lg p-6
                    transition-all duration-500 transform hover:-translate-y-2
                    border border-[#0EB5B2]/20 hover:border-[#0EB5B2]/30
                    shadow-lg hover:shadow-xl hover:shadow-[#0EB5B2]/10"
                >
                  <Image
                    src={service.imageSrc}
                    alt={`${service.title} illustration for equipment financing`}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    loading="lazy"
                    quality={75}
                  />
                  <div className="bg-gradient-to-br from-[#0EB5B2]/10 to-[#0D3853]/5 rounded-lg p-3 w-fit
                    group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="h-12 w-12 text-[#0EB5B2]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D3853] mt-4 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#0D3853]/80 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-[#0D3853]/80">
                        <CheckCircle2 className="h-5 w-5 text-[#0EB5B2]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="inline-flex items-center font-semibold text-[#0EB5B2] group mt-4">
                    Learn more about {service.title.replace("Financing", "")} <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Section Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#0EB5B2]/20 to-[#0D3853]/20"></div>
        
        {/* FAQ Section - adjust spacing here */}
        <section className="py-10 bg-gradient-to-b from-[#F2F2F2] to-white relative overflow-hidden w-full">
          <h2 className="sr-only">Frequently Asked Questions</h2>
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <span className="text-sm font-semibold text-[#0EB5B2] mb-2 block">COMMON QUESTIONS</span>
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#0D3853] to-[#0D3853] bg-clip-text text-transparent mb-4">
                Frequently Asked Questions
              </h3>
              <p className="text-xl text-[#0D3853]/80">
                Everything you need to know about equipment financing
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group bg-white rounded-lg p-6
                    transition-all duration-500 transform hover:-translate-y-1
                    border border-[#0EB5B2]/10 hover:border-[#0EB5B2]/30
                    shadow-lg hover:shadow-xl hover:shadow-[#0EB5B2]/10"
                >
                  <h4 className="text-xl font-bold bg-gradient-to-r from-[#0D3853] to-[#0D3853] bg-clip-text text-transparent mb-2">
                    {faq.q}
                  </h4>
                  <p className="text-[#0D3853]/80">{faq.a}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Section Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#0D3853]/20 to-[#0EB5B2]/20"></div>
        
        {/* Final CTA */}
        <footer className="relative py-10 overflow-hidden w-full">
          <div className="absolute inset-0">
            <Image 
              src="/Images/cta-background-signing.jpg"
              alt="Modern office environment for equipment financing consultation"
              fill
              className="object-cover"
              quality={75}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D3853]/95 via-[#0D3853]/90 to-[#0EB5B2]/80" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-sm font-semibold text-[#0EB5B2] mb-2 block">GET STARTED TODAY</span>
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#B3B3B3]">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-[#F2F2F2]/90 max-w-3xl mx-auto pb-4">
                Get pre-qualified in minutes with no impact to your credit score
              </p>
              <Link
                href="/pdf-form"
                className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                  text-white px-8 py-4 rounded-lg font-semibold text-lg 
                  shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
                  transform hover:-translate-y-1 transition-all duration-300"
              >
                Apply Now
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </footer>
        <div className="sr-only">
          <h2>Comprehensive Equipment Financing and Business Loans</h2>
          <p>Vista Pacific Capital provides equipment financing solutions for businesses across the United States. We serve all 50 states, including California, Texas, Florida, and New York. Our business equipment loans cover a wide range of industries, from construction and medical to restaurant and manufacturing. We offer quick equipment financing with approvals in as little as 24 hours.</p>
          <h3>Construction and Heavy Equipment</h3>
          <p>Our construction equipment financing programs cover everything from excavators and dump trucks to cranes and other heavy machinery. We work with both new and used equipment vendors.</p>
          <h3>Medical and Dental Equipment</h3>
          <p>We provide medical equipment loans for practices of all sizes. This includes financing for dental equipment, imaging machines, and other specialized healthcare technology.</p>
          <h3>Restaurant and Hospitality</h3>
          <p>Our restaurant equipment financing helps new and existing establishments purchase kitchen equipment, point-of-sale systems, and furniture.</p>
        </div>
      </main>
    </>
  );
} 