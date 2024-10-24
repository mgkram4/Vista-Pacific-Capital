// app/restaurant/page.tsx

import { Metadata } from 'next';
import RestaurantFinancingContent from './resturant';
import { generateEnhancedMetadata } from '../lib/metadata/enhanced-config';
import { restaurantMetadata } from '../lib/metadata';


// Generate metadata at the page level (server component)
export const metadata: Metadata = generateEnhancedMetadata(restaurantMetadata);

// Server Component
export default function RestaurantFinancingPage() {
  return <RestaurantFinancingContent />;
}