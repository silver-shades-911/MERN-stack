






import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGifContext } from "../context/gif-context";
import { FaPaperPlane } from "react-icons/fa";
import Gif from "../components/Gif";
import { FaHeart } from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import FollowOn from "../components/FollowOn";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";

const GifPage = () => {
  //TODO : extract type & slug from params
  let { type, id } = useParams();

  //TODO : type checkup
  const types = ["gif", "sticker", "text"];

  if (!types.includes(type)) {
    throw new Error("Invalid Content type");
  }

  //TODO : import gf from useGifContext
  let { gf } = useGifContext();

  //TODO : create state variables (local) to store gif data & related gifs data
  let [currGif, setCurrGif] = useState({});
  let [relatedGifs, setRelatedGifs] = useState([]);
  // state variable for read more as switch
  let [readMore, setReadMore] = useState(true);

  //TODO : fetch gif & related gifs data function & useEffect hooks
  const fetchCurrGifByID = async () => {
    //TODO : seperate gif-ID
    // const gifID = slug.split("-");
    console.log("gifID ->", id);

    const { data } = await gf.gif(id);
    const relatedGifData = await gf.related(id);
    console.log("single gif data ->", data);
    console.log("related gif data ->", relatedGifData);

    setCurrGif(data);
    setRelatedGifs(relatedGifData.data);
  };

  useEffect(() => {
    fetchCurrGifByID();
    window.scrollTo(0, 0); // optional but UX friendly
  }, [id, type]);

  //* Test varible
  let longDec =
    "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, magnam sunt. Expedita, optio. Voluptatem corrupti quidem in voluptatibus, molestias, cupiditate voluptates velit eum quasi quae earum aperiam fuga doloremque accusantium!";
  let shortDec =
    "lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

  //TODO : display user / gif data & related gifs also
  return (
    <div className="flex flex-col justify-start">
      {/* above current GIF section*/}
      <div className="w-full sm:grid sm:grid-cols-8 pt-5 sm:gap-x-1 lg:px-3 lg:gap-x-2">
        {/* 1st column user details side panel for screen > sm */}
        <div className="hidden sm:flex sm:col-span-3  flex-col sm:gap-y-5 lg:col-span-2 ">
          {/* user image & name , username  */}
          <div className="flex flex-row gap-x-2.5 h-fit">
            {/* user image  */}
            <div>
              <img
                src={currGif?.user?.avatar_url}
                alt={currGif?.user?.username}
                className="size-15 aspect-square"
              />
            </div>

            {/* user data */}
            <div className="flex flex-col items-start justify-center gap-y-1.5">
              <h5 className="font-extrabold">{currGif?.user?.display_name}</h5>
              <span className="text-sm font-extrabold text-gray-400">
                @{currGif?.user?.username}
              </span>
            </div>
          </div>

          {/* user description */}
          <div className="pr-10">
            {currGif?.user?.description.length < 100 ? (
              <p className="text-[0.9rem]">{currGif?.user?.description}</p>
            ) : (
              <>
                <p className="text-[0.9rem] text-gray-400">
                  {readMore
                    ? currGif?.user?.description
                    : (currGif?.user?.description).slice(0, 100).concat(" ...")}
                </p>

                <button
                  className="text-sm font-bold text-gray-300 flex items-center gap-x-0.5"
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? (
                    <>
                      Read Less <IoIosArrowUp size={15} />{" "}
                    </>
                  ) : (
                    <>
                      Read More <IoIosArrowDown size={15} />
                    </>
                  )}
                </button>
              </>
            )}
          </div>

          {/* follow on section */}
          <FollowOn />

          <div className="divider mx-auto w-60 justify-self-center-safe self-end"></div>

          {/* source */}

          <div className="pr-5">
            <div className="text-sm font-bold text-gray-300">Source</div>
            <div className="flex gap-x-1 items-center justify-start p-0 m-0">
              <FiExternalLink size={20} />{" "}
              <a
                className="truncate text-xs lg:text-sm font-semibold text-gray-300 p-0 m-0"
                href={currGif?.source}
              >
                {currGif?.source ? currGif?.source?.slice(1, 25) : "no source"}
              </a>
            </div>
          </div>
        </div>

        {/* 2nd content column */}
        <div className="flex flex-col gap-y-5 sm:col-span-5">
          {/* current gif section*/}
          <div>
            <div className="flex flex-col gap-y-2 ">
              <span className="font-bold text-gray-400">{currGif?.title}</span>
              <img src={currGif?.images?.original?.webp} alt={currGif?.title} />

              {/* user account section */}
              <div className="flex items-center justify-between sm:hidden">
                <div className="flex flex-row gap-x-2">
                  {/* user image  */}
                  <div>
                    <img
                      src={currGif?.user?.avatar_url}
                      alt={currGif?.user?.username}
                      className="size-20 aspect-square"
                    />
                  </div>

                  {/* user data */}
                  <div>
                    <h5 className="font-extrabold">
                      {currGif?.user?.display_name.trim()}
                    </h5>
                    <span className="text-sm font-extrabold text-gray-400">
                      @{currGif?.user?.username.trim()}
                    </span>
                  </div>
                </div>

                {/* share button */}
                <div className="flex justify-center items-center p-5">
                  <FaPaperPlane size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Favorite / share / Embed side panel for screen > sm */}
        <div className="hidden sm:block sm:col-span-8 lg:col-span-1">
          <div className="flex pt-10 flex-row justify-center gap-x-10 md:pl-5 gap-y-3.5  md:gap-y-2.5 lg:gap-x-0 lg:gap-y-4 lg:flex-col lg:p-0 lg:pt-10 lg:pl-5">
            <div className="flex gap-x-2.5 md:gap-x-5 lg:gap-x-2">
              <FaHeart size={25} />
              <span className="font-bold">Favorite</span>
            </div>
            <div className="flex gap-x-2.5 md:gap-x-5 lg:gap-x-2 ">
              <FaPaperPlane size={25} />
              <span className="font-bold">Share</span>
            </div>
            <div className="flex gap-x-2.5 md:gap-x-5 lg:gap-x-2">
              <IoMdCode size={25} /> <span className="font-bold">Embed</span>
            </div>
          </div>
        </div>
      </div>
      {/* related gifs */}
      <div className="mt-30">
        <h4 className="font-extrabold text-xl">Related GIFs</h4>
        {relatedGifs.length > 0 && (
          <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-2">
            {relatedGifs.length > 0 &&
              relatedGifs.map((gif) => {
                return <Gif gif={gif} key={gif.id} />;
              })}
            ;
          </div>
        )}
      </div>
    </div>
  );
};

export default GifPage;
