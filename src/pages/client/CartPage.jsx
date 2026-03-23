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
    </div>
  );
};

export default CartPage;
