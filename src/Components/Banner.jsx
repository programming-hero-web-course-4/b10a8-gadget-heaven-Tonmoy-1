import bgIamge from "../assets/banner.jpg";
import BannerHeading from "./BannerHeading";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto rounded-lg bg-[#9538E2] relative h-[450px]">
      <div className="w-8/12 text-center mx-auto p-12 ">
        <BannerHeading
          title={"Upgrade Your Tech Accessorize with Gadget Heaven Accessories"}
          descripsion={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        ></BannerHeading>
      </div>

      <div className=" absolute left-[11%] p-4 rounded-lg backdrop-blur-xl bg-white/40 border-2 border-white">
        <div className="w-[800px] h-[400px] ">
          <img
            className="w-full h-full bg-cover rounded-lg overflow-hidden"
            src={bgIamge}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
