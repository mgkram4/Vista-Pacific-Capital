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
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'REPLACE_WITH_YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* TODO: Replace with your Google Tag Manager ID */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXX');
          `}
        </Script>
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