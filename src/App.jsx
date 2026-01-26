import React, { Children, useState } from "react";
import "./App.css";
import { products } from "../data";
import ProducItem from "./components/ProducItem";

/**
 * In ra màn hình sản phẩm thông qua state
 * Có thêm nút xoá khi ấn nút sẽ xoá sản phẩm đó khỏi màn hình
 */

function App() {
  const [data, setData] = useState(products);
  // Viết một hàm xoá sản phẩm và thay đổi lại state đó
  function removeProduct(id) {
    // xử lý tạo ra mảng mới lọc ra sản phẩm đã bị xoá thông qua id
    const filtered = data.filter((item) => item.id !== id);
    // thay đổi lại state bằng chính mảng mới đó
    setData(filtered);
  }
  return (
    <>
      <div className="productList">
        {data.map((item) => (
          // Đưa hàm xoá sản phẩm vào component con thông qua state
          <ProducItem key={item.id} product={item} remove={removeProduct} />
        ))}
      </div>
    </>
  );
}

export default App;
