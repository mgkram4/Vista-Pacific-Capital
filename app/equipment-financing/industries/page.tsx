import { Metadata } from 'next';
import IndustriesClient from './IndustriesClient';

export const metadata: Metadata = {
  title: 'Industry-Specific Equipment Financing | Vista Pacific Capital',
  description: 'Explore our equipment financing solutions for construction, medical, restaurant, manufacturing, transportation, and material handling industries.',
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}