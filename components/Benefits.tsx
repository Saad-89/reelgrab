export default function Benefits() {
  const benefits = [
    {
      emoji: "⚡",
      title: "Lightning Fast",
      description: "Download reels in seconds, not minutes"
    },
    {
      emoji: "🎯",
      title: "No Watermark",
      description: "Clean downloads without any ReelGrab watermark"
    },
    {
      emoji: "📱",
      title: "Mobile Friendly",
      description: "Works perfectly on iPhone, Android, and all devices"
    },
    {
      emoji: "🔒",
      title: "No Login Required",
      description: "No Instagram login or signup needed"
    },
    {
      emoji: "💎",
      title: "HD Quality",
      description: "Download in the highest quality available (up to 1080p)"
    },
    {
      emoji: "🆓",
      title: "Completely Free",
      description: "100% free forever. No hidden costs or subscriptions"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-background-secondary" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Use ReelGrab?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{benefit.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-text-secondary">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}