import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between  py-4 px-2 shadow-[0_1px_4px_0px_rgba(0,0,0,0.16)] font-sans">
      <div className="w-1/4 pl-6 cursor-pointer">Closet</div>
      <div className="w-1/2 hidden md:block">
        <ul className="flex space-x-7">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Women</li>
          <li className="cursor-pointer">Men</li>
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer group">
            Contact
            <ul className="hidden group-hover:block bg-black text-white py-2 px-4 text-sm absolute w-1/12">
              <li className="py-1">Item 111</li>
              <li className="py-1">Item 222</li>
              <li className="py-1">Item 333</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="w-1/4 hidden md:flex items-center space-x-4">
        <input
          placeholder="Login/Register"
          className="border-b  text-xs p-1 bg-transparent font-thin"
        />
        <AiOutlineHeart className="cursor-pointer" />
        <HiOutlineShoppingBag className="cursor-pointer" />
      </div>
      <div className="w-1/4  md:hidden flex justify-end pr-4 group">
        <GiHamburgerMenu className="cursor-pointer text-lg" />
        <ul className="hidden group-hover:block bg-black text-white  text-sm absolute w-screen">
          <li className="py-1">Item 111</li>
          <li className="py-1">Item 222</li>
          <li className="py-1">Item 333</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
