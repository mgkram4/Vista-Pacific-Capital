import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from 'next';

import Footer from "./components/footer";
import AppNavBar from './components/navbar';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vistapacificcapital.com'),
  title: 'Vista Pacific Capital - Equipment Financing Solutions',  // Changed back to Equipment
  description: 'Vista Pacific Capital offers cutting-edge financing solutions for businesses across various industries. Unleash your business potential with our expert guidance and flexible terms.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.vistapacificcapital.com',
    languages: {
      'en-US': 'https://www.vistapacificcapital.com',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Vista Pacific Capital - Equipment Financing Solutions',  // Changed here too
    description: 'Vista Pacific Capital offers cutting-edge financing solutions for businesses across various industries. Unleash your business potential with our expert guidance.',
    url: 'https://www.vistapacificcapital.com',
    siteName: 'Vista Pacific Capital',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="https://5ycd9odhqw.ufs.sh/f/7JQdB1yagFle1CKBLbWFPlAD0i3xdR1NYFqthZ4mXIVyQTJG"
          as="image"
          fetchPriority="high"
        />
      </head>
      <body className="text-white">
        <div className="min-h-screen flex flex-col">
          <div>
            <AppNavBar />
          </div>
          <main className="flex-grow">
            {children}
            <Analytics/>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}