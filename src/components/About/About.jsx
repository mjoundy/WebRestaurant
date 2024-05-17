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

const About = () => {
  return (
    <div style={BgStyle}>
      <div className="container">
        <h1 className="pt-20 tracking-wider text-4xl font-semibold text-primary text-center">
          About Us
        </h1>
        <div className="bg-white/80 p-10 my-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          quo expedita odit natus porro ducimus ullam. Sint odit atque assumenda
          voluptate in maxime fugiat excepturi hic eaque dolorum. Vero, eius?
        </div>
        <div className="pt-10 flex justify-center p-5">
          <button className="flex justify-center items-center gap-2 bg-primary text-xl h-[40px] text-white px-5 hover:scale-105 duration-300 p-5">
            <FaUser />
            My Account
          </button>
        </div>
      </div>
      <div>
      
      </div>
    </div>
   
   
  );
};

export default About;
