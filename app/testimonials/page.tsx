"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHardHat, FaIndustry, FaQuoteLeft } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

type ChartDataPoint = {
  name: string;
  value: number;
};

const chartData: ChartDataPoint[] = [
  { name: 'Before', value: 100 },
  { name: 'After', value: 125 },
];

type Testimonial = {
  name: string;
  company: string;
  challenge: string;
  solution: string;
  results: string;
  industry: 'Manufacturing' | 'Construction';
};

const testimonials: Testimonial[] = [
  {
    name: "Client A",
    company: "Leading manufacturer of precision machined parts",
    challenge: "Client A faced the challenge of expanding its production capabilities to meet increasing demand. The company needed to acquire advanced CNC machines but was concerned about the large upfront capital expenditure required for these high-cost pieces of equipment.",
    solution: "Client A opted for equipment leasing through our financing program. They secured a lease for the CNC machines with a term of 60 months and a minimal advanced payment. The leasing arrangement provided them with the flexibility to upgrade to newer technology as it became available without being locked into outdated equipment.",
    results: "The financing solution allowed Client A to acquire the CNC machines promptly, enhancing their production capacity and efficiency. With predictable monthly payments, they managed their cash flow effectively and avoided large capital expenditures. The flexibility to upgrade equipment helped them stay competitive in the market, and the improved production capabilities resulted in a 25% increase in output within the first year. The client expressed high satisfaction with the leasing process and the positive impact it had on their operations.",
    industry: "Manufacturing"
  },
  {
    name: "Client B",
    company: "Prominent construction company",
    challenge: "Client B was preparing for a series of large-scale projects that required the purchase of several pieces of heavy construction equipment, including excavators and bulldozers. The company needed a financing solution that would accommodate their cash flow constraints and provide the flexibility to manage equipment needs across multiple projects.",
    solution: "Client B chose to finance their construction equipment through a lease agreement with terms of 84 months. The lease included an option for minimal advanced payment and covered both new and used equipment. This approach allowed them to acquire the equipment needed for their projects without significant upfront costs.",
    results: "The leasing arrangement enabled Client B to efficiently manage their cash flow while equipping their team with the necessary machinery. The predictable monthly payments helped with budgeting and financial planning. Additionally, the ability to choose between new and used equipment provided flexibility and cost savings. The company successfully completed their projects on time and within budget, reporting a 30% increase in project efficiency. Client B was very pleased with the ease of the leasing process and the operational benefits gained from the new equipment.",
    industry: "Construction"
  }
];

export default function Testimonials(): JSX.Element {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="w-full bg-indigo-dye text-white py-32 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Client Success Stories
          </motion.h1>
          <motion.p
            className="text-2xl mb-12 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover how our financing solutions drive business growth
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact" className="bg-light-sea-green text-white py-4 px-10 rounded-full text-xl font-semibold hover:bg-white hover:text-indigo-dye transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Start Your Success Story</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto py-24 px-4">
        <div className="grid grid-cols-1 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 mr-4">
                    {testimonial.industry === "Manufacturing" ? (
                      <FaIndustry className="w-16 h-16 text-light-sea-green" />
                    ) : (
                      <FaHardHat className="w-16 h-16 text-light-sea-green" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-dye">{testimonial.name}</h3>
                    <p className="text-light-sea-green">{testimonial.company}</p>
                  </div>
                </div>
                <FaQuoteLeft className="text-3xl text-light-sea-green mb-4" />
                <div className="text-gray-700 mb-4">
                  <h4 className="font-semibold text-lg mb-2 text-indigo-dye">Challenge:</h4>
                  <p>{testimonial.challenge}</p>
                  <h4 className="font-semibold text-lg mt-4 mb-2 text-indigo-dye">Solution:</h4>
                  <p>{testimonial.solution}</p>
                  <h4 className="font-semibold text-lg mt-4 mb-2 text-indigo-dye">Results:</h4>
                  <p>{testimonial.results}</p>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-lg text-indigo-dye mb-2">Performance Improvement:</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" stroke="#11B5B2" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <span className="text-sm text-light-sea-green mt-4 inline-block">{testimonial.industry}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full bg-light-sea-green text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Write Your Success Story?
          </motion.h2>
          <motion.p
            className="text-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our tailored equipment financing solutions can propel your business forward.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="bg-white text-light-sea-green py-4 px-10 rounded-full text-xl font-semibold hover:bg-indigo-dye hover:text-white transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Get Your Financing Solution</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}