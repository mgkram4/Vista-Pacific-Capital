// lib/metadata/configs/dump-truck.ts
import { EnhancedEquipmentMetadata } from './enhanced-config';

export const dumpTruckMetadata: EnhancedEquipmentMetadata = {
  title: 'Dump Truck Financing | Commercial Truck Loans',
  description: 'Specialized dump truck financing with competitive rates. Fund new and used dump trucks for construction, mining, and hauling operations.',
  keywords: [
    'dump truck financing',
    'commercial truck loans',
    'construction truck financing',
    'hauling equipment loans',
    'articulated dump truck financing',
    'mining truck loans',
    'heavy truck financing',
    'commercial vehicle loans',
    'dump truck leasing',
    'construction equipment financing'
  ],
  image: '/images/dump-truck-financing.jpg',
  type: 'dump-truck',
  category: 'Commercial Vehicles',
  financingTerms: {
    minTerm: 24,
    maxTerm: 84,
    minAmount: 50000,
    maxAmount: 2000000,
    interestRange: {
      min: 4.99,
      max: 12.99
    }
  },
  equipment: [
    {
      name: 'Standard Dump Trucks',
      types: [
        'Single Axle Dumps',
        'Tandem Axle Dumps',
        'Tri-Axle Dumps',
        'Quad Axle Dumps',
        'Super Dumps'
      ]
    },
    {
      name: 'Specialized Dump Trucks',
      types: [
        'Articulated Dump Trucks',
        'Mining Dump Trucks',
        'Transfer Dump Trucks',
        'Side Dump Trucks',
        'End Dump Trucks'
      ]
    },
    {
      name: 'Related Equipment',
      types: [
        'Dump Trailers',
        'Pup Trailers',
        'Roll-Off Trucks',
        'Hook Lift Trucks',
        'Demolition Dumps'
      ]
    }
  ],
  features: [
    'Financing up to $2 million',
    'Terms from 24 to 84 months',
    'Competitive rates starting at 4.99%',
    'Quick approval process',
    'Flexible payment options',
    'New and used truck financing'
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