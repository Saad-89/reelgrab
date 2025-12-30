import { Video, Shield, Lock, Eye, FileText } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - ReelGrab',
  description: 'Privacy policy for ReelGrab Instagram Reels Downloader.',
};

export default function PrivacyPolicyPage() {
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
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-sm font-bold text-white">Your Privacy Matters</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-purple-200">Last updated: December 30, 2025</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {[
            {
              icon: FileText,
              title: '1. Information We Collect',
              content: 'ReelGrab is committed to protecting your privacy. We collect minimal information necessary to provide our service:',
              list: [
                'Instagram Reel URLs you submit for download (not stored)',
                'Basic analytics data (page views, device type, general location)',
                'Cookies for analytics purposes only'
              ]
            },
            {
              icon: Eye,
              title: '2. How We Use Your Information',
              content: 'We use the information we collect to:',
              list: [
                'Process your download requests',
                'Improve our service and user experience',
                'Analyze usage patterns and trends',
                'Prevent abuse and ensure service security'
              ]
            },
            {
              icon: Lock,
              title: '3. Data Storage and Security',
              content: 'We do not store any videos on our servers. All downloads are streamed directly from Instagram to your device. We implement appropriate security measures to protect against unauthorized access to our systems.',
              list: []
            }
          ].map((section, i) => {
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
              <h2 className="text-2xl font-bold text-white mb-4">Questions About Privacy?</h2>
              <p className="text-purple-200 mb-6">
                If you have questions about this privacy policy, please contact us at{' '}
                <a href="mailto:privacy@reelgrab.io" className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
                  privacy@reelgrab.io
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
            <Link href="/terms" className="text-purple-200 hover:text-white transition-colors">Terms</Link>
            <Link href="/disclaimer" className="text-purple-200 hover:text-white transition-colors">Disclaimer</Link>
          </div>
          <p className="text-xs text-purple-400">© 2025 ReelGrab. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
