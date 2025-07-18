import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const equipmentCategories = [
    // Left column
    [
      { name: 'All Equipment', path: '/equipment' },
      { name: 'Material Handling Equipment', path: '/warehouse' },
      { name: 'Construction Equipment', path: '/equipment/construction' },
      { name: 'Medical Equipment', path: '/equipment/medical' },
      { name: 'Restaurant Equipment', path: '/equipment/restaurant' },
      { name: 'Used Equipment', path: '/equipment/used' },
      { name: 'Brewery Equipment', path: '/equipment/brewery' },
    ],
    // Right column
    [
      { name: 'Crane Financing', path: '/equipment/crane' },
      { name: 'Dental Equipment', path: '/equipment/dental' },
      { name: 'Excavator Financing', path: '/equipment/excavator' },
      { name: 'Dump Truck Financing', path: '/equipment/dump-truck' },
      { name: 'Box Truck Financing', path: '/equipment/box-truck' },
      { name: 'CNC Machine Financing', path: '/equipment/cnc-machine' },
    ]
  ];

  const specialPages = [
    { name: 'Payment Calculator', path: '/calculator' },
    { name: 'Contact Us', path: '/contact' },
  ];


  return (
    <footer className="bg-[#0D3853] text-white py-12" role="contentinfo">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main footer content - Three distinct sections with improved spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Section 1: Brand Column */}
          <div className="space-y-4 flex flex-col items-center lg:items-start">
            <div className="flex justify-center lg:justify-start w-full">
              <Link href="/" aria-label="Vista Pacific Capital home">
                <Image
                  src="/Images/logo-NO-BG.png"
                  alt="Vista Pacific Capital Logo"
                  width={240}
                  height={85}
                  quality={100}
                  className="w-64 h-auto brightness-0 invert object-contain"
                />
              </Link>
            </div>
            <p className="text-[#B3B3B3] text-base leading-relaxed text-center lg:text-left">
              Trusted equipment financing solutions for businesses across America. Fast approvals, competitive rates, and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start w-full mb-8">
              <p className="text-[#B3B3B3]">Connect with us:</p>
              <a 
                href="https://www.linkedin.com/company/vista-pacific-capital/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on LinkedIn"
                className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-[#0A66C2] to-[#0077b5] rounded-lg hover:opacity-90 transition-opacity"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* TODO: Add correct YouTube URL */}
              
            </div>
          </div>

          {/* Section 2: Equipment Categories with improved spacing and hover effects */}
          <div>
            <h2 className="text-xl font-semibold mb-5 uppercase tracking-wider text-[#0EB5B2] border-b border-[#0EB5B2]/30 pb-3 w-full">
              Industry Solutions
            </h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {equipmentCategories.map((column, columnIndex) => (
                <div key={columnIndex} className="space-y-4">
                  {column.map((category) => (
                    <Link 
                      key={category.path}
                      href={category.path}
                      className="block text-[#B3B3B3] hover:text-[#0EB5B2] transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Quick Links & Contact with better visual separation */}
          <div className="space-y-6">
            {/* Quick Links */}
            <div>
              <h2 className="text-xl font-semibold mb-5 uppercase tracking-wider text-[#0EB5B2] border-b border-[#0EB5B2]/30 pb-3 w-full">
                Quick Links
              </h2>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {specialPages.map((page) => (
                  <Link 
                    key={page.path}
                    href={page.path}
                    className="block text-[#B3B3B3] hover:text-[#0EB5B2] transition-colors"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Us */}
            <div className="bg-[#0D3853]/50 p-6 rounded-lg shadow-sm border border-[#0EB5B2]/20">
              <h2 className="text-xl font-semibold mb-6 uppercase tracking-wider text-[#0EB5B2]">
                Contact Us
              </h2>
              <div className="space-y-6">
                <Link 
                  href="/pdf-form"
                  className="inline-block bg-gradient-to-r from-[#FF6B35] to-[#ff825c] 
                    text-white font-medium px-6 py-3 rounded-lg shadow-sm hover:opacity-90 transition-opacity"
                >
                  Apply Now
                </Link>
                <Link 
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-[#0D3853] to-[#0D3853] 
                    text-white font-medium px-6 py-3 rounded-lg shadow-sm hover:opacity-90 transition-opacity ml-4 border border-[#0EB5B2]"
                >
                  Contact Us
                </Link>
                <div className="space-y-2">
                  <p className="text-[#B3B3B3] text-sm">Call us today:</p>
                  <a href="tel:+17145007017" className="text-2xl font-bold text-white hover:text-[#0EB5B2] transition-colors">
                    (714) 500-7017
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Copyright only */}
        <div className="mt-12 pt-8 border-t border-[#0EB5B2]/20">
          <div className="flex justify-center md:justify-start items-center text-sm text-[#B3B3B3]">
            <p>© {new Date().getFullYear()} Vista Pacific Capital. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}