// app/blog/page.tsx
import Link from 'next/link';
import { Video, Calendar, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog - Instagram Reels Tips & Social Media Marketing Guides | ReelGrab',
  description: 'Learn how to create viral Instagram Reels, grow your following, and master social media marketing. Expert guides on content creation, copyright, and Instagram growth.',
  keywords: ['Instagram tips', 'Reels tutorials', 'social media marketing', 'content creation', 'Instagram growth', 'copyright guide'],
};

export default function BestEditingAppsPost() {
  const articles = [
    // EXISTING WRITTEN POSTS - Match your folder structure
    {
      title: "Copyright Law 101: What Every Instagram Creator Should Know",
      slug: "copyright-law-instagram-creators",
      excerpt: "Essential copyright guide for Instagram creators. Learn fair use, DMCA, content protection, and how to stay legally compliant in 2025.",
      date: "January 3, 2025",
      category: "Legal Guide",
      featured: true,
      written: true
    },
    {
      title: "How to Use Instagram Reels Legally: Complete Compliance Guide",
      slug: "use-instagram-reels-legally",
      excerpt: "Navigate Instagram's terms of service and copyright rules. Learn what you can and cannot do with Reels content legally.",
      date: "January 3, 2025",
      category: "Legal Guide",
      featured: true,
      written: true
    },
    {
      title: "Instagram Reels Monetization: Complete Guide to Making Money in 2025",
      slug: "instagram-reels-monetization-guide",
      excerpt: "Turn your Instagram Reels into income. Learn about bonuses, brand deals, affiliate marketing, and all monetization strategies.",
      date: "January 2, 2025",
      category: "Monetization",
      written: true
    },
    {
      title: "50+ Instagram Reels Hooks That Stop the Scroll",
      slug: "instagram-reels-hooks",
      excerpt: "Master the art of hooking viewers in the first 3 seconds. Get 50+ proven hook formulas that increase watch time and engagement.",
      date: "January 2, 2025",
      category: "Content Creation",
      written: true
    },
    {
      title: "Instagram Algorithm 2025: Complete Guide to How It Works",
      slug: "instagram-algorithm-2025",
      excerpt: "Understanding the Instagram algorithm is key to success. Learn how Instagram ranks content and optimize your Reels for maximum reach.",
      date: "January 1, 2025",
      category: "Algorithm",
      written: true
    },
    {
      title: "How to Download Instagram Reels Without Watermark",
      slug: "download-without-watermark",
      excerpt: "Learn the easiest methods to download Instagram Reels without watermarks. Step-by-step guide with tips for maintaining video quality.",
      date: "December 30, 2024",
      category: "Tutorials",
      written: true
    },
    {
      title: "Viral Instagram Reels Tips: How to Create Content That Explodes",
      slug: "viral-reels-tips",
      excerpt: "Discover the secrets to creating viral Instagram Reels. Learn proven strategies, formats, and techniques that top creators use.",
      date: "December 29, 2024",
      category: "Content Creation",
      written: true
    },
    {
      title: "Instagram Reels vs TikTok: Which Platform to Choose in 2025",
      slug: "reels-vs-tiktok",
      excerpt: "Comprehensive comparison of Instagram Reels and TikTok. Find out which platform is best for your content and goals.",
      date: "December 28, 2024",
      category: "Comparison",
      written: true
    },
    {
      title: "Best Time to Post Instagram Reels for Maximum Engagement",
      slug: "best-posting-times",
      excerpt: "Timing is everything on Instagram. Learn the optimal times to post Reels based on your audience, industry, and location.",
      date: "December 27, 2024",
      category: "Strategy",
      written: true
    },
    {
      title: "Instagram Hashtag Strategy: Ultimate Guide for 2025",
      slug: "hashtag-strategy",
      excerpt: "Master hashtag strategy to boost your Instagram reach. Learn research methods, best practices, and trending strategies.",
      date: "December 26, 2024",
      category: "Strategy",
      written: true
    },
    {
      title: "200+ Instagram Reels Content Ideas for 2025",
      slug: "content-ideas-2025",
      excerpt: "Never run out of content ideas again. Get 200+ proven Instagram Reels ideas organized by niche and content type.",
      date: "December 25, 2024",
      category: "Content Ideas",
      written: true
    },
        {
      title: "Best Video Editing Apps for Instagram Reels in 2025",
      slug: "best-editing-apps",
      excerpt: "Discover the top video editing apps for creating stunning Instagram Reels. Compare features, pricing, and find the perfect tool.",
      date: "December 24, 2024",
      category: "Tools",
      written: true
    },
    
    // NEW POSTS TO BE WRITTEN

    {
      title: "Instagram Analytics Masterclass: Understanding Your Data",
      slug: "instagram-analytics-guide",
      excerpt: "Master Instagram Analytics to make data-driven decisions. Learn which metrics matter and how to interpret your insights.",
      date: "December 23, 2024",
      category: "Analytics",
      written: true
    },
    {
      title: "How to Grow on Instagram: Complete Strategy for 2025",
      slug: "grow-instagram-following",
      excerpt: "Proven strategies to grow your Instagram following organically. Learn tactics used by successful creators and brands.",
      date: "December 22, 2024",
      category: "Growth",
      written: true
    },
    {
      title: "Instagram Content Calendar 2025: Plan Your Success",
      slug: "instagram-content-calendar",
      excerpt: "Plan your Instagram content like a pro. Get templates, strategies, and tips for consistent posting that drives results.",
      date: "December 21, 2024",
      category: "Planning",
      written: true
    },
    {
      title: "Instagram SEO Guide: Get Discovered in 2025",
      slug: "instagram-seo-guide",
      excerpt: "Master Instagram SEO to increase discoverability. Learn keyword optimization, hashtag strategy, and profile optimization.",
      date: "December 20, 2024",
      category: "SEO",
      written: true
    },
    {
      title: "15 Mistakes Killing Your Instagram Reels Performance",
      slug: "instagram-reels-mistakes",
      excerpt: "Avoid these common mistakes that hurt your Reels performance. Learn what not to do and how to fix your strategy.",
      date: "December 19, 2024",
      category: "Tips",
      written: true
    },
    {
      title: "Brand Partnerships on Instagram: Complete Guide",
      slug: "brand-partnerships-instagram",
      excerpt: "Land your first brand deal on Instagram. Learn how to pitch brands, negotiate rates, and create winning partnerships.",
      date: "December 18, 2024",
      category: "Business",
      written: true
    },
    {
      title: "Content Creation Tools Every Instagram Creator Needs",
      slug: "content-creation-tools",
      excerpt: "Essential tools for creating professional Instagram content. From filming to editing to scheduling—everything you need.",
      date: "December 17, 2024",
      category: "Tools",
      written: true
    },
    {
      title: "Instagram Business Account Setup: Complete Tutorial",
      slug: "instagram-business-account",
      excerpt: "Set up your Instagram business account the right way. Learn features, benefits, and optimization strategies.",
      date: "December 16, 2024",
      category: "Business",
      written: true
    },
  ];

  const featuredArticles = articles.filter(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

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
            <Link href="/blog" className="text-blue-600 font-semibold">Blog</Link>
            <Link href="/guides" className="text-gray-600 hover:text-blue-600 transition-colors">Guides</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
          </nav>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold text-blue-600 mb-4">
              Expert Insights & Guides
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Instagram Marketing Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn how to create viral content, grow your following, stay legally compliant, and master Instagram marketing in 2025
            </p>
          </div>

          {/* Featured Posts */}
          {featuredArticles.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredArticles.map((article, i) => (
                  <Link
                    key={i}
                    href={`/blog/${article.slug}`}
                    className="group bg-white rounded-2xl shadow-lg border-2 border-blue-200 overflow-hidden hover:shadow-xl hover:border-blue-400 transition-all"
                  >
                    <div className="h-56 bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
                      <span className="text-8xl">⚖️</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-red-600 font-semibold mb-3">
                        <span className="px-3 py-1 bg-red-50 rounded-full">{article.category}</span>
                        <span className="px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full">★ Featured</span>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
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
          )}

          {/* All Posts */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, i) => (
                <Link
                  key={i}
                  href={`/blog/${article.slug}`}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <span className="text-6xl">📱</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-semibold mb-3">
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full">{article.category}</span>
                      {!article.written && (
                        <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-xs">Coming Soon</span>
                      )}
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
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

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Instagram?</h2>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Start downloading Reels for inspiration, study successful content, and create your own viral videos with ReelGrab.
            </p>
            <Link 
              href="/" 
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all shadow-lg"
            >
              Try ReelGrab Free
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}



// // app/blog/page.tsx
// import Link from 'next/link';
// import { Video, Calendar, ArrowRight } from 'lucide-react';
// import { Metadata } from 'next';
// import Footer from '@/components/Footer';

// export const metadata: Metadata = {
//   title: 'Blog - Instagram Reels Tips & Social Media Marketing Guides | ReelGrab',
//   description: 'Learn how to create viral Instagram Reels, grow your following, and master social media marketing. Expert guides on content creation, copyright, and Instagram growth.',
//   keywords: ['Instagram tips', 'Reels tutorials', 'social media marketing', 'content creation', 'Instagram growth', 'copyright guide'],
// };

// export default function BlogPage() {
//   const articles = [
//     // NEW POSTS - Priority for AdSense
//     {
//       title: "Copyright Law 101: What Every Instagram Creator Should Know",
//       slug: "copyright-law-instagram-creators",
//       excerpt: "Essential copyright guide for Instagram creators. Learn fair use, DMCA, content protection, and how to stay legally compliant in 2025.",
//       date: "January 3, 2025",
//       category: "Legal Guide",
//       featured: true
//     },
//     {
//       title: "How to Use Instagram Reels Legally: Complete Compliance Guide",
//       slug: "use-instagram-reels-legally",
//       excerpt: "Navigate Instagram's terms of service and copyright rules. Learn what you can and cannot do with Reels content legally.",
//       date: "January 3, 2025",
//       category: "Legal Guide",
//       featured: true
//     },
//     {
//       title: "Instagram Reels Monetization: Complete Guide to Making Money in 2025",
//       slug: "instagram-reels-monetization-guide",
//       excerpt: "Turn your Instagram Reels into income. Learn about bonuses, brand deals, affiliate marketing, and all monetization strategies.",
//       date: "January 2, 2025",
//       category: "Monetization"
//     },
//     {
//       title: "50+ Instagram Reels Hooks That Stop the Scroll",
//       slug: "instagram-reels-hooks",
//       excerpt: "Master the art of hooking viewers in the first 3 seconds. Get 50+ proven hook formulas that increase watch time and engagement.",
//       date: "January 2, 2025",
//       category: "Content Creation"
//     },
    
    
//     // EXISTING POSTS
//     {
//       title: "How to Download Instagram Reels: Complete Guide",
//       slug: "how-to-download-instagram-reels",
//       excerpt: "Learn the easiest and safest methods to download Instagram Reels. Step-by-step guide with tips for maintaining video quality.",
//       date: "December 30, 2024",
//       category: "Tutorials"
//     },
//     {
//       title: "Instagram Reels Video Quality: HD, 4K, and Best Practices",
//       slug: "instagram-reels-video-quality",
//       excerpt: "Master video quality for Instagram Reels. Learn about resolution, bitrate, codecs, and how to upload crystal-clear content.",
//       date: "December 29, 2024",
//       category: "Technical"
//     },
//     {
//       title: "Instagram Reels Trends 2025: What's Working Now",
//       slug: "instagram-reels-trends-2025",
//       excerpt: "Stay ahead with the latest Instagram Reels trends. Discover what content formats, styles, and topics are dominating in 2025.",
//       date: "December 28, 2024",
//       category: "Trends"
//     },
//     {
//       title: "Best Time to Post Instagram Reels for Maximum Engagement",
//       slug: "best-time-to-post-reels",
//       excerpt: "Timing is everything on Instagram. Learn the optimal times to post Reels based on your audience, industry, and location.",
//       date: "December 27, 2024",
//       category: "Strategy"
//     },
//     {
//       title: "Instagram Algorithm Explained: How to Get More Reach",
//       slug: "instagram-algorithm-2025",
//       excerpt: "Decode the Instagram algorithm and learn exactly how to optimize your content for maximum reach and engagement.",
//       date: "December 25, 2024",
//       category: "Algorithm"
//     },
    
//     // ADDITIONAL NEW POSTS
//     {
//       title: "Instagram Content Calendar 2025: Plan Your Success",
//       slug: "instagram-content-calendar",
//       excerpt: "Plan your Instagram content like a pro. Get templates, strategies, and tips for consistent posting that drives results.",
//       date: "December 24, 2024",
//       category: "Planning"
//     },
//     {
//       title: "Instagram SEO Guide: Get Discovered in 2025",
//       slug: "instagram-seo-guide",
//       excerpt: "Master Instagram SEO to increase discoverability. Learn keyword optimization, hashtag strategy, and profile optimization.",
//       date: "December 23, 2024",
//       category: "SEO"
//     },
//     {
//       title: "15 Mistakes Killing Your Instagram Reels Performance",
//       slug: "instagram-reels-mistakes",
//       excerpt: "Avoid these common mistakes that hurt your Reels performance. Learn what not to do and how to fix your strategy.",
//       date: "December 22, 2024",
//       category: "Tips"
//     },
//     {
//       title: "How to Grow on Instagram: Complete Strategy for 2025",
//       slug: "grow-instagram-following",
//       excerpt: "Proven strategies to grow your Instagram following organically. Learn tactics used by successful creators and brands.",
//       date: "December 21, 2024",
//       category: "Growth"
//     },
//     {
//       title: "Instagram Analytics: Understanding Your Insights",
//       slug: "instagram-analytics-guide",
//       excerpt: "Master Instagram Analytics to make data-driven decisions. Learn which metrics matter and how to interpret your insights.",
//       date: "December 20, 2024",
//       category: "Analytics"
//     },
//     {
//       title: "Brand Partnerships on Instagram: Complete Guide",
//       slug: "brand-partnerships-instagram",
//       excerpt: "Land your first brand deal on Instagram. Learn how to pitch brands, negotiate rates, and create winning partnerships.",
//       date: "December 19, 2024",
//       category: "Business"
//     },
//     {
//       title: "Instagram Reels vs TikTok: Which Platform to Choose in 2025",
//       slug: "reels-vs-tiktok",
//       excerpt: "Comprehensive comparison of Instagram Reels and TikTok. Find out which platform is best for your content and goals.",
//       date: "December 18, 2024",
//       category: "Comparison"
//     },
//     {
//       title: "Hashtag Strategy for Instagram: Ultimate Guide",
//       slug: "hashtag-strategy",
//       excerpt: "Master hashtag strategy to boost your Instagram reach. Learn research methods, best practices, and trending strategies.",
//       date: "December 15, 2024",
//       category: "Strategy"
//     },
//     {
//       title: "Content Creation Tools Every Instagram Creator Needs",
//       slug: "content-creation-tools",
//       excerpt: "Essential tools for creating professional Instagram content. From filming to editing to scheduling—everything you need.",
//       date: "December 14, 2024",
//       category: "Tools"
//     },
//     {
//       title: "Instagram Business Account Setup: Complete Tutorial",
//       slug: "instagram-business-account",
//       excerpt: "Set up your Instagram business account the right way. Learn features, benefits, and optimization strategies.",
//       date: "December 13, 2024",
//       category: "Business"
//     },
//   ];

//   const featuredArticles = articles.filter(a => a.featured);
//   const regularArticles = articles.filter(a => !a.featured);

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
//       <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//           <Link href="/" className="flex items-center gap-2">
//             <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
//               <Video className="w-6 h-6 text-white" />
//             </div>
//             <span className="text-xl font-bold text-gray-900">ReelGrab</span>
//           </Link>
//           <nav className="hidden md:flex gap-6 text-sm font-medium">
//             <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
//             <Link href="/blog" className="text-blue-600 font-semibold">Blog</Link>
//             <Link href="/guides" className="text-gray-600 hover:text-blue-600 transition-colors">Guides</Link>
//             <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
//           </nav>
//         </div>
//       </header>

//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           {/* Hero */}
//           <div className="text-center mb-16">
//             <span className="inline-block px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold text-blue-600 mb-4">
//               Expert Insights & Guides
//             </span>
//             <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
//               Instagram Marketing Blog
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Learn how to create viral content, grow your following, stay legally compliant, and master Instagram marketing in 2025
//             </p>
//           </div>

//           {/* Featured Posts */}
//           {featuredArticles.length > 0 && (
//             <div className="mb-16">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
//               <div className="grid md:grid-cols-2 gap-8">
//                 {featuredArticles.map((article, i) => (
//                   <Link
//                     key={i}
//                     href={`/blog/${article.slug}`}
//                     className="group bg-white rounded-2xl shadow-lg border-2 border-blue-200 overflow-hidden hover:shadow-xl hover:border-blue-400 transition-all"
//                   >
//                     <div className="h-56 bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
//                       <span className="text-8xl">⚖️</span>
//                     </div>
//                     <div className="p-6">
//                       <div className="flex items-center gap-2 text-xs text-red-600 font-semibold mb-3">
//                         <span className="px-3 py-1 bg-red-50 rounded-full">{article.category}</span>
//                         <span className="px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full">★ Featured</span>
//                       </div>
//                       <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
//                         {article.title}
//                       </h2>
//                       <p className="text-gray-600 mb-4">{article.excerpt}</p>
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-2 text-sm text-gray-500">
//                           <Calendar className="w-4 h-4" />
//                           <span>{article.date}</span>
//                         </div>
//                         <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
//                       </div>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* All Posts */}
//           <div>
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">All Articles</h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {regularArticles.map((article, i) => (
//                 <Link
//                   key={i}
//                   href={`/blog/${article.slug}`}
//                   className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
//                 >
//                   <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
//                     <span className="text-6xl">📱</span>
//                   </div>
//                   <div className="p-6">
//                     <div className="flex items-center gap-2 text-xs text-blue-600 font-semibold mb-3">
//                       <span className="px-3 py-1 bg-blue-50 rounded-full">{article.category}</span>
//                     </div>
//                     <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
//                       {article.title}
//                     </h2>
//                     <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2 text-sm text-gray-500">
//                         <Calendar className="w-4 h-4" />
//                         <span>{article.date}</span>
//                       </div>
//                       <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* CTA Section */}
//           <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white">
//             <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Instagram?</h2>
//             <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
//               Start downloading Reels for inspiration, study successful content, and create your own viral videos with ReelGrab.
//             </p>
//             <Link 
//               href="/" 
//               className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all shadow-lg"
//             >
//               Try ReelGrab Free
//             </Link>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// }





// --- ORIGINAL ---


// import Link from 'next/link';
// import { Video, Calendar, ArrowRight } from 'lucide-react';
// import { Metadata } from 'next';
// import Footer from '@/components/Footer';

// export const metadata: Metadata = {
//   title: 'Blog - Instagram Reels Tips & Social Media Guides | ReelGrab',
//   description: 'Learn how to create viral Instagram Reels, grow your following, and master social media marketing with our expert guides and tips.',
// };

// export default function BlogPage() {
//   const articles = [
//     {
//       title: "10 Tips for Creating Viral Instagram Reels in 2025",
//       slug: "viral-reels-tips",
//       excerpt: "Discover the secrets to creating Instagram Reels that capture attention and go viral. Learn proven strategies from successful creators.",
//       date: "December 28, 2024",
//       category: "Instagram Tips"
//     },
//     {
//       title: "Instagram Algorithm 2025: How It Really Works",
//       slug: "instagram-algorithm-2025",
//       excerpt: "Understanding the Instagram algorithm is key to success. Learn how Instagram ranks content and how to optimize your Reels for maximum reach.",
//       date: "December 25, 2024",
//       category: "Algorithm"
//     },
//     {
//       title: "Best Video Editing Apps for Instagram Reels",
//       slug: "best-editing-apps",
//       excerpt: "Transform your Reels with these top video editing apps. From beginner-friendly to professional tools, find the perfect app for your needs.",
//       date: "December 22, 2024",
//       category: "Tools"
//     },
//     {
//       title: "How to Download Instagram Reels Without Watermark",
//       slug: "download-without-watermark",
//       excerpt: "Learn the easiest methods to download Instagram Reels without watermarks. Save high-quality videos for inspiration and reference.",
//       date: "December 20, 2024",
//       category: "Tutorials"
//     },
//     {
//       title: "Instagram Reels vs TikTok: Which Platform is Better in 2025?",
//       slug: "reels-vs-tiktok",
//       excerpt: "A comprehensive comparison of Instagram Reels and TikTok. Find out which platform is best for your content and audience.",
//       date: "December 18, 2024",
//       category: "Comparison"
//     },
//     {
//       title: "Hashtag Strategy for Instagram Growth",
//       slug: "hashtag-strategy",
//       excerpt: "Master hashtag strategy to boost your Instagram reach. Learn which hashtags to use and how to find trending tags in your niche.",
//       date: "December 15, 2024",
//       category: "Growth"
//     },
//     {
//       title: "Best Times to Post Instagram Reels for Maximum Engagement",
//       slug: "best-posting-times",
//       excerpt: "Timing is everything. Discover the optimal times to post Instagram Reels based on your audience and industry.",
//       date: "December 12, 2024",
//       category: "Strategy"
//     },
//     {
//       title: "Instagram Content Ideas for 2025",
//       slug: "content-ideas-2025",
//       excerpt: "Never run out of content ideas again. Get 50+ proven Instagram Reels ideas that work across all niches.",
//       date: "December 10, 2024",
//       category: "Content"
//     },
    
//   ];

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
//       <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//           <Link href="/" className="flex items-center gap-2">
//             <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
//               <Video className="w-6 h-6 text-white" />
//             </div>
//             <span className="text-xl font-bold text-gray-900">ReelGrab</span>
//           </Link>
//           <nav className="hidden md:flex gap-6 text-sm font-medium">
//             <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
//             <Link href="/blog" className="text-blue-600">Blog</Link>
//             <Link href="/guides" className="text-gray-600 hover:text-blue-600 transition-colors">Guides</Link>
//           </nav>
//         </div>
//       </header>

//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <span className="inline-block px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold text-blue-600 mb-4">
//               Our Blog
//             </span>
//             <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
//               Instagram Tips & Social Media Guides
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Expert advice on creating viral content, growing your following, and mastering Instagram Reels
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {articles.map((article, i) => (
//               <Link
//                 key={i}
//                 href={`/blog/${article.slug}`}
//                 className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
//               >
//                 <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
//                   <span className="text-6xl">📱</span>
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center gap-2 text-xs text-blue-600 font-semibold mb-3">
//                     <span className="px-3 py-1 bg-blue-50 rounded-full">{article.category}</span>
//                   </div>
//                   <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
//                     {article.title}
//                   </h2>
//                   <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2 text-sm text-gray-500">
//                       <Calendar className="w-4 h-4" />
//                       <span>{article.date}</span>
//                     </div>
//                     <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// }