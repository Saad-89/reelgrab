import { Link2, Clipboard, Download } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Link2,
      title: 'Copy Link',
      description: 'Open Instagram and copy the Reel URL from the share menu',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Clipboard,
      title: 'Paste URL',
      description: 'Paste the link in our download box above',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Download,
      title: 'Download',
      description: 'Click download and enjoy your video in HD',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="how-it-works" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 backdrop-blur-xl rounded-full mb-6 border border-white/10">
            <span className="text-sm font-bold text-purple-300">Simple Process</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Download Instagram Reels in just 3 simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative group">
                {/* Connector Line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-1 bg-gradient-to-r from-white/20 to-transparent z-0"></div>
                )}

                {/* Card */}
                <div className="relative">
                  <div className={`absolute -inset-1 bg-gradient-to-br ${step.gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                  <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all hover:scale-105 shadow-2xl">
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-2xl`}>
                      <Icon className="w-10 h-10 text-white" />
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 font-bold text-white text-lg">
                        {i + 1}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                    <p className="text-purple-200 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

