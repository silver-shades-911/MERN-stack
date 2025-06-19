import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGifContext } from "../context/gif-context";
import Gif from "../components/Gif";
import FollowOn from "../components/FollowOn";

const Category = () => {
  //TODO : extract params
  const { category } = useParams();

  //TODO : import gf from useGifContext
  let { gf } = useGifContext();

  //TODO : store it in local state variable
  let [searchResults, setSearchResults] = useState([]);

  //TODO : fetch gifs by category
  const fetchGifByCategory = async () => {
    let { data } = await gf.gifs(category, category);
    setSearchResults(data);
  };

  useEffect(() => {
    fetchGifByCategory();
  }, [category]);

  //TODO : dispaly gifs
  return (
    <div className="flex flex-col sm:flex-row gap-5 my-4">
      {/* 1st gif and social media */}
      {searchResults.length > 0 && (
        <div className="w-full sm:w-72">
          <Gif gif={searchResults[0]} hover={false} />
          <span className="text-gray-400 text-sm pt-2">
            Don&apos;t tell it to me, GIF it to me!
          </span>
          <FollowOn />
          {/* hr tag */}
          <div className="divider"></div>
        </div>
      )}

      {/* rest of gifs */}
      <div>
        <h2 className="text-4xl pb-1 font-extrabold capitalize">
          {category.split("-").join(" & ")} GIFs
        </h2>
        <h2 className="text-lg text-gray-400 pb-3 font-bold hover:text-gray-50 cursor-pointer">
          @{category}
        </h2>
        {
          searchResults.length > 0 &&
          <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
            {
              searchResults.slice(1).map((gif) => {
                return <Gif gif={gif} key={gif.id} />;
              })}
          </div>
        }

      </div>
    </div>
  );
};

export default Category;
