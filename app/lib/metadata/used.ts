// lib/metadata/configs/used.ts
import { EnhancedEquipmentMetadata } from './enhanced-config';

export const usedEquipmentMetadata: EnhancedEquipmentMetadata = {
  title: 'Used Equipment Financing | Pre-Owned Equipment Loans',
  description: 'Competitive financing solutions for quality used equipment across all industries. Get flexible terms and competitive rates on pre-owned machinery.',
  keywords: [
    'used equipment financing',
    'pre-owned equipment loans',
    'second-hand machinery financing',
    'used construction equipment loans',
    'used medical equipment financing',
    'used restaurant equipment loans',
    'refurbished equipment financing',
    'used machinery leasing',
    'previously owned equipment financing',
    'rebuilt equipment loans'
  ],
  image: '/images/used-equipment-financing.jpg',
  type: 'used',
  category: 'Used Equipment',
  financingTerms: {
    minTerm: 24,
    maxTerm: 72,
    minAmount: 10000,
    maxAmount: 5000000,
    interestRange: {
      min: 5.99,
      max: 13.99
    }
  },
  equipment: [
    {
      name: 'Construction Equipment',
      types: [
        'Used Excavators',
        'Used Bulldozers',
        'Used Cranes',
        'Used Loaders',
        'Used Dump Trucks'
      ]
    },
    {
      name: 'Industrial Equipment',
      types: [
        'Used Manufacturing Equipment',
        'Used Packaging Equipment',
        'Used Material Handling',
        'Used CNC Machines',
        'Used Production Lines'
      ]
    },
    {
      name: 'Commercial Equipment',
      types: [
        'Used Restaurant Equipment',
        'Used Medical Equipment',
        'Used Office Equipment',
        'Used Transportation Equipment',
        'Used Retail Equipment'
      ]
    }
  ],
  features: [
    'Financing up to $5 million',
    'Terms from 24 to 72 months',
    'Competitive rates starting at 5.99%',
    'Quick approval process',
    'Equipment inspection services',
    'Flexible payment options'
  ],
  benefits: [
    'Lower initial investment',
    'Tax advantages',
    'Equipment expertise',
    'Fast funding',
    'Simplified application process',
    'Dedicated support team'
  ]
};