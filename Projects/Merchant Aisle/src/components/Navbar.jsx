import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../features/filter/filterSlice";
const Navbar = () => {
  // useSelector

  let searchQuery = useSelector((state) => state.filter.filter);
  const dispatch = useDispatch();

  // handleSearchQuery
  const handleSearchQuery = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="w-full h-20 bg-indigo-700 text-white flex justify-between items-center px-5 z-100">
      {/* Logo part */}
      <Link to={"/"}>
        <div className="flex  justify-center items-center gap-x-2">
          <img src="souvenir.png" alt="" className="w-12" />
          <span className="text-white font-bold text-xl">Merchant Aisle</span>
        </div>
      </Link>

      {/* search bar */}
      <div className="flex  justify-center items-center gap-x-2">
        <input
          type="search"
          className="bg-slate-100 rounded-full text-black h-13 w-96 px-5.5 outline-0"
          placeholder="Search a product..."
          value={searchQuery}
          onChange={handleSearchQuery}
        />
      </div>

      {/* cart */}
      <Cart />
    </div>
  );
};

export default Navbar;
