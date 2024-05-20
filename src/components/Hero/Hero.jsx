import React from "react";
import HeroImg from "../../assets/png/repas-équilibré-remove.png";
import HeroBg from "../../assets/Bgimage.jpg";
import PrimaryButton from "../shared/PrimaryButton";

const BgStyle = {
  backgroundImage: `url(${HeroBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  return (
    <div style={BgStyle} className="relative z-[-1]">
      <div className="container py-16 sm:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          <div className="space-y-7 text-dark order-2 sm:order-1">
            <h1 className="text-5xl">
              Repas Frais et sain {" "}
              <span className="text-red-400 font-cursive text-7xl">
                Livraison 
              </span>{" "}
              à Casablanca
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" className="lg:pr-64">
            De délicieux repas livrés à votre porte À partir de 600 Dhs par semaine
            </p>
            <div data-aos="fade-up" data-aos-delay="500">
              <PrimaryButton />
            </div>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="relative z-30 order-2 sm:order-1"
          >
            <img
              src={HeroImg}
              alt=""
              className="w-full sm:scale-125 sm:translate-y-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
