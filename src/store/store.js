import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import productsReducer from "./product/productSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
    // auth: authReducer,
    // ...các reducer khác nếu có
  },
});

export default store;
