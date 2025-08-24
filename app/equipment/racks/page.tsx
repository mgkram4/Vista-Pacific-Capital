// app/racking-material-handling/page.tsx

import { Metadata } from 'next';

import { EnhancedEquipmentMetadata, generateEnhancedMetadata, generateEnhancedViewport } from '@/app/lib/metadata/enhanced-config';
import RackingFinancingContent from './racks';


const rackingMetadata: EnhancedEquipmentMetadata = {
  title: "Racking and Material Handling Equipment Financing",
  description: "Financing solutions for warehouse racking, forklifts, conveyors, and other material handling equipment.",
  keywords: ["racking financing", "material handling equipment financing", "forklift financing", "conveyor financing"],
  image: 'https://images.unsplash.com/photo-1587145711332-18546a94a287',
  type: 'racking-material-handling',
  category: 'Industrial Equipment',
  financingTerms: {
    minTerm: 12,
    maxTerm: 84,
    minAmount: 5000,
    maxAmount: 20000000,
    interestRange: { min: 4.9, max: 25 }
  },
  equipment: [
    { name: 'Warehouse Racking', types: ['Pallet Racking', 'Cantilever Racking', 'Drive-in Racking'] },
    { name: 'Forklifts', types: ['Counterbalance Forklifts', 'Reach Trucks', 'Pallet Jacks'] }
  ],
  features: [
    'Financing up to $50M',
    'Terms from 24-84 months',
    'New and used equipment',
    'Fast approvals'
  ],
  benefits: [
    'Preserve working capital',
    'Potential tax advantages',
    'Flexible payment options'
  ]
};

// Generate metadata at the page level (server component)
export const metadata: Metadata = generateEnhancedMetadata(rackingMetadata);

export const viewport = generateEnhancedViewport();

// Server Component
export default function RackingFinancingPage() {
  return <RackingFinancingContent />;
}