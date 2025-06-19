import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGifContext } from "../context/gif-context";
import GifFilter from "../components/GifFilter";
import Gif from "../components/Gif";

const Search = () => {
  //TODO : get our params value
  const { query } = useParams();

  //TODO : fetch gif/stickers/data according to our query & filter
  const { gf, filter } = useGifContext();

  //TODO : display our data & store
  const [searchResults, setSearchResults] = useState([]);

  // function to fetch data according to our query & filter

  const fetchSearchResults = async () => {
    let { data } = await gf.search(query, {
      sort: "relevant",
      limit: 20,
      type: filter,
    });

    setSearchResults(data);
    console.log("search result -> ", searchResults);
  };

  useEffect(() => {
    fetchSearchResults();
  }, [query, filter]);

  //TODO : this will work again fro all searchers

  return (
    <div className="my-4">
      <h2 className="text-5xl font-extrabold">{query}</h2>

      {/* gif filter compoenent to choose filters */}
      <GifFilter showTrending={false} alignRight={false} />

      {searchResults.length > 0 ? (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
          {searchResults.map((gif) => {
            return <Gif gif={gif} key={gif.id} />;
          })}
        </div>
      ) : (
        <span> No GIFs for {query}. Try searching for Stickers instead?</span>
      )}
    </div>
  );
};

export default Search;
