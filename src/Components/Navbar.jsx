import { NavLink, useLocation } from "react-router-dom";
import cart from "../assets/cart.png";
import heart from "../assets/heart.png";
import { getProducts, getWishlistProducts } from "../Utilitys";

const Navbar = () => {
  const cardlenth = getProducts();
  const love = getWishlistProducts();
  const { pathname } = useLocation();
  return (
    <div
      className={` navbar ${
        pathname === "/"
          ? "absolute z-50 px-20 py-8 text-white"
          : "mx-auto w-full backdrop-blur-xl bg-white/30 px-10  z-50"
      }`}
    >
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
              className={({ isActive }) => {
                isActive ? "text-[#e2da37]" : "hover:text-warning";
              }}
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
            <NavLink
              className={({ isActive }) =>
                ` ${isActive ? "text-[#9538E2]" : "hover:text-warning"}`
              }
              to="/Store"
            >
              Shop
            </NavLink>
          </ul>
        </div>
        <NavLink
          to="/"
          className={` font-bold text-2xl
         ${pathname === "/" ? "text-white" : " text-black"}`}
        >
          Gadget Heaven
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className={`menu menu-horizontal font-bold text-md  px-1 gap-5 ${
            pathname === "/" ? "text-white" : ""
          }`}
        >
          <NavLink
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "text-[#e7e736] text-[17]"
                  : "hover:text-warning text-[17]"
              }`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "text-[#9538E2] text-[17]"
                  : "hover:text-warning text-[17]"
              }`
            }
            to="/statistics"
          >
            Statistics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "text-[#9538E2] text-[17]"
                  : "hover:text-warning text-[17]"
              }`
            }
            to="/dashboard"
          >
            DashBoard
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "text-[#9538E2] text-[17]"
                  : "hover:text-warning text-[17]"
              }`
            }
            to="/Store"
          >
            Shop
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "text-[#9538E2] text-[17]"
                  : "hover:text-warning text-[17]"
              }`
            }
            to="/Support"
          >
            Support
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end mr-6 flex gap-5">
        <div></div>

        <div className="relative border-2 border-gray-300 p-1 rounded-full ">
          <img className="h-6 w-6  " src={cart} alt="" />
          <p
            className={`absolute font-extrabold  top-[-18px] left-[27px] ${
              pathname === "/" ? "text-white" : "text-[#9538E2]"
            }`}
          >
            {cardlenth.length}
          </p>
        </div>
        <div className="relative border-2 border-gray-300 p-1 rounded-full ">
          <img className="h-6 w-6  " src={heart} alt="" />
          <p
            className={`absolute font-extrabold  top-[-18px] left-[27px] ${
              pathname === "/" ? "text-white" : "text-[#9538E2]"
            }`}
          >
            {love.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
