import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { products } from "../../data";

const ProductDetail = () => {
  const { id } = useParams();
  const nav = useNavigate();
  // Lấy ra sản phẩm có id trùng khớp ở trong products đến từ file data.js
  const product = products.find((item) => item.id == id);
  // Hiển thị ra tiêu đề sản phẩm và ảnh sản phẩm ở trong web này
  // Nếu không có sản phẩm không có id trùng khớp ở trong products thì in ra màn hình là sản phẩm không tồn tại
  useEffect(() => {
    if (!product) {
      setTimeout(() => {
        nav("/products");
      }, 3000);
    }
  }, [id]);
  if (!product)
    return (
      <div>
        <p>Sản phẩm không tồn tại</p>
      </div>
    );

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.images} alt="" />
    </div>
  );
};

export default ProductDetail;
