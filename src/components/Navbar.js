import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="flex  py-4 px-2 shadow-[0_1px_4px_0px_rgba(0,0,0,0.16)] font-sans">
      <div className="w-1/4 pl-6 cursor-pointer">Closet</div>
      <div className="w-1/2 ">
        <ul className="flex space-x-7">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Women</li>
          <li className="cursor-pointer">Men</li>
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
      <div className="w-1/4 flex items-center space-x-4">
        <input
          placeholder="Login/Register"
          className="border-b  text-xs p-1 bg-transparent font-thin"
        />
        <AiOutlineHeart className="cursor-pointer" />
        <HiOutlineShoppingBag className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
