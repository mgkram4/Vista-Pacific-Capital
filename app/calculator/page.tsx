import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Payment Calculator | Equipment Financing',
  description: 'Calculate your equipment financing payments.',
};

export default function CalculatorPage() {
  const DynamicCalculatorClient = dynamic(() => import('./CalculatorClient.tsx'));
  return <DynamicCalculatorClient />;
} 