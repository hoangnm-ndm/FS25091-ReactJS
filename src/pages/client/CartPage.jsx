import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartPage = () => {
  const {
    cart,
    clearCart,
    totalQuantity,
    totalPrice,
    addToCart,
    removeFromCart,
    decreaseQuantity,
  } = useContext(CartContext);

  console.log(totalPrice, totalQuantity);

  return (
    <div>
      <h1>Giỏ hàng của tôi</h1>
      <p>Tổng số lượng: {totalQuantity} món</p>
      <p>Tổng tiền: {totalPrice} vnđ</p>

      <table className="table-auto w-full">
        <thead>
          <tr className="text-center">
            <th>STT</th>
            <th>Ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                <img src={item.thumbnail} alt="" width={100} />
              </td>
              <td>{item.title}</td>
              <td>{item.price} vnđ</td>
              <td>
                <button
                  className="px-2 py-1 bg-gray-300 rounded"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-300 rounded"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
              </td>
              <td>{item.price * item.quantity} vnđ</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartPage;
