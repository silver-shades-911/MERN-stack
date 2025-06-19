import React, { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import { useGifContext } from "../context/gif-context";
import { FaPaperPlane } from "react-icons/fa";
import Gif from "../components/Gif";
import { FaHeart } from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import FollowOn from "../components/FollowOn";

const GifPage = () => {
  //TODO : extract type & slug from params
  let { type, slug } = useParams();

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
    const gifID = slug.split("-");
    console.log("gifID ->", gifID);

    const { data } = await gf.gif(gifID[gifID.length - 1]);
    const { data: related } = await gf.related(gifID[gifID.length - 1]);
    console.log("single gif data ->", data);
    console.log("related gif data ->", related);

    setCurrGif(data);
    setRelatedGifs(related);
  };

  useEffect(() => {
    fetchCurrGifByID();
  }, []);

  //* Test varible
  let longDec =
    "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, magnam sunt. Expedita, optio. Voluptatem corrupti quidem in voluptatibus, molestias, cupiditate voluptates velit eum quasi quae earum aperiam fuga doloremque accusantium!";
  let shortDec =
    "lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
  //TODO : display user / gif data & related gifs also
  return (
    <div className="w-full grid grid-cols-4 pt-5">
      {/* 1st column user details side panel for screen > sm */}
      <div className="hidden sm:flex sm:col-span-1 sm:max-h-screen flex-col">
        {/* user image & name , username  */}

        <div className="flex flex-row gap-x-2.5 h-fit">
          {/* user image  */}
          <div>
            <img
              src={currGif?.user?.avatar_url}
              alt={currGif?.user?.username}
              className="size-20 aspect-square"
            />
          </div>

          {/* user data */}
          <div className="flex flex-col items-center justify-center gap-y-1.5">
            <h5 className="font-extrabold">{currGif?.user?.display_name}</h5>
            <span className="text-sm font-extrabold text-gray-400">
              @{currGif?.user?.username}
            </span>
          </div>
        </div>

        {/* user description */}
        <div>
          {longDec.length < 100 ? (
            <p>{longDec}</p>
          ) : (
            <>
              <p>
                {readMore ? longDec : longDec.slice(0, 100).concat(" .....")}
              </p>
              <button onClick={() => setReadMore(!readMore)}>{`${
                readMore ? "Read Less" : "Read More"
              }`}</button>
            </>
          )}
        </div>

        {/* follow on section */}
        <FollowOn/>

        <div className="divider"></div>
      </div>

      {/* 2nd content column */}
      <div className="col-span-4 flex flex-col gap-y-5 sm:col-span-3">
        {/* current gif section*/}
        <div className="sm:flex ">
          <div className="flex flex-col gap-y-2  sm:w-3/4">
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
                    className="size-15 aspect-square"
                  />
                </div>

                {/* user data */}
                <div>
                  <h5 className="font-extrabold">
                    {currGif?.user?.display_name}
                  </h5>
                  <span className="text-sm font-extrabold text-gray-400">
                    @{currGif?.user?.username}
                  </span>
                </div>
              </div>

              {/* share button */}
              <div className="flex justify-center items-center p-5">
                <FaPaperPlane size={25} />
              </div>
            </div>
          </div>

          {/* Favorite / share / Embed side panel for screen > sm */}
          <div className="hidden sm:block sm:w-1/4">
            <div className="flex flex-col pt-10 pl-5 gap-y-2.5">
              <div className="flex gap-x-5">
                <FaHeart size={25} />{" "}
                <span className="font-bold">Favorite</span>
              </div>
              <div className="flex gap-x-5">
                <FaPaperPlane size={25} />{" "}
                <span className="font-bold">Share</span>
              </div>
              <div className="flex gap-x-5">
                <IoMdCode size={25} /> <span className="font-bold">Embed</span>
              </div>
            </div>
          </div>
        </div>

        {/* related gifs */}
        <div>
          <h4 className="font-extrabold text-xl">Related GIFs</h4>
          {relatedGifs.length > 0 && (
            <div className="columns-2 gap-2">
              {relatedGifs.map((gif) => {
                return <Gif gif={gif} hover={false} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GifPage;
