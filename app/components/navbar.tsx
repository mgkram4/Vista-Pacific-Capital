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
    },
    {
      "@type": "WebPage",
      "name": "Why Choose Us",
      "url": `${BASE_URL}/why-choose-us`,
      "description": "Reasons to choose Vista Pacific Capital for equipment financing.",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${BASE_URL}/why-choose-us`
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

export const equipmentFinancingProgramLinks: EquipmentLink[] = [
  {
    topText: 'Application Only Equipment Financing up to $750,000',
    bottomText: '',
    path: '/equipment-finacing',
    description: 'Application-only equipment financing up to $750,000 — no financials needed.',
  },
  {
    topText: 'Commercial Equipment Financing',
            bottomText: '$500,000 to $50 million',
    path: '/commercial-equipment-financing',
    description: 'Financing for large-scale commercial equipment.',
  },
  {
    topText: 'Why Choose',
    bottomText: 'Us',
    path: '/why-choose-us',
    description: 'Reasons to choose Vista Pacific Capital for equipment financing'
  },
  {
    topText: 'Apply Now',
    bottomText: '',
    path: '/apply',
    description: 'Apply for equipment financing'
  }
];

// NEW: Partner Links
export const partnerLinks: EquipmentLink[] = [
    {
        topText: 'Vendor',
        bottomText: 'Programs',
        path: '/vendor',
        description: 'Vendor Programs'
    },
    {
        topText: 'Partner',
        bottomText: 'Benefits',
        path: '/partner-program',
        description: 'Partner Benefits with Vista Pacific Capital'
    },
    {
        topText: 'Partnership',
        bottomText: 'Form',
        path: '/vendor-form',
        description: 'Become a Partner with Vista Pacific Capital'
    }
];

// NEW: Tools Links
export const toolsLinks: EquipmentLink[] = [
    {
        topText: 'Payment',
        bottomText: 'Calculator',
        path: '/calculator',
        description: 'Calculate your equipment financing payments'
    },
    {
        topText: 'Tax',
        bottomText: 'Calculator',
        path: '/tax-calculator',
        description: 'Section 179 Tax Calculator'
    },
    {
        topText: 'FAQ',
        bottomText: '',
        path: '/faq',
        description: 'Frequently Asked Questions'
    },
    {
        topText: '179 Tax',
        bottomText: 'Savings',
        path: '/tax',
        description: 'Section 179 Tax Information'
    },
    {
        topText: 'Contact',
        bottomText: 'Us',
        path: '/contact',
        description: 'Contact Vista Pacific Capital'
    }
];

export const quoteLink: EquipmentLink = {
  topText: 'Apply Now',
  bottomText: '',
  path: '/apply',
  description: 'Apply for equipment financing',
  isCallToAction: true,
  style: {
    background: 'bg-orange-500',
    text: 'text-white font-medium',
    hover: 'hover:bg-orange-600'
  }
};

const partnerMainLink: EquipmentLink = { topText: 'Become a', bottomText: 'Partner', path: '#', description: 'Vendor Programs' };
const aboutUsLink: EquipmentLink = { topText: 'Meet the', bottomText: 'Founder', path: '/about-us', description: 'About Us' };
const equipmentFinancingMainLink: EquipmentLink = { topText: 'Equipment', bottomText: 'Financing', path: '#', description: 'Equipment Financing Options' };
const toolsLink: EquipmentLink = { topText: 'Tools', bottomText: '', path: '#', description: 'Tools' };

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
          ${link.style?.background || 'bg-[#FF6B35]'}
          ${link.style?.text}
          ${link.style?.hover}
          ${isMobile ? 'w-full text-center py-2 text-sm' : 'px-4 py-2'}
          rounded-lg
          shadow-sm
          flex
          items-center
          justify-center
          relative
          text-sm
          font-semibold
          transition-all
          duration-300
          transform
          hover:scale-105
          active:scale-95
        `}
        aria-label="Apply for equipment financing"
        title={link.description}
      >
        <span className="relative z-10">{`${link.topText} ${link.bottomText}`.trim()}</span>
      </Link>
    );
  }

  if (isDropdownTrigger) {
    return (
      <button
        onClick={onClick}
        className={`
          relative 
          px-3 
          py-2 
          text-xs 
          font-medium
          rounded-full 
          transition-colors 
          duration-300
          flex
          items-center
          group
          hover:bg-black/5
          ${isActive ? 'text-sea-green-dark bg-sea-green-dark/10' : 'text-slate-700 hover:text-slate-900'}
        `}
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
      >
        <span className={`font-semibold text-xs ${isActive ? 'text-sea-green-dark' : ''}`}>{`${link.topText} ${link.bottomText}`.trim()}</span>
        <ChevronDown className={`ml-2 w-3 h-3 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
      </button>
    );
  }

  return (
    <Link
      href={link.path}
      onClick={onClick}
      className={
        className 
          ? `text-xs font-medium transition-colors duration-300 ${className} ${isActive ? 'text-sea-green-dark' : 'text-slate-700 hover:text-slate-900'}` 
          : `relative px-3 py-2 text-xs rounded-full transition-all duration-200 font-medium
             ${isMobile ? 'block w-full text-left py-3 text-lg rounded-lg' : ''}
             ${isActive ? 'bg-sea-green-dark/10 text-sea-green-dark' : 'text-slate-700 hover:text-slate-900 hover:bg-black/5'}`
      }
      aria-current={isActive ? 'page' : undefined}
      title={link.description}
    >
      <span className={`
        font-semibold
        ${isMobile ? 'text-lg' : 'text-xs'}
        ${isActive ? 'text-sea-green-dark' : ''}
      `}>
        {`${link.topText} ${link.bottomText}`.trim()}
      </span>
    </Link>
  );
};

const AppNavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
      if (openDropdown && dropdownRef.current && !dropdownRef.current.contains(target)) {
        setOpenDropdown(null);
      }
      if (isMobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen, openDropdown]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleMouseEnter = (dropdown: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); 
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200`}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3" aria-label="Vista Pacific Capital home">
                <Image src="/Images/logo3.png" alt="Vista Pacific Capital Logo" width={60} height={60} priority />
                <div className="text-xl font-bold whitespace-nowrap lg:text-2xl">
                  <span className="text-slate-900">Vista Pacific</span>
                  <span className="text-sea-green-dark"> Capital</span>
                </div>
              </Link>
            </div>

            {/* Centered Pill Navigation (Desktop) */}
            <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center">
              <nav 
                ref={dropdownRef}
                className="flex items-center space-x-4 bg-white/98 p-1 rounded-full shadow-xl border border-gray-200"
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative" onMouseEnter={() => handleMouseEnter('equipmentFinancing')} >
                  <NavLink
                    link={equipmentFinancingMainLink}
                    isActive={openDropdown === 'equipmentFinancing' || equipmentFinancingProgramLinks.some(l => l.path === pathname)}
                    isDropdownTrigger
                    isDropdownOpen={openDropdown === 'equipmentFinancing'}
                    onClick={() => setOpenDropdown(openDropdown === 'equipmentFinancing' ? null : 'equipmentFinancing')}
                  />
                  <AnimatePresence>
                    {openDropdown === 'equipmentFinancing' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full mt-3 w-80 bg-white rounded-xl shadow-2xl p-4 z-10 border border-gray-200"
                      >
                        {equipmentFinancingProgramLinks.map((link) => (
                           <NavLink
                                key={link.path}
                                link={link}
                                isActive={pathname === link.path}
                                onClick={() => setOpenDropdown(null)}
                                className="block w-full text-left px-4 py-3 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
                              />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="relative" onMouseEnter={() => handleMouseEnter('partner')}>
                  <NavLink
                      link={partnerMainLink}
                      isActive={openDropdown === 'partner' || partnerLinks.some(l => l.path === pathname)}
                      isDropdownTrigger
                      isDropdownOpen={openDropdown === 'partner'}
                      onClick={() => setOpenDropdown(openDropdown === 'partner' ? null : 'partner')}
                  />
                  <AnimatePresence>
                      {openDropdown === 'partner' && (
                          <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute top-full mt-3 w-64 bg-white rounded-xl shadow-2xl p-4 z-10 border border-gray-200"
                          >
                              {partnerLinks.map(link => (
                                  <NavLink
                                      key={link.path}
                                      link={link}
                                      isActive={pathname === link.path}
                                      onClick={() => setOpenDropdown(null)}
                                      className="block w-full text-left px-4 py-3 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                  />
                              ))}
                          </motion.div>
                      )}
                  </AnimatePresence>
                </div>


                <div className="relative" onMouseEnter={() => handleMouseEnter('tools')} >
                  <NavLink
                    link={toolsLink}
                    isActive={openDropdown === 'tools' || toolsLinks.some(l => l.path === pathname)}
                    isDropdownTrigger
                    isDropdownOpen={openDropdown === 'tools'}
                    onClick={() => setOpenDropdown(openDropdown === 'tools' ? null : 'tools')}
                  />
                  <AnimatePresence>
                    {openDropdown === 'tools' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full mt-3 w-64 bg-white rounded-xl shadow-2xl p-4 z-10 border border-gray-200"
                      >
                        {toolsLinks.map(link => (
                          <NavLink
                            key={link.path}
                            link={link}
                            isActive={pathname === link.path}
                            onClick={() => setOpenDropdown(null)}
                            className="block w-full text-left px-4 py-3 text-base font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
                          />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                 <NavLink
                  link={aboutUsLink}
                  isActive={pathname === '/about-us'}
                />
              </nav>
            </div>
            
            {/* Right-side links & Mobile Menu Button */}
            <div className="ml-auto flex items-center space-x-6">
              <div className="hidden lg:flex items-center space-x-6">
                <NavLink link={quoteLink} isActive={pathname === quoteLink.path} isQuote />
              </div>

              <div className="lg:hidden flex items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMobileMenuOpen(!isMobileMenuOpen);
                  }}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
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
                  className="flex items-center space-x-3"
                  aria-label="Vista Pacific Capital home"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Image src="/Images/logo3.png" alt="Vista Pacific Capital Logo" width={70} height={70} priority />
                  <div className="text-2xl font-bold whitespace-nowrap">
                    <span className="text-slate-900">Vista Pacific</span>
                    <span className="text-sea-green-dark"> Capital</span>
                  </div>
                </Link>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                aria-label="Close menu"
              >
                <X size={28} className="text-slate-900" />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex-1 overflow-y-auto">
              <div className="px-4 pt-4 pb-6 space-y-2">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full flex justify-between items-center py-4 text-left text-slate-700 hover:text-sea-green-dark transition-colors duration-200 rounded-lg hover:bg-gray-50 px-3">
                        <span className="text-xl font-semibold">Equipment Financing</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${open ? 'transform rotate-180' : ''}`} />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pl-4 border-l-2 border-gray-200 ml-3">
                        {equipmentFinancingProgramLinks.map((link) => (
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

                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="w-full flex justify-between items-center py-4 text-left text-slate-700 hover:text-sea-green-dark transition-colors duration-200 rounded-lg hover:bg-gray-50 px-3">
                                <span className="text-xl font-semibold">Partner Program</span>
                                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${open ? 'transform rotate-180' : ''}`} />
                            </Disclosure.Button>
                            <Disclosure.Panel className="pl-4 border-l-2 border-gray-200 ml-3">
                                {partnerLinks.map((link) => (
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

                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="w-full flex justify-between items-center py-4 text-left text-slate-700 hover:text-sea-green-dark transition-colors duration-200 rounded-lg hover:bg-gray-50 px-3">
                        <span className="text-xl font-semibold">Tools</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${open ? 'transform rotate-180' : ''}`} />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pl-4 border-l-2 border-gray-200 ml-3">
                        {toolsLinks.map((link) => (
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
                  link={aboutUsLink}
                  isActive={pathname === '/about-us'}
                  isMobile
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                
                <div className="pt-6">
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