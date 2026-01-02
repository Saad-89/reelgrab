// app/disclaimer/page.tsx
import { Video, AlertTriangle, Users, Copyright, ShieldAlert, Package, Zap } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Disclaimer - ReelGrab | Important Legal Information',
  description: 'Read ReelGrab\'s disclaimer. Important information about service limitations, user responsibilities, and copyright compliance.',
};

export default function DisclaimerPage() {
  const sections = [
    {
      icon: AlertTriangle,
      title: 'No Affiliation with Instagram',
      content: 'ReelGrab is an independent third-party tool and is NOT affiliated with, endorsed by, sponsored by, or in any way connected to Instagram, Meta Platforms, Inc., Facebook, or any of their subsidiaries or affiliates.',
      list: [
        'All trademarks, service marks, and logos are property of their respective owners',
        'Instagram® and Meta® are registered trademarks of Meta Platforms, Inc.',
        'ReelGrab operates independently and is not officially sanctioned by Instagram',
        'Use of Instagram\'s name is for identification purposes only'
      ]
    },
    {
      icon: Users,
      title: 'User Responsibility',
      content: 'Users are solely and entirely responsible for their use of ReelGrab and any content downloaded through the service. By using ReelGrab, you acknowledge and agree that:',
      list: [
        'You will respect all applicable copyright and intellectual property laws',
        'You will only download content for personal, non-commercial use',
        'You will obtain explicit permission before using content commercially',
        'You will comply with Instagram\'s Terms of Service',
        'You accept full legal responsibility for your actions',
        'You will not misuse or redistribute downloaded content illegally'
      ]
    },
    {
      icon: Copyright,
      title: 'Copyright Notice',
      content: 'Copyright and intellectual property rights:',
      list: [
        'All content downloaded through ReelGrab remains the property of its original creators',
        'ReelGrab respects intellectual property rights and expects users to do the same',
        'Always obtain proper permissions before reusing content',
        'Give credit to original creators whenever possible',
        'Unauthorized use of copyrighted material may result in legal consequences',
        'ReelGrab is not responsible for user copyright violations'
      ]
    },
    {
      icon: Package,
      title: 'Service Limitations',
      content: 'ReelGrab is provided "as is" without any warranty. We do not guarantee:',
      list: [
        '100% uptime or constant availability',
        'Compatibility with all Instagram content or formats',
        'That the service will meet your specific requirements',
        'Uninterrupted or error-free operation',
        'That all videos will be available for download',
        'Specific download speeds or quality levels'
      ]
    },
    {
      icon: ShieldAlert,
      title: 'No Liability',
      content: 'ReelGrab and its operators shall not be held liable for:',
      list: [
        'Any misuse of downloaded content by users',
        'Copyright infringement committed by users',
        'Any damages arising from use of the service',
        'Changes to Instagram\'s platform that affect functionality',
        'Loss of data or interrupted downloads',
        'Third-party claims or legal actions',
        'User violations of applicable laws or regulations'
      ]
    },
    {
      icon: Users,
      title: 'Personal Use Only',
      content: 'ReelGrab is intended for personal, non-commercial use only. Commercial use of downloaded content may require explicit permission from the original content creator and may be subject to licensing fees. Always respect the rights of content creators and obtain proper authorization before commercial use.',
      list: []
    },
    {
      icon: Zap,
      title: 'Changes to Service',
      content: 'We reserve the right to modify, suspend, or discontinue the service at any time without prior notice. We are not liable for any modifications, suspension, or discontinuation of the service. Users should not rely on continuous availability of the service.',
      list: []
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
            <span className="inline-block px-4 py-2 bg-yellow-50 rounded-full text-sm font-semibold text-yellow-600 mb-4 flex items-center gap-2 w-fit mx-auto">
              <ShieldAlert className="w-4 h-4" />
              Important Information
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Disclaimer
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: January 2, 2025
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Important Disclaimer</h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Please read this disclaimer carefully before using ReelGrab. By accessing or using our service, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
              </p>
              <p>
                This disclaimer contains important information about service limitations, user responsibilities, and legal protections. Your use of ReelGrab constitutes acceptance of these terms.
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
                          <span className="text-blue-600 mt-1 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          {/* Final Warning */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12 mt-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Critical Legal Notice</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    By using ReelGrab, you acknowledge that you have read, understood, and agree to be bound by this disclaimer. You accept full responsibility for your use of the service and any content you download.
                  </p>
                  <p>
                    <strong>ReelGrab does not endorse copyright infringement.</strong> We strongly encourage all users to respect intellectual property rights, obtain proper permissions, and use downloaded content responsibly and legally.
                  </p>
                  <p>
                    Violation of copyright laws may result in civil and criminal penalties. Always ensure you have the right to download and use any content before doing so.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-8 md:p-12 mt-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Questions or Concerns?</h2>
            <p className="text-blue-100 mb-6 text-lg">
              If you have questions or concerns about this disclaimer, please contact us through our about page.
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