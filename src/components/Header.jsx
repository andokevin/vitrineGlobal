import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Effet pour détecter le scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-lg ${
        isScrolled
          ? 'bg-gradient-to-r from-[#1a365d]/90 via-[#2a4365]/80 to-[#2c5282]/80 shadow-md'
          : 'bg-gradient-to-r from-[#2d3748]/90 via-[#4a5568]/80 to-[#718096]/80'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl sm:text-lg md:text-2xl font-bold tracking-wide transform transition-transform duration-300 hover:scale-105"
        >
          <span className="bg-gradient-to-r from-[#63b3ed] via-[#4299e1] to-[#3182ce] bg-clip-text text-transparent">
            GLOBAL NETWORK
          </span>
        </Link>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center space-x-8 font-sans text-lg">
          {menuItems.map((item) => (
            <li key={item.name} className="relative cursor-pointer">
              <Link
                to={item.path}
                className="text-white hover:text-[#63b3ed] transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#63b3ed] to-[#4299e1] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Bouton menu mobile */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden focus:outline-none p-2 rounded-lg hover:bg-[#4a5568] transition-colors duration-200"
        >
          {mobileMenuOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </button>
      </nav>

      <div className="h-1 w-full bg-gradient-to-r 
        from-[#1a365d] via-[#4299e1] via-[#63b3ed] via-[#ebf8ff] via-[#2b6cb0] to-[#1a365d] 
        rounded-full
        shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.5),0_2px_10px_rgba(0,0,0,0.4)]" />

      {/* Menu mobile */}
      <div
        className={`md:hidden transition-all duration-300 ${
          mobileMenuOpen 
            ? "max-h-screen opacity-100 bg-gradient-to-b from-[#2d3748] to-[#4a5568]" 
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-6 py-6 px-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-lg text-white hover:text-[#63b3ed] transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/10 w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;