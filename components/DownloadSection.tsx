'use client';

import { useState } from 'react';
import { Download, Loader2, CheckCircle2, RotateCcw, Video, AlertCircle } from 'lucide-react';
import Link from 'next/link';

interface VideoData {
  url: string;
  thumbnail: string;
  title?: string;
}

type Step = 'input' | 'loading' | 'preview' | 'success';

export default function DownloadSection() {
  const [url, setUrl] = useState('');
  const [step, setStep] = useState<Step>('input');
  const [error, setError] = useState('');
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setVideoData(null);

    if (!url.trim()) {
      setError('Please paste an Instagram Reel URL');
      return;
    }

    if (!url.includes('instagram.com')) {
      setError('Please enter a valid Instagram URL');
      return;
    }

    setStep('loading');

    try {
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to fetch video');
      }

      setVideoData(data.data);
      setStep('preview');
    } catch (err: any) {
      setError(err.message || 'Failed to fetch video. Please try again.');
      setStep('input');
    }
  };

  const handleDownload = async () => {
    if (!videoData || isDownloading) return;

    setIsDownloading(true);
    setDownloadProgress(0);

    try {
      const response = await fetch(videoData.url);
      const reader = response.body?.getReader();
      const contentLength = +(response.headers.get('Content-Length') || 0);

      if (reader) {
        let receivedLength = 0;
        const chunks: Uint8Array[] = [];

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          if (value) {
            chunks.push(value);
            receivedLength += value.length;
            if (contentLength > 0) {
              setDownloadProgress(Math.round((receivedLength / contentLength) * 100));
            }
          }
        }

        const blob = new Blob(chunks as BlobPart[], { type: 'video/mp4' });
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = `reelgrab_${Date.now()}.mp4`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(blobUrl);

        setDownloadProgress(100);
        setIsDownloading(false);
        setStep('success');
      }
    } catch (err) {
      setError('Download failed. Please try right-clicking the video and selecting "Save video as..."');
      setIsDownloading(false);
    }
  };

  const handleReset = () => {
    setUrl('');
    setVideoData(null);
    setError('');
    setDownloadProgress(0);
    setIsDownloading(false);
    setStep('input');
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Video className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">ReelGrab</span>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</Link>
            <Link href="/guides" className="text-gray-600 hover:text-blue-600 transition-colors">Guides</Link>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
          </nav>
        </div>
      </header>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
              <span className="text-sm font-semibold text-blue-600">🚀 100% Free • No Login Required</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Download Instagram Reels<br />
              <span className="text-blue-600">in HD Quality</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Save your favorite Instagram Reels instantly. Fast, free, and no watermarks. Works on all devices.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">HD Quality Downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">No Watermark</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 font-medium">Unlimited Downloads</span>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              
              {step === 'input' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="Paste Instagram Reel URL here..."
                      className="w-full px-5 py-4 text-lg bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-gray-900"
                    />
                  </div>

                  {error && (
                    <div className="flex items-start gap-3 text-red-700 bg-red-50 px-5 py-4 rounded-xl border border-red-200">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-medium">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Reel</span>
                  </button>
                </form>
              )}

              {step === 'loading' && (
                <div className="py-16 text-center">
                  <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Processing Your Video...</h3>
                  <p className="text-gray-600">This will only take a moment</p>
                </div>
              )}

              {step === 'preview' && videoData && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-green-700 bg-green-50 px-5 py-4 rounded-xl border border-green-200">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                    <span className="text-sm font-semibold">Video ready! Preview or download now</span>
                  </div>

                  <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden">
                    <video
                      src={videoData.url}
                      poster={videoData.thumbnail}
                      controls
                      className="w-full h-full"
                      preload="metadata"
                    />
                  </div>

                  {videoData.title && (
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-sm text-gray-700 line-clamp-2">{videoData.title}</p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={handleDownload}
                      disabled={isDownloading}
                      className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-4 rounded-xl hover:from-green-700 hover:to-green-800 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isDownloading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Downloading...</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-5 h-5" />
                          <span>Download HD Video</span>
                        </>
                      )}
                    </button>
                    
                    <button
                      onClick={handleReset}
                      disabled={isDownloading}
                      className="px-8 bg-gray-100 border-2 border-gray-200 text-gray-700 font-semibold py-4 rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <RotateCcw className="w-5 h-5" />
                      <span>New Video</span>
                    </button>
                  </div>

                  {isDownloading && downloadProgress > 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-semibold text-gray-700">
                        <span>Progress</span>
                        <span className="text-blue-600">{downloadProgress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-blue-700 h-full transition-all duration-300 rounded-full"
                          style={{ width: `${downloadProgress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {step === 'success' && (
                <div className="py-16 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Download Complete!</h3>
                  <p className="text-gray-600 mb-8">Your video has been saved successfully</p>
                  
                  <button
                    onClick={handleReset}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-10 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg inline-flex items-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Another Reel</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}





// 'use client';

// import { useState } from 'react';
// import { Download, Loader2, CheckCircle2, RotateCcw, Video, Sparkles, Star, Zap, Shield, Crown, AlertCircle } from 'lucide-react';

// interface VideoData {
//   url: string;
//   thumbnail: string;
//   title?: string;
// }

// type Step = 'input' | 'loading' | 'preview' | 'success';

// export default function DownloadSection() {
//   const [url, setUrl] = useState('');
//   const [step, setStep] = useState<Step>('input');
//   const [error, setError] = useState('');
//   const [videoData, setVideoData] = useState<VideoData | null>(null);
//   const [isDownloading, setIsDownloading] = useState(false);
//   const [downloadProgress, setDownloadProgress] = useState(0);
//   const [retryCount, setRetryCount] = useState(0);

//   const handleSubmit = async (e: React.FormEvent, isRetry = false) => {
//     e.preventDefault();
//     setError('');
//     setVideoData(null);

//     if (!isRetry) {
//       setRetryCount(0);
//     }

//     if (!url.trim()) {
//       setError('Please paste an Instagram Reel URL');
//       return;
//     }

//     if (!url.includes('instagram.com')) {
//       setError('Please enter a valid Instagram URL');
//       return;
//     }

//     setStep('loading');

//     try {
//       const response = await fetch('/api/download', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ url }),
//       });

//       const data = await response.json();

//       if (!response.ok || !data.success) {
//         throw new Error(data.error || data.suggestion || 'Failed to fetch video');
//       }

//       setVideoData(data.data);
//       setStep('preview');
//       setRetryCount(0);
//     } catch (err: any) {
//       console.error('Fetch error:', err);
      
//       // Auto-retry logic (max 2 retries)
//       if (retryCount < 2 && !err.message.includes('rate limit')) {
//         setRetryCount(prev => prev + 1);
//         console.log(`🔄 Auto-retrying... Attempt ${retryCount + 2}/3`);
        
//         // Wait 1 second before retry
//         await new Promise(resolve => setTimeout(resolve, 1000));
        
//         // Retry automatically
//         handleSubmit(e, true);
//         return;
//       }
      
//       setError(err.message || 'Failed to fetch video. Please try again or use a different Reel.');
//       setStep('input');
//     }
//   };

//   const handleDownload = async () => {
//     if (!videoData || isDownloading) return;

//     setIsDownloading(true);
//     setDownloadProgress(0);
//     setError('');

//     try {
//       console.log('🚀 Starting download...');

//       // Method 1: Try proxy download
//       try {
//         const proxyResponse = await fetch('/api/proxy-download', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ url: videoData.url }),
//         });

//         if (proxyResponse.ok) {
//           const reader = proxyResponse.body?.getReader();
//           const contentLength = +(proxyResponse.headers.get('Content-Length') || 0);

//           if (reader) {
//             let receivedLength = 0;
//             const chunks: Uint8Array[] = [];

//             while (true) {
//               const { done, value } = await reader.read();
//               if (done) break;

//               if (value) {
//                 chunks.push(value);
//                 receivedLength += value.length;

//                 if (contentLength > 0) {
//                   setDownloadProgress(Math.round((receivedLength / contentLength) * 100));
//                 } else {
//                   setDownloadProgress(Math.min(50 + (receivedLength / 1000000) * 10, 90));
//                 }
//               }
//             }

//             const blob = new Blob(chunks as BlobPart[], { type: 'video/mp4' });
//             const blobUrl = URL.createObjectURL(blob);

//             const a = document.createElement('a');
//             a.href = blobUrl;
//             a.download = `reelgrab_${Date.now()}.mp4`;
//             document.body.appendChild(a);
//             a.click();
//             document.body.removeChild(a);
//             URL.revokeObjectURL(blobUrl);

//             setDownloadProgress(100);
//             setIsDownloading(false);
//             setStep('success');
//             return;
//           }
//         }
//       } catch (proxyError) {
//         console.log('Proxy failed, trying direct...');
//       }

//       // Method 2: Direct download
//       try {
//         const directResponse = await fetch(videoData.url, {
//           method: 'GET',
//           mode: 'cors',
//           headers: { 'Accept': 'video/mp4,video/*,*/*' },
//         });

//         if (directResponse.ok) {
//           const reader = directResponse.body?.getReader();
//           const contentLength = +(directResponse.headers.get('Content-Length') || 0);

//           if (reader) {
//             let receivedLength = 0;
//             const chunks: Uint8Array[] = [];

//             while (true) {
//               const { done, value } = await reader.read();
//               if (done) break;

//               if (value) {
//                 chunks.push(value);
//                 receivedLength += value.length;
//                 if (contentLength > 0) {
//                   setDownloadProgress(Math.round((receivedLength / contentLength) * 100));
//                 }
//               }
//             }

//             const blob = new Blob(chunks as BlobPart[], { type: 'video/mp4' });
//             const blobUrl = URL.createObjectURL(blob);
//             const a = document.createElement('a');
//             a.href = blobUrl;
//             a.download = `reelgrab_${Date.now()}.mp4`;
//             document.body.appendChild(a);
//             a.click();
//             document.body.removeChild(a);
//             URL.revokeObjectURL(blobUrl);

//             setDownloadProgress(100);
//             setIsDownloading(false);
//             setStep('success');
//             return;
//           }
//         }
//       } catch (directError) {
//         console.log('Direct failed, trying link...');
//       }

//       // Method 3: Simple link
//       const a = document.createElement('a');
//       a.href = videoData.url;
//       a.download = `reelgrab_${Date.now()}.mp4`;
//       a.target = '_blank';
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);

//       setDownloadProgress(100);
//       setIsDownloading(false);
//       setStep('success');

//     } catch (err) {
//       console.error('Download error:', err);
//       setError('Auto-download failed. Please right-click the video above and select "Save video as..."');
//       setIsDownloading(false);
//     }
//   };

//   const handleReset = () => {
//     setUrl('');
//     setVideoData(null);
//     setError('');
//     setDownloadProgress(0);
//     setIsDownloading(false);
//     setRetryCount(0);
//     setStep('input');
//   };

//   const features = [
//     { icon: Zap, text: 'Lightning Fast', gradient: 'from-yellow-400 to-orange-500' },
//     { icon: Crown, text: '100% Free', gradient: 'from-amber-400 to-yellow-500' },
//     { icon: Star, text: '4K Quality', gradient: 'from-blue-400 to-cyan-500' },
//     { icon: Shield, text: 'No Watermark', gradient: 'from-purple-400 to-pink-500' }
//   ];

//   return (
//     <>
//       {/* Animated Background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
//         <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
//         <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
//       </div>

//       {/* Header */}
//       <header className="relative z-50 backdrop-blur-2xl bg-white/5 border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-75"></div>
//               <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl">
//                 <Video className="w-7 h-7 text-white" />
//               </div>
//             </div>
//             <div>
//               <span className="text-2xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
//                 ReelGrab
//               </span>
//               <div className="flex items-center gap-1 -mt-1">
//                 <span className="text-[10px] font-bold text-purple-300">PRO</span>
//                 <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
//               </div>
//             </div>
//           </div>
//           <nav className="hidden md:flex gap-8 text-sm font-semibold">
//             <a href="#how-it-works" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
//               <Sparkles className="w-4 h-4" />
//               How it works
//             </a>
//             <a href="#faq" className="text-white/70 hover:text-white transition-colors">FAQ</a>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="relative pt-16 pb-32 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-full mb-8 border border-white/20 shadow-xl">
//               <Sparkles className="w-5 h-5 text-yellow-400" />
//               <span className="text-sm font-bold text-white">Premium HD Downloads • No Limits • Always Free</span>
//             </div>
            
//             <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight">
//               <span className="block text-white mb-2">Download</span>
//               <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
//                 Instagram Reels
//               </span>
//             </h1>
            
//             <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto font-medium">
//               Save unlimited Reels in stunning 4K quality. Lightning fast, no watermarks, completely free forever.
//             </p>

//             <div className="flex flex-wrap justify-center gap-6 mb-12">
//               <div className="flex items-center gap-2 text-white/80">
//                 <CheckCircle2 className="w-5 h-5 text-green-400" />
//                 <span className="text-sm font-semibold">10M+ Downloads</span>
//               </div>
//               <div className="flex items-center gap-2 text-white/80">
//                 <CheckCircle2 className="w-5 h-5 text-green-400" />
//                 <span className="text-sm font-semibold">4.9★ Rating</span>
//               </div>
//               <div className="flex items-center gap-2 text-white/80">
//                 <CheckCircle2 className="w-5 h-5 text-green-400" />
//                 <span className="text-sm font-semibold">100% Secure</span>
//               </div>
//             </div>
//           </div>

//           {/* Main Card */}
//           <div className="max-w-3xl mx-auto">
//             <div className="relative">
//               <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30"></div>
              
//               <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl p-8 md:p-12">
                
//                 {/* Input Step */}
//                 {step === 'input' && (
//                   <div className="space-y-6">
//                     <form onSubmit={handleSubmit} className="space-y-6">
//                       <div className="relative">
//                         <input
//                           type="text"
//                           value={url}
//                           onChange={(e) => setUrl(e.target.value)}
//                           placeholder="Paste Instagram Reel URL here..."
//                           className="w-full px-7 py-5 text-lg bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-2xl focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-500/30 transition-all text-white placeholder-white/50"
//                         />
//                         <div className="absolute right-3 top-1/2 -translate-y-1/2">
//                           <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
//                         </div>
//                       </div>

//                       {error && (
//                         <div className="flex items-start gap-3 text-white bg-red-500/20 backdrop-blur-xl px-6 py-4 rounded-xl border border-red-400/30">
//                           <AlertCircle className="w-6 h-6 flex-shrink-0 text-red-400 mt-0.5" />
//                           <div>
//                             <p className="text-sm font-semibold mb-1">Failed to load video</p>
//                             <p className="text-xs text-red-100">{error}</p>
//                             {retryCount > 0 && (
//                               <p className="text-xs text-red-200 mt-2">Retried {retryCount} time(s)</p>
//                             )}
//                           </div>
//                         </div>
//                       )}

//                       <button
//                         type="submit"
//                         className="group relative w-full overflow-hidden"
//                       >
//                         <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
//                         <div className="relative bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold py-6 px-8 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all text-lg shadow-2xl flex items-center justify-center gap-3">
//                           <Download className="w-6 h-6" />
//                           <span>Download Video Now</span>
//                           <Sparkles className="w-5 h-5" />
//                         </div>
//                       </button>
//                     </form>

//                     <div className="pt-6 border-t border-white/10">
//                       <p className="text-xs text-white/60 text-center font-medium">
//                         🔒 Safe & Secure • Your privacy is our priority • No registration required
//                       </p>
//                     </div>
//                   </div>
//                 )}

//                 {/* Loading Step */}
//                 {step === 'loading' && (
//                   <div className="py-20 text-center">
//                     <div className="relative inline-block mb-6">
//                       <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
//                       <Loader2 className="relative w-16 h-16 animate-spin text-white" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-white mb-3">Processing Your Video...</h3>
//                     <p className="text-purple-200">Getting the best quality for you</p>
//                     {retryCount > 0 && (
//                       <p className="text-sm text-purple-300 mt-2">Retrying... Attempt {retryCount + 1}/3</p>
//                     )}
//                   </div>
//                 )}

//                 {/* Preview Step */}
//                 {step === 'preview' && videoData && (
//                   <div className="space-y-6">
//                     <div className="flex items-center gap-3 text-white bg-green-500/20 backdrop-blur-xl px-6 py-4 rounded-xl border border-green-400/30">
//                       <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-green-400" />
//                       <span className="text-sm font-semibold">Video ready! Preview below or download now</span>
//                     </div>

//                     <div className="relative aspect-video bg-black/50 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/10">
//                       <video
//                         src={videoData.url}
//                         poster={videoData.thumbnail}
//                         controls
//                         controlsList="nodownload"
//                         className="w-full h-full"
//                         preload="metadata"
//                         playsInline
//                         crossOrigin="anonymous"
//                       />
//                     </div>

//                     {videoData.title && (
//                       <div className="bg-white/5 backdrop-blur-xl rounded-xl p-5 border border-white/10">
//                         <p className="text-sm text-white/80 line-clamp-2 font-medium">{videoData.title}</p>
//                       </div>
//                     )}

//                     {error && (
//                       <div className="flex items-center gap-3 text-white bg-yellow-500/20 backdrop-blur-xl px-6 py-4 rounded-xl border border-yellow-400/30">
//                         <span className="text-2xl">💡</span>
//                         <span className="text-sm font-semibold">{error}</span>
//                       </div>
//                     )}

//                     <div className="flex flex-col sm:flex-row gap-4">
//                       <button
//                         onClick={handleDownload}
//                         disabled={isDownloading}
//                         className="group relative flex-1 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
//                       >
//                         <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
//                         <div className="relative bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-5 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl">
//                           {isDownloading ? (
//                             <>
//                               <Loader2 className="w-6 h-6 animate-spin" />
//                               <span>Downloading...</span>
//                             </>
//                           ) : (
//                             <>
//                               <Download className="w-6 h-6" />
//                               <span>Download HD Video</span>
//                             </>
//                           )}
//                         </div>
//                       </button>
                      
//                       <button
//                         onClick={handleReset}
//                         disabled={isDownloading}
//                         className="sm:w-auto px-8 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white font-bold py-5 rounded-2xl hover:bg-white/20 hover:border-white/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//                       >
//                         <RotateCcw className="w-5 h-5" />
//                         <span>New Video</span>
//                       </button>
//                     </div>

//                     {isDownloading && downloadProgress > 0 && (
//                       <div className="space-y-3">
//                         <div className="flex justify-between text-sm font-bold text-white">
//                           <span>Progress</span>
//                           <span className="text-cyan-400">{downloadProgress}%</span>
//                         </div>
//                         <div className="relative w-full bg-white/10 backdrop-blur-xl rounded-full h-3 overflow-hidden border border-white/20">
//                           <div
//                             className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 h-full transition-all duration-300 ease-out rounded-full"
//                             style={{ width: `${downloadProgress}%` }}
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer"></div>
//                         </div>
//                       </div>
//                     )}

//                     <div className="bg-blue-500/20 backdrop-blur-xl rounded-xl p-5 border border-blue-400/30">
//                       <p className="text-xs text-white/90 text-center font-medium">
//                         💡 <strong>Pro Tip:</strong> If download doesn't start automatically, right-click the video and select "Save video as..."
//                       </p>
//                     </div>
//                   </div>
//                 )}

//                 {/* Success Step */}
//                 {step === 'success' && (
//                   <div className="py-20 text-center">
//                     <div className="relative inline-block mb-8">
//                       <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-3xl opacity-50 animate-pulse"></div>
//                       <div className="relative w-28 h-28 bg-gradient-to-br from-green-400/20 to-emerald-400/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-green-400/30">
//                         <CheckCircle2 className="w-14 h-14 text-green-400" />
//                       </div>
//                     </div>
//                     <h3 className="text-4xl font-bold text-white mb-4">Download Complete!</h3>
//                     <p className="text-xl text-purple-200 mb-10">Your video has been saved successfully 🎉</p>
                    
//                     <button
//                       onClick={handleReset}
//                       className="group relative inline-flex overflow-hidden"
//                     >
//                       <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
//                       <div className="relative bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold py-5 px-10 rounded-2xl hover:scale-[1.02] transition-all inline-flex items-center gap-3 shadow-2xl">
//                         <Download className="w-6 h-6" />
//                         <span>Download Another Reel</span>
//                       </div>
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Features Grid */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
//               {features.map((feature, i) => {
//                 const Icon = feature.icon;
//                 return (
//                   <div key={i} className="group relative overflow-hidden">
//                     <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity`}></div>
//                     <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/10 hover:border-white/30 transition-all hover:scale-105 shadow-xl">
//                       <Icon className="w-8 h-8 mx-auto mb-3 text-white" />
//                       <p className="text-sm font-bold text-white">{feature.text}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

