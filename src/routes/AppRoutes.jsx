import React from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router";
import { ClientRoutes } from "./ClientRoutes";
import { AdminRoutes } from "./AdminRoutes";
import ClientLayout from "../components/layouts/ClientLayout";

const router = createBrowserRouter([
  ...ClientRoutes,
  ...AdminRoutes,
  {
    path: "*",
    element: (
      <ClientLayout>
        <div>
          404 <Link to={"/"}>Quay ve trang chu</Link>
        </div>
      </ClientLayout>
    ),
  },
]);
const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
