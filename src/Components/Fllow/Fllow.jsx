import React from "react";
import foll1 from "./img1.png";
import foll2 from "./img2.png";
import foll3 from "./img3.png";
import foll4 from "./img4.png";
import foll5 from "./img5.png";
import foll6 from "./img6.png";

const Fllow = () => {
  const followers = [
    { image: foll1 },
    { image: foll2 },
    { image: foll3 },
    { image: foll4 },
    { image: foll5 },
    { image: foll6 },
  ];

  return (
    <div className="w-full bg-[#f4f4f6] flex items-center justify-center py-[100px] px-4">
      <div className="container">

        {/* section title */}
        <div className="flex items-center justify-center mb-10">
          <h2 className="sm:text-4xl text-3xl text-black font-medium capitalize text-center">
           Stay Trendy — Follow on Instagram 😉
          </h2>
        </div>

        {/* ⭐ MOBILE = COLUMN  |  DESKTOP = ROW */}
        <div className="flex flex-col sm:flex-row sm:flex-nowrap gap-6 justify-center items-center">
          {followers.map((fol, inx) => (
            <img
              key={inx}
              src={fol.image}
              alt={`follower-${inx}`}
              className="w-[130px] h-[130px] object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>

        <div className="w-full flex flex-col items-center justify-center mt-16">
          <h2 className="sm:text-4xl text-3xl text-black font-medium capitalize text-center">
            Subscribe to the newsletter 💌
          </h2>
          <form className="flex items-center gap-6 max-w-[763px] w-full mt-10" action="#">
            <input
              className="max-w-[643px] w-full h-[32px] border-b border-black outline-none"
              type="email"
              placeholder="Email Address..."
            />
            <button
              className="min-w-[92px] w-full h-[32px] border-b border-black text-black font-normal uppercase cursor-pointer"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Fllow;














