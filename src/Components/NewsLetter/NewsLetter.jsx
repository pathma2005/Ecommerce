import React, { useState } from "react";
import "./NewsLetter.css";

import news1 from "../../assets/dress1.png";
import news2 from "../../assets/dress2.png";
import news3 from "../../assets/dress3.png";
import news4 from "../../assets/dress4.png";
import news5 from "../../assets/Shoe1.png";
import news6 from "../../assets/Shoe2.png";
import news7 from "../../assets/Shoe3.png";
import news8 from "../../assets/shoe4.png";
import news9 from "../../assets/sunglass1.png";
import news10 from "../../assets/sunglass2.png";
import news11 from "../../assets/sunglass3.png";
import news12 from "../../assets/sunglass4.png";
import news13 from "../../assets/acc1.png";
import news14 from "../../assets/acc2.png";
import news15 from "../../assets/acc3.png";
import news16 from "../../assets/acc4.png";
import news17 from "../../assets/bag1.png";
import news18 from "../../assets/bag2.png";
import news19 from "../../assets/bag3.png";
import news20 from "../../assets/bag4.png";
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
  { image: news9, title: "Classic Rimless Sunglasses Women", categories: "Sun Glasses", price: 350, discountPrice: 300 },
  { image: news10, title: "Luxury Sunglasses For Men", categories: "Sun Glasses", price: 350 },
  { image: news11, title: "Kids Sunglasses for Boys", categories: "Sun Glasses", price: 150, discountPrice: 120 },
  { image: news12, title: "3-Pairs Kids Sunglasses Girls", categories: "Sun Glasses", price: 180 },
  { image: news13, title: "Fashion Accessories for Women", categories: "Accessories", price: 500 },
  { image: news14, title: "Men's Fashion Accessories", categories: "Accessories", price: 500 },
  { image: news15, title: "Baby Hair Clips Girls", categories: "Accessories", price: 300, discountPrice: 270 },
  { image: news16, title: "Kids fashion accessories", categories: "Accessories", price: 300, discountPrice: 270 },
  { image: news17, title: "Designer Handbags Lady", categories: "Bags", price: 800 },
  { image: news18, title: "Best Sling Bags for Men", categories: "Bags", price: 850, discountPrice: 820 },
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
            Stay Connected — Subscribe to the newsletter 💌
          </h2>
        </div>

        {/* CATEGORY + FILTER */}
        <div className="flex items-center justify-between mb-10">
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

          <button className="px-4 py-1.5 bg-[#1e2832] text-base text-white font-normal capitalize flex items-center gap-1.5 cursor-pointer shrink-0 ml-4">
            <FaFilter size={"1rem"} /> Filter
          </button>
        </div>

        {/* PRODUCT CARDS */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          {filteredProducts.map((card, index) => (
            <div
              key={index}
              className="relative bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              {/* Wishlist Button */}
              <button className="absolute top-3 right-3 bg-white shadow-md rounded-full p-2 hover:bg-red-500 hover:text-white transition">
                ❤️
              </button>

              <img
                src={card.image}
                alt={card.title}
                className="w-full h-60 object-contain rounded-lg bg-white transition-transform duration-300 hover:scale-105"
              />

              <h3 className="mt-3 font-semibold text-black">{card.title}</h3>

              <p className="text-gray-500 text-sm">{card.categories}</p>

              {/* Star Ratings */}
              <div className="flex text-yellow-400 text-sm mb-1 mt-1">
                ⭐⭐⭐⭐⭐
              </div>

              <div className="flex items-center gap-4 mt-2">
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













