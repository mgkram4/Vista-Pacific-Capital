// lib/metadata/configs/excavator.ts
import { EnhancedEquipmentMetadata } from './enhanced-config';

export const excavatorMetadata: EnhancedEquipmentMetadata = {
  title: 'Excavator Financing | Heavy Construction Equipment Loans',
  description: 'Specialized excavator financing solutions with competitive rates. Fund mini excavators to large mining excavators with flexible payment options.',
  keywords: [
    'excavator financing',
    'heavy equipment loans',
    'construction equipment financing',
    'mini excavator financing',
    'used excavator loans',
    'mining excavator financing',
    'earthmoving equipment loans',
    'construction machinery financing',
    'excavator leasing',
    'heavy machinery financing'
  ],
  image: '/images/excavator-financing.jpg',
  type: 'excavator',
  category: 'Construction Equipment',
  financingTerms: {
    minTerm: 24,
    maxTerm: 84,
    minAmount: 25000,
    maxAmount: 5000000,
    interestRange: {
      min: 4.99,
      max: 12.99
    }
  },
  equipment: [
    {
      name: 'Compact Excavators',
      types: [
        'Mini Excavators',
        'Compact Excavators',
        'Midi Excavators',
        'Zero Tail Swing',
        'Rubber Track Excavators'
      ]
    },
    {
      name: 'Standard Excavators',
      types: [
        'Crawler Excavators',
        'Wheeled Excavators',
        'Long Reach Excavators',
        'Demolition Excavators',
        'Hybrid Excavators'
      ]
    },
    {
      name: 'Large Excavators',
      types: [
        'Mining Excavators',
        'Mass Excavators',
        'High Reach Demolition',
        'Special Application Excavators',
        'Custom Built Excavators'
      ]
    }
  ],
  features: [
    'Financing up to $5 million',
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