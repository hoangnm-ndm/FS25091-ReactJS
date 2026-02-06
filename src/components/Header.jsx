//* Component là 1 thành phần riêng biệt góp phần xây dựng giao diện trong ứng dụng react: giúp tái sử dụng code, dễ maintain, bảo trì...

import { Link, useLocation } from "react-router";

function Header() {
  const location = useLocation();
  console.log(location);
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="logo">Logo</div>
      <nav>
        <ul style={{ display: "flex", gap: 6, listStyle: "none" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Shop</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
      <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
        {!location.pathname.includes("auth") && (
          <>
            <Link to={"/auth/register"}>Đăng ký</Link> /{" "}
            <Link to={"/auth/login"}>Đăng nhập</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
