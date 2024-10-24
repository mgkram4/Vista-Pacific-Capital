// lib/metadata/configs/brewery.ts
import { EnhancedEquipmentMetadata } from './enhanced-config';

export const breweryMetadata: EnhancedEquipmentMetadata = {
  title: 'Brewery Equipment Financing | Craft Brewery Loans',
  description: 'Specialized brewery equipment financing solutions with competitive rates. Fund brewing systems, fermentation tanks, and packaging lines with flexible terms.',
  keywords: [
    'brewery equipment financing',
    'craft brewery loans',
    'brewing equipment financing',
    'brewery tank financing',
    'fermentation tank loans',
    'brewing system financing',
    'craft beer equipment loans',
    'brewery packaging equipment',
    'microbrewery equipment financing',
    'brewery expansion loans'
  ],
  image: '/images/brewery-equipment-financing.jpg',
  type: 'brewery',
  category: 'Brewery Equipment',
  financingTerms: {
    minTerm: 24,
    maxTerm: 84,
    minAmount: 50000,
    maxAmount: 2000000,
    interestRange: {
      min: 5.49,
      max: 12.99
    }
  },
  equipment: [
    {
      name: 'Brewing Systems',
      types: [
        'Brewhouses',
        'Fermentation Tanks',
        'Brite Tanks',
        'Mash Tuns',
        'Kettle Systems'
      ]
    },
    {
      name: 'Packaging Equipment',
      types: [
        'Bottling Lines',
        'Canning Systems',
        'Kegging Equipment',
        'Labeling Machines',
        'Packaging Conveyors'
      ]
    },
    {
      name: 'Support Equipment',
      types: [
        'Chillers',
        'Cleaning Systems',
        'Grain Handling',
        'Water Treatment',
        'Storage Tanks'
      ]
    }
  ],
  features: [
    'Financing up to $2 million',
    'Terms from 24 to 84 months',
    'Competitive rates starting at 5.49%',
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