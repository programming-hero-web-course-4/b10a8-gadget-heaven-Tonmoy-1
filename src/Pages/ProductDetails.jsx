/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import BannerHeading from "../Components/BannerHeading";
import { addFavorite, addWishList } from "../Utilitys";

const ProductDetails = () => {
  const { product_id } = useParams();
  const products = useLoaderData();
  const [productDeatil, setProductDeatil] = useState({});
  useEffect(() => {
    const singleData = products.find(
      (product) => product.product_id == product_id
    );
    setProductDeatil(singleData);
  }, [product_id, products]);

  const {
    product_image,
    product_title,
    price,
    availability,
    description,
    specification,
  } = productDeatil;

  const handleFavorite = (productDeatil) => {
    addFavorite(productDeatil);
    addWishList(productDeatil);
  };

  return (
    <div className="relative h-[950px] ">
      <div className="w-11/12 mx-auto h-[450px] rounded-lg bg-[#9538E2] ">
        <div className="w-8/12 text-center mx-auto p-12 ">
          <BannerHeading
            title={"Product Details"}
            descripsion={
              "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            }
          ></BannerHeading>
        </div>
      </div>
      <div
        className="card w-10/12 mx-auto absolute border-2 border-[#9538E2] top-[25%] left-[8%] lg:card-side p-8
       bg-base-100 shadow-xl "
      >
        <figure>
          <img
            className="w-[400px] h-[300px] rounded-lg bg-cover"
            src={product_image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: {price}$</p>
          <div>
            <button
              className={`btn btn-sm btn-outline  ${
                availability ? "text-green-500" : "text-yellow-400"
              }`}
            >
              {availability ? "in Stock" : "out of stock"}
            </button>
          </div>
          <p>{description}</p>
          <h1>Specification:</h1>
          <ul className="text-lg ml-12">
            {specification &&
              specification.map((item, i) => (
                <li className="list-disc" key={i}>
                  {item}
                </li>
              ))}
          </ul>
          <div>Ratings</div>
          <div>
            <button
              onClick={() => addFavorite(productDeatil)}
              className="btn btn-sm btn-outline"
            >
              Add to card
            </button>
            <button
              onClick={() => addWishList(productDeatil)}
              to="/dashboard"
              className="btn ml-2 btn-outline"
            >
              💗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
