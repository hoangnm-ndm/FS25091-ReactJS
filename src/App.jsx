import React, { Children } from "react";
import "./App.css";
import { products } from "../data";
import Button from "./components/Button";

/**
 *
 *
 */

function App() {
  console.log(products);
  return (
    <>
      <div className="productList">
        {products.map((item) => (
          <div className="product">
            <img src={item.thumbnail} alt={item.title} />
            <h2>{item.title}</h2>
            <p>Giá: {item.price}</p>
            <Button variant="primary">Add to cart</Button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
