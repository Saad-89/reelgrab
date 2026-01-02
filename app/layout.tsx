import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ReelGrab - Download Instagram Reels in HD | Free Online Video Downloader",
  description: "Download Instagram Reels videos in HD quality for free. No watermark, no login required. Fast, secure, and works on all devices. Save Instagram videos instantly with ReelGrab.",
  keywords: [
    "instagram reels downloader",
    "download instagram reels",
    "instagram video downloader",
    "reels downloader free",
    "save instagram reels",
    "instagram reels download hd",
    "free reels downloader",
    "no watermark instagram downloader",
    "instagram reel saver",
    "download reels online"
  ],
  authors: [{ name: "ReelGrab Team" }],
  creator: "ReelGrab",
  publisher: "ReelGrab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://reelgrab.site'),
  
  // ========================================
  // FAVICON CONFIGURATION - ADDED
  // ========================================
  icons: {
    icon: [
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/icon.png',
      },
    ],
  },
  manifest: '/manifest.json',
  // ========================================
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://reelgrab.site',
    title: 'ReelGrab - Free Instagram Reels Downloader',
    description: 'Download Instagram Reels in HD quality for free. No watermark, no login required.',
    siteName: 'ReelGrab',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ReelGrab - Instagram Reels Downloader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReelGrab - Instagram Reels Downloader',
    description: 'Download Instagram Reels in HD instantly. Free & fast!',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://reelgrab.site',
  },
  verification: {
    google: 'LiRvKdz3GTofHgxiXzDzjTh-hxZqJUt6wK7wxu536lM',
  },
  other: {
    'google-adsense-account': 'ca-pub-2561131168086064',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Google AdSense */}
        <meta name="google-adsense-account" content="ca-pub-2561131168086064" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2561131168086064"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1GWW9CCNPR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1GWW9CCNPR');
          `}
        </Script>
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://reelgrab.site" />
        
        {/* Structured Data (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "ReelGrab",
              "description": "Free Instagram Reels Downloader - Download Reels in HD",
              "url": "https://reelgrab.site",
              "applicationCategory": "MultimediaApplication",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "10847"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}


// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import Script from "next/script";
// import "./globals.css";

// const inter = Inter({ 
//   subsets: ["latin"],
//   display: 'swap',
// });

// export const metadata: Metadata = {
//   title: "ReelGrab - Download Instagram Reels in HD | Free Online Video Downloader",
//   description: "Download Instagram Reels videos in HD quality for free. No watermark, no login required. Fast, secure, and works on all devices. Save Instagram videos instantly with ReelGrab.",
//   keywords: [
//     "instagram reels downloader",
//     "download instagram reels",
//     "instagram video downloader",
//     "reels downloader free",
//     "save instagram reels",
//     "instagram reels download hd",
//     "free reels downloader",
//     "no watermark instagram downloader",
//     "instagram reel saver",
//     "download reels online"
//   ],
//   authors: [{ name: "ReelGrab Team" }],
//   creator: "ReelGrab",
//   publisher: "ReelGrab",
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   metadataBase: new URL('https://reelgrab.site'),
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   openGraph: {
//     type: 'website',
//     locale: 'en_US',
//     url: 'https://reelgrab.site',
//     title: 'ReelGrab - Free Instagram Reels Downloader',
//     description: 'Download Instagram Reels in HD quality for free. No watermark, no login required.',
//     siteName: 'ReelGrab',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'ReelGrab - Instagram Reels Downloader',
//     description: 'Download Instagram Reels in HD instantly. Free & fast!',
//   },
//   alternates: {
//     canonical: 'https://reelgrab.site',
//   },
//   verification: {
//     google: 'LiRvKdz3GTofHgxiXzDzjTh-hxZqJUt6wK7wxu536lM',
//   },
//   other: {
//     'google-adsense-account': 'ca-pub-2561131168086064',
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <meta name="google-adsense-account" content="ca-pub-2561131168086064" />
//         <Script
//           async
//           src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2561131168086064"
//           crossOrigin="anonymous"
//           strategy="afterInteractive"
//         />
//         <Script
//           src="https://www.googletagmanager.com/gtag/js?id=G-1GWW9CCNPR"
//           strategy="afterInteractive"
//         />
//         <Script id="google-analytics" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-1GWW9CCNPR');
//           `}
//         </Script>
//         <link rel="canonical" href="https://reelgrab.site" />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "WebApplication",
//               "name": "ReelGrab",
//               "description": "Free Instagram Reels Downloader - Download Reels in HD",
//               "url": "https://reelgrab.site",
//               "applicationCategory": "MultimediaApplication",
//               "operatingSystem": "All",
//               "offers": {
//                 "@type": "Offer",
//                 "price": "0",
//                 "priceCurrency": "USD"
//               },
//               "aggregateRating": {
//                 "@type": "AggregateRating",
//                 "ratingValue": "4.9",
//                 "ratingCount": "10847"
//               }
//             })
//           }}
//         />
//       </head>
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }


// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import Script from "next/script";
// import "./globals.css";

// const inter = Inter({ 
//   subsets: ["latin"],
//   display: 'swap',
// });

// export const metadata: Metadata = {
//   title: "ReelGrab - Instagram Reels Downloader | Download Reels in HD Free",
//   description: "Download Instagram Reels in HD quality instantly. Free Instagram reels downloader - no watermark, no login required. Fast, easy, and works on all devices.",
//   keywords: [
//     "video downloader",
//     "online video downloader",
//     "online reels downloader",
//     "online instagram reels downloader",
//     "instagram downloader",
//     "reels downloader",
//     "instagram reels downloader",
//     "download instagram reels",
//     "instagram video downloader",
//     "reels downloader",
//     "save instagram reels",
//     "instagram reels download hd",
//     "free reels downloader",
//     "no watermark instagram downloader"
//   ],
//   authors: [{ name: "ReelGrab" }],
//   creator: "ReelGrab",
//   publisher: "ReelGrab",
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   metadataBase: new URL('https://reelgrab.site'),
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   openGraph: {
//     type: 'website',
//     locale: 'en_US',
//     url: 'https://reelgrab.site',
//     title: 'ReelGrab - Instagram Reels Downloader',
//     description: 'Download Instagram Reels in HD quality instantly. Free, fast, no watermark.',
//     siteName: 'ReelGrab',
//     images: [
//       {
//         url: '/og-image.jpg',
//         width: 1200,
//         height: 630,
//         alt: 'ReelGrab Instagram Reels Downloader',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'ReelGrab - Instagram Reels Downloader',
//     description: 'Download Instagram Reels in HD instantly. Free & fast!',
//     images: ['/twitter-image.jpg'],
//   },
//   alternates: {
//     canonical: 'https://reelgrab.site',
//   },
//   verification: {
//     google: 'LiRvKdz3GTofHgxiXzDzjTh-hxZqJUt6wK7wxu536lM',
//   },
//   // ✅ AdSense Meta Tag for Verification
//   other: {
//     'google-adsense-account': 'ca-pub-2561131168086064',
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Google AdSense Verification & Code */}
//         <meta name="google-adsense-account" content="ca-pub-2561131168086064" />
//         <Script
//           async
//           src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2561131168086064"
//           crossOrigin="anonymous"
//           strategy="afterInteractive"
//         />

//         {/* Google Analytics */}
//         <Script
//           src="https://www.googletagmanager.com/gtag/js?id=G-1GWW9CCNPR"
//           strategy="afterInteractive"
//         />
//         <Script id="google-analytics" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-1GWW9CCNPR');
//           `}
//         </Script>

//         {/* Canonical Link */}
//         <link rel="canonical" href="https://reelgrab.site" />
        
//         {/* JSON-LD Structured Data */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "WebApplication",
//               "name": "ReelGrab",
//               "description": "Free Instagram Reels Downloader - Download Reels in HD",
//               "url": "https://reelgrab.site",
//               "applicationCategory": "MultimediaApplication",
//               "operatingSystem": "All",
//               "offers": {
//                 "@type": "Offer",
//                 "price": "0",
//                 "priceCurrency": "USD"
//               },
//               "aggregateRating": {
//                 "@type": "AggregateRating",
//                 "ratingValue": "4.8",
//                 "ratingCount": "15420"
//               }
//             })
//           }}
//         />
//       </head>
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }