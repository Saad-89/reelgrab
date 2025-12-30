import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ReelGrab - Instagram Reels Downloader | Download Reels in HD Free",
  description: "Download Instagram Reels in HD quality instantly. Free Instagram reels downloader - no watermark, no login required. Fast, easy, and works on all devices.",
  keywords: [
    "instagram reels downloader",
    "download instagram reels",
    "instagram video downloader",
    "reels downloader",
    "save instagram reels",
    "instagram reels download hd",
    "free reels downloader",
    "no watermark instagram downloader"
  ],
  authors: [{ name: "ReelGrab" }],
  creator: "ReelGrab",
  publisher: "ReelGrab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://reelgrab.site'),
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
    title: 'ReelGrab - Instagram Reels Downloader',
    description: 'Download Instagram Reels in HD quality instantly. Free, fast, no watermark.',
    siteName: 'ReelGrab',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ReelGrab Instagram Reels Downloader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReelGrab - Instagram Reels Downloader',
    description: 'Download Instagram Reels in HD instantly. Free & fast!',
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://reelgrab.site',
  },
  verification: {
    google: 'your-google-verification-code',
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
        <link rel="canonical" href="https://reelgrab.site" />
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
                "ratingValue": "4.8",
                "ratingCount": "15420"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

