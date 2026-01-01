import Link from 'next/link';
import { Video, HelpCircle, Mail } from 'lucide-react';
import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Instagram Reels Download | ReelGrab',
  description: 'Get answers to common questions about downloading Instagram Reels. Learn about video quality, privacy, legal use, and troubleshooting.',
};

export default function FAQPage() {
  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "Is ReelGrab completely free to use?",
          a: "Yes! ReelGrab is 100% free with no hidden costs, subscriptions, or premium features. You can download unlimited Instagram Reels without paying anything."
        },
        {
          q: "Do I need to create an account?",
          a: "No account needed! Simply paste your Instagram Reel URL and download instantly. We don't require registration, login, or any personal information."
        },
        {
          q: "How do I copy an Instagram Reel URL?",
          a: "Open Instagram, find the Reel you want, tap the three dots (...) button, and select 'Copy Link'. Then paste this link into ReelGrab's download box."
        },
        {
          q: "Does ReelGrab work on mobile devices?",
          a: "Absolutely! ReelGrab works perfectly on all devices including iPhone, Android phones, tablets, and desktop computers. Just open reelgrab.site in your mobile browser."
        }
      ]
    },
    {
      category: "Download Quality & Features",
      questions: [
        {
          q: "What video quality can I download?",
          a: "ReelGrab downloads videos in the highest quality available from Instagram, up to 4K resolution when available. The quality depends on what the original creator uploaded."
        },
        {
          q: "Will there be a watermark on downloaded videos?",
          a: "No watermarks! Your downloaded videos will be clean and original without any ReelGrab branding or watermarks."
        },
        {
          q: "How long does it take to download a Reel?",
          a: "Usually just 3-10 seconds depending on the video size and your internet connection speed. Most downloads complete in under 5 seconds."
        },
        {
          q: "Can I download multiple Reels at once?",
          a: "Currently, you need to download Reels one at a time. This ensures the best quality and fastest download speeds for each video."
        }
      ]
    },
    {
      category: "Privacy & Restrictions",
      questions: [
        {
          q: "Can I download private Instagram Reels?",
          a: "No, only public Reels can be downloaded. Private accounts and private Reels cannot be accessed due to Instagram's privacy settings. You must be following a private account and have permission to view their content."
        },
        {
          q: "Do you store the videos I download?",
          a: "No, we never store any videos on our servers. All downloads are streamed directly from Instagram to your device. We respect your privacy and don't track what you download."
        },
        {
          q: "Is my download history saved?",
          a: "No, we don't save any download history. Each download is completely anonymous and private."
        },
        {
          q: "Do I need to log into Instagram?",
          a: "No Instagram login required! Simply paste the public Reel URL and download. We don't ask for your Instagram credentials or any personal information."
        }
      ]
    },
    {
      category: "Legal & Usage",
      questions: [
        {
          q: "Is it legal to download Instagram Reels?",
          a: "You can download public Reels for personal use, education, or research. Always respect copyright laws and the original creator's rights. Don't re-upload content without permission or use it commercially without authorization."
        },
        {
          q: "Can I use downloaded Reels in my own content?",
          a: "You can use downloaded Reels for personal reference, studying content strategy, or creating reaction/commentary content with proper attribution. However, re-uploading someone else's content as your own is copyright infringement."
        },
        {
          q: "Should I credit the original creator?",
          a: "Yes! Always credit the original creator if you share or reference their content. It's not just ethical—it's often legally required and helps support fellow creators."
        },
        {
          q: "What about music copyright in Reels?",
          a: "Downloaded Reels contain whatever music the original creator used. If you're downloading for personal use, this isn't an issue. If you plan to re-use the content, be aware of music copyright restrictions."
        }
      ]
    },
    {
      category: "Troubleshooting",
      questions: [
        {
          q: "Why isn't my download working?",
          a: "Common issues include: 1) The Reel is from a private account, 2) The link was copied incorrectly, 3) The Reel has been deleted, or 4) Temporary Instagram API issues. Try copying the link again or try a different Reel."
        },
        {
          q: "The video quality is lower than expected. Why?",
          a: "ReelGrab downloads the highest quality available. If the quality is lower than expected, it's because the original creator uploaded a lower resolution video. Instagram also compresses videos, which can affect quality."
        },
        {
          q: "I'm getting an error message. What should I do?",
          a: "First, make sure you're using a valid Instagram Reel URL. The link should include 'instagram.com/reel/'. If the error persists, the Reel may have been deleted or made private. Try refreshing the page and attempting again."
        },
        {
          q: "Why does it say 'Failed to fetch reel'?",
          a: "This usually means: 1) The Reel is private, 2) The link is incorrect, 3) The Reel has been deleted, or 4) Instagram is temporarily blocking automated requests. Wait a few minutes and try again."
        }
      ]
    },
    {
      category: "Technical Questions",
      questions: [
        {
          q: "What format are downloaded videos?",
          a: "Videos are downloaded in MP4 format, which is universally compatible with all devices, video players, and editing software."
        },
        {
          q: "Does ReelGrab work with Instagram Stories?",
          a: "ReelGrab is specifically designed for Instagram Reels. For Stories, you'll need a different tool as Stories have different privacy and technical requirements."
        },
        {
          q: "Can I download Instagram posts (not Reels)?",
          a: "ReelGrab is optimized for Reels. While it may work with some video posts, it's specifically designed for the Reels format."
        },
        {
          q: "Why do some Reels download faster than others?",
          a: "Download speed depends on: 1) Video file size, 2) Your internet connection speed, 3) Instagram's server response time, and 4) Current server load. Longer or higher quality videos take slightly more time."
        }
      ]
    }
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
            <Link href="/guides" className="text-gray-600 hover:text-blue-600 transition-colors">Guides</Link>
          </nav>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold text-blue-600 mb-4 flex items-center gap-2 w-fit mx-auto">
              <HelpCircle className="w-4 h-4" />
              Help Center
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about downloading Instagram Reels with ReelGrab
            </p>
          </div>

          {faqCategories.map((category, i) => (
            <div key={i} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-sm">
                  {i + 1}
                </span>
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, j) => (
                  <div key={j} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div className="px-6 py-5">
                      <h3 className="font-bold text-gray-900 text-lg mb-3">{faq.q}</h3>
                      <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-8 md:p-12 text-white text-center mt-16">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our support team is here to help. We typically respond within 24 hours.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-lg"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
