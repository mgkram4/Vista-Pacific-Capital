// lib/metadata/configs/crane.ts
import { EnhancedEquipmentMetadata } from './enhanced-config';

export const craneMetadata: EnhancedEquipmentMetadata = {
  title: 'Crane Financing | Heavy Lifting Equipment Loans',
  description: 'Specialized crane financing solutions with competitive rates. Fund mobile cranes, tower cranes, and lifting equipment with flexible payment options.',
  keywords: [
    'crane financing',
    'lifting equipment loans',
    'construction crane financing',
    'tower crane loans',
    'mobile crane financing',
    'crane equipment leasing',
    'heavy lifting equipment',
    'construction equipment loans',
    'crane machinery financing',
    'overhead crane financing'
  ],
  image: '/images/crane-financing.jpg',
  type: 'crane',
  category: 'Construction Equipment',
  financingTerms: {
    minTerm: 24,
    maxTerm: 84,
    minAmount: 100000,
    maxAmount: 10000000,
    interestRange: {
      min: 4.99,
      max: 12.99
    }
  },
  equipment: [
    {
      name: 'Mobile Cranes',
      types: [
        'All Terrain Cranes',
        'Rough Terrain Cranes',
        'Truck Mounted Cranes',
        'Crawler Cranes',
        'Carry Deck Cranes'
      ]
    },
    {
      name: 'Tower Cranes',
      types: [
        'Hammerhead Cranes',
        'Luffing Jib Cranes',
        'Self-Erecting Cranes',
        'Flat Top Cranes',
        'Climbing Cranes'
      ]
    },
    {
      name: 'Specialized Cranes',
      types: [
        'Overhead Cranes',
        'Gantry Cranes',
        'Loader Cranes',
        'Port Cranes',
        'Marine Cranes'
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