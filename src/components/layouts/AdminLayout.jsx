import React from "react";
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <>
      sidebar
      <Outlet />
    </>
  );
};

export default AdminLayout;
