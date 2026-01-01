import Link from 'next/link';
import { Video, Heart, Twitter, Instagram as InstagramIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-4 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Video className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ReelGrab</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The fastest and most reliable Instagram Reels downloader. Save unlimited videos in HD quality, completely free forever.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/saadkashmiri_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-all">
                <Twitter className="w-5 h-5 text-gray-700" />
              </a>
              <a href="https://www.instagram.com/khan_2o476/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-all">
                <InstagramIcon className="w-5 h-5 text-gray-700" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-4">Content</h4>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</Link></li>
              <li><Link href="/guides" className="text-gray-600 hover:text-blue-600 transition-colors">Guides</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="text-gray-600 hover:text-blue-600 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-600">
              ReelGrab is not affiliated with Instagram or Meta Platforms. All trademarks belong to their respective owners.
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by ReelGrab Team
            </p>
          </div>
          <p className="text-center text-gray-500 text-xs mt-4">
            © 2025 ReelGrab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// import Link from 'next/link';
// import { Video, Heart, Twitter, Instagram as InstagramIcon, Youtube } from 'lucide-react';

// export default function Footer() {
//   return (
//     <footer className="relative py-16 px-4 border-t border-white/10">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid md:grid-cols-4 gap-12 mb-12">
//           {/* Brand */}
//           <div className="md:col-span-2">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="relative">
//                 <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-75"></div>
//                 <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl">
//                   <Video className="w-7 h-7 text-white" />
//                 </div>
//               </div>
//               <span className="text-2xl font-black text-white">ReelGrab</span>
//             </div>
//             <p className="text-purple-200 mb-6 leading-relaxed">
//               The fastest and most reliable Instagram Reels downloader. Save unlimited videos in stunning HD quality, completely free forever.
//             </p>
//             <div className="flex gap-4">
//               <a href="https://x.com/saadkashmiri_" className="w-10 h-10 bg-white/5 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all">
//                 <Twitter className="w-5 h-5 text-white" />
//               </a>
//               <a href="https://www.instagram.com/khan_2o476/" className="w-10 h-10 bg-white/5 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all">
//                 <InstagramIcon className="w-5 h-5 text-white" />
//               </a>
//               {/* <a href="#" className="w-10 h-10 bg-white/5 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all">
//                 <Youtube className="w-5 h-5 text-white" />
//               </a> */}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-white font-bold mb-4 text-lg">Quick Links</h4>
//             <ul className="space-y-3">
//               <li><Link href="/" className="text-purple-200 hover:text-white transition-colors">Home</Link></li>
//               <li><a href="#how-it-works" className="text-purple-200 hover:text-white transition-colors">How It Works</a></li>
//               <li><a href="#faq" className="text-purple-200 hover:text-white transition-colors">FAQ</a></li>
//               <li><a href="/about" className="text-purple-200 hover:text-white transition-colors">About</a></li>
//             </ul>
//           </div>

//           {/* Legal */}
//           <div>
//             <h4 className="text-white font-bold mb-4 text-lg">Legal</h4>
//             <ul className="space-y-3">
//               <li><a href="/privacy-policy" className="text-purple-200 hover:text-white transition-colors">Privacy Policy</a></li>
//               <li><a href="/terms" className="text-purple-200 hover:text-white transition-colors">Terms of Service</a></li>
//               <li><a href="/disclaimer" className="text-purple-200 hover:text-white transition-colors">Disclaimer</a></li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="pt-8 border-t border-white/10">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
//             <p className="text-purple-300">
//               ReelGrab is not affiliated with Instagram or Meta Platforms. All trademarks belong to their respective owners.
//             </p>
//             <p className="text-purple-300 flex items-center gap-2">
//               Made with <Heart className="w-4 h-4 text-pink-400 fill-pink-400" /> by ReelGrab Team
//             </p>
//           </div>
//           <p className="text-center text-purple-400 text-xs mt-4">
//             © 2025 ReelGrab. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
