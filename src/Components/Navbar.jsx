import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import cart from "../assets/cart.png";
import heart from "../assets/heart.png";
import { getProducts } from "../Utilitys";

const Navbar = () => {
  const [first, setfirst] = useState([]);

  useEffect(() => {
    const cartProducts = getProducts();
    setfirst(cartProducts);
  }, []);

  console.log(first);

  const productItem = getProducts();

  return (
    <div className="navbar backdrop-blur-xl bg-white/30 px-10 z-50 fixed">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink
              className={({ isActive }) =>
                ` ${isActive ? "text-[#9538E2]" : "hover:text-warning"}`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` ${isActive ? "text-[#9538E2]" : "hover:text-warning"}`
              }
              to="/statistics"
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` ${isActive ? "text-[#9538E2]" : "hover:text-warning"}`
              }
              to="/dashboard"
            >
              Dash Board
            </NavLink>
          </ul>
        </div>
        <NavLink to="/" className=" font-bold  text-gray-500 text-2xl">
          Gadget Heaven
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-bold text-md text-gray-500 px-1 gap-5">
          <NavLink
            className={({ isActive }) =>
              ` ${isActive ? "text-[#9538E2]" : "hover:text-warning"}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              ` ${isActive ? "text-[#9538E2]" : "hover:text-warning"}`
            }
            to="/statistics"
          >
            Statistics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              ` ${isActive ? "text-[#9538E2]" : "hover:text-warning"}`
            }
            to="/dashboard"
          >
            Dash Board
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end mr-6 flex gap-5">
        <div>{productItem.length}</div>

        <div className="relative border-2 border-gray-300 p-1 rounded-full ">
          <img className="h-6 w-6  " src={cart} alt="" />
          <p className="absolute top-[-18px] left-[27px]">0</p>
        </div>
        <div className="relative border-2 border-gray-300 p-1 rounded-full ">
          <img className="h-6 w-6  " src={heart} alt="" />
          <p className="absolute top-[-18px] left-[27px]">0</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
