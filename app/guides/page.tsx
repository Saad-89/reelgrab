import Link from 'next/link';
import { Video, BookOpen, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Instagram Guides & Tutorials | ReelGrab',
  description: 'Comprehensive guides to help you master Instagram Reels, grow your following, and create viral content. Free tutorials and strategies.',
};

export default function GuidesPage() {
  const guides = [
    {
      title: "Complete Instagram Reels Guide for Beginners",
      slug: "instagram-reels-guide-beginners",
      description: "Everything you need to know to start creating, editing, and posting Instagram Reels. Perfect for complete beginners.",
      readTime: "15 min read",
      level: "Beginner"
    },
    {
      title: "Instagram Marketing Strategy Guide 2025",
      slug: "instagram-marketing-strategy-2025",
      description: "Build a comprehensive Instagram marketing strategy that drives real results. From content planning to analytics.",
      readTime: "20 min read",
      level: "Intermediate"
    },
    {
      title: "Video Content Creation Guide",
      slug: "video-content-creation-guide",
      description: "Master the art of video content creation. Learn filming techniques, editing tips, and storytelling strategies.",
      readTime: "18 min read",
      level: "All Levels"
    },
  ];

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
            <Link href="/guides" className="text-blue-600">Guides</Link>
          </nav>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold text-blue-600 mb-4">
              <BookOpen className="w-4 h-4 inline mr-2" />
              Learning Center
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Instagram Guides & Tutorials
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive, step-by-step guides to help you master Instagram Reels and grow your presence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {guides.map((guide, i) => (
              <Link
                key={i}
                href={`/guides/${guide.slug}`}
                className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <span className="text-6xl">📚</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold mb-3">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full">{guide.level}</span>
                    <span className="text-gray-500">{guide.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    Read Guide <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
