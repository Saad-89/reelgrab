
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in">
          Instagram Reels Downloader – Download Reels in HD
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto fade-in">
          Free, fast, no watermark. Grab your favorite Instagram reels instantly on any device.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span>Lightning Fast</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            <span>No Watermark</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">💎</span>
            <span>HD Quality</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🆓</span>
            <span>100% Free</span>
          </div>
        </div>
      </div>
    </section>
  );
}