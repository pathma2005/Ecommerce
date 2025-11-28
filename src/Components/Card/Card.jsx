import React from "react";

const Card = ({ card }) => {

  return (
    <div className="flex flex-col">
      <img src={card?.image} alt={card?.title} />
      <div className="flex flex-col">

        <h4 className="text-base text-black font-semibold capitalize">
          {card?.title}
        </h4>

        <div className="flex items-center justify-between">
          <span className="text-base text-black font-normal capitalize">
            {card?.categories}
          </span>

          <div className="flex items-center gap-4">

            {/* PRICE */}
            <span
              className={`text-sm font-semibold capitalize text-black ${
                card?.discountPrice ? "line-through" : ""
              }`}
            >
              ₹{card?.price}
            </span>

            {/* DISCOUNT PRICE */}
            {card?.discountPrice && (
              <span className="text-sm text-[#ff6f61] font-semibold capitalize">
                ₹{card?.discountPrice}
              </span>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;




