import React, { useRef, useEffect } from 'react';
import Card from './Card';

const cardsData = [
  { id: 1, image: '/assets/images/bb.jpg', title: 'Titre de la carte 1', text: 'Description de la carte 1...' },
  { id: 2, image: '/assets/images/bgj.jpg', title: 'Titre de la carte 2', text: 'Description de la carte 2...' },
  { id: 3, image: '/assets/images/nnn.jpg', title: 'Titre de la carte 3', text: 'Description de la carte 3...' },
  { id: 4, image: '/assets/images/saphir.jpg', title: 'Titre de la carte 4', text: 'Description de la carte 4...' },
];

const Carousel = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full py-2"> 
     
      <div className="text-center mb-4"> 
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Notre produit
        </h2>
        <p className="text-gray-600 mt-1"> 
          Découvrez nos produits phares disponibles à Madagascar
        </p>
      </div>

     
     
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-gray-800 text-white shadow-lg z-10 hidden md:block hover:bg-gray-700"
      >
        &lt;
      </button>

     
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 p-2 scrollbar-hide snap-x snap-mandatory scroll-smooth" 
      >
        {cardsData.map((card) => (
          <div key={card.id} className="flex-shrink-0 snap-center">
            <Card image={card.image} title={card.title} text={card.text} />
          </div>
        ))}
      </div>

      {/* Bouton droit */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-gray-800 text-white shadow-lg z-10 hidden md:block hover:bg-gray-700"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;