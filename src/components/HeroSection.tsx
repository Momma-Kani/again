import { useEffect, useRef } from 'react';
import CTAButton from './CTAButton';

export default function HeroSection() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth - 0.5;
      const y = clientY / window.innerHeight - 0.5;
      orb.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Glowing orb with purple glow */}
      <div
        ref={orbRef}
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 transition-transform duration-200 ease-out"
        style={{
          background: 'radial-gradient(circle, #7B2FBE 0%, #9B4DCA 40%, rgba(123, 47, 190, 0) 70%)',
        }}
      />

      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-[#7B2FBE] to-[#9B4DCA] bg-clip-text text-transparent">
            Deep Focus,
          </span>{' '}
          <span className="text-white">Clutter‑Free</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Focusly helps you block distractions, track your time, and achieve more with a beautifully calm interface.
        </p>
        <div className="flex gap-4 justify-center">
          <CTAButton label="Get Started" />
          <button className="px-6 py-3 rounded-xl border border-gray-600 text-gray-300 hover:border-[#7B2FBE] hover:text-[#9B4DCA] transition-all">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}
