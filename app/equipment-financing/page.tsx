import { Metadata } from 'next';
import EquipmentFinancingClient from './EquipmentFinancingClient';

export const metadata: Metadata = {
  title: 'Application-Only Equipment Financing up to $500,000 | Vista Pacific Capital',
  description: 'Application-only equipment financing up to $500,000 — no financials needed.',
};

export default function EquipmentFinancingPage() {
  return <EquipmentFinancingClient />;
}