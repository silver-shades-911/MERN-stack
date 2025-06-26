import Rating from "./Rating";
import { useSelector, useDispatch } from "react-redux";
import { add_to_cart, remove_from_cart } from "../features/cart/cartSlice";

const Card = ({ product }) => {
  let dispatch = useDispatch();
  let cart = useSelector((state) => state.cart.cart);

  // handle add to cart
  const handleAddToCart = () => {
    dispatch(add_to_cart(product));
  };

  // handle remove from cart
  const handleRemoveFromCart = () => {
    dispatch(remove_from_cart(product.id));
  };

  return (
    <div className="bg-white text-black w-70 rounded-xl p-1 pb-5">
      {/* Img */}
      <div className="">
        <img src={`${product.img}`} className="rounded-t-xl w-full h-40" />
      </div>

      {/* */}
      <div className="flex flex-col mt-2 pl-2 ">
        <h3 className="text-lg font-medium">{product.name}</h3>
        <div className="">$ {product.price}</div>
        <div className="font-normal">{`${
          product.fastDelivery ? "Fast Delivery " : "4 days delivery"
        }`}</div>
        <Rating rating={product.rating} />

        {product.inStock === 0 ? (
          <button className="mt-4 text-sm font-medium py-1.5 px-2.5 rounded-lg  bg-slate-600 w-fit text-white">Out of Stock</button>
        ) : cart.some((c) => c.id === product.id) ? (
          <button
            className="mt-4 text-sm font-medium py-1.5 px-2.5 rounded-lg bg-red-700 w-fit text-white"
            onClick={handleRemoveFromCart}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            className="mt-4 text-sm font-medium py-1.5 px-2.5 rounded-lg bg-blue-600 w-fit text-white"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
