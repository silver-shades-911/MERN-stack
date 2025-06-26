import React from "react";
import Rating from "./Rating";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSort,
  toggleFastDelivery,
  toggleStock,
  setRating,
  clearFilter,
} from "../features/filter/filterSlice";

const Filter = () => {
  // useSelector
  const { sort, byStock, byFastDelivery, byRating } = useSelector(
    (state) => state.filter
  );

  // dispatch
  const dispatch = useDispatch();

  //? Created temporarily for star , now we direclt sync it with filterSlice state 
   // make state for click rating
  // const [star, setStar] = useState(0);

  return (
    <div className="flex flex-col gap-y-5  text-white">
      <h1 className="text-3xl font-medium">Filter Product</h1>
      <div className="flex items-center justify-start gap-x-5">
        <input
          type="radio"
          name="group1"
          id="ascd"
          className="size-5"
          checked={sort === "lowToHigh"}
          onChange={() => dispatch(setSort("lowToHigh"))}
        />
        <label htmlFor="ascd" className="text-lg">
          Ascending
        </label>
      </div>
      <div className="flex items-center justify-start gap-x-5">
        <input
          type="radio"
          name="group1"
          id="dscd"
          className="size-5"
          checked={sort === "highToLow"}
          onChange={() => dispatch(setSort("highToLow"))}
        />
        <label htmlFor="dscd" className="text-lg">
          Descending
        </label>
      </div>
      <div className="flex items-center justify-start gap-x-5">
        <input
          type="checkbox"
          name="group2"
          id="inStock"
          className="size-5"
          checked={byStock}
          onChange={() => dispatch(toggleStock())}
        />
        <label htmlFor="inStock" className="text-lg">
          Include Out of Stock
        </label>
      </div>
      <div className="flex items-center justify-start gap-x-5">
        <input
          type="checkbox"
          name="group3"
          id="fastDelivery"
          className="size-5"
          checked={byFastDelivery}
          onChange={() => dispatch(toggleFastDelivery())}
        />
        <label htmlFor="fastDelivery" className="text-lg">
          Fast Delivery Only
        </label>
      </div>
      <div className="flex items-center justify-start gap-x-5">
        <label htmlFor="rating" className="text-xl">
          Rating:
        </label>
        <Rating
          id="rating"
          rating={byRating}
          handleStarClick={(i) => dispatch(setRating(i + 1))}
          size={20}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="flex items-center justify-center mt-10 ">
        <button
          className="text-lg py-2 w-60 rounded-sm bg-gray-200 text-black"
          onClick={() => dispatch(clearFilter())}
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
