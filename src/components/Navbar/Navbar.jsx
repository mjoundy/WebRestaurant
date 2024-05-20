import React from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";
import logo from "../../assets/png/logo-livraison-remove.png";

const Navlinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About",
    link: "/#",
  },
  {
    id: 3,
    name: "Contact",
    link: "/#",
  },
];

const Dropdownlinks = [
  {
    id: 1,
    name: "Vegetables",
    link: "/vegetables",
  },
  {
    id: 2,
    name: "Fruits",
    link: "/fruits",
  },
  {
    id: 3,
    name: "Grains",
    link: "/grains",
  },
];

const Navbar = ({ HandlePopup }) => {
  return (
    <div data-aos="fade" className="bg-white shadow-md">
      <div className="container flex justify-between py-4 sm:py-3">
        {/* Logo section */}
        <div className="font-bold text-3xl">
          <img src={logo} alt="" className="max-w-[100px]" />
        </div>
        {/* Navlinks section */}
        <div>
          <ul className="flex items-center gap-10">
            {Navlinks.map(({ id, name, link }) => (
              <li key={id}>
                <a
                  href={link}
                  className="inline-block hover:text-primary text-xl font-semibold"
                >
                  {name}
                  <span>
                    <FaCaretDown />
                  </span>
                </a>
              </li>
            ))}

            {/* Dropdown section */}
            <li className="relative group">
              <a
                href="/#"
                className="inline-block hover:text-primary/20 text-xl font-semibold"
              >
                <div className="flex items-center gap-2 py-2">
                  Dropdown
                  <span>
                    <FaCaretDown className="group-hover:rotate-180 duration-300" />
                  </span>
                </div>
              </a>
              <div className="absolute z-10 hidden group-hover:block w-[200px] bg-white text-black shadow-md p-2">
                <ul>
                  {Dropdownlinks.map(({ id, name, link }) => (
                    <li key={id}>
                      <a
                        href={link}
                        className="block py-2 px-4 hover:text-primary text-xl font-semibold"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {/* My Account button */}
            <li>
              <button
                onClick={HandlePopup}
                className="flex items-center gap-2 bg-secondary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300"
              >
                <FaUser />
                Mon compte 
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
