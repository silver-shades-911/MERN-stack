import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Navbar = () => {

  return (
    <div className="w-full h-20 bg-indigo-700 text-white flex justify-between items-center px-5 z-100">
      {/* Logo part */}
      <Link to={"/"}>
        <div className="flex  justify-center items-center gap-x-2">
          <img src="souvenir.png" alt="" className="w-12" />
          <span className="text-white font-bold text-xl">Merchant Aisle</span>
        </div>
      </Link>

      {/* search bar */}
      <div className="flex  justify-center items-center gap-x-2">
        <input
          type="search"
          className="bg-slate-100 rounded-full text-black h-13 w-96 px-5.5 outline-0"
          placeholder="Search a product..."
        />
        <button className="rounded-full p-2 bg-indigo-950">
          <BsSearch size={20} />
        </button>
      </div>

      {/* cart */}
      <Cart />
    </div>
  );
};

export default Navbar;
