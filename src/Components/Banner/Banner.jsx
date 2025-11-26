import React from "react";
import { BsFillBagHeartFill } from "react-icons/bs";
import bannerImg from "./img1.jpg";

const Banner = () => {
  return (
    <div className="w-full flex items-center justify-center bg-[#f4f4f5] py-[81px] z-50 px-4">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* LEFT TEXT SECTION */}
          <div className="flex flex-col max-w-[656px] w-full gap-8 items-start">
            <h2 className="md:text-7xl text-6xl font-light capitalize">Collections</h2>

            <p className="text-xl text-black font-light leading-[40px]">
              At SRI’S, we believe fashion is more than style — it is
              self–expression. Our curated range of jewelry, ethnic wear,
              western dresses, and accessories is crafted to elevate your look
              with elegance and comfort. Each product is carefully selected to
              offer exceptional quality, timeless design, and a seamless
              shopping experience for every customer.
            </p>

            <a
              href="#"
              className="max-w-[223px] w-full px-6 py-4 bg-[#1e2832]
              flex items-center justify-center gap-2 
              text-xl md:text-2xl text-white font-normal capitalize 
              rounded-lg hover:opacity-90 transition duration-200"
            >
              <BsFillBagHeartFill size="1.8em" /> Shop Now
            </a>
          </div>

          {/* RIGHT IMAGE BOX */}
          <div className="relative max-w-[442px] w-full max-h-[562px] h-full md:ml-20 flex items-center justify-center">

            {/* MAIN IMAGE */}
            <img
              src={bannerImg}
              alt="banner"
              className="rounded-[40px] w-full h-full object-cover"
            />

            {/* BORDER OUTLINE */}
            <div className="absolute top-0 -right-4 w-full h-full md:right-5 right-3 border-[3px] border-black rounded-[40px]"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;




  

