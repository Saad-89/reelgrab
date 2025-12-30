
'use client';

import { useState } from 'react';
import { Download, RotateCcw, Loader2 } from 'lucide-react';

interface VideoPreviewProps {
  data: {
    videoUrl: string;
    thumbnail: string;
    title?: string;
    duration?: number;
  };
  onReset: () => void;
}

export default function VideoPreview({ data, onReset }: VideoPreviewProps) {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDownload = async () => {
    setDownloading(true);
    setProgress(0);

    try {
      // Fetch the video with progress tracking
      const response = await fetch(data.videoUrl);
      
      if (!response.ok) {
        throw new Error('Download failed');
      }

      const contentLength = response.headers.get('content-length');
      const total = parseInt(contentLength || '0', 10);
      let loaded = 0;

      const reader = response.body?.getReader();
      const chunks: BlobPart[] = []; // FIXED: Use BlobPart[] instead of Uint8Array[]

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          
          if (done) break;
          
          if (value) {
            chunks.push(value);
            loaded += value.length;
            
            if (total > 0) {
              const percentComplete = Math.round((loaded / total) * 100);
              setProgress(percentComplete);
            } else {
              setProgress(50);
            }
          }
        }
      }

      // Combine chunks into a single blob
      const blob = new Blob(chunks, { type: 'video/mp4' });
      const url = window.URL.createObjectURL(blob);

      // Create download link
      const link = document.createElement('a');
      link.href = url;
      link.download = `reelgrab_${Date.now()}.mp4`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up
      window.URL.revokeObjectURL(url);
      setProgress(100);

      setTimeout(() => {
        setDownloading(false);
        setProgress(0);
      }, 1000);

    } catch (error) {
      console.error('Download error:', error);
      alert('Download failed. Please try again or try a different reel.');
      setDownloading(false);
      setProgress(0);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 space-y-4 fade-in border border-gray-200">
      <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <video
          src={data.videoUrl}
          poster={data.thumbnail}
          controls
          className="w-full h-full object-contain"
          preload="metadata"
        />
      </div>

      {data.title && (
        <p className="text-sm text-gray-600 line-clamp-2 font-medium">{data.title}</p>
      )}

      {downloading && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Downloading...</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-green-500 to-green-600 h-full transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-600 hover:to-green-700 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {downloading ? (
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
          onClick={onReset}
          disabled={downloading}
          className="sm:w-auto bg-white border-2 border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Grab Another</span>
        </button>
      </div>
    </div>
  );
}