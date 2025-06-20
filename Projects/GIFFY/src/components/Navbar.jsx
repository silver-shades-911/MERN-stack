import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import { HiDotsVertical } from "react-icons/hi";
import { useGifContext } from "../context/gif-context";
import GifSearch from "./GifSearch";

const Navbar = () => {
  // category state varibale to show categories
  const [category, setCategory] = useState([]);

  // swtich to show category panel or not
  const [showCategorySwtich, setShowCategorySwtich] = useState(false);

  const { gf, favorite } = useGifContext(); // <=== X useGifContext_ _  O usegifContext() <-

  const fetchGifCategories = async () => {
    try {
      const { data } = await gf.categories();
      console.log("gif categories", data);
      setCategory(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchGifCategories();
  });

  return (
    <nav className="w-full h-auto ">
      <div className="relative flex gap-4 justify-between items-center mb-2">
        <Link to="/" className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="4 2 16.32 20"
            className="size-10"
          >
            <g fill="none" fillRule="evenodd">
              <path d="M6.331 4.286H17.99v15.428H6.33z" fill="#000" />
              <g fillRule="nonzero">
                <path d="M4 3.714h2.331v16.572H4z" fill="#04ff8e" />
                <path d="M17.989 8.286h2.331v12h-2.331z" fill="#8e2eff" />
                <path d="M4 19.714h16.32V22H4z" fill="#00c5ff" />
                <path d="M4 2h9.326v2.286H4z" fill="#fff152" />
                <path
                  d="M17.989 6.571V4.286h-2.332V2h-2.331v6.857h6.994V6.571"
                  fill="#ff5b5b"
                />
                <path d="M17.989 11.143V8.857h2.331" fill="#551c99" />
              </g>
              <path d="M13.326 2v2.286h-2.332" fill="#999131" />
            </g>
          </svg>
          <h1 className="text-5xl font-bold tracking-tighter cursor-pointer">
            GIFFY
          </h1>
        </Link>

        <div className="flex font-bold gap-2 items-center ">
          {/* render categories*/}
          {/* <Link
            to={"category"}
            key={category.name}
            className="px-4 py-1 hover:gradientHover border-b-4 block lg:hidden font-bold"
          >
            Reactions
          </Link> */}

          {category?.slice(0, 5)?.map((category) => {
            return (
              <Link
                to={`/${category.name_encoded}`}
                key={category.name_encoded}
                className="px-4 py-1 hover:gradientHover border-b-4 hidden lg:block font-bold"
              >
                {category.name}
              </Link>
            );
          })}

          {/* 3 Donts */}
          <button onClick={() => setShowCategorySwtich(!showCategorySwtich)}>
            <HiDotsVertical
              size={35}
              className={`py-0.5 hover:gradientHover border-b-4 hidden lg:block ${
                showCategorySwtich ? "gradientHover" : ""
              } `}
            />
          </button>

          {/* favourits gifs */}
          {favorite.length !== 0 && (
            <div className="font-bold bg-gray-600 py-2 px-4 rounded-md">
              <Link to={"favourit"}>favorite GIFs</Link>
            </div>
          )}

          {/*  */}
          <button
            className={` block lg:hidden  py-0.5 hover:gradientHover border-b-4 ${
              showCategorySwtich ? "gradientHover" : ""
            } `}
            onClick={() => setShowCategorySwtich(!showCategorySwtich)}
          >
            <Link>
              <HiBars3BottomRight size={35} />
            </Link>
          </button>

          {/* category panel */}
          {showCategorySwtich && (
            <div className="absolute top-25 w-full px-10 py-10 gradientHover left-0 z-20">
              <div className="text-3xl font-bold mb-2">Category</div>
              <hr className="my-5" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {category.map((category) => {
                  return (
                    <Link
                      className="font-bold"
                      to={category.name_encoded}
                      key={category.name_encoded}
                      onClick={() => setShowCategorySwtich(false)}
                    >
                      {category.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* search bar */}
      <GifSearch />
    </nav>
  );
};

export default Navbar;
