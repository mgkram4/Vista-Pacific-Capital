// app/excavator/page.tsx

import { Metadata } from 'next';

import { generateEnhancedMetadata, generateEnhancedViewport } from '@/app/lib/metadata/enhanced-config';
import { excavatorMetadata } from '@/app/lib/metadata/excavator';
import ExcavatorFinancingContent from './excavator';

export const metadata: Metadata = generateEnhancedMetadata(excavatorMetadata);

export const viewport = generateEnhancedViewport();

// Server Component
export default function ExcavatorFinancingPage() {
  return <ExcavatorFinancingContent />;
}