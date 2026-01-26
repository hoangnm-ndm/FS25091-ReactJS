import Button from "./Button";
// nhận thêm 1 prop là hàm xoá sản phẩm đó
const ProducItem = ({ product, remove }) => {
  return (
    <div className="product">
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Giá: {product.price}</p>
      <Button variant="primary">Add to cart</Button>
      {/* Đưa hàm xoá sản phẩm đó vào sự kiện onclick */}
      <button onClick={() => remove(product.id)}>Xoa</button>
    </div>
  );
};

export default ProducItem;
