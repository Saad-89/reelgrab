import Link from 'next/link';
import { Video, ArrowLeft, Calendar, User } from 'lucide-react';
import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Instagram Hashtag Strategy for Growth in 2025 | ReelGrab',
  description: 'Master Instagram hashtags to boost your reach and grow your following. Learn which hashtags work, how many to use, and advanced strategies for 2025.',
};

export default function HashtagStrategyPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Video className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">ReelGrab</span>
          </Link>
        </div>
      </header>

      <article className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold mb-4">
              Growth
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              Instagram Hashtag Strategy for Maximum Growth
            </h1>
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>December 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By ReelGrab Team</span>
              </div>
            </div>
          </div>

          <div className="h-96 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-12">
            <span className="text-9xl">#️⃣</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Hashtags remain one of the most powerful tools for expanding your reach on Instagram in 2025. When used strategically, they can expose your content to thousands of new potential followers. Here's your complete guide to Instagram hashtag strategy.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How Instagram Hashtags Work</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Hashtags categorize your content and make it discoverable to users searching for specific topics. When you add a hashtag to your Reel or post, it can appear in hashtag search results and on hashtag-specific feeds. Instagram uses hashtags as one of many signals to understand what your content is about and who might be interested in seeing it.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The 3-Tier Hashtag Strategy</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The most effective hashtag strategy uses a mix of three different sizes of hashtags:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Low Competition (10K-100K posts)</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              These niche hashtags have less competition, making it easier for your content to rank. While they reach fewer people, you're more likely to appear in top posts. Use 3-4 of these per post.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Examples: #reelsmarketingtips, #instagramgrowthstrategy, #contentcreator2025
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Medium Competition (100K-500K posts)</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              These hashtags offer a good balance between reach and competition. They're specific enough that interested users will find them, but popular enough to drive significant traffic. Use 4-5 of these.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Examples: #reelstutorial, #instagrammarketingtips, #socialmediamanager
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. High Competition (500K+ posts)</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              These popular hashtags have massive reach but intense competition. Your content needs to perform exceptionally well to rank here. Use 1-2 per post.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Examples: #reels, #instagram, #viral
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How Many Hashtags Should You Use?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Instagram allows up to 30 hashtags per post, but more isn't always better. Research shows that the sweet spot is 5-10 highly relevant hashtags. This is enough to categorize your content without appearing spammy.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>For Instagram Reels specifically:</strong> Use 5-8 hashtags. Reels rely more heavily on content quality and engagement for reach than hashtags, so focus on relevance over quantity.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Where to Place Your Hashtags</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">In the Caption</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You can add hashtags directly in your caption. Some creators prefer to separate them with line breaks for cleaner aesthetics:
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <p className="text-gray-700 text-sm font-mono">
                "Check out this amazing Reel tip!<br/><br/>
                .<br/>
                .<br/>
                .<br/>
                #reels #instagramtips #contentcreator"
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">In the First Comment</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Another popular method is adding hashtags as the first comment. This keeps your caption clean while still categorizing your content. Both methods work equally well for reach.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How to Find the Best Hashtags for Your Niche</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Method 1: Research Competitors</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Find successful accounts in your niche and analyze their hashtags. Download their Reels using ReelGrab and study which hashtag combinations they use consistently. Look for patterns in their best-performing content.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Method 2: Instagram's Search Suggestions</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Start typing a relevant keyword in Instagram's search bar. The platform will suggest related hashtags along with the number of posts. This helps you find variations you might not have considered.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Method 3: Related Hashtag Recommendations</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              When you click on a hashtag, Instagram shows related hashtags at the top of the page. This is a goldmine for discovering new relevant hashtags in your niche.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Banned and Broken Hashtags</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Some hashtags are banned by Instagram due to spam or inappropriate content. Using these can actually hurt your reach. Signs of a banned hashtag:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>The hashtag page shows no top posts</li>
              <li>Recent posts are missing or very limited</li>
              <li>Instagram displays a warning about the hashtag</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              Before adding hashtags to your saved sets, check each one to ensure it's active and not restricted.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Advanced Hashtag Strategies</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Create Branded Hashtags</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Develop your own unique hashtag for your brand or campaign. Encourage followers to use it when creating related content. This builds community and makes it easy to find user-generated content.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Rotate Your Hashtag Sets</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Using the exact same hashtags on every post can look spammy to Instagram. Create 3-5 different sets of hashtags related to your niche and rotate them. This keeps your strategy looking natural while maintaining relevance.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use Location-Based Hashtags</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you're a local business or targeting a specific geographic area, include location hashtags like #LAcafe or #NYCfitness. These help you reach local audiences who are more likely to convert.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Follow Trending Hashtags</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Keep an eye on trending hashtags and incorporate them when relevant. However, only use trending hashtags if they genuinely relate to your content—forced trends are obvious and ineffective.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Measuring Hashtag Performance</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Instagram Insights shows how many impressions came from hashtags. Track this metric for each post to understand which hashtag combinations perform best. If you notice certain hashtags consistently bring in impressions, use them more frequently.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Hashtag Mistakes to Avoid</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Using irrelevant hashtags:</strong> Only use hashtags that accurately describe your content</li>
              <li><strong>Too many broad hashtags:</strong> #love #instagood #photooftheday are too competitive</li>
              <li><strong>Repeating the same hashtags:</strong> Rotate your sets to avoid looking spammy</li>
              <li><strong>Using banned hashtags:</strong> Always check hashtags before using them</li>
              <li><strong>Ignoring hashtag size:</strong> Mix different competition levels for best results</li>
            </ul>

            <div className="bg-indigo-50 rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Boost Your Instagram Growth</h3>
              <p className="text-gray-700 mb-6">
                Master hashtag strategy and watch your reach expand. Study successful creators in your niche by downloading their Reels and analyzing their hashtag patterns.
              </p>
              <Link 
                href="/" 
                className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-indigo-700 transition-all"
              >
                Download Reels for Research
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}