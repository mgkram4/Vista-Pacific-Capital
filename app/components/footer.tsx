import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0D3853] text-white py-8" role="contentinfo">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" aria-label="Vista Pacific Capital home">
              <Image
                src="/Images/logo3.png"
                alt="Vista Pacific Capital Logo"
                width={180}
                height={64}
                quality={100}
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Tagline and Phone */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
            <p className="text-[#B3B3B3] text-sm max-w-md">
              Your trusted equipment financing partner. We provide reliable capital solutions to help businesses grow and succeed.
            </p>
            <a 
              href="tel:+17145007017" 
              className="text-white hover:text-[#0EB5B2] transition-colors font-medium"
            >
              (714) 500-7017
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-[#B3B3B3]">
            <p>© 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
}