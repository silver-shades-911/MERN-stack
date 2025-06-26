import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import Filter from "./Filter";
import { useEffect, useState } from "react";
import LongCart from "./LongCart";
import { produce } from "immer";

const Home = () => {
  const cart = useSelector((state) => state.cart.cart); // In state => Slice name (e.g. product) => require key (e.g. products array)

  // total using state variable
  let [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, curr) => acc + Number(curr.price.split(".")[0] * curr.qyt),
        0
      )
    );
  }, [cart]);

  return (
    <div className="flex h-screen overflow-hidden text-white">
      <div className="w-5/7 overflow-y-scroll custom-scrollbar">
        <div className="text-white  py-10 px-15 mb-30 w-full flex flex-col gap-y-5">
          {/* product cards */}
          {cart.length > 0 ? (
            cart.map((c) => <LongCart product={c} />)
          ) : (
            <div className="text-2xl font-light flex justify-center items-center">
              <p>Cart is Empty.</p>
            </div>
          )}
        </div>
      </div>
      <div className="max-h-screen w-2/7 pt-20 p-10 bg-slate-900 flex flex-col gap-y-6">
        {/* summary */}
        <h1 className="text-5xl">Subtotal ({cart.length}) items</h1>
        <h5 className="text-xl font-bold">Total: ${total}</h5>
        <div className="flex justify-center">
          <button className="w-2/3 bg-gray-100 text-black py-3 rounded-xl font-medium">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
