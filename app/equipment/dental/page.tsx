// app/dental/page.tsx

import { Metadata } from 'next';

import { dentalMetadata } from '@/app/lib/metadata/dental';
import { generateEnhancedMetadata, generateEnhancedViewport } from '@/app/lib/metadata/enhanced-config';
import DentalFinancingContent from './dental';

export const metadata: Metadata = generateEnhancedMetadata(dentalMetadata);

export const viewport = generateEnhancedViewport();

// Server Component
export default function DentalFinancingPage() {
  return <DentalFinancingContent />;
}