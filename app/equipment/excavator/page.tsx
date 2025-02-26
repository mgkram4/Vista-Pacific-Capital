// app/excavator/page.tsx

import { excavatorMetadata } from '@/app/lib/metadata';
import { generateEnhancedMetadata } from '@/app/lib/metadata/enhanced-config';
import { Metadata } from 'next';
import ExcavatorFinancingContent from './excavator';

// Generate metadata at the page level (server component)
export const metadata: Metadata = generateEnhancedMetadata(excavatorMetadata);

// Server Component
export default function ExcavatorFinancingPage() {
  return <ExcavatorFinancingContent />;
}