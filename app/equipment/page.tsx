import { Metadata } from 'next';
import EquipmentClient from './EquipmentClient'; // Assume new file

export const metadata: Metadata = {
  title: 'Equipment Financing Categories | Vista Pacific Capital',
  description: 'Explore our equipment financing options for construction, medical, restaurant, and more industries.',
};

export default function EquipmentFinancingPage() {
  return <EquipmentClient />;
}