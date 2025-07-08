// app/restaurant/page.tsx

import { generateEnhancedMetadata, generateEnhancedViewport } from '@/app/lib/metadata/enhanced-config';
import { restaurantMetadata } from '@/app/lib/metadata/restaurant';
import { Metadata } from 'next';
import RestaurantServices from './resturant';


export const metadata: Metadata = generateEnhancedMetadata(restaurantMetadata);

export const viewport = generateEnhancedViewport();

export default function RestaurantFinancingPage() {
  return <RestaurantServices />;
}