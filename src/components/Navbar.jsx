import { useState } from "react";
import { FiMenu, FiX, FiCode } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const showBrandMessage = () => {
    const toast = document.createElement("div");
    toast.innerText = "Welcome to my portfolio 👋 \nStill learning. Always building 🚀";
    
    // Improved styling for the toast to match a "clean" theme
    toast.className =
      "fixed top-24 left-1/2 -translate-x-1/2 bg-gray-900/90 text-indigo-400 px-6 py-3 rounded-2xl shadow-2xl text-sm z-[60] border border-white/10 backdrop-blur-md transition-all animate-bounce";

    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("opacity-0");
      setTimeout(() => toast.remove(), 500);
    }, 2500);
  };

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        
        <button 
          onClick={showBrandMessage} 
          className="flex items-center gap-2 group transition-all"
        >
          <div className="p-2 rounded-xl bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors">
          
          </div>
          <span className="font-bold text-lg tracking-tight dark:text-black hidden sm:block">
            Portfolio
          </span>
        </button>

        
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

       
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors"
        >
          {open ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-black dark:bg-black border-b dark:border-white/10 ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              onClick={() => setOpen(false)}
              href={link.href}
              className="py-3 text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-500"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}