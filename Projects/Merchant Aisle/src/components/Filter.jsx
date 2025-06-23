import React from "react";
import Rating from "./Rating";
import { useState } from "react";

const Filter = () => {
  // make state for click rating
  const [star, setStar] = useState(0);

  return (
    <div className="flex flex-col gap-y-5  text-white">
      <h1 className="text-3xl font-medium">Filter Product</h1>
      <div className="flex items-center justify-start gap-x-5">
        <input type="radio" name="group1" id="ascd" className="size-5" />
        <label htmlFor="ascd" className="text-lg">
          Ascending
        </label>
      </div>
      <div className="flex items-center justify-start gap-x-5">
        <input type="radio" name="group1" id="dscd" className="size-5" />
        <label htmlFor="dscd" className="text-lg">
          Descending
        </label>
      </div>
      <div className="flex items-center justify-start gap-x-5">
        <input type="checkbox" name="group2" id="inStock" className="size-5" />
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
          rating={star}
          handleStarClick={(i) => setStar(i + 1)}
          size={20}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="flex items-center justify-center mt-10 ">
        <button className="text-lg py-2 w-60 rounded-sm bg-gray-200 text-black">Clear Filter</button>
      </div>
    </div>
  );
};

export default Filter;
