import { Metadata } from 'next';
import PartnerProgramClient from './PartnerProgramClient';

export const metadata: Metadata = {
  title: 'Vendor Programs | Equipment Financing Partnerships | Vista Pacific Capital',
  description: 'Focus on selling, we\'ll handle the financing. Partner with Vista Pacific Capital for seamless equipment financing solutions that help you close more deals.',
  keywords: 'equipment financing partnerships, vendor programs, equipment financing, business partnerships, financing solutions',
};

export default function PartnerProgramPage() {
  return <PartnerProgramClient />;
}