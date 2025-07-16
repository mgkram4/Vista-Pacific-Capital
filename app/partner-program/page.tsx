import { Metadata } from 'next';
import PartnerProgramClient from './PartnerProgramClient';

export const metadata: Metadata = {
  title: 'Partner Program | Vista Pacific Capital',
  description: 'Join our network of trusted partners and grow your business with our competitive financing solutions.',
};

export default function PartnerProgramPage() {
  return <PartnerProgramClient />;
}