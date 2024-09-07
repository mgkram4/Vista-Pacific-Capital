'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaChevronDown, FaCog, FaEnvelope, FaHome, FaInfoCircle } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

export default function AppNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [equipmentDropdownOpen, setEquipmentDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/', icon: FaHome },
    { name: 'About', path: '/about', icon: FaInfoCircle },
    {
      name: 'Equipment Financing',
      path: '#',
      icon: FaCog,
      subItems: [
        { name: 'Medical Equipment', path: '/medical' },
        { name: 'Warehouse Racking', path: '/warehouse' },
        { name: 'Manufacturing Equipment', path: '/manufacturing' },
        { name: 'Brewery Equipment', path: '/brewery' },
        { name: 'Construction Equipment', path: '/construction' },
        { name: 'Vehicle Programs', path: '/vehicle' },
      ],
    },
    { name: 'Contact', path: '/contact', icon: FaEnvelope },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/" className={`font-bold text-2xl transition-colors duration-300 text-blue-400`}>
              <GiReceiveMoney className="inline-block mr-2 text-3xl" />
              Vista Pacific Capital
            </Link>
          </motion.div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.subItems ? (
                    <>
                      <motion.button
                        onClick={() => setEquipmentDropdownOpen(!equipmentDropdownOpen)}
                        className={`px-4 py-2 rounded-md text-lg font-medium transition-colors duration-300 text-blue-300 hover:text-blue-100`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <item.icon className="inline-block mr-2" />
                        {item.name}
                        <FaChevronDown className="inline-block ml-2" />
                      </motion.button>
                      <AnimatePresence>
                        {equipmentDropdownOpen && (
                          <motion.div 
                            className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.subItems.map((subItem) => (
                              <motion.div
                                key={subItem.name}
                                whileHover={{ backgroundColor: "#2a4365", color: "#63b3ed" }}
                              >
                                <Link
                                  href={subItem.path}
                                  className="block px-4 py-2 text-sm text-blue-300 hover:text-blue-100"
                                  onClick={() => setEquipmentDropdownOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={item.path}
                        className={`px-4 py-2 rounded-md text-lg font-medium transition-colors duration-300 ${
                          pathname === item.path
                            ? 'bg-blue-600 text-white'
                            : 'text-blue-300 hover:text-blue-100'
                        }`}
                      >
                        <item.icon className="inline-block mr-2" />
                        {item.name}
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-blue-300 hover:text-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg" 
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.subItems ? (
                    <>
                      <motion.button
                        onClick={() => setEquipmentDropdownOpen(!equipmentDropdownOpen)}
                        className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-blue-300 hover:text-blue-100 hover:bg-blue-700"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <item.icon className="inline-block mr-2" />
                        {item.name}
                        <FaChevronDown className="inline-block ml-2" />
                      </motion.button>
                      <AnimatePresence>
                        {equipmentDropdownOpen && (
                          <motion.div 
                            className="pl-4"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.subItems.map((subItem) => (
                              <motion.div
                                key={subItem.name}
                                whileHover={{ backgroundColor: "#2a4365", color: "#63b3ed" }}
                              >
                                <Link
                                  href={subItem.path}
                                  className="block px-3 py-2 rounded-md text-base font-medium text-blue-300 hover:text-blue-100"
                                  onClick={() => {
                                    setEquipmentDropdownOpen(false);
                                    setIsOpen(false);
                                  }}
                                >
                                  {subItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={item.path}
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                          pathname === item.path
                            ? 'bg-blue-600 text-white'
                            : 'text-blue-300 hover:text-blue-100 hover:bg-blue-700'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="inline-block mr-2" />
                        {item.name}
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}