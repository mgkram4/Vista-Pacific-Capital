import { motion } from 'framer-motion';
import Link from 'next/link';

interface NavLinkProps {
  link: {
    topText: string;
    bottomText: string;
    path: string;
    description: string;
  };
  isActive: boolean;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ link, isActive, onClick }) => {
  return (
    <Link
      href={link.path}
      onClick={onClick}
      className={`group relative p-2 transition-all duration-300 flex justify-center items-center ${
        isActive ? 'text-sea-green-dark' : 'text-[#1B365D] lg:group-hover:text-sea-green-dark'
      }`}
      aria-label={`${link.topText} ${link.bottomText} Financing`}
      title={link.description}
    >
      <div className="flex flex-col items-center justify-center w-full">
        <span className="text-xs xl:text-sm font-medium whitespace-nowrap text-center w-full">
          {link.topText}
        </span>
        <span className="text-xs xl:text-sm font-medium whitespace-nowrap text-center w-full">
          {link.bottomText}
        </span>
        <motion.div
          className={`absolute bottom-0 left-0 h-0.5 bg-sea-green-dark w-0 lg:group-hover:w-full transition-all duration-300 ${
            isActive ? 'w-full' : ''
          }`}
          aria-hidden="true"
        />
      </div>
    </Link>
  );
};