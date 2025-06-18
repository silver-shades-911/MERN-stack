import { createContext, useContext, useEffect, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

// create context
const GifContext = createContext();

// create Provider Component
export const GifProvider = ({ children }) => {

  // state variable for gifs
  const [gif, setGif] = useState([]);
  const [filter, setFilter] = useState("gifs");
  const [favorite, setFavorites] = useState([]);

  // use @giphy/js-fetch-api to fetch gifs, instantiate with your api key
  const gf = new GiphyFetch(import.meta.env.VITE_GIFPY_API_KEY);

  //
  return (
    <GifContext.Provider value={{ gf, gif, setGif, filter, setFilter, favorite }}>
      {children}
    </GifContext.Provider>
  );
};

// Create a custom hook for easy access
export const useGifContext = () => {
  const context = useContext(GifContext);
  return context;
};
