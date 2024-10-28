// app/excavator/page.tsx

import { Metadata } from 'next';
import { excavatorMetadata } from '../lib/metadata';
import { generateEnhancedMetadata } from '../lib/metadata/enhanced-config';
import ExcavatorFinancingContent from './excavator';

// Generate metadata at the page level (server component)
export const metadata: Metadata = generateEnhancedMetadata(excavatorMetadata);

// Server Component
export default function ExcavatorFinancingPage() {
  return <ExcavatorFinancingContent />;
}