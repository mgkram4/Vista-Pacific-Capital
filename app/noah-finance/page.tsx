'use client';

import dynamic from 'next/dynamic';

// Directly import the PDF form page to show Noah's form
const PDFForm = dynamic(
  () => import('../pdf-form/page'),
  { ssr: false }
);

export default function NoahFinancePage() {
  // Simply render the PDF form page directly
  return <PDFForm />;
} 