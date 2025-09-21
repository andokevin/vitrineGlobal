import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Zap, Gem, Award } from "lucide-react";
import SectionCard from "./SectionCard";

const allSectionsData = [
  {
    id: 'precious',
    title: "Connecter Madagascar au reste du monde",
    text: "Global Network Solution n'est pas qu'un fournisseur de minéraux. Nous sommes votre partenaire stratégique, dédié à l'excellence.",
    isPrecious: true,
    illustrationImage: "/assets/images/saphir3.jpg",
  },
  {
    id: 'expertise',
    title: "Expertise Locale & Globale",
    text: "Nous combinons notre connaissance du marché malgache avec des standards internationaux pour garantir des produits fiables et adaptés.",
    icon: <Gem className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />,
    illustrationImage: "/assets/images/nnn.jpg",
  },
  {
    id: 'qualite',
    title: "Qualité et Pureté Certifiées",
    text: "Nos minéraux sont rigoureusement sélectionnés et contrôlés pour leur pureté et leur performance industrielle, confirmées par analyse en laboratoire.",
    icon: <Award className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />,
    illustrationImage: "/assets/images/nnn.jpg",
  },
  {
    id: 'sur-mesure',
    title: "Service Client Sur Mesure",
    text: "Chaque offre est adaptée à vos besoins spécifiques. Notre équipe est à votre écoute pour un service réactif, efficace et transparent.",
    icon: <Zap className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />,
    illustrationImage: "/assets/images/nnn.jpg",
  },
];


const AnimatedSectionsCarousel = () => {
  const scrollRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);

  const scrollToCard = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
      setActiveCard(index);
    }
  };

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      const nextCard = (activeCard + 1) % allSectionsData.length;
      scrollToCard(nextCard);
    }, 5000);
    return () => clearInterval(scrollInterval);
  }, [activeCard]);

  const nextCard = () => {
    const next = (activeCard + 1) % allSectionsData.length;
    scrollToCard(next);
  };

  const prevCard = () => {
    const prev = (activeCard - 1 + allSectionsData.length) % allSectionsData.length;
    scrollToCard(prev);
  };

  return (
    <div className="relative w-full overflow-hidden h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
      {/* Navigation */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <button
          onClick={prevCard}
          className="p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <button
          onClick={nextCard}
          className="p-3 bg-black/50 rounded-full text-white hover:bg-black/70 transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-0 p-0 scrollbar-hide snap-x snap-mandatory h-full"
      >
        {allSectionsData.map((section) => (
          <SectionCard
            key={section.id}
            title={section.title}
            text={section.text}
            icon={section.icon}
            isPrecious={section.isPrecious}
            illustrationImage={section.illustrationImage}
          />
        ))}
      </div>

      {/* Indicateurs */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {allSectionsData.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToCard(index)}
            className={`p-1 transition-all duration-300 ${
              index === activeCard ? 'scale-125' : 'hover:scale-110'
            }`}
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeCard
                  ? 'bg-gradient-to-r from-[#FBC02D] to-[#2E7D32] shadow-lg'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default AnimatedSectionsCarousel;
