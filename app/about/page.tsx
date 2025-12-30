import { Video, Sparkles, CheckCircle2, Shield, Zap, Heart } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About ReelGrab - Instagram Reels Downloader',
  description: 'Learn about ReelGrab, the fastest and easiest way to download Instagram Reels in HD quality for free.',
};

export default function AboutPage() {
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
            <Link href="/about" className="text-white transition-colors">About</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 backdrop-blur-xl rounded-full mb-6 border border-white/10">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-bold text-white">About Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">About ReelGrab</h1>
          <p className="text-xl text-purple-200 leading-relaxed">
            The most trusted Instagram Reels downloader, serving millions of users worldwide
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Mission Card */}
          <div className="relative mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Heart className="w-8 h-8 text-pink-400" />
                Our Mission
              </h2>
              <p className="text-purple-100 text-lg leading-relaxed mb-6">
                We created ReelGrab to provide a simple, hassle-free solution for downloading Instagram Reels. Our goal is to offer a tool that is completely free, requires no login, and works seamlessly across all devices.
              </p>
              <p className="text-purple-100 text-lg leading-relaxed">
                With over 10 million downloads and a 4.9-star rating, we&apos;ve become the go-to platform for users who want to save and enjoy their favorite Instagram content offline.
              </p>
            </div>
          </div>

          {/* How It Works Card */}
          <div className="relative mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-yellow-400" />
                How It Works
              </h2>
              <p className="text-purple-100 text-lg leading-relaxed mb-6">
                ReelGrab uses Instagram&apos;s public API endpoints to fetch reel information and download links. We don&apos;t store any videos on our servers – everything is streamed directly to your device.
              </p>
              <p className="text-purple-100 text-lg leading-relaxed">
                This ensures your privacy and keeps our service fast and efficient. Your data is never stored or shared with third parties.
              </p>
            </div>
          </div>

          {/* Key Features Card */}
          <div className="relative mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-green-400" />
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  '100% free – no subscriptions or hidden costs',
                  'No login required – paste the URL and download',
                  'HD quality downloads – up to 4K resolution',
                  'No watermarks on downloaded videos',
                  'Mobile-friendly – works on all devices',
                  'Lightning fast – downloads in seconds',
                  'Privacy-focused – we don&apos;t store your data',
                  'Unlimited downloads – no restrictions'
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-purple-100">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="relative mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
              <p className="text-purple-200 mb-8 text-lg">
                Have questions or feedback? We&apos;d love to hear from you!
              </p>
              <a 
                href="mailto:saadyaqoob595@gmail.com" 
                className="group relative inline-flex overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold px-10 py-5 rounded-2xl hover:scale-105 transition-all shadow-2xl">
                  Contact Support
                </div>
              </a>
            </div>
          </div>

          {/* Important Notice */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-yellow-500/10 backdrop-blur-2xl border border-yellow-400/30 rounded-3xl p-8">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Important Notice</h3>
                  <p className="text-yellow-100 leading-relaxed">
                    ReelGrab is not affiliated with, endorsed by, or connected to Instagram or Meta. 
                    Please respect copyright laws and only download content you have permission to use. 
                    This tool is intended for personal use only.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-purple-300 mb-4">
            ReelGrab is not affiliated with Instagram or Meta Platforms. All trademarks belong to their respective owners.
          </p>
          <div className="flex justify-center gap-6 text-sm mb-4">
            <Link href="/" className="text-purple-200 hover:text-white transition-colors">Home</Link>
            <Link href="/privacy-policy" className="text-purple-200 hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="text-purple-200 hover:text-white transition-colors">Terms</Link>
            <Link href="/disclaimer" className="text-purple-200 hover:text-white transition-colors">Disclaimer</Link>
          </div>
          <p className="text-xs text-purple-400">© 2025 ReelGrab. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}