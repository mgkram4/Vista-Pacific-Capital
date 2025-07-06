'use client';

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
    topText: 'Material Handling',
    bottomText: 'Equipment',
    path: '/equipment/construction',
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
    topText: 'Box Truck',
    bottomText: 'Financing',
    path: '/equipment/box-truck',
    description: 'Box truck financing'
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
    background: 'bg-[#5BB5B0]',
    text: 'text-white font-medium',
    hover: 'hover:bg-[#4a9e99]'
  }
};

const NavLink: React.FC<{ 
  link: EquipmentLink; 
  isActive: boolean; 
  isQuote?: boolean;
  isMobile?: boolean;
  onClick?: () => void;
  isDropdownTrigger?: boolean;
  isDropdownOpen?: boolean;
}> = ({ 
  link, 
  isActive, 
  isQuote = false,
  isMobile = false,
  onClick,
  isDropdownTrigger = false,
  isDropdownOpen = false
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
        <div className="absolute inset-x-0 h-px bottom-0 bg-white/20" />
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
          py-2.5
          flex
          items-center
          transition-colors
          duration-200
          ${isActive ? 'text-[#5BB5B0]' : 'text-[#1B365D] hover:text-[#5BB5B0]'}
        `}
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
      >
        <span className="font-medium text-xs">Industry Solutions</span>
        <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
      </button>
    );
  }

  return (
    <Link
      href={link.path}
      onClick={onClick}
      className={`
        relative 
        px-4
        py-2.5
        transition-colors
        duration-200
        ${isMobile ? 'w-full text-center py-3' : ''}
        ${isActive ? 'text-[#5BB5B0]' : 'text-[#1B365D] hover:text-[#5BB5B0]'}
      `}
      aria-label={`${link.topText} ${link.bottomText}`}
      title={link.description}
    >
      <span className={`
        font-medium 
        ${isMobile ? 'text-base' : 'text-xs'}
      `}>
        {`${link.topText} ${link.bottomText}`}
      </span>
    </Link>
  );
};

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const AppNavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEquipmentDropdownOpen, setIsEquipmentDropdownOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
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
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setIsEquipmentDropdownOpen(false);
      }
      if (isMobileMenuOpen && !(event.target as Element).closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

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

  const mainLinks = equipmentLinks.filter(link => 
    link.path === '/calculator'
  );
  
  const equipmentFinancingLinks = equipmentLinks.filter(link => 
    link.path !== '/calculator'
  );

  // Add About Us, Contact, and Vendor links to mainLinks
  const aboutLink = {
    topText: 'About',
    bottomText: 'Us',
    path: '/services',
    description: 'Learn about Vista Pacific Capital and why choose us'
  };

  const contactLink = {
    topText: 'Contact',
    bottomText: 'Us',
    path: '/contact',
    description: 'Get in touch with our team'
  };

  const vendorLink = {
    topText: 'Vendor',
    bottomText: 'Program',
    path: '/vendor',
    description: 'Partner with Vista Pacific Capital and grow your business'
  };

  if (!isClient) {
    return null;
  }

  return (
    <header 
      className={`
        fixed 
        top-0 
        left-0 
        right-0 
        z-50
        transition-transform
        duration-300
        ${isScrolled ? 'translate-y-0' : 'translate-y-0'}
      `} 
      role="banner"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#5BB5B0] to-[#1B365D] opacity-20" />
      
      <nav 
        className={`
          w-full 
          transition-all 
          duration-500
          relative
          ${isScrolled 
            ? 'bg-white shadow-md' 
            : 'bg-white'
          }
        `}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className={`
            flex 
            items-center 
            justify-between 
            transition-all 
            duration-300 
            ${isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'}
          `}>
            {/* Mobile Menu Button */}
            <div className="lg:hidden z-20">
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
                      <X className="w-6 h-6 text-[#1B365D]" />
                    ) : (
                      <Menu className="w-6 h-6 text-[#1B365D]" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>

            {/* Logo and Company Name */}
            <div className="flex-1 flex items-center justify-between lg:justify-start relative">
              <div className="w-8 lg:hidden"></div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-full text-center lg:hidden pointer-events-none">
                <h1 className="text-[#1B365D] font-semibold text-base mr-12">
                  VISTA PACIFIC CAPITAL
                </h1>
              </div>

              {/* Mobile Logo */}
              <div className="flex-shrink-0 relative z-10 ml-auto lg:ml-0">
                <Link 
                  href="/" 
                  aria-label="Vista Pacific Capital - Equipment Financing Solutions"
                  className="block"
                >
                  <div className="relative">
                    <Image 
                      src="/Images/logo3.png"
                      width={200}
                      height={60}
                      alt="Vista Pacific Capital - Equipment Financing Solutions"
                      className={`
                        md:hidden
                        w-auto
                        transition-all
                        duration-300
                        ${isScrolled 
                          ? 'h-[25px] md:h-[30px]' 
                          : 'h-[30px] md:h-[35px]'
                        }
                      `}
                      priority
                      quality={95}
                      style={{ 
                        objectFit: 'contain',
                        objectPosition: 'center',
                      }}
                      sizes="(max-width: 768px) 150px, 200px"
                    />
                  </div>
                </Link>
              </div>

              {/* Desktop Logo with Company Name */}
              <div className="flex-shrink-0 relative z-10">
                <Link
                  href="/"
                  aria-label="Vista Pacific Capital - Equipment Financing Solutions"
                  className="flex items-center gap-3 lg:relative lg:left-0"
                >
                  <div className="relative md:mt-1">
                    <Image
                      src="/Images/logo3.png"
                      width={300}
                      height={120}
                      alt="Vista Pacific Capital - Equipment Financing Solutions"
                      className={`
                        md:mr-3
                        w-auto
                        transition-all
                        duration-300
                        ${isScrolled
                          ? 'h-[30px] md:h-[35px]'
                          : 'h-[35px] md:h-[45px]'
                        }
                        lg:block hidden
                      `}
                      priority
                      quality={95}
                      style={{
                        objectFit: 'contain',
                        objectPosition: 'center',
                      }}
                      sizes="(max-width: 768px) 160px, 200px"
                    />
                  </div>
                  <div className={`
                    hidden lg:block
                    font-semibold
                    transition-all
                    duration-300
                    ${isScrolled ? 'text-lg' : 'text-xl'}
                  `}>
                    <h1 className="text-[#1B365D]">Vista Pacific Capital</h1>
                    <p className={`
                      font-normal
                      text-[#5BB5B0]
                      transition-all
                      duration-300
                      ${isScrolled ? 'text-xs' : 'text-sm'}
                    `}>
                      Equipment Financing Solutions
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="relative flex items-center">
                <div className="absolute -left-6 top-1/2 w-4 h-px bg-gradient-to-r from-transparent to-[#5BB5B0]/20" />
                
                <motion.div 
                  className="flex items-center space-x-1 p-2 rounded-lg relative"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-transparent opacity-50 rounded-lg" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5BB5B0]/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#1B365D]/20 to-transparent" />
                  
                  {/* Payment Calculator */}
                  {mainLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      link={link}
                      isActive={pathname === link.path}
                    />
                  ))}
                  
                  {/* About Us Link */}
                  <NavLink
                    link={aboutLink}
                    isActive={pathname === aboutLink.path}
                  />
                  
                  {/* Contact Us Link */}
                  <NavLink
                    link={contactLink}
                    isActive={pathname === contactLink.path}
                  />
                  
                  {/* Vendor Program Link */}
                  <NavLink
                    link={vendorLink}
                    isActive={pathname === vendorLink.path}
                  />

                  {/* Equipment Dropdown - Modified for hover */}
                  <div 
                    ref={dropdownRef} 
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Modified to use a div instead of button for better hover behavior */}
                    <div
                      className={`
                        relative 
                        px-4
                        py-2.5
                        flex
                        items-center
                        transition-colors
                        duration-200
                        cursor-pointer
                        ${(pathname === '/equipment' || equipmentFinancingLinks.some(link => pathname === link.path)) ? 'text-[#5BB5B0]' : 'text-[#1B365D] hover:text-[#5BB5B0]'}
                      `}
                      aria-expanded={isEquipmentDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span className="font-medium text-xs">Industry Solutions</span>
                      <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${isEquipmentDropdownOpen ? 'rotate-180' : ''}`} />
                    </div>

                    <AnimatePresence>
                      {isEquipmentDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg py-1 z-50"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="industry-solutions-menu"
                        >
                          {equipmentFinancingLinks.map((link) => (
                            <Link
                              key={link.path}
                              href={link.path}
                              className={`
                                block px-3 py-2 text-sm
                                ${pathname === link.path ? 'text-[#5BB5B0] bg-gray-50' : 'text-[#1B365D]'}
                                hover:bg-gray-50 transition-colors duration-200
                              `}
                              onClick={() => setIsEquipmentDropdownOpen(false)}
                              role="menuitem"
                            >
                              {link.topText} {link.bottomText}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                <div className="absolute -right-6 top-1/2 w-4 h-px bg-gradient-to-r from-[#5BB5B0]/20 to-transparent" />
              </div>

              <motion.div 
                className="ml-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <NavLink
                  link={quoteLink}
                  isActive={pathname === quoteLink.path}
                  isQuote={true}
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: `calc(100vh - ${isScrolled ? '56px' : '64px'})` }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={`lg:hidden fixed inset-x-0 bg-white shadow-lg z-40 ${isScrolled ? 'top-[56px]' : 'top-[64px]'}`}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="h-full flex flex-col">
                <div className="flex-grow overflow-y-auto px-6">
                  {/* All Links Container */}
                  <div className="py-6 space-y-6">
                    {/* Calculator Link */}
                    <Link
                      href="/calculator"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 text-[#5BB5B0] text-lg"
                    >
                      Payment Calculator
                    </Link>
                    
                    {/* About Us Link */}
                    <Link
                      href="/services"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 text-[#5BB5B0] text-lg"
                    >
                      About Us
                    </Link>
                    
                    {/* Contact Us Link */}
                    <Link
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 text-[#5BB5B0] text-lg"
                    >
                      Contact Us
                    </Link>

                    {/* Vendor Program Link */}
                    <Link
                      href="/vendor"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 text-[#5BB5B0] text-lg"
                    >
                      Vendor Program
                    </Link>

                    {/* All Equipment Link */}
                    <Link
                      href="/equipment"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 text-[#1B365D] text-lg"
                    >
                      All Equipment
                    </Link>

                    {/* Equipment Links */}
                    {equipmentFinancingLinks
                      .filter(link => link.path !== '/calculator' && link.path !== '/equipment')
                      .map((link) => (
                        <Link
                          key={link.path}
                          href={link.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-3 text-[#1B365D] text-lg"
                        >
                          {`${link.topText} ${link.bottomText}`}
                        </Link>
                      ))}
                  </div>
                </div>

                {/* Sticky Apply Button */}
                <div className="flex-shrink-0 px-6 py-4 border-t border-gray-100 bg-white">
                  <Link
                    href={quoteLink.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full py-4 bg-[#FF6B35] text-white text-center text-lg font-medium rounded-lg"
                  >
                    APPLY NOW
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default AppNavBar;