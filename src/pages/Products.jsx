import React, { useState } from "react";
import ProducItem from "../components/ProducItem";
import { products } from "../../data.js";
const Products = () => {
  const [data, setData] = useState(products);
  // Viết một hàm xoá sản phẩm và thay đổi lại state đó
  function removeProduct(id) {
    // xử lý tạo ra mảng mới lọc ra sản phẩm đã bị xoá thông qua id
    const filtered = data.filter((item) => item.id !== id);
    // thay đổi lại state bằng chính mảng mới đó
    setData(filtered);
  }
  // * Khi ấn nút ẩn bộ lọc thì sẽ ẩn bộ lọc đi và thay chữ trong nút là Hiển thị bộ lọc
  // * Khi ấn nút hiển thị bộ lọc thì ngược lại với yêu cầu trên
  // * Kiến thức sử dụng: Toán tử, state, render
  const [hidden, setHidden] = useState();
  return (
    <>
      <input type="text" name="" id="" />
      <button onClick={() => setHidden(!hidden)}>
        {hidden ? "Hiển thị" : "Ẩn"} bộ lọc
      </button>
      {!hidden && (
        <div>
          <p>Bộ lọc</p>
          <div>
            <select>
              <option value="">Chon loc</option>
            </select>
          </div>
        </div>
      )}
      <div className="productList">
        {data.map((item) => (
          // Đưa hàm xoá sản phẩm vào component con thông qua state
          <ProducItem key={item.id} product={item} remove={removeProduct} />
        ))}
      </div>
    </>
  );
};

export default Products;
