import { createBrowserRouter } from "react-router-dom";
import { AllCards } from "../Components/AllCards";
import MainLayOut from "../Layout/MainLayOut";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetails";
import Statistics from "../Pages/Statistics";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../products.json"),
        children: [
          {
            path: "/:category",
            element: <AllCards></AllCards>,
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "productdetails/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("../products.json"),
      },
      {
        path: "dashboard/:product_id",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("../products.json"),
      },
    ],
  },
]);

export { router };
