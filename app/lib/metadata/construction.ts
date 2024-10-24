// lib/metadata/configs/construction.ts
import { EnhancedEquipmentMetadata } from './enhanced-config';

export const constructionMetadata: EnhancedEquipmentMetadata = {
  title: 'Construction Equipment Financing | Heavy Equipment Loans',
  description: 'Industry-leading construction equipment financing with competitive rates. Fund excavators, bulldozers, cranes, and more with flexible payment options.',
  keywords: [
    'construction equipment financing',
    'heavy equipment loans',
    'construction machinery financing',
    'contractor equipment financing',
    'excavator financing',
    'bulldozer financing',
    'crane financing',
    'construction equipment leasing',
    'heavy machinery loans',
    'earthmoving equipment financing'
  ],
  image: '/images/construction-equipment-financing.jpg',
  type: 'construction',
  category: 'Construction Equipment',
  financingTerms: {
    minTerm: 24,
    maxTerm: 84,
    minAmount: 25000,
    maxAmount: 10000000,
    interestRange: {
      min: 4.99,
      max: 12.99
    }
  },
  equipment: [
    {
      name: 'Earthmoving Equipment',
      types: [
        'Excavators',
        'Bulldozers',
        'Backhoes',
        'Skid Steers',
        'Wheel Loaders'
      ]
    },
    {
      name: 'Lifting Equipment',
      types: [
        'Cranes',
        'Boom Lifts',
        'Scissor Lifts',
        'Forklifts',
        'Telehandlers'
      ]
    },
    {
      name: 'Road Construction',
      types: [
        'Pavers',
        'Rollers',
        'Graders',
        'Milling Machines',
        'Concrete Equipment'
      ]
    }
  ],
  features: [
    'Financing up to $10 million',
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