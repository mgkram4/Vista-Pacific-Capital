// app/crane/page.tsx

import { Metadata } from 'next';

import { craneMetadata } from '@/app/lib/metadata';
import { generateEnhancedMetadata, generateEnhancedViewport } from '@/app/lib/metadata/enhanced-config';
import CraneFinancingContent from './crane';

// Generate metadata at the page level (server component)
export const metadata: Metadata = generateEnhancedMetadata(craneMetadata);

export const viewport = generateEnhancedViewport();

// Server Component
export default function CraneFinancingPage() {
  return <CraneFinancingContent />;
}