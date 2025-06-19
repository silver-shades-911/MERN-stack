import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { HiMiniXMark } from "react-icons/hi2";

const GifSearch = () => {
  // state varibale to store our search query
  const [query, setQuery] = useState("");

  // useNavigate Hook

  const navigate = useNavigate();

  const handleSearchQueryFun = (e) => {
    let newQuery = e.target.value;
    setQuery(newQuery);
    console.log(query);
  };

  // Search Gifs by query function

  const searchGifsByQuery = async () => {
    // check
    if (query.trim() === "") {
      return;
    }

    // navigating to our search gif page
    navigate(`/search/${query}`);
  };

  return (
    <div className="flex relative my-2">
      <input
        type="text"
        placeholder="Search all the GIFs and Strickers"
        className=" w-full bg-white rounded-s py-5 text-black pl-5 text-xl"
        onChange={handleSearchQueryFun}
        value={query}
      />

      {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute bg-gray-300 opacity-90 rounded-full right-20 mr-2 top-6"
        >
          <HiMiniXMark size={22} />
        </button>
      )}

      <button
        onClick={searchGifsByQuery}
        className="bg-gradient-to-tr from-pink-600 to-pink-400 text-white px-5 rounded-e"
      >
        <IoIosSearch size={35} className="-scale-x-100" />
      </button>
    </div>
  );
};

export default GifSearch;
