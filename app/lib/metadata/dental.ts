// lib/metadata/configs/dental.ts
import { EnhancedEquipmentMetadata } from './enhanced-config';

export const dentalMetadata: EnhancedEquipmentMetadata = {
  title: 'Dental Equipment Financing | Dental Practice Loans',
  description: 'Specialized dental equipment financing with competitive rates. Fund chairs, imaging systems, and dental technology with flexible payment options.',
  keywords: [
    'dental equipment financing',
    'dental practice loans',
    'dental technology financing',
    'dental office equipment loans',
    'dental chair financing',
    'dental imaging equipment',
    'dental practice equipment',
    'dental x-ray financing',
    'dental equipment leasing',
    'dental practice technology'
  ],
  image: '/images/dental-equipment-financing.jpg',
  type: 'dental',
  category: 'Medical Equipment',
  financingTerms: {
    minTerm: 24,
    maxTerm: 84,
    minAmount: 25000,
    maxAmount: 1000000,
    interestRange: {
      min: 4.99,
      max: 11.99
    }
  },
  equipment: [
    {
      name: 'Treatment Equipment',
      types: [
        'Dental Chairs',
        'Delivery Systems',
        'Dental Lights',
        'Handpieces',
        'Sterilization Equipment'
      ]
    },
    {
      name: 'Imaging Systems',
      types: [
        'Digital X-Ray Systems',
        'Panoramic X-Ray',
        'Intraoral Cameras',
        'CBCT Scanners',
        '3D Imaging Systems'
      ]
    },
    {
      name: 'Technology Solutions',
      types: [
        'CAD/CAM Systems',
        'Practice Management Software',
        'Digital Impressions',
        'Patient Communication Systems',
        'Dental Lasers'
      ]
    }
  ],
  features: [
    'Financing up to $1 million',
    'Terms from 24 to 84 months',
    'Competitive rates starting at 4.99%',
    'Quick approval process',
    'Flexible payment options',
    'New and used equipment financing'
  ],
  benefits: [
    'Preserve working capital',
    'Tax advantages',
    'Equipment expertise',
    'Fast funding',
    'Simplified application process',
    'Dedicated support team'
  ]
};