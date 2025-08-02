import { Metadata } from 'next';
import CommercialEquipmentFinancingClient from './CommercialEquipmentFinancingClient';

export const metadata: Metadata = {
  title: 'Commercial Equipment Financing | Vista Pacific Capital',
  description: 'Financing from $500,000 to $50 million for middle- to large-ticket equipment purchases.',
};

export default function CommercialEquipmentFinancingPage() {
  return <CommercialEquipmentFinancingClient />;
}