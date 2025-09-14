'use client';

import { HERO_SUBHEAD, HERO_TITLE } from '@/app/styles/hero';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonHref?: string;
  backgroundImage?: string;
  highlightWord?: string; // Optional word to highlight in orange
}

export default function PageHeader({
  title,
  subtitle,
  buttonText = "Apply Now",
  buttonHref = "/apply",
  backgroundImage = "/Images/bg-wave2.png",
  highlightWord
}: PageHeaderProps) {
  // Function to render title with optional highlight
  const renderTitle = () => {
    if (!highlightWord) {
      return (
        <h1 className={`${HERO_TITLE} bg-clip-text text-transparent bg-gradient-to-r from-white via-[#F2F2F2] to-[#B3B3B3] mb-6`}>
          {title}
        </h1>
      );
    }

    const parts = title.split(highlightWord);
    return (
      <h1 className={`${HERO_TITLE} bg-clip-text text-transparent bg-gradient-to-r from-white via-[#F2F2F2] to-[#B3B3B3] mb-6`}>
        {parts[0]}
        <span className="bg-gradient-to-r from-[#FF6B35] to-[#ff825c] bg-clip-text text-transparent">
          {highlightWord}
        </span>
        {parts[1]}
      </h1>
    );
  };

  return (
    <section className="relative w-full h-[500px] lg:h-[600px]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Page background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content layout */}
      <div className="relative z-10 w-full h-full">
        {/* Left content area with overlay */}
        <div className="absolute inset-0 lg:inset-y-0 lg:left-0 lg:right-1/2 bg-[#0D3853]/95 text-white flex flex-col justify-center p-8 sm:p-12 lg:p-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full max-w-md mx-auto"
          >
            {renderTitle()}
            <p className={`${HERO_SUBHEAD} text-white lg:text-[#B3B3B3] mb-8`}>
              {subtitle}
            </p>
            <Link
              href={buttonHref}
              className="flex w-full max-w-[300px] mx-auto items-center justify-center lg:inline-flex lg:w-auto lg:max-w-none lg:mx-0 bg-gradient-to-r from-[#FF6B35] to-[#ff825c] hover:from-[#ff825c] hover:to-[#FF6B35] 
                text-white px-8 py-4 rounded-lg font-semibold text-lg 
                shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/40 
                transform hover:-translate-y-1 transition-all duration-300"
            >
              {buttonText}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}