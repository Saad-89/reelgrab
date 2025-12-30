import { Video, FileCheck, UserCheck, Shield, AlertTriangle, Scale, Ban, RefreshCw, XCircle, Gavel, Mail } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - ReelGrab',
  description: 'Terms of service for ReelGrab Instagram Reels Downloader.',
};

export default function TermsPage() {
  const sections = [
    {
      icon: FileCheck,
      title: '1. Acceptance of Terms',
      content: 'By accessing and using ReelGrab, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.',
      list: []
    },
    {
      icon: UserCheck,
      title: '2. Description of Service',
      content: 'ReelGrab provides a free tool to download public Instagram Reels. The service is provided "as is" without warranties of any kind, either express or implied.',
      list: []
    },
    {
      icon: Shield,
      title: '3. User Responsibilities',
      content: 'You agree to:',
      list: [
        'Use the service only for lawful purposes',
        'Respect copyright laws and intellectual property rights',
        'Only download content you have permission to use',
        'Comply with Instagram\'s Terms of Service',
        'Not use the service to infringe on others\' rights',
        'Not attempt to abuse, hack, or disrupt the service'
      ]
    },
    {
      icon: Scale,
      title: '4. Intellectual Property',
      content: 'You are responsible for ensuring you have the necessary rights and permissions to download and use any content. ReelGrab does not claim ownership of any content downloaded through our service.',
      list: []
    },
    {
      icon: Ban,
      title: '5. Prohibited Uses',
      content: 'You may not use ReelGrab to:',
      list: [
        'Download content for commercial use without permission',
        'Violate copyright or trademark laws',
        'Distribute malicious software or code',
        'Impersonate others or misrepresent your affiliation',
        'Engage in any activity that disrupts the service'
      ]
    },
    {
      icon: AlertTriangle,
      title: '6. Disclaimer of Warranties',
      content: 'ReelGrab is provided "as is" without any warranties. We do not guarantee:',
      list: [
        'Uninterrupted or error-free service',
        'Accuracy or reliability of results',
        'Availability of specific content',
        'Compatibility with all devices or browsers'
      ]
    },
    {
      icon: Shield,
      title: '7. Limitation of Liability',
      content: 'ReelGrab and its operators shall not be liable for any damages arising from:',
      list: [
        'Use or inability to use the service',
        'Unauthorized access to your data',
        'Errors or omissions in content',
        'Any other matter related to the service'
      ]
    },
    {
      icon: RefreshCw,
      title: '8. Service Modifications',
      content: 'We reserve the right to modify, suspend, or discontinue the service at any time without notice. We may also update these terms periodically.',
      list: []
    },
    {
      icon: XCircle,
      title: '9. Termination',
      content: 'We reserve the right to terminate or restrict your access to the service if you violate these terms or engage in any conduct we deem harmful to the service or other users.',
      list: []
    },
    {
      icon: Gavel,
      title: '10. Governing Law',
      content: 'These terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved in the appropriate jurisdiction.',
      list: []
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-75"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <Video className="w-7 h-7 text-white" />
              </div>
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              ReelGrab
            </span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-semibold">
            <Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="text-white/70 hover:text-white transition-colors">About</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 backdrop-blur-xl rounded-full mb-6 border border-white/10">
            <Gavel className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-bold text-white">Legal Terms</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Terms of Service</h1>
          <p className="text-purple-200">Last updated: December 30, 2025</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <div key={i} className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <Icon className="w-7 h-7 text-purple-400" />
                    {section.title}
                  </h2>
                  <p className="text-purple-100 leading-relaxed mb-4">{section.content}</p>
                  {section.list.length > 0 && (
                    <ul className="space-y-2">
                      {section.list.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-purple-100">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}

          {/* Contact */}
          {/* <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Questions About Terms?</h2>
              <p className="text-purple-200 mb-6">
                For questions about these terms, contact us at{' '}
                <a href="mailto:legal@reelgrab.io" className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
                  legal@reelgrab.io
                </a>
              </p>
            </div>
          </div> */}

        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-6 text-sm mb-4">
            <Link href="/" className="text-purple-200 hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="text-purple-200 hover:text-white transition-colors">About</Link>
            <Link href="/privacy-policy" className="text-purple-200 hover:text-white transition-colors">Privacy</Link>
            <Link href="/disclaimer" className="text-purple-200 hover:text-white transition-colors">Disclaimer</Link>
          </div>
          <p className="text-xs text-purple-400">© 2025 ReelGrab. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
