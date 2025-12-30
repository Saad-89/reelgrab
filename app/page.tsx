'use client';

import { useState } from 'react';
import DownloadSection from '@/components/DownloadSection';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <DownloadSection />
      <HowItWorks />
      <FAQ />
      <Footer />
    </main>
  );
}

// import Header from '@/components/Header';
// import Hero from '@/components/Hero';
// import DownloadForm from '@/components/DownloadForm';
// import HowItWorks from '@/components/HowItWorks';
// import Benefits from '@/components/Benefits';
// import FAQ from '@/components/FAQ';
// import Footer from '@/components/Footer';

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       <Header />
//       <Hero />
//       <DownloadForm />
//       <HowItWorks />
//       <Benefits />
//       <FAQ />
//       <Footer />
//     </main>
//   );
// }