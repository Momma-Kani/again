interface CTAButtonProps {
  label: string;
}

export default function CTAButton({ label }: CTAButtonProps) {
  return (
    <button className="relative inline-flex items-center justify-center px-8 py-3 rounded-xl text-white font-semibold bg-[#7B2FBE] hover:bg-[#9B4DCA] transition-colors shadow-lg shadow-[#7B2FBE]/30 hover:shadow-[#9B4DCA]/30 overflow-hidden group">
      <span className="absolute inset-0 bg-gradient-to-r from-[#7B2FBE] to-[#9B4DCA] opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="relative z-10">{label}</span>
    </button>
  );
}
