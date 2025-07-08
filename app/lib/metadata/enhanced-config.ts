// lib/metadata/enhanced-config.ts
import { Metadata } from 'next';

export const SITE_NAME = 'Vista Pacific Capital';
export const BASE_URL = 'https://vistapacificcapital.com';

interface FinanceTerms {
  minTerm: number;
  maxTerm: number;
  minAmount: number;
  maxAmount: number;
  interestRange: {
    min: number;
    max: number;
  };
}

interface EquipmentCategory {
  name: string;
  types: string[];
  manufacturers?: string[];
}

export interface EnhancedEquipmentMetadata {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  type: string;
  category: string;
  financingTerms: FinanceTerms;
  equipment: EquipmentCategory[];
  features: string[];
  benefits: string[];
}

// Schema.org structured data generator
function generateSchemaMarkup(config: EnhancedEquipmentMetadata) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    '@id': `${BASE_URL}/equipment-financing/${config.type}#product`,
    name: config.title,
    description: config.description,
    provider: {
      '@type': 'FinancialService',
      name: SITE_NAME,
      url: BASE_URL
    },
    loanTerm: {
      '@type': 'QuantitativeValue',
      minValue: config.financingTerms.minTerm,
      maxValue: config.financingTerms.maxTerm,
      unitText: 'months'
    },
    amount: {
      '@type': 'MonetaryAmount',
      minValue: config.financingTerms.minAmount,
      maxValue: config.financingTerms.maxAmount,
      currency: 'USD'
    },
    interestRate: {
      '@type': 'QuantitativeValue',
      minValue: config.financingTerms.interestRange.min,
      maxValue: config.financingTerms.interestRange.max,
      unitText: '%'
    },
    category: config.category,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      minPrice: config.financingTerms.minAmount,
      maxPrice: config.financingTerms.maxAmount,
      offerCount: config.equipment.reduce((acc, cat) => acc + cat.types.length, 0)
    }
  };
}

// Enhanced metadata generator with improved SEO
export function generateEnhancedMetadata(config: EnhancedEquipmentMetadata): Metadata {
  const schemaMarkup = generateSchemaMarkup(config);
  const canonicalUrl = `${BASE_URL}/equipment-financing/${config.type}`;
  
  return {
    title: `${config.title} | ${SITE_NAME}`,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.title,
      description: config.description,
      type: 'website',
      url: canonicalUrl,
      siteName: SITE_NAME,
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
      site: '@VistaPacific',
      creator: '@VistaPacific'
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
    authors: [{ name: SITE_NAME, url: BASE_URL }],
    other: {
      'google-site-verification': 'your-verification-code',
      'msvalidate.01': 'your-bing-verification-code',
    },
    verification: {
      google: 'your-verification-code',
      yandex: 'your-verification-code',
     
    },
    applicationName: SITE_NAME,
    referrer: 'origin-when-cross-origin',
    category: config.category,
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(BASE_URL),
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

export function generateEnhancedViewport() {
  return {
    themeColor: '#113E59',
    viewport: 'width=device-width, initial-scale=1'
  };
}

// Helper function to generate breadcrumb structured data
export function generateBreadcrumbSchema(config: EnhancedEquipmentMetadata) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@id': BASE_URL,
          name: 'Home'
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@id': `${BASE_URL}/equipment-financing`,
          name: 'Equipment Financing'
        }
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@id': `${BASE_URL}/equipment-financing/${config.type}`,
          name: config.title
        }
      }
    ]
  };
}