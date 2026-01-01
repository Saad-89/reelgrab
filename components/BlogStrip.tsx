import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BlogStrip() {
  const articles = [
    { title: "10 Tips for Creating Viral Instagram Reels", slug: "viral-reels-tips" },
    { title: "Instagram Algorithm: How It Works in 2025", slug: "instagram-algorithm-2025" },
    { title: "Best Video Editing Apps for Reels", slug: "best-editing-apps" },
    { title: "How to Download Instagram Reels Without Watermark", slug: "download-without-watermark" },
    { title: "Instagram Reels vs TikTok: Which is Better?", slug: "reels-vs-tiktok" },
    { title: "Hashtag Strategy for Instagram Growth", slug: "hashtag-strategy" },
    { title: "Best Times to Post Instagram Reels", slug: "best-posting-times" },
    { title: "Instagram Content Ideas for 2025", slug: "content-ideas-2025" },
  ];

  // Duplicate for seamless loop
  const doubledArticles = [...articles, ...articles];

  return (
    <section className="py-8 bg-white border-y border-gray-200 overflow-hidden">
      <div className="flex items-center gap-4 mb-4 px-4">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Latest Articles</h2>
        <Link href="/blog" className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      
      <div className="relative">
        <div className="flex gap-4 animate-scroll">
          {doubledArticles.map((article, i) => (
            <Link
              key={i}
              href={`/blog/${article.slug}`}
              className="flex-shrink-0 bg-gradient-to-br from-blue-50 to-indigo-50 px-6 py-3 rounded-full border border-blue-200 hover:border-blue-300 hover:shadow-md transition-all group"
            >
              <span className="text-sm font-medium text-gray-800 group-hover:text-blue-600 whitespace-nowrap">
                {article.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
