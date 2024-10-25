// app/restaurant/page.tsx

import { Metadata } from 'next';
import { restaurantMetadata } from '../lib/metadata';
import { generateEnhancedMetadata } from '../lib/metadata/enhanced-config';
import RestaurantFinancingContent from '../restaurant/resturant';



// Generate metadata at the page level (server component)
export const metadata: Metadata = generateEnhancedMetadata(restaurantMetadata);

// Server Component
export default function RestaurantFinancingPage() {
  return <RestaurantFinancingContent />;
}