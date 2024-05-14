import React from "react";
import HeroImg from "../../assets/repas-équilibré.png";

const Hero = () => {
  return (
    <div className="relative z-[-1]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          <div className="space-y-7 text-dark order-2 sm:order-1">
            <h1 className="text-5xl">
              Fresh & Healthy Meal Plan{" "}
              <span className="text-secondery font-cursive text-7xl">
                Delivery
              </span>{" "}
              in Morocco
            </h1>
            <p>Delicious Meals Delivered to your door From 600 Dhs per week</p>
          </div>
          <div className="order-2 sm:order-1">
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
