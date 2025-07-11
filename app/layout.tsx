import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from 'next';
import Script from 'next/script';

import Breadcrumbs from './components/Breadcrumbs';
import Footer from "./components/footer";
import AppNavBar from './components/navbar';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vistapacificcapital.com'),
  title: 'Equipment Financing & Business Loans | Vista Pacific Capital',
  description: 'Get fast, flexible equipment financing and business loans. Vista Pacific Capital offers tailored funding solutions to help businesses grow in any industry.',
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
    title: 'Equipment Financing & Business Loans | Vista Pacific Capital',
    description: 'Get fast, flexible equipment financing and business loans. Vista Pacific Capital offers tailored funding solutions to help businesses grow in any industry.',
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Vista Pacific Capital",
            "image": "https://www.vistapacificcapital.com/Images/logo-NO-BG.png",
            "@id": "https://www.vistapacificcapital.com",
            "url": "https://www.vistapacificcapital.com",
            "telephone": "+17145007017",
            // TODO: Replace with actual address
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "REPLACE_WITH_STREET_ADDRESS",
              "addressLocality": "REPLACE_WITH_CITY",
              "addressRegion": "REPLACE_WITH_STATE",
              "postalCode": "REPLACE_WITH_ZIP",
              "addressCountry": "US"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "17:00"
            }
          }) }}
        />
        {/* TODO: Replace with your Facebook Pixel ID */}
        <Script id="facebook-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            '/static/fbevents.js');
            fbq('init', 'REPLACE_WITH_YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* TODO: Replace with your Google Tag Manager ID */}
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXX');
          `}
        </Script>
      </head>
      <body className="text-white">
        <a href="#main-content" className="sr-only focus:fixed focus:z-50 focus:top-0 focus:left-0 focus:p-4 focus:m-4 bg-white text-black rounded-lg">
          Skip to main content
        </a>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=REPLACE_WITH_YOUR_PIXEL_ID&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* TODO: Replace with your Google Tag Manager ID */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXX"
            height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        <div className="min-h-screen flex flex-col">
          <div>
            <AppNavBar />
            <Breadcrumbs />
          </div>
          <main id="main-content" className="flex-grow">
            {children}
            <Analytics/>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}