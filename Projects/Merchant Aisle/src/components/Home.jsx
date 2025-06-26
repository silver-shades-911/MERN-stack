import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import Filter from "./Filter";

const Home = () => {
  const products = useSelector((state) => state.product.products); // In state => Slice name (e.g. product) => require key (e.g. products array)

  const { sort, byStock, byFastDelivery, byRating, searchQuery } = useSelector(
    (state) => state.filter
  );

  const transformProduct = () => {
    let filtered = [...products];

    //assecnding & decending
    if (sort === "lowToHigh") {
      filtered.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sort === "highToLow") {
      filtered.sort((a, b) => Number(b.price) - Number(a.price));
    }

    //instock - by default => excluding out of stock logic  (apply opposite effect to our checkbox)
    if (!byStock) {
      filtered = filtered.filter((p) => p.inStock > 0);
    }

    //fast delivery - straightforward logic , not like inStock
    if (byFastDelivery) {
      filtered = filtered.filter((p) => p.fastDelivery);
    }

    // rating
    if (byRating) {
      filtered = filtered.filter((p) => p.rating >= byRating);
    }

    //search
    if (searchQuery) {
      filtered = filtered.filter((p) => {
        return p.name.trim(" ").toLowerCase().includes(searchQuery.trim(" ").toLowerCase());
      });
    }

    return filtered;
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="max-h-screen w-1/6 pt-20 p-5 bg-slate-900">
        <Filter />
      </div>

      <div className="w-5/6 overflow-y-scroll custom-scrollbar">
        <div className="text-white grid grid-cols-4 gap-y-5 py-10 mb-30 w-full justify-items-center">
          {transformProduct().length > 0 ? (
            transformProduct().map((p) => <Card product={p} key={p.id} />)
          ) : (
            <div> No Such Product Available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
