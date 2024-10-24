import { EquipmentLink, PrimaryLink } from "@/app/types";
import { Home, Info, Phone } from "lucide-react";

export const SITE_NAME = 'Vista Pacific Capital';
export const BASE_URL = 'https://vistapacificcapital.com';

export const navigationSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  "name": "Equipment Financing Navigation",
  "description": "Navigate Vista Pacific Capital's equipment financing options",
  "hasPart": [
    {
      "@type": "WebPage",
      "name": "Construction Equipment Financing",
      "url": `${BASE_URL}/construction`,
      "description": "Finance construction equipment with competitive rates"
    },
    {
      "@type": "WebPage",
      "name": "Medical Equipment Financing",
      "url": `${BASE_URL}/medical`,
      "description": "Healthcare equipment financing solutions"
    }
  ]
};

export const primaryLinks: PrimaryLink[] = [
    {
      text: 'Home',
      path: '/',
      icon: Home,
      description: 'Return to homepage'
    },
    {
      text: 'About Us',
      path: '/about',
      icon: Info,
      description: 'Learn about Vista Pacific Capital'
    },
    {
      text: 'Contact',
      path: '/contact',
      icon: Phone,
      description: 'Get in touch with us'
    }
  ];

export const equipmentLinks: EquipmentLink[] = [
  {
    topText: 'Construction',
    bottomText: 'Equipment',
    path: '/construction',
    description: 'Finance construction equipment with competitive rates and flexible terms',
    metaTitle: 'Construction Equipment Financing | Heavy Equipment Loans',
    metaDescription: 'Get competitive financing for construction equipment including excavators, cranes, and heavy machinery.'
  },
  {
    topText: 'Medical',
    bottomText: 'Equipment',
    path: '/medical',
    description: 'Healthcare equipment financing solutions',
    metaTitle: 'Medical Equipment Financing | Healthcare Equipment Loans',
    metaDescription: 'Specialized financing for medical and healthcare equipment with flexible terms.'
  },
  {
    topText: 'Restaurant',
    bottomText: 'Equipment',
    path: '/restaurant',
    description: 'Restaurant equipment financing solutions',
    metaTitle: 'Restaurant Equipment Financing | Commercial Kitchen Loans',
    metaDescription: 'Finance restaurant and commercial kitchen equipment with competitive rates.'
  },
  {
    topText: 'Used',
    bottomText: 'Equipment',
    path: '/used',
    description: 'Used equipment financing options',
    metaTitle: 'Used Equipment Financing | Pre-Owned Equipment Loans',
    metaDescription: 'Affordable financing solutions for quality used and pre-owned equipment.'
  },
  {
    topText: 'Brewery',
    bottomText: 'Equipment',
    path: '/brewery',
    description: 'Brewery equipment funding solutions',
    metaTitle: 'Brewery Equipment Financing | Craft Brewery Loans',
    metaDescription: 'Specialized financing for brewery equipment and craft brewing systems.'
  },
  {
    topText: 'Crane',
    bottomText: 'Financing',
    path: '/crane',
    description: 'Crane financing solutions',
    metaTitle: 'Crane Financing | Heavy Lifting Equipment Loans',
    metaDescription: 'Finance all types of cranes and lifting equipment with flexible terms.'
  },
  {
    topText: 'Dental',
    bottomText: 'Equipment',
    path: '/dental',
    description: 'Dental practice equipment solutions',
    metaTitle: 'Dental Equipment Financing | Dental Practice Loans',
    metaDescription: 'Finance dental chairs, imaging systems, and practice equipment.'
  },
  {
    topText: 'Excavator',
    bottomText: 'Financing',
    path: '/excavator',
    description: 'Excavator financing options',
    metaTitle: 'Excavator Financing | Heavy Construction Equipment',
    metaDescription: 'Competitive financing for new and used excavators of all sizes.'
  },
  {
    topText: 'Dump Truck',
    bottomText: 'Financing',
    path: '/dump-truck',
    description: 'Dump truck financing',
    metaTitle: 'Dump Truck Financing | Commercial Truck Loans',
    metaDescription: 'Finance dump trucks and heavy hauling vehicles with flexible payment options.'
  },
  {
    topText: 'Box Truck',
    bottomText: 'Financing',
    path: '/box-truck',
    description: 'Box truck financing',
    metaTitle: 'Box Truck Financing | Commercial Vehicle Loans',
    metaDescription: 'Finance box trucks and delivery vehicles with competitive rates.'
  },
  {
    topText: 'CNC Machine',
    bottomText: 'Financing',
    path: '/cnc',
    description: 'CNC machine financing',
    metaTitle: 'CNC Machine Financing | Manufacturing Equipment',
    metaDescription: 'Specialized financing for CNC machines and manufacturing equipment.'
  }
];