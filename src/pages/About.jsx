import React from 'react';
import { Target, Shield, Award, Globe, Users, BarChart3 } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-20 text-gray-200">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B5E20]/20 via-[#D4AF37]/20 to-[#FBC02D]/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#1B5E20] via-[#D4AF37] to-[#FBC02D] bg-clip-text text-transparent mb-6">
              Global Network Solution
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              « Connecter Madagascar au reste du monde grâce à des solutions minières innovantes et fiables »
            </p>
          </div>
        </div>
      </section>

      {/* Qui sommes-nous */}
      <section className="py-16 bg-gray-800/80">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-2 h-8 bg-[#1B5E20] rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-white">Qui sommes-nous ?</h2>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                Global Network Solution est une entreprise spécialisée dans la fourniture de minéraux industriels 
                de haute qualité. Fondée à Madagascar, notre société combine expertise locale et standards 
                internationaux pour offrir des produits fiables et performants à nos clients partout dans le monde.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed">
                Grâce à notre engagement envers la qualité, la sécurité et l'innovation, nous fournissons 
                des solutions sur mesure adaptées aux besoins spécifiques de chaque client.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#1B5E20] to-[#D4AF37] p-1 rounded-2xl">
                <div className="bg-gray-900 p-8 rounded-2xl shadow-xl">
                  <Globe className="w-16 h-16 text-[#D4AF37] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Notre présence</h3>
                  <p className="text-gray-200">Opérant depuis Madagascar avec une vision globale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission et Valeurs */}
      <section className="py-16 bg-gray-800/80">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="w-4 h-4 bg-[#D4AF37] rounded-full mr-2"></div>
              <div className="w-4 h-4 bg-[#1B5E20] rounded-full mr-2"></div>
              <div className="w-4 h-4 bg-[#FBC02D] rounded-full"></div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Notre Mission et Valeurs</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Fournir des minéraux industriels de haute qualité avec intégrité et innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Qualité",
                description: "Chaque produit est sélectionné et contrôlé pour garantir performance et fiabilité",
                color: "text-[#1B5E20]"
              },
              {
                icon: Shield,
                title: "Fiabilité",
                description: "Nous respectons nos engagements et assurons un service client réactif",
                color: "text-[#D4AF37]"
              },
              {
                icon: Award,
                title: "Innovation",
                description: "Nous cherchons constamment à améliorer nos produits et procédés",
                color: "text-[#FBC02D]"
              },
              {
                icon: Users,
                title: "Transparence",
                description: "Communication claire et honnête avec nos clients",
                color: "text-[#66BB6A]"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <item.icon className={`w-12 h-12 ${item.color} mb-6`} />
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement et Légalité */}
      <section className="py-16 bg-gray-800/80">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <BarChart3 className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">Engagement, Légalité et Fiabilité</h2>
            <p className="text-gray-200 text-lg leading-relaxed mb-8">
              Global Network Solution est une entreprise légalement enregistrée à Madagascar, 
              disposant de tous les dossiers légaux nécessaires pour ses activités commerciales 
              (RCS, INSTAT, DGI, TCS).
            </p>
            <div className="bg-gradient-to-r from-[#1B5E20] to-[#D4AF37] p-1 rounded-2xl inline-block">
              <div className="bg-gray-900 px-8 py-4 rounded-2xl">
                <p className="text-gray-200 font-semibold">
                  Tous les documents officiels sont disponibles sur demande pour vérification
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-16 bg-gradient-to-r from-[#1B5E20] to-[#D4AF37] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Pourquoi choisir Global Network Solution ?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Qualité certifiée et contrôlée pour chaque produit",
              "Engagement ferme sur les délais de livraison",
              "Gestion complète de l'exportation pour plus de simplicité",
              "Traçabilité et transparence à chaque étape",
              "Service client dédié pour répondre rapidement à vos besoins",
              "Ressource stable conforme aux standards internationaux"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-[#1B5E20] rounded-full"></div>
                </div>
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
