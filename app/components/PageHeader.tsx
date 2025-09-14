'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface PageHeaderProps {
  // Content
  title: string;
  subtitle?: string;
  description?: string;
  
  // Background
  backgroundImage?: string;
  backgroundAlt?: string;
  
  // Layout & Styling
  height?: 'small' | 'medium' | 'large' | 'full';
  overlay?: 'light' | 'medium' | 'dark' | 'none';
  contentPosition?: 'left' | 'center' | 'right';
  
  // CTA Button
  ctaText?: string;
  ctaHref?: string;
  
  // Content styling
  titleSize?: 'small' | 'medium' | 'large' | 'xl';
  textColor?: 'white' | 'dark';
  
  // Background overlay for content
  contentBackground?: boolean;
  
  // Custom classes
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  description,
  backgroundImage = "/Images/bg-wave2.png",
  backgroundAlt = "Vista Pacific Capital background",
  height = 'medium',
  overlay = 'medium',
  contentPosition = 'left',
  ctaText,
  ctaHref,
  titleSize = 'large',
  textColor = 'white',
  contentBackground = false,
  className = ''
}) => {
  // Height classes
  const heightClasses = {
    small: 'h-[40vh] md:h-[30vh]',
    medium: 'h-[60vh] md:h-[50vh]',
    large: 'h-[80vh] md:h-[70vh]',
    full: 'h-screen'
  };

  // Overlay classes
  const overlayClasses = {
    none: '',
    light: 'bg-black/20',
    medium: 'bg-black/40',
    dark: 'bg-black/60'
  };

  // Content position classes
  const positionClasses = {
    left: 'justify-start text-left',
    center: 'justify-center text-center',
    right: 'justify-end text-right'
  };

  // Title size classes
  const titleSizeClasses = {
    small: 'text-2xl md:text-3xl',
    medium: 'text-3xl md:text-4xl',
    large: 'text-4xl md:text-5xl lg:text-6xl',
    xl: 'text-5xl md:text-6xl lg:text-7xl'
  };

  // Text color classes
  const textColorClasses = {
    white: 'text-white',
    dark: 'text-[#0D3853]'
  };

  return (
    <section className={`relative w-full overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className={`absolute inset-0 z-0 ${heightClasses[height]}`}>
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {overlay !== 'none' && (
          <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
        )}
      </div>

      {/* Content */}
      <div className={`relative z-10 ${heightClasses[height]} flex items-center`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className={`flex ${positionClasses[contentPosition]}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`max-w-4xl ${
                contentBackground 
                  ? 'bg-[#0D3853]/85 backdrop-blur-sm rounded-xl p-6 md:p-8' 
                  : ''
              } ${
                contentPosition === 'center' ? 'mx-auto' : ''
              }`}
            >
              {subtitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`inline-block text-sm font-semibold mb-4 ${
                    textColor === 'white' ? 'text-[#0EB5B2]' : 'text-[#0EB5B2]'
                  }`}
                >
                  {subtitle}
                </motion.span>
              )}
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`${titleSizeClasses[titleSize]} font-bold leading-tight mb-6 ${textColorClasses[textColor]}`}
              >
                {title}
              </motion.h1>
              
              {description && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className={`text-lg md:text-xl mb-8 ${
                    textColor === 'white' ? 'text-white/90' : 'text-[#0D3853]/80'
                  }`}
                >
                  {description}
                </motion.p>
              )}
              
              {ctaText && ctaHref && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Link
                    href={ctaHref}
                    className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                      text-white px-8 py-4 rounded-lg font-semibold text-lg 
                      shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
                      transform hover:-translate-y-1 transition-all duration-300"
                  >
                    {ctaText}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
