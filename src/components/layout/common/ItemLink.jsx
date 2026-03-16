import React from "react";
import { NavLink } from "react-router";

const ItemLink = ({ children, to }) => {
  return (
    <li className="ml-3">
      <NavLink
        to={to}
        className="hover:bg-[#5694d2] hover:text-white px-3 py-2 rounded-xl"
      >
        {children}
      </NavLink>
    </li>
  );
};

export default ItemLink;
