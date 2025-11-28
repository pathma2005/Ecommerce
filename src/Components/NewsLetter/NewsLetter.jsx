import React, { useState } from "react";
import news1 from "./img1.png";
import news2 from "./img2.png";
import news3 from "./img3.png";
import news4 from "./img4.png";
import news5 from "./img5.png";
import news6 from "./img6.png";
import news7 from "./img7.png";
import news8 from "./img8.png";
import news9 from "./img9.png";
import news10 from "./img10.png";
import news11 from "./img11.png";
import news12 from "./img12.png";
import news13 from "./img13.png";
import news14 from "./img14.png";
import news15 from "./img15.png";
import news16 from "./img16.png";
import news17 from "./img17.png";
import news18 from "./img18.png";
import news19 from "./img19.png";
import news20 from "./img20.png";
import { FaFilter } from "react-icons/fa";

const products = [
  { image: news1, title: "Western Dresses for Women", categories: "Dress", price: 1000, discountPrice: 850 },
  { image: news2, title: "Men Formal Clothes", categories: "Dress", price: 1000 },
  { image: news3, title: "Kids dress for Boys", categories: "Dress", price: 500, discountPrice: 350 },
  { image: news4, title: "Kids dress for Girls", categories: "Dress", price: 500 },
  { image: news5, title: "White Grey Men's Sneakers shoes", categories: "Shoes", price: 500 },
  { image: news6, title: "Toddler Baby Girls Kids shoes", categories: "Shoes", price: 150 },
  { image: news7, title: "Canvas Casual Women Shoes, Sneakers", categories: "Shoes", price: 280 },
  { image: news8, title: "Buy Kids Shoes for boys Online", categories: "Shoes", price: 180, discountPrice: 150 },
  { image: news9, title: "Classic Rimless Sunglasses Women ", categories: "Sun Glasses", price: 350, discountPrice: 300 },
  { image: news10, title: "Eye Glasses Branded Luxury Sunglasses For Men", categories: "Sun Glasses", price: 350 },
  { image: news11, title: "Wodison Classic Kids Sunglasses for Boys", categories: "Sun Glasses", price: 150, discountPrice: 120 },
  { image: news12, title: "3-Pairs Gift Kids Sunglasses Girls", categories: "Sun Glasses", price: 180 },
  { image: news13, title: "Fashion Accessories for Women ", categories: "Accessories", price: 500 },
  { image: news14, title: "The Modern Man's Fashion Accessories", categories: "Accessories", price: 500 },
  { image: news15, title: "Clips For Girls Baby Hair Accessories", categories: "Accessories", price: 300, discountPrice: 270 },
  { image: news16, title: "Boy Kids fashion accessories", categories: "Accessories", price: 300, discountPrice: 270 },
  { image: news17, title: "Designer Handbags Lady", categories: "Bags", price: 800 },
  { image: news18, title: "Best Sling Bags for Men ", categories: "Bags", price: 850, discountPrice: 820 },
  { image: news19, title: "Unicorn Backpack for Girls", categories: "Bags", price: 500 },
  { image: news20, title: "Car Kids School Bags For Boys", categories: "Bags", price: 500 },
];

const Newsletter = () => {
  const [selectedCategory, setCategory] = useState("All Products");
  const categories = ["All Products", "Dress", "Sun Glasses", "Shoes", "Accessories", "Bags"];

  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((item) => item.categories === selectedCategory);

  return (
    <div className="w-full flex items-center justify-center bg-white px-4 py-0">
      <div className="container">

        {/* TITLE */}
        <div className="flex items-center justify-center mb-10">
          <h2 className="sm:text-4xl text-3xl text-black font-normal capitalize">
            Stay Connected —Subscribe to the newsletter 💌
          </h2>
        </div>

        {/* CATEGORY + FILTER ROW */}
        <div className="flex items-center justify-between mb-10">

          {/* SCROLLABLE CATEGORIES */}
          <div className="flex items-center gap-4 md:gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {categories.map((cate, index) => (
              <button
                onClick={() => setCategory(cate)}
                key={index}
                className={`text-base ${
                  cate === selectedCategory ? "text-[#ff6f61]" : "text-[#000000]"
                } font-semibold capitalize cursor-pointer`}
              >
                {cate}
              </button>
            ))}
          </div>

          {/* FILTER BUTTON */}
          <button className="px-4 py-1.5 bg-[#1e2832] text-base text-white font-normal capitalize flex items-center gap-1.5 cursor-pointer shrink-0 ml-4">
            <FaFilter size={"1rem"} /> Filter
          </button>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          {filteredProducts.map((card, index) => (
            <div key={index}>
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-100 object-contain rounded-lg bg-white transition-transform duration-300 hover:scale-105"
              />
              <h3 className="mt-2 font-semibold">{card.title}</h3>
              <p>{card.categories}</p>
              <div className="flex items-center gap-4">
                <p className={`${card.discountPrice ? "line-through text-gray-400" : "font-bold"}`}>
                  ₹{card.price}
                </p>
                {card.discountPrice && (
                  <p className="font-bold text-[#ff6f61]">₹{card.discountPrice}</p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Newsletter;





