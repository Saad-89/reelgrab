// app/blog/grow-instagram-following/page.tsx
import Link from 'next/link';
import { Video, ArrowLeft, TrendingUp, Users, Target, CheckCircle2, Zap } from 'lucide-react';
import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'How to Grow on Instagram in 2025: Complete Strategy Guide',
  description: 'Proven strategies to grow your Instagram following organically. Learn tactics used by successful creators and brands to gain followers, increase engagement, and build a thriving community.',
  keywords: ['grow Instagram followers', 'Instagram growth strategy', 'gain Instagram followers', 'organic Instagram growth', 'Instagram marketing 2025'],
  openGraph: {
    title: 'How to Grow on Instagram: Complete Strategy for 2025',
    description: 'Proven strategies to grow your Instagram following organically in 2025.',
    type: 'article',
  },
};

export default function GrowInstagramPost() {
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
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4 flex items-center gap-2 w-fit">
              <TrendingUp className="w-4 h-4" />
              Growth Strategy
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              How to Grow on Instagram: Complete Strategy for 2025
            </h1>
            <p className="text-xl text-gray-600">
              Proven tactics to build a thriving Instagram following organically
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
              <span>December 22, 2024</span>
              <span>•</span>
              <span>22 min read</span>
            </div>
          </div>

          <div className="h-96 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-12">
            <span className="text-9xl">📈</span>
          </div>

          <div className="prose prose-lg max-w-none">
            
            <div className="bg-blue-50 rounded-2xl p-8 mb-12 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Truth About Instagram Growth in 2025</h3>
              <p className="text-gray-700 leading-relaxed">
                Growing on Instagram is still possible in 2025, but the strategies have evolved. This comprehensive guide reveals exactly what works now: 
                from content strategy to engagement tactics, algorithm optimization to community building. Follow this roadmap to build real, engaged followers 
                who care about your content.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Foundation: Before You Start Growing</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Optimize Your Profile</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Your profile is your storefront. Most people decide whether to follow in 3 seconds.
            </p>

            <div className="bg-white rounded-xl border-2 border-purple-200 p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Profile Optimization Checklist:</h4>
              <ul className="space-y-3 text-gray-700">
                <li>✅ <strong>Clear profile picture:</strong> Face clearly visible or recognizable logo</li>
                <li>✅ <strong>Searchable username:</strong> Include niche keywords when possible</li>
                <li>✅ <strong>Compelling bio:</strong> What you do + who you help + how (under 150 characters)</li>
                <li>✅ <strong>Call-to-action:</strong> Tell visitors what to do next</li>
                <li>✅ <strong>Link strategy:</strong> Use link-in-bio tool or direct to best content</li>
                <li>✅ <strong>Highlights:</strong> 4-6 highlights that showcase your best content</li>
                <li>✅ <strong>Cohesive grid:</strong> First 9 posts should look professional and consistent</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Bio Formula That Converts:</h4>
              <p className="text-gray-700 mb-2">
                [What you do] for [target audience]<br/>
                [Main value proposition]<br/>
                [Social proof/credibility]<br/>
                [Call-to-action] 👇
              </p>
              <p className="text-sm text-gray-600 mt-4">
                Example: "Helping creators monetize content 🎬 | 100K+ students taught | Free Reels course below 👇"
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Define Your Niche & Ideal Follower</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Trying to appeal to everyone appeals to no one. Narrow your focus to grow faster.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Find Your Niche Sweet Spot:</h4>
              <ol className="space-y-2 text-gray-700">
                <li>1. <strong>Your expertise:</strong> What do you know better than most?</li>
                <li>2. <strong>Your passion:</strong> What can you talk about endlessly?</li>
                <li>3. <strong>Market demand:</strong> What do people actively search for?</li>
                <li>4. <strong>Competition gap:</strong> What's underserved in your space?</li>
              </ol>
              <p className="text-sm text-blue-600 mt-4">
                The overlap of these four = your perfect niche
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Content Strategy for Growth</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The 70-20-10 Content Rule</h3>

            <div className="bg-green-50 rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-gray-700">
                <li><strong>70% Value Content:</strong> Educational, helpful, saves-worthy content that solves problems</li>
                <li><strong>20% Engagement Content:</strong> Relatable, entertaining, conversation-starting content</li>
                <li><strong>10% Promotional:</strong> Your products, services, or offers</li>
              </ul>
              <p className="text-sm text-green-700 mt-4">
                This balance keeps followers engaged while building trust and authority
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Content Types That Drive Growth</h3>

            <div className="bg-white rounded-xl border-2 border-pink-200 p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-3">High-Converting Content Formats:</h4>
              <ol className="space-y-3 text-gray-700">
                <li><strong>1. Tutorial Reels:</strong> "How to..." content that teaches something valuable in 15-30 seconds</li>
                <li><strong>2. Mistake-based content:</strong> "Stop doing X, do Y instead" - people love learning what NOT to do</li>
                <li><strong>3. Before/After transformations:</strong> Show results, progress, or change over time</li>
                <li><strong>4. Lists & carousels:</strong> "5 ways to...", "7 tips for..." - easy to save and reference</li>
                <li><strong>5. Behind-the-scenes:</strong> Show your process, daily life, or how you create</li>
                <li><strong>6. Relatable memes:</strong> Niche-specific humor that gets shared</li>
                <li><strong>7. Controversial takes:</strong> (Used carefully) Spark discussion with hot takes</li>
              </ol>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Posting Frequency & Consistency</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Consistency beats perfection. The algorithm rewards accounts that post regularly.
            </p>

            <div className="bg-yellow-50 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Optimal Posting Schedule:</h4>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Reels:</strong> 3-5 per week minimum (daily is ideal for fastest growth)</li>
                <li><strong>Feed Posts:</strong> 2-3 per week</li>
                <li><strong>Stories:</strong> Daily (5-10 stories per day)</li>
                <li><strong>Carousels:</strong> 1-2 per week</li>
              </ul>
              <p className="text-sm text-yellow-700 mt-4 font-semibold">
                Quality matters, but so does quantity. Find your sustainable pace and stick to it.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Algorithm Optimization Tactics</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Maximize Reels Reach</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Reels are the fastest way to grow in 2025. Here's how to optimize them:
            </p>

            <div className="bg-white rounded-xl border-2 border-blue-200 p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Reels Growth Checklist:</h4>
              <ul className="space-y-3 text-gray-700">
                <li>✅ <strong>Hook in first 1 second:</strong> Stop the scroll immediately</li>
                <li>✅ <strong>Use trending audio:</strong> Check Reels tab for what's popular</li>
                <li>✅ <strong>Keep it short:</strong> 7-15 seconds performs best for reach</li>
                <li>✅ <strong>Add captions:</strong> 85% watch without sound</li>
                <li>✅ <strong>High-quality video:</strong> Good lighting, steady shots, clear audio</li>
                <li>✅ <strong>No watermarks:</strong> Don't repost from TikTok with logo</li>
                <li>✅ <strong>Include CTA:</strong> Tell viewers what to do (follow, save, share)</li>
                <li>✅ <strong>Post at peak times:</strong> When your audience is most active</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hashtag Strategy That Works</h3>

            <div className="bg-indigo-50 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-3">2025 Hashtag Formula:</h4>
              <p className="text-gray-700 mb-4">
                Use 5-10 strategic hashtags (not 30). Mix these categories:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>2-3 niche hashtags</strong> (10K-100K posts) - your specific topic</li>
                <li>• <strong>2-3 medium hashtags</strong> (100K-500K posts) - broader but relevant</li>
                <li>• <strong>1-2 large hashtags</strong> (1M+ posts) - more competitive but more reach</li>
                <li>• <strong>1-2 branded hashtags</strong> - your unique tags</li>
              </ul>
              <p className="text-sm text-indigo-600 mt-4">
                <strong>Pro tip:</strong> Create 5 hashtag sets and rotate them to avoid looking spammy
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Engagement Strategies</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The First Hour Is Critical</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Instagram measures early engagement to determine if your content should reach more people.
            </p>

            <div className="bg-orange-50 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-3">First Hour Action Plan:</h4>
              <ol className="space-y-2 text-gray-700">
                <li>1. <strong>Post when your audience is active</strong> (check Instagram Insights)</li>
                <li>2. <strong>Share to Stories immediately</strong> with engaging sticker (poll, question)</li>
                <li>3. <strong>Engage with comments quickly</strong> - reply to every comment in first hour</li>
                <li>4. <strong>Send to close friends/DMs</strong> - ask them to engage</li>
                <li>5. <strong>Engage with other accounts</strong> - algorithm favors active users</li>
              </ol>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Engagement Pods & Communities (Use Wisely)</h3>

            <div className="bg-red-50 rounded-xl p-6 mb-8 border-2 border-red-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">⚠️ The Reality of Engagement Pods</h4>
              <p className="text-gray-700 mb-4">
                Engagement pods can provide initial momentum but have risks:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✅ <strong>Benefits:</strong> Boost early engagement, increase visibility</li>
                <li>❌ <strong>Risks:</strong> Can look inauthentic, time-consuming, algorithm may detect</li>
              </ul>
              <p className="text-sm text-red-700 mt-4 font-semibold">
                Better alternative: Build a small community of genuine supporters in your niche
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The 1-Hour Rule for Engagement</h3>

            <div className="bg-teal-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 mb-4">
                Spend 1 hour engaging with others for every 1 hour creating content.
              </p>
              <h4 className="text-lg font-bold text-gray-900 mb-3">What to Do in Your Engagement Hour:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Comment on 20-30 posts in your niche (thoughtful, 5+ word comments)</li>
                <li>• Reply to all DMs and comments on your content</li>
                <li>• Engage with your followers' content</li>
                <li>• Participate in trending conversations</li>
                <li>• Follow 5-10 new accounts in your niche daily</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Collaboration & Community Building</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Strategic Collaborations</h3>

            <div className="bg-white rounded-xl border-2 border-green-200 p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Types of Collaborations:</h4>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Collab Posts:</strong> Co-create content that appears on both profiles</li>
                <li><strong>Shoutout exchanges:</strong> Recommend each other to audiences</li>
                <li><strong>Guest takeovers:</strong> Let someone manage your Stories for a day</li>
                <li><strong>Joint Lives:</strong> Go live together to cross-pollinate audiences</li>
                <li><strong>Challenge participation:</strong> Create or join niche challenges</li>
              </ul>
              <p className="text-sm text-green-600 mt-4">
                <strong>Target accounts:</strong> 1.5-3x your size with similar audience
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Build a Community, Not Just Followers</h3>

            <div className="bg-purple-50 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Community Building Tactics:</h4>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Create a branded hashtag:</strong> Encourage followers to use it</li>
                <li><strong>Feature follower content:</strong> Share UGC (user-generated content) to Stories</li>
                <li><strong>Host Q&A sessions:</strong> Weekly question stickers or Lives</li>
                <li><strong>Create inside jokes/references:</strong> Things only your community gets</li>
                <li><strong>Recognize loyal followers:</strong> Shout them out, reply to their comments</li>
                <li><strong>Be consistent in voice/values:</strong> People follow personalities, not just content</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Advanced Growth Tactics</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Leverage Instagram Features</h3>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Use Every Instagram Feature:</h4>
              <p className="text-gray-700 mb-4">
                Instagram prioritizes accounts that use new features. Utilize:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✅ <strong>Reels:</strong> Highest reach potential</li>
                <li>✅ <strong>Stories:</strong> Daily engagement tool</li>
                <li>✅ <strong>Live videos:</strong> Sends notifications to followers</li>
                <li>✅ <strong>Carousels:</strong> Great for educational content</li>
                <li>✅ <strong>Guides:</strong> Curate your best content</li>
                <li>✅ <strong>Notes:</strong> New feature for close friends updates</li>
                <li>✅ <strong>Broadcast channels:</strong> One-to-many messaging</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cross-Platform Promotion</h3>

            <div className="bg-yellow-50 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Grow Instagram from Other Platforms:</h4>
              <ul className="space-y-3 text-gray-700">
                <li><strong>TikTok:</strong> Post Reels there too, add "Follow me on IG" CTA</li>
                <li><strong>YouTube:</strong> Mention Instagram in videos, add link in description</li>
                <li><strong>Pinterest:</strong> Pin images that link to your Instagram</li>
                <li><strong>Email list:</strong> Regular reminders to follow your Instagram</li>
                <li><strong>Twitter/X:</strong> Share Instagram content, tease upcoming posts</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Power of Stories for Growth</h3>

            <div className="bg-pink-50 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Stories Strategy for Conversion:</h4>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Show your face:</strong> People follow people, not logos</li>
                <li><strong>Use interactive stickers:</strong> Polls, questions, quizzes keep people engaged</li>
                <li><strong>Tease content:</strong> Preview upcoming posts to build anticipation</li>
                <li><strong>Share Reels to Stories:</strong> Get double exposure for your content</li>
                <li><strong>Story series:</strong> "Day in the life", tutorials, weekly features</li>
                <li><strong>Link stickers:</strong> Drive traffic to external content or lead magnets</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What NOT to Do (Growth Killers)</h2>

            <div className="bg-red-50 rounded-2xl p-8 mb-12 border-2 border-red-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Avoid These Mistakes</h3>
              <ul className="space-y-3 text-gray-700">
                <li>❌ <strong>Buying followers:</strong> Ruins engagement rate, algorithm penalizes fake engagement</li>
                <li>❌ <strong>Using banned hashtags:</strong> Limits your reach, check hashtags before using</li>
                <li>❌ <strong>Posting inconsistently:</strong> Confuses algorithm and followers</li>
                <li>❌ <strong>Ignoring comments:</strong> Hurts engagement and community building</li>
                <li>❌ <strong>Only promoting yourself:</strong> No one wants constant sales pitches</li>
                <li>❌ <strong>Copying competitors exactly:</strong> Algorithm favors original content</li>
                <li>❌ <strong>Using bots/automation:</strong> Against TOS, can get you banned</li>
                <li>❌ <strong>Posting low-quality content:</strong> One bad post can hurt your reach for days</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">30-Day Growth Sprint</h2>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow This 30-Day Plan</h3>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h4 className="font-bold mb-2">Week 1: Foundation</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Optimize profile completely</li>
                    <li>• Create 5 hashtag sets</li>
                    <li>• Post 3 Reels + Daily Stories</li>
                    <li>• Engage 1 hour daily</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Week 2: Consistency</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Post 4-5 Reels this week</li>
                    <li>• Test different content types</li>
                    <li>• Reply to every comment</li>
                    <li>• Reach out to 5 collab partners</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Week 3: Optimization</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Analyze what's working (check Insights)</li>
                    <li>• Double down on best-performing content</li>
                    <li>• Start 1 collaboration</li>
                    <li>• Create Story series</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Week 4: Acceleration</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Post 5-7 Reels (daily posting)</li>
                    <li>• Host a Live or Q&A</li>
                    <li>• Launch a small giveaway or challenge</li>
                    <li>• Measure growth and set new goals</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Measuring Your Growth Success</h2>

            <div className="bg-green-50 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Track These Metrics Weekly:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Follower growth rate:</strong> Net new followers (gained - lost)</li>
                <li>• <strong>Engagement rate:</strong> Should stay above 2% as you grow</li>
                <li>• <strong>Reach growth:</strong> Are you reaching more non-followers?</li>
                <li>• <strong>Profile visits:</strong> Indicator of discovery</li>
                <li>• <strong>Top-performing content:</strong> What's driving growth?</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Key Takeaways</h2>

            <div className="bg-blue-50 rounded-2xl p-8 mb-12">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span><strong>Growth takes time and consistency</strong> - Most successful accounts took 6-12 months to hit momentum</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span><strong>Quality followers quantity</strong> - 1,000 engaged followers beat 10,000 ghosts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span><strong>Reels are your growth engine</strong> - Focus 80% of effort here in 2025</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span><strong>Engagement is a two-way street</strong> - Give value and engage to receive</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span><strong>Build community, not just audience</strong> - Loyal followers drive long-term success</span>
                </li>
              </ul>
            </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mt-12">
                          <h2 className="text-2xl font-bold mb-4">Start Growing Today</h2>
                          <p className="text-blue-100 mb-6">
                            Instagram growth in 2025 is about providing value, being consistent, and building genuine connections. Start with the 30-day sprint, 
                            focus on Reels, and engage authentically with your community.
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
            
                  <Footer />
                </main>
              );
            }