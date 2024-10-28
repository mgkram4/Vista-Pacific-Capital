// app/used/page.tsx

import { Metadata } from 'next';
import { usedEquipmentMetadata } from '../lib/metadata';
import { generateEnhancedMetadata } from '../lib/metadata/enhanced-config';
import UsedEquipmentContent from './used';

// Generate metadata at the page level (server component)
export const metadata: Metadata = generateEnhancedMetadata(usedEquipmentMetadata);

// Server Component
export default function UsedEquipmentPage() {
  return <UsedEquipmentContent />;
}