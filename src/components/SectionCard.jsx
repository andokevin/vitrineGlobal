import React from "react";
import { motion } from "framer-motion";

const SectionCard = ({ title, text, icon, isPrecious, illustrationImage }) => {
  return (
    <div className="flex-none w-full snap-center relative text-center px-6 overflow-hidden h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] flex items-center justify-center">
      
      {/* Container d'arrière-plan avec image */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src={illustrationImage}
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/90" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/60" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-12 border border-white/20 shadow-2xl"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            className="relative text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            {isPrecious ? (
              <>
                <span className="bg-gradient-to-r from-[#FBC02D] via-[#66BB6A] to-[#2E7D32] bg-clip-text text-transparent">
                  {title}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FBC02D]/10 via-[#66BB6A]/10 to-[#2E7D32]/10 blur-xl -z-10" />
              </>
            ) : (
              <span className="text-white drop-shadow-2xl">{title}</span>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            className="text-lg md:text-xl font-light mb-6 leading-relaxed text-white/90"
          >
            {isPrecious ? (
              <span className="bg-gradient-to-r from-[#FBC02D] via-[#66BB6A] to-[#2E7D32] bg-clip-text text-transparent font-medium">
                {text}
              </span>
            ) : (
              <span className="text-white/90">{text}</span>
            )}
          </motion.p>

          {!isPrecious && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
              className="text-6xl md:text-7xl text-[#66BB6A] mt-6 opacity-90"
            >
              {icon}
            </motion.div>
          )}

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
            className="mx-auto h-0.5 bg-gradient-to-r from-[#FBC02D] to-[#2E7D32] rounded-full mt-6"
          />
        </motion.div>
      </div>

      {/* Indicateur de défilement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white/60 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionCard;
