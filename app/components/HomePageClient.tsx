"use client"

import { motion } from 'framer-motion';
import {
  Building2,
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
    features: ["New or refurbished racking systems", "Labor and installation installation cost included", "Application only financing up to $500,000", "Can included other items (security equipment, forklifts, etc)", "Projects up to $10 million"],
    icon: Factory,
    href: "/equipment/racking-material-handling",
    imageSrc: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?_gl=1*qr8qt3*_ga*MTMyNjA4MzY5Ni4xNzU0MDg0NDE3*_ga_8JE65Q40S6*czE3NTQwODQ0MTYkbzEkZzEkdDE3NTQwODQ3ODYkajYkbDAkaDA."
  },
  {
    title: "Construction Equipment Financing",
    description: "Comprehensive financing for construction equipment from dealers or private parties.",
    features: ["New and Use Equipment", "Dealer or private party", "Title or non-titled", "Application Only up to $750,000"],
    icon: Building2,
    href: "/equipment/construction",
    imageSrc: "/Images/gen-ai/img1.png"
  },
  {
    title: "Medical Equipment Financing",
    description: "Specialized financing for medical practices of all sizes with flexible application limits.",
    features: ["New and Used Medical Equipment", "Funding for specialized equipment", "Refurbished equipment is okay", "Small practices to large surgery centers", "Special Application Only limits for MD's"],
    icon: Stethoscope,
    href: "/equipment/medical",
    imageSrc: "https://images.pexels.com/photos/11288658/pexels-photo-11288658.jpeg?_gl=1*8sz3nl*_ga*MTMyNjA4MzY5Ni4xNzU0MDg0NDE3*_ga_8JE65Q40S6*czE3NTQwODQ0MTYkbzEkZzEkdDE3NTQwODQ2MjAkajE5JGwwJGgw"
  },
  {
    title: "Manufacturing Equipment Financing",
    description: "Comprehensive manufacturing equipment financing with competitive rates and international vendor support.",
    features: ["Full Production Line Programs", "Can finance from international vendors", "Installation and shipping costs included", "Aggressive rates"],
    icon: Cog,
    href: "/equipment/cnc-machine",
    imageSrc: "https://images.pexels.com/photos/19233057/pexels-photo-19233057.jpeg?_gl=1*17r2db3*_ga*MTMyNjA4MzY5Ni4xNzU0MDg0NDE3*_ga_8JE65Q40S6*czE3NTQwODQ0MTYkbzEkZzEkdDE3NTQwODQ0NTEkajI1JGwwJGgw"
  },
  {
    title: "Restaurant Equipment Financing",
    description: "Complete restaurant financing solutions for new locations and equipment upgrades.",
    features: ["Furniture, POS, kitchen equipment", "New and used equipment", "Second locations and existing locations", "A through C Credit"],
    icon: UtensilsCrossed,
    href: "/equipment/restaurant",
    imageSrc: "/Images/gen-ai/img5.png"
  },
  {
    title: "Transportation Financing Programs",
    description: "Flexible transportation financing for all types of commercial vehicles and drivers.",
    features: ["Long and short haul", "New and used", "Dealer or private party", "No fleet requirement", "1099 drivers up to $250,000 with comparable borrowing"],
    icon: Truck,
    href: "/equipment/dump-truck",
    imageSrc: "/Images/gen-ai/img6.png"
  }
];

const stats: Stat[] = [
  {
    value: "$50M",
    label: "Maximum Funding",
    description: "Financing from $20,000 to $50 million"
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
    description: "Fast approvals for qualified application-only transactions.",
    icon: Clock,
    points: ["2-minute application", "Soft credit pull only", "Application Only up to $750,000", "Financing from $20,000 to $50 million"]
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
    a: "Most applications receive fast approval. Funding typically occurs within 24-48 hours of document completion."
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
    a: "We offer equipment financing from $20,000 up to $50 million, with flexible terms and payment options to match your business needs."
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
      <main className="bg-white font-sans">
        <section className="relative w-full min-h-screen">
          {/* Full-screen background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/Images/bg-wave2.png"
              alt="Scenic coastal view for equipment financing background"
              fill
              priority
              className="object-cover"
              quality={100}
            />
          </div>

          {/* Content layout */}
          <div className="relative z-10 lg:grid lg:grid-cols-10 w-full min-h-screen">
            {/* Left content area with overlay */}
            <div className="lg:col-span-3 bg-[#0D3853]/95 text-white flex flex-col justify-center p-8 sm:p-12 lg:p-16 min-h-screen lg:min-h-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-full max-w-md mx-auto"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#F2F2F2] to-[#B3B3B3] mb-6">
                Your Growth 
                  <span className="bg-gradient-to-r from-[#FF6B35] to-[#ff825c] bg-clip-text text-transparent"> Partner</span>
                </h1>
                <p className="text-lg md:text-xl text-[#B3B3B3] mb-8">
                Equipment Financing from $20,000 to $50 million
                </p>
                <Link
                  href="/apply"
                  className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                    text-white px-8 py-4 rounded-lg font-semibold text-lg 
                    shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
                    transform hover:-translate-y-1 transition-all duration-300"
                >
                  Apply Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>

            {/* Right-side spacer for desktop grid */}
            <div className="hidden lg:block lg:col-span-7">
              {/* This area is transparent, revealing the background image */}
            </div>
          </div>
        </section>
        
        {/* Section Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#0EB5B2]/20 to-[#0D3853]/20"></div>
        
        {/* Benefits Section - adjust spacing here */}
        <section className="py-24 bg-gray-50">
          <h2 className="sr-only">Our Financing Benefits</h2>
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D3853]">
                Benefits of Our Equipment Financing
              </h2>
              <p className="text-lg text-[#B3B3B3]">
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
                    <p className="text-[#B3B3B3] mb-4">{benefit.description}</p>
                    <ul className="space-y-2">
                      {benefit.points.map((point, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-[#B3B3B3]">
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
                  src="/Images/gen-ai/img7.png"
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
        <section className="py-24 bg-white">
          <h2 className="sr-only">Industries We Serve</h2>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D3853]">
                Equipment Financing for Your Industry
              </h2>
              <p className="text-lg text-[#B3B3B3] mt-4 max-w-3xl mx-auto">
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
                  <p className="text-[#B3B3B3] mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-[#B3B3B3]">
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
              <h2 className="text-4xl md:text-5xl font-bold text-[#0D3853] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-[#B3B3B3]">
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
                  <h3 className="text-xl font-bold text-[#0D3853] mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-[#B3B3B3]">{faq.a}</p>
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
              src="/Images/bg-wave2.png"
              alt="Modern office environment for equipment financing consultation"
              fill
              className="object-cover"
              quality={75}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D3853]/05 via-[#0D3853]/02 to-[#0EB5B2]/02" />
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
              <p className="text-xl text-[#B3B3B3] max-w-3xl mx-auto pb-4">
                Get pre-qualified in minutes with no impact to your credit score
              </p>
              <Link
                href="/apply"
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