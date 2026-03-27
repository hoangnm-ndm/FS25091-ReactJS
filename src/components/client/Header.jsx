import React, { useContext } from "react";
import ItemLink from "../layout/common/ItemLink";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const { logout } = useContext(AuthContext);
  return (
    <header>
      <div className="logo">Logo</div>
      <nav>
        <ul className="flex justify-end items-center">
          <ItemLink to="/">Home</ItemLink>
          <ItemLink to="/about-us">About Us</ItemLink>
          <ItemLink to="/profile-me">Profile</ItemLink>
          <ItemLink to="/register">Register</ItemLink>
          <ItemLink to="/login">Login</ItemLink>
          <button onClick={logout}>Logout now!</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
