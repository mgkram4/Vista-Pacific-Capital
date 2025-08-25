import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronDown,
  X
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const menuVariants = {
  closed: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  open: {
    opacity: 1,
    x: '0%',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

const itemVariants = {
  closed: {
    x: -20,
    opacity: 0,
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="font-semibold text-lg text-[#0D3853]">{title}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-4 space-y-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

const NavItem: React.FC<{
  href: string;
  onClose: () => void;
  children: React.ReactNode;
  isActive?: boolean;
}> = ({ href, onClose, children, isActive }) => (
  <Link
    href={href}
    onClick={onClose}
    className={`block py-2 px-4 rounded-md transition-colors ${
      isActive
        ? 'bg-[#E6F8F7] text-[#0D3853] font-semibold'
        : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    {children}
  </Link>
);

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  pathname,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="lg:hidden fixed inset-0 bg-white z-50 flex flex-col"
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Link href="/" onClick={onClose}>
              <img
                src="/Images/logo3.png"
                alt="Vista Pacific Capital"
                className="h-8"
              />
            </Link>
            <button onClick={onClose}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto px-6 py-4">
            <Accordion title="Equipment Financing">
              <NavItem
                href="/equipment"
                onClose={onClose}
                isActive={pathname === '/equipment'}
              >
                Application Only Equipment Financing up to $750,000
              </NavItem>
              <NavItem
                href="/commercial-equipment-financing"
                onClose={onClose}
                isActive={pathname === '/commercial-equipment-financing'}
              >
                Commercial Equipment Financing $500,000 to $50 million
              </NavItem>
              <NavItem
                href="/why-choose-us"
                onClose={onClose}
                isActive={pathname === '/why-choose-us'}
              >
                Why Choose Us
              </NavItem>
              <NavItem
                href="/apply"
                onClose={onClose}
                isActive={pathname === '/apply'}
              >
                Apply Now
              </NavItem>
            </Accordion>
            <Accordion title="Partner Program">
              <NavItem
                href="/partner-program"
                onClose={onClose}
                isActive={pathname === '/partner-program'}
              >
                Vendor Programs
              </NavItem>
              <NavItem href="#" onClose={onClose}>
                Partner Benefits
              </NavItem>
              <NavItem
                href="/vendor"
                onClose={onClose}
                isActive={pathname === '/vendor'}
              >
                Partnership Form
              </NavItem>
            </Accordion>
            <Accordion title="Tools">
              <NavItem
                href="/calculator"
                onClose={onClose}
                isActive={pathname === '/calculator'}
              >
                Payment Calculator
              </NavItem>
              <NavItem
                href="/tax-calculator"
                onClose={onClose}
                isActive={pathname === '/tax-calculator'}
              >
                Tax Calculator
              </NavItem>
              <NavItem
                href="/faq"
                onClose={onClose}
                isActive={pathname === '/faq'}
              >
                FAQ
              </NavItem>
              <NavItem
                href="/tax"
                onClose={onClose}
                isActive={pathname === '/tax'}
              >
                179 Tax Savings
              </NavItem>
              <NavItem
                href="/contact"
                onClose={onClose}
                isActive={pathname === '/contact'}
              >
                Contact Us
              </NavItem>
            </Accordion>
            <div className="border-b border-gray-200">
              <Link
                href="/alan-johnson"
                onClick={onClose}
                className="w-full block py-4 text-left font-semibold text-lg text-[#0D3853]"
              >
                Meet the Founder
              </Link>
            </div>
          </div>
          <div className="px-6 py-4 border-t border-gray-200">
            <Link
              href="/apply"
              onClick={onClose}
              className="block w-full text-center py-3 px-6 bg-[#FF6B35] text-white font-bold rounded-lg"
            >
              Apply Now
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;