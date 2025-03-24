'use client';

import { useEffect } from 'react';

// List of common equipment images to preload
const imagesToPreload = [
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1', // Main equipment page hero
  'https://images.unsplash.com/photo-1621922688758-359fc864071e', // Construction equipment
  'https://images.unsplash.com/photo-1579154204601-01588f351e67', // Medical equipment
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836', // Restaurant equipment
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d', // Used equipment
  'https://images.unsplash.com/photo-1532634733-cae1395e440f', // Brewery equipment
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd', // Crane
  'https://images.unsplash.com/photo-1667841680566-3007c4f1ca51', // Excavator
  'https://images.unsplash.com/photo-1646927509523-3885bbf172b0', // Dump truck
  'https://images.unsplash.com/photo-1519003722824-194d4455a60c', // Box truck
  'https://images.unsplash.com/photo-1674453450405-b2d71e482e80', // CNC machine
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5' // Dental equipment
];

export default function ImagePreloader() {
  useEffect(() => {
    // Preload all images when component mounts
    imagesToPreload.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  // This component doesn't render anything visible
  return null;
} 