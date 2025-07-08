import HomePageClient from '@/app/components/HomePageClient';
import { Metadata } from 'next';

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Equipment Financing Solutions",
  "description": "Equipment financing from $20,000 to $20 million with quick approval",
  "areaServed": "United States",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Equipment Financing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "FinancialService",
          "name": "Material Handling Equipment Financing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "FinancialService",
          "name": "Construction Equipment Financing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "FinancialService",
          "name": "Medical Equipment Financing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "FinancialService",
          "name": "Manufacturing Equipment Financing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "FinancialService",
          "name": "Restaurant Equipment Financing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "FinancialService",
          "name": "Transportation Financing Programs"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "1250"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How fast can I get approved?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most applications receive same-day approval. Funding typically occurs within 24-48 hours of document completion."
      }
    },
    {
      "@type": "Question",
      "name": "What credit score do I need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with all credit profiles from A through C. Lower scores may require additional documentation."
      }
    },
    {
      "@type": "Question",
      "name": "What documentation is required?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For requests under $400,000, we typically only need a one-page application. Larger amounts may require basic financial statements."
      }
    },
    {
      "@type": "Question",
      "name": "What are the financing amounts available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer equipment financing from $20,000 up to $20 million, with flexible terms and payment options to match your business needs."
      }
    }
  ]
};

export const metadata: Metadata = {
  title: "Equipment Financing $20K-$20M | Quick Approval | All Industries",
  description: "Get equipment financing approved quickly. New & used equipment, A-C credit accepted, terms up to 84 months. Apply online for construction, medical, restaurant equipment loans.",
  keywords: ["equipment financing", "business equipment loans", "quick equipment financing", "construction equipment financing", "medical equipment loans", "restaurant equipment financing", "heavy equipment financing", "commercial truck financing"],
  openGraph: {
    title: "Equipment Financing $20K-$20M | Quick Approval | All Industries",
    description: "Get equipment financing approved quickly. New & used equipment, A-C credit accepted, terms up to 84 months. Apply online for construction, medical, restaurant equipment loans.",
    url: "https://vistapacificcapital.com",
    siteName: "Vista Pacific Capital",
    images: [
      {
        url: 'https://vistapacificcapital.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vista Pacific Capital Equipment Financing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomePageClient />
    </>
  );
}
