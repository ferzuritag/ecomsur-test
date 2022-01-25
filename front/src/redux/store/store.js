import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import productsSlice from "../slices/productsSlice";

export const store = configureStore({
  reducer: {
    cartSlice: cartReducer,
    productsSlice: productsSlice,
  },
});
