import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header>
      <div className="logo">Logo</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          {/* <li>
            <NavLink></NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
