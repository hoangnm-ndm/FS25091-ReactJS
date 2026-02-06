import React from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router";
import { ClientRoutes } from "./ClientRoutes";
import { AdminRoutes } from "./AdminRoutes";

const router = createBrowserRouter([
  ...ClientRoutes,
  ...AdminRoutes,
  {
    path: "*",
    element: (
      <div>
        404 <Link to={"/"}>Quay ve trang chu</Link>
      </div>
    ),
  },
]);
const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
