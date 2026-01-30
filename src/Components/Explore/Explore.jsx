import React from "react";
import explore1 from "../../assets/Exploreimg1.png";
import explore2 from "../../assets/Exploreimg2.png";
import explore3 from "../../assets/Exploreimg3.png";
import explore4 from "../../assets/Exploreimg4.png";
import explore5 from "../../assets/Exploreimg5.png"

const Explore = () => {
  return (
    <div className="w-full bg-white flex items-center justify-center px-4 py-10">
      <div className="container mx-auto">

        {/* Title */}
        <div className="flex items-center justify-center mb-10">
          <h2 className="sm:text-4xl text-3xl text-black font-normal uppercase">
            Your Style Begins With 💜 Sri’s Collections ☺️
          </h2>
        </div>

        {/* FIXED GRID */}
        <div className="grid md:grid-cols-4 sm:grid-cols-4 grid-cols-1 gap-6">

          {/* Big image */}
          <div className="row-span-2 sm:col-span-2 h-[500px] relative group overflow-hidden">
            <img src={explore1} alt="" className="w-full h-full object-cover" />
            <div className="absolute top-5 -left-20 transition group-hover:left-0">
              <button className="text-sm text-white font-semibold uppercase px-3 py-1.5 bg-[#1e2832]">Sale</button>
            </div>
          </div>

          {/* Small images */}
          {[explore2, explore3, explore4, explore5].map((img, i) => (
            <div
              key={i}
              className="h-[240px] relative group overflow-hidden"
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
              <div className="absolute top-5 -left-20 transition group-hover:left-0">
                <button className="text-sm text-white font-semibold uppercase px-3 py-1.5 bg-[#1e2832]">Sale</button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Explore;







