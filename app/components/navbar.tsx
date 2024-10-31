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
  "name": "Equipment Financing Solutions",
  "description": "Complete equipment financing solutions for businesses across industries",
  "hasPart": [
    {
      "@type": "WebPage",
      "name": "About Vista Pacific Capital",
      "url": `${BASE_URL}/about`,
      "description": "Learn about our equipment financing expertise",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${BASE_URL}/about`
      }
    },
    {
      "@type": "WebPage",
      "name": "Construction Equipment Financing",
      "url": `${BASE_URL}/construction`,
      "description": "Specialized financing for construction equipment",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${BASE_URL}/construction`
      }
    },
    {
      "@type": "WebPage",
      "name": "Medical Equipment Financing",
      "url": `${BASE_URL}/medical`,
      "description": "Healthcare equipment financing solutions",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${BASE_URL}/medical`
      }
    }
  ]
};

export const equipmentLinks: EquipmentLink[] = [
  {
    topText: 'About',
    bottomText: 'Us',
    path: '/about',
    description: 'Learn about our company and commitment to equipment financing'
  },
  {
    topText: 'Construction',
    bottomText: 'Equipment',
    path: '/construction',
    description: 'Finance construction equipment with competitive rates and flexible terms'
  },
  {
    topText: 'Medical',
    bottomText: 'Equipment',
    path: '/medical',
    description: 'Healthcare equipment financing solutions'
  },
  {
    topText: 'Restaurant',
    bottomText: 'Equipment',
    path: '/restaurant',
    description: 'Restaurant equipment financing solutions'
  },
  {
    topText: 'Used',
    bottomText: 'Equipment',
    path: '/used',
    description: 'Used equipment financing options'
  },
  {
    topText: 'Brewery',
    bottomText: 'Equipment',
    path: '/brewery',
    description: 'Brewery equipment funding solutions'
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
    description: 'Dental practice equipment solutions'
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
    path: '/cnc-machine',
    description: 'CNC machine financing'
  }
];

export const quoteLink: EquipmentLink = {
  topText: 'Get',
  bottomText: 'Quote',
  path: '/contact',
  description: 'Get a customized equipment financing quote',
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
        aria-label="Get your equipment financing quote"
        title={link.description}
      >
        <span className="relative z-10">GET QUOTE</span>
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
          px-3
          py-2
          flex
          items-center
          transition-colors
          duration-200
          ${isActive ? 'text-[#5BB5B0]' : 'text-[#1B365D] hover:text-[#5BB5B0]'}
        `}
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
      >
        <div className="flex flex-col items-center">
          <span className="font-medium whitespace-nowrap text-xs">
            Equipment
          </span>
          <span className="font-medium whitespace-nowrap text-xs">
            Financing
          </span>
        </div>
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
        px-3
        py-2
        transition-colors
        duration-200
        ${isMobile ? 'w-full text-center py-3' : ''}
        ${isActive ? 'text-[#5BB5B0]' : 'text-[#1B365D] hover:text-[#5BB5B0]'}
      `}
      aria-label={`${link.topText} ${link.bottomText}`}
      title={link.description}
    >
      <div className="flex flex-col items-center">
        <span className={`
          font-medium 
          whitespace-nowrap
          ${isMobile ? 'text-base' : 'text-xs'}
        `}>
          {link.topText}
        </span>
        <span className={`
          font-medium 
          whitespace-nowrap
          ${isMobile ? 'text-base' : 'text-xs'}
        `}>
          {link.bottomText}
        </span>
      </div>
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

  const mainLinks = equipmentLinks.filter(link => link.path === '/about');
  const equipmentFinancingLinks = equipmentLinks.filter(link => link.path !== '/about');

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
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
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
                  
                  {/* About Link */}
                  {mainLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      link={link}
                      isActive={pathname === link.path}
                    />
                  ))}

                  {/* Equipment Dropdown */}
                  <div ref={dropdownRef} className="relative">
                    <NavLink
                      link={{ topText: 'Equipment', bottomText: 'Financing', path: '#', description: 'Equipment financing options' }}
                      isActive={equipmentFinancingLinks.some(link => pathname === link.path)}
                      isDropdownTrigger={true}
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
                          className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg py-1 z-50"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="equipment-financing-menu"
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
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden border-t border-gray-200 bg-white shadow-lg"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="max-h-[calc(100vh-4rem)] overflow-y-auto px-4 py-4">
                <div className="space-y-1">
                  {equipmentLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="mb-1"
                    >
                      <div className="rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                        <NavLink
                          link={link}
                          isActive={pathname === link.path}
                          isMobile={true}
                          onClick={() => setIsMobileMenuOpen(false)}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: equipmentLinks.length * 0.1 }}
                  className="mt-4 px-1"
                >
                  <NavLink
                    link={quoteLink}
                    isActive={pathname === quoteLink.path}
                    isQuote={true}
                    isMobile={true}
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
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