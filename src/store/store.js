import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import productsReducer from "./productSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productsReducer,
    // auth: authReducer,
    // ...các reducer khác nếu có
  },
});

export default store;
