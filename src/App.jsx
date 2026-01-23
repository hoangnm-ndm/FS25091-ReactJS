import React, { Children } from "react";
import "./App.css";
import Header from "./components/Header";

// * JSX và Component.

/**
 * * 1. Khả năng chia nhỏ và tái sử dụng code rất cao.
 *
 */
// ? object props là 1 đối tượng chứa tất cả các properties của component.
function Button(props) {
  console.log(props);
  const variants = {
    primary: {
      padding: "12px 32px",
      backgroundColor: "blue",
    },
    secondary: {
      padding: "12px 24px",
      backgroundColor: "#888",
      border: "1px solid #555",
    },
  };
  return (
    <>
      <button className="btn" style={{ ...variants[props.variant] }}>
        {props.children}
      </button>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <Button variant="primary">Click Me!</Button>
      <Button variant="secondary">Đăng ký ngay</Button>
      <Button variant="primary">Tư vấn</Button>
      <main>
        <section>a</section>
        <section>b</section>
        <section>c</section>
      </main>
      <footer>Copyright by Hoangnm</footer>
    </>
  );
}

export default App;
