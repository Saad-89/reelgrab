import { Video, FileCheck, UserCheck, Shield, AlertTriangle, Scale, Ban, RefreshCw, XCircle, Gavel } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service - ReelGrab | Legal Terms',
  description: 'Read ReelGrab\'s terms of service. Understand your rights and responsibilities when using our Instagram Reels downloader.',
};

export default function TermsPage() {
  const sections = [
    {
      icon: FileCheck,
      title: '1. Acceptance of Terms',
      content: 'By accessing and using ReelGrab ("the Service"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of our service immediately.',
      list: []
    },
    {
      icon: UserCheck,
      title: '2. Description of Service',
      content: 'ReelGrab is a free online tool that allows users to download publicly available Instagram Reels. The service is provided "as is" without warranties of any kind, either express or implied. We reserve the right to modify or discontinue the service at any time.',
      list: []
    },
    {
      icon: Shield,
      title: '3. User Responsibilities',
      content: 'When using ReelGrab, you agree to:',
      list: [
        'Use the service only for lawful, personal, non-commercial purposes',
        'Respect all applicable copyright laws and intellectual property rights',
        'Only download content you have explicit permission to use',
        'Comply with Instagram\'s Terms of Service and community guidelines',
        'Not use the service to infringe on others\' rights or privacy',
        'Not attempt to abuse, hack, reverse engineer, or disrupt the service',
        'Not use automated tools or bots to access the service',
        'Accept full responsibility for your use of downloaded content'
      ]
    },
    {
      icon: Scale,
      title: '4. Intellectual Property & Copyright',
      content: 'Important copyright information:',
      list: [
        'All downloaded content remains the property of its original creators',
        'You are responsible for obtaining necessary rights and permissions',
        'ReelGrab does not claim ownership of any downloaded content',
        'We respect intellectual property rights and expect users to do the same',
        'Commercial use of downloaded content may require explicit permission',
        'Users must comply with applicable copyright and trademark laws'
      ]
    },
    {
      icon: Ban,
      title: '5. Prohibited Uses',
      content: 'You may NOT use ReelGrab to:',
      list: [
        'Download content for commercial purposes without proper authorization',
        'Violate copyright, trademark, or other intellectual property laws',
        'Download private or restricted content without permission',
        'Distribute, sell, or monetize downloaded content illegally',
        'Harass, defame, or harm others through misuse of downloaded content',
        'Distribute malicious software, viruses, or harmful code',
        'Impersonate others or misrepresent your affiliation',
        'Engage in any activity that disrupts or damages the service'
      ]
    },
    {
      icon: AlertTriangle,
      title: '6. Disclaimer of Warranties',
      content: 'ReelGrab is provided "AS IS" and "AS AVAILABLE" without any warranties. We do not guarantee:',
      list: [
        'Uninterrupted, error-free, or secure service operation',
        'Accuracy, reliability, or quality of results',
        'Availability of specific content or Instagram posts',
        'Compatibility with all devices, browsers, or operating systems',
        'That the service will meet your specific requirements',
        'That defects or errors will be corrected promptly'
      ]
    },
    {
      icon: Shield,
      title: '7. Limitation of Liability',
      content: 'To the fullest extent permitted by law, ReelGrab and its operators shall NOT be liable for:',
      list: [
        'Any direct, indirect, incidental, or consequential damages',
        'Loss of profits, data, or business opportunities',
        'Damages arising from use or inability to use the service',
        'Unauthorized access to or alteration of your data',
        'Errors, omissions, or inaccuracies in content',
        'User misconduct or copyright infringement',
        'Third-party actions or content',
        'Service interruptions or technical failures'
      ]
    },
    {
      icon: RefreshCw,
      title: '8. Service Modifications',
      content: 'We reserve the right to:',
      list: [
        'Modify, suspend, or discontinue the service at any time',
        'Update these terms periodically without prior notice',
        'Change features, functionality, or service limits',
        'Implement new restrictions or requirements',
        'Continued use after modifications constitutes acceptance'
      ]
    },
    {
      icon: XCircle,
      title: '9. Termination',
      content: 'We reserve the right to terminate or restrict your access if you:',
      list: [
        'Violate these terms or any applicable laws',
        'Engage in conduct harmful to the service or other users',
        'Attempt to abuse, hack, or exploit the service',
        'Use the service for illegal or unauthorized purposes',
        'Termination may occur without warning at our sole discretion'
      ]
    },
    {
      icon: Gavel,
      title: '10. Governing Law',
      content: 'These terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms or use of the service shall be resolved through appropriate legal channels in the relevant jurisdiction.',
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
            <span className="inline-block px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold text-blue-600 mb-4 flex items-center gap-2 w-fit mx-auto">
              <Gavel className="w-4 h-4" />
              Legal Terms
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: January 2, 2025
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Please Read Carefully</h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                These Terms of Service govern your use of ReelGrab. By using our service, you acknowledge that you have read, understood, and agree to be bound by these terms.
              </p>
              <p>
                These terms include important information about your legal rights, remedies, and obligations. Please read them carefully before using our service.
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

          {/* Important Notice */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12 mt-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-10 h-10 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Legal Notice</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    By using ReelGrab, you acknowledge and accept full responsibility for your use of the service and any content you download. You agree to respect copyright laws and obtain proper permissions before reusing any content.
                  </p>
                  <p>
                    ReelGrab is a tool provided for convenience. We do not endorse copyright infringement and strongly encourage all users to respect intellectual property rights and use the service responsibly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-8 md:p-12 mt-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Questions About These Terms?</h2>
            <p className="text-blue-100 mb-6 text-lg">
              If you have questions about these terms of service, please contact us through our about page.
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

