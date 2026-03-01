import Link from 'next/link';
import { Video, ArrowLeft, Clock, User, ChevronRight } from 'lucide-react';
import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'How to Build a Personal Brand on Instagram from Scratch in 2025 | ReelGrab',
    description: 'Step-by-step guide to building a powerful personal brand on Instagram in 2025. Covers niche selection, consistent aesthetic, content pillars, and how to position yourself as an authority.',
    keywords: ['personal brand instagram', 'how to build personal brand', 'instagram personal branding 2025', 'instagram brand building'],
    alternates: { canonical: 'https://reelgrab.site/blog/personal-brand-instagram' },
};

export default function PersonalBrandInstagramPage() {
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
                    <nav className="hidden md:flex gap-6 text-sm font-medium">
                        <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
                        <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</Link>
                        <Link href="/guides" className="text-gray-600 hover:text-blue-600 transition-colors">Guides</Link>
                    </nav>
                </div>
            </header>

            <article className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                        <Link href="/" className="hover:text-blue-600">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-gray-700">Personal Brand on Instagram</span>
                    </nav>

                    <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <div className="mb-8">
                        <span className="inline-block px-3 py-1 bg-violet-50 text-violet-600 rounded-full text-sm font-semibold mb-4">Personal Branding</span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                            How to Build a Personal Brand on Instagram from Scratch in 2025
                        </h1>
                        <p className="text-xl text-gray-600 mb-6">
                            Your personal brand is what people say about you when you're not in the room. Here's how to shape that conversation intentionally — starting from zero followers.
                        </p>
                        <div className="flex items-center gap-6 text-gray-500 text-sm">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>ReelGrab Editorial Team</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>13 min read</span></div>
                            <time dateTime="2025-01-05">January 5, 2025</time>
                        </div>
                    </div>

                    <div className="mb-12 rounded-2xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&auto=format&fit=crop&q=80"
                            alt="Person sitting at a desk working on their laptop building their brand"
                            className="w-full h-80 object-cover"
                        />
                    </div>

                    <div className="bg-violet-50 rounded-2xl p-6 mb-12 border border-violet-100">
                        <h2 className="font-bold text-gray-900 mb-4 text-lg">📋 Table of Contents</h2>
                        <ol className="space-y-2 text-violet-700 text-sm">
                            <li><a href="#what-is-personal-brand" className="hover:underline">1. What a Personal Brand Actually Is</a></li>
                            <li><a href="#niche" className="hover:underline">2. Finding Your Niche and Audience</a></li>
                            <li><a href="#positioning" className="hover:underline">3. Your Unique Positioning Statement</a></li>
                            <li><a href="#visual-identity" className="hover:underline">4. Building a Consistent Visual Identity</a></li>
                            <li><a href="#content-pillars" className="hover:underline">5. Defining Your Content Pillars</a></li>
                            <li><a href="#bio" className="hover:underline">6. Crafting a Bio That Converts</a></li>
                            <li><a href="#voice" className="hover:underline">7. Developing a Recognizable Voice</a></li>
                            <li><a href="#authority" className="hover:underline">8. Building Authority and Trust Over Time</a></li>
                        </ol>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-xl text-gray-700 leading-relaxed mb-8">
                            When I first started posting on Instagram, I had no clear idea what my "brand" was. I posted workout photos one week, travel content the next, and random thoughts the week after. My follower count was stuck below 200 for months. When I finally got intentional about my personal brand, everything changed — not just on Instagram, but in how people perceived me professionally.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Building a personal brand isn't about being fake or curated to the point of inauthenticity. It's about being <em>intentionally yourself</em> — choosing which aspects of who you are to amplify, and doing it consistently. Here's the framework I use.
                        </p>

                        <h2 id="what-is-personal-brand" className="text-3xl font-bold text-gray-900 mt-12 mb-6">1. What a Personal Brand Actually Is (and Isn't)</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            A personal brand is the combination of your expertise, personality, values, and visual identity that makes you recognizable and trustworthy to a specific audience. It's not a logo or a color palette — those are just expressions of it. The brand itself is the reputation you build, the associations people form when they hear your name.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Jeff Bezos famously said, "Your brand is what people say about you when you're not in the room." On Instagram, your brand is what someone thinks when they see your profile for the first time — in about 3-5 seconds. That first impression should immediately communicate: <em>who you are, who you help, and why they should stay.</em>
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            A personal brand is NOT:
                        </p>
                        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                            <li>A fake version of yourself designed for maximum appeal</li>
                            <li>Just aesthetic (color palettes, fonts, feed grids)</li>
                            <li>Something you build once and never revisit</li>
                            <li>Only relevant if you're trying to be "famous"</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Even if your goal is simply to grow a business or become known in your industry, personal branding on Instagram gives you massive leverage.
                        </p>

                        <h2 id="niche" className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. Finding Your Niche and Your Audience</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The number one mistake new personal brand builders make is trying to appeal to everyone. When you try to talk to everyone, you connect with no one. Niching down feels scary — "what if I miss out on followers?" — but the opposite is true. The more specific you are, the faster you grow, because your message resonates deeply with the exact people it's meant for.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Here's a framework to find your niche:
                        </p>
                        <div className="bg-violet-50 rounded-xl p-6 mb-8 border border-violet-100">
                            <h3 className="font-bold text-gray-900 mb-4">The 3-Circle Exercise</h3>
                            <p className="text-gray-700 mb-3 text-sm">Draw three overlapping circles. In each, write:</p>
                            <ul className="space-y-2 text-gray-700 text-sm">
                                <li><strong>Circle 1 — What you're good at:</strong> Skills, expertise, experience you've built over time</li>
                                <li><strong>Circle 2 — What you genuinely enjoy talking/thinking about:</strong> Topics you could discuss for hours without getting bored</li>
                                <li><strong>Circle 3 — What an audience actually wants:</strong> Problems people are trying to solve, questions they're searching for</li>
                            </ul>
                            <p className="text-gray-700 mt-3 text-sm"><strong>Your niche lives where all three overlap.</strong></p>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Once you identify this intersection, get specific. "Fitness" is too broad. "Strength training for women over 40" is a niche. "Sustainable fashion for women on a budget" beats both "fashion" and "sustainable fashion." Specificity creates recognition.
                        </p>

                        <h2 id="positioning" className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. Your Unique Positioning Statement</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Before you post a single Reel, you should be able to complete this sentence:
                        </p>
                        <blockquote className="border-l-4 border-violet-500 pl-6 my-8 italic text-gray-700 text-lg">
                            "I help [specific audience] achieve [specific outcome] through [specific approach/method]."
                        </blockquote>
                        <p className="text-gray-700 leading-relaxed mb-4">Examples of strong positioning statements:</p>
                        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                            <li>"I help first-generation college students navigate the job search without a traditional network."</li>
                            <li>"I help home cooks create restaurant-quality pasta dishes using affordable ingredients."</li>
                            <li>"I help solopreneur designers land premium clients without a big portfolio."</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            This statement becomes the backbone of everything — your bio, your content ideas, how you speak in captions, what you say in Reels. When you're clear on your positioning, creating content becomes dramatically easier because you always know what angle to take.
                        </p>

                        <h2 id="visual-identity" className="text-3xl font-bold text-gray-900 mt-12 mb-6">4. Building a Consistent Visual Identity</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Your visual identity is what makes your content instantly recognizable even before someone reads your name. It includes colors, fonts, overlays, camera style, and even your typical backdrop or setting.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You don't need expensive equipment to build a strong visual identity. Here's what matters:
                        </p>
                        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
                            <li><strong>Choose 2-3 signature colors</strong> that align with your brand personality (cool blues = trustworthy/professional; warm oranges = energetic/creative; earth tones = authentic/grounded)</li>
                            <li><strong>Pick one or two fonts</strong> for text overlays and stick with them across all Reels</li>
                            <li><strong>Shoot consistently</strong> — same type of lighting, similar backgrounds. An indoor creator who always shoots near a window with natural light becomes recognizable from frame one</li>
                            <li><strong>Develop a signature element</strong> — something that's uniquely yours. It could be an opening catchphrase, a recurring B-roll shot, a text style, or even how you frame yourself on camera</li>
                        </ul>

                        <h2 id="content-pillars" className="text-3xl font-bold text-gray-900 mt-12 mb-6">5. Defining Your Content Pillars</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Content pillars are 3-5 broad themes that all your content falls under. They ensure variety without randomness — every post serves your brand even when the topic changes.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            For example, if you're a freelance graphic designer building a personal brand, your pillars might be:
                        </p>
                        <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                            <li><strong>Design tips and tutorials</strong> (education — drives saves and shares)</li>
                            <li><strong>Behind-the-scenes of client work</strong> (social proof — builds trust)</li>
                            <li><strong>Your creative process and tools</strong> (authority — positions expertise)</li>
                            <li><strong>Business side of freelancing</strong> (relatability — attracts your target client who's also building)</li>
                            <li><strong>Personal stories and values</strong> (connection — makes you memorable as a person, not just a skill)</li>
                        </ol>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            With 5 pillars, you always have direction for your next Reel without starting from scratch. Create a content calendar that rotates through your pillars so your audience gets variety while your brand stays coherent.
                        </p>

                        <h2 id="bio" className="text-3xl font-bold text-gray-900 mt-12 mb-6">6. Crafting a Bio That Converts Visitors to Followers</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Your Instagram bio has one job: convert a new visitor into a follower or lead. You have 150 characters — enough to make a strong impression if you're intentional about every word.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">A strong bio includes:</p>
                        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                            <li><strong>Who you help</strong> — specific, not generic</li>
                            <li><strong>What you help them with</strong> — the outcome or transformation</li>
                            <li><strong>A credibility signal</strong> — a number, achievement, or recognition</li>
                            <li><strong>A call to action</strong> — tell people what to do next (follow, click link, DM)</li>
                        </ul>
                        <div className="bg-gray-50 rounded-xl p-5 mb-8 border border-gray-200">
                            <p className="font-bold text-gray-900 mb-2">Example of a weak bio:</p>
                            <p className="text-gray-600 italic text-sm">"Fitness coach 💪 Helping you get healthy 🌿 DM for info"</p>
                            <p className="font-bold text-gray-900 mt-4 mb-2">Transformed into a strong bio:</p>
                            <p className="text-gray-700 text-sm">"Strength training coach for women 40+ 💪<br />Lost 40lbs at age 43 — now teaching 2K+ women how<br />📥 Free Workout Plan → link below"</p>
                        </div>

                        <h2 id="voice" className="text-3xl font-bold text-gray-900 mt-12 mb-6">7. Developing a Recognizable Voice</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Your voice is how you sound — in captions, in Reels, in comments. It's the personality behind the words. Voice is often even more important than visual identity for building a loyal audience, because people follow <em>people</em>, not aesthetics.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            To develop your voice, ask yourself:
                        </p>
                        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                            <li>What words and phrases do I naturally use when talking about my topic?</li>
                            <li>How do I talk to a close friend about this subject? (That's often your authentic voice right there.)</li>
                            <li>What's my personality like in real life — serious and analytical? Warm and encouraging? Witty and self-deprecating? Lean into that in your content.</li>
                        </ul>

                        <h2 id="authority" className="text-3xl font-bold text-gray-900 mt-12 mb-6">8. Building Authority and Trust Over Time</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Building a recognizable personal brand takes 3-6 months of consistent effort before it truly starts to compound. In the meantime, here are the most effective trust-builders:
                        </p>
                        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
                            <li><strong>Show results:</strong> Your own transformations, client outcomes, before/afters — proof that your approach works is more powerful than any claim</li>
                            <li><strong>Be transparent about your journey:</strong> Documenting your path (including failures) makes you human and relatable, and it builds genuine trust faster than only showing wins</li>
                            <li><strong>Engage deeply:</strong> Reply to every comment. DM people who share your content. Comment thoughtfully on others in your niche. Community = credibility</li>
                            <li><strong>Collaborate:</strong> One well-placed collab with a respected creator in your space can add more authority than months of solo posting</li>
                            <li><strong>Be consistent:</strong> Nothing builds trust like showing up reliably. Set a schedule you can maintain and hold it.</li>
                        </ul>

                        <div className="bg-violet-50 rounded-2xl p-8 mt-12 border border-violet-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">🚀 Your Personal Brand Action Plan</h3>
                            <ol className="space-y-2 text-gray-700 text-sm list-decimal pl-5">
                                <li>This week: Do the 3-Circle niche exercise. Write your positioning statement.</li>
                                <li>Next week: Define your content pillars and rewrite your bio.</li>
                                <li>Week 3: Choose your visual identity elements (colors, fonts, shooting style).</li>
                                <li>Week 4: Post your first 3 Reels using all of the above — one from each of your top content pillars.</li>
                                <li>Month 2: Analyze performance, adjust voice based on what resonates, and repeat.</li>
                            </ol>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6 mt-12 border border-gray-200 flex gap-4">
                            <div className="w-14 h-14 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <User className="w-7 h-7 text-violet-600" />
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">ReelGrab Editorial Team</p>
                                <p className="text-gray-600 text-sm mt-1">We've helped hundreds of creators figure out their positioning and build recognizable personal brands. The principles here are consistent regardless of niche.</p>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <Link href="/blog/viral-reels-tips" className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all group">
                                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">Content</span>
                                    <h4 className="font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors text-sm">12 Proven Viral Reels Strategies</h4>
                                </Link>
                                <Link href="/blog/instagram-reels-monetization-guide" className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all group">
                                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">Monetization</span>
                                    <h4 className="font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors text-sm">Complete Instagram Monetization Guide</h4>
                                </Link>
                                <Link href="/blog/content-ideas-2025" className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all group">
                                    <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">Ideas</span>
                                    <h4 className="font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors text-sm">100 Content Ideas for Instagram 2025</h4>
                                </Link>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 mt-12 text-white text-center">
                            <h3 className="text-2xl font-bold mb-3">Study Top Creators in Your Space</h3>
                            <p className="text-violet-100 mb-6">Download Reels from successful creators to study their visual identity, content pillars, and brand voice — then develop your own unique angle.</p>
                            <Link href="/" className="inline-block bg-white text-violet-600 font-semibold px-8 py-3 rounded-xl hover:bg-violet-50 transition-all">
                                Try ReelGrab Free
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </main>
    );
}
