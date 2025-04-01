'use client';

import dynamic from 'next/dynamic';

// Directly import the PDF form page to show Alan's form
const PDFForm = dynamic(
  () => import('../pdf-form/page'),
  { ssr: false }
);

export default function AlanFinancePage() {
  // Simply render the PDF form page directly
  return <PDFForm />;
} 