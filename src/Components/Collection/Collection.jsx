import React from "react";
import coll1 from "../../assets/Collectionimg1.png";
import coll2 from  "../../assets/Collectionimg2.png"

const Collection = () => {
  return (
    <div className="relative w-full min-h-[776px] h-full flex items-center justify-center px-4 bg-[#010204] overflow-hidden mt-30">

      <div className="container">
        <div className="relative w-full h-[700px] flex ">

          {/* BLACK SIDE OVERLAY */}
          <div className="absolute right-0 top-0 h-full w-[45%] bg-black opacity-80 hidden md:block"></div>

          {/* TEXT + BUTTON */}
          <div className="absolute z-20 text-box md:left-[68%] left-1/2 top-1/2 -translate-x-1/2 md:-translate-x-0 -translate-y-1/2 flex flex-col gap-6 max-w-[511px] p-6 md:p-0">

          
            <p className="text-xl md:text-2xl text-white font-normal capitalize opacity-65">
              Discover a curated selection of styles crafted with elegance, comfort, and quality. Whether you’re looking
              for modern outfits, traditional wear, or everyday essentials, our collection brings together the best picks
              just for you.
            </p>

            <a
              href="#"
              className="max-w-[273px] w-full h-[72px] bg-white text-3xl text-black capitalize flex items-center justify-center opacity-65"
            >
              See Collections
            </a>

          </div>

        </div>
      </div>

      {/* LEFT IMAGE */}
      <div className="absolute left-0 top-0 md:w-[55%] w-full h-full">
        <img
          className="w-full h-full object-cover opacity-60"
          src={coll1}
          alt="collection-left"
        />
      </div>

      {/* RIGHT IMAGE */}
      <div className="absolute right-0 top-0 md:w-[55%] w-full h-full md:block hidden">
        <img
          className="w-full h-full object-cover opacity-65"
          src={coll2}
          alt="collection-right"
        />
      </div>

      {/* MOBILE FULL IMAGE BG */}
      <div className="absolute inset-0 md:hidden block">
        <img
          className="w-full h-full object-cover opacity-65"
          src={coll2}
          alt="mobile-bg"
        />
      </div>

    </div>
  );
};

export default Collection;









