// app/restaurant/page.tsx

import { restaurantMetadata } from '@/app/lib/metadata';
import { generateEnhancedMetadata } from '@/app/lib/metadata/enhanced-config';
import { Metadata } from 'next';
import RestaurantFinancingContent from './resturant';


// Generate metadata at the page level (server component)
export const metadata: Metadata = generateEnhancedMetadata(restaurantMetadata);

// Server Component
export default function RestaurantFinancingPage() {
  return <RestaurantFinancingContent />;
}