import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import GagetCard from "./GagetCard";

const AllCards = () => {
  const { category } = useParams();
  const products = useLoaderData();

  const [items, setItems] = useState([]);

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
      <button className="btn btn-warning">view All</button>
    </div>
  );
};

export { AllCards };
