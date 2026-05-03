import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-4 md:px-8 py-4 flex items-center justify-between bg-gray-900/80 backdrop-blur-md fixed top-0 z-50">
      <div className="text-2xl font-bold">
        <span className="bg-gradient-to-r from-purple-500 via-[#7B2FBE] to-[#9B4DCA] bg-clip-text text-transparent">
          Focusly
        </span>
      </div>

      <div className="hidden md:flex space-x-6 text-sm text-gray-300">
        <a href="#" className="hover:text-[#9B4DCA] transition-colors">Product</a>
        <a href="#" className="hover:text-[#9B4DCA] transition-colors">Pricing</a>
        <a href="#" className="hover:text-[#9B4DCA] transition-colors">Resources</a>
        <a href="#" className="hover:text-[#9B4DCA] transition-colors">Contact</a>
      </div>

      <button
        className="md:hidden text-gray-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 md:hidden flex flex-col space-y-4 px-6 py-4">
          <a href="#" className="hover:text-[#9B4DCA]">Product</a>
          <a href="#" className="hover:text-[#9B4DCA]">Pricing</a>
          <a href="#" className="hover:text-[#9B4DCA]">Resources</a>
          <a href="#" className="hover:text-[#9B4DCA]">Contact</a>
        </div>
      )}
    </nav>
  );
}
