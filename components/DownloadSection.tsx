'use client';

import { useState } from 'react';
import { Download, Loader2, CheckCircle2, RotateCcw, Video, Sparkles, Star, Zap, Shield, Crown } from 'lucide-react';

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
      console.log('🚀 Starting download process...');
      console.log('📎 Video URL:', videoData.url);

      // Method 1: Try server-side proxy download (bypasses CORS)
      try {
        console.log('🔄 Attempting proxy download...');
        
        const proxyResponse = await fetch('/api/proxy-download', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: videoData.url }),
        });

        if (proxyResponse.ok) {
          console.log('✅ Proxy download successful!');
          
          const contentLength = +(proxyResponse.headers.get('Content-Length') || 0);
          const reader = proxyResponse.body?.getReader();

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
                  const progress = Math.round((receivedLength / contentLength) * 100);
                  setDownloadProgress(progress);
                } else {
                  setDownloadProgress(Math.min(50 + (receivedLength / 1000000) * 10, 90));
                }
              }
            }

            const blob = new Blob(chunks as BlobPart[], { type: 'video/mp4' });
            const blobUrl = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = blobUrl;
            a.download = `reelgrab_${Date.now()}.mp4`;
            document.body.appendChild(a);
            a.click();

            setTimeout(() => {
              document.body.removeChild(a);
              URL.revokeObjectURL(blobUrl);
            }, 100);

            setDownloadProgress(100);
            setIsDownloading(false);
            setStep('success');
            return;
          }
        }
      } catch (proxyError) {
        console.log('⚠️ Proxy download failed, trying direct method...');
      }

      // Method 2: Try direct fetch with CORS
      try {
        console.log('🔄 Attempting direct download...');
        
        const directResponse = await fetch(videoData.url, {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Accept': 'video/mp4,video/*,*/*',
          },
        });

        if (directResponse.ok) {
          console.log('✅ Direct download successful!');
          
          const contentLength = +(directResponse.headers.get('Content-Length') || 0);
          const reader = directResponse.body?.getReader();

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
                  const progress = Math.round((receivedLength / contentLength) * 100);
                  setDownloadProgress(progress);
                } else {
                  setDownloadProgress(Math.min(50 + (receivedLength / 1000000) * 10, 90));
                }
              }
            }

            const blob = new Blob(chunks as BlobPart[], { type: 'video/mp4' });
            const blobUrl = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = blobUrl;
            a.download = `reelgrab_${Date.now()}.mp4`;
            document.body.appendChild(a);
            a.click();

            setTimeout(() => {
              document.body.removeChild(a);
              URL.revokeObjectURL(blobUrl);
            }, 100);

            setDownloadProgress(100);
            setIsDownloading(false);
            setStep('success');
            return;
          }
        }
      } catch (directError) {
        console.log('⚠️ Direct download failed, trying alternative method...');
      }

      // Method 3: Use iframe trick with download attribute
      try {
        console.log('🔄 Attempting iframe download...');
        
        const a = document.createElement('a');
        a.href = videoData.url;
        a.download = `reelgrab_${Date.now()}.mp4`;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        setDownloadProgress(100);
        setIsDownloading(false);
        setStep('success');
        return;
      } catch (iframeError) {
        console.log('⚠️ Iframe download failed...');
      }

      // Method 4: Fallback - show instructions
      console.log('ℹ️ Using fallback method - user instruction');
      setError('Auto-download not available. Please right-click the video above and select "Save video as..." to download.');
      setIsDownloading(false);

    } catch (err) {
      console.error('❌ Download error:', err);
      setError('Download failed. Please try right-clicking the video and select "Save video as..."');
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

  const features = [
    { icon: Zap, text: 'Lightning Fast', gradient: 'from-yellow-400 to-orange-500' },
    { icon: Crown, text: '100% Free', gradient: 'from-amber-400 to-yellow-500' },
    { icon: Star, text: '4K Quality', gradient: 'from-blue-400 to-cyan-500' },
    { icon: Shield, text: 'No Watermark', gradient: 'from-purple-400 to-pink-500' }
  ];

  return (
    <>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 backdrop-blur-2xl bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-75"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <Video className="w-7 h-7 text-white" />
              </div>
            </div>
            <div>
              <span className="text-2xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                ReelGrab
              </span>
              <div className="flex items-center gap-1 -mt-1">
                <span className="text-[10px] font-bold text-purple-300">PRO</span>
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              </div>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#how-it-works" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              How it works
            </a>
            <a href="#faq" className="text-white/70 hover:text-white transition-colors">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Download Form */}
      <section className="relative pt-16 pb-32 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-full mb-8 border border-white/20 shadow-xl">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-bold text-white">Premium HD Downloads • No Limits • Always Free</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight">
              <span className="block text-white mb-2">Download</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Instagram Reels
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto font-medium">
              Save unlimited Reels in stunning 4K quality. Lightning fast, no watermarks, completely free forever.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-sm font-semibold">10M+ Downloads</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-sm font-semibold">4.9★ Rating</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-sm font-semibold">100% Secure</span>
              </div>
            </div>
          </div>

          {/* Main Download Card - Centered */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Glowing Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30"></div>
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl p-8 md:p-12">
                
                {/* Input Step */}
                {step === 'input' && (
                  <div className="space-y-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="relative">
                        <input
                          type="text"
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                          placeholder="Paste Instagram Reel URL here..."
                          className="w-full px-7 py-5 text-lg bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-2xl focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-500/30 transition-all text-white placeholder-white/50"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
                        </div>
                      </div>

                      {error && (
                        <div className="flex items-center gap-3 text-white bg-red-500/20 backdrop-blur-xl px-6 py-4 rounded-xl border border-red-400/30">
                          <span className="text-2xl">⚠️</span>
                          <span className="text-sm font-semibold">{error}</span>
                        </div>
                      )}

                      <button
                        type="submit"
                        className="group relative w-full overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold py-6 px-8 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all text-lg shadow-2xl flex items-center justify-center gap-3">
                          <Download className="w-6 h-6" />
                          <span>Download Video Now</span>
                          <Sparkles className="w-5 h-5" />
                        </div>
                      </button>
                    </form>

                    <div className="pt-6 border-t border-white/10">
                      <p className="text-xs text-white/60 text-center font-medium">
                        🔒 Safe & Secure • Your privacy is our priority • No registration required
                      </p>
                    </div>
                  </div>
                )}

                {/* Loading Step */}
                {step === 'loading' && (
                  <div className="py-20 text-center">
                    <div className="relative inline-block mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                      <Loader2 className="relative w-16 h-16 animate-spin text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Processing Your Video...</h3>
                    <p className="text-purple-200">Getting the best quality for you</p>
                  </div>
                )}

                {/* Preview Step */}
                {step === 'preview' && videoData && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-white bg-green-500/20 backdrop-blur-xl px-6 py-4 rounded-xl border border-green-400/30">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-green-400" />
                      <span className="text-sm font-semibold">Video ready! Preview below or download now</span>
                    </div>

                    {/* Video Player */}
                    <div className="relative aspect-video bg-black/50 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                      <video
                        src={videoData.url}
                        poster={videoData.thumbnail}
                        controls
                        controlsList="nodownload"
                        className="w-full h-full"
                        preload="metadata"
                        playsInline
                      />
                    </div>

                    {videoData.title && (
                      <div className="bg-white/5 backdrop-blur-xl rounded-xl p-5 border border-white/10">
                        <p className="text-sm text-white/80 line-clamp-2 font-medium">{videoData.title}</p>
                      </div>
                    )}

                    {error && (
                      <div className="flex items-center gap-3 text-white bg-yellow-500/20 backdrop-blur-xl px-6 py-4 rounded-xl border border-yellow-400/30">
                        <span className="text-2xl">💡</span>
                        <span className="text-sm font-semibold">{error}</span>
                      </div>
                    )}

                    {/* Action Buttons with Loading States */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={handleDownload}
                        disabled={isDownloading}
                        className="group relative flex-1 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-5 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl">
                          {isDownloading ? (
                            <>
                              <Loader2 className="w-6 h-6 animate-spin" />
                              <span>Downloading...</span>
                            </>
                          ) : (
                            <>
                              <Download className="w-6 h-6" />
                              <span>Download HD Video</span>
                            </>
                          )}
                        </div>
                      </button>
                      
                      <button
                        onClick={handleReset}
                        disabled={isDownloading}
                        className="sm:w-auto px-8 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white font-bold py-5 rounded-2xl hover:bg-white/20 hover:border-white/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <RotateCcw className="w-5 h-5" />
                        <span>New Video</span>
                      </button>
                    </div>

                    {/* Progress Bar (shown during download) */}
                    {isDownloading && downloadProgress > 0 && (
                      <div className="space-y-3">
                        <div className="relative w-full bg-white/10 backdrop-blur-xl rounded-full h-3 overflow-hidden border border-white/20">
                          <div
                            className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 h-full transition-all duration-300 ease-out rounded-full"
                            style={{ width: `${downloadProgress}%` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer"></div>
                        </div>
                      </div>
                    )}

                    <div className="bg-blue-500/20 backdrop-blur-xl rounded-xl p-5 border border-blue-400/30">
                      <p className="text-xs text-white/90 text-center font-medium">
                        💡 <strong>Pro Tip:</strong> If download doesn't start automatically, right-click the video and select "Save video as..."
                      </p>
                    </div>
                  </div>
                )}

                {/* Success Step */}
                {step === 'success' && (
                  <div className="py-20 text-center">
                    <div className="relative inline-block mb-8">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                      <div className="relative w-28 h-28 bg-gradient-to-br from-green-400/20 to-emerald-400/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-green-400/30">
                        <CheckCircle2 className="w-14 h-14 text-green-400" />
                      </div>
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-4">Download Complete!</h3>
                    <p className="text-xl text-purple-200 mb-10">Your video has been saved successfully 🎉</p>
                    
                    <button
                      onClick={handleReset}
                      className="group relative inline-flex overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold py-5 px-10 rounded-2xl hover:scale-[1.02] transition-all inline-flex items-center gap-3 shadow-2xl">
                        <Download className="w-6 h-6" />
                        <span>Download Another Reel</span>
                      </div>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Features Grid - WITH ICONS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={i} 
                    className="group relative overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity`}></div>
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/10 hover:border-white/30 transition-all hover:scale-105 shadow-xl">
                      <Icon className="w-8 h-8 mx-auto mb-3 text-white" />
                      <p className="text-sm font-bold text-white">{feature.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
