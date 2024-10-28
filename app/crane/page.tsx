// app/crane/page.tsx

import { Metadata } from 'next';
import { craneMetadata } from '../lib/metadata';
import { generateEnhancedMetadata } from '../lib/metadata/enhanced-config';
import CraneFinancingContent from './crane';

// Generate metadata at the page level (server component)
export const metadata: Metadata = generateEnhancedMetadata(craneMetadata);

// Server Component
export default function CraneFinancingPage() {
  return <CraneFinancingContent />;
}