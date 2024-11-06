import { createBrowserRouter } from "react-router-dom";
import { AllCards } from "../Components/AllCards";
import MainLayOut from "../Layout/MainLayOut";
import Dashboard from "../Pages/Dashboard";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetails";
import Statistics from "../Pages/Statistics";
import Store from "../Pages/Store";
import SupportPage from "../Pages/SupportPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/products.json"),

        children: [
          {
            path: "/products/:category",
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
        path: "/store",
        element: <Store></Store>,
        loader: () => fetch("/products.json"),
      },

      {
        path: "productdetails/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("/products.json"),
      },
      {
        path: "dashboard/:product_id",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("/products.json"),
      },
      {
        path: "/support",
        element: <SupportPage></SupportPage>,
      },
    ],
  },
]);

export { router };
