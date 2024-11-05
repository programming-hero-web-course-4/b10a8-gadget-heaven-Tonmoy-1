import { useEffect, useState } from "react";
import BannerHeading from "../Components/BannerHeading";
import DashboardCard from "../Components/DashboardCard";
import { getProducts, getWishlistProducts } from "../Utilitys";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [wishlists, setWishlists] = useState([]);
  const [view, setView] = useState("Cart");
  // const [price, setPrice] = useState(0);

  useEffect(() => {
    const favorites = getProducts();
    setProducts(favorites);
    // const cartPrice = favorites.map((item) => item.price);
  }, []);

  // sorting
  const handleSort = (sortBy) => {
    if (sortBy == "price") {
      const sorted = [...products].sort((a, b) => b.price - a.price);
      setProducts(sorted);
    } else {
      setProducts([]);
    }
  };

  useEffect(() => {
    const wishproduct = getWishlistProducts();
    setWishlists(wishproduct);
  }, []);

  const handleButton = (name) => {
    setView(name);
  };

  return (
    <div>
      <div className="rounded-lg bg-[#9538E2]">
        <div className="w-8/12 text-center mx-auto p-12">
          <BannerHeading
            title={"Welcome To Dashboard"}
            descripsion={
              "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            }
          />
          <button
            onClick={() => handleButton("Cart")}
            className="btn mr-2 btn-outline text-white hover:text-black hover:bg-white"
          >
            Cart
          </button>
          <button
            onClick={() => handleButton("WishList")}
            className="btn btn-outline text-white hover:text-black hover:bg-white"
          >
            WishList
          </button>
        </div>
      </div>
      <div className="w-full flex justify-between mx-auto mt-4 h-[100px] border-2 border-green-600">
        <div className="text-2xl mt-3 items-center justify-center font-bold p-4">
          {view}
        </div>
        <div className="flex gap-3 items-center text-2xl font-bold p-4">
          <div></div>
          {/* sort by price btn */}
          <div>
            <button
              onClick={() => handleSort("price")}
              className="btn btn-outline"
            >
              Sort By Price
            </button>
          </div>
          <div>
            <button className="btn btn-outline">Purches</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 my-3">
        {view === "Cart"
          ? products.map((product) => (
              <DashboardCard key={product.product_id} item={product} />
            ))
          : view === "WishList"
          ? wishlists.map((product) => (
              <DashboardCard key={product.product_id} item={product} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Dashboard;
