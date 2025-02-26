// app/medical/page.tsx


import { medicalMetadata } from '@/app/lib/metadata';
import { generateEnhancedMetadata } from '@/app/lib/metadata/enhanced-config';
import { Metadata } from 'next';
import MedicalFinancingContent from './medical';


// Generate metadata at the page level (server component)
export const metadata: Metadata = generateEnhancedMetadata(medicalMetadata);

// Server Component
export default function MedicalFinancingPage() {
  return <MedicalFinancingContent />;
}