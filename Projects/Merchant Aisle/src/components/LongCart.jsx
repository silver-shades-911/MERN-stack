import React from "react";
import Rating from "./Rating";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { change_qyt, remove_from_cart } from "../features/cart/cartSlice";

const LongCart = ({ product }) => {
  // dispatch
  const dispatch = useDispatch();

  //handleQyt

  const handleQyt = (e) => {
    dispatch(
      change_qyt({
        pID: product.id,
        qyt: e.target.value,
      })
    );
  };

  // options

  //! IMP point about scoping
  // if u run this directly options scope is limited to if block only
  // if (product.inStock !== 0) {
  //   let options = Array.from({ length: product.inStock }, (_, i) => i + 1);
  //   console.log("options =>", options);
  // };

  // soluton

  // define array at component
  let options = [];

  // check condition and then modify
  if (product.inStock !== 0) {
    options = Array.from({ length: product.inStock }, (_, i) => i + 1);
    //console.log("options =>", options);
  }

  return (
    <div className="flex items-center p-5 rounded-2xl bg-gray-800 text-white">
      <div className="w-1/6 flex justify-center">
        <img src={product.img} alt={product.name} className="w-45 rounded-xl" />
      </div>
      <div className="w-1/6 flex justify-center  ">
        <p className="text-xl text-wrap text-center">{product.name}</p>
      </div>
      <div className="w-1/6 flex justify-center">
        <p className="text-xl">${product.price}</p>
      </div>
      <div className="w-1/6 flex justify-center">
        <Rating rating={product.rating} />
      </div>
      <div className="p-2 border border-gray-400 rounded flex items-center gap-x-1 w-1/6 justify-center">
        <label htmlFor="qty" className="text-lg font-semibold">
          Qty:
        </label>
        <select
          name="qty"
          id="qty"
          className="w-20 bg-gray-800 outline-0 text-lg font-semibold"
          value={product.qyt}
          onChange={handleQyt}
        >
          {options.length > 0 &&
            options.map((num) => {
              return (
                <option key={num} value={num}>
                  {num}
                </option>
              );
            })}
        </select>
      </div>
      <div className="w-1/6 flex justify-center">
        <button onClick={() => dispatch(remove_from_cart(product.id))}>
          <MdDelete size={25} />
        </button>
      </div>
    </div>
  );
};

export default LongCart;
