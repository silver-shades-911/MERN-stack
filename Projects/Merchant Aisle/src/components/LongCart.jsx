import React from "react";
import Rating from "./Rating";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { change_qyt } from "../features/cart/cartSlice";

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
          <option default>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className="w-1/6 flex justify-center">
        <button>
          <MdDelete size={25} />
        </button>
      </div>
    </div>
  );
};

export default LongCart;
