import dynamic from 'next/dynamic';
import DownloadSection from '@/components/DownloadSection';

// Lazy load below-the-fold components for better performance
const BlogStrip = dynamic(() => import('@/components/BlogStrip'), {
  loading: () => null,
  ssr: true,
});

const HowItWorks = dynamic(() => import('@/components/HowItWorks'), {
  loading: () => null,
  ssr: true,
});

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => null,
  ssr: true,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => null,
  ssr: true,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <DownloadSection />
      <BlogStrip />
      <HowItWorks />
      <FAQ />
      <Footer />
    </main>
  );
}


// 'use client';

// import { useState } from 'react';
// import DownloadSection from '@/components/DownloadSection';
// import HowItWorks from '@/components/HowItWorks';
// import FAQ from '@/components/FAQ';
// import Footer from '@/components/Footer';

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
//       <DownloadSection />
//       <HowItWorks />
//       <FAQ />
//       <Footer />
//     </main>
//   );
// }
