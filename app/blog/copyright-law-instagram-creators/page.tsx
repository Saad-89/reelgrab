// app/blog/copyright-law-instagram-creators/page.tsx
import Link from 'next/link';
import { Video, ArrowLeft, Scale, Shield, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Copyright Law 101 for Instagram Creators | Complete Legal Guide',
  description: 'Essential copyright guide for Instagram creators. Learn fair use, DMCA, content protection, and how to stay legally compliant in 2025.',
  keywords: ['Instagram copyright', 'content creator legal guide', 'copyright law', 'fair use Instagram', 'DMCA', 'intellectual property'],
};

export default function CopyrightLawBlogPost() {
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
            <span className="inline-block px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-4 flex items-center gap-2 w-fit">
              <Scale className="w-4 h-4" />
              Legal Guide
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              Copyright Law 101: What Every Instagram Creator Should Know
            </h1>
            <p className="text-xl text-gray-600">
              Essential legal knowledge to protect your content and stay compliant
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
              <span>January 3, 2025</span>
              <span>•</span>
              <span>15 min read</span>
            </div>
          </div>

          <div className="h-96 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-12">
            <span className="text-9xl">⚖️</span>
          </div>

          <div className="prose prose-lg max-w-none">
            
            <div className="bg-red-50 rounded-2xl p-8 mb-12 border-2 border-red-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                Why This Matters
              </h3>
              <p className="text-gray-700 leading-relaxed">
                As an Instagram creator, understanding copyright law isn't optional—it's essential. One copyright strike can shut down your account. 
                One lawsuit can cost thousands of dollars. This guide will teach you everything you need to know to create content legally and protect your own work.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What is Copyright?</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Copyright is a form of intellectual property protection that gives creators exclusive rights to their original works. 
              The moment you create original content—whether it's a photo, video, music, or text—you automatically own the copyright to it.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Copyright Protects</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Original photographs and images:</strong> Any photo you take is automatically copyrighted</li>
              <li><strong>Videos and Reels:</strong> Your video content, including editing and creative choices</li>
              <li><strong>Music and audio:</strong> Original songs, beats, and audio compositions</li>
              <li><strong>Written content:</strong> Captions, scripts, blog posts, and other text</li>
              <li><strong>Artistic works:</strong> Drawings, graphics, animations, and designs</li>
            </ul>

            <div className="bg-blue-50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Fact</h3>
              <p className="text-gray-700 leading-relaxed">
                You don't need to register your work or include a © symbol for it to be copyrighted. Copyright protection is automatic from the moment of creation. 
                However, registration with the U.S. Copyright Office provides additional legal benefits if you ever need to sue for infringement.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Copyright on Instagram: The Basics</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Who Owns Instagram Content?</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              This is crucial to understand: <strong>YOU own the copyright to content you create and post on Instagram.</strong> Instagram's terms of service don't 
              transfer ownership to them. However, by posting, you do grant Instagram a license to use, distribute, and display your content on their platform.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What You CAN'T Do on Instagram</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Use copyrighted music without permission:</strong> Even 5 seconds can get you flagged</li>
              <li><strong>Repost others' photos/videos:</strong> Without explicit permission from the creator</li>
              <li><strong>Use branded logos or trademarks:</strong> Without authorization from the brand</li>
              <li><strong>Screen-record and share others' Stories:</strong> This violates both copyright and privacy</li>
              <li><strong>Use celebrity photos:</strong> Professional photos of celebrities are copyrighted by photographers</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Fair Use: The Most Misunderstood Concept</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              "Fair use" is probably the most misused term in content creation. Many creators think adding commentary or criticism automatically makes something fair use. That's not how it works.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Four Fair Use Factors</h3>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Courts consider four factors when determining fair use:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">1. Purpose and Character of Use</h4>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Question:</strong> Are you transforming the work or just copying it?
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  <strong>Good:</strong> Creating a parody, educational content, commentary, criticism, news reporting
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  <strong>Bad:</strong> Simply reposting for entertainment or commercial purposes
                </p>
              </div>

              <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">2. Nature of the Copyrighted Work</h4>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Question:</strong> Is the original work creative or factual?
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Fair use is more likely for factual works (news, documentaries) than creative works (music, movies, art).
                </p>
              </div>

              <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">3. Amount and Substantiality Used</h4>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Question:</strong> How much of the original work did you use?
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Using less is better, but even short clips can be infringement if they're the "heart" of the work. There's no "5-second rule" or "30-second rule"—that's a myth.
                </p>
              </div>

              <div className="bg-white rounded-xl border-2 border-gray-200 p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">4. Effect on Market Value</h4>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Question:</strong> Does your use harm the market for the original?
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  If people watch your version instead of the original, or if you're making money from it, this factor weighs against fair use.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-8 mb-12 border-2 border-yellow-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
                Important Warning
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Fair use is a legal defense, not a right.</strong> It only matters if you're sued and go to court. Instagram and other platforms can still remove your content 
                or ban your account even if you believe it's fair use. Always get permission when possible.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The DMCA and How It Works</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The Digital Millennium Copyright Act (DMCA) is the law that governs copyright infringement online. Here's what you need to know:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Copyright Strikes on Instagram</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>First Strike:</strong> Content removed, warning issued</li>
              <li><strong>Second Strike:</strong> Temporary account restrictions</li>
              <li><strong>Third Strike:</strong> Account permanently disabled</li>
              <li><strong>Repeat Offenders:</strong> Instagram may disable your account after just one strike if you have a history</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">If You Receive a Copyright Strike</h3>
            <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Don't panic:</strong> Review what content was flagged</li>
              <li><strong>Assess legitimacy:</strong> Was the claim valid?</li>
              <li><strong>Remove content:</strong> Delete the infringing post immediately</li>
              <li><strong>Submit counter-notice:</strong> Only if you truly believe you have rights to the content</li>
              <li><strong>Learn from it:</strong> Adjust your content strategy to avoid future strikes</li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How to Protect Your Own Content</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Best Practices for Content Protection</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Watermark your work:</strong> Add subtle branding to photos and videos</li>
              <li><strong>Register important works:</strong> File with U.S. Copyright Office for legal benefits</li>
              <li><strong>Document creation:</strong> Keep original files and timestamps</li>
              <li><strong>Use copyright notices:</strong> Include © [Year] [Your Name] in bios and posts</li>
              <li><strong>Monitor for theft:</strong> Use reverse image search and content monitoring tools</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What to Do If Someone Steals Your Content</h3>
            <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Document the infringement:</strong> Screenshots, URLs, dates</li>
              <li><strong>Contact the infringer:</strong> Politely request removal</li>
              <li><strong>File a DMCA takedown:</strong> Use Instagram's copyright reporting form</li>
              <li><strong>Consider legal action:</strong> For serious cases, consult an attorney</li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Using Music on Instagram Legally</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Music copyright is one of the trickiest areas on Instagram. Here's what you need to know:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Safe Music Options</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Instagram's Music Library:</strong> Pre-cleared for use in Stories and Reels</li>
              <li><strong>Royalty-free music:</strong> Sites like Epidemic Sound, Artlist, AudioJungle</li>
              <li><strong>Creative Commons music:</strong> Check licenses carefully (some require attribution)</li>
              <li><strong>Original compositions:</strong> Create your own or hire a composer</li>
              <li><strong>Licensed music:</strong> Purchase sync licenses for specific tracks</li>
            </ul>

            <div className="bg-red-50 rounded-2xl p-8 mb-12 border-2 border-red-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Music Myths Debunked</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Myth:</strong> "If I use less than 30 seconds, it's okay" – FALSE</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Myth:</strong> "Giving credit makes it legal" – FALSE</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Myth:</strong> "If there's no copyright symbol, it's free" – FALSE</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Myth:</strong> "I can use any music if I'm not making money" – FALSE</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">When You CAN Use Others' Content</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Legitimate Ways to Share Content</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Get explicit permission:</strong> DM the creator and get written consent</li>
              <li><strong>Use Instagram's built-in sharing:</strong> Share to Stories (gives credit automatically)</li>
              <li><strong>License content:</strong> Pay for rights through stock photo/video sites</li>
              <li><strong>Use public domain works:</strong> Content with expired copyrights</li>
              <li><strong>Create original content:</strong> Film your own footage, take your own photos</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Legal Downloading and Content Saving</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Many creators wonder about downloading Instagram content for personal use, inspiration, or analysis. Here's the legal perspective:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">When Downloading is Acceptable</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Personal study and analysis:</strong> Studying successful Reels to improve your own content</li>
              <li><strong>Educational purposes:</strong> Teaching content creation or marketing classes</li>
              <li><strong>Portfolio building:</strong> Saving examples of your collaborations (with permission)</li>
              <li><strong>Backup your own content:</strong> Downloading your own posts for safekeeping</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What You Must NEVER Do</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Repost without permission:</strong> Even with credit</li>
              <li><strong>Use for commercial purposes:</strong> In ads, products, or services</li>
              <li><strong>Claim as your own:</strong> Removing watermarks or credits</li>
              <li><strong>Distribute or sell:</strong> Sharing downloads with others</li>
            </ul>

            <div className="bg-green-50 rounded-2xl p-8 mb-12 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                Best Practice
              </h3>
              <p className="text-gray-700 leading-relaxed">
                If you download content for inspiration or analysis, keep it private. Use it to study techniques, understand trends, and improve your own work. 
                Never republish or share downloaded content without explicit permission from the creator. When in doubt, ask for permission—most creators are happy to help!
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Copyright Checklist for Creators</h2>

            <div className="bg-white rounded-xl border-2 border-gray-200 p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Before Posting, Ask Yourself:</h3>
              <div className="space-y-3">
                <label className="flex items-start gap-3 text-gray-700">
                  <input type="checkbox" className="mt-1" />
                  <span>Did I create this content myself, or do I have permission to use it?</span>
                </label>
                <label className="flex items-start gap-3 text-gray-700">
                  <input type="checkbox" className="mt-1" />
                  <span>If using music, is it from Instagram's library or properly licensed?</span>
                </label>
                <label className="flex items-start gap-3 text-gray-700">
                  <input type="checkbox" className="mt-1" />
                  <span>Have I credited all collaborators and creators involved?</span>
                </label>
                <label className="flex items-start gap-3 text-gray-700">
                  <input type="checkbox" className="mt-1" />
                  <span>Am I using anyone else's photos, videos, or artwork?</span>
                </label>
                <label className="flex items-start gap-3 text-gray-700">
                  <input type="checkbox" className="mt-1" />
                  <span>Would I be comfortable if someone used my content this way?</span>
                </label>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Key Takeaways</h2>

            <div className="bg-blue-50 rounded-2xl p-8 mb-12">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span><strong>Copyright is automatic</strong> – You own what you create from the moment of creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span><strong>Fair use is complex</strong> – Don't rely on it; get permission instead</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span><strong>Three strikes = account loss</strong> – Take copyright seriously on Instagram</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span><strong>Music has special rules</strong> – Use Instagram's library or licensed music</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span><strong>Always ask permission</strong> – When in doubt, get explicit consent</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span><strong>Protect your own work</strong> – Watermark and monitor for theft</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mt-12">
              <h2 className="text-2xl font-bold mb-4">Stay Legally Compliant</h2>
              <p className="text-blue-100 mb-6">
                Understanding copyright law protects both you and other creators. When in doubt, create original content or get explicit permission. 
                Your Instagram account and creative career are too valuable to risk on copyright violations.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/disclaimer" 
                  className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all"
                >
                  Read Our Disclaimer
                </Link>
                <Link 
                  href="/blog" 
                  className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-400 transition-all"
                >
                  More Legal Guides
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