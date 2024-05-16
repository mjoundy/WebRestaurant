import React from "react";
import Citron from "../../assets/png/citron.png";
import Tomate from "../../assets/png/Tomate.png";
import Epinard from "../../assets/png/epinard.png";
import Apple from "../../assets/png/Pomme.png";
import Kiwi from "../../assets/png/kiwi.png";
import PrimaryButton from "../shared/PrimaryButton";

const Banner = () => {
  return (
    <div className="container py-14 relative">
      <h1 className="py-8 tracking-wider text-2xl font-semibold text-dark text-center">
        Taste the Healthy Difference
      </h1>
      <div className="space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
          <div>
            <p>
              Nous sommes dans un monde moderne. Notre service de livraison de
              plans sains, une délicieuse nourriture à Casablanca est la réponse
              pour ceux qui veulent manger sainement, gagner du temps
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
          <div>
            <p>
              Nous sommes dans un monde moderne. Notre service de livraison de
              plans sains, une délicieuse nourriture à Casablanca est la réponse
              pour ceux qui veulent manger sainement, gagner du temps
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 sm:mt-14">
        <PrimaryButton />
      </div>

      <div className="absolute top-5 left-16 sm:left-0 sm:top-0 opacity-50 sm:opacity-100">
        <img src={Epinard} alt="" className="max-w-[160px]" />
      </div>
      <div className="absolute top-0 left-0 opacity-50 sm:opacity-100">
        <img src={Tomate} alt="" className="max-w-[280px]" />
      </div>
      <div className="absolute top-10 right-16 sm:right-20 opacity-50 sm:opacity-100">
        <img src={Citron} alt="" className="max-w-[200px]" />
      </div>
      <div className="hidden sm:block absolute bottom-0 right-0">
        <img src={Apple} alt="" className="max-w-[200px]" />
      </div>
      <div className="absolute top-1/5 -translate-y-1/2 left-1/5 -translate-x-1/2 opacity-50 sm:opacity-100">
        <img src={Kiwi} alt="" className="max-w-[180px]" />
      </div>
    </div>
  );
};

export default Banner;
