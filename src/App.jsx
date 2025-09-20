import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [scale, setScale] = useState(false);

  useEffect(() => {
    const scaleTimer = setTimeout(() => setScale(true), 100);
    const loaderTimer = setTimeout(() => setLoading(false), 3000);

    return () => {
      clearTimeout(scaleTimer);
      clearTimeout(loaderTimer);
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute top-10 left-5 w-3 h-3 bg-blue-500 rounded-full animate-bounce blur-sm"></div>
        <div className="absolute top-20 right-10 w-2 h-2 bg-purple-500 rounded-full animate-bounce blur-sm"></div>
        <div className="absolute bottom-20 left-20 w-4 h-4 bg-pink-500 rounded-full animate-bounce blur-md"></div>

        <h1
          className={`text-3xl sm:text-5xl md:text-6xl font-bold transition-transform duration-700 transform ${
            scale ? "scale-125" : "scale-75"
          } px-2 sm:px-4 py-1 sm:py-2 rounded-2xl mb-8`}
        >
          Global Network
        </h1>

        <div className="w-8 h-8 sm:w-12 sm:h-12 border-4 border-t-emerald-600 border-b-emerald-600 border-l-transparent border-r-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <Header />
      <Routes>
        {/* Ici, tu affiches juste le carousel sur la page d'accueil */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
