import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="*"
          element={
            <div
              style={{
                minHeight: "200vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              404
              <Link to="/">Trang chủ</Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter> */}
    <App />
  </React.StrictMode>,
);

// const root = document.getElementById("root");

// const reactRoot = ReactDOM.createRoot(root);

// reactRoot.render(<h1>Hello</h1>);
