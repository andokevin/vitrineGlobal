import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden border-t border-gray-800">
      {/* Ligne d'accent colorée */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#1B5E20] via-[#D4AF37] to-[#FBC02D]" />
      
      {/* Effet de motif géométrique subtil */}
      <div className="absolute inset-0 opacity-[0.03] bg-geometric-pattern" />
      
      <div className="container mx-auto py-6 px-6 relative z-10">
        {/* Grille principale */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Colonne Brand */}
          <div className="lg:col-span-4">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#66BB6A] to-[#D4AF37] bg-clip-text text-transparent mb-2">
                GLOBAL NETWORK
              </h2>
              <p className="text-gray-400 mb-4 leading-relaxed text-xs">
                « Connecter Madagascar au reste du monde grâce à des solutions réseau innovantes et fiables »
              </p>
            </div>
          </div>

          {/* Colonne Navigation */}
          <div className="lg:col-span-2 lg:col-start-6">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-white flex items-center mb-2">
                <div className="w-3 h-0.5 bg-[#D4AF37] mr-2"></div>
                Navigation
              </h4>
              <ul className="space-y-1">
                {[
                  { name: 'Accueil', path: '/' },
                  { name: 'À propos', path: '/about' },
                  { name: 'Contact', path: '/contact' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-xs font-medium group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200 block">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Colonne Contact */}
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white flex items-center mb-2">
                <div className="w-3 h-0.5 bg-[#FBC02D] mr-2"></div>
                Connectons-nous
              </h4>
              
              {/* Informations de contact */}
              <div className="space-y-2">
                {[
                  { icon: <Mail size={16} />, text: 'globalnetworksolution24@gmail.com' },
                  { icon: <Phone size={16} />, text: '+261 33 35 684 01' },
                  { icon: <MapPin size={16} />, text: 'Manakara, Madagascar' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 group cursor-pointer">
                    <div className="p-1 bg-gray-900 rounded-lg group-hover:bg-[#FBC02D] group-hover:text-black transition-all duration-200">
                      {item.icon}
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-colors duration-200 text-xs">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="border-t border-gray-800 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-xs text-gray-500">
              © 2025 Global Network Solution. Tous droits réservés.
            </p>
            
            {/* Liens légaux */}
            <div className="flex space-x-4 text-xs text-gray-500">
              <a href="#" className="hover:text-[#D4AF37] transition-colors duration-200">Confidentialité</a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors duration-200">Conditions</a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors duration-200">Cookies</a>
            </div>
          </div>
        </div>
      </div>

      {/* Styles CSS pour le motif géométrique */}
      <style jsx>{`
        .bg-geometric-pattern {
          background-image: 
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0);
          background-size: 20px 20px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
