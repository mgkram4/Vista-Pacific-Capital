import { motion } from 'framer-motion';
import { ChevronRight, Home, Info, Phone } from 'lucide-react';
import Link from 'next/link';
import { equipmentLinks } from '../lib/metadata/navbar';
import { NavLink } from './navlinks';

// Animation variants remain the same
const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      when: "afterChildren"
    }
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  closed: {
    x: -20,
    opacity: 0
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

interface MobileMenuProps {
  isOpen: boolean;
  pathname: string;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, pathname, onClose }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      exit="closed"
      className="lg:hidden fixed inset-0 top-[80px] bg-white/98 backdrop-blur-md overflow-y-auto"
    >
      <motion.div className="px-6 py-8 space-y-8">
        {/* Primary Links Section */}
        <motion.div variants={itemVariants} className="space-y-3">
          <h2 className="text-sm font-semibold text-gray-500 px-4 uppercase tracking-wider">
            Main Menu
          </h2>
          <div className="space-y-2 rounded-xl overflow-hidden">
            <Link
              href="/"
              onClick={onClose}
              className={`flex items-center p-4 transition-all ${
                pathname === '/' 
                  ? 'bg-[#5BB5B0]/10 text-[#5BB5B0]' 
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              <Home className="w-5 h-5 mr-3 text-gray-500" />
              <span className="font-medium">Home</span>
              <ChevronRight className="w-5 h-5 ml-auto text-gray-400" />
            </Link>
            <Link
              href="/about"
              onClick={onClose}
              className={`flex items-center p-4 transition-all ${
                pathname === '/about' 
                  ? 'bg-[#5BB5B0]/10 text-[#5BB5B0]' 
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              <Info className="w-5 h-5 mr-3 text-gray-500" />
              <span className="font-medium">About Us</span>
              <ChevronRight className="w-5 h-5 ml-auto text-gray-400" />
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className={`flex items-center p-4 transition-all ${
                pathname === '/contact' 
                  ? 'bg-[#5BB5B0]/10 text-[#5BB5B0]' 
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              <Phone className="w-5 h-5 mr-3 text-gray-500" />
              <span className="font-medium">Contact</span>
              <ChevronRight className="w-5 h-5 ml-auto text-gray-400" />
            </Link>
          </div>
        </motion.div>

        {/* Equipment Links Section */}
        <motion.div variants={itemVariants} className="space-y-3">
          <h2 className="text-sm font-semibold text-gray-500 px-4 uppercase tracking-wider">
            Equipment Financing
          </h2>
          <div className="space-y-2">
            {equipmentLinks.map((link) => (
              <motion.div
                key={link.path}
                className="rounded-xl overflow-hidden hover:bg-gray-100 transition-colors"
                variants={itemVariants}
              >
                <div className="p-4">
                  <NavLink
                    link={link}
                    isActive={pathname === link.path}
                    onClick={onClose}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile CTA */}
        <motion.div
          variants={itemVariants}
          className="sticky bottom-0 px-4 py-6 bg-white/95 backdrop-blur-md border-t border-gray-100 mt-auto"
        >
          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 
              text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl
              transition-all duration-300 text-center"
          >
            Get Your Quote Now
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;