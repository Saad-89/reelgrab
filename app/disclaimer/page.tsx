import { Video, AlertTriangle, Users, Copyright, ShieldAlert, Package, Zap, Mail } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer - ReelGrab',
  description: 'Disclaimer for ReelGrab Instagram Reels Downloader.',
};

export default function DisclaimerPage() {
  const sections = [
    {
      icon: AlertTriangle,
      title: 'No Affiliation with Instagram',
      content: 'ReelGrab is an independent tool and is not affiliated with, endorsed by, or connected to Instagram, Meta Platforms, Inc., or any of their subsidiaries. All trademarks, service marks, trade names, and logos are the property of their respective owners.',
      list: []
    },
    {
      icon: Users,
      title: 'User Responsibility',
      content: 'Users are solely responsible for ensuring they have the necessary rights and permissions to download and use any content accessed through ReelGrab. By using this service, you acknowledge that:',
      list: [
        'You will respect copyright laws and intellectual property rights',
        'You will only download content for personal use',
        'You will obtain permission before using content commercially',
        'You will comply with Instagram\'s Terms of Service'
      ]
    },
    {
      icon: Copyright,
      title: 'Copyright Notice',
      content: 'All content downloaded through ReelGrab remains the property of its original creators. ReelGrab respects intellectual property rights and expects users to do the same. Please respect copyright and obtain proper permissions before reusing any content.',
      list: []
    },
    {
      icon: Package,
      title: 'Service Limitations',
      content: 'ReelGrab is provided "as is" without any warranty. We do not guarantee:',
      list: [
        '100% uptime or availability',
        'Compatibility with all Instagram content',
        'That the service will meet your specific requirements',
        'That the service will be uninterrupted or error-free'
      ]
    },
    {
      icon: ShieldAlert,
      title: 'No Liability',
      content: 'ReelGrab and its operators shall not be held liable for:',
      list: [
        'Any misuse of downloaded content',
        'Copyright infringement by users',
        'Damages arising from use of the service',
        'Changes to Instagram\'s platform that affect functionality',
        'Loss of data or interrupted downloads'
      ]
    },
    {
      icon: Users,
      title: 'Personal Use Only',
      content: 'ReelGrab is intended for personal, non-commercial use only. Commercial use of downloaded content may require explicit permission from the original content creator and may be subject to licensing fees.',
      list: []
    },
    {
      icon: Zap,
      title: 'Changes to Service',
      content: 'We reserve the right to modify, suspend, or discontinue the service at any time without prior notice. We are not liable for any modifications, suspension, or discontinuation of the service.',
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
            <ShieldAlert className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-bold text-white">Important Information</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Disclaimer</h1>
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

          {/* Important Legal Notice */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-red-500/10 backdrop-blur-2xl border border-red-400/30 rounded-3xl p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-10 h-10 text-red-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Important Legal Notice</h3>
                  <p className="text-red-100 leading-relaxed">
                    By using ReelGrab, you acknowledge that you have read, understood, and agree to be bound by this disclaimer. 
                    You accept full responsibility for your use of the service and any content you download. 
                    ReelGrab does not endorse copyright infringement and strongly encourages users to respect intellectual property rights.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          {/* <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Questions or Concerns?</h2>
              <p className="text-purple-200 mb-6">
                If you have questions or concerns about this disclaimer, please contact us at{' '}
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
            <Link href="/terms" className="text-purple-200 hover:text-white transition-colors">Terms</Link>
          </div>
          <p className="text-xs text-purple-400">© 2025 ReelGrab. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

