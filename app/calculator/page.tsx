import { Metadata } from 'next';
import CalculatorClient from './CalculatorClient';

export const metadata: Metadata = {
  title: 'Payment Calculator | Equipment Financing',
  description: 'Calculate your equipment financing payments.',
};

export default function CalculatorPage() {
  return <CalculatorClient />;
} 