// lib/metadata/configs/medical.ts
import { EnhancedEquipmentMetadata } from './enhanced-config';

export const medicalMetadata: EnhancedEquipmentMetadata = {
  title: 'Medical Equipment Financing | Healthcare Equipment Loans',
  description: 'Specialized medical equipment financing solutions with competitive rates. Fund imaging systems, surgical equipment, and diagnostic tools with flexible terms.',
  keywords: [
    'medical equipment financing',
    'healthcare equipment loans',
    'hospital equipment financing',
    'diagnostic equipment financing',
    'imaging equipment loans',
    'surgical equipment financing',
    'medical device financing',
    'healthcare technology loans',
    'medical practice equipment',
    'medical equipment leasing'
  ],
  image: '/images/medical-equipment-financing.jpg',
  type: 'medical',
  category: 'Medical Equipment',
  financingTerms: {
    minTerm: 24,
    maxTerm: 84,
    minAmount: 50000,
    maxAmount: 5000000,
    interestRange: {
      min: 4.99,
      max: 11.99
    }
  },
  equipment: [
    {
      name: 'Imaging Systems',
      types: [
        'MRI Machines',
        'CT Scanners',
        'X-Ray Systems',
        'Ultrasound Equipment',
        'Digital Radiography'
      ]
    },
    {
      name: 'Surgical Equipment',
      types: [
        'Surgical Tables',
        'Surgical Lighting',
        'Anesthesia Machines',
        'Surgical Instruments',
        'Sterilization Equipment'
      ]
    },
    {
      name: 'Diagnostic Equipment',
      types: [
        'Patient Monitors',
        'EKG/ECG Machines',
        'Laboratory Equipment',
        'Diagnostic Imaging',
        'Testing Equipment'
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