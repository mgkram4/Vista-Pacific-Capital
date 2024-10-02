'use client';

import { AnimatePresence, motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { FaBook, FaBookmark, FaBriefcase, FaChevronDown, FaCog, FaEnvelope, FaHome, FaInfoCircle } from 'react-icons/fa';

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

const navItems: NavItem[] = [
  { name: 'Home', path: '/', icon: FaHome },
  { name: 'About', path: '/about', icon: FaInfoCircle },
  {
    name: 'Industries Served',
    path: '#',
    icon: FaCog,
    subItems: [
      { name: 'Medical Equipment', path: '/medical' },
      { name: 'Warehouse Racking', path: '/warehouse' },
      { name: 'Manufacturing Equipment', path: '/manufacturing' },
      { name: 'Brewery Equipment', path: '/brewery' },
      { name: 'Construction Equipment', path: '/construction' },
      { name: 'Vehicle Programs', path: '/vehicle' },
      { name: 'Restaurant Equipment', path: '/restaurant' },
    ],
  },
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
      {name: "Section 179", path:"/tax"}
    ],
  },
  { name: 'Contact', path: '/contact', icon: FaEnvelope },
];
const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const AppNavBar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();


  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

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
            onClick={() => toggleDropdown(item.name)}
            className="px-3 py-2 rounded-md text-sm font-medium text-indigo-dye hover:text-light-sea-green hover:bg-white flex items-center"
          >
            <item.icon className="mr-1" />
            {item.name}
            <FaChevronDown className={`ml-1 transform transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {activeDropdown === item.name && (
              <motion.div
                className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-indigo-dye ring-opacity-5 focus:outline-none z-50"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropdownVariants}
              >
                {item.subItems?.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.path}
                    className="block px-4 py-2 text-sm text-indigo-dye hover:text-light-sea-green hover:bg-white"
                    onClick={() => setActiveDropdown(null)}
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
            className=" px-3 py-2 rounded-md text-base font-medium text-indigo-dye hover:text-light-sea-green hover:bg-white flex items-center w-full"
          >
            <item.icon className="mr-1" />
            {item.name}
            <FaChevronDown className={`ml-auto transform transition-transform duration-200 ${activeMobileDropdown === item.name ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {activeMobileDropdown === item.name && (
              <motion.div
                className="space-y-1 pl-6"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropdownVariants}
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
                <Link href="/" className="flex items-center relative">
                  <Image 
                    src="/Images/logo.png"
                    width={60}
                    height={60}
                    alt="Logo"
                    objectFit="cover"
                  />
                </Link>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
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
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              {navItems.map(renderMobileNavItem)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default AppNavBar;