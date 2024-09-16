"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaHardHat, FaIndustry, FaStethoscope, FaTruck, FaUtensils, FaWarehouse } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

export default function BlogResources() {
  const articles = [
    {
      title: "Why Equipment Leasing is a Game Changer for Warehouse Racking Purchases",
      content: `
        Equipment leasing offers significant advantages for warehouse racking purchases:
        
        1. Cost Management and Financial Flexibility: Avoid large upfront capital expenditures, preserve cash, and manage working capital effectively.
        2. Adaptability to Changing Needs: Upgrade or adjust racking systems as warehouse requirements evolve, staying competitive and efficient.
        3. Simplified Budgeting and Tax Benefits: Enjoy predictable monthly payments and potential tax advantages with lease payments often considered operational expenses.
        4. Streamlined Process: Quick approval process with minimal documentation required.
        
        With leasing terms up to 72 months and same-day qualifications available, equipment leasing provides a flexible solution for businesses looking to optimize their warehouse operations.
      `,
      icon: FaWarehouse,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "Warehouse Solutions"
    },
    {
      title: "The Benefits of Using Equipment Financing for Restaurant Equipment",
      content: `
        Equipment financing offers several key benefits for restaurants:

        1. Improved Cash Flow Management: Spread the cost of new equipment over time with manageable monthly payments.
        2. Access to the Latest Technology: Invest in state-of-the-art appliances without the full upfront cost, improving efficiency and food quality.
        3. Support for Startups: Overcome the financial hurdle of acquiring essential equipment for new restaurant ventures.
        4. Streamlined Financing Process: Enjoy a hassle-free application process with tailored financing solutions.

        By leveraging equipment financing, restaurants can manage their cash flow, stay updated with the latest technology, and support new ventures while enjoying a smooth and efficient financing process.
      `,
      icon: FaUtensils,
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      category: "Restaurant Industry"
    },
    {
      title: "Why Equipment Leasing is Essential for Medical Equipment Financing",
      content: `
        Equipment leasing provides crucial benefits for medical equipment financing:

        1. Cost Management and Financial Flexibility: Avoid substantial upfront capital expenditures and preserve cash flow.
        2. Adaptability to Evolving Needs: Upgrade equipment as new advancements become available, maintaining high standards of care.
        3. Simplified Budgeting and Tax Benefits: Enjoy predictable monthly payments and potential tax advantages.
        4. Streamlined Process: Quick approvals with minimal documentation required.

        Whether you're managing a hospital, surgery center, or ambulance service, leasing offers a strategy to acquire essential equipment while maintaining financial flexibility. With terms up to 60 months and same-day qualifications available, medical equipment leasing provides a tailored solution for healthcare providers.
      `,
      icon: FaStethoscope,
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "Healthcare"
    },
    {
      title: "How Equipment Leasing Provides Capital for Breweries",
      content: `
        Equipment leasing offers several advantages for breweries:

        1. Lower Upfront Costs: Access necessary brewing equipment without depleting cash reserves.
        2. Preserve Credit Lines: Keep credit lines open for other operational needs or opportunities.
        3. Easier Equipment Upgrades: Stay competitive with the latest brewing technology without the burden of ownership.
        4. Tax Benefits and Write-Offs: Potential tax advantages with lease payments often considered operational expenses.
        5. Manage Financial Risk: Minimize financial vulnerability with flexible payment options.
        6. Scalability and Expansion: Easily scale up production capacity as demand grows.

        For breweries at any stage of development, equipment leasing can be the key to unlocking success and ensuring long-term sustainability in the competitive craft brewing industry.
      `,
      icon: FaIndustry,
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "Brewery Industry"
    },
    {
      title: "Why Vista Pacific Capital is Your Premier Choice for Leasing Title Vehicles",
      content: `
        Vista Pacific Capital offers unique advantages for leasing title vehicles:

        1. Tailored Leasing Solutions: Customized options for cars, trucks, and specialized vehicles.
        2. Financial Flexibility: Avoid large upfront costs and preserve capital with flexible leasing structures.
        3. Industry Expertise: Benefit from a team with extensive experience in the title vehicle sector.
        4. Vendor Programs: Comprehensive programs streamline the leasing process for vendors and clients.
        5. Exceptional Customer Service: Enjoy responsive support and a smooth leasing experience.

        Whether you're a vendor aiming to expand your offerings or a client looking for a seamless leasing experience, Vista Pacific Capital provides the flexibility and expertise needed for optimal title vehicle leasing arrangements.
      `,
      icon: FaTruck,
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "Transportation"
    },
    {
      title: "Why Vista Pacific Capital is Your Best Choice for Leasing Manufacturing Equipment",
      content: `
        Vista Pacific Capital excels in providing manufacturing equipment leasing solutions:

        1. Tailored Leasing Solutions: Customized options to meet the unique needs of your manufacturing operation.
        2. Financial Flexibility: Preserve capital and avoid large upfront costs with diverse leasing structures.
        3. Industry Expertise: Benefit from valuable insights and advice tailored to the manufacturing sector.
        4. Vendor Programs: Streamlined equipment acquisition process for vendors and their clients.
        5. Exceptional Customer Service: Enjoy a hassle-free leasing experience with responsive support.

        By choosing Vista Pacific Capital for your manufacturing equipment leasing needs, you can optimize your operations and drive business growth with confidence.
      `,
      icon: FaHardHat,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "Manufacturing"
    }
  ];

  const recentFinancing = [
    { amount: "$245,000", description: "Warehouse Equipment" },
    { amount: "$128,000", description: "Restaurant Equipment" },
    { amount: "$1,500,000", description: "Construction Equipment" },
    { amount: "$350,000", description: "Medical Equipment" }
  ];

  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white py-32 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Industry Insights
          </motion.h1>
          <motion.p
            className="text-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive information to power your equipment financing decisions
          </motion.p>
        </div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        ></motion.div>
      </section>

      {/* Articles Section */}
      <section className="max-w-6xl mx-auto py-24 px-4">
        <div className="grid grid-cols-1 gap-16">
          {articles.map((article, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="relative h-64 md:h-full">
                    <Image 
                      src={article.image}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center mb-4">
                    <article.icon className="text-2xl text-blue-400 mr-2" />
                    <span className="text-sm text-blue-300">{article.category}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{article.title}</h3>
                  <div className="text-gray-400 space-y-2">
                    {article.content.split('\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recent Financing Section */}
      <section className="w-full bg-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Recently Financed</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {recentFinancing.map((item, index) => (
              <motion.div
                key={index}
                className="bg-blue-700 p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-2xl font-bold mb-2">{item.amount}</p>
                <p className="text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full bg-blue-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Explore Your Financing Options?
          </motion.h2>
          <motion.p
            className="text-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our equipment financing solutions can help your business thrive.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="bg-white text-blue-900 py-4 px-10 rounded-full text-xl font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
              <GiReceiveMoney className="mr-3 text-3xl" />
              <span>Contact Us Today</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}