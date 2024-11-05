/* eslint-disable react/prop-types */
const BannerHeading = ({ title, descripsion }) => {
  return (
    <div className="flex flex-col text-white w-full justify-center items-center my-10">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4">
        {title}
      </h1>
      <p className="text-xs md:text-base text-white text-center font-thin">
        {descripsion}
      </p>
    </div>
  );
};

export default BannerHeading;
