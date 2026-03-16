import React from "react";
import ItemLink from "./common/ItemLink";

const Header = () => {
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
