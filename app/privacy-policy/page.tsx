
import { Video, Shield, Lock, Eye, FileText, Database, UserCheck } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy - ReelGrab | Your Data Protection',
  description: 'Learn how ReelGrab protects your privacy. We don\'t store videos or personal data. Read our comprehensive privacy policy.',
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: FileText,
      title: '1. Information We Collect',
      content: 'ReelGrab is committed to protecting your privacy. We collect minimal information necessary to provide our service:',
      list: [
        'Instagram Reel URLs you submit (processed in real-time, not stored)',
        'Basic analytics data (page views, device type, browser, general location)',
        'Cookies for analytics and service functionality',
        'No personal identification information is collected or stored'
      ]
    },
    {
      icon: Eye,
      title: '2. How We Use Your Information',
      content: 'We use collected information solely to:',
      list: [
        'Process your download requests in real-time',
        'Improve service performance and user experience',
        'Analyze usage patterns to enhance features',
        'Prevent abuse and ensure service security',
        'Display relevant advertisements (Google AdSense)'
      ]
    },
    {
      icon: Database,
      title: '3. Data Storage',
      content: 'Your privacy is our priority:',
      list: [
        'We do NOT store any videos on our servers',
        'URLs are processed in real-time and immediately discarded',
        'Downloads stream directly from Instagram to your device',
        'No video content is saved, cached, or logged',
        'Analytics data is anonymized and aggregated'
      ]
    },
    {
      icon: Lock,
      title: '4. Data Security',
      content: 'We implement industry-standard security measures:',
      list: [
        'HTTPS encryption for all connections',
        'Secure server infrastructure',
        'Regular security audits and updates',
        'Protection against unauthorized access',
        'No sensitive data storage minimizes risk'
      ]
    },
    {
      icon: UserCheck,
      title: '5. Third-Party Services',
      content: 'We use trusted third-party services:',
      list: [
        'Google Analytics - for usage statistics (anonymized)',
        'Google AdSense - for displaying advertisements',
        'These services have their own privacy policies',
        'We do not share personal data with third parties',
        'Cookies may be set by these services'
      ]
    },
    {
      icon: Shield,
      title: '6. Your Rights',
      content: 'You have the right to:',
      list: [
        'Use our service without registration or login',
        'Clear cookies at any time through browser settings',
        'Request information about data we collect',
        'Opt-out of analytics tracking via browser extensions',
        'Stop using our service at any time'
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Video className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">ReelGrab</span>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</Link>
            <Link href="/guides" className="text-gray-600 hover:text-blue-600 transition-colors">Guides</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Hero */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-green-50 rounded-full text-sm font-semibold text-green-600 mb-4 flex items-center gap-2 w-fit mx-auto">
              <Shield className="w-4 h-4" />
              Your Privacy Matters
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: January 2, 2025
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Your Privacy</h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                At ReelGrab, we take your privacy seriously. This policy explains how we collect, use, and protect your information. We believe in transparency and want you to understand exactly what happens when you use our service.
              </p>
              <p>
                <strong>Key Points:</strong> We do not store videos, we do not require registration, and we collect minimal data necessary to provide our service.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>
                  {section.list.length > 0 && (
                    <ul className="space-y-3">
                      {section.list.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-gray-700">
                          <span className="text-blue-600 mt-1 font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          {/* Cookie Policy */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Policy</h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                ReelGrab uses cookies to improve your experience and for analytics purposes. Cookies are small text files stored on your device. You can control cookie preferences through your browser settings.
              </p>
              <p>
                <strong>Types of cookies we use:</strong> Essential cookies (required for service functionality), Analytics cookies (Google Analytics), and Advertising cookies (Google AdSense).
              </p>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this privacy policy from time to time to reflect changes in our practices or for legal reasons. We will notify users of any material changes by updating the "Last updated" date at the top of this page. Continued use of our service after changes constitutes acceptance of the updated policy.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-8 md:p-12 mt-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Questions About Privacy?</h2>
            <p className="text-blue-100 mb-6 text-lg">
              If you have any questions about this privacy policy or how we handle your data, please don't hesitate to reach out.
            </p>
            <Link 
              href="/about" 
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-lg"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

// import { Video, Shield, Lock, Eye, FileText } from 'lucide-react';
// import Link from 'next/link';
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Privacy Policy - ReelGrab',
//   description: 'Privacy policy for ReelGrab Instagram Reels Downloader.',
// };

// export default function PrivacyPolicyPage() {
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
//       {/* Header */}
//       <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/5 border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
//           <Link href="/" className="flex items-center gap-3">
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-75"></div>
//               <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl">
//                 <Video className="w-7 h-7 text-white" />
//               </div>
//             </div>
//             <span className="text-2xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
//               ReelGrab
//             </span>
//           </Link>
//           <nav className="hidden md:flex gap-8 text-sm font-semibold">
//             <Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
//             <Link href="/about" className="text-white/70 hover:text-white transition-colors">About</Link>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="relative py-20 px-4">
//         <div className="max-w-4xl mx-auto text-center mb-12">
//           <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 backdrop-blur-xl rounded-full mb-6 border border-white/10">
//             <Shield className="w-5 h-5 text-green-400" />
//             <span className="text-sm font-bold text-white">Your Privacy Matters</span>
//           </div>
//           <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Privacy Policy</h1>
//           <p className="text-purple-200">Last updated: December 30, 2025</p>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="relative px-4 pb-20">
//         <div className="max-w-4xl mx-auto space-y-8">
          
//           {[
//             {
//               icon: FileText,
//               title: '1. Information We Collect',
//               content: 'ReelGrab is committed to protecting your privacy. We collect minimal information necessary to provide our service:',
//               list: [
//                 'Instagram Reel URLs you submit for download (not stored)',
//                 'Basic analytics data (page views, device type, general location)',
//                 'Cookies for analytics purposes only'
//               ]
//             },
//             {
//               icon: Eye,
//               title: '2. How We Use Your Information',
//               content: 'We use the information we collect to:',
//               list: [
//                 'Process your download requests',
//                 'Improve our service and user experience',
//                 'Analyze usage patterns and trends',
//                 'Prevent abuse and ensure service security'
//               ]
//             },
//             {
//               icon: Lock,
//               title: '3. Data Storage and Security',
//               content: 'We do not store any videos on our servers. All downloads are streamed directly from Instagram to your device. We implement appropriate security measures to protect against unauthorized access to our systems.',
//               list: []
//             }
//           ].map((section, i) => {
//             const Icon = section.icon;
//             return (
//               <div key={i} className="relative">
//                 <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20"></div>
//                 <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8">
//                   <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
//                     <Icon className="w-7 h-7 text-purple-400" />
//                     {section.title}
//                   </h2>
//                   <p className="text-purple-100 leading-relaxed mb-4">{section.content}</p>
//                   {section.list.length > 0 && (
//                     <ul className="space-y-2">
//                       {section.list.map((item, j) => (
//                         <li key={j} className="flex items-start gap-3 text-purple-100">
//                           <span className="text-purple-400 mt-1">•</span>
//                           <span>{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               </div>
//             );
//           })}

//           {/* Contact */}
//           {/* <div className="relative">
//             <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30"></div>
//             <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 text-center">
//               <h2 className="text-2xl font-bold text-white mb-4">Questions About Privacy?</h2>
//               <p className="text-purple-200 mb-6">
//                 If you have questions about this privacy policy, please contact us at{' '}
//                 <a href="mailto:privacy@reelgrab.io" className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
//                   privacy@reelgrab.io
//                 </a>
//               </p>
//             </div>
//           </div> */}

//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="relative py-12 px-4 border-t border-white/10">
//         <div className="max-w-6xl mx-auto text-center">
//           <div className="flex justify-center gap-6 text-sm mb-4">
//             <Link href="/" className="text-purple-200 hover:text-white transition-colors">Home</Link>
//             <Link href="/about" className="text-purple-200 hover:text-white transition-colors">About</Link>
//             <Link href="/terms" className="text-purple-200 hover:text-white transition-colors">Terms</Link>
//             <Link href="/disclaimer" className="text-purple-200 hover:text-white transition-colors">Disclaimer</Link>
//           </div>
//           <p className="text-xs text-purple-400">© 2025 ReelGrab. All rights reserved.</p>
//         </div>
//       </footer>
//     </main>
//   );
// }
