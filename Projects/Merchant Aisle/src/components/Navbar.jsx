import React from "react";
import { BsSearch } from "react-icons/bs";


const Navbar = () => {
  return (
    <div className="w-full h-15 bg-indigo-700 text-white flex justify-between items-center px-5">
      {/* Logo part */}
      <div className="flex  justify-center items-center gap-x-2">
        <img src="public/souvenir.png" alt="" className="w-12" />
        <span className="text-white font-bold text-xl">Merchant Aisle</span>
      </div>

      {/* search bar */}

      <div className="flex  justify-center items-center gap-x-2">
        <input type="search" />
        <button><BsSearch size={20} /></button>
      </div>

      {/* cart icone and drop down summary */}
      <div>
        Cart
      </div>
    </div>
  );
};

export default Navbar;
