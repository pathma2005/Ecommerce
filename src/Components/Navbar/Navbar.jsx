import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa6";
import { BsFillBagHeartFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isopen, setopen] = useState(false);

  const NavList = (
    <ul className="flex flex-col md:flex-row items-center gap-8">
      <li><a href="#" className="text-base  text-black capitalize">jewelry & accessories</a></li>
      <li><a href="#" className="text-base text-black capitalize">clothing & shoes</a></li>
      <li><a href="#" className="text-base text-black capitalize">western dresses</a></li>
      <li><a href="#" className="text-base text-black capitalize">Ethnic wear</a></li>
      <li><a href="#" className="text-base text-black capitalize">Men's wear</a></li>
      <li><a href="#" className="text-base text-black capitalize">party wear</a></li>
      <li><a href="#" className="text-base text-black capitalize">Traditional wear</a></li>
      <li><a href="#" className="text-base text-black capitalize">Kid's Wear</a></li>
    </ul>
  );

  return (
    <div className="w-full flex items-center justify-center min-h-[133px] h-full sticky top-0 left-0 pt-6 px-4 pb-4 bg-[#f4f4f5] z-50">

      <div className="container">

        {/* TOP NAVBAR */}
        <div className="flex items-center justify-between h-[113px] border-b border-gray-200 relative">

          {/* SEARCH */}
          <div className="flex items-center gap-6">
            <button className="cursor-pointer">
              <CiSearch size="1.5em" />
            </button>
          </div>

          {/* LOGO — stays EXACT same */}
          <div className="absolute left-1/2 -translate-x-1/2 mr-6 md:static md:transform-none">
            <a href="/">
              <h1 className="text-3xl font-bold tracking-wide">╭❤️～SRI'S</h1>
            </a>
          </div>

          {/* RIGHT ICONS — FIXED FOR MOBILE */}
          <div className="flex items-center gap-3 md:gap-6 flex-nowrap scale-90 md:scale-100">

            {/* ACCOUNT */}
            <a href="#" className="flex items-center gap-1">
              <FaUser size="1.5em" />
              <span className="hidden md:inline">Account</span>
            </a>

            {/* SHOPPING */}
            <a href="#" className="flex items-center gap-1">
              <BsFillBagHeartFill size="1.5em" />
              <span className="hidden md:inline">Shopping</span>
            </a>

            {/* MOBILE MENU BUTTON */}
            <button onClick={() => setopen(true)} className="block md:hidden cursor-pointer">
              <FaBars size="1.5em" />
            </button>

          </div>

        </div>

        {/* DESKTOP NAV LIST */}
        <div className="py-4 hidden md:flex justify-center">
          {NavList}
        </div>

      </div>

      {/* MOBILE MENU */}
    <nav
  className={`md:hidden fixed top-0 right-0 bg-[#f4f4f5] px-10 py-10 max-w-[350px] w-full h-[100dvh]
  transition duration-300 transform
  border-l border-l-[#000000]
  ${isopen ? "translate-x-0" : "translate-x-full"}`}
>

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setopen(false)}
          className="absolute top-10 right-10"
        >
          <IoClose size={"2rem"} color="black" />
        </button>

        {NavList}

        {/* MOBILE ACCOUNT + SHOPPING */}
        <div className="flex flex-col items-center justify-center mt-10 gap-6 md:hidden">
          <a href="#" className="flex items-center gap-2 text-black text-lg">
            <FaUser size="1.8em" /> Account
          </a>
          <a href="#" className="flex items-center gap-2 text-black text-lg">
            <BsFillBagHeartFill size="1.8em" /> Shopping
          </a>
        </div>

      </nav>

    </div>
  );
};

export default Navbar;





