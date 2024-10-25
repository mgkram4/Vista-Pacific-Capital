'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// Type definitions
interface StructuredDataWebPage {
  "@type": "WebPage";
  name: string;
  url: string;
}

interface StructuredData {
  "@context": "https://schema.org";
  "@type": "SiteNavigationElement";
  name: string;
  description: string;
  hasPart: StructuredDataWebPage[];
}

interface EquipmentLink {
  topText: string;
  bottomText: string;
  path: string;
  description: string;
}

interface NavLinkProps {
  link: EquipmentLink;
  isActive: boolean;
  onClick?: () => void;
}

// Structured data for SEO
const structuredData: StructuredData = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  "name": "Vista Pacific Capital Navigation",
  "description": "Navigation menu for Vista Pacific Capital's equipment financing options",
  "hasPart": [
    {
      "@type": "WebPage",
      "name": "Construction Equipment",
      "url": "/construction"
    }
  ]
};

const equipmentLinks: EquipmentLink[] = [
  {
    topText: 'Construction',
    bottomText: 'Equipment',
    path: '/construction',
    description: 'Finance construction equipment'
  },
  {
    topText: 'Medical',
    bottomText: 'Equipment',
    path: '/medical',
    description: 'Healthcare equipment financing'
  },
  {
    topText: 'Restaurant',
    bottomText: 'Equipment',
    path: '/restaurant',
    description: 'Restaurant equipment loans'
  },
  {
    topText: 'Used',
    bottomText: 'Equipment',
    path: '/used',
    description: 'Used equipment financing'
  },
  {
    topText: 'Brewery',
    bottomText: 'Equipment',
    path: '/brewery',
    description: 'Brewery equipment funding'
  },
  {
    topText: 'Crane',
    bottomText: 'Financing',
    path: '/crane',
    description: 'Crane financing solutions'
  },
  {
    topText: 'Dental',
    bottomText: 'Equipment',
    path: '/dental',
    description: 'Dental practice equipment'
  },
  {
    topText: 'Excavator',
    bottomText: 'Financing',
    path: '/excavator',
    description: 'Excavator financing options'
  },
  {
    topText: 'Dump Truck',
    bottomText: 'Financing',
    path: '/dump-truck',
    description: 'Dump truck financing'
  },
  {
    topText: 'Box Truck',
    bottomText: 'Financing',
    path: '/box-truck',
    description: 'Box truck financing'
  },
  {
    topText: 'CNC Machine',
    bottomText: 'Financing',
    path: '/cnc',
    description: 'CNC machine financing'
  }
];

const NavLink: React.FC<NavLinkProps> = ({ link, isActive, onClick }) => {
  return (
    <Link
      href={link.path}
      onClick={onClick}
      className={`group relative p-2 transition-all duration-300 ${
        isActive ? 'text-[#5BB5B0]' : 'text-[#1B365D]'
      }`}
      aria-label={`${link.topText} ${link.bottomText}`}
      title={link.description}
    >
      <div className="flex flex-col items-center">
        <span className="text-xs xl:text-sm font-medium whitespace-nowrap">
          {link.topText}
        </span>
        <span className="text-xs xl:text-sm font-medium whitespace-nowrap">
          {link.bottomText}
        </span>
        {/* Modern hover effect */}
        <motion.div
          className={`absolute bottom-0 left-0 h-0.5 bg-[#5BB5B0] w-0 group-hover:w-full transition-all duration-300 ${
            isActive ? 'w-full' : ''
          }`}
        />
      </div>
    </Link>
  );
};

const AppNavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    // Add structured data to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <header className="relative z-50" role="banner">
      <nav 
        className={`w-full bg-white backdrop-blur-md bg-opacity-90 transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[1400px] mx-auto px-4">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-24 md:h-28' : 'h-28 md:h-32'
          }`}>
            {/* Mobile layout container */}
            <div className="w-full flex items-center justify-between lg:justify-start relative">
              {/* Hamburger menu - left on mobile */}
              <div className="lg:hidden order-1 z-20">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMobileMenuOpen(!isMobileMenuOpen);
                  }}
                  className="p-2 text-[#1B365D] hover:text-[#5BB5B0] transition-colors focus:outline-none"
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMobileMenuOpen}
                >
                  <motion.div
                    initial={false}
                    animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isMobileMenuOpen ? (
                      <X className="w-6 h-6" />
                    ) : (
                      <Menu className="w-6 h-6" />
                    )}
                  </motion.div>
                </button>
              </div>

              {/* Logo - centered and 2x larger */}
              <div className="flex-shrink-0 absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-0 lg:transform-none order-2">
                <Link href="/" aria-label="Vista Pacific Capital Home">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Image 
                      src="/Images/logo.png"
                      width={400}
                      height={160}
                      alt="Vista Pacific Capital"
                      className={`transition-all duration-300 w-auto ${
                        isScrolled ? 'h-20 md:h-24' : 'h-24 md:h-28'
                      }`}
                      priority
                    />
                  </motion.div>
                </Link>
              </div>

              {/* Quote Button - right on mobile */}
              <div className="lg:hidden order-3 z-20">
                <Link
                  href="/contact"
                  className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 
                    text-white text-xs font-medium rounded-lg shadow-md 
                    hover:shadow-lg transition-all duration-200"
                  aria-label="Request a quote"
                >
                  QUOTE
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-1 xl:space-x-2 flex-grow justify-center">
              {equipmentLinks.map((link) => (
                <NavLink
                  key={link.path}
                  link={link}
                  isActive={pathname === link.path}
                />
              ))}
            </div>

            {/* Desktop Quote Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block"
            >
              <Link
                href="/contact"
                className="ml-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 
                  text-white text-sm font-bold rounded-lg shadow-lg hover:shadow-xl 
                  transition-all duration-300 whitespace-nowrap transform hover:-translate-y-0.5"
                aria-label="Request a quote"
              >
                GET QUOTE
              </Link>
            </motion.div>
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="max-h-[calc(100vh-5rem)] overflow-y-auto px-4 py-4"
              >
                {equipmentLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-2"
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

                {/* Mobile menu CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: equipmentLinks.length * 0.1 }}
                  className="mt-6 text-center"
                >
                  <Link
                    href="/contact"
                    className="inline-block w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 
                      text-white text-sm font-bold rounded-lg shadow-md hover:shadow-lg 
                      transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    GET YOUR QUOTE NOW
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default AppNavBar;