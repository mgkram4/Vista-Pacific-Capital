// app/dump-truck/page.tsx

import { Metadata } from 'next';

import { dumpTruckMetadata } from '@/app/lib/metadata/dumptruck';
import { generateEnhancedMetadata, generateEnhancedViewport } from '@/app/lib/metadata/enhanced-config';
import DumpTruckFinancingContent from './dump-truck';

export const metadata: Metadata = generateEnhancedMetadata(dumpTruckMetadata);

export const viewport = generateEnhancedViewport();

export default function DumpTruckFinancingPage() {
  return <DumpTruckFinancingContent />;
}