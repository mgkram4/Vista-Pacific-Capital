// app/construction/page.tsx
import { Metadata } from 'next';

import { constructionMetadata } from '@/app/lib/metadata/construction';
import { generateEnhancedMetadata, generateEnhancedViewport } from '@/app/lib/metadata/enhanced-config';
import ConstructionFinancingContent from './construction';

export const metadata: Metadata = generateEnhancedMetadata(constructionMetadata);

export const viewport = generateEnhancedViewport();

export default function ConstructionFinancingPage() {
  return <ConstructionFinancingContent />;
}