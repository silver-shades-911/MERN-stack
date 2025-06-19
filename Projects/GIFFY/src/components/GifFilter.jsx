import React from "react";
import { useGifContext } from "../context/gif-context";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";

// making array of our 3 filter buttons data

const filterButtonsArray = [
  {
    title: "GIFs",
    value: "gifs",
    background:
      "bg-gradient-to-tr from-purple-500 via-purple-600 to-purple-500",
  },
  {
    title: "Stickers",
    value: "stickers",
    background: "bg-gradient-to-tr from-teal-500 via-teal-600 to-teal-500",
  },
  {
    title: "Text",
    value: "text",
    background: "bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-500",
  },
];

const GifFilter = ({ alignRight = false, showTrending = true }) => {
  // this we use to store selected filter
  const { filter, setFilter } = useGifContext();
  {
    console.log("filter state varibale text ->", filter);
  }

  return (
    <div
      className={`my-3 flex gap-3 
        ${
          showTrending
            ? "justify-between flex-col sm:flex-row sm:items-center"
            : ""
        } ${alignRight ? "justify-end" : ""} `}
    >
      {/* Trending text */}
      {showTrending && (
        <span className="flex gap-2">
          {showTrending && (
            <HiMiniArrowTrendingUp size={25} className="text-teal-400" />
          )}
          <span className="font-semibold text-gray-400">Trending</span>
        </span>
      )}

      {/* 3 filter button */}
      <div className=" w-80 rounded-full bg-gray-800">
        {filterButtonsArray.map((f) => {
          return (
            <button
              onClick={() => setFilter(f.value)}
              className={`transition-colors ease-linear font-semibold w-1/3 cursor-pointer rounded-full py-2 px-4 text-center items-center ${
                filter === f.value ? f.background : ""
              }`}
              key={f.value}
            >
              {f.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default GifFilter;
