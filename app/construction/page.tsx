// app/construction/page.tsx
import { Metadata } from 'next';
import { constructionMetadata } from '../lib/metadata';
import { generateEnhancedMetadata } from '../lib/metadata/enhanced-config';
import ConstructionFinancingContent from './construction';

// Generate metadata at the page level (server component)
export const metadata: Metadata = generateEnhancedMetadata(constructionMetadata);

// Server Component
export default function ConstructionEquipmentPage() {
  return <ConstructionFinancingContent />;
}