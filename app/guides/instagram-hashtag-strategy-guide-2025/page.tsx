import Link from 'next/link';
import { Video, ArrowLeft, BookOpen } from 'lucide-react';
import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Instagram Hashtag Strategy 2025: The Complete Guide to Discovery | ReelGrab',
  description: 'Master Instagram hashtags in 2025. Learn advanced hashtag research, finding trending hashtags, creating branded hashtags, optimal combinations, and when hashtags matter.',
};

export default function InstagramHashtagStrategyGuide2025() {
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
          <Link href="/guides" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>

          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full text-sm font-semibold mb-4 flex items-center gap-2 w-fit">
              <BookOpen className="w-4 h-4" />
              Complete Guide
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              Instagram Hashtag Strategy 2025: The Complete Guide to Discovery
            </h1>
            <p className="text-xl text-gray-600">
              Master advanced hashtag research, find trending hashtags, create branded hashtags, and optimize your hashtag strategy for maximum reach
            </p>
          </div>

          <div className="h-96 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-12">
            <span className="text-9xl">#️⃣</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-cyan-50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ How hashtags work on Instagram in 2025</li>
                <li>✅ Advanced hashtag research techniques</li>
                <li>✅ Finding and using trending hashtags</li>
                <li>✅ Creating and growing branded hashtags</li>
                <li>✅ Optimal hashtag combinations and strategies</li>
                <li>✅ When hashtags matter vs. when they don't</li>
                <li>✅ Common hashtag mistakes to avoid</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Chapter 1: Understanding Hashtags in 2025</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Hashtags Work</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Hashtags on Instagram are clickable keywords or phrases (preceded by #) that categorize content. When users click or search a hashtag, they see all public posts using that hashtag. Hashtags help Instagram's algorithm understand your content and show it to relevant audiences.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              In 2025, hashtags remain important for discovery, but their role has evolved. They're less about going viral and more about reaching the right audience and helping Instagram categorize your content.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hashtag Limits and Rules</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Instagram's hashtag rules:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Maximum 30 hashtags per post</li>
              <li>Hashtags can be in captions or first comment (both work the same)</li>
              <li>No spaces or special characters (except underscores)</li>
              <li>Hashtags are case-insensitive (#Fitness = #fitness)</li>
              <li>Banned hashtags won't work (Instagram blocks them)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Instagram Uses Hashtags</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Instagram uses hashtags to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Categorize and understand your content</li>
              <li>Show your posts in hashtag feeds</li>
              <li>Suggest your content to users interested in those topics</li>
              <li>Include your posts in Explore page recommendations</li>
              <li>Help users discover your account</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Chapter 2: Hashtag Research Techniques</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Three-Tier Strategy</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Use a mix of three hashtag sizes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Broad Hashtags (500K+ posts):</strong> Maximum reach, high competition (e.g., #fitness, #travel)</li>
              <li><strong>Mid-Size Hashtags (50K-500K posts):</strong> Good balance of reach and competition (e.g., #homeworkout, #sustainabletravel)</li>
              <li><strong>Niche Hashtags (10K-50K posts):</strong> Lower competition, higher chance of appearing in top posts (e.g., #homeworkoutforbeginners, #ecofriendlytravel)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Recommended Mix:</strong> 10% broad, 60% mid-size, 30% niche hashtags
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Research Methods</h3>
            
            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">1. Instagram's Search Function</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Use Instagram's search to find hashtags:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Type a keyword in search and select "Tags"</li>
              <li>See related hashtags Instagram suggests</li>
              <li>Check post counts for each hashtag</li>
              <li>Look at top posts to see quality standards</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">2. Competitor Analysis</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Study successful accounts in your niche:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Check which hashtags they use consistently</li>
              <li>See which hashtags appear on their top-performing posts</li>
              <li>Note hashtag combinations that work</li>
              <li>Identify hashtags you haven't tried</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">3. Hashtag Tools</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Use tools for deeper research:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Hashtagify:</strong> Find related hashtags and trends</li>
              <li><strong>RiteKit:</strong> Hashtag suggestions and analytics</li>
              <li><strong>Display Purposes:</strong> Generate hashtag sets</li>
              <li><strong>Later:</strong> Hashtag suggestions and performance tracking</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">4. Explore Page Research</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Check the Explore page:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>See what hashtags appear in your Explore feed</li>
              <li>Click on posts to see their hashtags</li>
              <li>Identify trending hashtags in your niche</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Evaluating Hashtag Quality</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Not all hashtags are equal. Evaluate:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Post Count:</strong> Too many posts = too competitive; too few = not enough audience</li>
              <li><strong>Top Posts Quality:</strong> Are top posts high-quality? Can you compete?</li>
              <li><strong>Recency:</strong> Are recent posts active or is the hashtag dead?</li>
              <li><strong>Relevance:</strong> Does the hashtag actually match your content?</li>
              <li><strong>Banned Status:</strong> Check if hashtag is banned (posts won't show in hashtag feed)</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Chapter 3: Finding Trending Hashtags</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Are Trending Hashtags?</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Trending hashtags are currently popular and seeing increased usage. Using them can help you reach new audiences, but timing and relevance are crucial.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Find Trending Hashtags</h3>
            
            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">1. Instagram's Trending Indicators</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Look for these signs:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Upward arrow next to hashtag name</li>
              <li>Rapidly increasing post counts</li>
              <li>Hashtags appearing frequently in your feed</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">2. Monitor Your Feed</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Pay attention to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Hashtags appearing repeatedly in your feed</li>
              <li>Hashtags used by multiple accounts you follow</li>
              <li>New hashtags that emerge in your niche</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">3. Use Trending Tools</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Tools that track trends:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Google Trends (search for hashtag topics)</li>
              <li>Hashtag tracking apps</li>
              <li>Social media monitoring tools</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">4. Seasonal and Event Hashtags</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Plan for recurring trends:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Holiday hashtags (#christmas2025, #newyear2025)</li>
              <li>Seasonal hashtags (#summer2025, #fallfashion)</li>
              <li>Event hashtags (#coachella2025, #olympics2025)</li>
              <li>Day-specific hashtags (#mondaymotivation, #throwbackthursday)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Using Trending Hashtags Effectively</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Best practices:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Only use trending hashtags if they're relevant to your content</li>
              <li>Act quickly—trends move fast</li>
              <li>Don't rely solely on trending hashtags</li>
              <li>Mix trending with evergreen hashtags</li>
              <li>Avoid overused trending hashtags (too competitive)</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Chapter 4: Creating Branded Hashtags</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Are Branded Hashtags?</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Branded hashtags are unique hashtags specific to your brand, business, or campaign. They help build community, track user-generated content, and create brand recognition.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Branded Hashtags</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Brand Name Hashtags:</strong> #YourBrandName</li>
              <li><strong>Campaign Hashtags:</strong> #YourBrandSummer2025</li>
              <li><strong>Community Hashtags:</strong> #YourBrandCommunity</li>
              <li><strong>Product Hashtags:</strong> #YourBrandProductName</li>
              <li><strong>Event Hashtags:</strong> #YourBrandEvent2025</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Creating Effective Branded Hashtags</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Best practices for branded hashtags:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Keep It Simple:</strong> Easy to remember and spell</li>
              <li><strong>Make It Unique:</strong> Check if it's already in use</li>
              <li><strong>Be Specific:</strong> Clearly related to your brand</li>
              <li><strong>Keep It Short:</strong> Easier to type and remember</li>
              <li><strong>Avoid Numbers/Special Characters:</strong> Harder to remember</li>
              <li><strong>Make It Actionable:</strong> Encourage use (e.g., #ShareYourStyle)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Growing Your Branded Hashtag</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Strategies to increase usage:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Use it consistently on all your posts</li>
              <li>Include it in your bio</li>
              <li>Encourage followers to use it</li>
              <li>Feature user-generated content using your hashtag</li>
              <li>Run contests or campaigns requiring the hashtag</li>
              <li>Promote it in Stories and captions</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Chapter 5: Optimal Hashtag Combinations</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Many Hashtags to Use</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Research shows:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>5-10 Hashtags:</strong> Good for focused targeting</li>
              <li><strong>11-20 Hashtags:</strong> Balanced approach</li>
              <li><strong>21-30 Hashtags:</strong> Maximum reach potential</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Recommendation:</strong> Use 15-25 hashtags for optimal results. Test what works best for your account.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hashtag Mix Strategy</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Create a balanced mix:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>1-2 Broad Hashtags:</strong> Maximum reach</li>
              <li><strong>8-12 Mid-Size Hashtags:</strong> Core targeting</li>
              <li><strong>5-8 Niche Hashtags:</strong> Specific audience</li>
              <li><strong>1-2 Branded Hashtags:</strong> Your own hashtags</li>
              <li><strong>1-2 Trending Hashtags:</strong> If relevant</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hashtag Placement</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You can place hashtags:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>In Caption:</strong> Works the same as comments</li>
              <li><strong>In First Comment:</strong> Keeps caption cleaner</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              Both work equally well. Choose based on aesthetic preference. Some creators use both (caption + comment) for maximum coverage.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Creating Hashtag Sets</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Save time by creating hashtag sets:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Create sets for different content types (Reels, posts, carousels)</li>
              <li>Have sets for different topics within your niche</li>
              <li>Keep sets in notes app for quick copy-paste</li>
              <li>Rotate hashtags to avoid being flagged as spam</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Chapter 6: When Hashtags Matter vs. When They Don't</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">When Hashtags Matter Most</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Hashtags are most important for:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>New Accounts:</strong> Primary discovery method when you have few followers</li>
              <li><strong>Reels:</strong> Hashtags significantly impact Reels discovery</li>
              <li><strong>Niche Content:</strong> Helps reach specific audiences</li>
              <li><strong>Trending Topics:</strong> Can boost visibility on trending content</li>
              <li><strong>Local Businesses:</strong> Location hashtags help local discovery</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">When Hashtags Matter Less</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Hashtags have less impact when:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Large Accounts:</strong> Established accounts rely more on followers and algorithm</li>
              <li><strong>Stories:</strong> Hashtags work but have limited impact</li>
              <li><strong>Highly Engaged Accounts:</strong> Strong engagement signals matter more</li>
              <li><strong>Viral Content:</strong> Once content goes viral, hashtags become less relevant</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Algorithm's Perspective</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Instagram's algorithm considers:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Hashtags (to understand content)</li>
              <li>Engagement signals (likes, comments, saves, shares)</li>
              <li>User behavior (watch time, completion rate)</li>
              <li>Account authority and history</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              Hashtags help, but they're just one factor. Great content with good engagement will perform even with fewer hashtags.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Chapter 7: Common Hashtag Mistakes</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Mistakes to Avoid</h3>
            
            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">1. Using Banned Hashtags</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Banned hashtags won't help your content. Common banned hashtags include overly generic ones like #photography, #beautyblogger, and some that have been spammed. Always check if a hashtag is banned before using it.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">2. Using Irrelevant Hashtags</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Using hashtags that don't match your content can hurt your account. Instagram may flag you as spam, and you'll attract the wrong audience.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">3. Using the Same Hashtags Every Time</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Repeating the exact same hashtags on every post can look spammy. Rotate your hashtags and have multiple sets.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">4. Only Using Popular Hashtags</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Using only hashtags with millions of posts means your content will get buried. Mix in niche and mid-size hashtags.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">5. Ignoring Hashtag Performance</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Track which hashtags drive the most engagement and reach. Stop using hashtags that don't perform.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">6. Hashtag Stuffing</h4>
            <p className="text-gray-700 leading-relaxed mb-6">
              Using all 30 hashtags when they're not relevant looks spammy. Quality over quantity.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Chapter 8: Advanced Hashtag Strategies</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hashtag Testing</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Test different hashtag strategies:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Test different hashtag counts (10 vs. 20 vs. 30)</li>
              <li>Compare caption vs. comment placement</li>
              <li>Test different hashtag mixes</li>
              <li>Track which hashtags drive the most engagement</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Niche-Specific Hashtags</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Develop niche-specific hashtag lists:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Create lists for each content pillar</li>
              <li>Have location-specific hashtags if relevant</li>
              <li>Include community hashtags in your niche</li>
              <li>Use industry-specific terminology</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hashtag Analytics</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Track hashtag performance:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Use Instagram Insights to see which posts perform best</li>
              <li>Note which hashtags appear on top-performing posts</li>
              <li>Track reach from hashtags vs. other sources</li>
              <li>Adjust your strategy based on data</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Seasonal Hashtag Planning</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Plan ahead for seasonal hashtags:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Create calendars with relevant seasonal hashtags</li>
              <li>Update hashtag sets quarterly</li>
              <li>Research upcoming events and holidays</li>
              <li>Prepare hashtags for product launches or campaigns</li>
            </ul>

            <div className="bg-cyan-50 rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Master Your Hashtag Strategy</h3>
              <p className="text-gray-700 mb-6">
                Hashtags remain a valuable tool for Instagram growth in 2025, but they're most effective when used strategically. Focus on relevant, well-researched hashtags that help Instagram understand your content and connect you with the right audience. Remember, hashtags are just one part of a successful Instagram strategy—great content and engagement matter more.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/" 
                  className="inline-block bg-cyan-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-cyan-700 transition-all"
                >
                  Download Reels for Study
                </Link>
                <Link 
                  href="/guides" 
                  className="inline-block bg-white border-2 border-cyan-600 text-cyan-600 font-semibold px-8 py-3 rounded-xl hover:bg-cyan-50 transition-all"
                >
                  More Guides
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
