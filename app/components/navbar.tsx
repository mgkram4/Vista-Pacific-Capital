'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface StructuredDataWebPage {
  "@type": "WebPage";
  name: string;
  url: string;
  description: string;
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
      "description": "Learn about our equipment financing expertise"
    },
    {
      "@type": "WebPage",
      "name": "Construction Equipment Financing",
      "url": `${BASE_URL}/construction`,
      "description": "Specialized financing for construction equipment"
    },
    {
      "@type": "WebPage",
      "name": "Medical Equipment Financing",
      "url": `${BASE_URL}/medical`,
      "description": "Healthcare equipment financing solutions"
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
    background: 'bg-gradient-to-r from-orange-500 to-orange-600',
    text: 'text-white font-medium',
    hover: 'hover:shadow-lg hover:scale-[1.02]'
  }
};

const NavLink: React.FC<{ 
  link: EquipmentLink; 
  isActive: boolean; 
  isQuote?: boolean;
  isMobile?: boolean;
  onClick?: () => void 
}> = ({ 
  link, 
  isActive, 
  isQuote = false,
  isMobile = false,
  onClick 
}) => {
  if (isQuote) {
    return (
      <Link
        href={link.path}
        onClick={onClick}
        className={`
          ${link.style?.background} 
          ${link.style?.text}
          ${isMobile ? 'w-full text-center py-4 text-lg' : 'px-4 py-2.5'}
          rounded-lg
          shadow-sm
          transition-all 
          duration-300
          flex
          items-center
          justify-center
          ${link.style?.hover}
          relative
          text-sm
        `}
        aria-label="Get your equipment financing quote"
        title={link.description}
      >
        GET QUOTE
        <div className="absolute inset-x-0 h-px bottom-0 bg-white/20" />
      </Link>
    );
  }

  return (
    <Link
      href={link.path}
      onClick={onClick}
      className={`
        group 
        relative 
        px-3
        py-2
        transition-all 
        duration-300
        ${isMobile ? 'w-full text-center py-4 hover:bg-gray-100' : ''}
        ${isActive ? 'text-[#5BB5B0]' : 'text-[#1B365D]'}
      `}
      aria-label={`${link.topText} ${link.bottomText}`}
      title={link.description}
    >
      <div className="flex flex-col items-center">
        <span className={`
          font-medium 
          whitespace-nowrap
          ${isMobile ? 'text-base' : 'text-xs xl:text-sm'}
          transition-transform
          duration-300
          group-hover:-translate-y-0.5
        `}>
          {link.topText}
        </span>
        <span className={`
          font-medium 
          whitespace-nowrap
          ${isMobile ? 'text-base' : 'text-xs xl:text-sm'}
          transition-transform
          duration-300
          group-hover:translate-y-0.5
        `}>
          {link.bottomText}
        </span>
        <motion.div
          className={`
            absolute 
            -bottom-1
            left-0 
            h-0.5 
            bg-[#5BB5B0]
            w-0 
            group-hover:w-full 
            transition-all 
            duration-300 
            ${isActive ? 'w-full' : ''}
            ${isMobile ? 'hidden' : ''}
          `}
          layoutId="underline"
        />
      </div>
    </Link>
  );
};

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
    <header className={`
      fixed 
      top-0 
      left-0 
      right-0 
      z-50
      transition-all
      duration-300
      ${isScrolled ? 'translate-y-0' : 'translate-y-6'}
    `} 
    role="banner"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#5BB5B0] via-white to-[#1B365D] opacity-20" />
      <nav 
        className={`
          w-full 
          transition-all 
          duration-500
          relative
          ${isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md' 
            : 'bg-white/50 backdrop-blur-sm'
          }
        `}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[1400px] mx-auto px-2">
          <div className={`
            flex 
            items-center 
            justify-between 
            transition-all 
            duration-300 
            ${isScrolled ? 'h-16 md:h-30' : 'h-20 md:h-44'}
          `}>
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
                  >
                    {isMobileMenuOpen ? (
                      <X className="w-6 h-6 text-gray-600" />
                    ) : (
                      <Menu className="w-6 h-6 text-gray-600" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
{/* Logo Section with Company Name */}
<div className="flex-1 flex items-center justify-between lg:justify-start relative">
  {/* Empty div for left spacing on mobile */}
  <div className="w-8 lg:hidden"></div>

  {/* Mobile Company Name - Centered */}
  <div className="absolute left-1/2 transform -translate-x-1/2 w-full text-center lg:hidden pointer-events-none">
    <h1 className="text-[#1B365D] font-bold text-lg mr-12">
      VISTA PACIFIC CAPITAL
    </h1>
  </div>

  {/* Logo - Right aligned on mobile, normal on desktop */}
  <div className="flex-shrink-0 relative z-10 ml-auto lg:ml-0">
    <Link 
      href="/" 
      aria-label="Vista Pacific Capital - Equipment Financing Solutions"
      className="block"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative"
      >
        <Image 
          src="/Images/logo3.png"
          width={250}
          height={75}
          alt="Vista Pacific Capital - Equipment Financing Solutions"
          className={`
            md:hidden
            w-auto
            transition-all
            duration-300
            ${isScrolled 
              ? 'h-[30px] md:h-[40px] lg:h-[50px]' 
              : 'h-[35px] md:h-[45px] lg:h-[60px]'
            }
          `}
          priority
          quality={95}
          style={{ 
            objectFit: 'contain',
            objectPosition: 'center',
          }}
          sizes="(max-width: 768px) 150px, (max-width: 1024px) 200px, 250px"
        />
      </motion.div>
    </Link>
  </div>

              
              {/* Logo - Left aligned on desktop, shifted left on mobile */}
              <div className="flex-shrink-0 relative z-10">
                <Link 
                  href="/" 
                  aria-label="Vista Pacific Capital - Equipment Financing Solutions"
                  className="block lg:relative lg:left-0"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative"
                  >
                    <Image 
                      src="/Images/logo2.png"
                      width={800}
                      height={300}
                      alt="Vista Pacific Capital - Equipment Financing Solutions"
                      className={`
                        md:mr-32
                        p-3
                        w-auto
                        transition-all
                        duration-300
                        ${isScrolled 
                          ? 'h-[40px] md:h-[50px]' 
                          : 'h-[50px] md:h-[140px]'
                        }
                        lg:block hidden
                      `}
                      priority
                      quality={95}
                      style={{ 
                        objectFit: 'contain',
                        objectPosition: 'center',
                      }}
                      sizes="(max-width: 768px) 200px, 250px"
                    />
                  </motion.div>
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="relative flex items-center">
                {/* Decorative line before nav items */}
                <div className="absolute -left-8 top-1/2 w-6 h-px bg-gradient-to-r from-transparent to-gray-200" />
                
                <motion.div 
                  className="flex items-center space-x-1 p-2 rounded-xl relative"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Decorative elements */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-transparent opacity-50 rounded-xl" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5BB5B0]/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#1B365D]/20 to-transparent" />
                  
                  {equipmentLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      link={link}
                      isActive={pathname === link.path}
                    />
                  ))}
                </motion.div>

                {/* Decorative line after nav items */}
                <div className="absolute -right-8 top-1/2 w-6 h-px bg-gradient-to-r from-gray-200 to-transparent" />
              </div>

              <motion.div 
                className="ml-6"
                initial={{ opacity: 0,scale: 0.9 }}
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
              className="lg:hidden border-t border-gray-300 bg-white shadow-lg"
            >
              <div className="max-h-[calc(100vh-5rem)] overflow-y-auto px-4 py-6">
                <div className="space-y-2">
                  {equipmentLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="mb-2"
                    >
                      <div className="rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300">
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
                  className="mt-6 px-2"
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