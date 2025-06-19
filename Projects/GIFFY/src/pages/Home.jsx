import { useEffect } from "react";
import { useGifContext } from "../context/gif-context";
import Gif from "../components/Gif"
import GifFilter from "../components/GifFilter";

const Home = () => {

const {gf, gif, setGif, filter, setFilter, favorite } = useGifContext(); //!You're not invoking the hook, you're just referencing the function. It should be: by using ()

// test
console.log("test1 - gif", gif);

// we are fetching trending gifs according to filter at start
const fetchTrendingGifs = async() => {
const { data } = await gf.trending({
  limit: 20,
  type: filter,
  rating: "g"
});
console.log('trending', data);
setGif(data);
};


useEffect(
  () => {
    fetchTrendingGifs();
  }, [filter]
);

// test
console.log("test2 - gif", gif);

  return (
    <div>

      {/* Banner */}
      <div className="my-5">
        <img src="/gifpy_banner.gif" alt="gifphy banner" className="mt-2 rounded w-full"/>
      </div>

      {/* Filter Gifs Componend */}
       <GifFilter showTrending={true} />
      
      {/* home page containt */}
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
        {gif.map(
          (gif) => {
            return <Gif gif={gif} key={gif?.id}/>
          }
        )}
      </div>
    </div>
  )
}


export default Home;
