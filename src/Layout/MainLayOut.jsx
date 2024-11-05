import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainLayOut = () => {
  return (
    <div>
      <div className="h-16">
        <Navbar></Navbar>
      </div>
      <div className="min-h-screen py-10 container mx-auto px-12">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
