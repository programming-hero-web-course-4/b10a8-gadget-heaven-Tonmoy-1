/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const GagetCard = ({ item }) => {
  const { product_image, product_title, price, product_id } = item;
  return (
    <div className="transition border-2 border-gray-300 hover:scale-105 shadow-xl rounded-xl overflow-hidden p-4">
      <figure className="w-full h-48 overflow-hidden">
        <img className=" rounded-lg w-full h-full" src={product_image} alt="" />
      </figure>
      <div className=" flex flex-col gap-3">
        <h1 className="text-lg font-bold"> {product_title}</h1>
        <h3 className="font-bold text-green-500">Price: {price}$</h3>
        <div>
          <Link
            to={`/productdetails/${product_id}`}
            className="btn btn-sm bg-[#9538E2] text-white btn-outline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GagetCard;
