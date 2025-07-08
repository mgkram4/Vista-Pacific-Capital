// app/medical/page.tsx


import { Metadata } from 'next';

import { generateEnhancedMetadata, generateEnhancedViewport } from '@/app/lib/metadata/enhanced-config';
import { medicalMetadata } from '@/app/lib/metadata/medical';
import MedicalFinancingContent from './medical';

export const metadata: Metadata = generateEnhancedMetadata(medicalMetadata);

export const viewport = generateEnhancedViewport();

// Server Component
export default function MedicalFinancingPage() {
  return <MedicalFinancingContent />;
}