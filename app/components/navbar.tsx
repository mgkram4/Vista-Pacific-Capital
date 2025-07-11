'use client';

import { Disclosure } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

interface StructuredDataWebPage {
  "@type": "WebPage";
  name: string;
  url: string;
  description: string;
  mainEntityOfPage: {
    "@type": "WebPage";
    "@id": string;
  };
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
  isCallToAction?: boolean;
  style?: {
    background: string;
    text: string;
    hover: string;
  };
}

export const SITE_NAME = 'Vista Pacific Capital';
export const BASE_URL = 'https://vistapacificcapital.com';

export const navigationSchema: StructuredData = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  "name": "Industry Solutions",
  "description": "Complete industry financing solutions for businesses across various sectors",
  "hasPart": [
    {
      "@type": "WebPage",
      "name": "All Equipment Financing Options",
      "url": `${BASE_URL}/equipment`,
      "description": "Explore all equipment financing options",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${BASE_URL}/equipment`
      }
    },
    {
      "@type": "WebPage",
      "name": "Material Handling Equipment Financing",
      "url": `${BASE_URL}/equipment/material-handling`,
      "description": "Material handling and warehouse equipment financing solutions",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${BASE_URL}/equipment/material-handling`
      }
    },
    {
      "@type": "WebPage",
      "name": "Construction Equipment Financing",
      "url": `${BASE_URL}/equipment/construction`,
      "description": "Specialized financing for construction equipment",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${BASE_URL}/equipment/construction`
      }
    },
    {
      "@type": "WebPage",
      "name": "Medical Equipment Financing",
      "url": `${BASE_URL}/equipment/medical`,
      "description": "Healthcare equipment financing solutions",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${BASE_URL}/equipment/medical`
      }
    },
    {
      "@type": "WebPage",
      "name": "Payment Calculator",
      "url": `${BASE_URL}/calculator`,
      "description": "Calculate equipment financing payments",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${BASE_URL}/calculator`
      }
    }
  ]
};

export const equipmentLinks: EquipmentLink[] = [
  {
    topText: 'Payment',
    bottomText: 'Calculator',
    path: '/calculator',
    description: 'Calculate your equipment financing payments',
    style: {
      background: 'bg-[#1B365D]',
      text: 'text-white',
      hover: 'hover:bg-[#152a4a]'
    }
  },
  {
    topText: 'All',
    bottomText: 'Equipment',
    path: '/equipment',
    description: 'Explore all equipment financing options'
  },
  {
    topText: 'Racking and Material',
    bottomText: 'Handling Equipment',
    path: '/equipment/racking-material-handling',
    description: 'Material handling and warehouse equipment financing solutions'
  },
  {
    topText: 'Construction',
    bottomText: 'Equipment',
    path: '/equipment/construction',
    description: 'Finance construction equipment with competitive rates and flexible terms'
  },
  {
    topText: 'Medical',
    bottomText: 'Equipment',
    path: '/equipment/medical',
    description: 'Healthcare equipment financing solutions'
  },
  {
    topText: 'Restaurant',
    bottomText: 'Equipment',
    path: '/equipment/restaurant',
    description: 'Restaurant equipment financing solutions'
  },
  {
    topText: 'Used',
    bottomText: 'Equipment',
    path: '/equipment/used',
    description: 'Used equipment financing options'
  },
  {
    topText: 'Brewery',
    bottomText: 'Equipment',
    path: '/equipment/brewery',
    description: 'Brewery equipment funding solutions'
  },
  {
    topText: 'Crane',
    bottomText: 'Financing',
    path: '/equipment/crane',
    description: 'Crane financing solutions'
  },
  {
    topText: 'Dental',
    bottomText: 'Equipment',
    path: '/equipment/dental',
    description: 'Dental practice equipment solutions'
  },
  {
    topText: 'Excavator',
    bottomText: 'Financing',
    path: '/equipment/excavator',
    description: 'Excavator financing options'
  },
  {
    topText: 'Dump Truck',
    bottomText: 'Financing',
    path: '/equipment/dump-truck',
    description: 'Dump truck financing'
  },
  {
    topText: 'CNC Machine',
    bottomText: 'Financing',
    path: '/equipment/cnc-machine',
    description: 'CNC machine financing'
  }
];

export const quoteLink: EquipmentLink = {
  topText: 'Apply',
  bottomText: 'Now',
  path: '/apply',
  description: 'Apply for equipment financing',
  isCallToAction: true,
  style: {
    background: 'bg-sea-green-dark',
    text: 'text-white font-medium',
    hover: 'hover:bg-[#4a9e99]'
  }
};

const homeLink: EquipmentLink = { topText: 'Home', bottomText: '', path: '/', description: 'Home' };
const servicesLink: EquipmentLink = { topText: 'Services', bottomText: '', path: '/services', description: 'Our Services' };
const contactLink: EquipmentLink = { topText: 'Contact', bottomText: '', path: '/contact', description: 'Contact Us' };
const vendorLink: EquipmentLink = { topText: 'Vendors', bottomText: '', path: '/vendor', description: 'Vendor Programs' };
const calculatorLink: EquipmentLink = { topText: 'Payment', bottomText: 'Calculator', path: '/calculator', description: 'Calculate your equipment financing payments' };
const equipmentFinancingLink: EquipmentLink = { topText: 'Industry', bottomText: 'Solutions', path: '/equipment', description: 'Equipment Financing' };


const NavLink: React.FC<{
  link: EquipmentLink;
  isActive: boolean;
  isQuote?: boolean;
  isMobile?: boolean;
  onClick?: () => void;
  isDropdownTrigger?: boolean;
  isDropdownOpen?: boolean;
  className?: string;
}> = ({
  link,
  isActive,
  isQuote = false,
  isMobile = false,
  onClick,
  isDropdownTrigger = false,
  isDropdownOpen = false,
  className = ''
}) => {
  if (isQuote) {
    return (
      <Link
        href={link.path}
        onClick={onClick}
        className={`
          bg-[#FF6B35] 
          ${link.style?.text}
          ${link.style?.hover}
          ${isMobile ? 'w-full text-center py-3 text-base' : 'px-4 py-2'}
          rounded-lg
          shadow-sm
          flex
          items-center
          justify-center
          relative
          text-sm
          transition-all
          duration-300
          transform
          hover:scale-105
          active:scale-95
        `}
        aria-label="Apply for equipment financing"
        title={link.description}
      >
        <span className="relative z-10">APPLY NOW</span>
      </Link>
    );
  }

  if (isDropdownTrigger) {
    return (
      <button
        onClick={onClick}
        className={`
          relative 
          px-4 
          py-2 
          text-xs 
          rounded-full 
          transition-colors 
          duration-300
          flex
          items-center
          group
          hover:bg-black/5
          ${isActive ? 'text-sea-green-dark font-semibold' : 'text-slate-600 hover:text-slate-900'}
        `}
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
      >
        <span className="font-medium text-xs">{`${link.topText} ${link.bottomText}`}</span>
        <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
      </button>
    );
  }

  return (
    <Link
      href={link.path}
      onClick={onClick}
      className={
        className 
          ? `text-sm transition-colors duration-300 ${className}` 
          : `relative px-4 py-2 text-xs rounded-full transition-all duration-200
             ${isMobile ? 'block w-full text-left py-3 text-base rounded-lg' : ''}
             ${isActive ? 'bg-sea-green-dark/10 text-sea-green-dark font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-black/5'}`
      }
      aria-current={isActive ? 'page' : undefined}
      title={link.description}
    >
      <span className={`
        font-medium 
        ${isMobile ? 'text-base' : 'text-xs'}
        ${isActive && !className ? 'font-semibold' : ''}
      `}>
        {`${link.topText} ${link.bottomText}`}
      </span>
    </Link>
  );
};

const AppNavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEquipmentDropdownOpen, setIsEquipmentDropdownOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const lastScrollTop = useRef(0);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
    let ticking = false;
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(scrollTop > 20);
          lastScrollTop.current = scrollTop;
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;
    
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth >= 1024) {
          setIsMobileMenuOpen(false);
        }
      }, 100);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      // Close desktop dropdown if click is outside
      if (isEquipmentDropdownOpen && dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsEquipmentDropdownOpen(false);
      }
      // Close mobile menu if click is outside
      if (isMobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        // The mobile menu toggle button has its own click handler with stopPropagation,
        // so we don't need to worry about clicks on the toggle button closing the menu here.
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen, isEquipmentDropdownOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsEquipmentDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Add this function to handle mouse enter
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsEquipmentDropdownOpen(true);
  };

  // Add this function to handle mouse leave
  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsEquipmentDropdownOpen(false);
    }, 200); // Small delay to prevent accidental closing
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const equipmentFinancingLinks = equipmentLinks.filter(link => 
    link.path !== '/calculator'
  );

  if (!isClient) {
    return null;
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white backdrop-blur-lg shadow-md`}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2" aria-label="Vista Pacific Capital home">
                <Image src="/Images/logo3.png" alt="Vista Pacific Capital Logo" width={60} height={60} priority />
                <div className="text-xl font-bold">
                  <span className="text-slate-900">Vista Pacific</span>
                  <span className="text-sea-green-dark"> Capital</span>
                </div>
              </Link>
            </div>

            {/* Centered Pill Navigation (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              <nav 
                ref={dropdownRef}
                className="flex items-center space-x-1 bg-white/95 p-1 rounded-full shadow-lg border border-white/10"
              >
                <NavLink
                  link={homeLink}
                  isActive={pathname === '/'}
                />
                
                <div 
                  onMouseEnter={handleMouseEnter} 
                  onMouseLeave={handleMouseLeave}
                >
                  <NavLink
                    link={equipmentFinancingLink}
                    isActive={pathname === '/equipment' || equipmentFinancingLinks.some(link => pathname === link.path)}
                    isDropdownTrigger
                    isDropdownOpen={isEquipmentDropdownOpen}
                    onClick={() => setIsEquipmentDropdownOpen(!isEquipmentDropdownOpen)}
                  />
                  <AnimatePresence>
                    {isEquipmentDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px]"
                      >
                        <div className="bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div role="menu" className="relative grid grid-cols-2 gap-4 p-4">
                            {equipmentFinancingLinks.map((item) => (
                              <Link
                                key={item.path}
                                href={item.path}
                                role="menuitem"
                                onClick={() => setIsEquipmentDropdownOpen(false)}
                                className={`block p-3 rounded-lg transition-colors duration-200
                                  ${pathname === item.path ? 'text-sea-green-dark bg-gray-50' : 'text-[#1B365D]'}
                                  hover:bg-gray-100
                                `}
                              >
                                <p className="font-semibold">{item.topText} {item.bottomText}</p>
                                <p className="text-xs text-gray-500">{item.description}</p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <NavLink
                  link={servicesLink}
                  isActive={pathname === '/services'}
                />
              </nav>
            </div>
            
            {/* Right-side links & Mobile Menu Button */}
            <div>
              <div className="hidden lg:flex items-center space-x-6">
                <NavLink
                  link={contactLink}
                  isActive={pathname === '/contact'}
                  className={pathname === '/contact' ? 'text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900'}
                />
                <NavLink
                  link={vendorLink}
                  isActive={pathname === '/vendor'}
                  className={pathname === '/vendor' ? 'text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900'}
                />
                <NavLink link={quoteLink} isActive={pathname === quoteLink.path} isQuote />
              </div>

              <div className="lg:hidden flex items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMobileMenuOpen(!isMobileMenuOpen);
                  }}
                  className="p-2 rounded-lg hover:bg-gray-100/20 transition-colors duration-200"
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isMobileMenuOpen ? "close" : "menu"}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isMobileMenuOpen ? (
                        <X size={24} className="text-slate-900" />
                      ) : (
                        <Menu size={24} className="text-slate-900" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between h-24 px-4 sm:px-6 bg-white shadow-md">
              <div className="flex-shrink-0">
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                  aria-label="Vista Pacific Capital home"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Image src="/Images/logo3.png" alt="Vista Pacific Capital Logo" width={60} height={60} priority />
                  <div className="text-xl font-bold">
                    <span className="text-slate-900">Vista Pacific</span>
                    <span className="text-sea-green-dark"> Capital</span>
                  </div>
                </Link>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100/20 transition-colors duration-200"
                aria-label="Close menu"
              >
                <X size={28} className="text-slate-900" />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex-1 overflow-y-auto">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink
                  link={homeLink}
                  isActive={pathname === '/'}
                  isMobile
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full flex justify-between items-center py-3 text-left text-[#1B365D] hover:text-sea-green-dark transition-colors duration-200">
                        <span className="text-base font-medium">Industry Solutions</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${open ? 'transform rotate-180' : ''}`} />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pl-4 border-l-2 border-gray-200">
                        {equipmentFinancingLinks.map((link) => (
                          <NavLink
                            key={link.path}
                            link={link}
                            isActive={pathname === link.path}
                            isMobile
                            onClick={() => setIsMobileMenuOpen(false)}
                          />
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <NavLink
                  link={servicesLink}
                  isActive={pathname === '/services'}
                  isMobile
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                <NavLink
                  link={contactLink}
                  isActive={pathname === '/contact'}
                  isMobile
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                <NavLink
                  link={vendorLink}
                  isActive={pathname === '/vendor'}
                  isMobile
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                <NavLink
                  link={calculatorLink}
                  isActive={pathname === '/calculator'}
                  isMobile
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                <div className="pt-4">
                  <NavLink
                    link={quoteLink}
                    isActive={pathname === quoteLink.path}
                    isQuote
                    isMobile
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppNavBar;