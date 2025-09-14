import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0D3853] text-white py-12" role="contentinfo">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Company Info */}
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <Link href="/" aria-label="Vista Pacific Capital home">
                <div className="bg-white rounded p-2">
                  <Image
                    src="/Images/logo3.png"
                    alt="Vista Pacific Capital Logo"
                    width={180}
                    height={64}
                    quality={100}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </Link>
            </div>
            <p className="text-sm text-[#B3B3B3]">© 2025 Vista Pacific Capital</p>
            <Link 
              href="/privacy-policy" 
              className="block text-sm text-[#B3B3B3] hover:text-[#0EB5B2] transition-colors"
            >
              Privacy Policy
            </Link>
            <div className="space-y-1 text-sm text-[#B3B3B3]">
              <p className="font-medium text-white">Office Hours:</p>
              <p>Monday - Friday: 8:00 AM - 6:00 PM PST</p>
            </div>
            <a 
              href="tel:+17145007017" 
              className="block text-lg font-medium text-white hover:text-[#0EB5B2] transition-colors"
            >
              (714) 500-7017
            </a>
          </div>

          {/* Center Column - Professional Associations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Professional Memberships</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image 
                  src="/Images/vendor/nefa.png" 
                  alt="NEFA - National Equipment Finance Association" 
                  width={60} 
                  height={30} 
                  className="object-contain bg-white rounded p-1" 
                />
                <span className="text-sm text-[#B3B3B3]">National Equipment Finance Association</span>
              </div>
              <div className="flex items-center space-x-3">
                <Image 
                  src="/Images/vendor/elfa.png" 
                  alt="ELFA - Equipment Leasing and Finance Association" 
                  width={60} 
                  height={30} 
                  className="object-contain bg-white rounded p-1" 
                />
                <span className="text-sm text-[#B3B3B3]">Equipment Leasing and Finance Association</span>
              </div>
              <div className="flex items-center space-x-3">
                <Image 
                  src="/Images/vendor/aacfb.png" 
                  alt="AACFB - American Association of Commercial Finance Brokers" 
                  width={60} 
                  height={30} 
                  className="object-contain bg-white rounded p-1" 
                />
                <span className="text-sm text-[#B3B3B3]">American Association of Commercial Finance Brokers</span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#0EB5B2] hover:bg-[#0D3853] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 border border-[#0EB5B2] hover:border-white"
            >
              Contact Us
            </Link>
            <a
              href="https://www.linkedin.com/company/vista-pacific-capital"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#B3B3B3] hover:text-[#0EB5B2] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">LinkedIn</span>
            </a>
            <div className="pt-4 text-xs text-[#B3B3B3]">
              <Link 
                href="/terms-of-service" 
                className="hover:text-[#0EB5B2] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}