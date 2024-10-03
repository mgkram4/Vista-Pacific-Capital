'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { FaBook, FaBookmark, FaBriefcase, FaChevronDown, FaChevronRight, FaCog, FaEnvelope, FaHome, FaInfoCircle } from 'react-icons/fa';

interface SubItem {
  name: string;
  path: string;
}

interface NavItem {
  name: string;
  path: string;
  icon: IconType;
  subItems?: SubItem[];
}

const industriesData = [
  {
    name: 'Medical Equipment Financing',
    content: [
      { title: 'Why Equipment Leasing is Essential for Medical Equipment Financing?', link: '/medical-leasing-importance' },
      { title: 'Medical Equipment We Finance', link: '/medical-equipment-list' },
      { title: 'Apply now', link: '/apply-medical' },
    ],
  },
  {
    name: 'Manufacturing Equipment Financing',
    content: [
      { title: 'Why Vista Pacific Capital is your Best Choice for Leasing Manufacturing Equipment', link: '/manufacturing-leasing-benefits' },
      { title: 'Manufacturing Equipment We Finance', link: '/manufacturing-equipment-list' },
      { title: 'Apply Now', link: '/apply-manufacturing' },
    ],
  },
  {
    name: 'Construction Equipment Financing',
    content: [
      {
        title: 'Forestry, Landscaping, Excavation and Agriculture Financing',
        link: '/forestry-landscaping-financing',
        subItems: [
          { title: 'Equipment We Finance', link: '/forestry-equipment-list' },
        ],
      },
      {
        title: 'Concrete and Paving Equipment Financing',
        link: '/concrete-paving-financing',
        subItems: [
          { title: 'Equipment We Finance', link: '/concrete-paving-equipment-list' },
        ],
      },
      {
        title: 'Building Construction Equipment Financing',
        link: '/building-construction-financing',
        subItems: [
          { title: 'Equipment We Finance', link: '/building-equipment-list' },
          { title: 'HVAC', link: '/hvac-financing' },
          { title: 'Plumbing', link: '/plumbing-financing' },
          { title: 'Site Prep', link: '/site-prep-financing' },
          { title: 'Electrical', link: '/electrical-financing' },
        ],
      },
      {
        title: 'Environment Construction Equipment Financing',
        link: '/environment-construction-financing',
        subItems: [
          { title: 'Waste Management Equipment Financing', link: '/waste-management-financing' },
          { title: 'Landfill Equipment Financing', link: '/landfill-equipment-financing' },
        ],
      },
      {
        title: 'Highway Construction Equipment Financing',
        link: '/highway-construction-financing',
        subItems: [
          { title: 'Traffic Control Equipment', link: '/traffic-control-equipment' },
          { title: 'Signage, etc.', link: '/construction-signage' },
        ],
      },
    ],
  },
  {
    name: 'Material Handling Equipment and Racking Financing',
    content: [
      { title: 'Why Equipment Leasing is a Game Changer for Warehouse Racking Purchases', link: '/warehouse-racking-leasing-benefits' },
      { title: 'Q&A with Founder about Financing for Racking', link: '/racking-financing-qa' },
      { title: 'Apply Now', link: '/apply-material-handling' },
      { title: 'Forklift Financing', link: '/forklift-financing' },
    ],
  },
  {
    name: 'Restaurants',
    content: [
      { title: 'Restaurant Equipment Financing', link: '/restaurant-equipment-financing' },
    ],
  },
  {
    name: 'Brewery and Distilling Equipment',
    content: [
      { title: 'Brewery Equipment Financing', link: '/brewery-equipment-financing' },
      { title: 'Distilling Equipment Financing', link: '/distilling-equipment-financing' },
    ],
  },
  {
    name: 'Title Vehicles',
    content: [
      { title: 'Commercial Vehicle Financing', link: '/commercial-vehicle-financing' },
    ],
  },
  {
    name: 'Traffic Equipment',
    content: [
      { title: 'Traffic Control Equipment Financing', link: '/traffic-equipment-financing' },
    ],
  },
];

const navItems: NavItem[] = [
  { name: 'Home', path: '/', icon: FaHome },
  { name: 'About', path: '/about', icon: FaInfoCircle },
  { name: 'Services', path: '/services', icon: FaBriefcase },
  { name: 'Partner Solutions', path: '/vendor', icon: FaBook },
  {
    name: 'Resources',
    path: '#',
    icon: FaBookmark,
    subItems: [
      { name: 'FAQ', path: '/faq' },
      { name: 'Blog', path: '/resources' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Testimonials', path: '/testimonials' },
      { name: "Section 179", path:"/tax" }
    ],
  },
  { name: 'Contact', path: '/contact', icon: FaEnvelope },
];

const IndustriesServed: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);

  return (
    <div className="relative group">
      <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-indigo-dye hover:text-light-sea-green hover:bg-white">
        <FaCog className="mr-1" />
        Industries Served
        <FaChevronRight className="ml-1" />
      </button>

      <div className="absolute left-0 mt-0 bg-white rounded-md shadow-lg ring-1 ring-indigo-dye ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <div className="flex">
          <div className="w-64 py-2">
            {industriesData.map((industry) => (
              <button
                key={industry.name}
                onMouseEnter={() => setActiveIndustry(industry.name)}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  activeIndustry === industry.name
                    ? 'bg-light-sea-green text-white'
                    : 'text-indigo-dye hover:bg-gray-100'
                }`}
              >
                {industry.name}
              </button>
            ))}
          </div>
          {activeIndustry && (
            <div className="w-64 bg-white py-2 border-l border-gray-200">
              {industriesData
                .find((industry) => industry.name === activeIndustry)
                ?.content.map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    className="block px-4 py-2 text-sm text-indigo-dye hover:bg-gray-100"
                  >
                    {item.title}
                  </a>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AppNavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileDropdown = (name: string) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  const renderNavItem = (item: NavItem): JSX.Element => (
    <div key={item.name} className="relative group">
      {item.subItems ? (
        <>
          <button
            className="px-3 py-2 rounded-md text-sm font-medium text-indigo-dye hover:text-light-sea-green hover:bg-white flex items-center"
          >
            <item.icon className="mr-1" />
            {item.name}
            <FaChevronDown className="ml-1" />
          </button>
          <div className="absolute left-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-indigo-dye ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            {item.subItems?.map((subItem) => (
              <Link
                key={subItem.name}
                href={subItem.path}
                className="block px-4 py-2 text-sm text-indigo-dye hover:text-light-sea-green hover:bg-white"
              >
                {subItem.name}
              </Link>
            ))}
          </div>
        </>
      ) : (
        <Link
          href={item.path}
          className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${
            pathname === item.path
              ? 'bg-light-sea-green text-white'
              : 'text-indigo-dye hover:text-light-sea-green hover:bg-white'
          }`}
        >
          <item.icon className="mr-1" />
          {item.name}
        </Link>
      )}
    </div>
  );

  const renderMobileNavItem = (item: NavItem): JSX.Element => (
    <div key={item.name} className="px-2 pt-2 pb-3 space-y-1">
      {item.subItems ? (
        <>
          <button
            onClick={() => toggleMobileDropdown(item.name)}
            className="px-3 py-2 rounded-md text-base font-medium text-indigo-dye hover:text-light-sea-green hover:bg-white flex items-center w-full"
          >
            <item.icon className="mr-1" />
            {item.name}
            <FaChevronDown className={`ml-auto transform transition-transform duration-200 ${activeMobileDropdown === item.name ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {activeMobileDropdown === item.name && (
              <motion.div
                className="space-y-1 pl-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                {item.subItems?.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.path}
                    className="block px-3 py-2 rounded-md text-base font-medium text-indigo-dye hover:text-light-sea-green hover:bg-white"
                    onClick={toggleMobileMenu}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <Link
          href={item.path}
          className={`block px-3 py-2 rounded-md text-base font-medium ${
            pathname === item.path
              ? 'bg-light-sea-green text-white'
              : 'text-indigo-dye hover:text-light-sea-green hover:bg-white'
          }`}
          onClick={toggleMobileMenu}
        >
          <item.icon className="mr-1" />
          {item.name}
        </Link>
      )}
    </div>
  );

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative flex-shrink-0">
                <Image 
                  src="/Images/logo.png"
                  width={60}
                  height={60}
                  alt="Logo"
                  objectFit="cover"
                />
              </div>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <IndustriesServed />
            {navItems.map(renderNavItem)}
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-dye hover:text-light-sea-green hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-light-sea-green"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden"
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <IndustriesServed />
              {navItems.map(renderMobileNavItem)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default AppNavBar;