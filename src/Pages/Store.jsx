import { useLoaderData } from "react-router-dom";
import BannerHeading from "../Components/BannerHeading";
import GagetCard from "../Components/GagetCard";

const Store = () => {
  const Products = useLoaderData();
  return (
    <div>
      <div className="rounded-lg bg-[#9538E2] mb-5">
        <div className="w-8/12 text-center mx-auto p-12">
          <BannerHeading title={"Explore Amazing Product"} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-4">
        {Products.map((item) => (
          <GagetCard key={item.product_id} item={item}></GagetCard>
        ))}
      </div>
    </div>
  );
};

export default Store;
