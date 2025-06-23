import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {

// dropdown switch state varible 
const [dropdownSwitch, setDropdownSwitch] = useState(false);




  return (
    <div className="w-full h-20 bg-indigo-700 text-white flex justify-between items-center px-5 z-100">
      {/* Logo part */}
      <Link to={'/'}>
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

      {/* cart icone and drop down summary */}
      <div className="relative">
        <button className="rounded px-3.5 py-2 bg-white " onClick={() => setDropdownSwitch(!dropdownSwitch)}>
          <FaShoppingCart size={28} color="black" />
        </button>
        <div className="absolute bg-red-400 rounded-full size-5.5 text-center -top-1.5 -right-1.5 ">
          5
        </div>
        {/* drop down list */}
        <div className={` absolute bg-white right-20 text-black ${ dropdownSwitch ? 'flex' : 'hidden'} flex-col gap-y-4 p-5 rounded-xl border-2 border-blue-600 shadow-2xl shadow-blue-500/50`}>
          <ul className="flex flex-col gap-y-2">
            <li className="flex justify-between items-center p-1.5 px-2 rounded-xl bg-gray-200 w-75">
              <span className="flex justify-center items-center ">
                <img
                  src="https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="size-15 rounded-full "
                />
              </span>
              <span className=" flex flex-col justify-items-center ">
                <div className="font-medium">Lorem ipsum mt5</div>
                <div>&#36;679</div>
              </span>
              <span className="flex justify-center items-center ">
                <MdDelete  size={25}/>
              </span>
            </li>

              <li className="flex justify-between items-center p-1.5 px-2 rounded-xl bg-gray-200 w-75">
              <span className="flex justify-center items-center ">
                <img
                  src="https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="size-15 rounded-full "
                />
              </span>
              <span className=" flex flex-col justify-items-center ">
                <div className="font-medium">Lorem ipsum mt5</div>
                <div>&#36;679</div>
              </span>
              <span className="flex justify-center items-center ">
                <MdDelete  size={25}/>
              </span>
            </li>


              <li className="flex justify-between items-center p-1.5 px-2 rounded-xl bg-gray-200 w-75">
              <span className="flex justify-center items-center ">
                <img
                  src="https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="size-15 rounded-full "
                />
              </span>
              <span className=" flex flex-col justify-items-center ">
                <div className="font-medium">Lorem ipsum mt5</div>
                <div>&#36;679</div>
              </span>
              <span className="flex justify-center items-center ">
                <MdDelete  size={25}/>
              </span>
            </li>
          </ul>
            
         <Link to={'/checkout'}>
          <button className="text-lg font-semibold text-white bg-blue-700 w-full py-2.5 rounded-xl">Go To Cart</button>
         </Link>   
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
