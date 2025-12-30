'use client';

import { useEffect } from 'react';

interface AdBannerProps {
  dataAdSlot: string;
  dataAdFormat?: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function AdBanner({ 
  dataAdSlot, 
  dataAdFormat = 'auto',
  style,
  className = ''
}: AdBannerProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`}>
      <p className="text-xs text-gray-400 text-center mb-2">Advertisement</p>
      <ins
        className="adsbygoogle"
        style={style || { display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXX"
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
}
