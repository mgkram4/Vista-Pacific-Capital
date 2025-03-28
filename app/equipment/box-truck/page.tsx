// app/box-truck/page.tsx

import { Metadata } from 'next';

import { boxTruckMetadata } from '@/app/lib/metadata';
import { generateEnhancedMetadata } from '@/app/lib/metadata/enhanced-config';
import BoxTruckFinancingContent from './box-truck';


// Generate metadata at the page level (server component)
export const metadata: Metadata = generateEnhancedMetadata(boxTruckMetadata);

// Server Component
export default function BoxTruckFinancingPage() {
  return <BoxTruckFinancingContent />;
}