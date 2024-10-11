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
    path: '/medical',
    content: [
      { title: 'Why Equipment Leasing is Essential for Medical Equipment Financing?', link: '/medical' },
      { title: 'Medical Equipment We Finance', link: '/medical' },
      { title: 'Apply now', link: '/contact' },

    ],
  },
  {
    name: 'Manufacturing Equipment Financing',
    path: '/manufacturing',
    content: [
      { title: 'Why Vista Pacific Capital is your Best Choice for Leasing Manufacturing Equipment', link: '/manufacturing' },
      { title: 'Manufacturing Equipment We Finance', link: '/manufacturing' },
      { title: 'Apply Now', link: '/contact' },
    ],
  },
  {
    name: 'Construction Equipment Financing',
    path: '/construction',
    content: [
      {
        title: 'Forestry, Landscaping, Excavation and Agriculture Financing',
        link: '/construction',
        subItems: [
          { title: 'Equipment We Finance', link: '/construction' },
        ],
      },
      {
        title: 'Concrete and Paving Equipment Financing',
        link: '/construction',
        subItems: [
          { title: 'Equipment We Finance', link: '/construction' },
        ],
      },
      {
        title: 'Building Construction Equipment Financing',
        link: '/construction',
        subItems: [
          { title: 'Equipment We Finance', link: '/construction' },
          { title: 'HVAC', link: '/construction' },
          { title: 'Plumbing', link: '/construction' },
          { title: 'Site Prep', link: '/construction' },
          { title: 'Electrical', link: '/construction' },
        ],
      },
      {
        title: 'Environment Construction Equipment Financing',
        link: '/construction',
        subItems: [
          { title: 'Waste Management Equipment Financing', link: '/construction' },
          { title: 'Landfill Equipment Financing', link: '/construction' },
        ],
      },
      {
        title: 'Highway Construction Equipment Financing',
        link: '/construction',
        subItems: [
          { title: 'Traffic Control Equipment', link: '/construction' },
          { title: 'Signage, etc.', link: '/construction' },
        ],
      },
      { title: 'Apply Now', link: '/contact' },
    ],
  },
  {
    name: 'Material Handling Equipment and Racking Financing',
    path: '/warehouse',
    content: [
      { title: 'Why Equipment Leasing is a Game Changer for Warehouse Racking Purchases', link: '/warehouse' },
      { title: 'Q&A with Founder about Financing for Racking', link: '/warehouse' },

      { title: 'Forklift Financing', link: '/warehouse' },
      { title: 'Apply Now', link: '/warehouse' },
    ],
  },
  {
    name: 'Restaurants',
    path: '/restaurant',
    content: [
      { title: 'Restaurant Equipment Financing', link: '/restaurant' },
      { title: 'Contact Now', link: '/contact' },
    ],
  },
  {
    name: 'Brewery and Distilling Equipment',
    path: '/brewery',
    content: [
      { title: 'Brewery Equipment Financing', link: '/brewery' },
      { title: 'Distilling Equipment Financing', link: '/brewery' },
      { title: 'Contact Now', link: '/contact' },
    ],
  },
  {
    name: 'Title Vehicles',
    path: '/vehicle',
    content: [
      { title: 'Commercial Vehicle Financing', link: '/vehicle' },
      { title: 'Contact Now', link: '/contact' },
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
              <Link
                key={industry.name}
                href={industry.path}
                onMouseEnter={() => setActiveIndustry(industry.name)}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  activeIndustry === industry.name
                    ? 'bg-light-sea-green text-white'
                    : 'text-indigo-dye hover:bg-gray-100'
                }`}
              >
                {industry.name}
              </Link>
            ))}
          </div>
          {activeIndustry && (
            <div className="w-64 bg-white py-2 border-l border-gray-200">
              {industriesData
                .find((industry) => industry.name === activeIndustry)
                ?.content.map((item) => (
                  <Link
                    key={item.title}
                    href={item.link}
                    className="block px-4 py-2 text-sm text-indigo-dye hover:bg-gray-100"
                  >
                    {item.title}
                  </Link>
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
          <div className="flex-shrink-0 lg:block hidden">
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
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {renderNavItem(navItems[0])} {/* Home */}
            <IndustriesServed />
            {navItems.slice(1).map(renderNavItem)}
          </div>
          <div className="lg:hidden flex items-center justify-center flex-grow">
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
          <div className="lg:hidden">
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
            className="lg:hidden"
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              {renderMobileNavItem(navItems[0])} {/* Home */}
              <div className="px-2 pt-2 pb-3 space-y-1">
                <IndustriesServed />
              </div>
              {navItems.slice(1).map(renderMobileNavItem)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default AppNavBar;