/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const GagetCard = ({ item }) => {
  const { product_image, product_title, price, product_id } = item;
  return (
    <div className="transition border-2 border-gray-300 hover:scale-105 shadow-xl rounded-xl overflow-hidden">
      <figure className="w-full h-48 overflow-hidden">
        <img className=" w-full h-full" src={product_image} alt="" />
      </figure>
      <div className="p-4">
        <h1 className="text-lg"> {product_title}</h1>
        <h3>Price: {price}$</h3>
        <Link
          to={`/productdetails/${product_id}`}
          className="btn btn-sm btn-outline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default GagetCard;
