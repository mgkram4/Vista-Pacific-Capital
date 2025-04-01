'use client';

import dynamic from 'next/dynamic';

// Directly import the PDF form page
const PDFForm = dynamic(
  () => import('../pdf-form/page'),
  { ssr: false }
);

export default function FinancePage() {
  // Simply render the PDF form page directly
  return <PDFForm />;
}