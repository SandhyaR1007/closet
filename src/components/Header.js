import React from "react";
import category1 from "../assets/category-1.jpg.webp";
import category2 from "../assets/category-2.jpg.webp";
import category3 from "../assets/category-3.jpg.webp";
import category4 from "../assets/category-4.jpg.webp";
import category5 from "../assets/category-5.jpg.webp";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="w-full md:w-1/2 relative pt-2 md:pr-1 ">
        <img
          src={category1}
          alt="category1"
          className="h-[91.5vh] bg-contain"
        />
        <div className="absolute top-1/2  -translate-y-1/2 w-2/3 ml-6">
          <h2 className="text-3xl my-4">Women's fashion</h2>
          <p className="text-xs font-thin my-4">
            Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
            incidid-unt labore edolore magna aliquapendisse ultrices gravida.
          </p>
          <a href="/" className="text-sm">
            SHOP NOW
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col pt-2 pl-1">
        <div className="flex pb-1">
          <div className="w-1/2 relative">
            <img src={category2} alt="category1" className="pr-1 h-[45vh]" />
            <div className="absolute top-1/2  -translate-y-1/2 w-2/3 ml-6">
              <h2 className="text-xl my-2">Men's fashion</h2>
              <p className="text-xs font-thin my-2">200 items</p>
              <a href="/" className="text-sm">
                SHOP NOW
              </a>
            </div>
          </div>
          <div className="w-1/2 relative">
            <img src={category3} alt="category1" className="pl-1 h-[45vh]" />
            <div className="absolute top-1/2  -translate-y-1/2 w-2/3 ml-6">
              <h2 className="text-xl my-2">Kid's fashion</h2>
              <p className="text-xs font-thin my-2">200 items</p>
              <a href="/" className="text-sm">
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
        <div className="flex pt-1">
          <div className="w-1/2 relative">
            <img src={category4} alt="category1" className="pr-1 h-[45vh]" />
            <div className="absolute top-1/2  -translate-y-1/2 w-2/3 ml-6">
              <h2 className="text-xl my-2">Beauty</h2>
              <p className="text-xs font-thin my-2">200 items</p>
              <a href="/" className="text-sm">
                SHOP NOW
              </a>
            </div>
          </div>
          <div className="w-1/2 relative">
            <img src={category5} alt="category1" className="pl-1 h-[45vh]" />
            <div className="absolute top-1/2  -translate-y-1/2 w-2/3 ml-6">
              <h2 className="text-xl my-2">Accessories</h2>
              <p className="text-xs font-thin my-2">200 items</p>
              <a href="/" className="text-sm">
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
