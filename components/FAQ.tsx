'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, Mail } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is ReelGrab completely free to use?",
      a: "Yes! ReelGrab is 100% free with no hidden costs, subscriptions, or premium features. You can download unlimited Instagram Reels without paying anything."
    },
    {
      q: "Do I need to log in to Instagram?",
      a: "No login required! Simply paste the Reel URL and download instantly. We don't ask for your Instagram credentials or any personal information."
    },
    {
      q: "What video quality can I download?",
      a: "ReelGrab downloads videos in the highest quality available from Instagram, up to 4K resolution when available."
    },
    {
      q: "Will there be a watermark on downloaded videos?",
      a: "No watermarks! Your downloaded videos will be clean and original without any ReelGrab branding or watermarks."
    },
    {
      q: "Can I download private Instagram Reels?",
      a: "No, only public Reels can be downloaded. Private accounts and private Reels cannot be accessed due to Instagram's privacy settings."
    },
    {
      q: "Does ReelGrab work on mobile devices?",
      a: "Absolutely! ReelGrab is fully optimized for mobile browsers on iPhone, Android, tablets, and all devices."
    },
    {
      q: "How long does it take to download a Reel?",
      a: "Usually just 3-10 seconds depending on the video size and your internet connection speed."
    },
    {
      q: "Is it legal to download Instagram Reels?",
      a: "You can download public Reels for personal use. Always respect copyright laws and the original creator's rights."
    }
  ];

  return (
    <section id="faq" className="relative py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-xl">
              <HelpCircle className="w-7 h-7 text-white" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-purple-200">
            Everything you need to know about downloading Instagram Reels
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden hover:border-white/30 transition-all shadow-xl">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-8 py-6 flex justify-between items-center hover:bg-white/5 transition-colors text-left"
                >
                  <span className="font-bold text-white text-lg pr-4">{faq.q}</span>
                  <ChevronDown 
                    className={`w-7 h-7 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-8 py-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-t border-white/10">
                    <p className="text-purple-100 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="relative mt-20 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white">Still Have Questions?</h3>
            <p className="text-purple-200 mb-8 text-lg">
              Can't find the answer you're looking for? Feel free to reach out!
            </p>
            <a 
              href="mailto:saadyaqoob595@gmail.com" 
              className="group relative inline-flex overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold px-10 py-5 rounded-2xl hover:scale-105 transition-all shadow-2xl">
                Contact Support
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
