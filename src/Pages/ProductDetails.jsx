import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BannerHeading from "../Components/BannerHeading";
import Title from "../Components/Title";
import {
  addFavorite,
  addWishList,
  getProducts,
  getWishlistProducts,
} from "../Utilitys";

const ProductDetails = () => {
  const { product_id } = useParams();
  const products = useLoaderData();
  const [productDeatil, setProductDeatil] = useState({});
  const [disable, setDisable] = useState(false);
  const [disable2, setDisable2] = useState(false);

  useEffect(() => {
    const singleData = products.find(
      (product) => product.product_id == product_id
    );
    setProductDeatil(singleData);
    const loacalData = getProducts();
    const isExist = loacalData.find((item) => item.product_id == product_id);
    if (isExist) {
      setDisable(true);
    }

    const wiLoacalData = getWishlistProducts();

    const isExist2 = wiLoacalData.find((item) => item.product_id == product_id);

    if (isExist2) {
      setDisable2(true);
    }
  }, [productDeatil.product_id, product_id, products]);

  const {
    product_image,
    product_title,
    price,
    rating,
    availability,
    description,
    specification,
  } = productDeatil || {};

  const handleFavorite = (productDeatil) => {
    addFavorite(productDeatil);
    setDisable(true);
  };

  const handleWi = (productDeatil) => {
    addWishList(productDeatil);
    setDisable2(true);
  };

  return (
    <div className="relative h-[800px] ">
      <Title title={"Product_Details-Gadgets Heaven"}></Title>
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
        className="card w-10/12 mx-auto absolute border-2 border-[#9538E2] top-[32%] left-[8%] lg:card-side p-8
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
          <p className="text-lg font-semibold text-[#9538E2]">
            Price: {price}$
          </p>
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
          <h1 className="text-lg font-bold">Specification:</h1>
          <ul className="text-lg ml-12">
            {specification &&
              specification.map((item, i) => (
                <li className="list-disc" key={i}>
                  {item}
                </li>
              ))}
          </ul>
          <div className="flex items-center gap-2">
            <div className="text-lg">Rating: {rating}</div>
            <div className="rating">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-star-2 bg-orange-500"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-star-2 bg-orange-00"
              />
            </div>
          </div>
          <div>
            <button
              disabled={disable}
              onClick={() => handleFavorite(productDeatil)}
              className="btn text-white bg-[#9538E2]  btn-outline"
            >
              Add to Cart
            </button>
            <button
              disabled={disable2}
              onClick={() => handleWi(productDeatil)}
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
