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
        <link
          rel="preload"
          href="https://images.unsplash.com/photo-1592838064575-70ed626d3a0e"
          as="image"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://images.unsplash.com/photo-1584225064785-c62a8b43d148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          as="image"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://images.unsplash.com/photo-1526290766257-c015850e4629?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y25jJTIwbWlsbGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D"
          as="image"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://5ycd9odhqw.ufs.sh/f/7JQdB1yagFle5yqq6OwWivOgUaMDFJpuPze7rjHXN4YZo01w"
          as="image"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://images.unsplash.com/photo-1599707254554-027aeb4deacd?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          as="image"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://images.unsplash.com/photo-1609840114035-3c981b782dfe"
          as="image"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://images.unsplash.com/photo-1610831499021-8d206e50bbb6?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          as="image"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://images.unsplash.com/photo-1523848309072-c199db53f137?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          as="image"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/Images/medH.png"
          as="image"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://images.unsplash.com/photo-1735599051587-6c13bb858214?q=80&w=1147&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          as="image"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=1200&auto=format&fit=crop&q=60"
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