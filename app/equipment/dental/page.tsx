// app/dental/page.tsx

import { Metadata } from 'next';

import { dentalMetadata } from '@/app/lib/metadata';
import { generateEnhancedMetadata } from '@/app/lib/metadata/enhanced-config';
import DentalServicesContent from './dental';

// Generate metadata at the page level (server component)
export const metadata: Metadata = generateEnhancedMetadata(dentalMetadata);

// Server Component
export default function DentalServicesPage() {
  return <DentalServicesContent />;
}