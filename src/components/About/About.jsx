import React from "react";
import BgPolygone from "../../assets/png/Bgpolygone2.jpg";
import { FaUser } from "react-icons/fa";

const BgStyle = {
  backgroundImage: `url(${BgPolygone})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};

const About = ({ handlePopup }) => {
  return (
    <div style={BgStyle}>
      <div className="container">
        <h1 className="pt-20 tracking-wider text-4xl font-semibold text-primary text-center">
          Qui sommes-nous ?
        </h1>
        <div className="bg-white/80 p-10 my-10">
          VOTRE PARTENAIRE POUR UNE ALIMENTATION SAINE, ÉQUILIBRÉE ET
          DÉLICIEUSE. L’aventure Healthy food démarre en 2020 à Casablanca avec
          l’ambition de révolutionner le secteur des régimes minceur classiques
          en proposant des programmes sur mesure, avec des bons plats équilibrés
          et avec des quantités suffisantes.
        </div>
        <div className="pt-10 flex justify-center p-5">
          <button
            onClick={handlePopup}
            className="flex justify-center items-center gap-2 bg-primary text-xl h-[40px] text-white px-5 hover:scale-105 duration-300 p-5"
          >
            <FaUser />
            Mon compte
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
