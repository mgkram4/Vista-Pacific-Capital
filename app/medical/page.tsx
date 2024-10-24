// app/medical/page.tsx


import { Metadata } from 'next';
import { medicalMetadata } from '../lib/metadata';
import { generateEnhancedMetadata } from '../lib/metadata/enhanced-config';
import MedicalFinancingContent from './medical';


// Generate metadata at the page level (server component)
export const metadata: Metadata = generateEnhancedMetadata(medicalMetadata);

// Server Component
export default function MedicalFinancingPage() {
  return <MedicalFinancingContent />;
}