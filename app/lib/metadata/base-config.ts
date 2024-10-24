// lib/metadata/base-config.ts
import { Metadata } from 'next';

export const SITE_NAME = 'Vista Pacific Capital';
export const BASE_URL = 'https://vistapacificcapital.com';

export interface EquipmentMetadata {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  type: string;
}

export function generateMetadata(config: EquipmentMetadata): Metadata {
  return {
    title: `${config.title} | ${SITE_NAME}`,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.title,
      description: config.description,
      type: 'website',
      url: `${BASE_URL}/equipment-financing/${config.type}`,
      images: [{
        url: config.image,
        width: 1200,
        height: 630,
        alt: `${config.title} from ${SITE_NAME}`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [config.image],
    }
  };
}