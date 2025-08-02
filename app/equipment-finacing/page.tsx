import { Metadata } from 'next';
import EquipmentFinancingClient from './EquipmentFinancingClient';

export const metadata: Metadata = {
  title: 'Equipment Financing | Vista Pacific Capital',
  description: 'Application-only equipment financing up to $750,000 — no financials needed.',
};

export default function EquipmentFinancingPage() {
  return <EquipmentFinancingClient />;
}