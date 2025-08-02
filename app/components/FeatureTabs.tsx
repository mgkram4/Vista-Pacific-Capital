"use client";

import Image from "next/image";
import { useState } from "react";

const tabsData = [
  {
    id: 1,
    title: "We Shop the Lenders",
    content:
      "We partner with a wide network of lenders to find you the most competitive financing rates and terms, so you don't have to spend your valuable time shopping around.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "We Understand Equipment Financing",
    content:
      "Our team specializes in equipment financing. We understand the nuances of the industry and can structure financing solutions that make sense for your business.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "A Built-In Source of Capital",
    content:
      "We provide a reliable source of capital, giving you the financial flexibility to acquire the equipment you need to grow your business without tying up your cash reserves.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "We Understand Time is of the Essence",
    content:
      "We know that in business, time is money. Our streamlined process ensures fast approvals and funding so you can get your equipment and get to work quickly.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Fast, Flexible, and Straightforward",
    content:
      "Our financing process is designed to be as simple and transparent as possible. We offer flexible terms to match your business's cash flow and financial situation.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Real People, Real Help",
    content:
      "When you work with us, you get a dedicated financing partner. Our team is here to provide personalized support and guidance throughout the entire process.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [contentVisible, setContentVisible] = useState(true);

  const handleTabClick = (tabId: number) => {
    setContentVisible(false);
    setTimeout(() => {
      setActiveTab(tabId);
      setContentVisible(true);
    }, 150); // a bit less than duration-300 to allow fade-out
  };
  
  const activeTabData = tabsData.find((tab) => tab.id === activeTab);

  return (
    <div className="w-full">
      {/* Why Choose Us Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Why Choose Us?
          </h1>
        </div>

        {/* Tabs Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column: Tabs */}
          <div className="md:col-span-1 flex flex-col space-y-4">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`p-6 text-left rounded-xl transition-all duration-300 flex-1 ${
                  activeTab === tab.id
                    ? "bg-[#FF7E47] text-white shadow-md"
                    : "bg-white text-[#0B2C4A] border border-gray-200 hover:shadow-md hover:bg-gray-50"
                }`}
              >
                <h3 className="font-semibold text-lg">{tab.title}</h3>
              </button>
            ))}
          </div>

          {/* Right Column: Content Card */}
          <div className="md:col-span-2 relative">
            {activeTabData && (
              <div
                className={`relative bg-white rounded-2xl shadow-lg p-8 transition-opacity duration-300 h-full flex flex-col ${contentVisible ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className="flex-grow">
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 bg-orange-100 text-[#FF7E47] rounded-full w-10 h-10 flex items-center justify-center">
                      {activeTabData.icon}
                    </div>
                    <div className="ml-4">
                        <h2 className="text-2xl font-semibold text-[#0B2C4A]">
                            {activeTabData.title}
                        </h2>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mt-2">
                    {activeTabData.content}
                  </p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-10 pointer-events-none">
                  <Image
                    src="/Images/logo-NO-BG.png"
                    alt="Watermark Logo"
                    width={150}
                    height={150}
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureTabs;
