// app/dump-truck/page.tsx

import { Metadata } from 'next';

import { dumpTruckMetadata } from '@/app/lib/metadata';
import { generateEnhancedMetadata } from '@/app/lib/metadata/enhanced-config';
import DumpTruckFinancingContent from './dump-truck';

// Generate metadata at the page level (server component)
export const metadata: Metadata = generateEnhancedMetadata(dumpTruckMetadata);

// Server Component
export default function DumpTruckFinancingPage() {
  return <DumpTruckFinancingContent />;
}