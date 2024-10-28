import type { Metadata } from 'next';
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
      <body className=" text-white">
        <div className="min-h-screen flex flex-col">
          <div className=" mb-20 md:mb-44">
            <AppNavBar />
          </div>
          <main className="flex-grow container mx-auto px-4 py-8 ">
            {children}
          </main>
          <footer className="bg-secondary text-white py-4">
            <div className="container mx-auto px-4 text-center">
              © 2023 Vista Pacific Capital. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}