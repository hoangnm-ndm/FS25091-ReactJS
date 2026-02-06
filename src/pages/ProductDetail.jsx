import React from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();
  // Lấy ra sản phẩm có id trùng khớp ở trong products đến từ file data.js
  // Hiển thị ra tiêu đề sản phẩm và ảnh sản phẩm ở trong web này
  // Nếu không có sản phẩm có id trùng khớp ở trong products thì in ra màn hình là sản phẩm không tồn tại
  return <div>Chi tiet san pham</div>;
};

export default ProductDetail;
