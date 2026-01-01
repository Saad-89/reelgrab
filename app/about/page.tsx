import Link from 'next/link';
import { Video, Sparkles, CheckCircle2, Shield, Zap, Heart, Users, Award } from 'lucide-react';
import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About ReelGrab - Free Instagram Reels Downloader | Our Story',
  description: 'Learn about ReelGrab, the team behind the fastest Instagram Reels downloader. Our mission is to provide free, easy tools for content creators worldwide.',
};

export default function AboutPage() {
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
            <Link href="/guides" className="text-gray-600 hover:text-blue-600 transition-colors">Guides</Link>
          </nav>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold text-blue-600 mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Making Instagram Content Accessible to Everyone
            </h1>
            <p className="text-xl text-gray-600">
              We believe great content should be easy to save, study, and share
            </p>
          </div>

          {/* Our Story */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-pink-500" />
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                ReelGrab was born out of frustration. As content creators ourselves, we constantly found ourselves trying to download Instagram Reels for inspiration, analysis, and learning. Every tool we tried was either covered in ads, required sketchy app installations, or simply didn't work.
              </p>
              <p className="mb-4">
                In late 2024, we decided to build the solution we wished existed: a clean, fast, and reliable Instagram Reels downloader that anyone could use for free. No hidden fees, no watermarks, no complicated processes—just paste a link and download.
              </p>
              <p>
                Since launching, ReelGrab has helped over 10 million creators save their favorite Instagram content. We're proud to support content creators, marketers, educators, and anyone who wants to learn from the best content on Instagram.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-yellow-500" />
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>To democratize content creation</strong> by giving everyone access to the tools they need to learn, improve, and succeed on Instagram.
              </p>
              <p>
                We believe that studying successful content is one of the best ways to improve your own skills. By making it easy to download and analyze Instagram Reels, we're helping creators at all levels learn from the best and develop their unique voice.
              </p>
            </div>
          </div>

          {/* What Makes Us Different */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What Makes ReelGrab Different</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Lightning Fast</h3>
                  <p className="text-gray-600">Download any Reel in seconds. No waiting, no delays.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">100% Free</h3>
                  <p className="text-gray-600">No subscriptions, no hidden fees. Completely free forever.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">No Watermarks</h3>
                  <p className="text-gray-600">Clean downloads without any ReelGrab branding.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-pink-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">HD Quality</h3>
                  <p className="text-gray-600">Always download in the highest quality available.</p>
                </div>
              </div>
            </div>
          </div>

          {/* By The Numbers */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-8 md:p-12 mb-8 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">ReelGrab By The Numbers</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-extrabold mb-2">10M+</div>
                <div className="text-blue-100">Downloads</div>
              </div>
              <div>
                <div className="text-5xl font-extrabold mb-2">150+</div>
                <div className="text-blue-100">Countries</div>
              </div>
              <div>
                <div className="text-5xl font-extrabold mb-2">4.9★</div>
                <div className="text-blue-100">User Rating</div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Core Values</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">🎯 User-First Design</h3>
                <p className="text-gray-700">
                  Every feature we build starts with one question: "Will this make things easier for our users?" We obsess over simplicity and user experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">🔒 Privacy & Security</h3>
                <p className="text-gray-700">
                  We don't store your data, track your downloads, or share your information with third parties. Your privacy is non-negotiable.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">🚀 Continuous Improvement</h3>
                <p className="text-gray-700">
                  We're constantly updating ReelGrab based on user feedback and Instagram's latest changes. Our commitment to excellence never stops.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">🤝 Supporting Creators</h3>
                <p className="text-gray-700">
                  We believe in respecting content creators. That's why we encourage users to always credit original creators and use downloaded content responsibly.
                </p>
              </div>
            </div>
          </div>

          {/* How We Work */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How ReelGrab Works</h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                ReelGrab uses Instagram's public API to fetch video information and download links. When you paste a Reel URL, our servers quickly retrieve the video data and provide you with a direct download link.
              </p>
              <p>
                <strong>We don't store any videos.</strong> Everything is streamed directly from Instagram to your device. This ensures fast downloads while respecting your privacy and Instagram's infrastructure.
              </p>
              <p>
                Our technology is constantly evolving to keep up with Instagram's changes, ensuring ReelGrab always works reliably when you need it.
              </p>
            </div>
          </div>

          {/* Community */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-indigo-500" />
              <h2 className="text-3xl font-bold text-gray-900">Join Our Community</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              ReelGrab is more than just a tool—it's a community of content creators, marketers, educators, and Instagram enthusiasts. We share tips, trends, and insights through our blog and social media channels.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://x.com/saadkashmiri_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-all font-semibold"
              >
                Follow on Twitter
              </a>
              <a 
                href="https://www.instagram.com/khan_2o476/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all font-semibold"
              >
                Follow on Instagram
              </a>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
            <p className="text-indigo-100 mb-8 text-lg">
              We're here to help! Whether you have technical questions, feedback, or just want to say hi, we'd love to hear from you.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-indigo-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-lg"
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
