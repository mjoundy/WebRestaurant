import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Hero from "./components/Hero/Hero";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

const App = () => {
  const [showPopup, setShowPopup] = React.useState(false);

  const handlePopup = () => {
    setShowPopup(true);
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Banner />
      <WhyChoose />
      <About />
      <Footer />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
};

export default App;
