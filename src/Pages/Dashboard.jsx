import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BannerHeading from "../Components/BannerHeading";
import DashboardCard from "../Components/DashboardCard";
import { getProducts, getWishlistProducts } from "../Utilitys";
import modalImage from "../assets/Group.png";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [wishlists, setWishlists] = useState([]);
  const [view, setView] = useState("Cart");
  const [numbers, setNumbers] = useState([]);
  const [winumbers, setWiNumbers] = useState([]);

  const navigate = useNavigate();

  // Fetch products when component mounts
  useEffect(() => {
    const favorites = getProducts();
    setProducts(favorites);
  }, []);

  // Calculate the sum of product prices for Cart
  useEffect(() => {
    const allCartPrice = [...products].map((item) => item.price);
    setNumbers(allCartPrice);
  }, [products]);

  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  // Calculate the sum of wishlist prices
  useEffect(() => {
    const allCartPrice = [...wishlists].map((item) => item.price);
    setWiNumbers(allCartPrice);
  }, [wishlists]);

  const sum2 = winumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  // Sort products by price
  const handleSort = (sortBy) => {
    if (sortBy === "price") {
      const sorted = [...products].sort((a, b) => b.price - a.price);
      setProducts(sorted);
    } else {
      setProducts([]);
    }
  };

  // Fetch wishlist products when component mounts
  useEffect(() => {
    const wishproduct = getWishlistProducts();
    setWishlists(wishproduct);
  }, []);

  // Handle view switch (Cart / WishList)
  const handleButton = (name) => {
    setView(name);
  };

  // Clear products from local storage and reset state
  const clearLocalStorage = () => {
    localStorage.removeItem("product");
    setProducts([]);
  };

  // Navigate to home page
  const clickHandler = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="rounded-lg bg-[#9538E2]">
        <div className="w-8/12 text-center mx-auto p-12">
          <BannerHeading
            title={"Welcome To Dashboard"}
            description={
              "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            }
          />
          <button
            onClick={() => handleButton("Cart")}
            className={` btn btn-outline px-6 mr-2 text-black ${
              view === "Cart" ? "bg-yellow-300" : "bg-white "
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => handleButton("WishList")}
            className={` btn btn-outline mr-4 text-black ${
              view === "WishList" ? "bg-yellow-300 " : "bg-white "
            }`}
          >
            WishList
          </button>
        </div>
      </div>

      <div className="w-full flex justify-between mx-auto mt-4 h-[100px] rounded-lg">
        <div className="text-2xl mt-3 text-gray-500 items-center justify-center font-bold p-4">
          {view}
        </div>
        <div className="flex gap-6 text-gray-500 items-center text-xl font-bold p-4">
          <div>Total Price: {view === "Cart" ? sum : sum2} $</div>
          {/* Sort by price button */}
          <div>
            <button
              onClick={() => handleSort("price")}
              className="btn text-[16px] bg-[#9538E2] text-white btn-outline"
            >
              Sort By Price
            </button>
          </div>
          <div>
            <button
              onClick={() => document.getElementById("modu").showModal()}
              className="btn text-[16px] text-white bg-[#9538E2] btn-outline"
            >
              Purchase
            </button>
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

      {/* Modal */}
      <dialog id="modu" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="text-center flex flex-col gap-2 p-3">
            <div className="flex items-center justify-center text-center">
              <img src={modalImage} alt="" />
            </div>
            <h3 className="font-bold text-lg">Payment Successfully!!</h3>
            <hr />
            <p className="py-4">Thanks for Purchasing</p>
            <p>Total Price: {view === "Cart" ? sum : sum2} $</p>
          </div>
          <div className="modal-action items-center">
            <form method="dialog">
              <button
                onClick={() => {
                  clearLocalStorage();
                  clickHandler();
                }}
                className="btn"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Dashboard;
