import React from "react";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import ExpeditionCTA from "../components/ExpeditionCTA";
import ImageTiles from "../components/ImageTiles";
import Testimonials from "../components/Testimonials";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <main className="main-content">
        <Hero />
        <FeaturedProducts />
        <ExpeditionCTA />
        <ImageTiles />
        <Testimonials />
      </main>
    </div>
  );
};

export default Home;
