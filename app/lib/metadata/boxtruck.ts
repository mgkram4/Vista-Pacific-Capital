// lib/metadata/configs/box-truck.ts
import { EnhancedEquipmentMetadata } from './enhanced-config';

export const boxTruckMetadata: EnhancedEquipmentMetadata = {
  title: 'Box Truck Financing | Commercial Delivery Vehicle Loans',
  description: 'Specialized box truck financing with competitive rates. Fund delivery vehicles, straight trucks, and cargo vans with flexible payment options.',
  keywords: [
    'box truck financing',
    'delivery truck loans',
    'straight truck financing',
    'commercial truck loans',
    'cargo van financing',
    'delivery vehicle loans',
    'commercial vehicle financing',
    'box truck leasing',
    'freight truck loans',
    'last mile delivery financing'
  ],
  image: '/images/box-truck-financing.jpg',
  type: 'box-truck',
  category: 'Commercial Vehicles',
  financingTerms: {
    minTerm: 24,
    maxTerm: 84,
    minAmount: 25000,
    maxAmount: 500000,
    interestRange: {
      min: 4.99,
      max: 12.99
    }
  },
  equipment: [
    {
      name: 'Box Trucks',
      types: [
        'Light Duty Box Trucks',
        'Medium Duty Box Trucks',
        'Heavy Duty Box Trucks',
        'Refrigerated Box Trucks',
        'Dry Freight Box Trucks'
      ]
    },
    {
      name: 'Cargo Vans',
      types: [
        'Sprinter Vans',
        'Transit Vans',
        'ProMaster Vans',
        'Step Vans',
        'Cutaway Vans'
      ]
    },
    {
      name: 'Specialized Delivery Vehicles',
      types: [
        'Last Mile Delivery Vehicles',
        'Moving Trucks',
        'Furniture Delivery Trucks',
        'Express Delivery Vans',
        'Package Delivery Vehicles'
      ]
    }
  ],
  features: [
    'Financing up to $500,000',
    'Terms from 24 to 84 months',
    'Competitive rates starting at 4.99%',
    'Quick approval process',
    'Flexible payment options',
    'New and used vehicle financing'
  ],
  benefits: [
    'Preserve working capital',
    'Tax advantages',
    'Fleet expertise',
    'Fast funding',
    'Simplified application process',
    'Dedicated support team'
  ]
};