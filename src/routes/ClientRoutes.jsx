import { Link } from "react-router";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";

export const ClientRoutes = [
  { path: "/", element: <HomePage /> },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/products",
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: ":id",
        element: <ProductDetail />,
      },
    ],
  },
];
