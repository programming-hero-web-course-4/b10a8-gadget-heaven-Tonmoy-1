import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainLayOut = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen pb-10 pt-1 container mx-auto px-12">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
