import { FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { remove_from_cart } from "../features/cart/cartSlice";

const Cart = () => {
  // read cart data from store
  const cart = useSelector((state) => state.cart.cart);

  // dispatch for remove
  const dispatch = useDispatch();

  // dropdown switch state varible
  const [dropdownSwitch, setDropdownSwitch] = useState(false);

  return (
    <>
      {/* cart icone and drop down summary */}
      <div className="relative">
        <button
          className="rounded px-3.5 py-2 bg-white "
          onClick={() => setDropdownSwitch(!dropdownSwitch)}
        >
          <FaShoppingCart size={28} color="black" />
        </button>
        <div className="cursor-pointer absolute bg-red-400 rounded-full size-5.5 text-center -top-1.5 -right-1.5 ">
          {cart.length}
        </div>
        {/* drop down list */}
        <div
          className={` z-50 absolute bg-white right-20 text-black ${
            dropdownSwitch ? "flex" : "hidden"
          } flex-col gap-y-4 p-5 rounded-xl border-2 border-blue-600 shadow-2xl shadow-blue-500/50`}
        >
          <ul className="flex flex-col gap-y-2">
            {cart.length > 0 ? (
              cart.map((c) => {
                return (
                  <li className="flex justify-between items-center p-1.5 px-2 gap-x-2.5 rounded-xl bg-gray-200 w-75">
                    <span className="flex justify-center items-center ">
                      <img
                        src={c.img}
                        alt={c.name}
                        className="size-15 rounded-full "
                      />
                    </span>
                    <span className=" flex flex-col justify-items-center flex-1 ">
                      <div className="font-medium">{c.name}</div>
                      <div>&#36;{c.price}</div>
                    </span>
                    <button
                      className="flex justify-center items-center cursor-pointer"
                      onClick={() => dispatch(remove_from_cart(c.id))}
                    >
                      <MdDelete size={25} />
                    </button>
                  </li>
                );
              })
            ) : (
              <li className="flex justify-between items-center p-1.5 px-2 rounded-xl bg-gray-200 w-75 text-center">
                <div className="w-full py-2">Cart is Empty. </div>
              </li>
            )}
          </ul>

          <Link to={"/checkout"}>
            <button
              className="text-lg font-semibold text-white bg-blue-700 w-full py-2.5 rounded-xl"
              onClick={() => setDropdownSwitch(false)}
            >
              Go To Cart
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
