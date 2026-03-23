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

  return (
    <div className="section">
      {/* Title */}
      <h1 className="text-[40px] font-display text-text-light dark:text-text-dark">
        🛒 Giỏ hàng của bạn
      </h1>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="card">
          <p className="text-slate-500 dark:text-slate-400">Tổng số lượng</p>
          <p className="text-3xl font-bold text-primary">{totalQuantity} món</p>
        </div>

        <div classname="card">
          <p className="text-slate-500 dark:text-slate-400">Tổng tiền</p>
          <p className="text-3xl font-bold text-green-600">
            {totalPrice.toLocaleString()} vnđ
          </p>
        </div>
      </div>

      {/* Cart Table */}
      <div className="card overflow-hidden p-0">
        <table className="w-full">
          <thead>
            <tr>
              {[
                "STT",
                "Ảnh",
                "Tên sản phẩm",
                "Giá",
                "Số lượng",
                "Thành tiền",
                "Xoá",
              ].map((col) => (
                <th key={col} className="border-b dark:border-slate-700">
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {cart.map((item, index) => (
              <tr
                key={item.id}
                className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <td className="py-3 text-center">{index + 1}</td>

                <td className="py-3 text-center">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="w-20 h-20 object-cover rounded-xl mx-auto"
                  />
                </td>

                <td className="py-3 font-medium text-center">{item.title}</td>

                <td className="py-3 text-primary font-bold text-center">
                  {item.price.toLocaleString()} vnđ
                </td>

                <td className="py-3">
                  <div className="flex justify-center items-center gap-3">
                    <button
                      className="btn btn-soft px-3 py-1"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>

                    <span className="font-semibold">{item.quantity}</span>

                    <button
                      className="btn btn-soft px-3 py-1"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                  </div>
                </td>

                <td className="py-3 font-semibold text-green-600 text-center">
                  {(item.price * item.quantity).toLocaleString()} vnđ
                </td>

                <td className="py-3 text-center">
                  <button
                    className="btn btn-danger px-3 py-1 shadow-none"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            ))}
            {cart.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-8 text-center text-slate-500">
                  Giỏ hàng đang trống 🛍
                </td>
              </tr>
            ) : (
              <tr className="mt-4">
                <td colSpan={7} className="p-4 text-right">
                  <button
                    className="btn btn-danger px-6 py-2 shadow-none"
                    onClick={clearCart}
                  >
                    Xoá tất cả
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartPage;
