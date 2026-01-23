//* Component là 1 thành phần riêng biệt góp phần xây dựng giao diện trong ứng dụng react: giúp tái sử dụng code, dễ maintain, bảo trì...

function Header() {
  return (
    <header>
      <div className="logo">Logo</div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/about-us">About Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
