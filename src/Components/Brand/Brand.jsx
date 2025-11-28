import React from "react";
import brand1 from "./img1.jpg";
import brand2 from "./img2.png";
import brand3 from "./img4.png";
import brand4 from "./img3.png";
import brand5 from "./img5.png";

const Brand = () => {
  return (
    <div className="w-full bg-white flex items-center justify-center px-4 py-16">
      <div className="container">

        {/* MOBILE = horizontal scroll  
            DESKTOP = centered row */}
        <div className="flex flex-nowrap items-center gap-10 md:gap-20 overflow-x-auto md:overflow-visible md:justify-center py-10 scrollbar-hide">

          <img src={brand1} alt="brand1" className="w-20 h-20 object-contain" />
          <img src={brand2} alt="brand2" className="w-20 h-20 object-contain" />
          <img src={brand3} alt="brand3" className="w-20 h-20 object-contain" />
          <img src={brand4} alt="brand4" className="w-20 h-20 object-contain" />
          <img src={brand5} alt="brand5" className="w-20 h-20 object-contain" />

        </div>
      </div>
    </div>
  );
};

export default Brand;

