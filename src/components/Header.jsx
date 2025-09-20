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
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-md ${
      isScrolled 
        ? 'bg-gradient-to-r from-[#0F203F] via-[#A9A9A9] to-[#DAA520] shadow-lg' 
        : 'bg-gradient-to-r from-[#0B3B2D] via-[#2E7D32]/80 to-[#1B5E20]'
    }`}>

      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl sm:text-lg md:text-2xl font-bold tracking-wide transform transition-transform duration-300 hover:scale-105"
        >
          <span className="bg-gradient-to-r from-[#D4AF37] via-[#FBC02D] to-[#FFD700] bg-clip-text text-transparent">
            GLOBAL NETWORK
          </span>
        </Link>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center space-x-8 font-sans text-lg">
          {menuItems.map((item) => (
            <li key={item.name} className="relative cursor-pointer">
              <Link
                to={item.path}
                className="text-white hover:text-[#D4AF37] transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#FBC02D] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Bouton menu mobile */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden focus:outline-none p-2 rounded-lg hover:bg-[#2E7D32] transition-colors duration-200"
        >
          {mobileMenuOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </button>
      </nav>

      {/* Ligne dégradée accent */}
      <div className="h-1 w-full bg-gradient-to-r from-[#D4AF37] via-[#FBC02D] to-[#FFD700]" />

      {/* Menu mobile */}
      <div
        className={`md:hidden transition-all duration-300 ${
          mobileMenuOpen 
            ? "max-h-screen opacity-100 bg-gradient-to-b from-[#1B5E20] to-[#2E7D32]" 
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-6 py-6 px-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-lg text-white hover:text-[#D4AF37] transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/10 w-full text-center"
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