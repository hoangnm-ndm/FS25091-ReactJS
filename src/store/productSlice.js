import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Thêm các reducer để xử lý các action liên quan đến sản phẩm
    setProducts() {},
    addProduct() {},
    updateProduct() {},
    deleteProduct() {},
  },
});

export const { setProducts, addProduct, updateProduct, deleteProduct } =
  productSlice.actions;
export default productSlice.reducer;
