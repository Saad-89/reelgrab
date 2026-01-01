
import Link from 'next/link';
import { Video, Wrench, ExternalLink } from 'lucide-react';
import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Instagram Tools & Resources | ReelGrab',
  description: 'Discover the best tools, apps, and resources for creating Instagram Reels. Curated list of editing apps, design tools, and learning resources.',
};

export default function ResourcesPage() {
  const resources = [
    {
      category: "Video Editing Apps",
      tools: [
        {
          name: "CapCut",
          description: "Free, powerful video editor with templates, effects, and auto-captions. Perfect for beginners and pros.",
          price: "Free",
          link: "https://www.capcut.com",
          platforms: "iOS, Android, Desktop"
        },
        {
          name: "InShot",
          description: "Quick and easy video editor with music, filters, and text effects. Great for fast edits.",
          price: "Free (with ads), $3.99/mo Pro",
          link: "https://inshot.com",
          platforms: "iOS, Android"
        },
        {
          name: "Adobe Premiere Rush",
          description: "Professional video editing on mobile. Syncs across devices for seamless workflow.",
          price: "Free (3 exports), $9.99/mo unlimited",
          link: "https://www.adobe.com/products/premiere-rush.html",
          platforms: "iOS, Android, Desktop"
        },
        {
          name: "VN Video Editor",
          description: "Completely free with no watermark. Includes keyframe animation and professional features.",
          price: "Free",
          link: "https://www.vlognow.me",
          platforms: "iOS, Android"
        }
      ]
    },
    {
      category: "Design & Graphics",
      tools: [
        {
          name: "Canva",
          description: "Create stunning graphics, thumbnails, and text overlays. Drag-and-drop interface.",
          price: "Free, Pro from $12.99/mo",
          link: "https://www.canva.com",
          platforms: "Web, iOS, Android"
        },
        {
          name: "Remove.bg",
          description: "Instantly remove backgrounds from images. Perfect for product shots and overlays.",
          price: "Free (limited), Plans from $9/mo",
          link: "https://www.remove.bg",
          platforms: "Web, API"
        },
        {
          name: "Unsplash",
          description: "Free high-quality stock photos for your content. No attribution required.",
          price: "Free",
          link: "https://unsplash.com",
          platforms: "Web"
        }
      ]
    },
    {
      category: "Music & Audio",
      tools: [
        {
          name: "Epidemic Sound",
          description: "Royalty-free music library with 40,000+ tracks. Safe for all platforms.",
          price: "From $15/mo",
          link: "https://www.epidemicsound.com",
          platforms: "Web"
        },
        {
          name: "Artlist",
          description: "Unlimited music and sound effects downloads. High-quality production music.",
          price: "From $14.99/mo",
          link: "https://artlist.io",
          platforms: "Web"
        },
        {
          name: "Instagram Audio Library",
          description: "Built-in music library within Instagram. Free to use for Reels.",
          price: "Free",
          link: "https://www.instagram.com",
          platforms: "Instagram App"
        }
      ]
    },
    {
      category: "Analytics & Insights",
      tools: [
        {
          name: "Instagram Insights",
          description: "Native analytics tool showing reach, engagement, and audience demographics.",
          price: "Free",
          link: "https://www.instagram.com",
          platforms: "Instagram App"
        },
        {
          name: "Meta Business Suite",
          description: "Manage Instagram and Facebook together. Schedule posts and view analytics.",
          price: "Free",
          link: "https://business.facebook.com",
          platforms: "Web, Mobile App"
        }
      ]
    },
    {
      category: "Scheduling Tools",
      tools: [
        {
          name: "Later",
          description: "Visual content calendar for Instagram. Schedule Reels, posts, and Stories.",
          price: "Free plan available, Pro from $18/mo",
          link: "https://later.com",
          platforms: "Web, iOS, Android"
        },
        {
          name: "Buffer",
          description: "Schedule posts across multiple social platforms. Clean, simple interface.",
          price: "Free (limited), Plans from $6/mo",
          link: "https://buffer.com",
          platforms: "Web, iOS, Android"
        }
      ]
    },
    {
      category: "Learning Resources",
      tools: [
        {
          name: "Instagram Creator Account",
          description: "Access to Instagram's official guides, tips, and best practices.",
          price: "Free",
          link: "https://creators.instagram.com",
          platforms: "Web"
        },
        {
          name: "YouTube - Creator Insider",
          description: "While focused on YouTube, many strategies apply to Instagram Reels.",
          price: "Free",
          link: "https://www.youtube.com/@CreatorInsider",
          platforms: "Web"
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-50 rounded-full text-sm font-semibold text-blue-600 mb-4 flex items-center gap-2 w-fit mx-auto">
              <Wrench className="w-4 h-4" />
              Curated Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Instagram Tools & Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our curated collection of the best tools, apps, and resources for creating amazing Instagram Reels
            </p>
          </div>

          {resources.map((category, i) => (
            <div key={i} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{category.category}</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {category.tools.map((tool, j) => (
                  <div key={j} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
                      <a 
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">{tool.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-green-50 text-green-700 text-sm font-semibold rounded-full">
                        {tool.price}
                      </span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                        {tool.platforms}
                      </span>
                    </div>
                    <a 
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1"
                    >
                      Visit Website →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Disclaimer */}
          <div className="bg-yellow-50 rounded-2xl border border-yellow-200 p-8 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-3">📌 Disclaimer</h3>
            <p className="text-gray-700 leading-relaxed">
              These resources are recommended based on their quality and usefulness to content creators. ReelGrab is not affiliated with any of these tools and does not receive compensation for these recommendations. Prices and features may change—always check the official websites for current information.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}