import { Heart, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20 py-10 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-[#7B2FBE]" />
          <span>by the Focusly team</span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-[#9B4DCA] transition-colors" aria-label="Github">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#9B4DCA] transition-colors" aria-label="Twitter">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#9B4DCA] transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
        <a href="#" className="hover:text-[#9B4DCA] transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-[#9B4DCA] transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-[#9B4DCA] transition-colors">Contact</a>
      </div>
    </footer>
  );
}
