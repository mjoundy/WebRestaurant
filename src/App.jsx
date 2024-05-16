import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Hero from "./components/Hero/Hero";
import WhyChoose from "./components/WhyChoose/WhyChoose";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Banner />
      <WhyChoose />
    </div>
  );
};

export default App;
