import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import GagetCard from "./GagetCard";

const AllCards = () => {
  const { category } = useParams();
  const products = useLoaderData();
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const navigateto = () => {
    navigate("/store");
  };
  useEffect(() => {
    if (category == "All") {
      setItems(products.slice(0, 6));
    } else if (category) {
      const filterByCetegory = [...products].filter(
        (item) => item.category === category
      );
      setItems(filterByCetegory);
    } else {
      setItems(products.slice(0, 6));
    }
  }, [category, products]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-4">
        {items.map((item) => (
          <GagetCard key={item.product_id} item={item}></GagetCard>
        ))}
      </div>
      <div className="text-center mt-[30px]">
        {category === "Speakers" ? (
          <div className="text-6xl text-[#9538E2] text-center ml-32 p-20">
            No Data Found
          </div>
        ) : (
          <button
            onClick={() => navigateto()}
            className="btn bg-[#9538E2] text-white hover:bg-black"
          >
            view All
          </button>
        )}
      </div>
    </div>
  );
};

export { AllCards };
