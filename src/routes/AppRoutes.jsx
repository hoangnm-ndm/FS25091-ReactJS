import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import LayoutClient from "../components/client/LayoutClient";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import AboutPage from "../pages/client/AboutPage";
import HomePage from "../pages/client/HomePage";
import ProfileMePage from "../pages/client/ProfileMePage";
import CartPage from "../pages/client/CartPage";
import CounterPage from "../pages/client/CounterPage";
import LayoutAdmin from "../components/admin/LayoutAdmin";
import ProductPageManagement from "../pages/admin/ProductPageManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutClient />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about-us", element: <AboutPage /> },
      { path: "/profile-me", element: <ProfileMePage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/count", element: <CounterPage /> },
    ],
  },

  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      { path: "products", element: <ProductPageManagement /> },
      // {path: "products", element: <ProductPageManagement />},
      // {path: "products", element: <ProductPageManagement />},
      // {path: "products", element: <ProductPageManagement />},
      // /admin/products
    ],
  },

  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
