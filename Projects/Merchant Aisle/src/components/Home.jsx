import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import Filter from "./Filter";

const Home = () => {
  const products = useSelector((state) => state.product.products); // In state => Slice name (e.g. product) => require key (e.g. products array)

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="max-h-screen w-1/6 pt-20 p-5 bg-slate-900">
        <Filter />
      </div>

      <div className="w-5/6 overflow-y-scroll custom-scrollbar">
        <div className="text-white grid grid-cols-4 gap-y-5 py-10 mb-30 w-full justify-items-center">
          {products.length > 0 &&
            products.map((p) => <Card product={p} key={p.id} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
