import { Focus, BarChart3, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <Focus className="w-8 h-8 text-[#7B2FBE]" />,
    title: 'Deep Work Mode',
    desc: 'Enter distraction‑free sessions that adapt to your rhythm.',
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-[#9B4DCA]" />,
    title: 'Insightful Analytics',
    desc: 'Track your productivity patterns with elegant, real‑time dashboards.',
  },
  {
    icon: <Shield className="w-8 h-8 text-[#7B2FBE]" />,
    title: 'Privacy First',
    desc: 'Your data stays on your device. No tracking, no nonsense.',
  },
  {
    icon: <Zap className="w-8 h-8 text-[#9B4DCA]" />,
    title: 'Speed & Simplicity',
    desc: 'Minimal UI, maximum performance. Start in seconds.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#7B2FBE] to-[#9B4DCA] bg-clip-text text-transparent">
            Everything you need
          </span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Designed to blend power with calm. No distractions, just flow.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feat) => (
          <div
            key={feat.title}
            className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-[#7B2FBE] transition-colors group"
          >
            <div className="mb-4">{feat.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-[#9B4DCA] transition-colors">
              {feat.title}
            </h3>
            <p className="text-gray-400 text-sm">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
