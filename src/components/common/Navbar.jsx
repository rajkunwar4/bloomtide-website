import React from "react";
import { Link } from "react-router-dom";
import { hamburger, mainLogo } from "../../../public/images/Landing";

const navLinks = [
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Company",
    link: "/company",
  },
  {
    name: "Blog",
    link: "/services",
  },
  {
    name: "Career",
    link: "/career",
  },
];

function Navbar() {
  return (
    <div className="fixed z-10 flex h-[62px] px-10 justify-between items-center self-stretch border-b border-[rgba(26,55,93,0.1)] bg-white shadow-[0_4px_16px_0_rgba(26,55,93,0.04)] w-full">
      {/* Logo */}
      <Link
        to={"/"}
        className="flex flex-row justify-center items-center gap-[5.64px]"
      >
        <img src={mainLogo} alt="" />
      </Link>
      {/* NavLinks */}
      <div className="hidden md:flex flex-row gap-[60px] items-center  ">
        <div className="flex flex-row items-center gap-2 font-Inter text-[#3E3E3E] text-center text-base font-light leading-normal">
          {navLinks.map((item, i) => (
            <Link to={"/"} key={i} className="px-[10px] py-[18px]">
              {item.name}
            </Link>
          ))}
        </div>
        <button className="p-[10px] text-white bg-[#08BFF7] rounded h-fit">
          Contact Us
        </button>
      </div>
      {/* mobile hamburger */}
      <img src={hamburger} alt="" className="md:hidden" />
    </div>
  );
}

export default Navbar;
