import { createSlice } from "@reduxjs/toolkit";
import { set } from "zod";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Thêm các reducer để xử lý các action liên quan đến sản phẩm
    setProducts(state, action) {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    },
    addProduct(state, action) {
      state.products.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    updateProduct(state, action) {
      state.products = state.products.map((prod) =>
        prod.id === action.payload.id ? action.payload : prod
      );
      state.loading = false;
      state.error = null;
    },
    deleteProduct(state, action) {
      state.products = state.products.filter(
        (prod) => prod.id !== action.payload
      );
      state.loading = false;
      state.error = null;
    },
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setError(state, action) {
      state.loading = false;
      state.error = action.payload || "An error occurred";
    },
  },
});

export const {
  setProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  setLoading,
  setError,
} = productSlice.actions;
export default productSlice.reducer;
