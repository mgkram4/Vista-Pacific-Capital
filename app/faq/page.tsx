import { Metadata } from 'next';
import FAQClient from './FAQClient';

export const metadata: Metadata = {
  title: 'FAQ - Equipment Financing | Vista Pacific Capital',
  description: 'Frequently asked questions about our equipment financing services.',
};

export default function FAQ() {
  return <FAQClient />;
}