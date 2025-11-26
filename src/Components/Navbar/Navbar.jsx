import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa6";
import { BsFillBagHeartFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const NavList = (
    <ul className="hidden md:flex items-center justify-center gap-8">
      <li><a href="#" className="text-base text-black capitalize">jewelry & accessories</a></li>
      <li><a href="#" className="text-base text-black capitalize">clothing & shoes</a></li>
      <li><a href="#" className="text-base text-black capitalize">western dresses</a></li>
      <li><a href="#" className="text-base text-black capitalize">Ethnic wear</a></li>
      <li><a href="#" className="text-base text-black capitalize">Men's wear</a></li>
      <li><a href="#" className="text-base text-black capitalize">party wear</a></li>
      <li><a href="#" className="text-base text-black capitalize">Treational wear</a></li>
      <li><a href="#" className="text-base text-black capitalize">Kid's Wear</a></li>
    </ul>
  );

  return (
    <div className="w-full sticky top-0 left-0 bg-white">
      <div className="container">

        <div className="flex items-center justify-between h-[113px] border-b border-gray-200 relative">

          <div className="flex items-center gap-6">
            <button className="cursor-pointer">
              <CiSearch size="1.5em" />
            </button>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a href="/">
              <h1 className="text-3xl font-bold tracking-wide">╭❤️～SRI'S</h1>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-1">
               <FaUser size="1.5em" /> Account
            </a>

            <a href="#" className="flex items-center gap-1">
              <BsFillBagHeartFill size="1.5em" /> Shopping
            </a>
        <button className="block md:hidden cursor-pointer">
  <FaBars size="1.5em" />
</button>



          </div>

        </div>

        {}
        <div className="py-4 justify-center hidden md:flex">
          {NavList}
        </div>

      </div>
    </div>
  );
};

export default Navbar;



