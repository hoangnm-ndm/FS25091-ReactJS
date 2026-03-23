import React, { useContext, useEffect, useState } from "react";
import api from "../../api";
import { CartContext } from "../../context/CartContext";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get("/products");

        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const { addToCart, totalPrice, total } = useContext(CartContext);
  console.log(totalPrice, total);

  return (
    <div>
      <h1>Các sản phẩm bán chạy</h1>

      <div className="grid grid-cols-3">
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.thumbnail} alt="" width={200} />
            <h2>{product.name}</h2>

            <p>Price: ${product.price}</p>
            <button
              className="rounded border-2 border-blue-700 p-2 bg-blue-700 text-white font-bold"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
