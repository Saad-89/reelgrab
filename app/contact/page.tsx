import Link from 'next/link';
import { Video, Mail, MessageSquare, Clock } from 'lucide-react';
import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact Us - ReelGrab | Get in Touch',
  description: 'Have questions about ReelGrab? Contact our support team. We are here to help with your Instagram Reels downloading needs.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
          </nav>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold text-blue-600 mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Have questions or feedback? We'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">
                For general inquiries and support questions
              </p>
              <a href="mailto:saadyaqoob595@gmail.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                saadyaqoob595@gmail.com
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Response Time</h3>
              <p className="text-gray-600 mb-4">
                We typically respond within 24-48 hours during business days
              </p>
              <p className="text-gray-700 font-medium">Monday - Friday, 9 AM - 5 PM PKT</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  Technical Issues
                </h3>
                <p className="text-gray-600">
                  If you're experiencing issues downloading videos, please include the Instagram Reel URL and a description of the problem in your email.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  Feature Requests
                </h3>
                <p className="text-gray-600">
                  We're always looking to improve ReelGrab. Share your ideas and suggestions with us!
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  Business Inquiries
                </h3>
                <p className="text-gray-600">
                  For partnerships, collaborations, or business opportunities, please reach out via email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
