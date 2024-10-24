// lib/metadata/configs/restaurant.ts
import { EnhancedEquipmentMetadata } from './enhanced-config';

export const restaurantMetadata: EnhancedEquipmentMetadata = {
  title: 'Restaurant Equipment Financing | Commercial Kitchen Equipment Loans',
  description: 'Custom restaurant equipment financing solutions with competitive rates. Fund commercial kitchen equipment, refrigeration systems, and food prep tools.',
  keywords: [
    'restaurant equipment financing',
    'commercial kitchen equipment loans',
    'food service equipment financing',
    'kitchen equipment leasing',
    'restaurant appliance financing',
    'commercial refrigeration financing',
    'food prep equipment loans',
    'restaurant kitchen financing',
    'commercial oven financing',
    'food service equipment leasing'
  ],
  image: '/images/restaurant-equipment-financing.jpg',
  type: 'restaurant',
  category: 'Food Service Equipment',
  financingTerms: {
    minTerm: 24,
    maxTerm: 72,
    minAmount: 10000,
    maxAmount: 1000000,
    interestRange: {
      min: 5.99,
      max: 13.99
    }
  },
  equipment: [
    {
      name: 'Cooking Equipment',
      types: [
        'Commercial Ovens',
        'Ranges and Grills',
        'Fryers',
        'Steam Equipment',
        'Broilers'
      ]
    },
    {
      name: 'Refrigeration',
      types: [
        'Walk-in Coolers',
        'Freezers',
        'Prep Tables',
        'Ice Machines',
        'Display Cases'
      ]
    },
    {
      name: 'Food Prep',
      types: [
        'Mixers',
        'Food Processors',
        'Slicers',
        'Work Tables',
        'Sinks and Dishwashers'
      ]
    }
  ],
  features: [
    'Financing up to $1 million',
    'Terms from 24 to 72 months',
    'Competitive rates starting at 5.99%',
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