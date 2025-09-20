import React, { useState } from 'react';
import { ExternalLink, Eye, ChevronRight } from 'lucide-react';

const Card = ({ image, title, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex-none w-72 sm:w-80 md:w-96 p-1 rounded-3xl bg-gradient-to-br from-[#1B5E20] via-[#388E3C] to-[#D4AF37] relative overflow-hidden group transition-all duration-700 hover:scale-105 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Effet de lueur animée */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute -inset-10 bg-gradient-to-r from-[#D4AF37] via-[#66BB6A] to-[#1B5E20] rounded-full blur-xl animate-pulse group-hover:animate-spin group-hover:duration-3000"></div>
      </div>

      {/* Bordure intérieure gradient */}
      <div className="absolute inset-0.5 rounded-3xl bg-gradient-to-br from-[#1B5E20]/80 via-[#388E3C]/80 to-[#D4AF37]/80 z-5"></div>

      {/* Contenu principal */}
      <div className="relative z-10 bg-gradient-to-b from-gray-900 via-black to-gray-900 rounded-2xl overflow-hidden h-full">
        {/* Container d'image avec overlay */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 sm:h-56 md:h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay gradient sur l'image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>

          {/* Suppression du badge Premium et du bouton flottant */}
        </div>

        {/* Contenu texte */}
        <div className="p-6">
          {/* Titre avec effet gradient */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#D4AF37] group-hover:to-[#66BB6A] transition-all duration-500">
            {title}
          </h3>

          {/* Texte descriptif */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 transition-all duration-500 group-hover:text-gray-200">
            {text}
          </p>

          {/* Ligne séparatrice animée */}
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#66BB6A] rounded-full mb-4 transform origin-left transition-all duration-500 group-hover:w-full group-hover:scale-x-105"></div>

          {/* Footer de carte supprimé */}
        </div>

        {/* Effet de bordure au survol */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#D4AF37]/30 transition-all duration-500"></div>
      </div>

      {/* Effet de particules subtiles */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#66BB6A] rounded-full animate-bounce delay-150"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#FBC02D] rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
};

export default Card;
