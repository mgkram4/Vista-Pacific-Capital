// lib/metadata/configs/cnc.ts
import { EnhancedEquipmentMetadata } from './enhanced-config';

export const cncMetadata: EnhancedEquipmentMetadata = {
  title: 'CNC Machine Financing | Manufacturing Equipment Loans',
  description: 'Industry-leading CNC machine financing solutions with competitive rates and flexible terms. Fund mills, lathes, and machining centers with expert support.',
  keywords: [
    'cnc machine financing',
    'manufacturing equipment loans',
    'machining center financing',
    'cnc equipment leasing',
    'industrial equipment financing',
    'machine tool financing',
    'metalworking equipment loans',
    'cnc lathe financing',
    'vertical machining center funding',
    'horizontal machining center loans'
  ],
  image: '/images/cnc-machine-financing.jpg',
  type: 'cnc',
  category: 'Manufacturing Equipment',
  financingTerms: {
    minTerm: 24,
    maxTerm: 84,
    minAmount: 50000,
    maxAmount: 5000000,
    interestRange: {
      min: 4.99,
      max: 12.99
    }
  },
  equipment: [
    {
      name: 'CNC Mills',
      types: [
        'Vertical Machining Centers',
        'Horizontal Machining Centers',
        '5-Axis Mills',
        'Bridge Mills'
      ],
      manufacturers: [
        'Haas',
        'DMG MORI',
        'Mazak',
        'Okuma',
        'Doosan'
      ]
    },
    {
      name: 'CNC Lathes',
      types: [
        'Turning Centers',
        'Swiss-Type Lathes',
        'Multi-Axis Lathes',
        'Turn-Mill Centers'
      ]
    },
    {
      name: 'Automation Equipment',
      types: [
        'Robotic Arms',
        'Material Handling Systems',
        'Automated Storage Systems',
        'Quality Control Systems'
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