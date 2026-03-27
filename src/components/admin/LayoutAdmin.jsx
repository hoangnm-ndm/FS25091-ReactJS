import React from "react";
import HeaderAdmin from "./HeaderAdmin";
import FooterAdmin from "./FooterAdmin";
import { Outlet } from "react-router";

const LayoutAdmin = () => {
  return (
    <div>
      <HeaderAdmin />
      <Outlet />
      <FooterAdmin />
    </div>
  );
};

export default LayoutAdmin;
