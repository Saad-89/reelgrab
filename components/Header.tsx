import Link from 'next/link';
import { Video } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-blue-600">
          <Video className="w-7 h-7" />
          ReelGrab
        </Link>
        
        <nav className="hidden md:flex gap-6">
          <Link href="#how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</Link>
          <Link href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</Link>
        </nav>
      </div>
    </header>
  );
}
