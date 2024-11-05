/* eslint-disable react/prop-types */
const DashboardCard = ({ item }) => {
  const {
    product_image,
    product_title,
    price,

    description,
  } = item;
  return (
    <div>
      {/*  */}
      <div className="card w-10/12 mx-auto card-side bg-base-100 shadow-xl border-gray-400 border-2 p-3 ">
        <figure>
          <img
            className="h-[150px] rounded-lg bg-cover w-[200px]"
            src={product_image}
          />
        </figure>
        <div className="card-body ml-2">
          <h2 className="card-title">{product_title}</h2>
          <p>{description}</p>
          <p>Price: {price}$</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
