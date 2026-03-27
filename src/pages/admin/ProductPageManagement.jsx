import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import api from "../../api/index";
import productActionTypes from "../../store/product/productAction";

const ProductPageManagement = () => {
  const { products, loading, error } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch(productActionTypes.setLoading());
        const { data } = await api.get("/products");
        dispatch(productActionTypes.setProducts(data));
      } catch (error) {
        console.log(error);
        dispatch(productActionTypes.setError(error.message));
      }
    };

    fetchProducts();
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({});

  if (loading) {
    return <p>Đang tải...</p>;
  }
  if (error) {
    return <p>Lỗi: {error}</p>;
  }
  return (
    <div>
      <h2>Quản trị sản phẩm</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Price</th>
            <th>Lọc</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <button>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductPageManagement;
