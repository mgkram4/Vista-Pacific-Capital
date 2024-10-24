import { Home, Info, Phone, Settings } from 'lucide-react';


interface Equipment {
    name: string;
    description?: string;
  }
  
  interface Benefit {
    title: string;
    description: string;
  }

  export interface PrimaryLinks {
    text: string;
    path: string;
    icon: typeof Home | typeof Info | typeof Phone | typeof Settings;
    description: string;
  }
  
  interface FinancingType {
    title: string;
    slug: string;
    description: string;
    icon: React.ElementType;
    image: string;
    equipment: Equipment[];
    benefits: Benefit[];
    minAmount?: number;
    maxAmount?: number;
  }
  
  interface Stats {
    label: string;
    value: string;
    suffix?: string;
  }

  // types.ts

export interface EquipmentLink {
  topText: string;
  bottomText: string;
  path: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}

export interface PrimaryLink {
  text: string;
  path: string;
  icon: typeof Home | typeof Info | typeof Phone | typeof Settings;
  description: string;
}

export interface NavLinkProps {
  link: EquipmentLink | PrimaryLink;
  isActive: boolean;
  isMobile?: boolean;
  onClick?: () => void;
}

// Animation variants
export const menuVariants = {
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

export const itemVariants = {
  closed: {
    x: -20,
    opacity: 0
  },
  open: {
    x: 0,
    opacity: 1
  }
};