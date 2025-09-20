// src/pages/Home.js
import React from "react";
import Carousel from "../components/Carousel";
import AnimatedSectionsCarousel from "../components/AnimatedSectionsCarousel";
import AnalysisResultsCarousel from "../components/AnalysisResultsCarousel";

const Home = () => {
  return (
    <div>
     <AnimatedSectionsCarousel />
      <Carousel />
      <AnalysisResultsCarousel />

    </div>
  );
};

export default Home;
