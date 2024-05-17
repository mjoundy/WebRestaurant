import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="text-white mt-20">
      <div className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl">
        <div>
          {/* heading section */}
          <h1 className="py-10 text-3xl font-bold text-yellow text-center">
            Contact Us
          </h1>
          {/* grid section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-white pb-6">
            {/* Location */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <IoLocationSharp className="text-5xl" />
              </div>
              <p>
                Lotissement zineb lot 24 Ain Chouk
                <br /> Casablanca, 20 000
              </p>
            </div>
            {/* Email */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <MdEmail className="text-5xl" />
              </div>
              <p>info@goodfood.com</p>
              <p>hr@goodfood.com</p>
            </div>
            {/* Phone */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <FaPhone className="text-5xl" />
              </div>
              <p>06 33 38 04 95 - Sales and Services</p>
              <p>06 56 76 54 56 - Hiring Queries</p>
              <p>06 54 32 12 67 - Whatsapp</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-4 items-center bg-primary-dark">
        <p>2022 TCJ, All rights reserved</p>
        <div className="flex items-center gap-6">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & conditions</a>
        </div>
      </div>
      {/* copyright section */}
      
      </div>
    </div>
  );
};

export default Footer;
