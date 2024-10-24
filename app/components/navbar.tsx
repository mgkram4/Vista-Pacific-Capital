'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { equipmentLinks, navigationSchema } from '../lib/metadata/navbar';
import { NavLink } from './navlinks';

const AppNavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(navigationSchema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" role="banner">
      <nav 
        className={`w-full bg-white backdrop-blur-md bg-opacity-95 transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[1400px] mx-auto px-4">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-20 md:h-24' : 'h-24 md:h-28'
          }`}>
            {/* Mobile Menu Button */}
            <div className="lg:hidden z-20">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMobileMenuOpen ? "close" : "menu"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-900"
                  >
                    {isMobileMenuOpen ? (
                      <X className="w-8 h-8" />
                    ) : (
                      <Menu className="w-8 h-8" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 relative">
              <Link href="/" aria-label="Vista Pacific Capital - Home">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative"
                >
                  <Image 
                    src="/Images/logo2.png"
                    width={300}
                    height={100}
                    alt="Vista Pacific Capital Logo"
                    className={`w-auto transition-all duration-300 ${
                      isScrolled 
                        ? 'h-16 md:h-20'
                        : 'h-20 md:h-24'
                    }`}
                    priority
                    quality={100}
                    style={{ 
                      objectFit: 'contain',
                      objectPosition: 'center' 
                    }}
                  />
                </motion.div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* About Link - Centered */}
              <Link
                href="/about"
                className={`flex items-center justify-center p-3 mx-4 text-lg font-medium transition-all duration-300 hover:text-[#5BB5B0] ${
                  pathname === '/about' ? 'text-[#5BB5B0]' : 'text-[#1B365D]'
                }`}
              >
                <span className="text-center">About Us</span>
              </Link>

              {/* Equipment Links */}
              <div className="flex items-center justify-center space-x-2">
                {equipmentLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    link={link}
                    isActive={pathname === link.path}
                  />
                ))}
              </div>

              {/* Quote Button - Centered and Smaller */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:flex items-center justify-center ml-4"
              >
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 
                    text-white text-sm font-bold rounded-lg shadow-lg hover:shadow-xl 
                    transition-all duration-300 text-center"
                  aria-label="Request an equipment financing quote"
                >
                  GET QUOTE
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden border-t border-gray-100 bg-white shadow-lg"
            >
              <div className="max-h-[calc(100vh-5rem)] overflow-y-auto px-4 py-6">
                {/* About Link Mobile */}
                <Link
                  href="/about"
                  className={`block p-4 text-center rounded-lg mb-4 text-lg font-medium ${
                    pathname === '/about' 
                      ? 'bg-[#5BB5B0]/10 text-[#5BB5B0]' 
                      : 'text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>

                {/* Equipment Links Mobile */}
                {equipmentLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-3"
                  >
                    <div className="bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <NavLink
                        link={link}
                        isActive={pathname === link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                      />
                    </div>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: equipmentLinks.length * 0.1 }}
                  className="mt-8 sticky bottom-0 bg-white pt-4"
                >
                  <Link
                    href="/contact"
                    className="block w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 
                      text-white text-lg font-bold rounded-lg shadow-lg text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Request an equipment financing quote"
                  >
                    GET YOUR QUOTE NOW
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default AppNavBar;