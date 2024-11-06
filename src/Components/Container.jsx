import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AllCards } from "./AllCards";
const Container = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="flex   w-11/12 mx-auto gap-3">
      <div>
        <div className="border-gray-300 border-2 p-10 card shadow-lg ">
          <div className="flex flex-col gap-3">
            {categories.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `btn btn-outline ${isActive ? "bg-[#9538E2] text-white" : ""}`
                }
                key={item.id}
                to={`/products/${item.category}`}
              >
                {item.category}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div>
        <AllCards></AllCards>
      </div>
    </div>
  );
};

export default Container;
