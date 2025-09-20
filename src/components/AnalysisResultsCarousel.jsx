import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TestTube, Award, Download, Gem, CheckCircle } from 'lucide-react';

const AnalysisResultsDisplay = () => {
  const analysisData = {
    laboratory: "LABO CHIMIE MADAGASCAR",
    date: "10 décembre 2024",
    method: "7000B Spectr AA",
    results: [
      { metal: "Platine (Pt)", value: "12,25 %", highlight: true, icon: <Gem className="w-6 h-6" /> },
      { metal: "Palladium (Pd)", value: "9,47 %", highlight: false },
      { metal: "Rhodium (Rh)", value: "7,31 %", highlight: false },
      { metal: "Iridium (Ir)", value: "7,92 %", highlight: false },
      { metal: "Rhénium (Re)", value: "8,24 %", highlight: false },
      { metal: "Or (Au)", value: "0,61 %", highlight: false }
    ]
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-2 px-4">
      {/* En-tête */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Analyse Certifiée
        </motion.h2>
        <p className="text-gray-400 text-lg">
          Résultats de laboratoire indépendant - Qualité supérieure garantie
        </p>
      </div>

      {/* Grid principale */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Colonne gauche - Résultats détaillés */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Carte Laboratoire */}
          <div className="bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] rounded-3xl p-6 border border-[#4CAF50] shadow-2xl">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-white/10 rounded-xl">
                <TestTube className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold">{analysisData.laboratory}</h3>
                <p className="text-[#D4AF37] text-sm">{analysisData.date}</p>
              </div>
            </div>
            <div className="bg-black/20 rounded-xl p-4">
              <p className="text-gray-300 text-sm">Méthode: {analysisData.method}</p>
            </div>
          </div>

          {/* Carte Résultats */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-gray-700 shadow-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <BarChart3 className="w-8 h-8 text-[#D4AF37]" />
              <h3 className="text-white text-xl font-semibold">Composition Minérale</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {analysisData.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    result.highlight
                      ? 'border-[#D4AF37] bg-gradient-to-br from-[#D4AF37]/20 to-[#FBC02D]/20'
                      : 'border-gray-700 bg-gray-800/50'
                  }`}
                >
                  <div className="text-center">
                    {result.icon && (
                      <div className="text-[#D4AF37] mb-2">
                        {result.icon}
                      </div>
                    )}
                    <span className={`text-sm font-medium ${
                      result.highlight ? 'text-[#D4AF37]' : 'text-gray-300'
                    }`}>
                      {result.metal}
                    </span>
                    <div className={`text-xl font-bold mt-2 ${
                      result.highlight 
                        ? 'bg-gradient-to-r from-[#D4AF37] to-[#FBC02D] bg-clip-text text-transparent'
                        : 'text-white'
                    }`}>
                      {result.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Colonne droite - Qualité Premium */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Carte Qualité Exceptionnelle */}
          <div className="bg-gradient-to-br from-[#D4AF37] to-[#FBC02D] rounded-3xl p-1 shadow-2xl">
            <div className="bg-gray-900 rounded-3xl p-8 h-full">
              <div className="flex flex-col items-center mb-6">
                {/* Image ajoutée ici */}
                <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="Platine de Madagascar" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[#D4AF37]/20 rounded-xl">
                    <Award className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-white text-2xl font-bold">Platine d'Exception</h3>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-gray-300">12,25% de pureté certifiée</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-gray-300">Propriétés catalytiques exceptionnelles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-gray-300">Conformité aux normes internationales</span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Notre platine de Madagascar, avec une teneur certifiée de 12,25%, est recherché 
                pour ses propriétés exceptionnelles. Chaque lot est rigoureusement contrôlé pour 
                garantir une qualité premium.
              </p>

              <button className="w-full bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#1B5E20]/20 transition-all duration-300 flex items-center justify-center space-x-3 group">
                <Download size={24} />
                <span className="text-lg">Télécharger le rapport complet</span>
              </button>
            </div>
          </div>

          {/* Badge de Certification */}
          <div className="bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] rounded-3xl p-6 text-center">
            <div className="bg-white/10 rounded-2xl p-4">
              <h4 className="text-white font-semibold mb-2">Certification Internationale</h4>
              <p className="text-[#D4AF37] text-sm">Normes ISO 9001:2015</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Note informative */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-12 text-gray-400 text-sm"
      >
        * Analyse certifiée par laboratoire indépendant - Rapport complet disponible sur demande
      </motion.div>
    </div>
  );
};

export default AnalysisResultsDisplay;