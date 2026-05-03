import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] font-sans selection:bg-[#a8ff78] selection:text-black">
      {/* Background radial glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#a8ff78] opacity-5 blur-[150px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-[#0a0a0a]/70 border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-[#a8ff78]">Focusly</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[#888] hover:text-white transition-colors relative group">
              Features
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#pricing" className="text-[#888] hover:text-white transition-colors relative group">
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#login" className="text-[#888] hover:text-white transition-colors relative group">
              Login
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </a>
            <button className="bg-[#a8ff78] text-black font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 md:pt-52 md:pb-40 px-6 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#a8ff78]/30 rounded-full text-[#a8ff78] text-sm mb-8 backdrop-blur-sm">
          <span>✦</span> Now in public beta
        </div>
        <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] tracking-tight max-w-4xl">
          Do your best
          <br />
          work.{" "}
          <span className="italic text-[#a8ff78]">Finally.</span>
        </h1>
        <p className="mt-8 max-w-lg text-lg md:text-xl text-[#888] leading-relaxed">
          Focusly blends your tasks, calendar, and focus timer into one beautifully calm workspace.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 mt-10">
          <button className="bg-[#a8ff78] text-black font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-all shadow-lg shadow-[#a8ff78]/20">
            Start for free →
          </button>
          <button className="border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/5 transition-all">
            Watch demo
          </button>
        </div>
        <p className="mt-8 text-sm text-[#666]">★★★★★ Loved by 12,000+ makers and founders</p>
        <div className="mt-20 max-w-4xl w-full">
          <img
            src="https://images.pexels.com/photos/8473794/pexels-photo-8473794.jpeg"
            alt="Focusly workspace"
            className="w-full rounded-2xl shadow-2xl"
            style={{ boxShadow: "0 0 80px -20px rgba(168, 255, 120, 0.15)" }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">Everything you need.</h2>
          <p className="mt-4 text-2xl italic text-[#a8ff78]">Nothing you don&apos;t.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#181818] border border-[#222] rounded-2xl p-8 transition-all duration-300 hover:border-[#a8ff78]/40 hover:shadow-lg hover:shadow-[#a8ff78]/5">
            <div className="w-12 h-12 bg-[#a8ff78]/20 rounded-lg flex items-center justify-center text-2xl mb-6">
              ⚡
            </div>
            <h3 className="text-xl font-bold mb-3">Flow Mode</h3>
            <p className="text-[#888] leading-relaxed">
              Block distractions and enter a deep focus session with one click.
            </p>
          </div>
          <div className="bg-[#181818] border border-[#222] rounded-2xl p-8 transition-all duration-300 hover:border-[#a8ff78]/40 hover:shadow-lg hover:shadow-[#a8ff78]/5">
            <div className="w-12 h-12 bg-[#a8ff78]/20 rounded-lg flex items-center justify-center text-2xl mb-6">
              📅
            </div>
            <h3 className="text-xl font-bold mb-3">Unified Calendar</h3>
            <p className="text-[#888] leading-relaxed">
              See your tasks and events in a single, gorgeous timeline.
            </p>
          </div>
          <div className="bg-[#181818] border border-[#222] rounded-2xl p-8 transition-all duration-300 hover:border-[#a8ff78]/40 hover:shadow-lg hover:shadow-[#a8ff78]/5">
            <div className="w-12 h-12 bg-[#a8ff78]/20 rounded-lg flex items-center justify-center text-2xl mb-6">
              ✦
            </div>
            <h3 className="text-xl font-bold mb-3">Smart Priorities</h3>
            <p className="text-[#888] leading-relaxed">
              AI surfaces what actually matters today, so you never wonder what&apos;s next.
            </p>
          </div>
        </div>
      </section>

      {/* Photo / Lifestyle Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#a8ff78] uppercase tracking-[0.3em] text-sm font-medium">Built for Focus</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
              Your workspace, your rules.
            </h2>
            <p className="mt-6 text-lg text-[#888] leading-relaxed">
              Customize every corner of Focusly — from your theme and layout to your focus sounds and notification schedule.
            </p>
            <a href="#learn-more" className="inline-block mt-8 text-[#a8ff78] font-semibold hover:underline">
              Learn more →
            </a>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/8533773/pexels-photo-8533773.jpeg"
              alt="Customizable Focusly workspace"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-[#111] border border-[#222] rounded-3xl p-16 text-center relative overflow-hidden">
          {/* subtle glow behind card */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#a8ff78]/5 to-transparent" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to focus?</h2>
            <p className="mt-4 text-xl text-[#888]">
              Join thousands of people who&apos;ve already made the switch.
            </p>
            <button className="mt-10 bg-[#a8ff78] text-black font-semibold px-10 py-4 rounded-full hover:opacity-90 transition-all shadow-lg shadow-[#a8ff78]/20 text-lg">
              Get started free →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-[#222]">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <div className="text-2xl font-bold text-[#a8ff78]">Focusly</div>
          <p className="text-sm text-[#666]">© 2025 Focusly. Made with intention.</p>
          <div className="flex gap-6 text-sm text-[#666]">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
