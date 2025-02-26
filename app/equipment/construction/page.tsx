// app/construction/page.tsx
import { constructionMetadata } from '@/app/lib/metadata';
import { generateEnhancedMetadata } from '@/app/lib/metadata/enhanced-config';
import { Metadata } from 'next';
import ConstructionFinancingContent from './construction';

// Generate metadata at the page level (server component)
export const metadata: Metadata = generateEnhancedMetadata(constructionMetadata);

// Server Component
export default function ConstructionEquipmentPage() {
  return <ConstructionFinancingContent />;
}