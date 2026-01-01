import Link from 'next/link';
import { Video, Calendar, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog - Instagram Reels Tips & Social Media Guides | ReelGrab',
  description: 'Learn how to create viral Instagram Reels, grow your following, and master social media marketing with our expert guides and tips.',
};

export default function BlogPage() {
  const articles = [
    {
      title: "10 Tips for Creating Viral Instagram Reels in 2025",
      slug: "viral-reels-tips",
      excerpt: "Discover the secrets to creating Instagram Reels that capture attention and go viral. Learn proven strategies from successful creators.",
      date: "December 28, 2024",
      category: "Instagram Tips"
    },
    {
      title: "Instagram Algorithm 2025: How It Really Works",
      slug: "instagram-algorithm-2025",
      excerpt: "Understanding the Instagram algorithm is key to success. Learn how Instagram ranks content and how to optimize your Reels for maximum reach.",
      date: "December 25, 2024",
      category: "Algorithm"
    },
    {
      title: "Best Video Editing Apps for Instagram Reels",
      slug: "best-editing-apps",
      excerpt: "Transform your Reels with these top video editing apps. From beginner-friendly to professional tools, find the perfect app for your needs.",
      date: "December 22, 2024",
      category: "Tools"
    },
    {
      title: "How to Download Instagram Reels Without Watermark",
      slug: "download-without-watermark",
      excerpt: "Learn the easiest methods to download Instagram Reels without watermarks. Save high-quality videos for inspiration and reference.",
      date: "December 20, 2024",
      category: "Tutorials"
    },
    {
      title: "Instagram Reels vs TikTok: Which Platform is Better in 2025?",
      slug: "reels-vs-tiktok",
      excerpt: "A comprehensive comparison of Instagram Reels and TikTok. Find out which platform is best for your content and audience.",
      date: "December 18, 2024",
      category: "Comparison"
    },
    {
      title: "Hashtag Strategy for Instagram Growth",
      slug: "hashtag-strategy",
      excerpt: "Master hashtag strategy to boost your Instagram reach. Learn which hashtags to use and how to find trending tags in your niche.",
      date: "December 15, 2024",
      category: "Growth"
    },
    {
      title: "Best Times to Post Instagram Reels for Maximum Engagement",
      slug: "best-posting-times",
      excerpt: "Timing is everything. Discover the optimal times to post Instagram Reels based on your audience and industry.",
      date: "December 12, 2024",
      category: "Strategy"
    },
    {
      title: "Instagram Content Ideas for 2025",
      slug: "content-ideas-2025",
      excerpt: "Never run out of content ideas again. Get 50+ proven Instagram Reels ideas that work across all niches.",
      date: "December 10, 2024",
      category: "Content"
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
            <Link href="/blog" className="text-blue-600">Blog</Link>
            <Link href="/guides" className="text-gray-600 hover:text-blue-600 transition-colors">Guides</Link>
          </nav>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold text-blue-600 mb-4">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Instagram Tips & Social Media Guides
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice on creating viral content, growing your following, and mastering Instagram Reels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <Link
                key={i}
                href={`/blog/${article.slug}`}
                className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <span className="text-6xl">📱</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-blue-600 font-semibold mb-3">
                    <span className="px-3 py-1 bg-blue-50 rounded-full">{article.category}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
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