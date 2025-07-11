import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Financing Services | Vista Pacific Capital',
  description: 'Our comprehensive equipment financing services.',
};

export default function ServicesOverview() {
  return <ServicesClient />;
}