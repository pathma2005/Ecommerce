import React from "react";
import foot1 from "./img1.png";
import card1 from "./visa.png";
import card2 from "./master.png";
import card3 from "./paypal.png";
import card4 from "./amex.png";

import { IoLogoFacebook, IoLogoTwitter } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-white pt-[100px] flex flex-col items-center justify-center">

      <div className="container px-4">

        {/* TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 pb-20">

          {/* LEFT LOGO SECTION */}
          <div className="col-span-1 flex flex-col gap-6 max-w-[350px]">
            <a href="#">
              <img src={foot1} alt="logo" className="w-[150px]" />
            </a>

            <p className="text-[#000] text-base leading-6">
              Your trust makes our brand shine brighter. SRI’S is grateful to be
              part of your everyday style💗.
            </p>

            <div className="flex gap-4 text-black">
              <IoLogoFacebook size={20} />
              <IoLogoTwitter size={20} />
              <FaLinkedin size={20} />
              <GrInstagram size={20} />
            </div>
          </div>

          {/* CATALOG */}
          <div className="flex flex-col gap-5">
            <h4 className="uppercase font-semibold text-[#000000]">Catalog</h4>
            <ul className="flex flex-col gap-3 text-sm text-[#000]">
              <li>Necklaces</li>
              <li>Hoodies</li>
              <li>Jewelry</li>
              <li>T-Shirt</li>
              <li>Jacket</li>
            </ul>
          </div>

          {/* ABOUT US */}
          <div className="flex flex-col gap-5">
            <h4 className="uppercase font-semibold text-[#000000]">About Us</h4>
            <ul className="flex flex-col gap-3 text-sm text-[#000]">
              <li>Our Producers</li>
              <li>Sitemap</li>
              <li>FAQ</li>
              <li>About Us</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* CUSTOMER SERVICES */}
          <div className="flex flex-col gap-5">
            <h4 className="uppercase font-semibold text-[#000000]">Customer Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-[#000]">
              <li>Contact Us</li>
              <li>Track Your Order</li>
              <li>Product Care & Repair</li>
              <li>Book An Appointment</li>
              <li>Shipping & Returns</li>
            </ul>
          </div>

        </div>

      </div>

     {/* BOTTOM DARK BAR (COMPACT) */}
<div className="w-full bg-[#0d1116] py-4 flex flex-col items-center gap-3">

  {/* COPYRIGHT */}
  <p className="text-white text-[13px]">© 2025 coral.inc</p>

  {/* PAYMENT ICONS */}
  <div className="flex items-center gap-3">
    <img src={card1} className="w-[38px]" alt="visa" />
    <img src={card2} className="w-[38px]" alt="mastercard" />
    <img src={card3} className="w-[38px]" alt="paypal" />
    <img src={card4} className="w-[38px]" alt="amex" />
  </div>

  {/* SCROLL TO TOP */}
  <button className="mt-1 bg-white text-black p-1 rounded-full shadow-md">
    <FaArrowUp size={14} />
  </button>

</div>


    </div>
  );
};

export default Footer;



